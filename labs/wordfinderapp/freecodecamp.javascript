function findLongestWordLength(str) {
  let longest = 0;
  const words = str.split(" ");

  for (const word of words) {
    if (word.length > longest) {
      longest = word.length;
    }
  }

  return longest;
}
