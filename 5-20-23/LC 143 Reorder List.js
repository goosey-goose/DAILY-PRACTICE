function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

const four = new ListNode(4)
const three = new ListNode(3, four)
const two = new ListNode(2, three)
const one = new ListNode(1, two)

var reorderList = function(head) {
    let nodeListArray = []

    let current = head;
    while (current != null) {
        nodeListArray.push(current)
        current = current.next
    }

    let a = 0
    let b = nodeListArray.length - 1
    let tempNext = undefined

    if (nodeListArray.length <= 2) return head

    while (a < b) {
        tempNext = undefined
        if ((b - a) > 1) {
            tempNext = nodeListArray[a].next
            nodeListArray[a].next = nodeListArray[b]
            nodeListArray[b].next = tempNext
        } else {
            nodeListArray[a].next = nodeListArray[b]
            nodeListArray[b].next = null
        }
        ++a
        --b

        if (a === b) tempNext.next = null
    }

    return nodeListArray[0]
}


console.log(reorderList(one))
