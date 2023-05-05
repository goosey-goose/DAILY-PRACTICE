//  STRUCTY, "GRAPHS: Connected Components Count"

const connectedComponentsCount = (graph) => {
  let nodes = Object.keys(graph).map((key) => parseInt(key));

  const stack = [ nodes[0] ];

  let visited = new Set();

    while (stack.length > 0) {
        const current = stack.pop();
        if (visited.has(current)) continue;
        console.log(current);
        visited.add(current);

        for (let neighbor of graph[current]) {
            stack.push(neighbor);
        }
    }
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
