document.addEventListener('DOMContentLoaded', () => {
  // 自動追蹤滾動時，更新導覽列的活動狀態
  const sections = document.querySelectorAll('.page-section');
  const navLinks = document.querySelectorAll('nav a');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      if (pageYOffset >= sectionTop - 150) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.style.color = '';
      if (link.getAttribute('href').includes(current)) {
        link.style.color = 'var(--accent-color)';
      }
    });
  });
});