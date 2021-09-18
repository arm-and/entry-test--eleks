// TODO: rename function, maybe array-of-arrays

export const chunk = (arr = [], size = 0) => {
  let result = [];
  while (arr.length){
    result.push(arr.splice(0,size))
  }
  return result
};
