# Long Anh Admin — Design Spec

> Thiết kế UI/UX cho hai màn hình quan trọng nhất của admin panel:
> **Dashboard** (`admin/index.html`) và **Trình chỉnh sửa Trang chủ**
> (`admin/page-edit-home.html` — subpage của *Trang* → *Trang chủ*).

---

## 0. Design tokens (dùng chung)

Định nghĩa trong `admin/admin-shell.jsx` qua biến CSS `:root`.

### Màu sắc

| Token | Hex | Dùng cho |
|---|---|---|
| `--ad-primary` | `#0F3D7A` | Brand navy — sidebar active, nút primary, link |
| `--ad-primary-soft` | `#E8F0FB` | Background hover/active của item |
| `--ad-accent` | `#F08023` | Orange — CTA hero, badge unread, "Đang gõ" dot |
| `--ad-accent-soft` | `#FFF1E5` | Background icon Tin tức trong stat card |
| `--ad-success` `--ad-success-soft` | `#16A34A` / `#DCFCE7` | Trạng thái "Đã xuất bản", delta tăng |
| `--ad-warn` `--ad-warn-soft` | `#D97706` / `#FEF3C7` | "Bản nháp", flash toast |
| `--ad-danger` `--ad-danger-soft` | `#DC2626` / `#FEE2E2` | Liên hệ chưa đọc, nút xóa |
| `--ad-info` `--ad-info-soft` | `#2563EB` / `#DBEAFE` | "Hẹn giờ" |
| `--ad-bg` | `#F7F7F8` | Body background |
| `--ad-surface` | `#FFFFFF` | Card, header, sidebar |
| `--ad-line` `--ad-line-soft` | `#E5E7EB` / `#F0F1F3` | Border |
| `--ad-text` `--ad-text-soft` `--ad-text-mute` | `#111827` / `#4B5563` / `#9CA3AF` | 3 cấp độ chữ |

### Typography

- **Inter** 400/500/600/700 — UI chung
- **JetBrains Mono** 400/500 — ID, slug, code, timestamp
- Heading scale: `H1 24px/700`, `H2 18px/600`, `H3 14-15px/600`
- Body: `14px/1.5`; meta/caption: `11.5-12.5px`

### Bán kính & shadow

- `--ad-radius-sm 6` · `--ad-radius 8` · `--ad-radius-lg 12`
- `--ad-shadow` cho card / topbar
- `--ad-shadow-md` cho dropdown / popover

### Layout shell (`AdPage`)

```
┌─ AdSidebar (240px, sticky) ─┬─ AdTopbar (56px, sticky) ──────┐
│                              ├─────────────────────────────────┤
│  Brand · nav · system foot  │  ad-body (max-w 1400, p 24/32) │
│                              │  ad-crumb · ad-phead · children│
└──────────────────────────────┴─────────────────────────────────┘
```

`AdPage` nhận: `active`, `crumb`, `title`, `sub`, `actions`, `full?`, `children`.
Khi `full` → bỏ max-width (dùng cho contacts, livechat).

---

## 1. Dashboard — `admin/index.html`

### 1.1 Mục đích

Trang đáp đầu tiên sau khi đăng nhập admin. Trả lời 3 câu hỏi trong < 5 giây:

1. **Tình trạng nội dung site đang ra sao?** → 4 stat card
2. **Người dùng có vào đọc không?** → biểu đồ 30 ngày
3. **Có gì cần xử lý ngay?** → tin mới đăng, hành động nhanh, hoạt động team

### 1.2 Bố cục dọc (top → bottom)

