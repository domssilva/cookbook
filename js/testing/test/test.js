const assert = require('assert');

describe('Array', () => {
  it('return -1 when value is not present', () => {
    assert.equal([1, 2, 3].indexOf(4), -1);
  });
});
