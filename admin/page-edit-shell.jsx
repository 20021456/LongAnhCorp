// page-edit-shell.jsx — Shared CSS + components for all page-edit screens.
// Loaded by page-edit-*.html files together with admin-shell.jsx.
// Exposes: PAGE_EDIT_CSS, PeSection, PeImg, PeTags, PeStatusCard,
// PeSlugCard, PeVersionsCard, PeAdvancedCard, PeSavebar, PeLangTabs,
// PeBuildShell — a helper that renders the standard editor layout.

const PAGE_EDIT_CSS = `
  .pe-savebar { position:sticky; top:56px; z-index:10; background:var(--ad-surface);
        border-bottom:1px solid var(--ad-line); margin:0 -32px 24px; padding:14px 32px;
        display:flex; align-items:center; gap:14px; }
  .pe-savebar .back { color:var(--ad-text-soft); display:flex; align-items:center; gap:6px;
        font-size:13px; font-weight:500; }
  .pe-savebar .back:hover { color:var(--ad-text); }
  .pe-savebar .title { display:flex; align-items:center; gap:10px; font-weight:600; font-size:15px; }
  .pe-savebar .auto { display:flex; align-items:center; gap:6px; font-size:12px;
        color:var(--ad-text-mute); margin-left:auto; }
  .pe-savebar .auto::before { content:''; width:7px; height:7px; border-radius:50%;
        background:var(--ad-success); }

  .pe-langtabs { display:flex; gap:0; border-bottom:1px solid var(--ad-line); margin-bottom:24px; }
  .pe-langtab { padding:10px 18px; font-size:13.5px; font-weight:500; cursor:pointer;
        color:var(--ad-text-soft); border-bottom:2px solid transparent; margin-bottom:-1px;
        display:flex; align-items:center; gap:8px; }
  .pe-langtab.on { color:var(--ad-primary); border-color:var(--ad-primary); font-weight:600; }
  .pe-langtab .flag { font-size:14px; }

  .pe-grid { display:grid; grid-template-columns: 1fr 320px; gap:24px; align-items:flex-start; }
  .pe-main { min-width:0; display:flex; flex-direction:column; gap:16px; }
  .pe-side { display:flex; flex-direction:column; gap:16px; position:sticky; top:130px; }

  .pe-section { background:#fff; border:1px solid var(--ad-line);
        border-radius:10px; overflow:hidden; }
  .pe-shead { display:flex; align-items:center; gap:12px; padding:14px 18px;
        border-bottom:1px solid var(--ad-line-soft); cursor:pointer; user-select:none; }
  .pe-shead:hover { background:#FBFBFC; }
  .pe-shead .num { font-family:'JetBrains Mono',ui-monospace,monospace; font-size:11px;
        padding:3px 7px; background:var(--ad-line-soft); border-radius:4px;
        color:var(--ad-text-soft); font-weight:600; }
  .pe-shead .ico { width:32px; height:32px; border-radius:7px;
        background:var(--ad-primary-soft); color:var(--ad-primary);
        display:flex; align-items:center; justify-content:center; flex:none; }
  .pe-shead .titles { flex:1; min-width:0; }
  .pe-shead h3 { margin:0; font-size:14.5px; font-weight:600; }
  .pe-shead p { margin:1px 0 0; font-size:12.5px; color:var(--ad-text-mute); }
  .pe-shead .chev { color:var(--ad-text-mute); transition:.18s; }
  .pe-section.open .pe-shead .chev { transform:rotate(90deg); }
  .pe-sbody { padding:20px 22px; border-top:1px solid var(--ad-line-soft);
        background:#FCFCFD; }
  .pe-section:not(.open) .pe-sbody { display:none; }
  .pe-row { display:grid; grid-template-columns:1fr 1fr; gap:16px; }
  .pe-row.three { grid-template-columns:repeat(3, 1fr); }
  .pe-row.four { grid-template-columns:repeat(4, 1fr); }
  .pe-stack { display:flex; flex-direction:column; gap:14px; }

  .pe-imgrow { display:grid; grid-template-columns:200px 1fr; gap:16px; align-items:start; }
  .pe-imgrow .imgwrap { position:relative; border-radius:8px; overflow:hidden;
        aspect-ratio: 4 / 3; background:var(--ad-line-soft);
        border:1.5px dashed var(--ad-line); cursor:pointer; }
  .pe-imgrow .imgwrap img { width:100%; height:100%; object-fit:cover; display:block; }
  .pe-imgrow .imgwrap:hover .imgover { opacity:1; }
  .pe-imgrow .imgover { position:absolute; inset:0; background:rgba(15,23,42,.55);
        display:flex; align-items:center; justify-content:center; gap:8px;
        opacity:0; transition:.15s; }
  .pe-imgrow .imgsize { position:absolute; bottom:6px; left:6px; right:6px;
        font-size:10.5px; color:#fff; background:rgba(0,0,0,.55); padding:2px 7px;
        border-radius:4px; text-align:center; font-family:'JetBrains Mono',monospace; }

  .pe-card-grid { display:grid; grid-template-columns:1fr 1fr; gap:16px; }
  .pe-card-edit { background:#fff; border:1px solid var(--ad-line); border-radius:8px;
        padding:14px; display:flex; flex-direction:column; gap:12px; }
  .pe-card-edit .head { display:flex; align-items:center; gap:8px; padding-bottom:10px;
        border-bottom:1px solid var(--ad-line-soft); }
  .pe-card-edit .head .pill { font-family:'JetBrains Mono',monospace; font-size:10.5px;
        padding:2px 7px; background:var(--ad-primary-soft); color:var(--ad-primary);
        border-radius:99px; font-weight:600; }
  .pe-card-edit .head .name { font-weight:600; font-size:13px; flex:1; }
  .pe-card-edit .head button { border:0; background:transparent; cursor:pointer;
        color:var(--ad-text-mute); padding:4px; }
  .pe-card-edit .head button:hover { color:var(--ad-text); }
  .pe-card-edit .miniimg { aspect-ratio:16 / 9; border-radius:6px; overflow:hidden;
        background:var(--ad-line-soft); cursor:pointer; position:relative; }
  .pe-card-edit .miniimg img { width:100%; height:100%; object-fit:cover; }

  .pe-add-card { background:transparent; border:1.5px dashed var(--ad-line);
        border-radius:8px; padding:14px; display:flex; flex-direction:column;
        align-items:center; justify-content:center; gap:6px; color:var(--ad-text-mute);
        font-size:13px; cursor:pointer; min-height:140px; }
  .pe-add-card:hover { border-color:var(--ad-primary); color:var(--ad-primary);
        background:var(--ad-primary-soft); }

  .pe-strip { display:grid; grid-template-columns:repeat(4, 1fr); gap:10px; }
  .pe-strip-item { aspect-ratio:1; border-radius:6px; overflow:hidden;
        background:var(--ad-line-soft); cursor:pointer; position:relative; }
  .pe-strip-item img { width:100%; height:100%; object-fit:cover; }
  .pe-strip-item .drag { position:absolute; top:4px; left:4px; background:rgba(0,0,0,.55);
        color:#fff; border-radius:4px; padding:2px; opacity:0; transition:.15s; }
  .pe-strip-item:hover .drag { opacity:1; }

  .pe-status { display:flex; flex-direction:column; gap:8px; }
  .pe-status label { display:flex; align-items:center; gap:10px; padding:8px 10px;
        border:1px solid var(--ad-line); border-radius:6px; cursor:pointer; font-size:13px; }
  .pe-status label:hover { background:var(--ad-line-soft); }
  .pe-status label.on { border-color:var(--ad-primary); background:var(--ad-primary-soft); }
  .pe-status label .radio { width:14px; height:14px; border-radius:50%;
        border:1.5px solid var(--ad-line); flex:none; }
  .pe-status label.on .radio { border-color:var(--ad-primary); border-width:4px;
        background:#fff; }

  .pe-versions .v { display:flex; gap:10px; padding:10px 12px;
        border-bottom:1px solid var(--ad-line-soft); align-items:center; font-size:12.5px; }
  .pe-versions .v:last-child { border-bottom:0; }
  .pe-versions .v .when { color:var(--ad-text-mute); font-size:11.5px; }
  .pe-versions .v .num { font-family:'JetBrains Mono',monospace; font-weight:600;
        color:var(--ad-primary); flex:none; }
  .pe-versions .v button { border:0; background:transparent; color:var(--ad-text-mute);
        cursor:pointer; padding:4px; }
  .pe-versions .v button:hover { color:var(--ad-text); }

  .pe-tags input { border:0; outline:none; flex:1; min-width:80px; padding:4px;
        background:transparent; font-size:12.5px; }

  .pe-list { display:flex; flex-direction:column; gap:10px; }
  .pe-list-item { display:grid; grid-template-columns:auto 1fr auto; gap:12px;
        align-items:center; background:#fff; border:1px solid var(--ad-line);
        border-radius:8px; padding:12px 14px; }
  .pe-list-item .num { font-family:'JetBrains Mono',monospace; font-size:11px;
        font-weight:600; color:var(--ad-text-soft);
        background:var(--ad-line-soft); padding:3px 7px; border-radius:4px; }
  .pe-list-item .actions { display:flex; gap:4px; }
  .pe-list-item .actions button { border:0; background:transparent;
        color:var(--ad-text-mute); cursor:pointer; padding:4px; }
  .pe-list-item .actions button:hover { color:var(--ad-text); }

  .pe-job-card { background:#fff; border:1px solid var(--ad-line); border-radius:8px;
        padding:14px; display:flex; flex-direction:column; gap:10px; }
  .pe-job-card .head { display:flex; align-items:center; gap:8px;
        padding-bottom:8px; border-bottom:1px solid var(--ad-line-soft); }
  .pe-job-card .head .pill { font-family:'JetBrains Mono',monospace; font-size:10.5px;
        padding:2px 7px; background:var(--ad-accent-soft); color:var(--ad-accent);
        border-radius:99px; font-weight:600; }
  .pe-job-card .head .name { font-weight:600; font-size:13px; flex:1; }
  .pe-job-card .head button { border:0; background:transparent; cursor:pointer;
        color:var(--ad-text-mute); padding:4px; }
`;

