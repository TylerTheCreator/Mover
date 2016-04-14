import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    toggleDetail() {
      this.toggleProperty('editFormShowing');
    },
    editMove(move) {
      var formInputs = {
        type: this.get('type'),
        itemsList: this.get('itemsList'),
        numberOfItems: this.get('numberOfItems'),
        description: this.get('description'),
        fragile: this.get('fragile'),
        assembly: this.get('assembly'),
        stairs: this.get('stairs'),
        image: this.get('image'),
        toAddress: this.get('toAddress'),
        fromAddress: this.get('fromAddress'),
        date: this.get('date'),
        user: this.get('user'),
        latitude: this.get('latitude'),
        longitude: this.get('longitude'),
      };
      this.toggleProperty('editFormShowing');
      this.sendAction('editMove', move, formInputs);
    }
  }
});
