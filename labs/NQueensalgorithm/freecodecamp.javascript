function dfsNQueens(n) {
  if (n < 1) {
    return [];
  }

  const solutions = [];
  const board = [];

  const columns = new Set();
  const diagonals1 = new Set(); // row - col
  const diagonals2 = new Set(); // row + col

  function dfs(row) {
    // All queens have been placed
    if (row === n) {
      solutions.push([...board]);
      return;
    }

    // Try every column in the current row
    for (let col = 0; col < n; col++) {
      const diagonal1 = row - col;
      const diagonal2 = row + col;

      // Check whether this position is safe
      if (
        columns.has(col) ||
        diagonals1.has(diagonal1) ||
        diagonals2.has(diagonal2)
      ) {
        continue;
      }

      // Place queen
      board[row] = col;
      columns.add(col);
      diagonals1.add(diagonal1);
      diagonals2.add(diagonal2);

      // Move to the next row
      dfs(row + 1);

      // Backtrack
      columns.delete(col);
      diagonals1.delete(diagonal1);
      diagonals2.delete(diagonal2);
      board.pop();
    }
  }

  dfs(0);

  return solutions;
}
