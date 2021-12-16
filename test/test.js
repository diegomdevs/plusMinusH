const assert = require('chai').assert;
const { plusMinus } = require('../src/index');
const result = plusMinus(1, -2, -7, 9, 1, -8, -5);

describe('plusMinus', function () {
  it('Should print the portions of an array in a 6-character format', function () {
    assert.equal(result, "0.428571, 0.571429, 0.000000")
  });
});