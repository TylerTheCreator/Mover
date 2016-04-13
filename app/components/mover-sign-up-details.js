import Ember from 'ember';



export default Ember.Component.extend({
  actions: {
    save() {
      var params = {
        name: this.get('name'),
        phone: this.get('phone'),
        email: this.get('email'),
        cityState: this.get('cityState'),
        vechileType: this.get('vechileType'),
      };
      this.sendAction('save2', params);
    }
  }
});
