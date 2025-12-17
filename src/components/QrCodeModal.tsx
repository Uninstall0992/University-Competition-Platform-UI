import { useState } from "react";
import QRCode from "react-qr-code";
import { QrCode } from "lucide-react";

interface QrCodeModalProps {
  url: string;
  logo: string;
}

export function QrCodeModal({ url, logo }: QrCodeModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 px-4 py-2 rounded-lg backdrop-blur-md border bg-white/10 border-white/30 text-white hover:bg-white/20 transition-all"
      >
        <QrCode className="w-5 h-5" />
        <span>Mã QR</span>
      </button>

      {isOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 100,
          }}
          onClick={() => setIsOpen(false)}
        >
          <div
            style={{
              backgroundColor: "white",
              padding: "20px",
              borderRadius: "8px",
              position: "relative",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ position: "relative" }}>
              <QRCode value={url} size={256} level="H" />
              <img
                src={logo}
                width="80"
                height="80"
                alt="logo"
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  padding: "4px",
                  borderRadius: "4px",
                }}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}