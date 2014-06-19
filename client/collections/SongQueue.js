// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({
   initialize: function(){
   this.on('ended', function(song){
    if(song === undefined) {
      throw Error('EndedEventTriggeredWithoutContext');
    }
     this.remove(song);
     if(this.size()){
      this.playFirst();
     }
   });
   this.on('dequeue', function(song){
     this.remove(song);
   });
 },
 add: function(song){
   Backbone.Collection.prototype.add.call(this, song);
   if(this.size() === 1){
     this.playFirst();
   }
 },
 playFirst: function(){
   this.at(0).play();
 },
 dequeue: function(){
   return this.shift();
 }
});
