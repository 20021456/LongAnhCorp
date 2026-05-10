# 📝 KS Long Anh — Content Editor

> **Cách dùng:** Sửa text sau ký hiệu cờ (🇻🇳 / 🇬🇧 / 🇨🇳) cho mỗi mục bên dưới.
> Giữ nguyên `[id]` và cấu trúc — chỉ thay đổi nội dung chữ.
> Khi sửa xong, gửi lại file này, tôi sẽ cập nhật toàn bộ HTML cùng lúc.
>
> **Quy ước:**
> - 🇻🇳 = Tiếng Việt
> - 🇬🇧 = English
> - 🇨🇳 = 中文
> - `[id]` = mã định danh (ĐỪNG SỬA)
> - `# comment` = chú thích vị trí trên web

---

## 🌐 1. CHUNG — Logo · Header · Footer

### Brand info

`[brand_short]` # Tên rút gọn (header logo)
- 🇻🇳 KS LONG ANH
- 🇬🇧 LONG ANH MINERAL
- 🇨🇳 龙英矿业

`[company_full]` # Tên đầy đủ
- 🇻🇳 Công ty TNHH KS Long Anh
- 🇬🇧 Long Anh Mineral Co., Ltd
- 🇨🇳 龙英矿业有限公司

`[tagline]` # Slogan dưới logo
- 🇻🇳 Bột đá Canxi Cacbonat & Đá tự nhiên Việt Nam
- 🇬🇧 Vietnamese Calcium Carbonate & Natural Stone
- 🇨🇳 越南碳酸钙粉与天然石材

`[footer_desc]` # Mô tả công ty trong footer
- 🇻🇳 Nhà sản xuất bột đá Canxi Cacbonat và đá tự nhiên hàng đầu Bắc Trung Bộ.
- 🇬🇧 A leading manufacturer of calcium carbonate powder and natural stone in North-Central Vietnam.
- 🇨🇳 越南北中部领先的碳酸钙粉和天然石材制造商。

`[footer_copy]` # Dòng copyright cuối cùng
- 🇻🇳 © 2026 Công ty TNHH KS Long Anh · Mã số DN 2901xxxxx
- 🇬🇧 © 2026 Long Anh Mineral Co., Ltd · Reg. No. 2901xxxxx
- 🇨🇳 © 2026 龙英矿业有限公司 · 注册号 2901xxxxx

### Navigation menu (5 mục)

`[nav_home]`
- 🇻🇳 Trang chủ
- 🇬🇧 Home
- 🇨🇳 首页

`[nav_about]`
- 🇻🇳 Giới thiệu
- 🇬🇧 About
- 🇨🇳 关于我们

`[nav_products]`
- 🇻🇳 Sản phẩm
- 🇬🇧 Products
- 🇨🇳 产品

`[nav_career]`
- 🇻🇳 Tuyển dụng
- 🇬🇧 Career
- 🇨🇳 招聘

`[nav_contact]`
- 🇻🇳 Liên hệ
- 🇬🇧 Contact
- 🇨🇳 联系

### Top bar (strip)

`[strip_hotline_label]`
- 🇻🇳 Hotline kinh doanh:
- 🇬🇧 Sales hotline:
- 🇨🇳 销售热线:

### Contact info (dùng toàn site)

`[phone_main]` = (+84) 912 779 799
`[phone_secondary]` = (+84-2383) 982 555
`[email_main]` = info@longanhcorp.com
`[email_hr]` = hr@longanhcorp.com
`[address_vi]` = Số D1-22, Đường 2K, Khu Đô Thị Cửa Tiền, Phường Vinh Tân, TP. Vinh, Nghệ An, Việt Nam
`[address_en]` = D1-22, 2K Street, Cua Tien Urban Area, Vinh Tan Ward, Vinh City, Nghe An, Vietnam

### Social media URLs (footer icons)

`[url_facebook]` = https://www.facebook.com/longanhcorp
`[url_linkedin]` = https://www.linkedin.com/company/longanhcorp
`[url_twitter]` = https://twitter.com/longanhcorp
`[url_zalo]` = https://zalo.me/longanhcorp

---

## 🏠 2. TRANG CHỦ (index.html)

### 2.1 Hero section

`[hero_eyebrow]` # Chữ cam nhỏ trên đầu hero
- 🇻🇳 Khoáng sản công nghiệp · Xuất khẩu quốc tế
- 🇬🇧 Industrial Minerals · Global Export
- 🇨🇳 工业矿产 · 全球出口

`[hero_title_line1]` # Dòng tiêu đề 1 (đen)
- 🇻🇳 Khoáng đá nguyên sinh
- 🇬🇧 Pure mineral stone
- 🇨🇳 原始矿物石材

