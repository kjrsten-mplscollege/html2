"use strict";

/* PIANO KEYS */
var key_c2 = document.getElementById('key_c2');
var key_d2 = document.getElementById('key_d2');
/* SOUND FILES */

var sound_c2 = document.getElementById('sound_c2');
var sound_d2 = document.getElementById('sound_d2');

function playSound(soundNumber) {
  soundNumber.currentTime = 0; //stop the currently playing sound

  soundNumber.play(); //play the new sound

  console.log('now playing ' + soundNumber.id);
}
/* ATTACH SOUNDS TO KEYS */


key_c2.addEventListener("click", function (event) {
  playSound(sound_c2);
});
key_d2.addEventListener("click", function (event) {
  playSound(sound_d2);
});