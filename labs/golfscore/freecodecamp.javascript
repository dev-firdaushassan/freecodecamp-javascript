function golfScore(par, strokes) {
  if (strokes === 1) {
    return "Hole-in-one!";
  } else if (strokes <= par - 2) {
    return "Eagle";
  } else if (strokes === par - 1) {
    return "Birdie";
  } else if (strokes === par) {
    return "Par";
  } else if (strokes === par + 1) {
    return "Bogey";
  } else if (strokes === par + 2) {
    return "Double Bogey";
  } else {
    return "Go Home!";
  }
}

console.log(golfScore(4, 1)); // Hole-in-one!
console.log(golfScore(5, 2)); // Eagle
console.log(golfScore(4, 3)); // Birdie
console.log(golfScore(4, 4)); // Par
console.log(golfScore(4, 5)); // Bogey
console.log(golfScore(4, 6)); // Double Bogey
console.log(golfScore(4, 8)); // Go Home!