```
┌── Page header ───────────────────────────────────────────────┐
│  Chào Anh Nam 👋                                            │
│  Hôm nay là Thứ Năm, 07/05/2026 — đây là tổng quan tuần này │
├── Dải 4 stats (grid 4 cột) ──────────────────────────────────┤
│  [Sản phẩm 127]  [Tin tức 43]  [Lượt xem 12,450]  [LH 5]   │
├── 2 cột (1.6 : 1) ───────────────────────────────────────────┤
│  ┌── Lượt xem website ─────────┐  ┌── Tin tức mới đăng ──┐ │
│  │  30 ngày · +18%   [30 ngày▾]│  │  4 row · ảnh + tiêu  │ │
│  │  ┌─── area chart ──────┐    │  │  đề + ngày           │ │
│  │  │ ╱╲ ╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱  │    │  │ ─────────────────── │ │
│  │  └─────────────────────┘    │  │  Xem tất cả ›        │ │
│  └─────────────────────────────┘  └──────────────────────┘ │
├── Hành động nhanh (4 link card) ─────────────────────────────┤
│  [✎ Sửa trang chủ] [+ Thêm SP] [📰 Viết tin] [⬆ Upload ảnh] │
├── Hoạt động gần đây (timeline) ──────────────────────────────┤
│  14:32 ┃ AN  Anh Nam sửa nội dung sản phẩm "Đá Granite..." │
│  13:10 ┃ LH  Chị Lan xuất bản bài viết "Báo giá tháng 5"  │
│  11:45 ┃ ⚙  Hệ thống có 1 liên hệ mới từ Nguyễn Văn A...  │
│  ...                                                         │
└──────────────────────────────────────────────────────────────┘
```

### 1.3 Stat cards (4 ô)

Component `StatCard({ icon, iconBg, iconColor, label, num, delta, deltaType })`.

| Card | Icon | Tone | Số mẫu | Delta |
|---|---|---|---|---|
| Sản phẩm | `rock` | navy | **127** | `+3 tuần này` (xanh) |
| Tin tức | `news` | cam | **43** | `+2 tuần này` (xanh) |
| Lượt xem (30 ngày) | `eye` | xanh lá | **12,450** | `+18% MoM` (xanh) |
| Liên hệ chưa đọc | `mail` | đỏ | **5** | `cần phản hồi` (xám) |

CSS chính:
```
.dash-stat        { background:#fff; border:1px solid var(--ad-line);
                    border-radius:10px; padding:18px 20px; }
.dash-stat-num    { font-size:30px; font-weight:700; letter-spacing:-.02em; }
.dash-stat-delta  { font-size:12px; padding:2px 7px; border-radius:99px; }
.dash-stat-delta.up   { background:var(--ad-success-soft); color:#15803D; }
.dash-stat-delta.flat { background:var(--ad-line-soft);     color:var(--ad-text-soft); }
```

### 1.4 Biểu đồ "Lượt xem website" — `ViewsChart`

- Area chart SVG tự vẽ, 30 điểm dữ liệu giả lập tăng dần 320 → 1240.
- Stroke `#0F3D7A` 2px, gradient fill từ `rgba(15,61,122,.18)` → 0%.
- 4 grid line ngang `#F0F1F3`.
- Highlight dot mỗi 5 điểm.
- Selector "30 ngày / 7 ngày / 90 ngày" ở góc phải card head.

Card cao **240px** chừa cho chart.

### 1.5 Card "Tin tức mới đăng"

4 row dạng list-item:

```
[42×32 thumb]  Tiêu đề bài 1 dòng (ellipsis)
                06/05/2026
─────────────────────────────────────────
[42×32 thumb]  Tiêu đề ...
                ...
```

- Hover: `background: #FBFBFC`.
- Footer button **"Xem tất cả ›"** → `news.html`.

### 1.6 Hành động nhanh (4 link card)

Grid 4 cột, mỗi card có icon vuông 32×32 + chữ nhãn.

| Nhãn | Icon (tone) | Link |
|---|---|---|
| Sửa trang chủ | `edit` (navy) | `page-edit-home.html` |
| Thêm sản phẩm | `plus` (cam) | `product-edit.html` |
| Viết tin tức | `news` (xanh lá) | `news.html` |
| Upload ảnh | `upload` (xanh dương) | `media.html` |

Hover toàn card: viền + nền chuyển sang `--ad-primary-soft`.

### 1.7 Hoạt động gần đây (timeline)

