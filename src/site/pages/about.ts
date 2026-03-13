export const aboutPageHtml = `<!-- ====== ABOUT PAGE ====== -->
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
          <h3>✅ Compliance</h3>
          <p>Full compliance with international standards including ASTM, API, ASME, IS, and EN — ensuring your project meets all regulatory requirements.</p>
        </div>
        <div class="value-card">
          <h3>🛠️ Technical Expertise</h3>
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

`;
