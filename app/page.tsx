const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Hitie International | Trading Excellence</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=DM+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet">
<style>
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
</style>
</head>
<body>

<!-- HEADER -->
<header>
  <div class="container header-inner">
    <a class="logo" onclick="navigate('home')">
      <div class="logo-icon">H</div>
      <div class="logo-text">
        <h1>Hitie International</h1>
        <p>Trading Excellence</p>
      </div>
    </a>
    <nav>
      <button class="nav-link active" data-page="home"    onclick="navigate('home')">Home</button>
      <button class="nav-link"        data-page="about"   onclick="navigate('about')">About</button>
      <button class="nav-link"        data-page="products" onclick="navigate('products')">Products</button>
      <button class="nav-link"        data-page="projects" onclick="navigate('projects')">Projects</button>
      <button class="nav-link"        data-page="certifications" onclick="navigate('certifications')">Certifications</button>
      <button class="nav-link"        data-page="contact" onclick="navigate('contact')">Contact</button>
      <button class="btn-quote" onclick="navigate('contact')">Get Quote</button>
    </nav>
    <button class="mobile-menu-btn" onclick="toggleMobileMenu()" aria-label="Menu">
      <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
    </button>
  </div>
</header>

<!-- MOBILE NAV -->
<div class="mobile-nav" id="mobileNav">
  <button class="nav-link" onclick="navigate('home');toggleMobileMenu()">Home</button>
  <button class="nav-link" onclick="navigate('about');toggleMobileMenu()">About</button>
  <button class="nav-link" onclick="navigate('products');toggleMobileMenu()">Products</button>
  <button class="nav-link" onclick="navigate('projects');toggleMobileMenu()">Projects</button>
  <button class="nav-link" onclick="navigate('certifications');toggleMobileMenu()">Certifications</button>
  <button class="nav-link" onclick="navigate('contact');toggleMobileMenu()">Contact</button>
  <button class="btn-quote" style="margin:8px 0;" onclick="navigate('contact');toggleMobileMenu()">Get Quote</button>
</div>

