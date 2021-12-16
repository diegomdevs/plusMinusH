"use strict";

/**
 * This function prints the portions of an array in a 6-character format.
 * @param  {...any} arr Array with positives, negatives numbers and if there are zeros.
 * @returns Partions of the array
 */
function plusMinus(...arr) {
  try {
    if (arr.length === 0) throw new Error('Please, enter an array');
    const positivesNumbers = (arr.filter(i => i > 0).length / arr.length).toFixed(6);
    const negativesNumbers = (arr.filter(i => i < 0).length / arr.length).toFixed(6);
    const zeros = (arr.filter(i => i === 0).length / arr.length).toFixed(6);
    if (positivesNumbers === 0.000000) console.log('There are no positives numbers');
    if (negativesNumbers === 0.000000) console.log('There are no negatives numbers');
    if (zeros === 0.000000) console.log('There are no zeros');
    return `${positivesNumbers}, ${negativesNumbers}, ${zeros}`;
  } catch (error) {
    console.log(error);
  }
}
console.log(plusMinus(-4, 3, -9, 0, 4, 1))
module.exports = { plusMinus };