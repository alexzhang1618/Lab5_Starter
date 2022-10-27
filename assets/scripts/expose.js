// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const hornSelect = document.getElementById('horn-select');
  hornSelect.addEventListener('change', function (event) {
    const value = event.target.value;
    const img = document.querySelector('img[alt="No image selected"]');
    const audio = document.getElementsByClassName('hidden')[0];
    if (value === 'air-horn') {
      img.src = './assets/images/air-horn.svg';
      audio.src = './assets/audio/air-horn.mp3';
    } else if (value === 'car-horn') {
      img.src = './assets/images/car-horn.svg';
      audio.src = './assets/audio/car-horn.mp3';
    } else if (value === 'party-horn') {
      img.src = './assets/images/party-horn.svg';
      audio.src = './assets/audio/party-horn.mp3';
    }
  });

  const audioSlider = document.querySelector('input[type="range"]')
  audioSlider.addEventListener('change', function (event) {
    const value = parseInt(event.target.value);
    const soundIcon = document.querySelector('img[alt="Volume level 2"]');
    const audio = document.getElementsByClassName('hidden')[0];
    const audioLevel = value / 100;
    if (value === 0) {
      soundIcon.src = './assets/icons/volume-level-0.svg';
    } else if (value < 33) {
      soundIcon.src = './assets/icons/volume-level-1.svg';
    } else if (value < 67) {
      soundIcon.src = './assets/icons/volume-level-2.svg';
    } else {
      soundIcon.src = './assets/icons/volume-level-3.svg';
    }
    audio.volume = audioLevel;
  });

  const confetti = new JSConfetti();
  const playSound = document.querySelector('button');
  playSound.addEventListener('click', function (event) {
    const horn = hornSelect.value;
    const audio = document.getElementsByClassName('hidden')[0];
    if (horn === 'party-horn') {
      confetti.addConfetti();
    }
    audio.play();
  });
}