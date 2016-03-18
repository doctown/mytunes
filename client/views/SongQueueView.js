// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({


  tagName: 'table',

  initialize: function() {
    var view = this;

    this.render();

    // Listen to song queue collection for a enqueue event.
    // If triggered
      // Add a new song queue entry to our view

    // Listen to song queue collection for dequeue
    this.collection.on('add remove', function(song) {
      // If triggered
        // Then remove that song queue enrty from view
      //this.remove();
      view.render();
    });
  },


  render: function() {
   // return this.$el;
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/
    this.$el.children().detach();

    this.$el.html('<th>Song Queue</th>').append(
      this.collection.map(function(song) {
        return new SongQueueEntryView({model: song}).render();
      })
    );
  }
});
