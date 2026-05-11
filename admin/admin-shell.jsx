// admin-shell.jsx — Long Anh Admin Panel shell
// Sidebar + topbar + design system + shared atoms
// Tone: neutral gray + brand navy accent (#0F3D7A) + orange status (#F08023)

/* ---- Auth & permissions (mock, client-side only) ----
   Two demo accounts. "allow" is either 'all' or an array of sidebar item ids. */
const AD_USERS = {
  admin: {
    password: '123123',
    name: 'Admin Long Anh',
    initials: 'AN',
    role: 'Quản trị viên',
    allow: 'all',
  },
  quydom: {
    password: '123123',
    name: 'Quý Đỗm',
    initials: 'QD',
    role: 'Biên tập viên',
    allow: ['news', 'products', 'contacts', 'subscribers'],
  },
};

function adGetUser() {
  try { return JSON.parse(localStorage.getItem('ad_user') || 'null'); }
  catch (e) { return null; }
}
function adSetUser(u) { localStorage.setItem('ad_user', JSON.stringify(u)); }
function adLogout() { localStorage.removeItem('ad_user'); location.href = 'login.html'; }

function adCanAccess(itemId) {
  const u = adGetUser();
  if (!u) return false;
  if (u.allow === 'all') return true;
  return Array.isArray(u.allow) && u.allow.includes(itemId);
}

/* Each sidebar item id → file it links to. Used for the default-landing redirect. */
const AD_ID_TO_HREF = {
  dashboard: 'index.html', pages: 'pages.html', news: 'news.html',
  products: 'products.html', categories: '#', gallery: 'media.html',
  team: '#', testimonials: '#', faq: '#',
  settings: 'settings.html', menu: '#', i18n: '#', seo: '#',
  contacts: 'contacts.html', subscribers: '#',
  roles: 'roles.html',
};

function adDefaultLanding(u) {
  if (!u) return 'login.html';
  if (u.allow === 'all') return 'index.html';
  if (Array.isArray(u.allow)) {
    for (const id of u.allow) {
      const href = AD_ID_TO_HREF[id];
      if (href && href !== '#') return href;
    }
  }
  return 'index.html';
}

/* Map current filename → sidebar item id. null = page not protected. */
function adCurrentPageId() {
  const path = (location.pathname.split('/').pop() || '').toLowerCase();
  if (path === '' || path === 'index.html')   return 'dashboard';
  if (path === 'pages.html')                   return 'pages';
  if (path.startsWith('page-edit-'))           return 'pages';
  if (path === 'products.html')                return 'products';
  if (path === 'product-edit.html')            return 'products';
  if (path === 'news.html')                    return 'news';
  if (path === 'news-edit.html')               return 'news';
  if (path === 'contacts.html')                return 'contacts';
  if (path === 'media.html')                   return 'gallery';
  if (path === 'roles.html')                   return 'roles';
  if (path === 'settings.html')                return 'settings';
  return null;
}

/* Guard: redirect to login if not authed, or to landing if not allowed. */
(function adGuard() {
  const path = (location.pathname.split('/').pop() || '').toLowerCase();
  if (path === 'login.html') return;
  const u = adGetUser();
  if (!u) { location.replace('login.html'); return; }
  const id = adCurrentPageId();
  if (id && !adCanAccess(id)) {
    sessionStorage.setItem('ad_flash', 'Bạn không có quyền truy cập trang đó.');
    location.replace(adDefaultLanding(u));
  }
})();

const ADMIN_BRAND = {
  primary: '#0F3D7A',
  primaryDark: '#0A2B57',
  accent: '#F08023',
  accentSoft: '#FFF1E5',
};

