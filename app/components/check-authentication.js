App.IfEqualComponent = Ember.Component.extend({
  isNotAuthenticated: function() {
    return this.get('param1') === this.get('param2');
  }.property('param1', 'param2')
});

