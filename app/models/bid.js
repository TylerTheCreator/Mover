import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  bid: DS.attr(),
  email: DS.attr(),
  move: DS.belongsTo('move', {async: true})
});