Mỗi row 3 cột:

```
14:32  [AN]  Anh Nam sửa nội dung sản phẩm "Đá Granite Đỏ"
└─time└─avatar └─body (b + text + link)
```

- `dash-act-time`: JetBrains Mono 11.5px, min-width 46px.
- `dash-act-av`: 26×26 tròn, navy/#FFF; biến `.sys` → xám cho hành động hệ thống.
- `dash-act-body a`: navy + 500 weight (link "tham chiếu").
- 6 row mẫu trộn user (AN, LH) và hệ thống (⚙).

---

## 2. Trình chỉnh sửa Trang chủ — `admin/page-edit-home.html`

### 2.1 Mục đích

Cho biên tập viên chỉnh **toàn bộ nội dung visible** của `/index.html` qua một
form duy nhất, mà KHÔNG cần đụng vào HTML. Mỗi section của trang web tương ứng
với một collapsible section trong editor.

### 2.2 Layout 3 tầng

```
┌── AdPage shell (sidebar 240 + topbar 56) ──────────────────────┐
│  Crumb: Trang chủ / Trang / Trang chủ                          │
│                                                                 │
│  ┌── pe-savebar (sticky top:56) ────────────────────────────┐ │
│  │ ← Quay lại  │ 📄 Trang chủ /  [Đã xuất bản] │ auto · 14:32│ │
│  │                                  [Xem][Lưu nháp][Xuất bản]│ │
│  └─────────────────────────────────────────────────────────────┘│
│  ┌── pe-langtabs ──────────────────────────────────────────────┐│
│  │ 🇻🇳 Tiếng Việt  |  🇬🇧 English  |  🇨🇳 中文          🔄 sync││
│  └─────────────────────────────────────────────────────────────┘│
│  ┌── pe-grid (1fr | 320px) ────────────────────────────────────┐│
│  │  pe-main (8 PeSection)         │  pe-side (sticky top:130)  ││
│  │                                 │  ┌── Trạng thái ─────────┐ ││
│  │  01 Hero                        │  │ ○ Nháp  ● Đã xuất bản ││
│  │  02 Stats                       │  │ ○ Hẹn giờ  ○ Đã ẩn   ││
│  │  03 Products                    │  └────────────────────────┘ ││
│  │  04 About 5-card grid           │  ┌── Slug ──────────────┐ ││
│  │  05 Certs                       │  │ /    [refresh]        ││
│  │  06 Export map                  │  └────────────────────────┘ ││
│  │  07 Contact                     │  ┌── Lịch sử thay đổi ──┐ ││
│  │  08 SEO                         │  │ v12 hiện tại         ││
│  │                                 │  │ v11 1d · LH          ││
│  │                                 │  │ v10 3d · AN          ││
│  │                                 │  └────────────────────────┘ ││
│  │                                 │  ┌── Cài đặt nâng cao ──┐ ││
│  │                                 │  │ ⚙ sitemap / index    ││
│  │                                 │  └────────────────────────┘ ││
│  └─────────────────────────────────────────────────────────────┘│
│                                              [Toast tự lưu ✓]  │
└─────────────────────────────────────────────────────────────────┘
```

### 2.3 Sticky savebar

CSS: `position:sticky; top:56` (ngay dưới topbar), nền trắng, viền dưới.

| Vùng | Nội dung |
|---|---|
| Trái | `← Quay lại` → `pages.html` |
| Giữa | `📄 Trang chủ` + slug `/` (chip mono) + status badge |
| Auto-save | dot xanh + "Đã tự lưu nháp · 14:32" (lề tự đẩy phải) |
| Phải | `[👁 Xem]` `[💾 Lưu nháp]` `[✓ Xuất bản]` (primary navy) |

### 2.4 Language tabs (3 ngôn ngữ)

Bar 3 tab với cờ và border-bottom 2px khi `.on`. Đồng bộ với `CONTENT.md` (VI/EN/ZH).
Right: badge `🔄 3 ngôn ngữ đồng bộ` (chữ xám).

