import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { CompetitionCard } from "./CompetitionCard";
import {
  Search,
  Sparkles,
  Users,
  Lightbulb,
  Target,
  Calendar,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import { useState } from "react";
import { Card, CardContent } from "./ui/card";
import TermExplanation from './TermExplanation';

const mockPosts = [
  {
    id: "1",
    title: "Khởi động dự án website giới thiệu nhóm",
    description:
      "Nhóm 01 chính thức bắt đầu hành trình xây dựng website giới thiệu với công nghệ. Mục tiêu là tạo ra một nền tảng thể hiện tinh thần đồng đội và sự sáng tạo của các thành viên.",
    tags: ["Lập trình", "React", "Team Work"],
    thumbnail: "https://i.postimg.cc/J0fsfZyc/skibi.png",
    author: "Nhóm 01",
    date: "27/11/2025",
    location: "TP. Hồ Chí Minh",
    featured: false,
  },
  {
    id: "2",
    title: "T6 - Thu hoạch game xây cầu",
    description:
      "Hoạt động teamwork mô phỏng dự án kỹ thuật xây dựng dân dụng, yêu cầu các thành viên phải phối hợp nhịp nhàng từ khâu nghiên cứu vật liệu đến triển khai thực địa. Dự án tập trung vào việc tối ưu hóa khả năng chịu tải của các cấu kiện giấy báo thông qua các nguyên lý vật lý, đồng thời rèn luyện kỹ năng quản lý nguồn lực dưới áp lực thời gian nghiêm ngặt.",
    tags: ["Thiết kế", "Teamwork", "Minigame"],
    thumbnail: "https://i.postimg.cc/xTDnRTdN/588846288-2019114095601277-1076453571541524386-n.jpg",
    author: "Nhóm 01",
    date: "25/11/2025",
    location: "TP. Hồ Chí Minh",
    featured: false,
  },
  {
    id: "3",
    title: "Sprint Planning - Phân công nhiệm vụ nhóm",
    description:
      "Buổi họp Sprint Planning đầu tiên của nhóm, thực hiện phân công vai trò rõ ràng. Áp dụng phương pháp quy trình làm việc.",
    tags: ["Agile", "Team Management", "Planning"],
    thumbnail: "https://i.postimg.cc/7Yzf2745/nhommm.jpg",
    author: "Nhóm 01",
    date: "20/11/2025",
    location: "TP. Hồ Chí Minh",
    featured: false,
  },
  {
    id: "4",
    title: "Giới thiệu phim Lằn Ranh Hạnh Phúc của Nhóm 01",
    description:
      `Nhóm 01 tự hào công bố dự án phim ngắn đặc biệt '8 Con Báo - Hành Trình Chinh Phục' - một sản phẩm sáng tạo mới sắp chính thức ra mắt vào cuối tháng 12/2025!`,
    tags: ["Phim", "Sản phẩm", "Creative"],
    thumbnail: "https://i.postimg.cc/jqM6BPjY/unnamed-(10).jpg",
    author: "Nhóm 01",
    date: "20/12/2025",
    location: "TP. Hồ Chí Minh",
    featured: true,
  },
  {
    id: "5",
    title: "Poster nhóm - Ý nghĩa",
    description:
      "Poster này là một tác phẩm mang đậm phong cách Dadaism, sử dụng các yếu tố thị giác mạnh mẽ để truyền tải thông điệp sâu sắc về bình đẳng giới và chấm dứt bạo lực gia đình. Sự kết hợp giữa nghệ thuật, ngôn ngữ và biểu tượng tạo nên một tổng thể vừa phá cách, vừa giàu ý nghĩa.",
    tags: ["Hackathon", "Lập trình", "Team Building"],
    thumbnail:
      "https://i.postimg.cc/c4jq1LTd/unnamed-(8).webp",
    author: "Nhóm 01",
    date: "15/11/2025",
    location: "TP. Hồ Chí Minh",
    featured: true,
  },
  {
    id: "6",
    title: "Team bonding - Gắn kết tinh thần đồng đội",
    description:
      "Hoạt động team bonding ngoài trời giúp các thành viên hiểu nhau hơn, tăng cường sự gắn kết và tinh thần làm việc nhóm. Những khoảnh khắc vui vẻ bên ngoài công việc cũng quan trọng không kém!",
    tags: ["Team Building", "Activities", "Fun"],
    thumbnail:
      "https://images.unsplash.com/photo-1511632765486-a01980e01a18?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    author: "Nhóm 01",
    date: "10/11/2025",
    location: "TP. Hồ Chí Minh",
    featured: false,
  },
  {
    id: "7",
    title: "Biên bản thành lập nhóm",
    description:
      "Biên bản chính thức về việc thành lập Nhóm 01, ghi nhận đầy đủ thông tin về các thành viên, vai trò phân công và cam kết làm việc của nhóm.",
    tags: ["Tài liệu", "Nhóm", "Chính thức"],
    thumbnail:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    author: "Nhóm 01",
    date: "01/11/2025",
    location: "TP. Hồ Chí Minh",
    featured: true,
  },
  {
    id: "8",
    title: "T8 - Thu hoạch game thả trứng",
    description:
      "Hoạt động team building sáng tạo với thử thách thiết kế bộ đỡ trứng. 8 con báo đã thể hiện tư duy sáng tạo, kỹ năng làm việc nhóm và tinh thần cạnh tranh lành mạnh trong một trò chơi đầy thú vị!",
    tags: ["Team Building", "Game", "Creative"],
    thumbnail:
      "https://i.postimg.cc/Dw0w8fyH/IMG-20251206-143536.jpg",
    author: "Nhóm 01",
    date: "05/12/2025",
    location: "TP. Hồ Chí Minh",
    featured: false,
  },
];

const announcements = [
  {
    id: 1,
    title: "Demo Day - Trình bày dự án",
    date: "15/12/2025",
    type: "event",
  },
  {
    id: 2,
    title: "Họp nhóm tuần này",
    date: "30/11/2025",
    type: "meeting",
  },
  {
    id: 3,
    title: "Website chính thức ra mắt",
    date: "28/11/2025",
    type: "news",
  },
];

export function HomePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [topicFilter, setTopicFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");

  const filteredPosts = mockPosts.filter((post) => {
    const matchesSearch =
      post.title
        .toLowerCase()
        .includes(searchQuery.toLowerCase()) ||
      post.description
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
    const matchesTopic =
      topicFilter === "all" ||
      post.tags.some((tag) =>
        tag.toLowerCase().includes(topicFilter.toLowerCase()),
      );
    return matchesSearch && matchesTopic;
  });

  const featuredPosts = filteredPosts.filter(
    (post) => post.featured,
  );
  const allPosts = filteredPosts;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="text-white py-16 relative"
        style={{
          backgroundImage:
            'url("https://i.postimg.cc/kXSBb8CV/nhomm.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center 36%",
        }}
      >
        <div className="absolute inset-0 bg-black/30 backdrop-blur-[1.5px]" />
        <div className="relative max-w-7xl mx-auto px-6 py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 bg-black/20 backdrop-blur-xl p-8 border border-white/20">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-md border border-white/30">
                <Sparkles className="w-4 h-4" />
                <span>Chúng mình là Nhóm 1</span>
              </div>
              <h1 className="text-white">
                Hành trình chinh phục đỉnh <TermExplanation termKey="olympiusTerm">OlympiUS</TermExplanation>!
              </h1>
              <p className="text-blue-100 font-normal text-[16px] no-underline">
                Chào mừng đến với trang web của <TermExplanation termKey="team01Term">Nhóm 01</TermExplanation>! Chúng
                mình là 8 thành viên đầy nhiệt huyết, cùng nhau
                xây dựng dự án, học hỏi và phát triển. Khám phá
                hành trình của chúng mình qua các bài đăng về
                hoạt động, sự kiện và những dấu ấn đáng nhớ.
              </p>
              <div className="flex gap-4">
                <Button
                  size="lg"
                  className="bg-white/30 backdrop-blur-md text-white border-white/40 hover:bg-white/40"
                  onClick={() => {
                    const element =
                      document.getElementById("featured-posts");
                    element?.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }}
                >
                  Xem hoạt động
                </Button>
                <Link to="/gioi-thieu">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white/40 bg-white/10 backdrop-blur-md text-white hover:bg-white/20"
                  >
                    Giới thiệu nhóm
                  </Button>
                </Link>
              </div>
            </div>

            {/* Team Info Panel */}
            <div className="bg-white/10 backdrop-blur-xl p-8 border border-white/30 shadow-2xl">
              <h3 className="text-white mb-6">
                Nhóm 01 - 8 thành viên
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-white/90">
                  <Users className="w-5 h-5 text-blue-300" />
                  <span>8 thành viên</span>
                </div>
                <div className="flex items-center gap-3 text-white/90">
                  <Target className="w-5 h-5 text-green-300" />
                  <span>3 Website Developers</span>
                </div>
                <div className="flex items-center gap-3 text-white/90">
                  <Lightbulb className="w-5 h-5 text-yellow-300" />
                  <span>Áp dụng phương pháp Agile/Scrum</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Team Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-white mb-4">Về chúng mình</h2>
            <p className="text-white/80 max-w-3xl mx-auto">
              Nhóm 01 được thành lập với mục tiêu học tập và
              phát triển kỹ năng làm việc nhóm trong môn học
              Công nghệ Phần mềm. Với tinh thần "8 con báo Độc
              Nhất Vô Nhị", chúng mình luôn nỗ lực hết mình
              trong mọi dự án.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 backdrop-blur-xl p-8 border border-white/20 hover:border-white/40 transition-all shadow-xl">
              <div className="bg-blue-500/30 backdrop-blur-md w-12 h-12 flex items-center justify-center mb-4 border border-blue-400/30">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white mb-3">
                Đội ngũ đa dạng
              </h3>
              <p className="text-white/80">
                Kết hợp giữa các vị trí Product Owner, Scrum
                Master, Frontend và Backend Developers để tạo
                nên sức mạnh tổng hợp.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-500/20 to-green-600/20 backdrop-blur-xl p-8 border border-white/20 hover:border-white/40 transition-all shadow-xl">
              <div className="bg-green-500/30 backdrop-blur-md w-12 h-12 flex items-center justify-center mb-4 border border-green-400/30">
                <Lightbulb className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white mb-3">
                Sáng tạo & Đổi mới
              </h3>
              <p className="text-white/80">
                Luôn tìm kiếm và áp dụng những công nghệ, xu
                hướng thiết kế mới nhất vào dự án của nhóm.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 backdrop-blur-xl p-8 border border-white/20 hover:border-white/40 transition-all shadow-xl">
              <div className="bg-purple-500/30 backdrop-blur-md w-12 h-12 flex items-center justify-center mb-4 border border-purple-400/30">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white mb-3">
                Mục tiêu rõ ràng
              </h3>
              <p className="text-white/80">
                Hoàn thành xuất sắc môn học và tạo ra sản phẩm
                chất lượng, đồng thời phát triển kỹ năng làm
                việc nhóm.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Announcements Section */}
      <section className="py-12 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-start gap-8">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-amber-500/30 backdrop-blur-md w-10 h-10 flex items-center justify-center border border-amber-400/30">
                  <Calendar className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-white">
                  Lịch trình sắp tới
                </h2>
              </div>
              <div className="grid md:grid-cols-3 gap-4">
                {announcements.map((announcement) => (
                  <Card
                    key={announcement.id}
                    className="border-white/30 bg-white/10 backdrop-blur-xl hover:bg-white/15 hover:shadow-2xl transition-all"
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-3">
                        <p className="text-white">
                          {announcement.date}
                        </p>
                        <span
                          className={`px-2 py-1 text-xs backdrop-blur-md border ${
                            announcement.type === "meeting"
                              ? "bg-blue-500/30 text-blue-100 border-blue-400/30"
                              : announcement.type === "event"
                                ? "bg-purple-500/30 text-purple-100 border-purple-400/30"
                                : "bg-green-500/30 text-green-100 border-green-400/30"
                          }`}
                        >
                          {announcement.type === "meeting"
                            ? "Họp nhóm"
                            : announcement.type === "event"
                              ? "Sự kiện"
                              : "Tin tức"}
                        </span>
                      </div>
                      <h3 className="text-white text-sm">
                        {announcement.title}
                      </h3>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts Section */}
      <section className="py-20 relative" id="featured-posts">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12 text-center">
            <h2 className="text-white mb-4">
              Sản phẩm nổi bật
            </h2>
            <p className="text-white/80">
              Những khoảnh khắc đáng nhớ trong hành trình của
              Nhóm 01
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredPosts.map((post) => (
              <CompetitionCard key={post.id} {...post} />
            ))}
          </div>

          {featuredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-white/70">
                Chưa có hoạt động nổi bật
              </p>
            </div>
          )}
        </div>
      </section>

      {/* All Posts Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12 text-center">
            <h2 className="text-white mb-4">Tất cả bài đăng</h2>
            <p className="text-white/80">
              Khám phá toàn bộ hoạt động và sự kiện của nhóm
            </p>
          </div>

          {/* Filter and Search Bar */}
          <div className="bg-white/10 backdrop-blur-xl shadow-xl p-6 mb-8 border border-white/30">
            <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
              {/* Left Side: Two Filters */}
              <div className="flex gap-3">
                <Select
                  value={topicFilter}
                  onValueChange={setTopicFilter}
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Chủ đề" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">
                      Tất cả chủ đề
                    </SelectItem>
                    <SelectItem value="phim">
                      Phim
                    </SelectItem>
                    <SelectItem value="sản phẩm">
                      Sản phẩm
                    </SelectItem>
                    <SelectItem value="thiết kế">
                      Thiết kế
                    </SelectItem>
                  </SelectContent>
                </Select>

                <Select
                  value={typeFilter}
                  onValueChange={setTypeFilter}
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Loại hoạt động" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">
                      Tất cả loại
                    </SelectItem>
                    <SelectItem value="họp nhóm">
                      Họp nhóm
                    </SelectItem>
                    <SelectItem value="sự kiện">
                      Sự kiện
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Right Side: Search Box */}
              <div className="w-full md:w-auto md:flex-1 md:max-w-md">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/70" />
                  <Input
                    placeholder="Tìm kiếm bài đăng…"
                    className="pl-10"
                    value={searchQuery}
                    onChange={(e) =>
                      setSearchQuery(e.target.value)
                    }
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Post Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allPosts.map((post) => (
              <CompetitionCard key={post.id} {...post} />
            ))}
          </div>

          {allPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-white/70">
                Không tìm thấy bài đăng phù hợp
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative text-white py-20 overflow-hidden">
        <div
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage:
              'url("https://i.postimg.cc/BQFXKD3f/nhom.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center 60%",
            backgroundRepeat: "no-repeat",
            filter: "blur(2px)",
          }}
        />
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2
              className="text-white mb-4 text-[24px]"
              style={{
                textShadow: "0 2px 6px rgba(0,0,0,0.9)",
              }}
            >
              Liên hệ với Nhóm 01
            </h2>
            <p
              className="text-blue-100 max-w-2xl mx-auto text-[20px] no-underline not-italic"
              style={{
                textShadow: "0 2px 6px rgba(0,0,0,0.8)",
              }}
            >
              Bạn muốn biết thêm về nhóm hoặc hợp tác? Hãy liên
              hệ với chúng mình!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20 transition-all">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="bg-white/20 w-14 h-14 rounded-full flex items-center justify-center">
                    <MapPin className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-white mb-2 text-[20px]">
                      Địa chỉ
                    </h3>
                    <p className="text-blue-100 text-sm">
                      Trường Đại học Khoa học Tự nhiên - ĐHQG
                      TP.HCM
                      <br />
                      227 Nguyễn Văn Cừ, Phường 4, Quận 5,
                      TP.HCM
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20 transition-all">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="bg-white/20 w-14 h-14 rounded-full flex items-center justify-center">
                    <Phone className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-white mb-2 text-[20px]">
                      Điện thoại
                    </h3>
                    <p className="text-blue-100 text-sm">
                       028.6288.4499
                    </p>
                    {/* Social Media Icons */}
                    <div className="flex items-center justify-center gap-3 mt-4">
                      <a
                        href="https://www.linkedin.com/in/khanhng-q19"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:opacity-80 transition-opacity"
                      >
                        <img
                          src="https://i.postimg.cc/1R63qnHT/okok.webp"
                          alt="LinkedIn"
                          className="w-8 h-8 rounded"
                        />
                      </a>
                      <a
                        href="https://www.facebook.com/profile.php?id=61584343766554"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:opacity-80 transition-opacity"
                      >
                        <img
                          src="https://i.postimg.cc/zDTcW8RR/fb.png"
                          alt="Facebook"
                          className="w-8 h-8 rounded"
                        />
                      </a>
                      <a
                        href="https://discord.gg/kexcKMecqq"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:opacity-80 transition-opacity"
                      >
                        <img
                          src="https://i.postimg.cc/vm6zstr0/dis.webp"
                          alt="Discord"
                          className="w-8 h-8 rounded"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20 transition-all">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="bg-white/20 w-14 h-14 rounded-full flex items-center justify-center">
                    <Mail className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-white mb-2 text-[20px]">
                      Email
                    </h3>
                    <p className="text-blue-100 text-sm">
                      nhom01@meomaybe.com
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}