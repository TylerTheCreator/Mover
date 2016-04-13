import Ember from 'ember';

export default Ember.Route.extend({

beforeModel: function(){
  console.log(this.get('session'));
  if(!this.get('session.isAuthenticated')){
    this.transitionTo('sign-in');
  }
},
  model() {
    return this.store.findAll('move');
  },

  actions: {
    save3(params) {
      console.log(params);
      var newMove = this.store.createRecord('move', params);
      newMove.save();
      this.transitionTo('post-a-move');
    },
  }
});