`[hero_title_line2]` # Dòng tiêu đề 2 (cam)
- 🇻🇳 từ trái tim Nghệ An
- 🇬🇧 from the heart of Nghe An
- 🇨🇳 源自义安省核心地带

`[hero_subtitle]` # Đoạn mô tả
- 🇻🇳 Long Anh chuyên sản xuất bột đá CaCO₃ phủ và không phủ Stearic Acid, đá Slab, đá xẻ quy cách và đá trang trí — phục vụ ngành nhựa, sơn, giấy, xây dựng và xuất khẩu trên toàn cầu.
- 🇬🇧 Long Anh manufactures coated and uncoated CaCO₃ powder, slab stone, cut-to-size tile and decorative stone — serving plastics, paint, paper, construction, and global export markets.
- 🇨🇳 龙英专业生产涂层和未涂层硬脂酸碳酸钙粉、板材、定制石材和装饰石材 — 服务塑料、涂料、造纸、建筑及全球出口市场。

`[hero_cta_primary]` # Nút chính (cam)
- 🇻🇳 Xem sản phẩm
- 🇬🇧 Browse products
- 🇨🇳 浏览产品

`[hero_cta_ghost]` # Nút phụ (viền)
- 🇻🇳 Yêu cầu báo giá
- 🇬🇧 Request a quote
- 🇨🇳 请求报价

### 2.2 Stats strip (4 con số)

`[stat_years]` = 20+ # Năm kinh nghiệm
`[stat_capacity]` = 350,000 # Tấn/năm
`[stat_countries]` = 12 # Quốc gia xuất khẩu
`[stat_quarries]` = 5 # Mỏ đá

`[stat_label_years]`
- 🇻🇳 Năm kinh nghiệm
- 🇬🇧 Years of experience
- 🇨🇳 年经验

`[stat_label_capacity]`
- 🇻🇳 Tấn / năm công suất
- 🇬🇧 Tons / year capacity
- 🇨🇳 吨/年产能

`[stat_label_countries]`
- 🇻🇳 Quốc gia xuất khẩu
- 🇬🇧 Export countries
- 🇨🇳 出口国家

`[stat_label_quarries]`
- 🇻🇳 Mỏ đá vận hành
- 🇬🇧 Quarries operated
- 🇨🇳 运营矿场

### 2.3 Section "Sản phẩm" (carousel)

`[products_eyebrow]`
- 🇻🇳 Danh mục sản phẩm
- 🇬🇧 Product catalogue
- 🇨🇳 产品目录

`[products_title]`
- 🇻🇳 Năm dòng sản phẩm chính
- 🇬🇧 Five core product lines
- 🇨🇳 五大主要产品系列

`[products_subtitle]`
- 🇻🇳 Tối ưu cho từng ứng dụng — từ filler nhựa siêu mịn đến đá trang trí kích thước lớn.
- 🇬🇧 Tuned to each end use — from ultra-fine plastics filler to large decorative slab.
- 🇨🇳 针对每个应用进行优化 — 从超细塑料填料到大尺寸装饰板材。

### 2.4 Section "Về chúng tôi" (5 capability cards)

`[about_eyebrow]`
- 🇻🇳 Về chúng tôi
- 🇬🇧 About us
- 🇨🇳 关于我们

`[about_title]`
- 🇻🇳 Khai thác bền vững. Chế biến chính xác. Giao hàng đúng hẹn.
- 🇬🇧 Sustainable mining. Precise milling. On-time delivery.
- 🇨🇳 可持续开采。精准加工。准时交付。

`[about_intro]`
- 🇻🇳 Khởi nguồn từ vùng đá vôi trắng Quỳ Hợp – Nghệ An, Long Anh sở hữu mỏ nguyên liệu chất lượng cao với độ trắng vượt 98% và hàm lượng CaCO₃ trên 98,5%.
- 🇬🇧 Originating from the white limestone region of Quy Hop, Nghe An, Long Anh owns high-grade quarries with whiteness exceeding 98% and CaCO₃ content above 98.5%.
- 🇨🇳 源自越南义安省归合县的白色石灰岩区,龙英拥有高品质矿源,白度超过98%,碳酸钙含量超过98.5%。

#### Card 1 — Năng lực sản xuất

`[cap_capacity_title]`
- 🇻🇳 Năng lực sản xuất
- 🇬🇧 Production capacity
- 🇨🇳 生产能力

`[cap_capacity_body]`
- 🇻🇳 05 nhà máy với tổng diện tích 12ha, dây chuyền hiện đại — công suất đạt trên 350,000 tấn/năm.
- 🇬🇧 5 plants over 12ha of modern lines — capacity exceeding 350,000 tons/year.
- 🇨🇳 5座工厂占地12公顷,配备现代化生产线 — 年产能超过35万吨。

#### Card 2 — Nguồn nguyên liệu

