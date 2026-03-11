export const scriptsHtml = `<script>
  // â”€â”€ NAVIGATION â”€â”€
  function navigate(page) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById('page-' + page).classList.add('active');
    document.querySelectorAll('.nav-link').forEach(l => {
      l.classList.toggle('active', l.dataset.page === page);
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
    history.pushState(null, '', '#' + page);
  }

  // â”€â”€ MOBILE MENU â”€â”€
  function toggleMobileMenu() {
    document.getElementById('mobileNav').classList.toggle('open');
  }

  // â”€â”€ HERO IMAGE PARALLAX â”€â”€
  window.addEventListener('load', () => {
    document.getElementById('heroBg').classList.add('loaded');
  });

  // â”€â”€ FORM SUBMIT â”€â”€
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

  // â”€â”€ TOAST â”€â”€
  function showToast(message, success = true) {
    const toast = document.getElementById('toast');
    const msg = document.getElementById('toast-msg');
    msg.textContent = message;
    toast.style.background = success ? 'var(--navy)' : '#dc2626';
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3500);
  }

  // â”€â”€ HASH ROUTING â”€â”€
  function checkHash() {
    const hash = location.hash.replace('#', '') || 'home';
    const pages = ['home','about','products','projects','certifications','contact'];
    if (pages.includes(hash)) navigate(hash);
  }
  window.addEventListener('hashchange', checkHash);
  checkHash();

  // â”€â”€ SCROLL ANIMATION â”€â”€
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

  // â”€â”€ CLOSE MOBILE MENU ON OUTSIDE CLICK â”€â”€
  document.addEventListener('click', (e) => {
    const nav = document.getElementById('mobileNav');
    const btn = document.querySelector('.mobile-menu-btn');
    if (nav.classList.contains('open') && !nav.contains(e.target) && !btn.contains(e.target)) {
      nav.classList.remove('open');
    }
  });

  // â”€â”€ ABOUT PAGE RESPONSIVE â”€â”€
  const style = document.createElement('style');
  style.textContent = \`@media (max-width: 760px) { .about-grid { grid-template-columns: 1fr !important; } }\`;
  document.head.appendChild(style);
</script>`;

