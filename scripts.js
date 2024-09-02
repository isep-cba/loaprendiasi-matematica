// Get the video
var video = document.getElementById("videoUno");

// Get the button
var btn = document.getElementById("myBtn");

// Pause and play the video, and change the button text
function myFunction() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}