/* Section component (collapsible) */
function PeSection({ num, icon, title, sub, defaultOpen, children }) {
  const [open, setOpen] = React.useState(defaultOpen ?? true);
  return (
    <div className={`pe-section ${open ? 'open' : ''}`}>
      <div className="pe-shead" onClick={() => setOpen(!open)}>
        <span className="num">{num}</span>
        <div className="ico"><AdIcon name={icon} size={16} /></div>
        <div className="titles">
          <h3>{title}</h3>
          {sub && <p>{sub}</p>}
        </div>
        <span className="chev"><AdIcon name="chevron" size={16} /></span>
      </div>
      <div className="pe-sbody">{children}</div>
    </div>
  );
}

/* Image upload row */
function PeImg({ src, label, hint, size }) {
  return (
    <div className="imgwrap">
      {src && <img src={src} alt={label} />}
      {!src && (
        <div style={{
          position: 'absolute', inset: 0, display: 'flex',
          flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
          color: 'var(--ad-text-mute)', fontSize: 12, gap: 5,
        }}>
          <AdIcon name="upload" size={18} />{hint || 'Chọn ảnh'}
        </div>
      )}
      <div className="imgover">
        <button className="ad-btn sm"><AdIcon name="refresh" size={12} /> Đổi</button>
        <button className="ad-btn sm"><AdIcon name="edit" size={12} /> Crop</button>
      </div>
      {size && <div className="imgsize">{size}</div>}
    </div>
  );
}

