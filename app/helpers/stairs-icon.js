import Ember from 'ember';

export function stairsIcon(params) {
  var move = params[0];
  if(move.get('stairs') == true){
    return Ember.String.htmlSafe('<i class="fa fa-check-square-o" aria-hidden="true"></i>');
  }
  else if (move.get('stairs') == false) {
    return Ember.String.htmlSafe('<i class="fa fa-square-o" aria-hidden="true"></i>');
  }
}

export default Ember.Helper.helper(stairsIcon);
