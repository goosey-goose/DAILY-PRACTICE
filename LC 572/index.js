var isSameTree = function(p, q) {
    if (p === null && q !== null) return false
    if (q === null && p !== null) return false
    if (p === null && q === null) return true

    let left
    let right

    if (p.val !== q.val) {
        return false
    } else {
        left = isSameTree(p.left, q.left)
        right = isSameTree(p.right, q.right)
    }

    if (left === false || right === false) {
        return false
    } else {
         return true
    }
}








var isSubtree = function(root, subRoot, visited = new Set()) {
    if (root === null && subRoot !== null) return false
    if (root !== null && subRoot === null) return false


    let left
    let right


    if (!isSameTree(root, subRoot)) {
        left = isSubtree(root.left, subRoot)
        right = isSubtree(root.right, subRoot)
    } else {
        return true
    }


    if (left || right) {
        return true
    } else {
        return false
    }
}