/* Tag input */
function PeTags({ tags = [] }) {
  return (
    <div className="ad-tags">
      {tags.map((t, i) => (
        <span key={i} className="ad-tag">
          {t}<button><AdIcon name="x" size={11} /></button>
        </span>
      ))}
      <input placeholder="Thêm tag…" />
    </div>
  );
}

/* Sticky savebar with "back to pages" + page title + publish controls */
function PeSavebar({ title, slug, status, preview }) {
  return (
    <div className="pe-savebar">
      <a href="pages.html" className="back">
        <AdIcon name="arrowLeft" size={14} /> Quay lại
      </a>
      <div className="title">
        <AdIcon name="file" size={16} />
        {title}
        {slug && <code style={{
          fontFamily: 'JetBrains Mono,monospace', fontSize: 12,
          color: 'var(--ad-text-soft)', background: 'var(--ad-line-soft)',
          padding: '2px 7px', borderRadius: 4, fontWeight: 500,
        }}>{slug}</code>}
        <AdBadge status={status || 'pub'} />
      </div>
      <span className="auto">Đã tự lưu nháp · 14:32</span>
      <a href={preview || '#'} target="_blank" className="ad-btn sm">
        <AdIcon name="eye" size={12} /> Xem
      </a>
      <button className="ad-btn sm">
        <AdIcon name="save" size={12} /> Lưu nháp
      </button>
      <button className="ad-btn primary sm">
        <AdIcon name="check" size={12} /> Xuất bản
      </button>
    </div>
  );
}

