import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save() {
      var params = {
<<<<<<< HEAD
        type: this.get('type') ? this.get('type') : " ",
        itemsList: this.get('itemsList') ? this.get('itemsList') : " ",
        numberOfItems: this.get('numberOfItems') ? this.get('numberOfItems') : " ",
        description: this.get('description') ? this.get('description') : " ",
        fragile: this.get('fragile') ? this.get('fragile') : " ",
        assembly: this.get('assembly') ? this.get('assembly') : " ",
        stairs: this.get('stairs') ? this.get('stairs') : " ",
        image: this.get('image') ? this.get('image') : " ",
        toAddress: this.get('toAddress') ? this.get('toAddress') : " ",
        fromAddress: this.get('fromAddress') ? this.get('fromAddress') : " ",
        date: this.get('date') ? this.get('date') : " ",
=======
        type: this.get('type') ? this.get('type'):"",
        itemsList: this.get('itemsList') ? this.get('type'):"",
        numberOfItems: this.get('numberOfItems') ? this.get('type'):"",
        description: this.get('description') ? this.get('type'):"",
        fragile: this.get('fragile') ? this.get('type'):"",
        assembly: this.get('assembly') ? this.get('type'):"",
        stairs: this.get('stairs') ? this.get('type'):"",
        image: this.get('image') ? this.get('type'):"",
        toAddress: this.get('toAddress') ? this.get('type'):"",
        fromAddress: this.get('fromAddress') ? this.get('type'):"",
        date: this.get('date') ? this.get('type'):"",
        user: this.get('user'),
        latitude: this.get('latitude'),
        longitude: this.get('longitude'),
>>>>>>> master
      };
      this.sendAction('save2', params);
    }
  }
});