const ADMIN_GLOBAL_CSS = `
  :root {
    --ad-bg: #F7F7F8;
    --ad-surface: #FFFFFF;
    --ad-line: #E5E7EB;
    --ad-line-soft: #F0F1F3;
    --ad-text: #111827;
    --ad-text-soft: #4B5563;
    --ad-text-mute: #9CA3AF;
    --ad-primary: #0F3D7A;
    --ad-primary-soft: #E8F0FB;
    --ad-accent: #F08023;
    --ad-accent-soft: #FFF1E5;
    --ad-success: #16A34A;
    --ad-success-soft: #DCFCE7;
    --ad-warn: #D97706;
    --ad-warn-soft: #FEF3C7;
    --ad-danger: #DC2626;
    --ad-danger-soft: #FEE2E2;
    --ad-info: #2563EB;
    --ad-info-soft: #DBEAFE;
    --ad-shadow: 0 1px 2px rgba(15,23,42,.04), 0 4px 12px -4px rgba(15,23,42,.06);
    --ad-shadow-md: 0 4px 12px rgba(15,23,42,.06), 0 12px 24px -8px rgba(15,23,42,.08);
    --ad-radius-sm: 6px;
    --ad-radius: 8px;
    --ad-radius-lg: 12px;
  }
  * { box-sizing:border-box; }
  html, body { margin:0; padding:0; }
  body {
    font-family: 'Inter', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
    font-size: 14px;
    line-height: 1.5;
    color: var(--ad-text);
    background: var(--ad-bg);
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
  }
  a { color: inherit; text-decoration: none; }
  button { font-family: inherit; }
  input, textarea, select { font-family: inherit; font-size: 14px; }

  /* ---- Layout ---- */
  .ad-app { display:grid; grid-template-columns: 240px 1fr; min-height:100vh; }
  .ad-side { background:var(--ad-surface); border-right:1px solid var(--ad-line);
        position:sticky; top:0; height:100vh; overflow:hidden; display:flex;
        flex-direction:column; }
  .ad-side-brand { display:flex; align-items:center; gap:10px; padding:18px 18px;
        border-bottom:1px solid var(--ad-line-soft); }
  .ad-side-brand img { width:32px; height:32px; object-fit:contain; }
  .ad-side-brand .name { font-weight:700; font-size:14px; letter-spacing:-.01em; line-height:1.2; }
  .ad-side-brand .name small { display:block; font-weight:500; font-size:11px;
        color:var(--ad-text-mute); letter-spacing:.04em; text-transform:uppercase; }
  .ad-side-nav { flex:1; overflow-y:auto; padding:14px 12px 24px; }
  .ad-side-nav::-webkit-scrollbar { width:6px; }
  .ad-side-nav::-webkit-scrollbar-thumb { background:var(--ad-line); border-radius:3px; }
  .ad-side-section { font-size:10.5px; font-weight:600; color:var(--ad-text-mute);
        letter-spacing:.1em; text-transform:uppercase; padding:14px 10px 6px; }
  .ad-side-item { display:flex; align-items:center; gap:11px; padding:8px 10px;
        border-radius:6px; color:var(--ad-text-soft); font-size:13.5px; font-weight:500;
        cursor:pointer; transition:.12s; position:relative; line-height:1.3; }
  .ad-side-item:hover { background:var(--ad-line-soft); color:var(--ad-text); }
  .ad-side-item.active { background:var(--ad-primary-soft); color:var(--ad-primary);
        font-weight:600; }
  .ad-side-item.active::before { content:''; position:absolute; left:-12px; top:8px;
        bottom:8px; width:3px; background:var(--ad-primary); border-radius:0 3px 3px 0; }
  .ad-side-item svg { flex:none; opacity:.8; }
  .ad-side-item.active svg { opacity:1; }
  .ad-side-badge { margin-left:auto; background:var(--ad-accent); color:#fff;
        font-size:10.5px; font-weight:700; padding:1px 7px; border-radius:99px; line-height:1.5; }
  .ad-side-foot { border-top:1px solid var(--ad-line-soft); padding:12px;
        font-size:11.5px; color:var(--ad-text-mute); display:flex; align-items:center; gap:8px; }

  /* Topbar */
  .ad-main { display:flex; flex-direction:column; min-height:100vh; min-width:0; }
  .ad-top { background:var(--ad-surface); border-bottom:1px solid var(--ad-line);
        height:56px; display:flex; align-items:center; gap:14px; padding:0 24px;
        position:sticky; top:0; z-index:20; }
  .ad-search { flex:1; max-width:520px; position:relative; }
  .ad-search input { width:100%; height:34px; border:1px solid var(--ad-line);
        background:var(--ad-bg); border-radius:6px; padding:0 12px 0 34px;
        outline:none; transition:.15s; }
  .ad-search input:focus { border-color:var(--ad-primary); background:#fff;
        box-shadow:0 0 0 3px var(--ad-primary-soft); }
  .ad-search svg { position:absolute; left:10px; top:50%; transform:translateY(-50%);
        color:var(--ad-text-mute); }
  .ad-search kbd { position:absolute; right:8px; top:50%; transform:translateY(-50%);
        background:var(--ad-line-soft); border:1px solid var(--ad-line);
        border-radius:4px; padding:1px 6px; font-size:11px; color:var(--ad-text-soft);
        font-family:ui-monospace,Menlo,monospace; }
  .ad-top-r { margin-left:auto; display:flex; align-items:center; gap:6px; }
  .ad-top-btn { width:34px; height:34px; border-radius:6px; border:1px solid transparent;
        background:transparent; display:flex; align-items:center; justify-content:center;
        cursor:pointer; color:var(--ad-text-soft); position:relative; }
  .ad-top-btn:hover { background:var(--ad-line-soft); color:var(--ad-text); }
  .ad-top-btn .dot { position:absolute; top:8px; right:8px; width:7px; height:7px;
        background:var(--ad-accent); border-radius:50%; border:2px solid #fff; }
  .ad-top-lang { display:flex; gap:2px; padding:2px; background:var(--ad-line-soft);
        border-radius:6px; font-size:11.5px; font-weight:600; }
  .ad-top-lang span { padding:4px 9px; border-radius:4px; cursor:pointer;
        color:var(--ad-text-mute); }
  .ad-top-lang span.on { background:#fff; color:var(--ad-text); box-shadow:var(--ad-shadow); }
  .ad-top-avatar { width:32px; height:32px; border-radius:50%; background:var(--ad-primary);
        color:#fff; display:flex; align-items:center; justify-content:center;
        font-weight:600; font-size:12px; cursor:pointer; margin-left:6px; }
  .ad-user-wrap { position:relative; margin-left:6px; }
  .ad-user-menu { position:absolute; right:0; top:42px; width:240px; background:#fff;
        border:1px solid var(--ad-line); border-radius:8px;
        box-shadow:var(--ad-shadow-md); z-index:30; overflow:hidden; }
  .ad-user-menu .head { padding:14px; border-bottom:1px solid var(--ad-line-soft);
        display:flex; align-items:center; gap:10px; }
  .ad-user-menu .head .avatar { width:36px; height:36px; border-radius:50%;
        background:var(--ad-primary); color:#fff; display:flex; align-items:center;
        justify-content:center; font-weight:600; font-size:13px; flex:none; }
  .ad-user-menu .head .name { font-weight:600; font-size:13.5px; line-height:1.3; }
  .ad-user-menu .head .role { font-size:11.5px; color:var(--ad-text-mute); margin-top:1px; }
  .ad-user-menu .item { display:flex; align-items:center; gap:10px;
        padding:9px 14px; font-size:13px; color:var(--ad-text-soft);
        cursor:pointer; background:transparent; border:0; width:100%; text-align:left; }
  .ad-user-menu .item:hover { background:var(--ad-line-soft); color:var(--ad-text); }
  .ad-user-menu .item.danger { color:var(--ad-danger); }
  .ad-user-menu .item.danger:hover { background:var(--ad-danger-soft); }
  .ad-user-menu .sep { height:1px; background:var(--ad-line-soft); margin:4px 0; }

  /* Body */
  .ad-body { flex:1; padding:24px 32px 48px; max-width:1400px; width:100%; }
  .ad-body.full { max-width:none; }
  .ad-crumb { font-size:12.5px; color:var(--ad-text-mute); margin-bottom:14px;
        display:flex; align-items:center; gap:6px; }
  .ad-crumb a:hover { color:var(--ad-text); }
  .ad-crumb .sep { opacity:.6; }
  .ad-crumb .cur { color:var(--ad-text); font-weight:500; }
  .ad-phead { display:flex; align-items:flex-end; justify-content:space-between;
        gap:24px; margin-bottom:24px; flex-wrap:wrap; }
  .ad-phead h1 { font-size:24px; font-weight:700; letter-spacing:-.015em; margin:0 0 4px; }
  .ad-phead p { color:var(--ad-text-soft); margin:0; font-size:13.5px; }
  .ad-phead-actions { display:flex; gap:8px; align-items:center; }

  /* Buttons */
  .ad-btn { display:inline-flex; align-items:center; gap:7px; height:34px;
        padding:0 14px; border-radius:6px; font-size:13px; font-weight:500;
        cursor:pointer; transition:.15s; border:1px solid var(--ad-line);
        background:#fff; color:var(--ad-text); white-space:nowrap; }
  .ad-btn:hover { border-color:#cdd2da; background:var(--ad-line-soft); }
  .ad-btn.primary { background:var(--ad-primary); border-color:var(--ad-primary); color:#fff; }
  .ad-btn.primary:hover { background:var(--ad-primary-dark, #0A2B57); border-color:var(--ad-primary-dark, #0A2B57); }
  .ad-btn.accent { background:var(--ad-accent); border-color:var(--ad-accent); color:#fff; }
  .ad-btn.accent:hover { background:#D96A0E; border-color:#D96A0E; }
  .ad-btn.ghost { border-color:transparent; }
  .ad-btn.ghost:hover { background:var(--ad-line-soft); }
  .ad-btn.danger { color:var(--ad-danger); }
  .ad-btn.danger:hover { background:var(--ad-danger-soft); border-color:var(--ad-danger-soft); }
  .ad-btn.sm { height:28px; padding:0 10px; font-size:12px; }
  .ad-btn.lg { height:40px; padding:0 18px; font-size:14px; }

  /* Card */
  .ad-card { background:var(--ad-surface); border:1px solid var(--ad-line);
        border-radius:var(--ad-radius); }
  .ad-card-head { display:flex; align-items:center; justify-content:space-between;
        gap:12px; padding:14px 18px; border-bottom:1px solid var(--ad-line-soft); }
  .ad-card-head h3 { margin:0; font-size:14px; font-weight:600; }
  .ad-card-head p { margin:2px 0 0; font-size:12.5px; color:var(--ad-text-mute); }
  .ad-card-body { padding:18px; }

  /* Badge */
  .ad-badge { display:inline-flex; align-items:center; gap:5px; padding:2px 8px;
        font-size:11.5px; font-weight:600; border-radius:99px; line-height:1.6;
        white-space:nowrap; }
  .ad-badge .dot { width:6px; height:6px; border-radius:50%; }
  .ad-badge.pub { background:var(--ad-success-soft); color:#15803D; }
  .ad-badge.pub .dot { background:var(--ad-success); }
  .ad-badge.draft { background:var(--ad-warn-soft); color:#A16207; }
  .ad-badge.draft .dot { background:var(--ad-warn); }
  .ad-badge.hide { background:var(--ad-line-soft); color:var(--ad-text-soft); }
  .ad-badge.hide .dot { background:var(--ad-text-mute); }
  .ad-badge.sched { background:var(--ad-info-soft); color:#1D4ED8; }
  .ad-badge.sched .dot { background:var(--ad-info); }

  /* Inputs / fields (form-page-template) */
  .ad-field { display:flex; flex-direction:column; gap:6px; }
  .ad-field label { font-size:12.5px; font-weight:500; color:var(--ad-text); }
  .ad-field label .req { color:var(--ad-danger); margin-left:2px; }
  .ad-field .help { font-size:12px; color:var(--ad-text-mute); }
  .ad-input, .ad-textarea, .ad-select {
    height:36px; border:1px solid var(--ad-line); background:#fff;
    border-radius:6px; padding:0 12px; outline:none; transition:.15s;
    color:var(--ad-text); width:100%;
  }
  .ad-textarea { height:auto; min-height:84px; padding:10px 12px; resize:vertical;
        line-height:1.55; }
  .ad-input:focus, .ad-textarea:focus, .ad-select:focus {
    border-color:var(--ad-primary);
    box-shadow:0 0 0 3px var(--ad-primary-soft);
  }
  .ad-select { appearance:none; background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%236B7280' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E");
        background-repeat:no-repeat; background-position:right 12px center; padding-right:34px; }

  .ad-tags { display:flex; flex-wrap:wrap; gap:6px; padding:6px;
        border:1px solid var(--ad-line); border-radius:6px; background:#fff; }
  .ad-tag { display:inline-flex; align-items:center; gap:6px; padding:3px 8px;
        background:var(--ad-line-soft); border-radius:4px; font-size:12px; }
  .ad-tag button { border:0; background:transparent; cursor:pointer; color:var(--ad-text-mute);
        padding:0; display:flex; }
  .ad-tags input { border:0; outline:none; flex:1; min-width:120px; padding:4px 6px;
        background:transparent; }

  /* Table */
  .ad-table-wrap { background:#fff; border:1px solid var(--ad-line);
        border-radius:var(--ad-radius); overflow:hidden; }
  .ad-table { width:100%; border-collapse:collapse; }
  .ad-table th { text-align:left; padding:11px 16px; font-size:11.5px;
        font-weight:600; letter-spacing:.04em; text-transform:uppercase;
        color:var(--ad-text-mute); border-bottom:1px solid var(--ad-line);
        background:#FAFAFB; }
  .ad-table td { padding:13px 16px; border-bottom:1px solid var(--ad-line-soft);
        vertical-align:middle; font-size:13.5px; }
  .ad-table tr:last-child td { border-bottom:0; }
  .ad-table tr:hover td { background:#FBFBFC; }
  .ad-table .row-actions { display:flex; gap:4px; opacity:0; transition:.15s; }
  .ad-table tr:hover .row-actions { opacity:1; }
  .ad-thumb { width:48px; height:36px; border-radius:5px; object-fit:cover;
        background:var(--ad-line-soft); display:block; }

  /* Toolbar */
  .ad-toolbar { display:flex; align-items:center; gap:10px; padding:14px 16px;
        border-bottom:1px solid var(--ad-line-soft); background:#FAFAFB; flex-wrap:wrap; }
  .ad-toolbar .grow { flex:1; }

  /* Toggles */
  .ad-switch { position:relative; width:36px; height:20px; background:var(--ad-line);
        border-radius:99px; cursor:pointer; transition:.18s; flex:none; }
  .ad-switch::after { content:''; position:absolute; top:2px; left:2px; width:16px;
        height:16px; background:#fff; border-radius:50%; transition:.18s;
        box-shadow:0 1px 3px rgba(0,0,0,.18); }
  .ad-switch.on { background:var(--ad-primary); }
  .ad-switch.on::after { transform:translateX(16px); }

  /* Pagination */
  .ad-pag { display:flex; align-items:center; justify-content:space-between;
        padding:12px 16px; border-top:1px solid var(--ad-line-soft);
        font-size:13px; color:var(--ad-text-soft); }
  .ad-pag-pages { display:flex; gap:4px; }
  .ad-pag-pages button { width:30px; height:30px; border-radius:5px; border:1px solid transparent;
        background:transparent; cursor:pointer; font-size:12.5px; color:var(--ad-text-soft); }
  .ad-pag-pages button:hover { background:var(--ad-line-soft); color:var(--ad-text); }
  .ad-pag-pages button.on { background:var(--ad-primary); color:#fff; }
  .ad-pag-pages button.on:hover { background:var(--ad-primary); color:#fff; }

  /* Toast */
  .ad-toast { position:fixed; right:24px; bottom:24px; background:var(--ad-text);
        color:#fff; padding:11px 16px; border-radius:8px; display:flex;
        align-items:center; gap:10px; font-size:13px; box-shadow:var(--ad-shadow-md);
        z-index:100; }
  .ad-toast.success::before { content:''; width:8px; height:8px; border-radius:50%;
        background:#4ADE80; }
`;

