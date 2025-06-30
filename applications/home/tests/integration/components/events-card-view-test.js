import { module, test } from 'qunit';
import { setupRenderingTest } from 'home/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | events-card-view', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<EventsCardView />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <EventsCardView>
        template block text
      </EventsCardView>
    `);

    assert.dom().hasText('template block text');
  });
});