### 2.5 8 PeSection chính

Mỗi section là một card có thể collapse, dùng helper `PeSection({ num, icon, title, sub, defaultOpen, children })`.

Header section:
```
┌─ pe-shead ─────────────────────────────────────────────────┐
│ [01]  [🪖 ico]  Hero — Banner đầu trang             ›     │
│                Eyebrow, tiêu đề 2 dòng, mô tả, 2 nút CTA  │
└────────────────────────────────────────────────────────────┘
```

| # | Tiêu đề | Icon | Mô tả ngắn | Nội dung chính |
|---|---|---|---|---|
| **01** | Hero — Banner đầu trang | `layers` | Eyebrow, tiêu đề 2 dòng, mô tả, 2 nút CTA và ảnh hero | • Eyebrow (cam nhỏ)<br>• Title dòng 1 (đen) + dòng 2 (cam)<br>• Description textarea<br>• 2 cặp (chữ + link) cho CTA chính/phụ<br>• `PeImg` ảnh hero 4:3 với alt text + nút "Đổi ảnh / Thư viện" |
| **02** | Stats — Dải 4 con số | `trend` | Năm KN, công suất, quốc gia, mỏ | Grid 4 ô; mỗi ô có nhãn STAT N + ô input số (`18px/700`) + ô input label |
| **03** | Sản phẩm — Năm dòng chính | `rock` | Carousel sản phẩm dưới hero | Eyebrow, tiêu đề, phụ đề; select "Tự động/Thủ công"; chip 5 SKU P-01…P-05 (tag X xoá) |
| **04** | Về Long Anh — Lưới 5 ô năng lực | `grid` | NLSX · Nguyên liệu · Hạ tầng · QC · Đóng gói | Grid 2 cột `pe-card-edit`; mỗi card có thumbnail 16:9, ô tên, textarea mô tả, nút drag/xoá; tile `+` "Thêm card mới" |
| **05** | Chứng nhận quốc tế — 4 thẻ | `shield` | ISO 9001 / REACH / SGS / MSDS | List 4 dòng: tên cert / mô tả / đường dẫn logo |
| **06** | Năng lực xuất khẩu — Map + 4 features | `globe` | "Sẵn sàng cho thị trường quốc tế" | • Eyebrow + title + sub<br>• 2 hàng × 2 ô feature (title + body)<br>• `PeTags` 8 thị trường: Hàn Quốc · Nhật Bản · Ấn Độ · …<br>• Caption dưới map |
| **07** | Liên hệ — Form cuối trang | `mail` | Block CTA + form | Eyebrow, title, sub; email nhận `info@longanhcorp.com`, hotline `(+84) 912 779 799`, địa chỉ trụ sở |
| **08** | SEO & Mạng xã hội | `seo` | Hiển thị trên Google, Facebook, Zalo | `PeSeoSection` — meta title/desc, keywords tag, OG image + Google preview |

Section 05–08 mặc định **collapse**; 01–04 mặc định **mở**.

### 2.6 Form atoms (loaded from `admin-shell.jsx` + `page-edit-shell.jsx`)

| Component | Vai trò |
|---|---|
| `AdField({ label, req, help, children })` | Wrap input có nhãn + dấu `*` đỏ + caption help |
| `AdInput / AdTextarea / AdSelect` (class) | Input thường, h 36, focus ring `--ad-primary-soft` |
| `AdBadge({ status })` | Pill trạng thái `pub/draft/sched/hide`, nowrap |
| `AdSwitch({ on, onChange })` | Toggle 36×20 |
| `PeImg({ src, label, size })` | Khung ảnh 4:3 dashed, hover overlay "Đổi / Crop" |
| `PeTags({ tags })` | Chip tags trong khung, có ô input "Thêm tag…" |
| `PeSection({ num, icon, title, sub, defaultOpen, children })` | Collapsible accordion section |
| `PeSeoSection({ num, metaTitle, metaDesc, keywords, ogImage, googleSlug })` | Section SEO chung — Google preview tự render |
| `PeEditorShell(...)` | Khung tổng: savebar + lang tabs + grid main/side + 4 sidebar card mặc định + toast |

