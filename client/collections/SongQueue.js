// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({
  //model is a song
  initialize: function() {
    // When a song is added
    this.on('add', function(model) {
      // If there are no songs in the queue, play the first song
      if (this.length === 1) {
        this.playFirst();
      }
    });

    this.on('ended', function(song) {
      // Listen for ended on a song and when triggered, remove song from queue
      var target = song || this.at(0);
      this.remove(target);
      // If there are any more song, play first
      if (this.length > 0) {
        // Listen to the collection for a song that has dequeue called
        this.playFirst();
      }
    });
    this.on('dequeue', function(song) {
      // If triggered
        // Then remove the song
      this.remove(song);
    });
  },

  playFirst: function() {
    if (this.length > 0) {
      this.at(0).play();
    }
  }

});