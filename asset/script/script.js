var myPlayer = videojs("videoexemple");
togglePause = function(){
  if (myPlayer.play()) {
    myPlayer.paused();
  }
  else {
    myPlayer.play();
  }
}