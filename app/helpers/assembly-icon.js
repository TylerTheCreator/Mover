import Ember from 'ember';

export function assemblyIcon(params) {
  var move = params[0];
  if(move.get('assembly') === true){
    return Ember.String.htmlSafe('<i class="fa fa-check-square-o" aria-hidden="true"></i>');
  }
  else if (move.get('assembly') === false) {
    return Ember.String.htmlSafe('<i class="fa fa-square-o" aria-hidden="true"></i>');
  }
}

export default Ember.Helper.helper(assemblyIcon);
