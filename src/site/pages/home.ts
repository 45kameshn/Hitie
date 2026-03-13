export const homePageHtml = `<!-- ====== HOME PAGE ====== -->
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
          <div class="stat-number">4<span>+</span></div>
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

`;