`[cap_raw_title]`
- 🇻🇳 Nguồn nguyên liệu
- 🇬🇧 Raw material
- 🇨🇳 原料来源

`[cap_raw_body]`
- 🇻🇳 Đá vôi trắng nguyên sinh từ Quỳ Hợp – Nghệ An, độ trắng > 98% và CaCO₃ > 98.5% — kiểm soát từ gốc.
- 🇬🇧 Pristine white limestone from Quy Hop · whiteness > 98%, CaCO₃ > 98.5% — controlled at the source.
- 🇨🇳 源自归合-义安省的原始白石灰岩 · 白度>98%,碳酸钙>98.5% — 从源头控制。

#### Card 3 — Cơ sở hạ tầng

`[cap_infra_title]`
- 🇻🇳 Cơ sở hạ tầng
- 🇬🇧 Infrastructure
- 🇨🇳 基础设施

`[cap_infra_body]`
- 🇻🇳 Hệ thống dây chuyền nghiền và phủ Stearic Acid theo công nghệ Châu Âu, vận hành đồng bộ và ổn định.
- 🇬🇧 EU-spec grinding and stearic-acid coating lines, running in stable synchronization.
- 🇨🇳 欧洲标准的研磨和硬脂酸涂层生产线,稳定同步运行。

#### Card 4 — Kiểm định chất lượng

`[cap_qc_title]`
- 🇻🇳 Kiểm định chất lượng
- 🇬🇧 Quality control
- 🇨🇳 质量检验

`[cap_qc_body]`
- 🇻🇳 Phòng QC kiểm tra từng lô — độ trắng, CaCO₃, độ ẩm, cỡ hạt — kèm COA và MSDS theo tiêu chuẩn ISO 9001:2015.
- 🇬🇧 Per-batch QC — whiteness, CaCO₃, moisture, particle size — with COA and MSDS to ISO 9001:2015.
- 🇨🇳 每批次QC检测 — 白度、碳酸钙、水分、粒径 — 提供符合ISO 9001:2015的COA和MSDS。

#### Card 5 — Đóng gói sản phẩm

`[cap_pack_title]`
- 🇻🇳 Đóng gói sản phẩm
- 🇬🇧 Packaging
- 🇨🇳 产品包装

`[cap_pack_body]`
- 🇻🇳 Đáp ứng mọi quy cách: PP 25kg/50kg, jumbo 250kg/500kg/1000kg và bulk theo yêu cầu khách hàng.
- 🇬🇧 Every spec covered: PP 25/50kg, jumbo 250/500/1000kg, and bulk to customer requirements.
- 🇨🇳 满足各种规格:PP 25/50公斤、吨袋250/500/1000公斤,以及按客户需求散装。

### 2.5 Section "Chứng nhận" (4 cert cards)

`[certs_eyebrow]`
- 🇻🇳 Chứng chỉ
- 🇬🇧 Certifications
- 🇨🇳 认证

`[certs_title]`
- 🇻🇳 Đạt chuẩn chất lượng quốc tế.
- 🇬🇧 Built to international standards.
- 🇨🇳 符合国际标准。

`[certs_subtitle]`
- 🇻🇳 Mỗi lô sản phẩm đều được kiểm tra QC theo ISO 9001, kèm COA và MSDS — đáp ứng yêu cầu khắt khe nhất từ thị trường Hàn Quốc, Nhật Bản, Ấn Độ và Trung Đông.
- 🇬🇧 Each batch is QC-controlled to ISO 9001 and ships with COA and MSDS — meeting the toughest requirements from Korea, Japan, India and the Middle East.
- 🇨🇳 每批产品均按ISO 9001进行QC检测,提供COA和MSDS — 满足韩国、日本、印度和中东市场最严苛的要求。

`[cert_iso_desc]`
- 🇻🇳 Hệ thống quản lý chất lượng
- 🇬🇧 Quality Management System
- 🇨🇳 质量管理体系

`[cert_reach_desc]`
- 🇻🇳 Tuân thủ hóa chất Châu Âu
- 🇬🇧 EU Chemical Compliance
- 🇨🇳 欧盟化学品合规

`[cert_sgs_desc]`
- 🇻🇳 Kiểm định độc lập độ trắng & cỡ hạt
- 🇬🇧 Independent test for whiteness & particle size
- 🇨🇳 独立白度和粒径检测

`[cert_msds_desc]`
- 🇻🇳 Phiếu an toàn hóa chất sản phẩm
- 🇬🇧 Material safety data sheet
- 🇨🇳 材料安全数据表

### 2.6 Section "Năng lực xuất khẩu" (map)

`[export_eyebrow]`
- 🇻🇳 Năng lực xuất khẩu
- 🇬🇧 Export capability
- 🇨🇳 出口能力

`[export_title]`
- 🇻🇳 Sẵn sàng cho thị trường quốc tế
- 🇬🇧 Built for international shipping
- 🇨🇳 为国际航运而打造

