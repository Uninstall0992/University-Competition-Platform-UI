import { useEffect, useState, useMemo } from "react";
import { useLocation } from "react-router-dom";

export type Range = [number, number];

export type Distribution =
  | "full"
  | "top"
  | "bottom"
  | "left"
  | "right"
  | "top-left"
  | "top-right"
  | "bottom-left"
  | "bottom-right"
  | "center"
  | "topmost";

interface GlowEffectProps {
  distribution?: Distribution;
  opacity?: number;
  hue?: number;
  seed?: string;
}

// Simple seedable random number generator
class SeededRandom {
  private seed: number;

  constructor(seed: string) {
    this.seed = this.xmur3(seed)();
  }

  // Hash function
  private xmur3(str: string): () => number {
    let h = 1779033703 ^ str.length;
    for (let i = 0; i < str.length; i++) {
      h = Math.imul(h ^ str.charCodeAt(i), 3432918353);
      h = (h << 13) | (h >>> 19);
    }
    return () => {
      h = Math.imul(h ^ (h >>> 16), 2246822507);
      h = Math.imul(h ^ (h >>> 13), 3266489909);
      return (h ^= h >>> 16) >>> 0;
    };
  }

  // Generate random number between 0 and 1
  public next(): number {
    this.seed = (this.seed * 9301 + 49297) % 233280;
    return this.seed / 233280;
  }
}

const overflow = 0.3;
const disturb = 0.3;
const disturbChance = 0.3;

function distributionToLimits(distribution: Distribution) {
  const min = -0.2;
  const max = 1.2;
  let x: Range = [min, max];
  let y: Range = [min, max];

  function intersection(a: Range, b: Range): Range {
    return [Math.max(a[0], b[0]), Math.min(a[1], b[1])];
  }

  const limits = distribution.split("-");

  for (const limit of limits) {
    switch (limit) {
      case "topmost":
        y = intersection(y, [-0.5, 0]);
        break;
      case "top":
        y = intersection(y, [min, 0.6]);
        break;
      case "bottom":
        y = intersection(y, [0.4, max]);
        break;
      case "left":
        x = intersection(x, [min, 0.6]);
        break;
      case "right":
        x = intersection(x, [0.4, max]);
        break;
      case "xcenter":
        x = intersection(x, [0.25, 0.75]);
        break;
      case "ycenter":
        y = intersection(y, [0.25, 0.75]);
        break;
      case "center":
        x = intersection(x, [0.25, 0.75]);
        y = intersection(y, [0.25, 0.75]);
        break;
      case "full":
        x = intersection(x, [0, 1]);
        y = intersection(y, [0, 1]);
        break;
      default:
        break;
    }
  }

  return { x, y };
}

function usePolygon(
  number: number,
  distribution: Distribution,
  seed: string,
  routeKey: string
) {
  const [points, setPoints] = useState<Range[]>([]);
  const [targetPoints, setTargetPoints] = useState<Range[]>([]);

  const generatePoints = useMemo(() => {
    return (): Range[] => {
      const limits = distributionToLimits(distribution);
      const rng = new SeededRandom(`${seed}-${routeKey}-${Date.now()}`);

      function randomBetween([a, b]: Range): number {
        return rng.next() * (b - a) + a;
      }

      function applyOverflow(random: number, overflow: number): number {
        random = random * (1 + overflow * 2) - overflow;
        return rng.next() < disturbChance
          ? random + (rng.next() - 0.5) * disturb
          : random;
      }

      return Array.from({ length: number }).map(() => [
        applyOverflow(randomBetween(limits.x), overflow),
        applyOverflow(randomBetween(limits.y), overflow),
      ]);
    };
  }, [number, distribution, seed, routeKey]);

  // Initialize points
  useEffect(() => {
    const initial = generatePoints();
    setPoints(initial);
    setTargetPoints(initial);
  }, [generatePoints]);

  // Continuous animation
  useEffect(() => {
    let animationFrame: number;
    let lastTime = Date.now();
    const updateInterval = 3000; // Generate new target every 3 seconds
    const smoothness = 0.02; // Lower = smoother, slower

    const animate = () => {
      const now = Date.now();
      
      // Generate new target points periodically
      if (now - lastTime > updateInterval) {
        setTargetPoints(generatePoints());
        lastTime = now;
      }

      // Smoothly interpolate current points towards target points
      setPoints((currentPoints) => {
        if (targetPoints.length === 0) return currentPoints;
        
        return currentPoints.map((point, i) => {
          const target = targetPoints[i] || point;
          return [
            point[0] + (target[0] - point[0]) * smoothness,
            point[1] + (target[1] - point[1]) * smoothness,
          ] as Range;
        });
      });

      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [targetPoints, generatePoints]);

  const poly = useMemo(() => {
    return points.map(([x, y]) => `${x * 100}% ${y * 100}%`).join(", ");
  }, [points]);

  return poly;
}

export function GlowEffect({
  distribution = "full",
  opacity = 0.4,
  hue = 0,
  seed = "default",
}: GlowEffectProps) {
  const location = useLocation();
  const routeKey = location.pathname;

  const poly1 = usePolygon(10, distribution, seed, routeKey);
  const poly2 = usePolygon(6, distribution, seed, routeKey);
  const poly3 = usePolygon(3, distribution, seed, routeKey);

  return (
    <div
      className="fixed inset-0 z-0 pointer-events-none overflow-hidden transform-gpu will-change-transform"
      style={{ filter: `blur(70px) hue-rotate(${hue}deg)` }}
      aria-hidden="true"
    >
      <div
        className="absolute inset-0 bg-gradient-to-r from-[#18549a] to-[#12238b]"
        style={{
          clipPath: `polygon(${poly1})`,
          opacity: opacity,
          aspectRatio: "16 / 9",
          willChange: "clip-path",
        }}
      />
      <div
        className="absolute inset-0 bg-gradient-to-l from-[#18549a] to-[#12238b]"
        style={{
          clipPath: `polygon(${poly2})`,
          opacity: opacity,
          aspectRatio: "16 / 9",
          willChange: "clip-path",
        }}
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-[#01b6d1] to-[#aaf7ff]"
        style={{
          clipPath: `polygon(${poly3})`,
          opacity: 0.2,
          aspectRatio: "16 / 9",
          willChange: "clip-path",
        }}
      />
    </div>
  );
}
