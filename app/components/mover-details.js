import Ember from 'ember';



export default Ember.Component.extend({
  actions: {
    save() {
      var params = {
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
        user: this.get('user')
      };
      this.sendAction('save2', params);
    }
  }
});
