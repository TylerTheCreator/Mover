import Ember from 'ember';

export function checkBoxes(params) {
  var move = params[0];
  if(move.get('assembly') === true){
    return Ember.String.htmlSafe('TRUEEEEE');
  }
  else if (move.get('assembly') === false) {
    return Ember.String.htmlSafe('FALSSSE DUDE');
  }
}

export default Ember.Helper.helper(checkBoxes);
