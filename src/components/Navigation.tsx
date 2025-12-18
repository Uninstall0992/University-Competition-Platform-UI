import { Link } from "react-router-dom";

export function Navigation() {
  return (
    <nav className="sticky top-0 z-50 bg-white/10 backdrop-blur-xl border-b border-white/20 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center">
          <Link
            to="/"
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <div className="w-12 h-12">
              <img
                src="https://i.postimg.cc/J04DVwmn/cropped-logonhom-removebg-preview.png"
                alt="Logo Nhóm 01"
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-white text-[18px]">
              Nhóm 01 - 8 con báo Độc Nhất Vô Nhị lên đỉnh
              OlympiUS
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center gap-8 ml-12">
            <Link
              to="/"
              className="text-white/90 hover:text-white transition-colors"
            >
              Trang chủ
            </Link>
            <Link
              to="/gioi-thieu"
              className="text-white/90 hover:text-white transition-colors"
            >
              Giới thiệu
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}