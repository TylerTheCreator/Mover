import Ember from 'ember';

export function noBids(params) {
  var move = params[0];
  if (move.get('bids').get('length') < 1) {
    return Ember.String.htmlSafe('<h3 class="noCurrentBids">No current bids.</h3>');
  }
}

export default Ember.Helper.helper(noBids);
