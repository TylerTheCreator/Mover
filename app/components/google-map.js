import Ember from 'ember';
import GMaps from 'npm:gmaps';

export default Ember.Component.extend({
  map: Ember.inject.service('google-map'),

  didInsertElement: function() {
    var newMap = new GMaps({
   div: ".map-display",
   lat: 0.00,
   lng: 0,
   zoom: 3,
    });
  }
});
