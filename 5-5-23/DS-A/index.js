//  STRUCTY, "GRAPHS: Connected Components Count"

const connectedComponentsCount = (graph) => {


  const traverseAndCountComponents = (stack, visited, count) => {
    let countThis = false;

    while (stack.length > 0) {
        countThis = true;
        const current = stack.pop();
        if (visited.has(current)) continue;
        visited.add(current);

        for (let neighbor of graph[current]) {
            stack.push(neighbor);
        }

        delete graph[`${current}`];

        if (stack.length === 0 && Object.keys(graph).length > 0) {
            Object.keys(graph)
        }
    }

    if (countThis) ++count;

    return count;
  }

  let count = 0;

  let nodes = Object.keys(graph).map((key) => parseInt(key));

  const stack = [ nodes[0] ];

  let visited = new Set();

  let result;

  if (Object.keys(graph).length > 0)
};














connectedComponentsCount({
  0: [8, 1, 5],
  1: [0],
  5: [0, 8],
  8: [0, 5],
  2: [3, 4],
  3: [2, 4],
  4: [3, 2]
}); // -> 2
