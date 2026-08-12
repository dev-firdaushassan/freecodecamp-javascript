tion countdown(n) {
  // Base case
  if (n < 1) {
    return [];
  }

  // Recursive case
  return [n, ...countdown(n - 1)];
}

console.log(countdown(5));function countdown(n) {
  // Base case
  if (n < 1) {
    return [];
  }

  // Recursive case
  return [n, ...countdown(n - 1)];
}

console.log(countdown(5));
