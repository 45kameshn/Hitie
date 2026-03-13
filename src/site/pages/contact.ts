export const contactPageHtml = `<!-- ====== CONTACT PAGE ====== -->
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
                <div class="value">contact@hitie.in</div>
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

`;