<!-- ====== HOME PAGE ====== -->
<div class="page active" id="page-home">

  <!-- HERO -->
  <section class="hero">
    <div class="hero-bg" id="heroBg"></div>
    <div class="hero-overlay"></div>
    <div class="container">
      <div class="hero-content">
        <div class="hero-badge">
          <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
          Global Steel Trading Partner
        </div>
        <h1>Premium Steel Solutions for <span>Critical Industries</span></h1>
        <p>Trusted supplier of high-quality steel products for Oil &amp; Gas, Power Plants, and Petrochemical projects across the globe.</p>
        <div class="hero-cta">
          <button class="btn-primary" onclick="navigate('products')">
            Explore Products
            <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </button>
          <button class="btn-secondary" onclick="navigate('contact')">
            Request Quote
          </button>
        </div>
      </div>
    </div>
    <div class="hero-scroll" onclick="document.querySelector('.stats-bar').scrollIntoView({behavior:'smooth'})">
      <div class="scroll-indicator"><div class="scroll-dot"></div></div>
    </div>
  </section>

  <!-- STATS -->
  <div class="stats-bar">
    <div class="container">
      <div class="stats-grid">
        <div class="stat-item animate-fade-up">
          <div class="stat-number">1<span>+</span></div>
          <div class="stat-label">Year of Excellence</div>
        </div>
        <div class="stat-item animate-fade-up delay-1">
          <div class="stat-number">25<span>+</span></div>
          <div class="stat-label">Projects Delivered</div>
        </div>
        <div class="stat-item animate-fade-up delay-2">
          <div class="stat-number">15<span>+</span></div>
          <div class="stat-label">Satisfied Clients</div>
        </div>
        <div class="stat-item animate-fade-up delay-3">
          <div class="stat-number">5K<span>+</span></div>
          <div class="stat-label">Tons Supplied</div>
        </div>
      </div>
    </div>
  </div>

  <!-- WHY CHOOSE US -->
  <section class="bg-white">
    <div class="container">
      <div class="section-header">
        <div class="section-tag">Our Advantages</div>
        <h2 class="section-title">Why Choose <span>Hitie International</span></h2>
        <p class="section-subtitle">Connecting global manufacturing excellence with your project requirements</p>
      </div>
      <div class="grid-4">
        <div class="card">
          <div class="card-icon">
            <svg width="26" height="26" fill="none" stroke="var(--navy)" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
          </div>
          <h3>Single Point Sourcing</h3>
          <p>We can be your single point for complete project sourcing which saves time, money and manpower. Streamlined procurement from one trusted partner.</p>
        </div>
        <div class="card">
          <div class="card-icon">
            <svg width="26" height="26" fill="none" stroke="var(--navy)" stroke-width="2" viewBox="0 0 24 24"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>
          </div>
          <h3>Quality Assurance</h3>
          <p>Rigorous quality control with complete mill test certificates, third-party inspection, and material traceability for every order.</p>
        </div>
        <div class="card">
          <div class="card-icon">
            <svg width="26" height="26" fill="none" stroke="var(--navy)" stroke-width="2" viewBox="0 0 24 24"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"/><circle cx="12" cy="8" r="6"/></svg>
          </div>
          <h3>Technical Support</h3>
          <p>Expert guidance on material selection, specifications, and compliance with international standards like ASTM, API, ASME.</p>
        </div>
        <div class="card">
          <div class="card-icon">
            <svg width="26" height="26" fill="none" stroke="var(--navy)" stroke-width="2" viewBox="0 0 24 24"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>
          </div>
          <h3>Logistics Management</h3>
          <p>End-to-end supply chain management with timely delivery to project sites across the globe with full documentation.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- FEATURED PRODUCTS -->
  <section class="bg-gray">
    <div class="container">
      <div class="section-header">
        <div class="section-tag">Product Range</div>
        <h2 class="section-title">Featured <span>Products</span></h2>
        <p class="section-subtitle">Premium steel products for critical industrial applications</p>
      </div>
      <div class="grid-4" style="margin-bottom:40px;">
        <div class="product-card">
          <div class="product-img">
            <img src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=400&q=70" alt="Seamless Steel Pipes" loading="lazy">
          </div>
          <div class="product-body">
            <div class="product-cat">Pipes &amp; Tubes</div>
            <h3>Seamless Steel Pipes</h3>
            <p>High-quality seamless pipes for high-pressure applications in oil &amp; gas industries. Available in various grades.</p>
            <div class="product-spec">ASTM A106 · API 5L · ASME B36.10</div>
          </div>
        </div>
        <div class="product-card">
          <div class="product-img">
            <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=70" alt="Welded Steel Pipes" loading="lazy">
          </div>
          <div class="product-body">
            <div class="product-cat">Pipes &amp; Tubes</div>
            <h3>Welded Steel Pipes</h3>
            <p>Premium welded pipes for structural and industrial applications. Manufactured to international standards.</p>
            <div class="product-spec">ASTM A53 · API 5L Grade B · ERW/LSAW</div>
          </div>
        </div>
        <div class="product-card">
          <div class="product-img">
            <img src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&q=70" alt="Steel Plates" loading="lazy">
          </div>
          <div class="product-body">
            <div class="product-cat">Plates &amp; Sheets</div>
            <h3>Steel Plates</h3>
            <p>Heavy-duty steel plates for power plant construction and petrochemical facilities. Superior strength.</p>
            <div class="product-spec">ASTM A516 · SA 516 Grade 60/70</div>
          </div>
        </div>
        <div class="product-card">
          <div class="product-img">
            <img src="https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=400&q=70" alt="Stainless Steel Sheets" loading="lazy">
          </div>
          <div class="product-body">
            <div class="product-cat">Plates &amp; Sheets</div>
            <h3>Stainless Steel Sheets</h3>
            <p>Corrosion-resistant stainless steel sheets for demanding petrochemical applications.</p>
            <div class="product-spec">ASTM A240 · 304/316/321 Grade</div>
          </div>
        </div>
      </div>
      <div class="text-center">
        <button class="btn-navy" onclick="navigate('products')">
          View All Products
          <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </button>
      </div>
    </div>
  </section>

  <!-- RECENT PROJECTS -->
  <section class="bg-white">
    <div class="container">
      <div class="section-header">
        <div class="section-tag">Case Studies</div>
        <h2 class="section-title">Recent <span>Projects</span></h2>
        <p class="section-subtitle">Delivering excellence across major industrial projects worldwide</p>
      </div>
      <div class="grid-2" style="margin-bottom:40px;">
        <div class="project-card">
          <div style="display:flex;justify-content:space-between;align-items:center;">
            <span class="project-tag">Oil &amp; Gas</span>
            <span class="project-year">2024</span>
          </div>
          <h3>Offshore Oil Platform – Arabian Gulf</h3>
          <p>Supplied 5000+ tons of seamless pipes and fittings for offshore platform construction with complete documentation and third-party certification.</p>
          <div class="project-footer">
            <div class="label">Products Supplied</div>
            <div class="value">API 5L Pipes, ASTM A105 Flanges</div>
          </div>
        </div>
        <div class="project-card">
          <div style="display:flex;justify-content:space-between;align-items:center;">
            <span class="project-tag">Power Generation</span>
            <span class="project-year">2023</span>
          </div>
          <h3>Thermal Power Plant – Gujarat</h3>
          <p>Delivered comprehensive steel structure and piping materials for a 660MW thermal power unit within strict project timelines.</p>
          <div class="project-footer">
            <div class="label">Products Supplied</div>
            <div class="value">SA 516 Plates, ASTM A106 Pipes</div>
          </div>
        </div>
      </div>
      <div class="text-center">
        <button class="btn-outline" onclick="navigate('projects')">
          View All Projects
          <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </button>
      </div>
    </div>
  </section>

  <!-- CTA BANNER -->
  <div class="cta-banner">
    <div class="container">
      <div class="cta-content">
        <h2>Ready to Start Your Next Project?</h2>
        <p>Get in touch with our team for competitive quotes and expert consultation</p>
        <div class="cta-btns">
          <button class="btn-primary" onclick="navigate('contact')">
            Request a Quote
            <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </button>
          <button class="btn-secondary" onclick="navigate('contact')">Contact Us</button>
        </div>
      </div>
    </div>
  </div>

</div>

