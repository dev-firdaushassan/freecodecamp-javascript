function dfs(graph, root) {
  const stack = [root];
  const visited = [];

  while (stack.length > 0) {
    const node = stack.pop();

    if (!visited.includes(node)) {
      visited.push(node);

      for (let i = 0; i < graph[node].length; i++) {
        if (graph[node][i] === 1 && !visited.includes(i)) {
          stack.push(i);
        }
      }
    }
  }

  return visited;
}