/* Lucide-ish icons (stroke 2) */
function AdIcon({ name, size = 18 }) {
  const p = { width: size, height: size, viewBox: '0 0 24 24', fill: 'none',
              stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round',
              strokeLinejoin: 'round' };
  const ICONS = {
    home: <path d="M3 12l9-9 9 9M5 10v10h14V10" />,
    file: <><path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" /><path d="M14 3v6h6" /></>,
    news: <><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M7 8h10M7 12h10M7 16h6" /></>,
    rock: <path d="M5 16l3-9 6 2 5-3 1 11-15 4z" />,
    folder: <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />,
    image: <><rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="9" cy="9" r="2" /><path d="M21 15l-5-5L5 21" /></>,
    slides: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 9h18" /></>,
    users: <><circle cx="9" cy="8" r="4" /><path d="M2 21a7 7 0 0 1 14 0" /><circle cx="17" cy="8" r="3" /><path d="M22 19a5 5 0 0 0-5-5" /></>,
    chat: <path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 9.6 9.6 0 0 1-3-.5L3 21l1.6-5A8.4 8.4 0 0 1 12 3a8.4 8.4 0 0 1 9 8.5z" />,
    help: <><circle cx="12" cy="12" r="10" /><path d="M9.5 9a2.5 2.5 0 0 1 5 0c0 1.5-2.5 2-2.5 4M12 17h.01" /></>,
    settings: <><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1.08-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1.08 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33h0a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51h0a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82v0a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" /></>,
    nav: <path d="M3 6h18M3 12h18M3 18h18" />,
    globe: <><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15 15 0 0 1 0 20A15 15 0 0 1 12 2z" /></>,
    seo: <><circle cx="11" cy="11" r="7" /><path d="M21 21l-4.35-4.35" /></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></>,
    bell: <><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" /><path d="M10 21a2 2 0 0 0 4 0" /></>,
    shield: <path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6z" />,
    activity: <path d="M22 12h-4l-3 9L9 3l-3 9H2" />,
    search: <><circle cx="11" cy="11" r="7" /><path d="M21 21l-4.35-4.35" /></>,
    plus: <path d="M12 5v14M5 12h14" />,
    chevron: <path d="M9 18l6-6-6-6" />,
    chevronDown: <path d="M6 9l6 6 6-6" />,
    chevronLeft: <path d="M15 18l-6-6 6-6" />,
    edit: <><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4z" /></>,
    trash: <><path d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" /></>,
    copy: <><rect x="9" y="9" width="12" height="12" rx="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></>,
    eye: <><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></>,
    save: <><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" /><path d="M17 21v-8H7v8M7 3v5h8" /></>,
    upload: <><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12" /></>,
    download: <><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" /></>,
    drag: <><circle cx="9" cy="6" r="1" /><circle cx="9" cy="12" r="1" /><circle cx="9" cy="18" r="1" /><circle cx="15" cy="6" r="1" /><circle cx="15" cy="12" r="1" /><circle cx="15" cy="18" r="1" /></>,
    more: <><circle cx="12" cy="12" r="1" /><circle cx="12" cy="5" r="1" /><circle cx="12" cy="19" r="1" /></>,
    arrowLeft: <><path d="M19 12H5M12 19l-7-7 7-7" /></>,
    arrowRight: <><path d="M5 12h14M12 5l7 7-7 7" /></>,
    refresh: <><path d="M23 4v6h-6M1 20v-6h6" /><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" /></>,
    check: <path d="M20 6L9 17l-5-5" />,
    x: <path d="M18 6L6 18M6 6l18 18" />,
    grid: <><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /></>,
    list: <path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" />,
    filter: <path d="M22 3H2l8 9.46V19l4 2v-8.54z" />,
    star: <path d="M12 2l3 7 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1z" />,
    link: <><path d="M10 13a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1" /><path d="M14 11a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1" /></>,
    trend: <><path d="M22 7l-9 9-5-5-7 7" /><path d="M16 7h6v6" /></>,
    activity2: <path d="M22 12h-4l-3 9L9 3l-3 9H2" />,
    box: <><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><path d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12" /></>,
    layers: <><path d="M12 2l10 6-10 6L2 8z" /><path d="M2 17l10 6 10-6M2 12l10 6 10-6" /></>,
  };
  return <svg {...p}>{ICONS[name]}</svg>;
}

