import Ember from 'ember';
import FirebaseAdapter from 'emberfire/adapters/firebase';

const { inject } = Ember;

export default FirebaseAdapter.extend({
  firebase: inject.service(),
  model: function(params){
    return this.store.find('user', params.user_id);
  }
});