/* Language tab strip */
function PeLangTabs({ lang, setLang }) {
  return (
    <div className="pe-langtabs">
      <div className={`pe-langtab ${lang === 'vi' ? 'on' : ''}`} onClick={() => setLang('vi')}>
        <span className="flag">🇻🇳</span> Tiếng Việt
      </div>
      <div className={`pe-langtab ${lang === 'en' ? 'on' : ''}`} onClick={() => setLang('en')}>
        <span className="flag">🇬🇧</span> English
      </div>
      <div className={`pe-langtab ${lang === 'zh' ? 'on' : ''}`} onClick={() => setLang('zh')}>
        <span className="flag">🇨🇳</span> 中文
      </div>
      <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 8,
                    fontSize: 12, color: 'var(--ad-text-mute)', paddingBottom: 8 }}>
        <AdIcon name="refresh" size={12} /> 3 ngôn ngữ đồng bộ
      </div>
    </div>
  );
}

/* Side panels — status, slug, versions, advanced */
function PeStatusCard({ status, setStatus }) {
  return (
    <div className="ad-card">
      <div className="ad-card-head"><h3>Trạng thái</h3></div>
      <div style={{ padding: 14 }}>
        <div className="pe-status">
          {[
            ['draft', 'Nháp', 'Chỉ admin thấy được'],
            ['pub', 'Đã xuất bản', 'Hiển thị trên website'],
            ['sched', 'Hẹn giờ', 'Tự động xuất bản theo lịch'],
            ['hide', 'Đã ẩn', 'Không hiển thị, giữ dữ liệu'],
          ].map(([k, l, hint]) => (
            <label key={k} className={status === k ? 'on' : ''}
                   onClick={() => setStatus(k)}>
              <span className="radio" />
              <div>
                <div style={{ fontWeight: 500 }}>{l}</div>
                <div style={{ fontSize: 11.5, color: 'var(--ad-text-mute)' }}>{hint}</div>
              </div>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}

function PeSlugCard({ slug }) {
  return (
    <div className="ad-card">
      <div className="ad-card-head"><h3>Đường dẫn (Slug)</h3></div>
      <div style={{ padding: 14, display: 'flex', flexDirection: 'column', gap: 10 }}>
        <div style={{ display: 'flex', gap: 6 }}>
          <input className="ad-input" defaultValue={slug} />
          <button className="ad-btn sm" title="Tạo lại từ tiêu đề">
            <AdIcon name="refresh" size={13} />
          </button>
        </div>
        <div style={{ fontSize: 12, color: 'var(--ad-text-mute)' }}>
          long-anh.com<b>{slug}</b>
        </div>
      </div>
    </div>
  );
}

function PeVersionsCard({ versions }) {
  const list = versions || [
    { num: 'v12', when: '2 giờ trước · AN', cur: true },
    { num: 'v11', when: '1 ngày trước · LH' },
    { num: 'v10', when: '3 ngày trước · AN' },
    { num: 'v9', when: '1 tuần trước · LH' },
  ];
  return (
    <div className="ad-card">
      <div className="ad-card-head"><h3>Lịch sử thay đổi</h3></div>
      <div className="pe-versions">
        {list.map((v, i) => (
          <div key={i} className="v">
            <span className="num">{v.num}</span>
            <div style={{ flex: 1 }}>
              <div className="when">{v.when}</div>
            </div>
            {v.cur ? (
              <span className="ad-badge pub" style={{ fontSize: 10 }}>
                <span className="dot" />Hiện tại
              </span>
            ) : (
              <button title="Khôi phục"><AdIcon name="refresh" size={13} /></button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function PeAdvancedCard() {
  return (
    <div className="ad-card">
      <div className="ad-card-head">
        <h3>Cài đặt nâng cao</h3>
      </div>
      <div style={{ padding: 14, display: 'flex', flexDirection: 'column', gap: 12, fontSize: 13 }}>
        <label style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span>Hiển thị trong sitemap</span>
          <AdSwitch on={true} onChange={() => {}} />
        </label>
        <label style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span>Cho phép Google index</span>
          <AdSwitch on={true} onChange={() => {}} />
        </label>
        <label style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span>Yêu cầu đăng nhập</span>
          <AdSwitch on={false} onChange={() => {}} />
        </label>
      </div>
    </div>
  );
}

/* SEO section helper — shared for every page */
function PeSeoSection({ num = '99', metaTitle, metaDesc, keywords, ogImage, googleHost = 'long-anh.com', googleSlug = 'trang' }) {
  return (
    <PeSection num={num} icon="seo" title="SEO & Mạng xã hội"
               sub="Hiển thị trên Google, Facebook, Zalo" defaultOpen={false}>
      <div className="pe-stack">
        <AdField label="Meta title" req
                 help="50-60 ký tự là tối ưu">
          <input className="ad-input" defaultValue={metaTitle} />
        </AdField>
        <AdField label="Meta description"
                 help="150-160 ký tự là tối ưu">
          <textarea className="ad-textarea" defaultValue={metaDesc} />
        </AdField>
        <AdField label="Từ khóa">
          <PeTags tags={keywords || []} />
        </AdField>
        <AdField label="Ảnh chia sẻ (Open Graph)" help="Khi share lên Facebook/Zalo · 1200×630px">
          <div style={{ display: 'grid', gridTemplateColumns: '160px 1fr', gap: 12 }}>
            <div className="pe-imgrow">
              <PeImg src={ogImage} size="1920×1080" />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <button className="ad-btn" style={{ width: 'fit-content' }}>
                <AdIcon name="upload" size={13} /> Đổi ảnh
              </button>
              <div style={{ fontSize: 12, color: 'var(--ad-text-mute)' }}>
                Nếu để trống, hệ thống dùng ảnh hero của trang.
              </div>
            </div>
          </div>
        </AdField>
        <div style={{ background: '#fff', border: '1px solid var(--ad-line)',
                      borderRadius: 8, padding: 14, marginTop: 4 }}>
          <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--ad-text-mute)',
                        letterSpacing: '.05em', textTransform: 'uppercase', marginBottom: 8 }}>
            Xem trước trên Google
          </div>
          <div style={{ fontSize: 13, color: '#202124', marginBottom: 2 }}>
            {googleHost} › <span style={{ color: '#5F6368' }}>{googleSlug}</span>
          </div>
          <div style={{ fontSize: 18, color: '#1A0DAB', marginBottom: 4,
                        fontFamily: 'arial, sans-serif' }}>
            {metaTitle}
          </div>
          <div style={{ fontSize: 13, color: '#4D5156', lineHeight: 1.55 }}>
            {metaDesc}
          </div>
        </div>
      </div>
    </PeSection>
  );
}

/* Convenience: full editor shell — header bar, lang tabs, two-column grid */
function PeEditorShell({ active = 'pages', crumb, title, slug, status, setStatus,
                          previewHref, lang, setLang,
                          versions, sidebarExtra, children }) {
  const Header = (
    <>
      <a href={previewHref || '#'} target="_blank" className="ad-btn">
        <AdIcon name="eye" size={13} /> Xem website
      </a>
      <button className="ad-btn">
        <AdIcon name="save" size={13} /> Lưu nháp
      </button>
      <button className="ad-btn primary">
        <AdIcon name="check" size={13} /> Lưu & Xuất bản
      </button>
    </>
  );

  return (
    <AdPage active={active}
      crumb={crumb}>
      <PeSavebar title={title} slug={slug} status={status} preview={previewHref} />
      <PeLangTabs lang={lang} setLang={setLang} />

      <div className="pe-grid">
        <div className="pe-main">{children}</div>
        <aside className="pe-side">
          <PeStatusCard status={status} setStatus={setStatus} />
          <PeSlugCard slug={slug} />
          <PeVersionsCard versions={versions} />
          {sidebarExtra}
          <PeAdvancedCard />
        </aside>
      </div>

      <div className="ad-toast success">
        <AdIcon name="check" size={14} /> Đã lưu nháp tự động
      </div>
    </AdPage>
  );
}
