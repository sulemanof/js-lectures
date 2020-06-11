const assert = require('assert');
const createCounter = require('./counter');

describe('counter basic', () => {
  it('should initiate without value', () => {
    const counter = createCounter();
    assert.strictEqual(counter.showValue(), 0);
  });
  it('should initiate with initial value', () => {
    const counter = createCounter(7);
    assert.strictEqual(counter.showValue(), 7);
  });
  it('should increment on 1 if value was not provided', () => {
    const counter = createCounter(7);
    counter.increment();
    assert.strictEqual(counter.showValue(), 8);
    counter.increment();
    assert.strictEqual(counter.showValue(), 9);
    counter.increment();
    assert.strictEqual(counter.showValue(), 10);
  });
  it('should increment on provided value', () => {
    const counter = createCounter(7);
    counter.increment(3);
    assert.strictEqual(counter.showValue(), 10);
    counter.increment();
    assert.strictEqual(counter.showValue(), 11);
    counter.increment(20);
    assert.strictEqual(counter.showValue(), 31);
  });
  it('should decrement on 1 if value was not provided', () => {
    const counter = createCounter(7);
    counter.decrement();
    assert.strictEqual(counter.showValue(), 6);
    counter.decrement();
    assert.strictEqual(counter.showValue(), 5);
    counter.decrement();
    assert.strictEqual(counter.showValue(), 4);
  });
  it('should decrement on provided value', () => {
    const counter = createCounter(7);
    counter.decrement(3);
    assert.strictEqual(counter.showValue(), 4);
    counter.decrement();
    assert.strictEqual(counter.showValue(), 3);
    counter.decrement(20);
    assert.strictEqual(counter.showValue(), -17);
  });
  it('should discard changes', () => {
    const counter = createCounter(7);
    counter.decrement(3);
    assert.strictEqual(counter.showValue(), 4);
    counter.increment(5);
    assert.strictEqual(counter.showValue(), 9);
    counter.discard();
    assert.strictEqual(counter.showValue(), 7);
  });
});
