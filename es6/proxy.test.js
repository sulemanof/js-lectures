const assert = require('assert');
const { films, shell, stock } = require('./proxy');

describe('films shell', () => {
  it('test 1', () => {
    assert.equal(
      shell['Spider-man'],
      films['Spider-man'],
    );
  });
  it('test 2', () => {
    assert.notEqual(
      shell['Spider-man'],
      films['Spider-man'],
    );
  });
  it('test 3', () => {
    assert.equal(
      shell.Thor,
      films.Thor,
    );
  });
  it('test 4', () => {
    assert.notEqual(
      shell.Thor,
      films.Thor,
    );
  });
});
