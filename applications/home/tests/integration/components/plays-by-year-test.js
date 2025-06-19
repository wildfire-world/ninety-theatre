import { module, test } from 'qunit';
import { setupRenderingTest } from 'home/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | plays-by-year', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<PlaysByYear />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <PlaysByYear>
        template block text
      </PlaysByYear>
    `);

    assert.dom().hasText('template block text');
  });
});