<!-- ====== ABOUT PAGE ====== -->
<div class="page" id="page-about">
  <div class="about-hero">
    <div class="container">
      <div class="section-tag" style="background:rgba(245,158,11,0.2);color:var(--amber-light);">About Us</div>
      <h1>Trading Excellence<br>Since Day One</h1>
      <p>Hitie International is a premier steel trading company committed to delivering world-class steel products to critical industries across the globe.</p>
    </div>
  </div>

  <section class="bg-white">
    <div class="container">
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:64px;align-items:center;" class="about-grid">
        <div>
          <div class="section-tag">Our Story</div>
          <h2 class="section-title">Who We <span>Are</span></h2>
          <p style="font-size:16px;color:var(--gray-600);line-height:1.8;margin-bottom:20px;">
            Hitie International Trade Private Limited is a specialized steel trading company headquartered in Vadodara, Gujarat, India. We focus on supplying premium quality steel products to the Oil & Gas, Power Generation, and Petrochemical industries.
          </p>
          <p style="font-size:16px;color:var(--gray-600);line-height:1.8;margin-bottom:32px;">
            Our extensive network of mills and manufacturers across India and globally enables us to source the right material at the best price, ensuring timely delivery without compromising quality.
          </p>
          <div style="display:flex;gap:32px;flex-wrap:wrap;">
            <div>
              <div style="font-family:'Playfair Display',serif;font-size:36px;font-weight:800;color:var(--navy);">25<span style="color:var(--amber);">+</span></div>
              <div style="font-size:13px;color:var(--gray-500);">Projects Completed</div>
            </div>
            <div>
              <div style="font-family:'Playfair Display',serif;font-size:36px;font-weight:800;color:var(--navy);">15<span style="color:var(--amber);">+</span></div>
              <div style="font-size:13px;color:var(--gray-500);">Happy Clients</div>
            </div>
            <div>
              <div style="font-family:'Playfair Display',serif;font-size:36px;font-weight:800;color:var(--navy);">5K<span style="color:var(--amber);">+</span></div>
              <div style="font-size:13px;color:var(--gray-500);">Tons Supplied</div>
            </div>
          </div>
        </div>
        <div style="background:linear-gradient(135deg,#e8f0fe,#dbeafe);border-radius:24px;height:380px;display:flex;align-items:center;justify-content:center;overflow:hidden;">
          <img src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=600&q=70" alt="Steel" style="width:100%;height:100%;object-fit:cover;border-radius:24px;">
        </div>
      </div>
    </div>
  </section>

  <section class="bg-gray">
    <div class="container">
      <div class="section-header">
        <div class="section-tag">Core Values</div>
        <h2 class="section-title">What Drives <span>Us Forward</span></h2>
      </div>
      <div class="grid-3">
        <div class="value-card">
          <h3>🎯 Quality First</h3>
          <p>Every product we supply undergoes rigorous quality checks. We provide complete mill test certificates and third-party inspection reports with all deliveries.</p>
        </div>
        <div class="value-card">
          <h3>🤝 Trust & Transparency</h3>
          <p>We believe in building long-term relationships based on honesty, fair pricing, and transparent communication at every step of the process.</p>
        </div>
        <div class="value-card">
          <h3>⚡ Timely Delivery</h3>
          <p>Project deadlines are sacred to us. Our logistics expertise ensures materials reach your site on time, every time, regardless of location.</p>
        </div>
        <div class="value-card">
          <h3>🌍 Global Reach</h3>
          <p>With suppliers across India, Europe, and Asia, we have the network to source any grade, size, or specification you require at competitive prices.</p>
        </div>
        <div class="value-card">
          <h3>📋 Compliance</h3>
          <p>Full compliance with international standards including ASTM, API, ASME, IS, and EN — ensuring your project meets all regulatory requirements.</p>
        </div>
        <div class="value-card">
          <h3>💡 Technical Expertise</h3>
          <p>Our team brings deep technical knowledge of steel metallurgy, helping you select the right material for your specific application and environment.</p>
        </div>
      </div>
    </div>
  </section>

  <section class="bg-white">
    <div class="container">
      <div class="section-header">
        <div class="section-tag">Industries We Serve</div>
        <h2 class="section-title">Our <span>Key Sectors</span></h2>
      </div>
      <div class="grid-3">
        <div class="card" style="text-align:center;padding:40px 28px;">
          <div class="card-icon" style="margin:0 auto 20px;">
            <svg width="28" height="28" fill="none" stroke="var(--navy)" stroke-width="2" viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
          </div>
          <h3>Oil &amp; Gas</h3>
          <p>Pipes, fittings, and flanges for upstream and downstream oil & gas applications worldwide.</p>
        </div>
        <div class="card" style="text-align:center;padding:40px 28px;">
          <div class="card-icon" style="margin:0 auto 20px;">
            <svg width="28" height="28" fill="none" stroke="var(--navy)" stroke-width="2" viewBox="0 0 24 24"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
          </div>
          <h3>Power Plants</h3>
          <p>High-temperature and high-pressure steel materials for thermal and nuclear power generation facilities.</p>
        </div>
        <div class="card" style="text-align:center;padding:40px 28px;">
          <div class="card-icon" style="margin:0 auto 20px;">
            <svg width="28" height="28" fill="none" stroke="var(--navy)" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/></svg>
          </div>
          <h3>Petrochemicals</h3>
          <p>Corrosion-resistant alloy and stainless steel for process piping and equipment in chemical plants.</p>
        </div>
      </div>
    </div>
  </section>

  <div class="cta-banner">
    <div class="container cta-content">
      <h2>Partner With Us Today</h2>
      <p>Let's discuss how Hitie International can serve your project needs</p>
      <div class="cta-btns">
        <button class="btn-primary" onclick="navigate('contact')">Get in Touch</button>
        <button class="btn-secondary" onclick="navigate('products')">View Products</button>
      </div>
    </div>
  </div>
</div>

