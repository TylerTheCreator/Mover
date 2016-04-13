import DS from 'ember-data';

export default DS.Model.extend({
  type: DS.attr(),
  itemsList: DS.attr(),
  numberOfItems: DS.attr(),
  description: DS.attr(),
  fragile: DS.attr('boolean', {defaultValue: false}),
  assembly: DS.attr('boolean', {defaultValue: false}),
  stairs: DS.attr('boolean', {defaultValue: false}),
  image: DS.attr(),
  toAddress: DS.attr(),
  fromAddress: DS.attr(),
  date: DS.attr(),
  bids: DS.hasMany('bid', {async: true})
  // user: DS.belongsTo('user', { async: true});
});
