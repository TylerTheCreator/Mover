import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('user', params.user_id);
  },
  actions: {
    deleteMove(move) {
      console.log(move);
      move.destroyRecord();
      this.transitionTo('user-profile');
    },
    editMove(move, formInputs) {
      alert("hey");
      Object.keys(formInputs).forEach(function(key) {
        if(formInputs[key]!==undefined) {
          move.set(key, formInputs[key]);
        }
      });
      move.save();
      this.transitionTo('user-profile');
    }
  }
});
