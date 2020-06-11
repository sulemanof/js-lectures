const assert = require('assert');
const createCounter = require('./counter');

describe('counter chainable', () => {
  it('should be chainable 1', () => {
    const counter = createCounter(7);
    counter.increment(10).decrement(5).increment(1);
    assert.strictEqual(counter.showValue(), 13);
  });
  it('should be chainable 2', () => {
    const counter = createCounter(10);
    counter.increment(1).decrement().increment(10);
    assert.strictEqual(counter.showValue(), 20);
    counter.increment(1).increment(4).increment(10);
    assert.strictEqual(counter.showValue(), 35);
    assert.strictEqual(counter.decrement().discard().showValue(), 10);
  });
});
