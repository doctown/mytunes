// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  initialize: function() {
    this.render();
    // If the collection has a dequeue
    this.collection.on('change:dequeue', function() {
      // remove the top el
    });
    // If the collection has an enqueue
    this.collection.on('change:enqueue', function(song) {
      // add an element to the view
      this.$el.html('<th>Song Queue</th>').append(new SongQueueEntryView({model: song})).render();
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