<!-- ====== PRODUCTS PAGE ====== -->
<div class="page" id="page-products">
  <div class="page-hero">
    <div class="section-tag" style="background:rgba(245,158,11,0.2);color:var(--amber-light);">Product Range</div>
    <h1>Our Steel Products</h1>
    <p>Comprehensive range of premium steel materials for all industrial applications</p>
  </div>

  <!-- Pipes & Tubes -->
  <section class="bg-white">
    <div class="container">
      <div class="section-header">
        <div class="section-tag">Category 01</div>
        <h2 class="section-title">Pipes <span>&amp; Tubes</span></h2>
        <p class="section-subtitle">Seamless and welded pipes for demanding industrial applications</p>
      </div>
      <div class="grid-3">
        <div class="product-card">
          <div class="product-img">
            <img src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=400&q=70" alt="Seamless Steel Pipes" loading="lazy">
          </div>
          <div class="product-body">
            <div class="product-cat">Seamless</div>
            <h3>Carbon Steel Seamless Pipes</h3>
            <p>High-quality seamless pipes for high-pressure and high-temperature applications in oil & gas industries.</p>
            <div class="product-spec">ASTM A106 Gr.B/C · API 5L Gr.B/X42/X52/X60/X65 · ASME B36.10</div>
          </div>
        </div>
        <div class="product-card">
          <div class="product-img">
            <img src="https://images.unsplash.com/photo-1567789884554-0b844b597180?w=400&q=70" alt="Alloy Steel Pipes" loading="lazy">
          </div>
          <div class="product-body">
            <div class="product-cat">Alloy Steel</div>
            <h3>Alloy Steel Seamless Pipes</h3>
            <p>Chromium-molybdenum alloy pipes designed for elevated-temperature service in power generation.</p>
            <div class="product-spec">ASTM A335 P1/P5/P9/P11/P22/P91 · ASME B36.10</div>
          </div>
        </div>
        <div class="product-card">
          <div class="product-img">
            <img src="https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=400&q=70" alt="Stainless Steel Pipes" loading="lazy">
          </div>
          <div class="product-body">
            <div class="product-cat">Stainless Steel</div>
            <h3>Stainless Steel Seamless Pipes</h3>
            <p>Corrosion-resistant stainless steel pipes for petrochemical and chemical processing plants.</p>
            <div class="product-spec">ASTM A312 TP304/304L/316/316L/321 · ASME B36.19</div>
          </div>
        </div>
        <div class="product-card">
          <div class="product-img">
            <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=70" alt="ERW Pipes" loading="lazy">
          </div>
          <div class="product-body">
            <div class="product-cat">Welded</div>
            <h3>ERW Steel Pipes</h3>
            <p>Electric resistance welded pipes for structural and lower-pressure fluid transportation applications.</p>
            <div class="product-spec">ASTM A53 Gr.A/B · IS 1239 · IS 3589</div>
          </div>
        </div>
        <div class="product-card">
          <div class="product-img">
            <img src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=400&q=70" alt="LSAW Pipes" loading="lazy">
          </div>
          <div class="product-body">
            <div class="product-cat">Welded</div>
            <h3>LSAW Steel Pipes</h3>
            <p>Large diameter longitudinal submerged arc welded pipes for major pipeline projects.</p>
            <div class="product-spec">API 5L PSL1/PSL2 · ASTM A671/A672</div>
          </div>
        </div>
        <div class="product-card">
          <div class="product-img">
            <img src="https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=400&q=70" alt="Boiler Tubes" loading="lazy">
          </div>
          <div class="product-body">
            <div class="product-cat">Boiler Tubes</div>
            <h3>Boiler &amp; Heat Exchanger Tubes</h3>
            <p>Precision tubes for heat exchangers, condensers, and boiler applications in power plants.</p>
            <div class="product-spec">ASTM A179 · ASTM A192 · ASTM A213 T5/T9/T11/T22/T91</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Plates & Sheets -->
  <section class="bg-gray">
    <div class="container">
      <div class="section-header">
        <div class="section-tag">Category 02</div>
        <h2 class="section-title">Plates <span>&amp; Sheets</span></h2>
        <p class="section-subtitle">Heavy plates and flat products for structural and pressure vessel applications</p>
      </div>
      <div class="grid-3">
        <div class="product-card">
          <div class="product-img">
            <img src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&q=70" alt="Pressure Vessel Plates" loading="lazy">
          </div>
          <div class="product-body">
            <div class="product-cat">Carbon Steel</div>
            <h3>Pressure Vessel Plates</h3>
            <p>High-quality carbon steel plates for pressure vessel and boiler fabrication in power and process industries.</p>
            <div class="product-spec">ASTM A516 Gr.60/70 · SA 516 Gr.60/70 · IS 2002</div>
          </div>
        </div>
        <div class="product-card">
          <div class="product-img">
            <img src="https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=400&q=70" alt="SS Plates" loading="lazy">
          </div>
          <div class="product-body">
            <div class="product-cat">Stainless Steel</div>
            <h3>Stainless Steel Plates</h3>
            <p>Austenitic and duplex stainless steel plates for corrosive environment applications.</p>
            <div class="product-spec">ASTM A240 · 304/316/316L/321/347/Duplex 2205</div>
          </div>
        </div>
        <div class="product-card">
          <div class="product-img">
            <img src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=400&q=70" alt="Structural Steel" loading="lazy">
          </div>
          <div class="product-body">
            <div class="product-cat">Structural</div>
            <h3>Structural Steel Plates</h3>
            <p>Hot rolled structural steel plates for civil construction, shipbuilding, and general fabrication.</p>
            <div class="product-spec">IS 2062 E250/E350 · ASTM A36 · EN S275/S355</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Fittings & Flanges -->
  <section class="bg-white">
    <div class="container">
      <div class="section-header">
        <div class="section-tag">Category 03</div>
        <h2 class="section-title">Fittings <span>&amp; Flanges</span></h2>
        <p class="section-subtitle">Complete range of pipe fittings and flanges for system integrity</p>
      </div>
      <div class="grid-4">
        <div class="product-card">
          <div class="product-img" style="height:160px;">
            <div class="product-img-placeholder">
              <svg width="48" height="48" fill="none" stroke="var(--navy)" stroke-width="1.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/></svg>
            </div>
          </div>
          <div class="product-body">
            <div class="product-cat">Flanges</div>
            <h3>Weld Neck Flanges</h3>
            <p>High-pressure flanges with outstanding strength.</p>
            <div class="product-spec">ASTM A105 · ASME B16.5</div>
          </div>
        </div>
        <div class="product-card">
          <div class="product-img" style="height:160px;">
            <div class="product-img-placeholder">
              <svg width="48" height="48" fill="none" stroke="var(--navy)" stroke-width="1.5" viewBox="0 0 24 24"><path d="M3 3h18v18H3z"/><path d="M3 9h18M3 15h18M9 3v18M15 3v18"/></svg>
            </div>
          </div>
          <div class="product-body">
            <div class="product-cat">Fittings</div>
            <h3>Pipe Elbows</h3>
            <p>90° and 45° elbows in various grades and schedules.</p>
            <div class="product-spec">ASTM A234 WPB · ASME B16.9</div>
          </div>
        </div>
        <div class="product-card">
          <div class="product-img" style="height:160px;">
            <div class="product-img-placeholder">
              <svg width="48" height="48" fill="none" stroke="var(--navy)" stroke-width="1.5" viewBox="0 0 24 24"><path d="M12 2v20M2 12h20"/></svg>
            </div>
          </div>
          <div class="product-body">
            <div class="product-cat">Fittings</div>
            <h3>Tees &amp; Reducers</h3>
            <p>Equal and unequal tees and concentric/eccentric reducers.</p>
            <div class="product-spec">ASTM A234 · ASME B16.9</div>
          </div>
        </div>
        <div class="product-card">
          <div class="product-img" style="height:160px;">
            <div class="product-img-placeholder">
              <svg width="48" height="48" fill="none" stroke="var(--navy)" stroke-width="1.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
            </div>
          </div>
          <div class="product-body">
            <div class="product-cat">Flanges</div>
            <h3>Slip-On &amp; Blind Flanges</h3>
            <p>Slip-on, blind, and socket weld flanges for all pressure classes.</p>
            <div class="product-spec">ASTM A105 · ASME B16.5 Class 150–2500</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <div class="cta-banner">
    <div class="container cta-content">
      <h2>Need a Custom Specification?</h2>
      <p>We source any grade, size, or specification. Contact us for a competitive quote.</p>
      <div class="cta-btns">
        <button class="btn-primary" onclick="navigate('contact')">Request a Quote</button>
      </div>
    </div>
  </div>
