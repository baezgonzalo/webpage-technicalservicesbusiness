const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('#primary-nav');
menuButton.addEventListener('click', () => {
  const opened = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(opened));
  menuButton.setAttribute('aria-label', opened ? 'Close navigation' : 'Open navigation');
  nav.classList.toggle('open', opened);
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}));
document.querySelectorAll('.nav-group > button').forEach(button => button.addEventListener('click', () => {
  const opened = button.getAttribute('aria-expanded') !== 'true';
  button.setAttribute('aria-expanded', String(opened));
  button.parentElement.classList.toggle('open', opened);
}));
