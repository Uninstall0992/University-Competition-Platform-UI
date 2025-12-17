import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import { Input } from "./ui/input";
import { useState } from "react";

export function Navigation() {
  const [searchQuery, setSearchQuery] = useState("");

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

          {/* Search bar */}
          <div className="flex items-center gap-3 ml-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/70" />
              <Input
                type="text"
                placeholder="Tìm kiếm bài đăng..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9 pr-3 py-2 w-64 h-9 bg-white/10 backdrop-blur-md border-white/30 text-white placeholder:text-white/60"
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}