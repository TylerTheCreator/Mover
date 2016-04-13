import Ember from 'ember';

export function fragileIcon(params) {
  var move = params[0];
  if(move.get('fragile') === true){
    return Ember.String.htmlSafe('<i class="fa fa-check-square-o" aria-hidden="true"></i>');
  }
  else if (move.get('fragile') === false) {
    return Ember.String.htmlSafe('<i class="fa fa-square-o" aria-hidden="true"></i>');
  }
}


export default Ember.Helper.helper(fragileIcon);
