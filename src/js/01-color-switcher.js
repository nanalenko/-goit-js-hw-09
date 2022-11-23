  const startBtn = document.querySelector('[data-start]');
  const stopBtn = document.querySelector('[data-stop]');
  let timer = null;
  startBtn.addEventListener('click', () => {
    timer = setInterval(() => {
      document.body.style.background = getRandomHexColor();
    }, 1000);
    startBtn.disabled = true;
  });
  stopBtn.addEventListener('click', () => {
    clearInterval(timer);
    startBtn.disabled = false;
  });

  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }