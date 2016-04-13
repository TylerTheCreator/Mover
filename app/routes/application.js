import Ember from 'ember';

export default Ember.Route.extend({
    beforeModel() {
    this.get('session').fetch().catch((error) => {
      console.log(error);
    });
  },
  actions: {
       logout: function() {
           this.get('session').close().then(function() {
               this.transitionTo('application');
           }.bind(this));
       }
   }
   
   
     
});
