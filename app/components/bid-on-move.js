import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    toggleDetail(){
      this.toggleProperty('biddingOnMove');
    },
    saveBid(){
      var params = {
        name: this.get('name'),
        bid: this.get('bid'),
        email: this.get('email'),
        move: this.get('move')
      };
      if (this.get('name') !== undefined && this.get('bid') !== undefined && this.get('email') !== undefined) {
        this.toggleProperty('biddingOnMove');
        this.set('name', "");
        this.set('bid', "");
        this.set('email', "");
        this.sendAction('saveBid', params);
      }
      else {
        alert("Please enter in all fields.")
      }
    }
  }
});