`[export_subtitle]`
- 🇻🇳 Hệ thống đóng gói đa dạng từ bao 25 kg, jumbo bag 1 tấn đến container rời. Giao hàng FOB cảng Cửa Lò & Hải Phòng.
- 🇬🇧 Packaging from 25 kg bag, 1-ton jumbo bag, to bulk container. FOB Cua Lo & Hai Phong.
- 🇨🇳 从25公斤袋装、1吨吨袋到散装集装箱的多种包装。FOB窗碧港和海防港。

#### 4 feature cards trên map

`[ef_quality_title]` / `[ef_quality_body]`
- 🇻🇳 Chất lượng cao cấp / Độ trắng 98%+, CaCO₃ 98.5%+
- 🇬🇧 Premium Quality / Whiteness 98%+, CaCO₃ 98.5%+
- 🇨🇳 优质碳酸钙 / 白度 98%+,CaCO₃ 98.5%+

`[ef_global_title]` / `[ef_global_body]`
- 🇻🇳 Tầm phủ toàn cầu / 12 quốc gia · 8+ thị trường
- 🇬🇧 Global Reach / 12 countries · 8+ key markets
- 🇨🇳 全球覆盖 / 12个国家 · 8+核心市场

`[ef_logistics_title]` / `[ef_logistics_body]`
- 🇻🇳 Logistics tin cậy / FOB cảng Cửa Lò & Hải Phòng
- 🇬🇧 Reliable Logistics / FOB Cua Lo & Hai Phong ports
- 🇨🇳 可靠物流 / FOB窗碧港和海防港

`[ef_trust_title]` / `[ef_trust_body]`
- 🇻🇳 Niềm tin khách hàng / 10+ năm đối tác dài hạn
- 🇬🇧 Customer Trust / 10+ years long-term partners
- 🇨🇳 客户信任 / 10年以上稳定合作

#### Markets (8 quốc gia trên map)
`[markets]` = Hàn Quốc · Nhật Bản · Ấn Độ · Bangladesh · Indonesia · UAE · Ai Cập · Thổ Nhĩ Kỳ

#### Caption dưới map
- 🇻🇳 Từ nhà máy của chúng tôi đến cảng của bạn — giao hàng chất lượng, xây dựng niềm tin.
- 🇬🇧 From our factory to your destination — delivering quality, building trust.
- 🇨🇳 从我们的工厂到您的目的地 — 优质交付,信任建立。

### 2.7 Section "Liên hệ" (form + info)

`[contact_eyebrow]`
- 🇻🇳 Liên hệ
- 🇬🇧 Contact
- 🇨🇳 联系

`[contact_title]`
- 🇻🇳 Hãy bắt đầu từ một câu hỏi.
- 🇬🇧 Start with a single question.
- 🇨🇳 从一个问题开始。

`[contact_subtitle]`
- 🇻🇳 Đội ngũ kinh doanh phản hồi trong vòng 24h làm việc — kèm bảng spec, COA và báo giá FOB.
- 🇬🇧 Our sales team replies within 24 business hours — with spec sheet, COA and FOB pricing.
- 🇨🇳 我们的销售团队在24个工作小时内回复 — 提供规格表、COA和FOB报价。

---

## 📖 3. TRANG GIỚI THIỆU (about.html)

### 3.1 Page header

`[ab_page_title]`
- 🇻🇳 Khoáng đá nguyên sinh từ Nghệ An
- 🇬🇧 Pure mineral stone from Nghe An
- 🇨🇳 源自义安省的原始矿物石材

`[ab_page_sub]`
- 🇻🇳 Hơn 20 năm khai thác và chế biến — chúng tôi xây dựng từng mối quan hệ qua từng container giao đúng hẹn.
- 🇬🇧 20+ years of mining and milling — we build each partnership through containers delivered on time.
- 🇨🇳 20多年的开采与加工 — 我们通过准时交付的每一个集装箱建立每一份合作关系。

### 3.2 Câu chuyện (intro)

`[ab_story_eyebrow]`
- 🇻🇳 Câu chuyện
- 🇬🇧 Our story
- 🇨🇳 我们的故事

`[ab_story_title]`
- 🇻🇳 Khai thác bền vững. Chế biến chính xác.
- 🇬🇧 Sustainably mined. Precisely milled.
- 🇨🇳 可持续开采。精准加工。

`[ab_story_p3]` # Đoạn cuối phần intro
- 🇻🇳 Chúng tôi xem mỗi tấn bột đá là một cam kết — về chất lượng, thời hạn và mối quan hệ lâu dài với đối tác.
- 🇬🇧 Every ton of stone is a promise — to quality, to deadlines, and to a long-term partnership.
- 🇨🇳 我们将每一吨石粉视为一份承诺 — 对品质、对期限、对与合作伙伴的长期关系。

