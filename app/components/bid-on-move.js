import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    toggleDetail(){
      this.toggleProperty('biddingOnMove');
    },
    saveBid(){
      var params = {
        name: this.get('name') ? this.get('name') : " ",
        bid: this.get('bid') ? this.get('bid') : " ",
        email: this.get('email') ? this.get('email') : " ",
        move: this.get('move')
      };
      console.log(params);
      this.toggleProperty('biddingOnMove');
      this.sendAction('saveBid', params);
    }
  }
});
