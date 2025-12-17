import { useParams } from "react-router-dom";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import {
  Calendar,
  User,
  Tag,
  MapPin,
  Share2,
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { QrCodeModal } from "./QrCodeModal";
import TermExplanation, {
  terminologies,
} from "./TermExplanation";
import Comments from "./Comments";

// Function to preprocess markdown and inject TermExplanation links
const processMarkdownForTerms = (markdown: string) => {
  let processedMarkdown = markdown;
  const sortedTermKeys = Object.keys(terminologies).sort(
    (a, b) =>
      terminologies[b].title.length -
      terminologies[a].title.length,
  );

  for (const termKey of sortedTermKeys) {
    const term = terminologies[termKey];
    const escapedTitle = term.title.replace(
      /[.*+?^${}()|[\]\\]/g,
      "\\$&",
    );
    const regex = new RegExp(`\\b${escapedTitle}\\b`, "gi");
    // Replace with custom HTML tag
    processedMarkdown = processedMarkdown.replace(
      regex,
      `<term-explain data-term-key="${termKey}">${term.title}</term-explain>`,
    );
  }
  return processedMarkdown;
};

const postDetails = {
  "1": {
    title: "Khởi động dự án website giới thiệu nhóm",
    description: `Hôm nay đánh dấu ngày khởi đầu quan trọng của Nhóm 01 trong hành trình xây dựng website giới thiệu. Với sự phân công vai trò rõ ràng và tinh thần đồng đội cao, chúng mình đã có một buổi kick-off meeting đầy hứng khởi.

**Mục tiêu dự án:**
Xây dựng một website giới thiệu nhóm với giao diện hiện đại, responsive và thể hiện được tinh thần "8 con báo độc nhất vô nhị" của Nhóm 01. Website không chỉ là nơi giới thiệu thành viên mà còn là không gian chia sẻ những hoạt động, sự kiện và dấu ấn đáng nhớ trong quá trình làm việc chung.

**Công nghệ sử dụng:**
- Frontend: React 18 với TypeScript để đảm bảo type-safety
- Styling: Tailwind CSS v4.0 cho việc tạo UI nhanh chóng
- UI Effects: Glassmorphism và Liquid Glass cho giao diện hiện đại

**Phân công nhiệm vụ:**
Team đã được phân chia thành các nhóm nhỏ với trách nhiệm cụ thể:
- Product Owner: Xác định yêu cầu và ưu tiên tính năng
- Scrum Masters: Điều phối công việc và tạo điều kiện cho team làm việc hiệu quả
- Frontend Developers: Xây dựng giao diện và tương tác người dùng
- Backend Developers: Chuẩn bị cho các tính năng động trong tương lai

Sau buổi meeting, mọi người đều tràn đầy năng lượng và sẵn sàng cho những sprint sắp tới. Chúng mình tin rằng với tinh thần này, dự án sẽ thành công rực rỡ!`,
    tags: ["Lập trình", "React", "Team Work"],
    author: "Nhóm 01",
    members:
      "8 thành viên: Product Owner, 2 Scrum Masters, 5 Developers",
    date: "28/11/2025",
    location: "TP. Hồ Chí Minh",
    thumbnail: "https://i.postimg.cc/YS0WZ18Z/skibidi.jpg",
  },
  "2": {
    title: "T6 - Thu hoạch game xây cầu",
    description: `Hoạt động teamwork xây cầu dựa trên những nguyên liệu đơn sơ sẵn có.
### Yêu cầu hoạt động:
- Xây dựng một cây cầu, có chiều dài tối thiểu 40 cm, chiều cao tối thiểu 10 cm, có thể chịu tải trọng của một chai nước 1.5 lít lăn qua mà không sập.
- Nguyên vật liệu được phân phát: Những từ giấy báo, băng keo, kéo
- Thời gian gấp rút: 20 phút chuẩn bị phác thảo thiết kế, 30 phút thực hành việc chế tạo

### Phân công:
1. Mai Trung Hiếu:
  - Vai trò: Thiết kế bản thảo, lên ý tưởng kết cấu chịu lực.
  - Chức danh chuyên gia: Kiến trúc sư trưởng kết cấu
  - Mô tả chuyên môn: Chịu trách nhiệm R&D (Nghiên cứu & Phát triển), tính toán tải trọng tĩnh và động, quy hoạch kiến trúc tổng thể và tối ưu hóa nguyên lý chịu lực tam giác (Truss structure optimization).

2. Hiếu Anh Thư, Võ Trần Nhật Hạ, Trần Kiến Quốc, Nguyễn Khải Toàn:
  - Vai trò: Chế tác bộ khung dựa trên bản thiết kế.
  - Chức danh chuyên gia: Chuyên gia chế tác cấu kiện
  - Mô tả chuyên môn: Đội ngũ kỹ thuật nòng cốt, chịu trách nhiệm chuyển đổi bản vẽ kỹ thuật thành thực địa (Fabrication), gia công tiền chế các module giấy báo và đảm bảo độ bền vật liệu cho bộ khung xương sống (Chassis).

3. Đàm Anh Tuấn
  - Vai trò: Giữ kéo, cắt băng keo nhanh gọn, cung cấp vật liệu tức thì.
  - Chức danh chuyên gia: Trưởng phòng Công cụ & Hậu cần vật liệu
  - Quản lý tài sản chiến lược (cây kéo), vận hành chuỗi cung ứng nội bộ (Supply Chain), đảm bảo quy trình cắt gọt chính xác (Precision Cutting) và điều phối dòng chảy vật liệu (băng keo) kịp thời cho dây chuyền sản xuất.

4. Trương Hồng Minh, Nguyễn Quốc Khánh
  - Vai trò: Lắp ghép hoàn thiện các bộ phận rời rạc.
  - Chức danh chuyên gia: Kỹ sư lắp ráp & Tích hợp hệ thống
  - Mô tả chuyên môn: Chịu trách nhiệm ở khâu Final Assembly (Lắp ráp hoàn thiện), tích hợp các module rời rạc thành một thể thống nhất, kiểm soát chất lượng mối nối (Quality Control) và đảm bảo tính toàn vẹn của cấu trúc trước khi nghiệm thu tải trọng.

### Tổng quan phương pháp làm việc: 
Team đã quyết định áp dụng "PMA-JIT" làm phương pháp làm việc chính cho hoạt động:
  - Nguyên lý vận hành: Áp dụng mô hình Dây chuyền Sản xuất Module Song song, tách biệt hoàn toàn khâu chế tạo linh kiện (ống giấy) và khâu lắp ráp để tránh chồng chéo thao tác.
  - Hậu cần "Just-In-Time" (JIT): Loại bỏ hoàn toàn "thời gian chết" (bottleneck) nhờ vị trí Chuyên gia Hậu cần (Tuấn): Cung cấp băng keo đã cắt sẵn ngay trước khi người lắp ráp phát sinh nhu cầu, thay vì đợi được yêu cầu.
  - Kỹ thuật "Batch Processing" (Xử lý hàng loạt): Nhóm chế tác (Thư, Hạ, Quốc, Toàn) không làm trọn gói từng ống giấy mà chia nhỏ công đoạn (người cuộn sơ cấp -> người siết chặt -> người vuốt phẳng) để đảm bảo độ cứng đồng nhất (Uniform Stiffness).
  - Ma trận thời gian 15:60:25:
      + 15% đầu: Tập trung tạo "kho dự trữ chiến lược" (chỉ làm ống, chưa lắp).
      + 60% giữa: Tăng tốc lắp ráp đồng quy (tốc độ tiêu thụ = tốc độ sản xuất).
      + 25% cuối: Dừng sản xuất mới, toàn bộ nhân sự chuyển sang chế độ QA (Quality Assurance) để gia cố các khớp nối chịu lực.
  - Cơ chế liên lạc: Sử dụng "Tham số hình học" thay vì bản vẽ chi tiết (Hiếu chỉ cần hô độ dài và góc độ), giảm độ trễ từ ý tưởng đến thực thi xuống dưới 10 giây.

**Kết quả:**
Dự án thành công rực rỡ với sản phẩm cây cầu có kết cấu khung sườn thẳng tắp và các mối nối được gia cố cực kỳ vững chắc nhờ kỹ thuật quấn băng keo đa điểm. Điểm ấn tượng nhất là việc team áp dụng quy trình "Hậu cần Just-In-Time" sáng tạo, biến khâu cắt băng keo từ điểm nút thắt thành lợi thế tốc độ. Kinh nghiệm rút ra là sự chuyên môn hóa vai trò rõ ràng kết hợp với quy trình làm việc khoa học sẽ tối ưu hóa hiệu suất và đảm bảo chất lượng sản phẩm cuối cùng.`,
    tags: ["Thiết kế", "Teamwork", "Minigame"],
    author: "Nhóm 01",
    members: "Tất cả thành viên nhóm 1",
    date: "25/11/2025",
    location: "TP. Hồ Chí Minh",
    thumbnail: "https://i.postimg.cc/xTDnRTdN/588846288-2019114095601277-1076453571541524386-n.jpg",
  },
  "3": {
    title: "Sprint Planning - Phân công nhiệm vụ nhóm",
    description: `Buổi Sprint Planning đầu tiên của Nhóm 01 đã diễn ra với sự tham gia đầy đủ của tất cả 8 thành viên. Đây là bước quan trọng để đảm bảo mọi người hiểu rõ vai trò và trách nhiệm của mình.

**Cấu trúc nhóm:**

**Product Owner (1 người):**
- Xác định product vision và roadmap
- Ưu tiên các tính năng trong backlog
- Đảm bảo sản phẩm đáp ứng nhu cầu người dùng
- Ra quyết định cuối cùng với scope

**Scrum Master (2 người):**
- Tạo điều kiện cho team làm việc hiệu quả
- Loại bỏ các rào cản và impediments
- Hướng dẫn team áp dụng Scrum đúng cách
- Tổ chức các ceremonies (Daily, Review, Retro)

**Developers (5 người):**
- 2 Frontend Developers: React, TypeScript, UI/UX
- 2 Backend Developers: API, Database, Server
- 1 Fullstack Developer: Support cả 2 đầu

**Sprint Goals:**
Sprint đầu tiên tập trung vào:
1. Xây dựng cấu trúc cơ bản của website
2. Implement navigation và routing
3. Tạo HomePage với hero section
4. Design system with glassmorphism theme
5. Responsive design for mobile

**Definition of Done:**
- Code được review bởi ít nhất 1 người
- Responsive trên mobile và desktop
- Không có bugs nghiêm trọng
- Performance tốt
- Merge vào main branch

Với kế hoạch rõ ràng như vậy, team đã sẵn sàng bắt tay vào công việc!`,
    tags: ["Agile", "Team Management", "Planning"],
    author: "Nhóm 01",
    members: "Toàn bộ team",
    date: "20/11/2025",
    location: "TP. Hồ Chí Minh",
    thumbnail: "https://i.postimg.cc/7Yzf2745/nhommm.jpg",
  },
  "4": {
    title: "Giới thiệu phim Lằn Ranh Hạnh Phúc của Nhóm 01",
    description: `Nhóm 01 tự hào công bố dự án phim ngắn đặc biệt - một sản phẩm sáng tạo mới của "8 con báo độc nhất vô nhị" sắp chính thức ra mắt!

**Tổng quan về phim:**

Giữa sân trường HCMUS đầy hoài niệm, một lời cầu hôn “tấu hài” bằng chiếc nhẫn đồ chơi mở ra chuyện tình đẹp như mơ của Khánh và Thư. Nhưng chỉ hai năm sau, áp lực công việc, sếp khó tính và những bản báo cáo đầy lỗi đã biến chàng trai từng ấm áp thành người chồng dễ nổi nóng, trút hết bực dọc lên người vợ mình yêu thương. Một bữa cơm gia đình vỡ nát bởi bạo lực và lời nói tổn thương đã đẩy Thư đến quyết định rời đi, để lại Khánh một mình đối diện với sự hối hận.

Trong cô đơn, Khánh dần nhận ra mình đang đánh mất tất cả: tình yêu, gia đình và chính bản thân. Nhờ lời nhắc nhở của chương trình talkshow và sự “tư vấn nửa đùa nửa thật” từ cậu bạn thân Hiếu, anh quyết định học cách kiểm soát cơn giận và dũng cảm xin tha thứ. Bộ phim là hành trình từ yêu thương đến đổ vỡ rồi chữa lành, vừa hài hước, đời thường, vừa chạm đến những góc khuất của bạo lực gia đình – nơi mỗi người phải tự hỏi: áp lực có thể là lý do, nhưng có bao giờ đ để trở thành cái cớ?

**Thông tin phim:**

**📽️ Tên phim**: "Lằn Ranh Hạnh Phúc"

**🎬 Thể loại**: Phim ngắn - Giật gân kết hợp Hài

**⏱️ Thời lượng**: 7 phút

**📅 Ngày ra mắt**: Cuối tháng 12/2025

**Nội dung chính:**

<p align="center">
<iframe width="560" height="315" src="https://www.youtube.com/embed/402G6l1-9kA?si=msD95G_1tcphjeyx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></p>

**1. Cốt truyện:**
Khánh và Thư kết hôn sau một tình yêu đẹp. Sau hai năm, áp lực công việc khiến Khánh trở nên nóng nảy, trút giận lên Thư, và đỉnh điểm là hành vi bạo lực khiến Thư bỏ nhà đi. Khánh hối hận, tự kiểm điểm bản thân qua sự tư vấn của bạn thân và chương trình TV. Nhờ sự giúp đỡ của bạn thân, Khánh đã làm lành được với Thư và cam kết kiểm soát cơn giận của mình để giữ gìn hạnh phúc gia đình.

**2. Điểm nhấn đặc biệt:**
- Thông điệp về phòng chống bạo lực gia đình, tuyên truyền bình đẳng giới

**3. Đội ngũ sản xuất:**
- DIRECTOR: Võ Trần Nhật Hạ
- 1ST AD: TRẦN KIẾN QUỐC
- 2ND AD: Nguyễn Song Nhật Tiến
- SCRIPTWRITER: Hiếu Anh Thư
- STYLING DIRECTOR: Trương Hồng Minh
- PROPS MASTER: Trần Kiến Quốc
- POST PRODUCER: NGUYỄN KHẢI TOÀN
- EDITOR: NGUYỄN KHẢI TOÀN
- SOCIAL: NGUYỄN KHẢI TOÀN
- PHOTO BEHIND THE SCENES: NGUYỄN KHẢI TOÀN
- CAST: VÕ TRẦN NHẬT HẠ - TRẦN KIẾN QUỐC - Hiếu Anh Thư - NGUYỄN QUỐC KHÁNH - TRƯƠNG HỒNG MINH - NGUYỄN KHẢI TOÀN - Đàm Anh Tuấn
- BACKGROUND ACTORS: Trịnh Hiếu Nhân - Lê Quốc Nguyên Khang - Hoàng Quý Tam Toàn Thắng - Nguyễn Duy Quốc Học - Trương Đức Nghĩa - Lê Hà Nguyên - Đặng Ngọc Minh Phúc

**Kỹ thuật sản xuất:**
- Quay phim bằng thiết bị chuyên nghiệp
- Dựng phim với DaVinci Resolve 20
- Color grading và VFX effects
- Sound design và mixing chất lượng cao

**Dự kiến ra mắt:**
Bộ phim sẽ được công chiếu premiere tại Trường Đại học Khoa học Tự nhiên - ĐHQG TP.HCM vào cuối tháng 12/2025, sau đó sẽ được đăng tải trên YouTube và website chính thức của nhóm.

**Liên hệ và theo dõi:**
- Email: 8conbao102lendinholympius@proton.me
- Website: Cập nhật thông tin mới nhất về phim

Hãy cùng chờ đón và ủng hộ sản phẩm đặc biệt này của Nhóm 01 nhé! 🎬✨`,
    tags: ["Phim", "Sản phẩm", "Creative"],
    author: "Nhóm 01",
    members: "Toàn bộ 8 thành viên",
    date: "15/11/2025",
    location: "TP. Hồ Chí Minh",
    thumbnail: "https://i.postimg.cc/jqM6BPjY/unnamed-(10).jpg",
  },
  "5": {
    title: "Poster - Ý nghĩa",
    description: `Poster này là một tác phẩm mang đậm phong cách Dadaism, sử dụng các yếu tố thị giác mạnh mẽ để truyền tải thông điệp sâu sắc về bình đẳng giới và chấm dứt bạo lực gia đình. Sự kết hợp giữa nghệ thuật, ngôn ngữ và biểu tượng tạo nên một tổng thể vừa phá cách, vừa giàu ý nghĩa.
    
**1\. Phong cách Dadaism và Phá vỡ Định kiến:**

- **Yếu tố Dadaism:** Poster sử dụng nhiều yếu tố điển hình của Dadaism như sự sắp đặt ngẫu nhiên, cắt dán (collage) từ các mảnh báo, hình ảnh cơ khí, đồng hồ, và sự phá vỡ cấu trúc truyền thống. Điều này tạo ra một cảm giác hỗn loạn có chủ đích, phản ánh sự bất mãn với trật tự cũ và mong muốn xây dựng một trật tự mới.
- **Phá vỡ hệ thống định kiến:** Các mảnh báo cũ kỹ, hình ảnh cơ khí phức tạp lồng ghép vào nền tượng trưng cho những hệ thống, khuôn mẫu đã lỗi thời và cứng nhắc của xã hội, đặc biệt là những định kiến về giới tính. Sự "phá vỡ" này không chỉ nằm ở bố cục mà còn ở ý nghĩa: chúng ta cần phải nhìn vượt ra ngoài những quy tắc cũ để hướng tới một tương lai bình đẳng hơn.

**2\. Biểu tượng giới tính và Sự kết nối:**

- **Hai khuôn mặt đối diện:** Hai khuôn mặt với những đường nét đơn giản, tượng trưng cho hai giới tính (nam và nữ) đang đối diện nhau. Ban đầu, có thể thấy một sự ngăn cách, nhưng bàn tay đang nắm lấy nhau ở trung tâm tạo ra một cầu nối mạnh mẽ.
- **Bàn tay nắm chặt:** Bàn tay ở trung tâm, một cách điệu với màu sắc mạnh mẽ, tượng trưng cho sự hợp tác, đồng thuận và hỗ trợ lẫn nhau. Đây là hình ảnh cốt lõi thể hiện ý tưởng "một trật tự cân bằng giữa nhân loại với nhân loại", nơi hai giới không đối đầu mà cùng nhau xây dựng.
- **Biểu tượng nam và nữ (♂, ♀):** Các biểu tượng này được đặt ở vị trí nổi bật, nhưng không hề tạo ra sự phân chia, mà thay vào đó, chúng được đặt trong ngữ cảnh của sự kết nối và tương hỗ.

**3\. Thông điệp Chấm dứt Bạo lực Vĩnh viễn:**

- **"VIOLENCE" và "SILENCES" bị gạch chéo:** Đây là một trong những điểm nhấn thị giác mạnh mẽ nhất. Chữ "VIOLENCE" và "SILENCES" bị gạch chéo một cách quyết liệt bằng những thanh sắt hoặc đường nét thô cứng, tượng trưng cho sự loại bỏ, xóa sổ hoàn toàn.
  - **"VIOLENCE":** Sự gạch chéo thẳng thừng biểu thị việc bạo lực cần phải bị loại trừ vĩnh viễn khỏi mọi mối quan hệ và xã hội. Nó không được phép tồn tại.
  - **"SILENCES":** Việc "SILENCES" (sự im lặng) bị gạch chéo có ý nghĩa rất sâu sắc. Trong bạo lực gia đình, sự im lặng của nạn nhân và cả cộng đồng là yếu tố duy trì vấn đề. Gạch b��� "SILENCES" là kêu gọi mọi người lên tiếng, không dung thứ và không chấp nhận sự im lặng trước bạo lực.
- **"ALLIANCE":** Từ "ALLIANCE" (liên minh) đứng ngay dưới hai từ bị gạch chéo. Nó không bị gạch, thậm chí còn nổi bật với màu vàng đồng, tượng trưng cho sự cần thiết của một liên minh mạnh mẽ để chống lại bạo lực và phá vỡ sự im lặng. Đây là lời kêu gọi sự đoàn kết, hỗ trợ lẫn nhau trong cuộc chiến vì bình đẳng và an toàn.

**4\. Thông điệp về Sự Cân Bằng và Tiến bộ:**

- **"kindness", "advances", "balances" và sợi chỉ đỏ:**
  - **Font style đặc biệt:** Các từ "kindness" (tử tế), "advances" (tiến bộ), và "balances" (cân bằng) được thể hiện bằng font style tinh tế, hoa mỹ và "vượt xa khỏi thực tại". Điều này không chỉ tạo điểm nhấn thị giác mà còn gợi cảm giác về một lý tưởng, một mục tiêu cao đẹp mà chúng ta đang hướng tới. Chúng không chỉ là những khái niệm đơn thuần mà là những trạng thái siêu việt, cần được vun đắp.
  - **"kindness":** Sự tử tế là nền tảng của mọi mối quan hệ bền vững, là yếu tố thiết yếu để loại bỏ bạo lực.
  - **"advances":** Thể hiện sự tiến bộ không ngừng trong nhận thức, hành động và xây dựng một xã hội công bằng hơn.
  - **"balances":** Đây là đích đến cuối cùng - một sự cân bằng thực sự giữa các giới, trong các mối quan hệ và trong xã hội.
  - **Sợi chỉ đỏ liên kết:** Sợi chỉ đỏ tinh tế kết nối ba từ "kindness", "advances", "balances" như một mạch máu, một dòng chảy xuyên suốt. Nó tượng trưng cho số phận, sự kết nối định mệnh và mối liên hệ không thể tách rời giữa các khái niệm này. Sợi chỉ đỏ khẳng định rằng sự tử tế sẽ dẫn đến tiến bộ, và tiến bộ đó sẽ tạo ra sự cân bằng. Đây là một thông điệp mạnh mẽ và đầy hy vọng.

**5\. Màu sắc và Cảm xúc:**

- **Màu sắc tương phản và chuyển tông:** Poster sử dụng gam màu mạnh mẽ như hồng, tím, xanh đậm, đỏ cùng với các tông màu vàng đồng. Sự chuyển tông màu nền (gradient) từ hồng nhạt sang tím nhẹ tạo cảm giác mềm mại, nhưng các mảng màu đậm và tương phản của các hình khối và chữ lại tạo ra sự đối lập, nhấn mạnh tính cấp thiết của vấn đề.
- **Sự năng động:** Các mảng màu chồng lấn, các đường nét uốn lượn và hình ảnh cơ khí tạo nên một cảm giác năng động, không tĩnh lặng, phản ánh sự chuyển động và thay đổi trong xã hội.

<p align="center">
  <img src="https://i.postimg.cc/c4jq1LTd/unnamed-(8).webp" alt="Poster"/>
</p>

`,
    tags: ["Poster", "Thiết kế", "Thông điệp"],
    author: "Nhóm 01",
    members:
      "Nguyễn Khải Toàn",
    date: "28/11/2025",
    location: "TP. Hồ Chí Minh",
    thumbnail: "https://i.postimg.cc/c4jq1LTd/unnamed-(8).webp",
  },

  "6": {
    title: "Khởi động dự án website giới thiệu nhóm",
    description: `Hôm nay đánh dấu ngày khởi đầu quan trọng của Nhóm 01 trong hành trình xây dựng website giới thiệu. Với sự phân công vai trò rõ ràng và tinh thần đồng đội cao, chúng mình đã có một buổi kick-off meeting đầy hứng khởi.

**Mục tiêu dự án:**
Xây dựng một website giới thiệu nhóm với giao diện hiện đại, responsive và thể hiện được tinh thần "8 con báo độc nhất vô nhị" của Nhóm 01. Website không chỉ là nơi giới thiệu thành viên mà còn là không gian chia sẻ những hoạt động, sự kiện và dấu ấn đáng nhớ trong quá trình làm việc chung.

**Công nghệ sử dụng:**
- Frontend: React 18 với TypeScript để đảm bảo type-safety
- Styling: Tailwind CSS v4.0 cho việc tạo UI nhanh chóng
- UI Effects: Glassmorphism và Liquid Glass cho giao diện hiện đại

**Phân công nhiệm vụ:**
Team đã được phân chia thành các nhóm nhỏ với trách nhiệm cụ thể:
- Product Owner: Xác định yêu cầu và ưu tiên tính năng
- Scrum Masters: Điều phối công việc và tạo điều kiện cho team làm việc hiệu quả
- Frontend Developers: Xây dựng giao diện và tương tác người dùng
- Backend Developers: Chuẩn bị cho các tính năng động trong tương lai

`,
    tags: ["Lập trình", "React", "Team Work"],
    author: "Nhóm 01",
    members:
      "8 thành viên: Product Owner, 2 Scrum Masters, 5 Developers",
    date: "28/11/2025",
    location: "TP. Hồ Chí Minh",
    thumbnail: "https://i.postimg.cc/YS0WZ18Z/skibidi.jpg",
  },

  "7": {
    title: "Biên bản thành lập nhóm",
    description: `Biên bản chính thức về việc thành lập Nhóm 01, ghi nhận đầy đủ thông tin về các thành viên, vai trò phân công và cam kết làm việc của nhóm.

**Tài liệu quan trọng:**

Biên bản này là tài liệu chính thức đánh dấu sự ra đời của Nhóm 01 - \"8 con báo độc nhất vô nhị\". Tài liệu bao gồm:

- Thông tin đầy đủ về 8 thành viên nhóm
- Phân công vai trò cụ thể (1 PO, 2 SM, 5 Devs)
- Mục tiêu và phương hướng hoạt động
- Cam kết và trách nhiệm của từng thành viên
- Quy định nội bộ và cách thức làm việc

**Xem tài liệu đầy đủ:**

<div style=\"width: 100%; height: 800px; border: 2px solid rgba(255, 255, 255, 0.3); border-radius: 12px; overflow: hidden; background: rgba(255, 255, 255, 0.05); backdrop-filter: blur(10px); margin: 20px 0;\">
  <iframe 
    src=\"https://file.garden/aTBkQreQ8yP6Zqgn/01_HDTLNhom.pdf\" 
    width=\"100%\" 
    height=\"100%\" 
    style=\"border: none;\"
    title=\"Biên bản thành lập nhóm 01\"
  />
</div>

**Ý nghĩa:**

Đây là bước đầu tiên và quan trọng nhất trong hành trình của Nhóm 01. Biên bản này không chỉ là một tài liệu hành chính mà còn là minh chứng cho sự cam kết, tinh thần đồng đội và quyết tâm đồng hành của tất cả các thành viên trong suốt quá trình thực hiện dự án.

Tài liệu được lập vào ngày đầu thành lập nhóm, với chữ ký và cam kết của toàn bộ thành viên, đánh dấu khởi đầu cho hành trình chinh phục của \"8 con báo độc nhất vô nhị\".
`,
    tags: ["Tài liệu", "Nhóm", "Chính thức"],
    author: "Nhóm 01",
    members: "Toàn bộ 8 thành viên",
    date: "01/11/2025",
    location: "TP. Hồ Chí Minh",
    thumbnail:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },


  "8": {
    title: "T8 - Thu hoạch game thả trứng",
    description: `Một buổi chiều tràn đầy tiếng cười và sự sáng tạo! Hoạt động team building "Game Thả Trứng" đã mang đến cho Nhóm 01 những trải nghiệm thú vị và bổ ích.

**Giới thiệu về Game Thả Trứng:**

Game Thả Trứng (Egg Drop Challenge) là một hoạt động team building cổ điển nhưng không bao giờ cũ. Thử thách đặt ra rất đơn giản nhưng cực kỳ khó khăn: Thiết kế một bộ đỡ trứng chỉ bằng các vật liệu đơn giản như giấy, băng dính, ống hút, và dây thun để bảo vệ quả trứng khi được thả từ độ cao 3 mét xuống đất.

**Cách chơi:**

1. **Chia đội:** 8 thành viên được chia thành 2 đội nhỏ, mỗi đội 4 người
2. **Thời gian chuẩn bị:** Mỗi đội có 30 phút để thiết kế và xây dựng bộ đỡ trứng
3. **Vật liệu được cung cấp:**
   - 15 ống hút
   - 1 cuộn băng keo
   - 1 cây kéo
   - 1 quả trứng gà tươi
4. **Thử thách:** Thả bộ đỡ trứng từ độ cao 2 mét


**Phân công:**
1. Nguyễn Quốc Khánh:
  - Vai trò: Thiết kế bản thảo chi tiết, ứng dụng kết cấu tam giác.
  - Chức danh chuyên gia: Kiến trúc sư trưởng Kháng lực Va chạm
  - Mô tả chuyên môn: Chịu trách nhiệm quy hoạch tổng thể kiến trúc bảo vệ (Protection Architecture), tính toán vector lực khi tiếp đất và ứng dụng nguyên lý "Triangulation" (Tam giác hóa) để triệt tiêu chấn động lên vùng lõi trung tâm.
2. Hiếu Anh Thư, Võ Trần Nhật Hạ, Trần Kiến Quốc, Nguyễn Khải Toàn:
  - Vai trò: Chế tác bộ khung lồng từ ống hút.
  - Chức danh chuyên gia: Chuyên gia Chế tác Khung gầm Polymer
  - Mô tả chuyên môn: Đội ngũ kỹ thuật gia công vật liệu, chịu trách nhiệm xử lý các "thanh dầm rỗng" (ống hút), đảm bảo tính đồng nhất của các module giảm chấn (Shock-absorbing modules) và xây dựng bộ khung ngoại xương (Exoskeleton) vững chắc theo đúng bản vẽ kỹ thuật.

3. Đàm Anh Tuấn
  - Vai trò: Giữ kéo, cắt băng keo nhanh gọn, cung cấp vật liệu tức thì.
  - Chức danh chuyên gia: Trưởng phòng Hậu cần Tốc độ cao & Triển khai Vật tư
  - Quản lý tài sản chiến lược (cây kéo), vận hành chuỗi cung ứng nội bộ (Supply Chain), đảm bảo quy trình cắt gọt chính xác (Precision Cutting) và điều phối dòng chảy vật liệu (băng keo) kịp thời cho dây chuyền sản xuất.

4. Trương Hồng Minh, Mai Trung Hiếu
  - Vai trò: Lắp ghép hoàn thiện lồng, bảo vệ trứng.
  - Chức danh chuyên gia: Kỹ sư Tích hợp Tải trọng & An toàn Hệ thống
  - Mô tả chuyên môn: Chịu trách nhiệm khâu "Final Assembly" (Lắp ráp hoàn thiện), thiết kế và tích hợp khoang đệm (Cushioning Chamber) cho "phi hành gia Trứng" (Payload), đảm bảo hệ thống khóa chặt quả trứng ở vị trí cân bằng nhất trước khi thực hiện quy trình thả rơi (Drop Test).


**Những khoảnh khắc đáng nhớ:**

1. **Khoảnh khắc căng thẳng:** Khi cả nhóm đếm ngược "3... 2... 1... Thả!" - ai cũng nín thở chờ đợi
2. **Niềm vui vỡ òa:** Khi nhóm 1 mở hộp và thấy trứng còn nguyên - cả nhóm ôm nhau ăn mừng
3. **Tranh luận sôi nổi:** Các ý tưởng được đưa ra liên tục "Làm thế này xem!", "Không, cách này tốt hơn!"

**Bài học rút ra:**

🎯 **Tư duy sáng tạo:** Không có giải pháp nào là duy nhất, mỗi cách tiếp cận đều có điểm mạnh riêng

🤝 **Làm việc nhóm:** Lắng nghe ý kiến của nhau, phân công công việc hợp lý và hỗ trợ lẫn nhau

⚡ **Quản lý thời gian:** 30 phút là không nhiều, phải vừa suy nghĩ vừa hành động

🧪 **Thử nghiệm và cải tiến:** Một số đội đã thử nghiệm với vật liệu trước khi chốt thiết kế cuối cùng


**Kết luận:**

Game Thả Trứng không chỉ là một trò chơi vui vẻ mà còn là cơ hội tuyệt vời để các thành viên Nhóm 01 thể hiện khả năng tư duy sáng tạo, làm việc nhóm và giải quyết vấn đề. Qua hoạt động này, mọi người hiểu nhau hơn, tin tưởng nhau hơn và quan trọng nhất là có thêm nhiều kỷ niệm đẹp cùng nhau.

Đây chính là tinh thần "8 con báo độc nhất vô nhị" - cùng nhau vượt qua thử thách, chia sẻ niềm vui và học hỏi từ những trải nghiệm! 🐆💪

**Hình ảnh hoạt động:**

Các bạn có thể xem thêm hình ảnh trong buổi team building tại gallery của nhóm!
`,
    tags: ["Team Building", "Game", "Creative"],
    author: "Nhóm 01",
    members: "Toàn bộ 8 thành viên",
    date: "05/12/2025",
    location: "TP. Hồ Chí Minh",
    thumbnail: "https://i.postimg.cc/Dw0w8fyH/IMG-20251206-143536.jpg",
  },

};

export function DetailPage() {
  const { id } = useParams<{ id: string }>();
  const [url, setUrl] = useState("");

  useEffect(() => {
    setUrl(`${window.location.origin}/bai-dang/${id}`);
  }, [id]);

  const post =
    postDetails[id as keyof typeof postDetails] ||
    postDetails["1"];
  const imageUrl =
    post.thumbnail ||
    "https://i.postimg.cc/YS0WZ18Z/skibidi.jpg";

  // Scroll to top when component mounts or id changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const handleShare = async () => {
    try {
      // Try to use Web Share API if available
      if (navigator.share) {
        await navigator.share({
          title: post.title,
          text: post.description.substring(0, 100) + "...",
          url: window.location.href,
        });
        return;
      }
    } catch (error) {
      // User cancelled or Web Share API failed, continue to fallback
      console.log(
        "Web Share cancelled or failed, using fallback",
      );
    }

    // Fallback: Create temporary input element for copying
    try {
      const tempInput = document.createElement("input");
      tempInput.value = window.location.href;
      tempInput.style.position = "fixed";
      tempInput.style.opacity = "0";
      document.body.appendChild(tempInput);
      tempInput.select();
      tempInput.setSelectionRange(0, 99999); // For mobile devices

      const successful = document.execCommand("copy");
      document.body.removeChild(tempInput);

      if (successful) {
        alert("Đã sao chép liên kết vào bộ nhớ tạm!");
      } else {
        throw new Error("Sao chép thất bại");
      }
    } catch (error) {
      // If all methods fail, show the link
      const userConfirm = confirm(
        "Không thể tự động copy link. Nhấn OK để xem link:\n\n" +
          window.location.href,
      );
      if (userConfirm) {
        // Show link in a prompt so user can manually copy
        prompt("Copy link này:", window.location.href);
      }
    }
  };

  const processedDescription = processMarkdownForTerms(
    post.description,
  );
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-5xl mx-auto px-6">
        {/* Post Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            {post.tags.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="bg-blue-500/30 backdrop-blur-md text-blue-100 border border-blue-400/40"
              >
                {tag}
              </Badge>
            ))}
          </div>
          <h1 className="text-white mb-4">{post.title}</h1>

          <div className="flex flex-wrap gap-6 text-white/80 mb-6">
            <div className="flex items-center gap-2">
              <User className="w-5 h-5" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>Ngày đăng: {post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>{post.location}</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-4">
            <button
              onClick={handleShare}
              className="flex items-center gap-2 px-4 py-2 rounded-lg backdrop-blur-md border bg-white/10 border-white/30 text-white hover:bg-white/20 transition-all"
            >
              <Share2 className="w-5 h-5" />
              <span>Chia sẻ</span>
            </button>
            {url && (
              <QrCodeModal
                url={url}
                logo="https://i.postimg.cc/J04DVwmn/cropped-logonhom-removebg-preview.png"
              />
            )}
          </div>
        </div>

        {/* Post Banner */}
        <div className="mb-8">
          <div className="relative h-96 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl overflow-hidden border border-white/30">
            <ImageWithFallback
              src={imageUrl}
              alt={post.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </div>
        </div>

        {/* Post Content */}
        <Card className="mb-8 border border-white/30 bg-white/10 backdrop-blur-xl shadow-xl">
          <CardContent className="p-8">
            <h2 className="text-white mb-6">
              Nội dung chi tiết
            </h2>
            <div className="prose prose-invert max-w-none">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeRaw]}
                components={{
                  h1: ({ ...props }) => (
                    <h1 className="text-white text-3xl font-bold mb-4" {...props} />
                  ),
                  h2: ({ ...props }) => (
                    <h2 className="text-white text-2xl font-bold mb-3" {...props} />
                  ),
                  h3: ({ ...props }) => (
                    <h3 className="text-white text-xl font-semibold mb-2" {...props} />
                  ),
                  h4: ({ ...props }) => (
                    <h4 className="text-white text-lg font-semibold mb-1" {...props} />
                  ),
                  h5: ({ ...props }) => (
                    <h5 className="text-white text-base font-semibold" {...props} />
                  ),
                  h6: ({ ...props }) => (
                    <h6 className="text-white text-base font-semibold" {...props} />
                  ),
                  p: ({ ...props }) => (
                    <p className="text-white mb-4" {...props} />
                  ),
                  strong: ({ ...props }) => (
                    <strong className="text-white font-bold" {...props} />
                  ),
                  ul: ({ ...props }) => (
                    <ul className="list-disc list-inside text-white mb-4 ml-4 space-y-2" {...props} />
                  ),
                  ol: ({ ...props }) => (
                    <ol className="list-decimal list-inside text-white mb-4 ml-4 space-y-2" {...props} />
                  ),
                  li: ({ ...props }) => (
                    <li className="text-white" {...props} />
                  ),
                  a: ({ ...props }) => (
                    <a className="text-blue-300 hover:text-blue-200 underline underline-offset-2 transition-colors" {...props} />
                  ),
                  "term-explain": ({ node, ...props }) => {
                    const termKey = props["data-term-key"]; // Access the data-term-key attribute
                    // Remove data-term-key from props to avoid passing it to the DOM
                    const { "data-term-key": _, children, ...restProps } = props as any;
                    if (termKey) {
                      return (
                        <TermExplanation termKey={termKey}>
                          {children}
                        </TermExplanation>
                      );
                    }
                    return <>{children}</>; // Fallback
                  },
                  code: ({ inline, ...props }: any) => 
                    inline ? (
                      <code className="bg-white/10 text-blue-200 px-1.5 py-0.5 rounded" {...props} />
                    ) : (
                      <code className="block bg-white/10 text-blue-200 p-4 rounded-lg mb-4 overflow-x-auto" {...props} />
                    ),
                  blockquote: ({ ...props }) => (
                    <blockquote className="border-l-4 border-blue-400 pl-4 italic text-white/80 mb-4" {...props} />
                  ),
                }}
              >
                {processedDescription}
              </ReactMarkdown>
            </div>

            <div className="mt-8 pt-8 border-t border-white/20">
              <h3 className="text-white mb-4">
                Thông tin bổ sung
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <Tag className="w-5 h-5 text-blue-300 mt-1" />
                  <div>
                    <p className="text-white/70 mb-1">Chủ đề</p>
                    <p className="text-white">
                      {post.tags.join(", ")}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <User className="w-5 h-5 text-blue-300 mt-1" />
                  <div>
                    <p className="text-white/70 mb-1">
                      Thành viên tham gia
                    </p>
                    <p className="text-white">{post.members}</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {id && <Comments competitionId={id} />}
      </div>
    </div>
  );
}