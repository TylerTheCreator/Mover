import Ember from 'ember';



export default Ember.Component.extend({
  actions: {
    save() {
      var params = {
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
        latitude: this.get('latitude'),
        longitude: this.get('longitude'),
      };
      this.sendAction('save2', params);
    }
  }
});
