// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({
  //model is a song
  initialize: function() {
  },

  playFirst: function() {
    //tell the app view that there's a new current song
      //app view should take that song and start playing it instead of prior
    var firstSong = this.shift();
    firstSong.play();
  }

});
