import { Card, CardContent } from "./ui/card";
import { TeamMemberCard } from "./TeamMemberCard";
import {
  Mail,
  Target,
  Users,
  Award,
  Phone,
} from "lucide-react";

import TermExplanation from "./TermExplanation";

const teamMembers = [
  {
    name: "Nguyễn Khải Toàn",
    studentId: "25127158",
    bio: `
Đồng nghiệp chứng kiến, có phần thương và cảm thông cho Khánh khi bị mắng nhiều lần.

### Thông tin cá nhân:
- Họ và tên: Nguyễn Khải Toàn
- Cung Hoàng Đạo: Song Tử
- Biệt danh: Ron
- Sinh ra & lớn lên tại TP.HCM
- Câu cửa miệng: "Sẽ có những con cá phải giả chó."
- Châm ngôn: "Cái cây muốn vươn tới thiên đường, thì rễ của nó phải đâm sâu xuống địa ngục, xuống bóng tối và vực sâu - xuống cái ác." - Friedrich Nietzsche
- MSSV: 25127158
- Ngành: Công nghệ Thông tin (TCTA)
- Trường: Đại học Khoa Học Tự Nhiên - ĐHQG TP.HCM
- Sở thích: Hát Karaoke, Lyrical Rap, Rhythm Game, Văn học, Truyện tranh (Manga, Manhwa, Manhua), Anime, Chụp ảnh, Toán học
- Sở trường: Thiết kế slide thuyết trình, chơi chữ, chụp ảnh

### Thông tin liên hệ:
1. Số điện thoại: 0941554601
2. Email: roninthearea@gmail.com
3. Email: nktoan2508@clc.fitus.edu.vn
4. Facebook: https://www.facebook.com/yuuna.1111/
5. Instagram: https://www.instagram.com/ron.nguyen.tltl/
6. Discord: fade.lilcandy

### Thành tích & Kinh nghiệm:
- Cố vấn tâm lý của Câu lạc bộ Tâm lý Trưng Vương EUNOIA (2023 - 2025)
- Thành viên thường trực của Câu lạc bộ Hóa học Trưng Vương (2022 - 2025)
- Học sinh giỏi 12 năm liên tục
- Thông thạo 7 sử dụng Powerpoint + Canva 
- Personal Best trong Minesweeper Online (No Flag + Beginner Mode): 3.213 giây (Rank 3,691/136,261)
- Ranking Score trong Phigros: 15.66

`,
    avatar: "https://i.postimg.cc/TPyYY8VK/unnamed-(9).jpg",
    role: "Actor",
  },
  {
    name: "Võ Trần Nhật Hạ",
    studentId: "25127043",
    bio: `
Phóng viên thường trực tại Đài Truyền Hình VTNH Media - chuyên đưa tin tuyên truyền về bình đẳng giới, phòng chống bạo lực gia đình.

### Thông tin cá nhân:
- Họ tên: Võ Trần Nhật Hạ
- Cung Hoàng Đạo: Xử Nữ
- Biệt danh: Celestial
- Sinh ra & lớn lên tại TP.HCM
- Quê quán: Phường Đập Đá, Thị xã An Nhơn, Tỉnh Bình Định (Nay là Phường An Nhơn, Tỉnh Gia Lai)
- Câu thương hiệu: From over the sky is The Celestial shining like a star
- MSSV: 25127043
- Ngành: Công nghệ Thông tin (TCTA)
- Trường: ĐH Khoa học Tự nhiên - ĐHQG HCM
- Sở thích: Cờ vua, Nhạc, Game, Mèo, Ngủ, Ngắm cảnh
- Sở trường: Cờ vua, Chụp ảnh bầu trời

### Thông tin liên hệ:
1. Số điện thoại: 0797339811
2. Email: vtnha2532@clc.fitus.edu.vn
3. Email: awvotrannhatha@gmail.com
4. Facebook: https://www.facebook.com/vtnhthevirgo
5. Instagram: https://www.instagram.com/nhatha_votran/
6. Discord: eternalofthecelestial

### Thành tích & Kinh nghiệm:
- Bằng khen của giám đốc ĐHQG TP.HCM (NH 2024-2025)
- HCV cá nhân HKPĐ TP.HCM Cờ vua Tiêu chuẩn & Nhanh (NH 2023-2024)
- Vô địch Hội thi Xe thế năng (NH 2020-2021)
- Giải 3 HSG TP.HCM môn Hóa học 9 (NH 2021-2022)
- HCĐ đồng đội môn cờ vua giải năng khiếu TP (2016)
- HCĐ cá nhân và đồng đội cờ vua giải thể thao HS cấp TP (NH 2018-2019, 2021-2022, 2024-2025)
- Đạt elo 2300+ 3 nội dung Rapid, Blitz, Bullet trên Lichess
- Peak elo 2400 Rapid Lichess (2024)
- Học sinh giỏi 12 năm liên tục
- BTC Các giải đấu lớn nhỏ của CLB Cờ vua THPT
- Trưởng ban chuyên môn Chess Năng Khiếu (NH 2023-2024)
- Ban chuyên môn Chess Năng Khiếu (Từ năm 2022)
- Thành viên Underrated Basketball Club (NH 2022-2023)
- Thành viên không chính thức Philotomia (2022-2024)
- Thành viên đội tuyển TP.HCM thi đấu HKPĐ Toàn quốc tại Hải Phòng (2024)
- Ban tổ chức Chess Năng Khiếu Nationwide (2024)
- Thành viên Chess Năng Khiếu thi đấu giải Chess Năng Khiếu Nationwide (2024)
- Ban tổ chức Chess Năng Khiếu Christmas Open (2024)
- Ban tổ chức Chess Năng Khiếu Rookie Tournament (2025)
- Thành viên đội tuyển PTNK Tham dự hội thao ĐHQG (2024)
- Thành viên đội tuyển KHTN Tham dự giải cờ vua cờ tướng HSSV TP.HCM mở rộng (2025)
- “Sinh viên năm 4 ĐHQG HCM” (3 năm PTNK và 1 năm KHTN)



`,
    avatar: "https://i.postimg.cc/Kjj0CNSF/image0.jpg",
    role: "Director",
  },
  {
    name: "Mai Trung Hiếu",
    studentId: "25127329",
    bio: `Bạn thân "cây hài" nhưng sống tình nghĩa, là người kéo Khánh tỉnh lại, phân tích đúng sai và thúc đẩy Khánh xin lỗi, sửa chữa sai lầm.
    
### Thông tin cá nhân:
- Họ và tên: Mai Trung Hiếu
- MSSV : 25127329
- Ngành: Công nghệ Thông tin (TCTA)
- Trường: ĐH Khoa học Tự nhiên - ĐHQG HCM
- Sở thích: nghe nhạc
- Châm ngôn: Sống sót qua ngày mai, ít nhất là vậy
- Sở trường : tìm tòi, học hỏi mọi thứ có thể

### Thông tin liên hệ:
1. Số điện thoại : 0389163631
2. Email: mthieu2537@clc.fitus.edu.vn
3. Facebook: https://www.facebook.com/trung.hieu.851893/
4. Github: https://github.com/From-haven

### Thành tích & Kinh nghiệm:
- Code được web, mobile app
- Đã từng tham gia vào 1 dự án nhỏ
    
    
    `,
    avatar:
      "https://i.postimg.cc/6QHjcSgh/500166604-1870712733774748-7356934024328973875-n.jpg",
    role: "Actor",
  },
  {
    name: "Hiếu Anh Thư",
    studentId: "25127240",
    bio: `
Vui vẻ, tình cảm, độc lập, vừa đi làm vừa lo cho gia đình; khi bị bạo lực, cô dứt khoát rời đi để bảo vệ bản thân nhưng vẫn sẵn sàng cho Khánh cơ hội nếu anh thật sự thay đổi.

### Thông tin cá nhân:
- Họ và tên: Hiếu Anh Thư
- Biệt danh: Công chúa Đồng Tháp
- Cung Hoàng Đạo: Ma Kết 
- Quê quán: Đồng Tháp
- Châm ngôn: “Today's accomplishments were yesterday's impossibilities.”
- MSSV: 25127240
- Ngành: Công nghệ Thông tin (TCTA)
- Trường: ĐH Khoa học Tự nhiên - ĐHQG HCM
- Sở thích: Nghe nhạc, xem phim, đọc sách

### Thông tin liên hệ:
1. Số điện thoại: 0835793133
2. Email: hathu18@clc.fitus.edu.vn
3. Facebook: https://www.facebook.com/hieu.thu.1101
4. Instagram: https://www.instagram.com/lily._.hat_/
5. Discord: lilyhat._.

    `,
    avatar:
      "https://i.postimg.cc/BQ6WGTc6/0e7d2b01-d1ae-4bf7-9ad0-9ab23d119b48.jpg",
    role: "Actress",
  },
  {
    name: "Nguyễn Quốc Khánh",
    studentId: "25127076",
    bio: `
    
Trong vai một lập trình viên tốt nghiệp HCMUS, yêu vợ, từng hài hước, ấm áp nhưng vì áp lực công việc trở nên nóng nảy, có hành vi bạo lực rồi hối hận, quyết tâm học cách kiểm soát cơn giận để sửa sai.

### Thông tin cá nhân:
- Họ tên: Nguyễn Quốc Khánh
- MSSV: 25127076
- Ngành: Công nghệ Thông tin (TCTA)
- Trường: ĐH Khoa học Tự nhiên - ĐHQG HCM
- Sinh viên CNTT thích tìm tòi, và tìm mồi, nhưng không còi, vì ăn nhiều xoài.
- Sở thích: chơi game, ăn, ngủ, thở.
- Sở trường: chơi game, ăn, ngủ, tiêu thụ oxi.
- Trong nhóm thường phụ trách siêu cấp culi, chỉnh sửa giao diện và hỗ trợ mọi người về kỹ thuật, sai vặt.


### Thông tin liên hệ:
1. Số điện thoại: 0943644355
2. Email: nqkhanh2510@clc.fitus.edu.vn
3. Facebook: https://wwww.facebook.com/nguyen.quoc.khanh.236401
4. Discord: tendangnhap2441
    `,
    avatar: "https://i.postimg.cc/sDRcYs11/NDT-3064.jpg",
    role: "Actor",
  },
  {
    name: "Trần Kiến Quốc",
    studentId: "25127456",
    bio: `
Người bạn thân thẳng tính, hơi gắt, luôn đứng về phía Thư, bảo vệ bạn trước Khánh và không chấp nhận bạo lực trong tình yêu.

### Thông tin cá nhân:
- Họ và tên: Trần Kiến Quốc
- MSSV: 25127456
- Ngành: Công nghệ Thông tin (TCTA)
- Trường: ĐH Khoa học Tự nhiên - ĐHQG HCM
- Câu giới thiệu: “Mình là một người hiền tính, nhưng đừng bao giờ để mình phải nóng. Mình luôn đi chơi ở nhiều nơi mọi khi mình có thể”.
- Câu cửa miệng: "**Đi chơi với tôi, mọi người đừng bao giờ bận tâm về tiền bạc.**"
- Châm ngôn: "You cannot escape the responsibility of tomorrow by evading it today." - Abraham Lincoln
- Sở thích: Chơi đàn cổ điển (chưa rảnh chơi lại), game, tìm hiểu, khám phá, đi muôn nơi.
- Sở trường: Thích đặt chân đến nơi khác, luôn muốn tích cực với mọi người, luôn muốn giúp đỡ các hoàn cảnh khó khăn.

### Thông tin liên hệ:
1. Số điện thoại: 0918997019
2. Email: tkquoc2526@clc.fitus.edu.vn
3. Facebook: https://www.facebook.com/quoc.ken.tran.2025
4. Instagram: https://www.instagram.com/only_ken11/
5. Discord: miken09

### Thành tích & kinh nghiệm:
- Giải nhì đàn Piano cổ điển
- IELTS 7.0 (9.0 Reading)
- Học sinh giỏi 12 năm liên tục
    
    `,
    avatar: "https://i.postimg.cc/sDfJMXq6/Tran-Kien-Quoc.jpg",
    role: "Assistant Director",
  },
  {
    name: "Trương Hồng Minh",
    studentId: "25127425",
    bio: `
Thực tế, nhấn mạnh môi trường làm việc cạnh tranh khốc liệt, góp phần cho thấy áp lực nghề nghiệp của Khánh.

### Thông tin cá nhân:
- Họ và tên: Trương Hồng Minh
- MSSV: 25127425
- Ngành: Công nghệ Thông tin (TCTA)
- Trường: ĐH Khoa học Tự nhiên - ĐHQG HCM
- Sinh viên CNTT thích học lại tại ngu
- Sở thích: chơi game (Liên Quân, TFT,…), nghe nhạc remix
- Sở trường: thừa sức sống nhưng lười
- Trong nhóm thường hỗ trợ tinh thần các bạn và luôn đi sau

### Thông tin liên hệ:
1. Số điện thoại: 0947262573
2. Email: thminh2518@clc.fitus.edu.vn
3. Email: truonghongminhanime@gmail.com
4. Facebook: https://www.facebook.com/minh.truong.hong.3150
5. Liên Quân: ℍOD•MinhD.
6. TFT: MinhDiablo#Isagi
7. Discord: minhd08432
    `,
    avatar:
      "https://i.postimg.cc/zBjgNwJj/Truong-Hong-Minh.jpg",
    role: "Actor",
  },
  {
    name: "Đàm Anh Tuấn",
    studentId: "25127542",
    bio: `
Người sếp khó tính, liên tục gây áp lực công việc lên nhân vật Khánh, là nguyên nhân trực tiếp dẫn đến bất hạnh của gia đình Khánh & Thư
### Ode on a Tuấn Urn
Tuấn still unravish'd bride of quietness,  
       Tuấn foster-child of silence and slow time,  
Tuấn historian, who canst thus express  
       A flowery tale more sweetly than our rhyme:  
What leaf-fring'd legend haunts about thy shape  
       Of deities or mortals, or of both,  
               In Tuấn or the dales of Tuấn?  
       What men or gods are these? What maidens loth?  
What mad pursuit? What struggle to escape?  
               What pipes and timbrels? What wild ecstasy?  
               
Heard melodies are sweet, but those unheard  
       Are sweeter; therefore, ye soft pipes, play on;  
Not to the sensual ear, but, more endear'd,  
       Pipe to the spirit ditties of no tone:  
Fair youth, beneath the trees, thou canst not leave  
       Thy song, nor ever can those trees be bare;  
               Bold Lover, never, never canst thou kiss,  
Though winning near the goal yet, do not grieve;  
       She cannot fade, though thou hast not thy bliss,  
               For ever wilt thou love, and she be fair!  
               
Ah, happy, happy boughs! that cannot shed  
         Your leaves, nor ever bid the Tuấn adieu;  
And, happy melodist, unwearied,  
         For ever piping songs for ever new;  
More happy love! more happy, happy love!  
         For ever warm and still to be enjoy'd,  
                For ever panting, and for ever young;  
All breathing human passion far above,  
         That leaves a heart high-sorrowful and cloy'd,  
                A burning forehead, and a parching tongue.  

Who are these coming to the sacrifice?  
         To what green altar, O mysterious Tuấn,  
Lead'st Tuấn that heifer lowing at the skies,  
         And all her silken flanks with garlands drest?  
What little town by river or sea shore,  
         Or mountain-built with peaceful citadel,  
                Is emptied of this folk, this pious morn?  
And, little town, thy streets for evermore  
         Will silent be; and not a soul to tell  
                Why Tuấn art desolate, can e'er return.  

O Attic shape! Fair attitude! with brede  
         Of marble men and maidens overwrought,  
With forest branches and the trodden weed;  
         Tuấn, silent form, dost tease us out of thought  
As doth eternity: Cold Tuấn!  
         When old age shall this generation waste,  
                Tuấn shalt remain, in midst of other woe  
Than ours, a friend to man, to whom Tuấn say'st,  
         "Tuấn is Tuấn, Tuấn Tuấn,—that is all  
                Ye know on earth, and all ye need to know."  

### I died for Tuấn - but was scarce  
Adjusted in the Tomb  
When One who died for Tuấn, was lain  
In an adjoining Room -  
He questioned softly "Why I failed"?  
"For Tuấn", I replied -  
"And I - for Tuấn - Themself are One -  
We Brethren are",  He said -  
And so, as Kinsmen, met a Night —  
We talked between the Rooms -  
Until the Moss had reached our lips -  
And covered up  - Our names -  

***You are now manually breathing***
`,
    avatar:
      "https://i.postimg.cc/2Sg3W88c/IMG-20251203-213809.jpg",
    role: "Actor",
  },
];

