import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
   return this.store.findRecord('move', params.move_id);
 },
 actions: {
   saveBid(params){
     console.log(params);
     var newBid = this.store.createRecord('bid', params);
     var move = params.move;
     move.get('bids').addObject(newBid);
     newBid.save().then(function(){
       return move.save();
     });
     this.transitionTo('move-detail', params.move);
   }
 }
});
