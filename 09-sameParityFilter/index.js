export const sameParityFilter = (arr = []) => {

  let evenNum = num => num % 2 === 0;
  let evenFirst = evenNum(arr[0]);

  return arr.filter((num) => evenNum(num) === evenFirst);
}
