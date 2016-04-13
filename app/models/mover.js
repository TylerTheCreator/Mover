import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  phone: DS.attr(),
  email: DS.attr(),
  cityState: DS.attr(),
  vechileType: DS.attr(),
});
