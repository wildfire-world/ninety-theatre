import { module, test } from 'qunit';
import { setupRenderingTest } from 'home/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | theatre-card-view', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<TheatreCardView />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <TheatreCardView>
        template block text
      </TheatreCardView>
    `);

    assert.dom().hasText('template block text');
  });
});
