import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
       login: function() {
         var controller = this.get('controller');
         var email = controller.get('userEmail');
         var password = controller.get('userPassword');
           this.get('session').authenticate('authenticator:firebase', {
               'email': email,
               'password': password
           }).then(function() {
               this.transitionTo('protected');
           }.bind(this));
       },
       logout: function() {
           this.get('session').invalidate().then(function() {
               this.transitionTo('sign-in');
           }.bind(this));
       }
   }
});