import { module, test } from 'qunit';
import { setupRenderingTest } from 'home/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | event-type-by-year', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<EventTypeByYear />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <EventTypeByYear>
        template block text
      </EventTypeByYear>
    `);

    assert.dom().hasText('template block text');
  });
});
