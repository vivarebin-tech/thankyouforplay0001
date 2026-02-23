document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

function submitForm(e) {
  e.preventDefault();
  alert('감사합니다! 메시지가 전송되었습니다.');
  e.target.reset();
}

window.addEventListener('scroll', () => {
  const header = document.querySelector('.header');
  if (window.scrollY > 50) {
    header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.15)';
  } else {
    header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
  }
});

function toggleTheme() {
  const html = document.documentElement;
  const btn = document.querySelector('.theme-toggle');
  if (html.getAttribute('data-theme') === 'dark') {
    html.setAttribute('data-theme', 'light');
    btn.textContent = '🌙';
    localStorage.setItem('theme', 'light');
  } else {
    html.setAttribute('data-theme', 'dark');
    btn.textContent = '☀️';
    localStorage.setItem('theme', 'dark');
  }
}

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  document.documentElement.setAttribute('data-theme', 'dark');
  document.querySelector('.theme-toggle').textContent = '☀️';
}
