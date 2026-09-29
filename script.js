const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');

const closeMenu = () => {
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-label', '메뉴 열기');
  mainNav.classList.remove('open');
  document.body.classList.remove('menu-open');
};

const openMenu = () => {
  menuToggle.setAttribute('aria-expanded', 'true');
  menuToggle.setAttribute('aria-label', '메뉴 닫기');
  mainNav.classList.add('open');
  document.body.classList.add('menu-open');
};

menuToggle.addEventListener('click', () => {
  const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
  if (isOpen) closeMenu();
  else openMenu();
});

mainNav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', closeMenu);
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeMenu();
    menuToggle.focus();
  }
});

document.addEventListener('click', (event) => {
  const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
  if (!isOpen) return;
  if (!mainNav.contains(event.target) && !menuToggle.contains(event.target)) closeMenu();
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 650) closeMenu();
});
