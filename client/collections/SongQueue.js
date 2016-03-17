// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({
  //model is a song
  initialize: function() {
    this.on('dequeue', function(song) {
      this.remove(song);
      if (this.length > 0) {
        this.playFirst();
      }
    }, this);
    this.on('ended', function(song) {
      this.remove(song);
      if (this.length > 0) {
        this.playFirst();
      }
    }, this);
  },

  events: {
    'ended': 'handleEnded'

  },

  playFirst: function() {
    //tell the app view that there's a new current song
      //app view should take that song and start playing it instead of prior
    if (this.length > 0) {
      var firstSong = this.at(0);
      firstSong.play();
    }
  },

  handleEnded: function (song) {
    this.remove(song);
    if (this.length > 0) {
      this.playFirst();
    }
  }
});
