import { module, test } from 'qunit';
import { setupRenderingTest } from 'home/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | animation-swipper', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<AnimationSwipper />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <AnimationSwipper>
        template block text
      </AnimationSwipper>
    `);

    assert.dom().hasText('template block text');
  });
});
