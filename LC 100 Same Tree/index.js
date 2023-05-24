var isSameTree = function(p, q) {
    if (p === null && q === null) return true

    if (p.val !== q.val) {
        return false
    } else {
        const left = isSameTree(p.left, q.left)
        const right = isSameTree(p.right, q.right)
    }

    if (left === false || right === false) {
        return false
    }
}
