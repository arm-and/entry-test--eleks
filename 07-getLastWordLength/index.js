export const getLastWordLength = str => {

  let splitWord = str.trim().split(' ');
  let lastWord = splitWord[splitWord.length - 1];

  return lastWord.length;
};
