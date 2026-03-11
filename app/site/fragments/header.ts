export const headerHtml = `<!-- HEADER -->
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

`;

