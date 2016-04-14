import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
   return this.store.findRecord('move', params.move_id);
 },
 actions: {
  //  isNoImage(params) {
  //    var move = params.move;
  //    if (move.get('image') === "") {
  //      return true;
  //    }
  //  },
   saveBid(params){
     console.log(params);
     var newBid = this.store.createRecord('bid', params);
     var move = params.move;
     move.get('bids').addObject(newBid);
     newBid.save().then(function(){
       return move.save();
     });
     this.transitionTo('move-detail', params.move);
   },
   destroyBid(bid){
     bid.destroyRecord();
     this.transitionTo('move-detail');
   }
 }
});