</div>

<!-- ====== PROJECTS PAGE ====== -->
<div class="page" id="page-projects">
  <div class="page-hero">
    <div class="section-tag" style="background:rgba(245,158,11,0.2);color:var(--amber-light);">Our Work</div>
    <h1>Project Portfolio</h1>
    <p>Delivering excellence across major industrial projects worldwide</p>
  </div>

  <section class="bg-white">
    <div class="container">
      <div class="section-header">
        <div class="section-tag">2024</div>
        <h2 class="section-title">Recent <span>Projects</span></h2>
      </div>
      <div class="grid-2" style="margin-bottom:60px;">
        <div class="project-card">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;">
            <span class="project-tag">Oil &amp; Gas</span>
            <span class="project-year">2024</span>
          </div>
          <h3>Offshore Oil Platform – Arabian Gulf</h3>
          <p>Supplied 5000+ tons of seamless pipes and fittings for offshore platform construction with complete documentation, TPIA certificates, and material traceability.</p>
          <div class="project-footer">
            <div class="label">Products Supplied</div>
            <div class="value">API 5L Pipes, ASTM A105 Flanges, ASME B16.9 Fittings</div>
          </div>
        </div>
        <div class="project-card">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;">
            <span class="project-tag">Petrochemical</span>
            <span class="project-year">2024</span>
          </div>
          <h3>Refinery Expansion – Jamnagar, India</h3>
          <p>Comprehensive supply of stainless steel piping and pressure vessel plates for a major refinery expansion project under LSTK contract.</p>
          <div class="project-footer">
            <div class="label">Products Supplied</div>
            <div class="value">SS 316L Pipes, SA 516 Plates, Duplex Flanges</div>
          </div>
        </div>
      </div>

      <div class="section-header">
        <div class="section-tag">2023</div>
        <h2 class="section-title">Previous <span>Projects</span></h2>
      </div>
      <div class="grid-2" style="margin-bottom:60px;">
        <div class="project-card">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;">
            <span class="project-tag">Power Generation</span>
            <span class="project-year">2023</span>
          </div>
          <h3>Thermal Power Plant – Gujarat</h3>
          <p>Delivered comprehensive steel structure and piping materials for a 660MW thermal power unit within strict project timelines and quality requirements.</p>
          <div class="project-footer">
            <div class="label">Products Supplied</div>
            <div class="value">SA 516 Plates, ASTM A106 Pipes, T91 Boiler Tubes</div>
          </div>
        </div>
        <div class="project-card">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;">
            <span class="project-tag">Oil &amp; Gas</span>
            <span class="project-year">2023</span>
          </div>
          <h3>Cross-Country Pipeline – Rajasthan</h3>
          <p>Supplied API 5L line pipes for a 200km cross-country natural gas transmission pipeline project with strict dimensional and chemical compliance.</p>
          <div class="project-footer">
            <div class="label">Products Supplied</div>
            <div class="value">API 5L X65 LSAW Pipes, ASME B16.47 Flanges</div>
          </div>
        </div>
        <div class="project-card">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;">
            <span class="project-tag">Petrochemical</span>
            <span class="project-year">2023</span>
          </div>
          <h3>Chemical Plant – Dahej, Gujarat</h3>
          <p>Complete piping material supply for a greenfield specialty chemical manufacturing facility including exotic alloy materials.</p>
          <div class="project-footer">
            <div class="label">Products Supplied</div>
            <div class="value">Hastelloy Pipes, Inconel Fittings, SS 904L Sheets</div>
          </div>
        </div>
        <div class="project-card">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;">
            <span class="project-tag">Power Generation</span>
            <span class="project-year">2022</span>
          </div>
          <h3>Combined Cycle Power Plant – Maharashtra</h3>
          <p>Multi-phase supply of high-alloy piping, fittings and structural steel for a 400MW combined cycle gas turbine power plant.</p>
          <div class="project-footer">
            <div class="label">Products Supplied</div>
            <div class="value">ASTM A335 P91 Pipes, Chrome-Moly Fittings</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <div class="cta-banner">
    <div class="container cta-content">
      <h2>Work With Us on Your Next Project</h2>
      <p>Join our growing list of satisfied clients across the globe</p>
      <div class="cta-btns">
        <button class="btn-primary" onclick="navigate('contact')">Start a Conversation</button>
      </div>
    </div>
  </div>
