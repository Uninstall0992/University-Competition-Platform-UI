import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { HomePage } from "./components/HomePage";
import { AboutPage } from "./components/AboutPage";
import { DetailPage } from "./components/DetailPage";
import { GlowEffect } from "./components/GlowEffect";
import "./styles/globals.css";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-br from-purple-500 via-indigo-500 to-blue-500 relative overflow-hidden">
        {/* Polygonal Glow Effect */}
        <GlowEffect distribution="full" opacity={0.5} hue={0} seed="nhom01" />

        {/* Animated background blobs */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-96 h-96 bg-purple-300/30 rounded-full filter blur-3xl animate-blob"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-300/30 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-indigo-300/30 rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        {/* Fixed Background Logo */}
        <div
          className="fixed inset-0 z-0 pointer-events-none"
          style={{
            backgroundImage:
              "url(https://i.postimg.cc/gkbBp0CM/lgoo-removebg-preview.png)",
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            opacity: 0.05,
          }}
        />

        {/* Content with higher z-index */}
        <div className="relative z-10">
          <Navigation />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/gioi-thieu" element={<AboutPage />} />
            <Route
              path="/bai-dang/:id"
              element={<DetailPage />}
            />
            <Route
              path="*"
              element={<Navigate to="/" replace />}
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}