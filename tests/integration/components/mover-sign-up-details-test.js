import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('mover-sign-up-details', 'Integration | Component | mover sign up details', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{mover-sign-up-details}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#mover-sign-up-details}}
      template block text
    {{/mover-sign-up-details}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
