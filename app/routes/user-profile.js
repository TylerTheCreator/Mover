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
    }
  }
});
