import { module, test } from 'qunit';
import { setupTest } from 'home/tests/helpers';

module('Unit | Service | scroll-animate', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let service = this.owner.lookup('service:scroll-animate');
    assert.ok(service);
  });
});
