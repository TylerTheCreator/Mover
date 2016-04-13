import Ember from 'ember';


export default Ember.Route.extend({

beforeModel: function(){
  console.log(this.get('session'));
  if(!this.get('session.isAuthenticated')){
    this.transitionTo('sign-in');
  }
},
  model(params) {
    return this.store.findRecord('user', params.user_id);
  },

  actions: {
    save3(params) {
      alert("hey");
      var newMove = this.store.createRecord('move', params);
      var user = params.user;
      user.get('moves').addObject(newMove);
      newMove.save().then(function() {
        return user.save();
      });
      this.transitionTo('user-profile');
    },
  }
});