</div>

<!-- ====== CERTIFICATIONS PAGE ====== -->
<div class="page" id="page-certifications">
  <div class="page-hero">
    <div class="section-tag" style="background:rgba(245,158,11,0.2);color:var(--amber-light);">Quality &amp; Compliance</div>
    <h1>Certifications &amp; Standards</h1>
    <p>Meeting the highest international quality standards in every delivery</p>
  </div>

  <section class="bg-white">
    <div class="container">
      <div class="section-header">
        <div class="section-tag">Compliance Standards</div>
        <h2 class="section-title">International <span>Standards We Follow</span></h2>
        <p class="section-subtitle">All our products comply with major international standards and codes</p>
      </div>
      <div class="grid-3">
        <div class="cert-card">
          <div class="cert-icon">
            <svg width="30" height="30" fill="none" stroke="var(--navy)" stroke-width="2" viewBox="0 0 24 24"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>
          </div>
          <h3>ASTM International</h3>
          <p>Products comply with American Society for Testing and Materials standards covering material specification, testing, and certification.</p>
          <div class="cert-badge">✓ Certified</div>
        </div>
        <div class="cert-card">
          <div class="cert-icon">
            <svg width="30" height="30" fill="none" stroke="var(--navy)" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
          </div>
          <h3>API Standards</h3>
          <p>American Petroleum Institute standards for oil country tubular goods, line pipe, and petroleum equipment.</p>
          <div class="cert-badge">✓ Compliant</div>
        </div>
        <div class="cert-card">
          <div class="cert-icon">
            <svg width="30" height="30" fill="none" stroke="var(--navy)" stroke-width="2" viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
          </div>
          <h3>ASME Standards</h3>
          <p>American Society of Mechanical Engineers codes for boiler and pressure vessel construction and piping systems.</p>
          <div class="cert-badge">✓ Compliant</div>
        </div>
        <div class="cert-card">
          <div class="cert-icon">
            <svg width="30" height="30" fill="none" stroke="var(--navy)" stroke-width="2" viewBox="0 0 24 24"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"/><circle cx="12" cy="8" r="6"/></svg>
          </div>
          <h3>ISO 9001:2015</h3>
          <p>Our supply chain partners maintain ISO 9001 certification, ensuring consistent quality management systems throughout.</p>
          <div class="cert-badge">✓ Compliant</div>
        </div>
        <div class="cert-card">
          <div class="cert-icon">
            <svg width="30" height="30" fill="none" stroke="var(--navy)" stroke-width="2" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>
          </div>
          <h3>Indian Standards (BIS)</h3>
          <p>Bureau of Indian Standards compliance for IS-grade steel materials for domestic projects and government contracts.</p>
          <div class="cert-badge">✓ Certified</div>
        </div>
        <div class="cert-card">
          <div class="cert-icon">
            <svg width="30" height="30" fill="none" stroke="var(--navy)" stroke-width="2" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
          </div>
          <h3>EN / DIN Standards</h3>
          <p>European Norm and German DIN standards for projects requiring European material specifications and certifications.</p>
          <div class="cert-badge">✓ Compliant</div>
        </div>
      </div>
    </div>
  </section>

  <section class="bg-gray">
    <div class="container">
      <div class="section-header">
        <div class="section-tag">Documentation</div>
        <h2 class="section-title">What We Provide With <span>Every Delivery</span></h2>
      </div>
      <div class="grid-4">
        <div class="card" style="text-align:center;">
          <div class="card-icon" style="margin:0 auto 16px;">
            <svg width="24" height="24" fill="none" stroke="var(--navy)" stroke-width="2" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><path d="M9 15l2 2 4-4"/></svg>
          </div>
          <h3>Mill Test Certificates</h3>
          <p>Original EN 10204 3.1 or 3.2 mill test reports for all materials.</p>
        </div>
        <div class="card" style="text-align:center;">
          <div class="card-icon" style="margin:0 auto 16px;">
            <svg width="24" height="24" fill="none" stroke="var(--navy)" stroke-width="2" viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
          </div>
          <h3>Third-Party Inspection</h3>
          <p>TPI reports from SGS, Bureau Veritas, DNV, or client-nominated agencies.</p>
        </div>
        <div class="card" style="text-align:center;">
          <div class="card-icon" style="margin:0 auto 16px;">
            <svg width="24" height="24" fill="none" stroke="var(--navy)" stroke-width="2" viewBox="0 0 24 24"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
          </div>
          <h3>Packing &amp; Shipping Docs</h3>
          <p>Complete packing lists, material identification, and shipping documentation.</p>
        </div>
        <div class="card" style="text-align:center;">
          <div class="card-icon" style="margin:0 auto 16px;">
            <svg width="24" height="24" fill="none" stroke="var(--navy)" stroke-width="2" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
          </div>
          <h3>Heat &amp; Traceability</h3>
          <p>Full heat number traceability and material composition certificates for every lot.</p>
        </div>
      </div>
    </div>
  </section>
