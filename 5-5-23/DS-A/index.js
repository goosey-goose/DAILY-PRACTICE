//  STRUCTY, "GRAPHS: Connected Components Count"

const connectedComponentsCount = (graph) => {
  let nodes = Object.keys(graph).map((key) => parseInt(key));

  const stack = [ nodes[0] ];


    while (stack.length > 0) {
        const current = stack.pop();
        console.log(current);

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
