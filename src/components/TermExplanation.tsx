import React from 'react';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';

interface TermExplanationProps {
  termKey: string;
  children: React.ReactNode;
}

export const terminologies: Record<string, { title: string; description: string; citation?: string }> = {
  "olympiusTerm": {
    "title": "OlympiUS",
    "description": "Là sự kết hợp của từ Olympia và US (University of Natural Science). Biểu tượng cho hành trình chinh phục đỉnh cao của Nhóm 01.",
    "citation": "Tên gọi được đề xuất bởi Trung Hiếu."
  },
  "agileScrumTerm": {
    "title": "Agile/Scrum",
    "description": "Agile là phương pháp phát triển lặp đi lặp lại, và Scrum là framework để triển khai Agile. Chúng tập trung vào việc cung cấp giá trị dần dần và thích ứng với thay đổi."
  },
  "glassmorphismTerm": {
    "title": "Glassmorphism",
    "description": "Glassmorphism là một phong cách thiết kế giao diện (UI) hiện đại nổi bật với hiệu ứng kính mờ (frosted glass), mang đến cảm giác trong suốt – mờ ảo – sang trọng như thể người dùng đang nhìn xuyên qua một lớp kính thật sự.",
    "citation": "https://www.uiviet.com/post/glassmorphism-xu-huong-thiet-ke-giao-dien-noi-bat-2025."
  },
  "team01Term": {
    "title": "Nhóm 01",
    "description": "Nhóm 01 là một đội gồm 8 thành viên (1 Product Owner + 2 Scrum Masters + 5 Developers), được thành lập để học tập và phát triển kỹ năng làm việc nhóm trong môn học Kỹ năng mềm với slogan '8 con báo độc nhất vô nhị'."
  },
  "scrummaster": {
    "title": "Scrum Master",
    "description": "Scrum Master là người hướng dẫn và hỗ trợ team áp dụng Scrum framework, loại bỏ rào cản và tạo điều kiện cho team làm việc hiệu quả. Nhóm 01 có 2 Scrum Masters."
  },
  "dadaism": {
    "title": "Dadaism",
    "description": "Dada là một phong trào nghệ thuật đi ngược lại những giá trị xã hội, chính trị và văn hóa đương thời. Nó khởi nguồn từ một nhóm các nghệ sĩ lưu vong đến Thuỵ Sĩ những năm đầu thế kỉ 20 để phản kháng nổi lên với bản tuyên ngôn chống lại chính quyền.",
    "citation": "https://vietcetera.com/vn/dada-du-ngay-tho-de-cam-thu-nghe-thuat."
  },
  "reactTerm": {
    "title": "React",
    "description": "React là một thư viện JavaScript mã nguồn mở được phát triển bởi Meta (Facebook) để xây dựng giao diện người dùng. React 18 với TypeScript được Nhóm 01 sử dụng trong dự án website."
  },
  "typescriptTerm": {
    "title": "TypeScript",
    "description": "TypeScript là ngôn ngữ lập trình mã nguồn mở được phát triển bởi Microsoft, mở rộng JavaScript bằng cách thêm kiểu dữ liệu tĩnh. Giúp phát hiện lỗi sớm và cải thiện chất lượng code."
  },
  "tailwindTerm": {
    "title": "Tailwind CSS",
    "description": "Tailwind CSS là một utility-first CSS framework giúp xây dựng giao diện nhanh chóng. Nhóm 01 sử dụng Tailwind CSS v4.0 để tạo UI với hiệu ứng glassmorphism."
  },
  "sprintPlanningTerm": {
    "title": "Sprint Planning",
    "description": "Sprint Planning là buổi họp đầu mỗi Sprint trong Scrum, nơi team xác định công việc sẽ hoàn thành trong Sprint đó. Nhóm 01 tổ chức Sprint Planning để phân công nhiệm vụ rõ ràng cho từng thành viên."
  },
  "codeReviewTerm": {
    "title": "Code Review",
    "description": "Code Review là quá trình kiểm tra code của các thành viên khác để đảm bảo chất lượng, tìm lỗi và chia sẻ kiến thức. Trong Definition of Done của Nhóm 01, mỗi đoạn code phải được review bởi ít nhất 1 người."
  },
  "workshopTerm": {
    "title": "Workshop",
    "description": "Workshop là buổi học tập, thực hành và chia sẻ kiến thức nội bộ. Nhóm 01 đã tổ chức workshop về thiết kế UI/UX với glassmorphism để cùng nhau nâng cao kỹ năng."
  },
  "hackathonTerm": {
    "title": "Hackathon",
    "description": "Hackathon là sự kiện lập trình marathon, nơi các đội thi đấu để tạo ra sản phẩm công nghệ trong thời gian ngắn. Nhóm 01 tham gia hackathon để rèn luyện kỹ năng làm việc nhóm và giải quyết vấn đề."
  },
  "teamBondingTerm": {
    "title": "Team Bonding",
    "description": "Team Bonding là các hoạt động gắn kết nhóm ngoài công việc, giúp các thành viên hiểu nhau hơn và tăng cường tinh thần đồng đội. Những khoảnh khắc vui vẻ này rất quan trọng cho sức khỏe tinh thần của nhóm."
  },
  "uiuxTerm": {
    "title": "UI/UX",
    "description": "UI (User Interface) là giao diện người dùng, UX (User Experience) là trải nghiệm người dùng. Nhóm 01 chú trọng thiết kế UI/UX hiện đại với glassmorphism và responsive design."
  },
  "frontendTerm": {
    "title": "Frontend",
    "description": "Frontend là phần giao diện người dùng của ứng dụng web, bao gồm những gì người dùng nhìn thấy và tương tác. Nhóm 01 có 2 Frontend Developers làm việc với React, TypeScript và UI/UX."
  },
  "backendTerm": {
    "title": "Backend",
    "description": "Backend là phần máy chủ của ứng dụng, xử lý logic nghiệp vụ, database và API. Nhóm 01 có 2 Backend Developers chịu trách nhiệm về API, Database và Server."
  },
  "productOwnerTerm": {
    "title": "Product Owner",
    "description": "Product Owner (PO) là người xác định product vision và roadmap, ưu tiên các tính năng trong backlog, đảm bảo sản phẩm đáp ứng nhu cầu người dùng. Nhóm 01 có 1 PO ra quyết định cuối cùng về scope."
  },
  "developerTerm": {
    "title": "Developer",
    "description": "Developer (Dev) là lập trình viên, người xây dựng và phát triển sản phẩm. Nhóm 01 có 5 Developers: 2 Frontend, 2 Backend và 1 Fullstack Developer."
  },
  "hcmusTerm": {
    "title": "HCMUS",
    "description": "HCMUS (Ho Chi Minh City University of Science) - Trường Đại học Khoa học Tự nhiên, Đại học Quốc gia TP.HCM. Nơi học tập và hình thành nên Nhóm 01."
  },
  "lanRanhHanhPhucTerm": {
    "title": "Lằn Ranh Hạnh Phúc",
    "description": "Tên phim ngắn (7 phút) của Nhóm 01, thể loại giật gân kết hợp drama, về chủ đề phòng chống bạo lực gia đình và bình đẳng giới. Đạo diễn: Võ Trần Nhật Hạ. Ra mắt cuối tháng 12/2025."
  },
  "voTranNhatHaTerm": {
    "title": "Võ Trần Nhật Hạ",
    "description": "Biệt danh Celestial, MSSV 25127043. Đạo diễn phim 'Lằn Ranh Hạnh Phúc' và là Director trong nhóm. Thành viên Nhóm 01 với vai trò quan trọng trong quay phim và dựng phim.",
    "citation": "Cung Hoàng Đạo: Xử Nữ. Sở trường: Cờ vua, Chụp ảnh bầu trời."
  },
  "hieuAnhThuTerm": {
    "title": "Hiếu Anh Thư",
    "description": "Biệt danh Công chúa Đồng Tháp, MSSV 25127240. Biên kịch phim 'Lằn Ranh Hạnh Phúc' và là Actress trong nhóm. Thành viên Nhóm 01 đến từ Đồng Tháp.",
    "citation": "Cung Hoàng Đạo: Ma Kết. Châm ngôn: 'Today's accomplishments were yesterday's impossibilities.'"
  },
  "nguyenKhaiToanTerm": {
    "title": "Nguyễn Khải Toàn",
    "description": "Biệt danh Ron, MSSV 25127158. Tham gia quay phim & dựng phim 'Lằn Ranh Hạnh Phúc' và là Actor trong nhóm. Thành viên Nhóm 01 với sở trường thiết kế slide thuyết trình, chơi chữ và chụp ảnh.",
    "citation": "Cung Hoàng Đạo: Song Tử. Câu cửa miệng: 'Sẽ có những con cá phải giả chó.'"
  },
  "tranKienQuocTerm": {
    "title": "Trần Kiến Quốc",
    "description": "MSSV 25127456. Tham gia quay phim & dựng phim 'Lằn Ranh Hạnh Phúc' và là Assistant Director trong nhóm. Thành viên Nhóm 01 với sở thích đàn piano cổ điển và IELTS 7.0.",
    "citation": "Câu cửa miệng: 'Đi chơi với tôi, mọi người đừng bao giờ bận tâm về tiền bạc.'"
  },
  "nguyenQuocKhanhTerm": {
    "title": "Nguyễn Quốc Khánh",
    "description": "MSSV 25127076. Vai chính trong phim 'Lằn Ranh Hạnh Phúc' - nhân vật Khánh, một lập trình viên tốt nghiệp HCMUS. Thành viên Nhóm 01 thường phụ trách chỉnh sửa giao diện và hỗ trợ kỹ thuật.",
    "citation": "Trong nhóm thường phụ trách siêu cấp culi, chỉnh sửa giao diện và hỗ trợ mọi người về kỹ thuật."
  },
  "maiTrungHieuTerm": {
    "title": "Mai Trung Hiếu",
    "description": "MSSV 25127329. Vai bạn thân Hiếu trong phim 'Lằn Ranh Hạnh Phúc' - người 'cây hài' sống tình nghĩa, giúp Khánh nhận ra và sửa chữa sai lầm. Là người đề xuất tên 'OlympiUS'.",
    "citation": "Được mô tả là 'cây hài' nhưng sống tình nghĩa, là người kéo Khánh tỉnh lại."
  },
  "truongHongMinhTerm": {
    "title": "Trương Hồng Minh",
    "description": "MSSV 25127425. Vai đồng nghiệp trong phim 'Lằn Ranh Hạnh Phúc', góp phần cho thấy áp lực nghề nghiệp. Thành viên Nhóm 01 với sở thích chơi game và luôn hỗ trợ tinh thần các bạn.",
    "citation": "Sở trường: thừa sức sống nhưng lười. Trong nhóm thường hỗ trợ tinh thần các bạn."
  },
  "damAnhTuanTerm": {
    "title": "Đàm Anh Tuấn",
    "description": "MSSV 25127542. Vai người sếp khó tính trong phim 'Lằn Ranh Hạnh Phúc', liên tục gây áp lực công việc lên Khánh. Thành viên Nhóm 01 với bio đầy tính nghệ thuật và thơ ca.",
    "citation": "Người sếp khó tính, là nguyên nhân trực tiếp dẫn đến bất hạnh của gia đình Khánh & Thư."
  },
  "davinciResolveTerm": {
    "title": "DaVinci Resolve",
    "description": "DaVinci Resolve là phần mềm dựng phim, color grading và VFX effects chuyên nghiệp. Nhóm 01 sử dụng DaVinci Resolve 20 để dựng phim 'Lằn Ranh Hạnh Phúc'."
  },
  "responsiveDesignTerm": {
    "title": "Responsive Design",
    "description": "Responsive Design là thiết kế web tự động điều chỉnh giao diện để phù hợp với mọi kích thước màn hình (desktop, tablet, mobile). Website của Nhóm 01 được thiết kế responsive với theme glassmorphism nhất quán."
  },
  "eightLeopardsTerm": {
    "title": "8 con báo độc nhất vô nhị",
    "description": "Slogan của Nhóm 01, thể hiện tinh thần đồng đội mạnh mẽ, độc đáo và quyết tâm chinh phục mọi thử thách. 8 thành viên như 8 con báo, mỗi người đều có tài năng riêng biệt."
  }
};

const TermExplanation: React.FC<TermExplanationProps> = ({ termKey, children }) => {
  const term = terminologies[termKey];

  if (!term) {
    console.warn(`Terminology for key "${termKey}" not found.`);
    return <>{children}</>;
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button 
          type="button"
          className="underline liquid-glass-highlight inline text-inherit bg-transparent border-0 p-0 cursor-help"
        >
          {children}
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-80 bg-white/10 backdrop-blur-xl border border-white/30 shadow-lg">
        <div className="font-bold mb-1 text-white">{term.title}</div>
        <p className="text-sm text-white">{term.description}</p>
        {term.citation && (
          <p className="text-xs text-white/70 italic mt-2">
            Trích dẫn: {term.citation}
          </p>
        )}
      </PopoverContent>
    </Popover>
  );
};

export default TermExplanation;
