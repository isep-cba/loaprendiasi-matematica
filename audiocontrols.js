const enableBttn = document.getElementById('enable-bttn');
const audio = document.querySelector('.audio');
const playSpan = document.querySelector('.play-pause__span');
const playIcon = document.querySelector('.play-pause__circle');
const playBttn = document.querySelector('#play-pause__bttn');

// Play audio on scroll
const audioPlay = () => {
  const windowY = window.scrollY;
  const audioSect = document.querySelector('.audio-section');
  const audioSectTop = audioSect.offsetTop;
  const audioSectHeight = audioSect.clientHeight;
  
  if (windowY >= audioSectTop && !audio.classList.contains('scroll-inactive') && enableBttn.classList.contains('enabled')) {
    audio.play();
    playIcon.classList.add('playing');
    playSpan.classList.add('pause-icon');
  } 
  
  if (windowY >= audioSectTop + audioSectHeight || windowY < audioSectTop) {
    audio.pause();
    playIcon.classList.remove('playing');
    playSpan.classList.remove('pause-icon');
  }
}

// Enable button
const enableAudio = () => {
  if (!enableBttn.classList.contains('enabled')) {
    enableBttn.classList.add('enabled');
    enableBttn.innerHTML = 'Disable';
    window.addEventListener('scroll', audioPlay);
  } else {
    enableBttn.classList.remove('enabled');
    enableBttn.innerHTML = 'Enable';
  }
}
enableBttn.addEventListener('click', enableAudio);

// Control audio button
let isPlaying = false;

const toggle = () => {
  if (isPlaying) {
    audio.pause();
    enableBttn.classList.remove('enabled');
    enableBttn.innerHTML = 'Enable';
  } else {
    audio.play();
  }
}

audio.onplaying = () => {
  isPlaying = true;
  playIcon.classList.add('playing');
  playSpan.classList.add('pause-icon');
}
audio.onpause = () => {
  isPlaying = false;
  playIcon.classList.remove('playing');
  playSpan.classList.remove('pause-icon');
}
playBttn.addEventListener('click', toggle);