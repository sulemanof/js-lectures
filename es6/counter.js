// implement a counter with next methods

function createCounter(initialValue = 0) {
  let currentValue = initialValue;

  return {
    increment(value = 1) {
      currentValue += value;
      return this;
    },

    decrement(value = 1) {
      currentValue -= value;
      return this;
    },

    showValue() {
      return currentValue;
    },

    discard() {
      currentValue = initialValue;
      return this;
    },
  };
}

const counter = createCounter();
counter.value = 10;


module.exports = createCounter;
