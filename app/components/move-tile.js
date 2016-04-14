import Ember from 'ember';

export default Ember.Component.extend({
  totalBids: Ember.computed('move.bids', function(){
    return this.get('move.bids').get('length');
  })
});
