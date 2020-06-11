// implement a counter with next methods

const counter = {
  value: 0,
  increment(value) {
    // your code here
    // use value or 1 if value is undefined to increment your counter
  },

  decrement(value) {
    // your code here
    // use value or 1 if value is undefined to increment your counter
  },

  showValue() {
    // your code here
  },

  discard() {
    // your code here
  },
};


counter.increment(); // 1
counter.increment(); // 2
counter.increment(3); // 5

counter.showValue(); // 5

counter.decrement(); // 4
counter.decrement(10); // -6

counter.discard(); // 0


// make your counter to be chainable
counter.increment().increment(20).decrement(3).showValue();