`[ab_founder_name]` = Nguyễn Long Anh
`[ab_founder_role]`
- 🇻🇳 Chủ tịch · Sáng lập
- 🇬🇧 Founder · Chairman
- 🇨🇳 董事长 · 创始人

### 3.3 Timeline (5 mốc lịch sử)

`[ab_time_title]`
- 🇻🇳 20 năm — một mạch đá
- 🇬🇧 20 years — one continuous vein
- 🇨🇳 20年 — 一脉相承

#### Mốc 1: 2008 — Khởi nguồn
- 🇻🇳 Thành lập tại Quỳ Hợp, Nghệ An — bắt đầu từ một mỏ đá vôi trắng.
- 🇬🇧 Founded in Quy Hop, Nghe An — starting from a single white limestone quarry.
- 🇨🇳 在义安省归合县创立 — 从一个白石灰岩矿场起步。

#### Mốc 2: 2013 — Nhà máy đầu
- 🇻🇳 Lắp đặt dây chuyền nghiền khô đầu tiên, công suất 80,000 tấn/năm.
- 🇬🇧 Installed our first dry-grinding line at 80,000 tons/year capacity.
- 🇨🇳 安装首条干法研磨生产线,年产能8万吨。

#### Mốc 3: 2017 — Phủ Stearic
- 🇻🇳 Đưa vào vận hành dây chuyền phủ Stearic Acid theo công nghệ EU.
- 🇬🇧 Commissioned a stearic-acid coating line built to European specs.
- 🇨🇳 投产符合欧洲标准的硬脂酸涂层生产线。

#### Mốc 4: 2020 — ISO 9001
- 🇻🇳 Đạt chứng nhận ISO 9001:2015. Mở rộng xuất khẩu sang Hàn Quốc, Nhật Bản.
- 🇬🇧 Certified ISO 9001:2015. Began exports to Korea and Japan.
- 🇨🇳 获得ISO 9001:2015认证。开始向韩国、日本出口。

#### Mốc 5: 2024 — Mở rộng
- 🇻🇳 Khánh thành xưởng đá Slab 1.6×2.4m. Tổng công suất đạt 350,000 tấn/năm.
- 🇬🇧 Opened our 1.6×2.4m Slab workshop. Total capacity reached 350,000 t/y.
- 🇨🇳 开设1.6×2.4米大板工坊。总产能达到35万吨/年。

### 3.4 Giá trị cốt lõi (3 cards)

`[ab_values_eyebrow]`
- 🇻🇳 Giá trị cốt lõi
- 🇬🇧 Core values
- 🇨🇳 核心价值

`[ab_values_title]`
- 🇻🇳 Ba điều chúng tôi không bao giờ thỏa hiệp
- 🇬🇧 Three things we never compromise
- 🇨🇳 我们绝不妥协的三件事

#### Value 1: Chất lượng nguyên sinh
- 🇻🇳 Mỏ riêng tại Quỳ Hợp với độ trắng > 98% và CaCO₃ > 98.5% — kiểm soát từ gốc.
- 🇬🇧 Owned quarry in Quy Hop · whiteness >98%, CaCO₃ >98.5% — controlled at the source.
- 🇨🇳 归合自有矿场 · 白度>98%、碳酸钙>98.5% — 从源头控制。

#### Value 2: Công nghệ chính xác
- 🇻🇳 Dây chuyền nghiền và phủ Stearic Acid theo công nghệ Châu Âu, kiểm tra từng lô.
- 🇬🇧 EU-spec grinding and stearic-acid coating lines · per-batch QC.
- 🇨🇳 欧洲标准研磨和硬脂酸涂层生产线 · 每批次QC。

#### Value 3: Cam kết giao hàng
- 🇻🇳 Cảng Cửa Lò & Hải Phòng — đóng gói linh hoạt, lịch giao đúng hẹn.
- 🇬🇧 Cua Lo & Hai Phong ports · flexible packaging, schedules we keep.
- 🇨🇳 窗碧港和海防港 · 灵活包装,按期履约。

### 3.5 Năng lực sản xuất

`[ab_caps_title]`
- 🇻🇳 Hệ thống nhà máy. Đo bằng con số.
- 🇬🇧 Plant infrastructure. Measured in numbers.
- 🇨🇳 工厂基础设施。用数字衡量。

`[ab_caps_body]`
- 🇻🇳 Hệ thống nhà máy của Long Anh được thiết kế để sản xuất ổn định, công suất lớn và linh hoạt theo từng đơn hàng B2B.
- 🇬🇧 Long Anh's plants are built for stable output, high capacity, and B2B-flexible production.
- 🇨🇳 龙英的工厂设计为稳定生产、大产能、按B2B订单灵活调整。

