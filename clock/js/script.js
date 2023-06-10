function createDashes() {
    const dashes = document.querySelector('.dashes');
    const dashDegrees = 30;
  
    for (let i = 0; i < 12; i++) {
      const dash = document.createElement('div');
      dash.classList.add('dash');
      dash.style.transform = `rotate(${i * dashDegrees}deg)`;
      dashes.appendChild(dash);
    }
  }
  
  function createNumbers() {
    const numbers = document.querySelector('.numbers');
    const numberDegrees = 30;
  
    for (let i = 1; i <= 12; i++) {
      const number = document.createElement('div');
      number.classList.add('number');
      number.style.transform = `rotate(${i * numberDegrees}deg)`;
      number.innerText = i;
      numbers.appendChild(number);
    }
  }
  
  function checkTime() {
    const guessInput = document.getElementById('guess-input');
    const guess = guessInput.value.trim();
    const currentTime = new Date().toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    });
  
    if (guess === currentTime) {
      document.getElementById('result').textContent = 'Correct!';
    } else {
      document.getElementById('result').textContent = `Wrong. The time is ${currentTime}`;
    }
  }
  
  createDashes();
  createNumbers
  