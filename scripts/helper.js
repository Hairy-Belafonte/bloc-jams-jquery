class Helper {
  playPauseAndUpdate(song = player.currentlyPlaying){
    player.playPause(song);
    $('button#play-pause').attr('playState',player.playState);
    if(!song) {return;}
    $('.total-time').text(song.duration);
  }
}

const helper = new Helper()
