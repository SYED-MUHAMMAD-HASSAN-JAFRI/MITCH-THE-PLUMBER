// Initialize Lucide Icons using the global object from the CDN
// @ts-ignore
if (window.lucide) {
  // @ts-ignore
  window.lucide.createIcons();
}

// Mobile Menu Logic
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-link');

let isMenuOpen = false;

function toggleMenu() {
  isMenuOpen = !isMenuOpen;
  if (isMenuOpen) {
    mobileMenu?.classList.remove('hidden');
    menuToggle?.querySelector('i')?.setAttribute('data-lucide', 'x');
  } else {
    mobileMenu?.classList.add('hidden');
    menuToggle?.querySelector('i')?.setAttribute('data-lucide', 'menu');
  }
  // @ts-ignore
  if (window.lucide) {
    // @ts-ignore
    window.lucide.createIcons();
  }
}

menuToggle?.addEventListener('click', toggleMenu);

mobileLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (isMenuOpen) toggleMenu();
  });
});

// Scroll Progress Logic
const progressBar = document.getElementById('progress-bar');

window.addEventListener('scroll', () => {
  const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (winScroll / height);
  if (progressBar) {
    progressBar.style.transform = `scaleX(${scrolled})`;
  }
});

// Simple Reveal Animations on Scroll
const observerOptions = {
  threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
}, observerOptions);

document.querySelectorAll('.reveal-up, .reveal-fade').forEach(el => {
  observer.observe(el);
});
