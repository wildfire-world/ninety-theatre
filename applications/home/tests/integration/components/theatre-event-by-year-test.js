import { module, test } from 'qunit';
import { setupRenderingTest } from 'home/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | theatre-event-by-year', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<TheatreEventByYear />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <TheatreEventByYear>
        template block text
      </TheatreEventByYear>
    `);

    assert.dom().hasText('template block text');
  });
});
