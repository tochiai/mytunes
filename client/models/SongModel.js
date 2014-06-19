// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  initialize: function(songData) {
    if(songData !== undefined) {
      this.set('url', songData.url);
      this.set('title', songData.title);
      this.set('artist', songData.artist);
    } else {
      this.set('url', null);
      this.set('title', null);
      this.set('artist', null);
    }
  },
  play: function(){
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
  },
  enqueue: function(){
    // Triggering an event here will also trigger the event on the collection
    this.trigger('enqueue', this);
  },
  dequeue: function(){
    // Triggering an event here will also trigger the event on the collection
    this.trigger('dequeue', this);
  },
  ended: function(){
    // Triggering an event here will also trigger the event on the collection
    this.trigger('ended', this);
  }

});
