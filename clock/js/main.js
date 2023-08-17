let currentHour;
let currentMinute;
let score = 0;

function generateRandomTime() {
    currentHour = Math.floor(Math.random() * 12);
    currentMinute = Math.floor(Math.random() * 60);

    let hourHand = document.querySelector('.hour-hand');
    let minuteHand = document.querySelector('.minute-hand');

    let hourPosition = (currentHour + currentMinute / 60) * 30;
    let minutePosition = currentMinute * 6;

    hourHand.style.transform = `rotate(${hourPosition}deg)`;
    minuteHand.style.transform = `rotate(${minutePosition}deg)`;
}

function checkGuess() {
    let guess = document.getElementById('guess').value;
    let [guessHour, guessMinute] = guess.split(':').map(Number);

    if (guessHour === currentHour && guessMinute === currentMinute) {
        alert('Correct!');
        score++;
    } else {
        alert('Wrong. Try again.');
    }

    document.getElementById('score').textContent = `Score: ${score}`;
    generateRandomTime(); 
}

document.getElementById('hour-hand-toggle').addEventListener('change', function() {
    document.querySelector('.hour-hand').style.display = this.checked ? 'block' : 'none';
});

document.getElementById('minute-hand-toggle').addEventListener('change', function() {
    document.querySelector('.minute-hand').style.display = this.checked ? 'block' : 'none';
});

generateRandomTime();
