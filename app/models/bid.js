import Model from 'ember-data/model';

export default Model.extend({
  name: DS.attr(),
  bid: DS.attr(),
  email: DS.attr(),
  move: DS.belongsTo('move', {async: true})
});