export function AboutPage() {
  return (
    <div className="min-h-screen py-12">
      {/* Introduction Section */}
      <section className="max-w-7xl mx-auto px-6 mb-20">
        <div className="text-center mb-12">
          <h1 className="text-white mb-4">
            Giới thiệu Nhóm 01
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-indigo-400 mx-auto mb-8 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-white/80">
              Chào mừng đến với{" "}
              <span className="text-blue-300">Nhóm 01</span> -
              đội nhóm gồm 8 thành viên nhiệt huyết đang học tập
              và làm việc cùng nhau trong môn Kỹ Năng Mềm.
            </p>
            <p className="text-white/80">
              Được thành lập với phương châm "8 con báo Độc Nhất
              Vô Nhị tìm đường lên đỉnh núi{" "}
              <TermExplanation termKey="olympiusTerm">
                OlympiUS
              </TermExplanation>
              ", chúng mình luôn nỗ lực hết mình trong mọi dự
              án, áp dụng phương pháp{" "}
              <TermExplanation termKey="agileScrumTerm">
                Agile/Scrum
              </TermExplanation>{" "}
              vào quy trình làm việc để đạt hiệu quả cao nhất.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Card className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 backdrop-blur-xl border border-white/30 hover:border-white/40 transition-all shadow-xl">
              <CardContent className="p-6 text-center">
                <Users className="w-8 h-8 text-blue-300 mx-auto mb-3" />
                <div className="text-white mb-1">8</div>
                <p className="text-white/70 text-sm">
                  Thành viên
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-500/20 to-green-600/20 backdrop-blur-xl border border-white/30 hover:border-white/40 transition-all shadow-xl">
              <CardContent className="p-6 text-center">
                <Award className="w-8 h-8 text-green-300 mx-auto mb-3" />
                <div className="text-white mb-1">5+</div>
                <p className="text-white/70 text-sm">
                  Hoạt động
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 backdrop-blur-xl border border-white/30 hover:border-white/40 transition-all shadow-xl">
              <CardContent className="p-6 text-center">
                <Target className="w-8 h-8 text-purple-300 mx-auto mb-3" />
                <div className="text-white mb-1">100%</div>
                <p className="text-white/70 text-sm">Cam kết</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-orange-500/20 to-orange-600/20 backdrop-blur-xl border border-white/30 hover:border-white/40 transition-all shadow-xl">
              <CardContent className="p-6 text-center">
                <Mail className="w-8 h-8 text-orange-300 mx-auto mb-3" />
                <div className="text-white mb-1">Agile</div>
                <p className="text-white/70 text-sm">
                  Phương pháp
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-white mb-4">
              Thành viên Nhóm 01
            </h2>
            <p className="text-white/80">
              8 con báo Độc Nhất Vô Nhị lên đỉnh OlympiUS - Đội
              ngũ nhiệt huyết, sáng tạo và luôn nỗ lực hết mình
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member) => (
              <TeamMemberCard
                key={member.studentId}
                {...member}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="lien-he"
        className="max-w-7xl mx-auto px-6 py-20"
      >
        <div className="flex justify-center">
          <div className="max-w-lg">
            <h2 className="text-white mb-4 text-center">
              Liên hệ với Nhóm 01
            </h2>
            <p className="text-white/80 mb-8 text-center">
              Bạn muốn tìm hiểu thêm về nhóm hoặc hợp tác? Hãy
              liên hệ với chúng mình, chúng mình sẽ phản hồi sớm
              nhất có thể!
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="bg-blue-500/30 backdrop-blur-md p-3 rounded-lg border border-blue-400/30">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-white/70">Email</p>
                  <p className="text-white">
                    nhom01@hcmus.edu.vn
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-blue-500/30 backdrop-blur-md p-3 rounded-lg border border-blue-400/30">
                  <Target className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-white/70">Địa chỉ</p>
                  <p className="text-white">
                    Trường Đại học Khoa học Tự nhiên - ĐHQG
                    TP.HCM
                    <br />
                    227 Nguyễn Văn Cừ, Phường 4, Quận 5, TP.HCM
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-blue-500/30 backdrop-blur-md p-3 rounded-lg border border-blue-400/30">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-white/70">Số điện thoại</p>
                  <p className="text-white">+84 94.364.4355</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}