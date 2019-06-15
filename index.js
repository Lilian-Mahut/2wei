/* MODAL */
var modal = document.getElementById("monModal");
var btn = document.getElementById("wonderwoman");  // WONDERWOMAN
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

/* BOUTONS LECTEUR */
function play(idPlayer, control) {
  var player = document.querySelector('#' + idPlayer);
  if (player.paused) {
      player.play();
      control.textContent = 'Pause';
  } else {
      player.pause();	
      control.textContent = 'Play';
  }
}
function resume(idPlayer) {
  var player = document.querySelector('#' + idPlayer);
  player.currentTime = 0;
  player.pause();
}