/* ---- Sidebar ---- */
function AdSidebar({ active = 'dashboard' }) {
  const items = [
    { type: 'item', id: 'dashboard', label: 'Dashboard', icon: 'home', href: 'index.html' },
    { type: 'sec', label: 'Nội dung' },
    { type: 'item', id: 'pages', label: 'Trang', icon: 'file', href: 'pages.html' },
    { type: 'item', id: 'news', label: 'Tin tức', icon: 'news', href: 'news.html' },
    { type: 'item', id: 'products', label: 'Sản phẩm', icon: 'rock', href: 'products.html' },
    { type: 'item', id: 'categories', label: 'Danh mục', icon: 'folder', href: '#' },
    { type: 'item', id: 'gallery', label: 'Gallery', icon: 'image', href: 'media.html' },
    { type: 'item', id: 'team', label: 'Đội ngũ', icon: 'users', href: '#' },
    { type: 'item', id: 'testimonials', label: 'Testimonials', icon: 'chat', href: '#' },
    { type: 'item', id: 'faq', label: 'FAQ', icon: 'help', href: '#' },
    { type: 'sec', label: 'Cấu hình' },
    { type: 'item', id: 'settings', label: 'Cài đặt site', icon: 'settings', href: 'settings.html' },
    { type: 'item', id: 'menu', label: 'Menu navigation', icon: 'nav', href: '#' },
    { type: 'item', id: 'i18n', label: 'Ngôn ngữ', icon: 'globe', href: '#' },
    { type: 'item', id: 'seo', label: 'SEO mặc định', icon: 'seo', href: '#' },
    { type: 'sec', label: 'Tương tác' },
    { type: 'item', id: 'contacts', label: 'Liên hệ', icon: 'mail', href: 'contacts.html', badge: '5' },
    { type: 'item', id: 'subscribers', label: 'Đăng ký nhận tin', icon: 'bell', href: '#' },
    { type: 'sec', label: 'Hệ thống' },
    { type: 'item', id: 'roles', label: 'Phân quyền', icon: 'shield', href: 'roles.html' },
  ];

  // Filter by current user's permission. Hide a section header when no item in it is visible.
  const visible = [];
  items.forEach((it, i) => {
    if (it.type === 'sec') {
      let hasVisible = false;
      for (let j = i + 1; j < items.length && items[j].type !== 'sec'; j++) {
        if (adCanAccess(items[j].id)) { hasVisible = true; break; }
      }
      if (hasVisible) visible.push(it);
    } else if (adCanAccess(it.id)) {
      visible.push(it);
    }
  });

  return (
    <aside className="ad-side">
      <div className="ad-side-brand">
        <img src="../assets/long-anh-logo.png" alt="Long Anh" />
        <div className="name">Long Anh<small>Admin</small></div>
      </div>
      <nav className="ad-side-nav">
        {visible.map((it, i) => it.type === 'sec' ? (
          <div key={i} className="ad-side-section">{it.label}</div>
        ) : (
          <a key={i} href={it.href} className={`ad-side-item ${active === it.id ? 'active' : ''}`}>
            <AdIcon name={it.icon} size={17} />
            <span>{it.label}</span>
            {it.badge && <span className="ad-side-badge">{it.badge}</span>}
          </a>
        ))}
      </nav>
      <div className="ad-side-foot">
        <AdIcon name="check" size={13} /> Hệ thống ổn định · v1.0
      </div>
    </aside>
  );
}