</div>

<!-- ====== CONTACT PAGE ====== -->
<div class="page" id="page-contact">
  <div class="page-hero">
    <div class="section-tag" style="background:rgba(245,158,11,0.2);color:var(--amber-light);">Get In Touch</div>
    <h1>Contact Us</h1>
    <p>Reach out to our team for quotes, technical queries, or partnership discussions</p>
  </div>

  <section class="bg-gray">
    <div class="container">
      <div class="contact-grid">
        <!-- Contact Info -->
        <div>
          <div class="contact-info-card">
            <h2>Let's Talk Steel</h2>
            <p>Whether you have a specific requirement or need guidance on material selection, our expert team is here to help you find the perfect solution.</p>
            <div class="contact-detail">
              <div class="contact-detail-icon">
                <svg width="20" height="20" fill="none" stroke="var(--amber-light)" stroke-width="2" viewBox="0 0 24 24"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/><rect x="2" y="4" width="20" height="16" rx="2"/></svg>
              </div>
              <div class="contact-detail-text">
                <div class="label">Email</div>
                <div class="value">info@hitie.in</div>
              </div>
            </div>
            <div class="contact-detail">
              <div class="contact-detail-icon">
                <svg width="20" height="20" fill="none" stroke="var(--amber-light)" stroke-width="2" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.11 11 19.79 19.79 0 0 1 1.03 2.4 2 2 0 0 1 3 .22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 7.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16z"/></svg>
              </div>
              <div class="contact-detail-text">
                <div class="label">Phone / WhatsApp</div>
                <div class="value">+91-7015574843</div>
                <div class="value">+91-9773420273</div>
              </div>
            </div>
            <div class="contact-detail">
              <div class="contact-detail-icon">
                <svg width="20" height="20" fill="none" stroke="var(--amber-light)" stroke-width="2" viewBox="0 0 24 24"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <div class="contact-detail-text">
                <div class="label">Address</div>
                <div class="value">Vadodara, Gujarat, India</div>
              </div>
            </div>
            <div class="contact-detail">
              <div class="contact-detail-icon">
                <svg width="20" height="20" fill="none" stroke="var(--amber-light)" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
              </div>
              <div class="contact-detail-text">
                <div class="label">Website</div>
                <div class="value">www.hitie.in</div>
              </div>
            </div>
            <div class="social-links" style="margin-top:28px;">
              <a class="social-link" href="#" title="LinkedIn">
                <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a class="social-link" href="#" title="Facebook">
                <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a class="social-link" href="#" title="Twitter/X">
                <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </a>
            </div>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="contact-form-card">
          <h2>Send Us a Message</h2>
          <p>Fill out the form and we'll get back to you within 24 hours</p>
          <div class="form-row">
            <div class="form-group">
              <label for="fname">First Name</label>
              <input type="text" id="fname" placeholder="John">
            </div>
            <div class="form-group">
              <label for="lname">Last Name</label>
              <input type="text" id="lname" placeholder="Doe">
            </div>
          </div>
          <div class="form-group">
            <label for="email">Email Address</label>
            <input type="email" id="email" placeholder="john@company.com">
          </div>
          <div class="form-group">
            <label for="phone">Phone Number</label>
            <input type="tel" id="phone" placeholder="+91 00000 00000">
          </div>
          <div class="form-group">
            <label for="subject">Subject</label>
            <select id="subject">
              <option value="">Select inquiry type...</option>
              <option>Product Inquiry</option>
              <option>Request for Quotation</option>
              <option>Technical Support</option>
              <option>Partnership</option>
              <option>Other</option>
            </select>
          </div>
          <div class="form-group">
            <label for="message">Message</label>
            <textarea id="message" placeholder="Please describe your requirements in detail — material grade, size, quantity, delivery location, timeline..."></textarea>
          </div>
          <button class="btn-primary" style="width:100%;justify-content:center;" onclick="submitForm()">
            Send Message
            <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </button>
        </div>
      </div>
    </div>
  </section>
</div>

