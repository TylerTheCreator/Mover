import Model from 'ember-data/model';

export default Model.extend({
  firstName: DS.attr(),
  lastName: DS.attr(),
  moves: DS.hasMany('move', {async: true})
});
