const screens = document.querySelectorAll('.screen');
const buttons = document.querySelectorAll('[data-screen]');

function showScreen(id) {
  screens.forEach((screen) => {
    const isTarget = screen.id === id;
    screen.classList.toggle('active', isTarget);
    screen.setAttribute('aria-hidden', !isTarget);

    if (isTarget) {
      screen.scrollTop = 0;
      screen.focus({ preventScroll: true });
    }
  });
}

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const target = button.getAttribute('data-screen');
    showScreen(target);
  });
});

// Define the default view for first load
showScreen('dashboard');
