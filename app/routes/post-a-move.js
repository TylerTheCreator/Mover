import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('move');
  },

  actions: {
    save(params) {
      var newMove = this.store.createRecord('move', params);
      newMove.save();
      this.transitionTo('post-a-move');
    },
  }
});
