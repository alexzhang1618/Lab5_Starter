// explore.js

window.addEventListener('DOMContentLoaded', init);

let openMouth = false;

async function init() {
  const voiceDropdown = document.getElementById('voice-select');
  const voiceMap = {}
  
  speechSynthesis.addEventListener('voiceschanged', function () {
    const voices = speechSynthesis.getVoices();
    voices.map(function (voice) {
      const option = document.createElement('option');
      voiceMap[voice.name] = voice;
      option.value = voice.name;
      option.text = voice.name;
      voiceDropdown.append(option);
    });
    console.log(voices);
  });

  const pressToTalk = document.querySelector('button');
  pressToTalk.addEventListener('click', function (event) {
    if (voiceDropdown.value !== 'select') {
      const text = document.getElementById('text-to-speak').value;
      const voiceName = voiceDropdown.value;
      const voice = voiceMap[voiceName];
      const speaker = new SpeechSynthesisUtterance(text);
      speaker.voice = voice;
      speechSynthesis.speak(speaker);
    }
  });

  const face = document.querySelector('img[alt="Smiling face"]');
  setInterval(function () {
    if (speechSynthesis.speaking) {
      if (!openMouth) {
        openMouth = true;
        face.src = './assets/images/smiling-open.png';
      }
    } else if (openMouth) {
      face.src = './assets/images/smiling.png';
      openMouth = false;
    }
  }, 50);
}