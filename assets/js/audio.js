




var music = document.getElementById('myAudio'); // id for audio element
var duration = music.duration; // Duration of audio clip, calculated here for embedding purposes
var pButton = document.getElementById('pButton'); // play button
var playhead = document.getElementById('playhead'); // playhead
var timeline = document.getElementById('timeline'); // timeline
var rated;
var finishedAudio;
// once the audio is loaded
music.onloadedmetadata = function() {
  // note that we need to use music.duration here since duration as of now is NaN, thats a value taken before the audio is loaded
  document.getElementById("Audio Duration").innerHTML = Math.floor(music.duration);
  rated = false;
  finishedAudio = false;
};

// timeline width adjusted for playhead
var timelineWidth = timeline.offsetWidth - playhead.offsetWidth;

// play button event listenter
pButton.addEventListener("click", play);

// timeupdate event listener
music.addEventListener("timeupdate", timeUpdate, false);

// makes timeline clickable
timeline.addEventListener("click", function(event) {
  moveplayhead(event);
  music.currentTime = duration * clickPercent(event);
}, false);

// returns click as decimal (.77) of the total timelineWidth
function clickPercent(event) {
  return (event.clientX - getPosition(timeline)) / timelineWidth;
}

// makes playhead draggable
playhead.addEventListener('mousedown', mouseDown, false);
window.addEventListener('mouseup', mouseUp, false);

// Boolean value so that audio position is updated only when the playhead is released
var onplayhead = false;

// mouseDown EventListener
function mouseDown() {
  onplayhead = true;
  window.addEventListener('mousemove', moveplayhead, true);
  music.removeEventListener('timeupdate', timeUpdate, false);
}

// mouseUp EventListener
// getting input from all mouse clicks
function mouseUp(event) {
  if (onplayhead == true) {
    moveplayhead(event);
    window.removeEventListener('mousemove', moveplayhead, true);
    // change current time
    music.currentTime = duration * clickPercent(event);
    music.addEventListener('timeupdate', timeUpdate, false);
  }
  onplayhead = false;
}
// mousemove EventListener
// Moves playhead as user drags
function moveplayhead(event) {
  var newMargLeft = event.clientX - getPosition(timeline);

  if (newMargLeft >= 0 && newMargLeft <= timelineWidth) {
    playhead.style.marginLeft = newMargLeft + "px";
  }
  if (newMargLeft < 0) {
    playhead.style.marginLeft = "0px";
  }
  if (newMargLeft > timelineWidth) {
    playhead.style.marginLeft = timelineWidth + "px";
  }
}

// timeUpdate
// Synchronizes playhead position with current point in audio
function timeUpdate() {
  var playPercent = timelineWidth * (music.currentTime / duration);
  playhead.style.marginLeft = playPercent + "px";
  document.getElementById("Time Elasped").innerHTML = Math.floor(music.currentTime);
  if (music.currentTime == duration) {
    pButton.className = "";
    pButton.className = "play";
  }
}
var played = 0;

//Play and Pause
function play() {
  // start music

  if (music.paused && played == 0) {
    played = 1;
    music.play();
    // remove play, add pause
    pButton.className = "";
    pButton.className = "pause";
    var duration = music.duration * 1000;
    // second argument takes seconds, if 3 seconds == 3000
    // set timeout, if no response after 15 seconds when the audio is played
    // send to thank you page
    setTimeout(alertFunc, duration+60000);
    setTimeout(audioDone, duration);
    setTimeout(changeColor, duration);
  }
}
function alertFunc() {
  localStorage.setItem('timeFlag', 'train1');
}
function audioDone() {
  finishedAudio = true;
}
function changeColor(){
    var next_button = document.getElementById("Submit Button");
    butt.style.backgroundColor = "";
    butt.disabled = false;
}

// Gets audio file duration
music.addEventListener("canplaythrough", function() {
  duration = music.duration;
}, false);

// getPosition
// Returns elements left position relative to top-left of viewport
function getPosition(el) {
  return el.getBoundingClientRect().left;
}


// code to change slider colour
var slide0 = document.getElementById("myRange0");
  slide0.style.backgroundColor = "#6cc091";
var slide1 = document.getElementById("myRange1");
  slide1.style.backgroundColor = "#6cc091";
var slide2 = document.getElementById("myRange2");
  slide2.style.backgroundColor = "#6cc091";

  slide0.onclick = function() {
    slide0.style.backgroundColor = "#d3d3d3";
    rated = true;
    if (finishedAudio){
      changeColor();
    }
  }
  slide1.onclick = function() {
    slide1.style.backgroundColor = "#d3d3d3";
    rated = true;
    if (finishedAudio){
      changeColor();
    }
  }
  slide2.onclick = function() {
    slide2.style.backgroundColor = "#d3d3d3";
    rated = true;
    if (finishedAudio){
      changeColor();
    }
  }
