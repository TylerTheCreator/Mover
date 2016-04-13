import Ember from 'ember';
//  import Firebase from 'firebase';
export function isNotAuthenticated() {
  var session = this.get('session.isAuthenticated');
//   var auth = session.isAuthenticated;

  if (session == false){
    return 'sign in';
  }
  else {
      return 'didn"t work';
  } 
  
}

export default Ember.Helper.helper(isNotAuthenticated);