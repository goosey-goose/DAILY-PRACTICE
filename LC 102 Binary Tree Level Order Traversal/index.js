var levelOrder = function(root) {
    if (root === null) return []
    if (root.left === null && root.right === null) return [[root.val]]

    let queue = [root]
    const list = []

    while (queue.length > 0) {

        list.push([...queue])

        queue = []

        if (current.left !== null) queue.push(current.left)
        if (current.right !== null) queue.push(current.right)
    }

    return list
}



// [ 20, 9 ]
