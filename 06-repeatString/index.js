/**
 * repeatString - Duplicates every char in the string some times according to char index
 * @param {string} str - the string
 * @returns {string} - returns the new string
 */
export const repeatString = (str = '') => {

  let result = [...str.toUpperCase()].reduce((acc, value, index) =>
    acc + '-' + value + value.toLowerCase().repeat(index)
  )

  return result
}
