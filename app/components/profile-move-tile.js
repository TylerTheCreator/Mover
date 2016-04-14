import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    deleteMove(move){
      if(confirm("Are you sure you want to delete this move?")) {
        this.sendAction('deleteMove', move);
      }
    }
  }
});
