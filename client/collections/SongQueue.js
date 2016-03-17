// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({
  //model is a song
  initialize: function() {
    // Listen for ended on a song and when triggered, remove song from queue


  },

  playFirst: function() {
    if (this.length > 0) {
      this.at(0).play();
    }
  }

});