<!-- ====== FOOTER ====== -->
<footer>
  <div class="container">
    <div class="footer-grid">
      <div>
        <div class="footer-logo">
          <div class="footer-logo-icon">H</div>
          <div class="footer-logo-text">
            <h3>Hitie International</h3>
            <p>Trading Excellence</p>
          </div>
        </div>
        <p class="footer-desc">Leading supplier of premium steel products for Oil &amp; Gas, Power Plants, and Petrochemical projects worldwide.</p>
      </div>
      <div class="footer-col">
        <h4>Quick Links</h4>
        <ul>
          <li><a onclick="navigate('home')">Home</a></li>
          <li><a onclick="navigate('about')">About Us</a></li>
          <li><a onclick="navigate('products')">Products</a></li>
          <li><a onclick="navigate('projects')">Projects</a></li>
          <li><a onclick="navigate('certifications')">Certifications</a></li>
          <li><a onclick="navigate('contact')">Contact</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Our Services</h4>
        <ul>
          <li><span>Steel Pipes &amp; Tubes</span></li>
          <li><span>Plates &amp; Sheets</span></li>
          <li><span>Fittings &amp; Flanges</span></li>
          <li><span>Structural Steel</span></li>
          <li><span>Global Sourcing</span></li>
          <li><span>TPI Coordination</span></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Contact Us</h4>
        <div class="footer-contact-item">
          <svg width="16" height="16" fill="none" stroke="var(--amber-light)" stroke-width="2" viewBox="0 0 24 24"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/><rect x="2" y="4" width="20" height="16" rx="2"/></svg>
          <a href="mailto:info@hitie.in">info@hitie.in</a>
        </div>
        <div class="footer-contact-item">
          <svg width="16" height="16" fill="none" stroke="var(--amber-light)" stroke-width="2" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.11 11 19.79 19.79 0 0 1 1.03 2.4 2 2 0 0 1 3 .22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 7.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16z"/></svg>
          <div>
            <a href="tel:+917015574843">+91-7015574843</a><br>
            <a href="tel:+919773420273">+91-9773420273</a>
          </div>
        </div>
        <div class="footer-contact-item">
          <svg width="16" height="16" fill="none" stroke="var(--amber-light)" stroke-width="2" viewBox="0 0 24 24"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg>
          <span>Vadodara, Gujarat, India</span>
        </div>
        <div class="footer-contact-item">
          <svg width="16" height="16" fill="none" stroke="var(--amber-light)" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
          <a href="https://www.hitie.in" target="_blank" rel="noopener">www.hitie.in</a>
        </div>
        <div class="social-links">
          <a class="social-link" href="#"><svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg></a>
          <a class="social-link" href="#"><svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg></a>
          <a class="social-link" href="#"><svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg></a>
        </div>
      </div>
    </div>
  </div>
  <div class="footer-bottom">
    <div class="container">
      <div class="footer-bottom-inner">
        <p>© 2026 Hitie International Trade Private Limited. All rights reserved.</p>
        <div class="footer-bottom-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </div>
  </div>
</footer>

<!-- TOAST -->
<div class="toast" id="toast">
  <svg width="18" height="18" fill="none" stroke="var(--amber-light)" stroke-width="2" viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
  <span id="toast-msg">Message sent successfully!</span>
</div>

<script>
  // ── NAVIGATION ──
  function navigate(page) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById('page-' + page).classList.add('active');
    document.querySelectorAll('.nav-link').forEach(l => {
      l.classList.toggle('active', l.dataset.page === page);
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
    history.pushState(null, '', '#' + page);
  }

  // ── MOBILE MENU ──
  function toggleMobileMenu() {
    document.getElementById('mobileNav').classList.toggle('open');
  }

  // ── HERO IMAGE PARALLAX ──
  window.addEventListener('load', () => {
    document.getElementById('heroBg').classList.add('loaded');
  });

  // ── FORM SUBMIT ──
  function submitForm() {
    const msg = document.getElementById('message').value;
    const email = document.getElementById('email').value;
    if (!email || !msg) {
      showToast('Please fill in all required fields.', false);
      return;
    }
    showToast('Thank you! We will get back to you within 24 hours.');
    ['fname','lname','email','phone','subject','message'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.value = '';
    });
  }

  // ── TOAST ──
  function showToast(message, success = true) {
    const toast = document.getElementById('toast');
    const msg = document.getElementById('toast-msg');
    msg.textContent = message;
    toast.style.background = success ? 'var(--navy)' : '#dc2626';
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3500);
  }

  // ── HASH ROUTING ──
  function checkHash() {
    const hash = location.hash.replace('#', '') || 'home';
    const pages = ['home','about','products','projects','certifications','contact'];
    if (pages.includes(hash)) navigate(hash);
  }
  window.addEventListener('hashchange', checkHash);
  checkHash();

  // ── SCROLL ANIMATION ──
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.card, .product-card, .project-card, .cert-card, .value-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
  });

  // ── CLOSE MOBILE MENU ON OUTSIDE CLICK ──
  document.addEventListener('click', (e) => {
    const nav = document.getElementById('mobileNav');
    const btn = document.querySelector('.mobile-menu-btn');
    if (nav.classList.contains('open') && !nav.contains(e.target) && !btn.contains(e.target)) {
      nav.classList.remove('open');
    }
  });

  // ── ABOUT PAGE RESPONSIVE ──
  const style = document.createElement('style');
  style.textContent = \`@media (max-width: 760px) { .about-grid { grid-template-columns: 1fr !important; } }\`;
  document.head.appendChild(style);
</script>
</body>
</html>`;

export default function Page() {
  return (
    <iframe
      title="Hitie International"
      srcDoc={html}
      style={{ width: "100%", height: "100vh", border: "0" }}
    />
  );
}
