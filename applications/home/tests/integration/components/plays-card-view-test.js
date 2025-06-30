import { module, test } from 'qunit';
import { setupRenderingTest } from 'home/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | plays-card-view', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<PlaysCardView />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <PlaysCardView>
        template block text
      </PlaysCardView>
    `);

    assert.dom().hasText('template block text');
  });
});
