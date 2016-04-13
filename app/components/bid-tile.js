import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(bid){
      if(confirm("Are you sure you want to delete this bid?")) {
        this.sendAction('destroyBid', bid);
      }
    }
  }
});