#### 6 Capability rows
- Mỏ đá vận hành: 05 mỏ
- Công suất hàng năm: 350,000 tấn
- Dây chuyền nghiền khô: 06 dây chuyền
- Dây chuyền phủ Stearic: 02 dây chuyền
- Đóng gói: 25kg · Jumbo 1T · Bulk
- Cảng xuất hàng: Cửa Lò · Hải Phòng

### 3.6 Kho bãi & Logistics

`[ab_warehouse_eyebrow]`
- 🇻🇳 Kho bãi & Logistics
- 🇬🇧 Warehouse & Logistics
- 🇨🇳 仓库与物流

`[ab_warehouse_title]`
- 🇻🇳 Sẵn sàng giao hàng — đúng hẹn, đúng quy cách.
- 🇬🇧 Ready to ship — on time, to spec.
- 🇨🇳 准时发货 — 按规格交付。

### 3.7 CTA cuối trang

`[ab_cta_title]`
- 🇻🇳 Hãy bắt đầu từ một câu hỏi.
- 🇬🇧 Start with a single question.
- 🇨🇳 从一个问题开始。

---

## 🛒 4. TRANG SẢN PHẨM (products.html)

### 4.1 Page header

`[pr_page_title]`
- 🇻🇳 Hai dòng sản phẩm. Năm tiêu chuẩn.
- 🇬🇧 Two product lines. Five SKUs.
- 🇨🇳 两大产品系列。五个标准。

`[pr_page_sub]`
- 🇻🇳 Từ bột đá CaCO₃ siêu mịn cho compound nhựa, đến đá tự nhiên cỡ lớn cho công trình cao cấp — tất cả đều đến từ một mỏ duy nhất.
- 🇬🇧 From ultra-fine CaCO₃ for plastic compounds, to large-format natural stone for premium projects — all from a single quarry.
- 🇨🇳 从塑料复合材料用的超细碳酸钙粉,到高端项目用的大尺寸天然石材 — 全部来自同一矿源。

### 4.2 Stats strip (4 ô)

- 05 dòng sản phẩm chính
- 98%+ độ trắng CaCO₃
- 3–20µm cỡ hạt
- 12 thị trường xuất khẩu

### 4.3 Category tiles

`[pr_cat_powder_title]`
- 🇻🇳 Bột đá CaCO₃
- 🇬🇧 CaCO₃ powder
- 🇨🇳 碳酸钙粉

`[pr_cat_powder_desc]`
- 🇻🇳 Coated · Uncoated · 3–20 µm — phụ gia cho nhựa, sơn, giấy, thức ăn chăn nuôi.
- 🇬🇧 Coated · Uncoated · 3–20 µm — additive for plastics, paint, paper, animal feed.
- 🇨🇳 涂层 · 未涂层 · 3–20 µm — 用于塑料、涂料、纸张、动物饲料的添加剂。

`[pr_cat_stone_title]`
- 🇻🇳 Đá ốp lát tự nhiên
- 🇬🇧 Natural cladding stone
- 🇨🇳 天然石材饰面

`[pr_cat_stone_desc]`
- 🇻🇳 Slab · Đá xẻ · Đá trang trí — cho công trình và không gian sống cao cấp.
- 🇬🇧 Slab · Cut tile · Decorative — for premium architecture and living spaces.
- 🇨🇳 大板 · 定制石材 · 装饰石材 — 用于高端建筑和生活空间。

### 4.4 Quote CTA banner cuối trang

`[pr_quote_title]`
- 🇻🇳 Cần báo giá FOB cho lô hàng tiếp theo?
- 🇬🇧 Need an FOB quote for your next shipment?
- 🇨🇳 需要下次发货的FOB报价?

`[pr_quote_body]`
- 🇻🇳 Gửi yêu cầu kèm cỡ hạt, số lượng và cảng đến — chúng tôi phản hồi trong 24h làm việc.
- 🇬🇧 Send us your particle size, volume and destination port — we reply within 24 business hours.
- 🇨🇳 请发送粒径、数量和目的港信息 — 我们将在24个工作小时内回复。

---

## 📦 5. CHI TIẾT 5 SẢN PHẨM (product.html?code=P-XX)

### 5.1 P-01 — Bột đá CaCO₃ không phủ

**Tên sản phẩm**
- 🇻🇳 Bột đá CaCO₃ không phủ
- 🇬🇧 Uncoated CaCO₃ powder
- 🇨🇳 未涂层碳酸钙粉

**Mô tả ngắn**
- 🇻🇳 Bột đá nghiền khô độ trắng cao, đa dạng cỡ hạt — dùng cho sơn, bột bả, keo dán, phụ gia thức ăn chăn nuôi và masterbatch.
- 🇬🇧 Dry-ground GCC with high whiteness in multiple particle sizes — for paint, putty, adhesives, animal-feed additives and masterbatch.
- 🇨🇳 高白度干法研磨碳酸钙粉,多种粒径 — 用于涂料、腻子、胶粘剂、动物饲料添加剂和母粒。

