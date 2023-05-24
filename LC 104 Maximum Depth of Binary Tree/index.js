var maxDepth = function(root, depth = 1, max = [0]) {
    if (root === null) return max[0]

    if (depth > max[0]) {
        max[0] = depth
    }

    maxDepth(root.left, depth + 1, max)
    maxDepth(root.right, depth + 1, max)

    return max[0]
}
