function truncateString(str, num) {
  if (str.length > num) {
    return str.slice(0, num) + "...";
  }

  return str;
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
// A-tisket...

console.log(truncateString("Peter Piper picked a peck of pickled peppers", 11));
// Peter Piper...

console.log(truncateString("A-", 1));
// A...

console.log(truncateString("Absolutely Longer", 2));
// Ab...