/* ---- Topbar ---- */
function AdTopbar() {
  const [lang, setLang] = React.useState('vi');
  const [menu, setMenu] = React.useState(false);
  const user = adGetUser() || { name: 'Khách', initials: '?', role: 'Chưa đăng nhập' };

  React.useEffect(() => {
    if (!menu) return;
    const close = (e) => { if (!e.target.closest('.ad-user-wrap')) setMenu(false); };
    document.addEventListener('mousedown', close);
    return () => document.removeEventListener('mousedown', close);
  }, [menu]);

  return (
    <header className="ad-top">
      <div className="ad-search">
        <AdIcon name="search" size={15} />
        <input placeholder="Tìm kiếm sản phẩm, tin tức, trang…" />
        <kbd>⌘K</kbd>
      </div>
      <div className="ad-top-r">
        <div className="ad-top-lang">
          <span className={lang === 'vi' ? 'on' : ''} onClick={() => setLang('vi')}>VN</span>
          <span className={lang === 'en' ? 'on' : ''} onClick={() => setLang('en')}>EN</span>
        </div>
        <button className="ad-top-btn" title="Thông báo">
          <AdIcon name="bell" size={17} />
          <span className="dot" />
        </button>
        <button className="ad-top-btn" title="Trợ giúp">
          <AdIcon name="help" size={17} />
        </button>
        <div className="ad-user-wrap">
          <div className="ad-top-avatar" title={user.name}
               onClick={() => setMenu(m => !m)}>
            {user.initials}
          </div>
          {menu && (
            <div className="ad-user-menu">
              <div className="head">
                <div className="avatar">{user.initials}</div>
                <div>
                  <div className="name">{user.name}</div>
                  <div className="role">{user.role}</div>
                </div>
              </div>
              <button className="item" onClick={() => setMenu(false)}>
                <AdIcon name="users" size={14} /> Hồ sơ cá nhân
              </button>
              <button className="item" onClick={() => setMenu(false)}>
                <AdIcon name="settings" size={14} /> Tuỳ chọn tài khoản
              </button>
              <div className="sep" />
              <button className="item danger" onClick={adLogout}>
                <AdIcon name="arrowLeft" size={14} /> Đăng xuất
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

/* ---- Page shell ---- */
function AdPage({ active, crumb, title, sub, actions, full, children }) {
  return (
    <div className="ad-app">
      <AdSidebar active={active} />
      <div className="ad-main">
        <AdTopbar />
        <div className={`ad-body ${full ? 'full' : ''}`}>
          {crumb && (
            <div className="ad-crumb">
              {crumb.map((c, i) => (
                <React.Fragment key={i}>
                  {i > 0 && <span className="sep">/</span>}
                  {i === crumb.length - 1
                    ? <span className="cur">{c.label}</span>
                    : <a href={c.href || '#'}>{c.label}</a>}
                </React.Fragment>
              ))}
            </div>
          )}
          {title && (
            <div className="ad-phead">
              <div>
                <h1>{title}</h1>
                {sub && <p>{sub}</p>}
              </div>
              {actions && <div className="ad-phead-actions">{actions}</div>}
            </div>
          )}
          {children}
        </div>
      </div>
    </div>
  );
}

/* ---- Reusable bits ---- */
function AdField({ label, req, help, children }) {
  return (
    <div className="ad-field">
      {label && <label>{label}{req && <span className="req">*</span>}</label>}
      {children}
      {help && <div className="help">{help}</div>}
    </div>
  );
}

function AdBadge({ status }) {
  const map = {
    pub: ['pub', 'Đã xuất bản'],
    draft: ['draft', 'Bản nháp'],
    hide: ['hide', 'Đã ẩn'],
    sched: ['sched', 'Hẹn giờ'],
  };
  const [cls, label] = map[status] || ['hide', status];
  return <span className={`ad-badge ${cls}`}><span className="dot" />{label}</span>;
}

function AdSwitch({ on, onChange }) {
  return <div className={`ad-switch ${on ? 'on' : ''}`} onClick={() => onChange?.(!on)} />;
}

/* Image upload slot (used everywhere) */
function AdImageSlot({ src, label, hint, aspect = '4 / 3', onPick }) {
  const [hover, setHover] = React.useState(false);
  return (
    <div className="ad-imgslot" style={{
      position: 'relative', borderRadius: 8, overflow: 'hidden',
      border: '1.5px dashed var(--ad-line)', background: 'var(--ad-line-soft)',
      aspectRatio: aspect, cursor: 'pointer',
    }}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      onClick={onPick}>
      {src ? (
        <img src={src} alt={label}
             style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      ) : (
        <div style={{
          position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center', color: 'var(--ad-text-mute)',
          gap: 6, fontSize: 12.5,
        }}>
          <AdIcon name="upload" size={20} />
          <div>{hint || 'Kéo thả ảnh hoặc click để chọn'}</div>
        </div>
      )}
      {src && hover && (
        <div style={{
          position: 'absolute', inset: 0, background: 'rgba(15,23,42,.55)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
        }}>
          <button className="ad-btn sm"><AdIcon name="refresh" size={13} /> Đổi ảnh</button>
          <button className="ad-btn sm"><AdIcon name="edit" size={13} /> Crop</button>
        </div>
      )}
      {label && (
        <div style={{
          position: 'absolute', top: 8, left: 8, background: 'rgba(255,255,255,.94)',
          padding: '3px 8px', borderRadius: 4, fontSize: 11, fontWeight: 600,
          color: 'var(--ad-text-soft)',
        }}>{label}</div>
      )}
    </div>
  );
}

Object.assign(window, {
  ADMIN_BRAND, ADMIN_GLOBAL_CSS,
  AdIcon, AdSidebar, AdTopbar, AdPage,
  AdField, AdBadge, AdSwitch, AdImageSlot,
  AD_USERS, adGetUser, adSetUser, adLogout, adCanAccess, adDefaultLanding,
});

/* Flash message after a forbidden-page redirect. Renders a one-shot toast in body. */
(function adRenderFlash() {
  const msg = sessionStorage.getItem('ad_flash');
  if (!msg) return;
  sessionStorage.removeItem('ad_flash');
  const show = () => {
    const t = document.createElement('div');
    t.className = 'ad-toast warn';
    t.style.cssText = 'position:fixed;bottom:24px;right:24px;background:#fff;' +
      'border:1px solid var(--ad-line);border-left:3px solid var(--ad-warn);' +
      'border-radius:8px;padding:12px 16px;box-shadow:var(--ad-shadow-md);' +
      'font-size:13px;color:var(--ad-text);z-index:1000;display:flex;' +
      'align-items:center;gap:8px;';
    t.textContent = msg;
    document.body.appendChild(t);
    setTimeout(() => { t.style.opacity = '0'; t.style.transition = '.4s'; }, 3200);
    setTimeout(() => t.remove(), 3800);
  };
  if (document.body) show();
  else document.addEventListener('DOMContentLoaded', show);
})();
