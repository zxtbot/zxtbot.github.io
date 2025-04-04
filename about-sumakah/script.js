// Scroll-triggered animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.5
});

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Animated wave
const wave = document.getElementById("wave-path");

function animateWave() {
  const time = Date.now() / 600;
  const amplitude = 10;

  const points = [
    160 + Math.sin(time) * amplitude,
    144 + Math.sin(time + 1) * amplitude,
    128 + Math.sin(time + 2) * amplitude,
    96 + Math.sin(time + 3) * amplitude,
    112 + Math.sin(time + 4) * amplitude,
    128 + Math.sin(time + 5) * amplitude,
    192 + Math.sin(time + 6) * amplitude,
    224 + Math.sin(time + 7) * amplitude,
    256 + Math.sin(time + 8) * amplitude,
    256 + Math.sin(time + 9) * amplitude,
    245.3 + Math.sin(time + 10) * amplitude,
    235 + Math.sin(time + 11) * amplitude,
    213 + Math.sin(time + 12) * amplitude,
    202.7 + Math.sin(time + 13) * amplitude,
    192 + Math.sin(time + 14) * amplitude
  ];

  const newPath = `
    M0,${points[0]}
    L60,${points[1]}
    C120,${points[2]},240,${points[3]},360,${points[4]}
    C480,${points[5]},600,${points[6]},720,${points[7]}
    C840,${points[8]},960,${points[9]},1080,${points[10]}
    C1200,${points[11]},1320,${points[12]},1380,${points[13]}
    L1440,${points[14]}V320H0Z
  `;

  wave.setAttribute("d", newPath);
  requestAnimationFrame(animateWave);
}

animateWave();

// Topbar scroll & mouse interaction
const topbar = document.querySelector('.topbar');
let lastScrollY = window.scrollY;
let isMouseNearTop = false;

window.addEventListener('scroll', () => {
  if (window.scrollY < 50 || isMouseNearTop) {
    topbar.classList.remove('hidden');
  } else if (window.scrollY > lastScrollY) {
    topbar.classList.add('hidden');
  }

  lastScrollY = window.scrollY;
});

document.addEventListener('mousemove', (e) => {
  isMouseNearTop = e.clientY < 50;
  if (isMouseNearTop) {
    topbar.classList.remove('hidden');
  }
});

// Modal logic
document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('aboutModal');
  const overlay = document.getElementById('aboutModalOverlay');
  const modalImage = document.getElementById('modalImage');
  const modalTitle = document.getElementById('modalTitle');
  const modalText = document.getElementById('modalText');
  const modalCloseBtn = document.getElementById('modalCloseBtn');

  document.querySelectorAll('.about-buttons .about-item').forEach(button => {
    button.addEventListener('click', () => {
      modalImage.src = button.dataset.img;
      modalTitle.textContent = button.dataset.title;
      modalText.textContent = button.dataset.text;

      modal.style.display = 'flex';
      overlay.style.display = 'block';
      document.body.style.overflow = 'hidden';
    });
  });

  overlay.addEventListener('click', closeModal);
  modalCloseBtn.addEventListener('click', closeModal);

  function closeModal() {
    modal.style.display = 'none';
    overlay.style.display = 'none';
    document.body.style.overflow = '';
  }
});
