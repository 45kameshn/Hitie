export const scriptsHtml = `<script>
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
</script>`;