**Mô tả chi tiết (long description)**
- 🇻🇳 Sản phẩm bột đá CaCO₃ không phủ được nghiền khô từ nguồn đá vôi trắng nguyên sinh tại mỏ Quỳ Hợp – Nghệ An. Với hàm lượng CaCO₃ vượt 98.5% và độ trắng trên 98%, sản phẩm đáp ứng các tiêu chuẩn khắt khe nhất...
- (English / Chinese tương ứng)

**Variants (cỡ hạt + giá VND/tấn)**
| ID | Cỡ | Giá (VND) | Stock | Phổ biến |
|----|-----|-----------|-------|----------|
| 3um | 3 µm | 4,500,000 | 250 | ✓ |
| 8um | 8 µm | 4,200,000 | 320 | |
| 10um | 10 µm | 3,900,000 | 450 | |
| 12um | 12 µm | 3,700,000 | 380 | |
| 15um | 15 µm | 3,500,000 | 600 | |
| 17um | 17 µm | 3,300,000 | 280 | |
| 18um | 18 µm | 3,200,000 | 220 | |
| 20um | 20 µm | 3,000,000 | 580 | |

**Đơn hàng tối thiểu (MOQ)** = 25 tấn
**Thời gian sản xuất** = 7–14 ngày

**Ứng dụng (6 mục)** — Sơn nước & sơn dầu · Bột bả tường · Keo dán công nghiệp · Thức ăn chăn nuôi · Masterbatch nhựa · Giấy & cao su

**Đóng gói (4 mục)** — Bao PP 25kg · Bao PP 50kg · Jumbo bag 1 tấn · Container rời (bulk)

---

### 5.2 P-02 — Bột đá CaCO₃ phủ Stearic Acid
[Cấu trúc tương tự P-01. Variants giá cao hơn 30-40%.]

### 5.3 P-03 — Đá Slab
**Variants:** 1.6×2.4×18mm (6.8M) · 1.6×2.4×20mm (7.5M) · 1.6×2.4×30mm (9.8M) · 1.4×2.0×20mm (5.4M) · 1.0×2.0×20mm (3.9M) — đơn vị tấm

### 5.4 P-04 — Đá xẻ quy cách
**Variants:** 60×30×20mm · 40×60×20mm · 80×40×20mm · 60×30×30mm · 40×60×30mm — đơn vị m²

### 5.5 P-05 — Đá trang trí
**Variants:** Đá viền hồ bơi · Đá lát sân vườn 30×30 · Đá bước đi 50×50 · Đá ốp tường rào — đơn vị m²

---

## 💼 6. TRANG TUYỂN DỤNG (career.html)

### 6.1 Hero

`[cr_hero_eyebrow]`
- 🇻🇳 Cơ hội nghề nghiệp
- 🇬🇧 Career Opportunities
- 🇨🇳 职业机会

`[cr_hero_title]`
- 🇻🇳 Gia nhập đội ngũ Long Anh — nơi tài năng được phát triển.
- 🇬🇧 Join the Long Anh team — where talent grows.
- 🇨🇳 加入龙英团队 — 让人才得以成长。

`[cr_hero_sub]`
- 🇻🇳 Chúng tôi xây dựng một môi trường làm việc chuyên nghiệp, năng động và minh bạch, nơi mỗi cá nhân đều có cơ hội đóng góp và trưởng thành cùng doanh nghiệp.
- 🇬🇧 We build a professional, dynamic and transparent working environment...
- 🇨🇳 我们打造专业、活力、透明的工作环境...

### 6.2 Filter departments (5 phòng ban)

- Sản xuất / Manufacturing / 生产
- Kinh doanh / Sales / 销售
- Kỹ thuật / Engineering / 工程
- Chất lượng / Quality / 质量
- Hành chính / Admin / 行政

### 6.3 Văn hóa doanh nghiệp (6 values)

`[cr_values_title]`
- 🇻🇳 Điều làm nên Long Anh
- 🇬🇧 What makes Long Anh
- 🇨🇳 龙英的特色

#### Value 1: Chính trực & Minh bạch
- 🇻🇳 Mọi quyết định đều dựa trên dữ liệu và sự thật. Chúng tôi đối thoại cởi mở và nhận trách nhiệm về kết quả.

#### Value 2: Tinh thần đồng đội
- 🇻🇳 Thành công là kết quả của tập thể. Chúng tôi đặt lợi ích chung lên trên và hỗ trợ nhau phát triển mỗi ngày.

#### Value 3: Đổi mới liên tục
- 🇻🇳 Chúng tôi liên tục cải tiến quy trình, nâng cấp công nghệ và tìm kiếm các giải pháp sáng tạo để dẫn đầu ngành.

