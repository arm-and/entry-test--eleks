/**
 * highestAndLowest - Modify initial string into new one, that start with highest number and and with lowest:
 * @param {string} numbers - the source numbers
 * @returns {string} - returns the new string
 */
export const highestAndLowest = (numbers) => {

  let splitNums = numbers.split(' ');

  return Math.min.apply(null, splitNums) + ' ' +  Math.max.apply(null, splitNums)
}