### 2.7 Sidebar phải (cố định khi cuộn — `top:130`)

4 card xếp dọc:

**a) Trạng thái** — 4 radio dạng pill, viền + nền chuyển sang `--ad-primary-soft` khi chọn

| Key | Label | Hint |
|---|---|---|
| `draft` | Nháp | Chỉ admin thấy được |
| `pub` | Đã xuất bản | Hiển thị trên website |
| `sched` | Hẹn giờ | Tự động xuất bản theo lịch |
| `hide` | Đã ẩn | Không hiển thị, giữ dữ liệu |

**b) Đường dẫn (Slug)** — input + nút refresh tạo lại từ tiêu đề; hiển thị preview `long-anh.com<b>/</b>`.

**c) Lịch sử thay đổi** — list v12…v9, mỗi row có version (mono), thời gian + người, badge "Hiện tại" hoặc nút restore.

**d) Cài đặt nâng cao** — 3 toggle:
- Hiển thị trong sitemap
- Cho phép Google index
- Yêu cầu đăng nhập

### 2.8 Hành vi (behavior)

- **Auto-save**: toast `✓ Đã lưu nháp tự động` xuất hiện 30s, sau đó fade out.
- **Sticky savebar** đè topbar — luôn nhìn thấy nút Xuất bản.
- **Permission guard** (admin-shell): URL `page-edit-home.html` map về quyền `pages`. quydom (chỉ có news/products/contacts/subscribers/livechat) → tự redirect về landing + toast "Bạn không có quyền…".
- **Lang tabs**: chuyển tab chỉ đổi state local `lang` — chưa wire vào CONTENT.md backend.
- **Collapse**: click vào header section toggle `open`. Chevron quay 90° khi mở.

### 2.9 Responsive

- ≥ 1024px: grid main + sidebar.
- < 1024px: sidebar nhảy xuống dưới main (mặc định grid của browser).
- Section card-grid 2 cột (`.pe-card-grid`) → 1 cột khi viewport hẹp (chưa media query — TODO nếu cần).

---

## 3. Liên kết file

| File | Vai trò |
|---|---|
| `admin/admin-shell.jsx` | Tokens · `AdPage` · `AdSidebar` · `AdTopbar` · `AdIcon` · `AdField` · `AdBadge` · `AdSwitch` · auth guard |
| `admin/page-edit-shell.jsx` | `PAGE_EDIT_CSS` · `PeSection` · `PeImg` · `PeTags` · `PeEditorShell` · `PeSeoSection` · sidebar cards mặc định |
| `admin/index.html` | Dashboard — section 1 trong tài liệu này |
| `admin/page-edit-home.html` | Editor Trang chủ — section 2 trong tài liệu này |
| `admin/pages.html` | List Trang — nút bút chì mỗi dòng dẫn vào `page-edit-<id>.html` |
| `CONTENT.md` | Nguồn dữ liệu chuẩn 3 ngôn ngữ — editor cần đồng bộ với file này |

---

## 4. Khuyến nghị mở rộng (tương lai)

1. **Wire vào backend thực** — hiện toàn bộ là client-side state (`useState`). Cần REST/GraphQL API để PUT về `CONTENT.md` hoặc CMS DB.
2. **Live preview** trong cột phải hoặc tab — render preview `index.html` realtime khi gõ.
3. **Diff giữa version** — click 2 version trong history → diff side-by-side.
4. **Image picker dùng chung** — `media.html` mở dạng modal khi click "Chọn từ thư viện".
5. **Drag để sắp xếp section / card** — hiện chỉ có icon `drag`, chưa wire drag handler.
6. **Validation 3 ngôn ngữ** — cảnh báo khi chuỗi EN/ZH rỗng so với VI (lấy gợi ý từ `i18n.html`).
7. **Conflict resolution** — 2 editor cùng sửa 1 trang → soft lock hoặc CRDT.
