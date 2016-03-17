// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  // connect this with the data.js file

  initialize: function() {
    //is there anything to initialize?
  },

  default: {},

  play: function() {
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
  },

  enqueue: function() {
    // Triggering an event here will also trigger the event on the collection
    this.trigger('enqueue', this);
  },

  dequeue: function() {
    this.trigger('dequeue', this);
  }

});

// Song needs a url, title, and artist