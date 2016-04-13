import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('mover');
  },

  actions: {
    save3(params) {
      var newMover = this.store.createRecord('mover', params);
      newMover.save();
      this.transitionTo('index');
    },
  }
});