#### Value 4: Chất lượng là cốt lõi
- 🇻🇳 Từ nguyên liệu đầu vào đến sản phẩm đầu ra, tiêu chuẩn ISO 9001 không phải là đích đến — mà là nền tảng tối thiểu.

#### Value 5: Phát triển bền vững
- 🇻🇳 Chúng tôi khai thác và sản xuất có trách nhiệm với môi trường và cộng đồng địa phương — vì một tương lai lâu dài.

#### Value 6: Hướng ra thị trường quốc tế
- 🇻🇳 Với 12 thị trường xuất khẩu, nhân viên Long Anh được tiếp xúc với tư duy và tiêu chuẩn toàn cầu ngay tại Nghệ An.

### 6.4 Phúc lợi (6 benefits)

`[cr_benefits_title]`
- 🇻🇳 Chúng tôi chăm lo cho bạn
- 🇬🇧 We take care of you
- 🇨🇳 我们关心你

#### Benefit 1: Lương & Thưởng cạnh tranh
#### Benefit 2: Bảo hiểm toàn diện
#### Benefit 3: Đào tạo & Phát triển
#### Benefit 4: Môi trường làm việc hiện đại
#### Benefit 5: Nghỉ phép & Lễ tết
#### Benefit 6: Hoạt động tập thể

### 6.5 Quy trình tuyển dụng (4 bước)

1. Nộp hồ sơ — Submit application — 提交申请
2. Phỏng vấn sơ bộ — Initial interview — 初步面试
3. Phỏng vấn chuyên sâu — In-depth interview — 深度面试
4. Nhận offer & Onboarding — Offer & Onboarding — 录用与入职

---

## 👤 7. CHI TIẾT 8 VỊ TRÍ (job.html?id=N)

### Job 1 — Kỹ sư Vận hành nhà máy
- **Phòng ban:** Sản xuất
- **Địa điểm:** Quỳ Hợp, Nghệ An
- **Lương:** 18 – 30 triệu VND
- **Kinh nghiệm:** 2–5 năm
- **Hạn nộp:** 30/06/2026

[Mô tả · 6 trách nhiệm · 6 yêu cầu · 8 quyền lợi — đầy đủ trong code]

### Job 2 — Chuyên viên Kinh doanh Xuất khẩu
- Lương: 15 – 25 triệu + hoa hồng

### Job 3 — Kỹ thuật viên Phòng QC
- Lương: 12 – 20 triệu

### Job 4 — Kỹ sư Bảo trì thiết bị
- Lương: 20 – 35 triệu

### Job 5 — Chuyên viên Nhân sự & Tuyển dụng
- Lương: 12 – 18 triệu

### Job 6 — Trưởng phòng Kinh doanh Nội địa
- Lương: 30 – 50 triệu + thưởng

### Job 7 — Kỹ sư Quy trình & Cải tiến
- Lương: 15 – 25 triệu

### Job 8 — Kế toán Tổng hợp
- Lương: 13 – 22 triệu

> 💡 Mỗi job có Mô tả + Trách nhiệm + Yêu cầu + Quyền lợi (3 ngôn ngữ).
> Nếu muốn sửa nội dung chi tiết của job nào, ghi rõ "Job X — sửa Mô tả thành: ..." để tôi update đúng vị trí.

---

## 🔧 8. ADMIN PANEL (admin/)

Trang admin chỉ là **mockup UI** (không có database thật), text chủ yếu là demo. Nếu muốn chỉnh, ghi rõ tên trang (Dashboard / Pages / Products / ...).

---

# ✍️ Cách sửa text

**Ví dụ:** Bạn muốn đổi tagline thành "Khoáng sản chất lượng cao Việt Nam".

Trong file này, tìm `[tagline]` và sửa:
```
[tagline]
- 🇻🇳 Khoáng sản chất lượng cao Việt Nam   ← sửa dòng này
- 🇬🇧 Vietnamese High-Quality Minerals     ← sửa luôn nếu muốn
- 🇨🇳 越南优质矿产                          ← sửa luôn nếu muốn
```

Sau đó **gửi lại file này** và nói "đã sửa xong" — tôi sẽ tự cập nhật tất cả file HTML và deploy.

---

# 📌 Số liệu / hằng số có thể sửa nhanh

| Thông tin | Giá trị hiện tại |
|-----------|------------------|
| Năm kinh nghiệm | 20+ |
| Công suất/năm | 350,000 tấn |
| Số quốc gia xuất khẩu | 12 |
| Số mỏ đá | 5 |
| Độ trắng CaCO₃ | 98%+ |
| Cỡ hạt | 3–20 µm |
| Hàm lượng CaCO₃ | 98.5% |
| Số nhân viên | 150+ |

Sửa các con số trên rồi gửi lại nếu cần update.
