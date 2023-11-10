window.addEventListener('DOMContentLoaded', (event) => {
    const welcomeMessage = document.getElementById('welcomeMessage');
    welcomeMessage.style.opacity = '0';
    fadeIn(welcomeMessage);
  });
  
  function fadeIn(element) {
    let opacity = 0;
    const interval = setInterval(() => {
      if (opacity < 1) {
        opacity += 0.1;
        element.style.opacity = opacity;
      } else {
        clearInterval(interval);
      }
    }, 100);
  }
  