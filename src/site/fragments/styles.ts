export const css = `
  :root {
    --navy: #0f2d52;
    --navy-light: #1a3d6b;
    --navy-dark: #091f3a;
    --amber: #f59e0b;
    --amber-dark: #d97706;
    --amber-light: #fbbf24;
    --gray-50: #f9fafb;
    --gray-100: #f3f4f6;
    --gray-200: #e5e7eb;
    --gray-300: #d1d5db;
    --gray-400: #9ca3af;
    --gray-500: #6b7280;
    --gray-600: #4b5563;
    --gray-700: #374151;
    --gray-800: #1f2937;
    --gray-900: #111827;
    --white: #ffffff;
  }

  * { margin: 0; padding: 0; box-sizing: border-box; }

  html { scroll-behavior: smooth; }

  body {
    font-family: 'DM Sans', sans-serif;
    color: var(--gray-800);
    background: var(--white);
    overflow-x: hidden;
  }

  /* ── UTILITIES ── */
  .container { max-width: 1200px; margin: 0 auto; padding: 0 24px; }
  .hidden { display: none !important; }
  .page { display: none; }
  .page.active { display: block; }

  /* ── ANIMATIONS ── */
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(30px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes fadeIn {
    from { opacity: 0; } to { opacity: 1; }
  }
  @keyframes bounce {
    0%,100% { transform: translateX(-50%) translateY(0); }
    50%      { transform: translateX(-50%) translateY(-10px); }
  }
  @keyframes slideDown {
    from { transform: translateY(-100%); opacity: 0; }
    to   { transform: translateY(0); opacity: 1; }
  }
  .animate-fade-up { animation: fadeUp 0.8s ease forwards; }
  .delay-1 { animation-delay: 0.15s; }
  .delay-2 { animation-delay: 0.3s; }
  .delay-3 { animation-delay: 0.45s; }
  .delay-4 { animation-delay: 0.6s; }

  /* ── HEADER ── */
  header {
    position: fixed; top: 0; left: 0; right: 0; z-index: 100;
    background: rgba(255,255,255,0.97);
    backdrop-filter: blur(12px);
    border-bottom: 1px solid var(--gray-200);
    animation: slideDown 0.5s ease;
  }
  .header-inner {
    display: flex; align-items: center; justify-content: space-between;
    height: 76px;
  }
  .logo { display: flex; align-items: center; gap: 12px; cursor: pointer; text-decoration: none; }
  .logo-icon {
    width: 44px; height: 44px; border-radius: 8px;
    background: linear-gradient(135deg, var(--navy), var(--navy-light));
    display: flex; align-items: center; justify-content: center;
    color: var(--white); font-weight: 800; font-size: 20px;
    font-family: 'Playfair Display', serif;
    box-shadow: 0 4px 12px rgba(15,45,82,0.3);
  }
  .logo-text h1 { font-size: 18px; font-weight: 700; color: var(--gray-900); line-height: 1.2; }
  .logo-text p  { font-size: 11px; color: var(--gray-500); letter-spacing: 0.05em; }
  nav { display: flex; align-items: center; gap: 4px; }
  .nav-link {
    padding: 8px 14px; border-radius: 6px; font-size: 14px; font-weight: 500;
    color: var(--gray-600); cursor: pointer; transition: all 0.2s; border: none;
    background: none; text-decoration: none;
  }
  .nav-link:hover, .nav-link.active {
    color: var(--navy); background: var(--gray-100);
  }
  .nav-link.active { color: var(--navy); background: #e8f0fe; }
  .btn-quote {
    margin-left: 12px; padding: 10px 20px; border-radius: 8px;
    background: var(--navy); color: var(--white); font-size: 14px;
    font-weight: 600; border: none; cursor: pointer; transition: all 0.2s;
    font-family: 'DM Sans', sans-serif;
  }
  .btn-quote:hover { background: var(--navy-light); transform: translateY(-1px); box-shadow: 0 4px 12px rgba(15,45,82,0.3); }
  .mobile-menu-btn {
    display: none; padding: 8px; background: none; border: none;
    cursor: pointer; color: var(--gray-700);
  }
  @media (max-width: 900px) {
    nav, .btn-quote { display: none; }
    .mobile-menu-btn { display: block; }
  }
  .mobile-nav {
    display: none; position: fixed; top: 76px; left: 0; right: 0;
    background: white; border-bottom: 1px solid var(--gray-200);
    z-index: 99; padding: 16px; flex-direction: column; gap: 4px;
  }
  .mobile-nav.open { display: flex; }
  .mobile-nav .nav-link { display: block; padding: 12px 16px; }

  /* ── BUTTONS ── */
  .btn-primary {
    display: inline-flex; align-items: center; gap: 8px;
    padding: 14px 28px; border-radius: 8px; font-size: 15px;
    font-weight: 600; background: var(--amber); color: var(--navy);
    border: none; cursor: pointer; transition: all 0.2s;
    font-family: 'DM Sans', sans-serif; text-decoration: none;
  }
  .btn-primary:hover { background: var(--amber-dark); transform: translateY(-2px); box-shadow: 0 8px 24px rgba(245,158,11,0.35); }
  .btn-secondary {
    display: inline-flex; align-items: center; gap: 8px;
    padding: 14px 28px; border-radius: 8px; font-size: 15px;
    font-weight: 600; background: transparent; color: var(--white);
    border: 2px solid rgba(255,255,255,0.7); cursor: pointer; transition: all 0.2s;
    font-family: 'DM Sans', sans-serif; text-decoration: none;
  }
  .btn-secondary:hover { background: white; color: var(--navy); }
  .btn-outline {
    display: inline-flex; align-items: center; gap: 8px;
    padding: 10px 24px; border-radius: 8px; font-size: 14px;
    font-weight: 600; background: transparent; color: var(--navy);
    border: 2px solid var(--navy); cursor: pointer; transition: all 0.2s;
    font-family: 'DM Sans', sans-serif; text-decoration: none;
  }
  .btn-outline:hover { background: var(--navy); color: white; }
  .btn-navy {
    display: inline-flex; align-items: center; gap: 8px;
    padding: 11px 24px; border-radius: 8px; font-size: 14px;
    font-weight: 600; background: var(--navy); color: white;
    border: none; cursor: pointer; transition: all 0.2s;
    font-family: 'DM Sans', sans-serif; text-decoration: none;
  }
  .btn-navy:hover { background: var(--navy-light); transform: translateY(-1px); }

  /* ── HERO ── */
  .hero {
    position: relative; height: 92vh; min-height: 600px;
    display: flex; align-items: center; justify-content: center;
    overflow: hidden; margin-top: 76px;
  }
  .hero-bg {
    position: absolute; inset: 0; z-index: 0;
    background-image: url('https://images.unsplash.com/photo-1474674556023-efef886fa147?w=1600&q=80');
    background-size: cover; background-position: center;
    transform: scale(1.05);
    transition: transform 8s ease;
  }
  .hero-bg.loaded { transform: scale(1); }
  .hero-overlay {
    position: absolute; inset: 0; z-index: 1;
    background: linear-gradient(105deg, rgba(9,31,58,0.96) 0%, rgba(9,31,58,0.88) 50%, rgba(9,31,58,0.4) 100%);
  }
  .hero-content {
    position: relative; z-index: 2; color: white;
    max-width: 680px; opacity: 0;
    animation: fadeUp 1s ease 0.3s forwards;
  }
  .hero-badge {
    display: inline-flex; align-items: center; gap: 8px;
    background: rgba(245,158,11,0.2); border: 1px solid rgba(245,158,11,0.4);
    color: var(--amber-light); padding: 6px 14px; border-radius: 20px;
    font-size: 13px; font-weight: 500; margin-bottom: 24px;
  }
  .hero-content h1 {
    font-family: 'Playfair Display', serif;
    font-size: clamp(38px, 5.5vw, 68px);
    font-weight: 800; line-height: 1.1;
    margin-bottom: 20px; letter-spacing: -0.02em;
  }
  .hero-content h1 span { color: var(--amber-light); }
  .hero-content p {
    font-size: 18px; color: rgba(255,255,255,0.82);
    line-height: 1.7; margin-bottom: 36px; max-width: 560px;
  }
  .hero-cta { display: flex; gap: 14px; flex-wrap: wrap; }
  .hero-scroll {
    position: absolute; bottom: 32px; left: 50%;
    animation: bounce 2s ease infinite;
    z-index: 2; cursor: pointer;
  }
  .scroll-indicator {
    width: 28px; height: 44px; border: 2px solid rgba(255,255,255,0.5);
    border-radius: 14px; display: flex; justify-content: center; padding-top: 8px;
  }
  .scroll-dot {
    width: 4px; height: 8px; background: white; border-radius: 2px;
    animation: fadeIn 2s ease infinite alternate;
  }

  /* ── STATS ── */
  .stats-bar {
    background: white; padding: 52px 0;
    border-bottom: 1px solid var(--gray-200);
    box-shadow: 0 4px 24px rgba(0,0,0,0.04);
  }
  .stats-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 32px; }
  .stat-item { text-align: center; }
  .stat-number {
    font-family: 'Playfair Display', serif;
    font-size: clamp(36px, 4vw, 52px);
    font-weight: 800; color: var(--navy); line-height: 1;
    margin-bottom: 8px;
  }
  .stat-number span { color: var(--amber); }
  .stat-label { font-size: 14px; font-weight: 500; color: var(--gray-500); }
  @media (max-width: 640px) { .stats-grid { grid-template-columns: repeat(2,1fr); } }

  /* ── SECTIONS ── */
  section { padding: 88px 0; }
  .section-tag {
    display: inline-block; background: #e8f0fe;
    color: var(--navy); font-size: 12px; font-weight: 700;
    letter-spacing: 0.1em; text-transform: uppercase;
    padding: 5px 12px; border-radius: 4px; margin-bottom: 16px;
  }
  .section-title {
    font-family: 'Playfair Display', serif;
    font-size: clamp(30px, 4vw, 46px);
    font-weight: 800; color: var(--gray-900); line-height: 1.15;
    margin-bottom: 16px;
  }
  .section-title span { color: var(--navy); }
  .section-subtitle { font-size: 17px; color: var(--gray-500); max-width: 560px; line-height: 1.6; }
  .section-header { text-align: center; margin-bottom: 60px; }
  .section-header .section-subtitle { margin: 0 auto; }

  /* ── CARDS ── */
  .card {
    background: white; border-radius: 16px;
    border: 2px solid var(--gray-200); padding: 32px;
    transition: all 0.3s; position: relative; overflow: hidden;
  }
  .card::before {
    content: ''; position: absolute; inset: 0;
    background: linear-gradient(135deg, var(--navy), var(--navy-light));
    opacity: 0; transition: opacity 0.3s; z-index: 0;
  }
  .card:hover { border-color: var(--navy); box-shadow: 0 20px 48px rgba(15,45,82,0.12); transform: translateY(-4px); }
  .card:hover::before { opacity: 0.03; }
  .card > * { position: relative; z-index: 1; }
  .card-icon {
    width: 56px; height: 56px; border-radius: 12px;
    background: #e8f0fe; display: flex; align-items: center;
    justify-content: center; margin-bottom: 20px; transition: all 0.3s;
  }
  .card:hover .card-icon { background: var(--navy); }
  .card:hover .card-icon svg { stroke: white; }
  .card h3 { font-size: 18px; font-weight: 700; color: var(--gray-900); margin-bottom: 10px; }
  .card p  { font-size: 14px; color: var(--gray-500); line-height: 1.7; }

  /* ── PRODUCT CARDS ── */
  .product-card {
    background: white; border-radius: 16px; overflow: hidden;
    border: 2px solid var(--gray-200); transition: all 0.3s;
  }
  .product-card:hover { border-color: var(--navy); box-shadow: 0 20px 48px rgba(15,45,82,0.12); transform: translateY(-4px); }
  .product-img {
    height: 200px; overflow: hidden; background: var(--gray-100);
    position: relative;
  }
  .product-img img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s ease; }
  .product-card:hover .product-img img { transform: scale(1.08); }
  .product-img-placeholder {
    width: 100%; height: 100%; display: flex; align-items: center;
    justify-content: center; background: linear-gradient(135deg, #e8f0fe, #dbeafe);
  }
  .product-body { padding: 24px; }
  .product-cat { font-size: 12px; font-weight: 700; color: var(--amber-dark); text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 8px; }
  .product-body h3 { font-size: 18px; font-weight: 700; color: var(--gray-900); margin-bottom: 8px; }
  .product-body p  { font-size: 13px; color: var(--gray-500); line-height: 1.6; margin-bottom: 12px; }
  .product-spec { font-size: 12px; color: var(--gray-400); font-weight: 500; }

  /* ── PROJECT CARDS ── */
  .project-card {
    background: white; border-radius: 16px;
    border: 2px solid var(--gray-200); padding: 32px; transition: all 0.3s;
  }
  .project-card:hover { border-color: var(--navy); box-shadow: 0 20px 48px rgba(15,45,82,0.1); transform: translateY(-3px); }
  .project-tag {
    display: inline-block; background: #fef3c7; color: #b45309;
    font-size: 12px; font-weight: 700; padding: 4px 12px; border-radius: 20px;
  }
  .project-year { font-size: 14px; font-weight: 500; color: var(--gray-400); }
  .project-card h3 { font-size: 22px; font-weight: 700; color: var(--gray-900); margin: 16px 0 10px; }
  .project-card p  { font-size: 15px; color: var(--gray-500); line-height: 1.6; margin-bottom: 20px; }
  .project-footer { border-top: 1px solid var(--gray-200); padding-top: 16px; }
  .project-footer .label { font-size: 12px; color: var(--gray-400); font-weight: 500; margin-bottom: 4px; }
  .project-footer .value { font-size: 14px; font-weight: 600; color: var(--navy); }

  /* ── GRIDS ── */
  .grid-4 { display: grid; grid-template-columns: repeat(4,1fr); gap: 24px; }
  .grid-3 { display: grid; grid-template-columns: repeat(3,1fr); gap: 24px; }
  .grid-2 { display: grid; grid-template-columns: repeat(2,1fr); gap: 24px; }
  @media (max-width: 1024px) { .grid-4 { grid-template-columns: repeat(2,1fr); } .grid-3 { grid-template-columns: repeat(2,1fr); } }
  @media (max-width: 640px)  { .grid-4, .grid-3, .grid-2 { grid-template-columns: 1fr; } }

  /* ── CTA BANNER ── */
  .cta-banner {
    background: linear-gradient(135deg, var(--navy-dark) 0%, var(--navy) 50%, #1e4080 100%);
    padding: 88px 0; position: relative; overflow: hidden;
  }
  .cta-banner::before {
    content: ''; position: absolute; top: -60px; right: -60px;
    width: 300px; height: 300px; border-radius: 50%;
    background: rgba(245,158,11,0.08); pointer-events: none;
  }
  .cta-banner::after {
    content: ''; position: absolute; bottom: -80px; left: -40px;
    width: 400px; height: 400px; border-radius: 50%;
    background: rgba(255,255,255,0.04); pointer-events: none;
  }
  .cta-content { text-align: center; position: relative; z-index: 1; }
  .cta-content h2 {
    font-family: 'Playfair Display', serif;
    font-size: clamp(28px, 4vw, 46px);
    font-weight: 800; color: white; margin-bottom: 16px;
  }
  .cta-content p { font-size: 17px; color: rgba(255,255,255,0.75); margin-bottom: 36px; }
  .cta-btns { display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; }

  /* ── FOOTER ── */
  footer {
    background: linear-gradient(135deg, var(--navy-dark) 0%, var(--navy) 60%, #0d1f3c 100%);
    color: white; padding: 72px 0 0;
  }
  .footer-grid { display: grid; grid-template-columns: 1.5fr 1fr 1fr 1.5fr; gap: 48px; margin-bottom: 48px; }
  @media (max-width: 900px) { .footer-grid { grid-template-columns: 1fr 1fr; } }
  @media (max-width: 640px) { .footer-grid { grid-template-columns: 1fr; } }
  .footer-logo { display: flex; align-items: center; gap: 12px; margin-bottom: 16px; }
  .footer-logo-icon {
    width: 40px; height: 40px; border-radius: 8px;
    background: linear-gradient(135deg, var(--amber), var(--amber-dark));
    display: flex; align-items: center; justify-content: center;
    color: var(--navy); font-weight: 800; font-size: 18px;
    font-family: 'Playfair Display', serif;
  }
  .footer-logo-text h3 { font-size: 16px; font-weight: 700; }
  .footer-logo-text p  { font-size: 11px; color: rgba(255,255,255,0.5); }
  .footer-desc { font-size: 13px; color: rgba(255,255,255,0.6); line-height: 1.7; }
  .footer-col h4 { font-size: 14px; font-weight: 700; color: var(--amber-light); margin-bottom: 16px; letter-spacing: 0.05em; text-transform: uppercase; }
  .footer-col ul { list-style: none; }
  .footer-col li { margin-bottom: 10px; }
  .footer-col a, .footer-col span {
    font-size: 13px; color: rgba(255,255,255,0.6);
    text-decoration: none; transition: color 0.2s; cursor: pointer;
  }
  .footer-col a:hover { color: var(--amber-light); }
  .footer-contact-item { display: flex; align-items: flex-start; gap: 10px; margin-bottom: 14px; }
  .footer-contact-item svg { flex-shrink: 0; margin-top: 2px; }
  .social-links { display: flex; gap: 12px; margin-top: 20px; }
  .social-link {
    width: 36px; height: 36px; border-radius: 8px;
    background: rgba(255,255,255,0.1); display: flex; align-items: center;
    justify-content: center; color: rgba(255,255,255,0.6);
    transition: all 0.2s; cursor: pointer; text-decoration: none;
  }
  .social-link:hover { background: var(--amber); color: var(--navy); }
  .footer-bottom {
    border-top: 1px solid rgba(255,255,255,0.1);
    padding: 24px 0;
  }
  .footer-bottom-inner {
    display: flex; justify-content: space-between; align-items: center;
    flex-wrap: wrap; gap: 12px;
  }
  .footer-bottom p { font-size: 13px; color: rgba(255,255,255,0.4); }
  .footer-bottom-links { display: flex; gap: 20px; }
  .footer-bottom-links a { font-size: 13px; color: rgba(255,255,255,0.4); text-decoration: none; transition: color 0.2s; }
  .footer-bottom-links a:hover { color: var(--amber-light); }

  /* ── BG VARIANTS ── */
  .bg-gray { background: var(--gray-50); }
  .bg-white { background: white; }
  .text-center { text-align: center; }

  /* ── ABOUT PAGE ── */
  .about-hero {
    background: linear-gradient(135deg, var(--navy-dark), var(--navy));
    color: white; padding: 100px 0 80px; margin-top: 76px;
  }
  .about-hero h1 {
    font-family: 'Playfair Display', serif;
    font-size: clamp(36px, 5vw, 60px); font-weight: 800; margin-bottom: 16px;
  }
  .about-hero p { font-size: 18px; color: rgba(255,255,255,0.75); max-width: 600px; line-height: 1.6; }
  .page-hero {
    background: linear-gradient(135deg, var(--navy-dark), var(--navy));
    color: white; padding: 80px 0 64px; margin-top: 76px;
    text-align: center;
  }
  .page-hero h1 {
    font-family: 'Playfair Display', serif;
    font-size: clamp(32px, 4.5vw, 52px); font-weight: 800; margin-bottom: 12px;
  }
  .page-hero p { font-size: 17px; color: rgba(255,255,255,0.7); max-width: 540px; margin: 0 auto; }

  /* ── TEAM / VALUE CARDS ── */
  .value-card {
    background: white; border-radius: 16px; padding: 32px;
    border-left: 4px solid var(--amber); box-shadow: 0 4px 20px rgba(0,0,0,0.05);
  }
  .value-card h3 { font-size: 18px; font-weight: 700; color: var(--navy); margin-bottom: 8px; }
  .value-card p  { font-size: 14px; color: var(--gray-500); line-height: 1.7; }

  /* ── CONTACT ── */
  .contact-grid { display: grid; grid-template-columns: 1fr 1.4fr; gap: 48px; }
  @media (max-width: 860px) { .contact-grid { grid-template-columns: 1fr; } }
  .contact-info-card {
    background: linear-gradient(135deg, var(--navy-dark), var(--navy));
    border-radius: 20px; padding: 40px; color: white;
  }
  .contact-info-card h2 {
    font-family: 'Playfair Display', serif; font-size: 28px;
    font-weight: 800; margin-bottom: 12px;
  }
  .contact-info-card p { font-size: 15px; color: rgba(255,255,255,0.7); margin-bottom: 32px; line-height: 1.6; }
  .contact-detail { display: flex; align-items: flex-start; gap: 14px; margin-bottom: 22px; }
  .contact-detail-icon {
    width: 40px; height: 40px; border-radius: 8px;
    background: rgba(245,158,11,0.2); display: flex; align-items: center;
    justify-content: center; flex-shrink: 0;
  }
  .contact-detail-text .label { font-size: 12px; color: rgba(255,255,255,0.5); text-transform: uppercase; letter-spacing: 0.05em; }
  .contact-detail-text .value { font-size: 15px; color: white; font-weight: 500; margin-top: 2px; }
  .contact-form-card {
    background: white; border-radius: 20px; padding: 40px;
    box-shadow: 0 8px 40px rgba(0,0,0,0.08); border: 1px solid var(--gray-200);
  }
  .contact-form-card h2 {
    font-family: 'Playfair Display', serif; font-size: 26px;
    font-weight: 800; color: var(--gray-900); margin-bottom: 8px;
  }
  .contact-form-card p { font-size: 14px; color: var(--gray-500); margin-bottom: 28px; }
  .form-group { margin-bottom: 20px; }
  .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
  @media (max-width: 560px) { .form-row { grid-template-columns: 1fr; } }
  label { display: block; font-size: 13px; font-weight: 600; color: var(--gray-700); margin-bottom: 6px; }
  input, select, textarea {
    width: 100%; padding: 12px 16px; border-radius: 8px;
    border: 2px solid var(--gray-200); font-size: 14px; font-family: 'DM Sans', sans-serif;
    color: var(--gray-800); transition: border-color 0.2s; outline: none;
    background: var(--gray-50);
  }
  input:focus, select:focus, textarea:focus { border-color: var(--navy); background: white; }
  textarea { resize: vertical; min-height: 120px; }

  /* ── CERTIFICATIONS ── */
  .cert-card {
    background: white; border-radius: 16px; padding: 28px;
    border: 2px solid var(--gray-200); text-align: center;
    transition: all 0.3s;
  }
  .cert-card:hover { border-color: var(--navy); transform: translateY(-4px); box-shadow: 0 16px 40px rgba(15,45,82,0.1); }
  .cert-icon {
    width: 64px; height: 64px; border-radius: 16px; margin: 0 auto 16px;
    background: linear-gradient(135deg, #e8f0fe, #dbeafe);
    display: flex; align-items: center; justify-content: center;
  }
  .cert-card h3 { font-size: 17px; font-weight: 700; color: var(--gray-900); margin-bottom: 8px; }
  .cert-card p  { font-size: 13px; color: var(--gray-500); line-height: 1.6; }
  .cert-badge {
    display: inline-block; margin-top: 12px;
    background: #dcfce7; color: #15803d; font-size: 11px;
    font-weight: 700; padding: 3px 10px; border-radius: 20px;
  }

  /* ── DIVIDER ── */
  .divider { height: 1px; background: var(--gray-200); }

  /* ── NOTIFICATION ── */
  .toast {
    position: fixed; bottom: 24px; right: 24px; z-index: 999;
    background: var(--navy); color: white; padding: 16px 24px;
    border-radius: 12px; font-size: 14px; font-weight: 500;
    box-shadow: 0 8px 32px rgba(0,0,0,0.2);
    transform: translateY(80px); opacity: 0;
    transition: all 0.4s ease;
    display: flex; align-items: center; gap: 10px;
  }
  .toast.show { transform: translateY(0); opacity: 1; }
`;
