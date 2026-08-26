function adjacencyListToMatrix(adjacencyList) {
  const nodeCount = Object.keys(adjacencyList).length;

  const matrix = Array.from(
    { length: nodeCount },
    () => Array(nodeCount).fill(0)
  );

  for (const node in adjacencyList) {
    for (const neighbor of adjacencyList[node]) {
      matrix[node][neighbor] = 1;
    }
  }

  for (const row of matrix) {
    console.log(row);
  }

  return matrix;
}
