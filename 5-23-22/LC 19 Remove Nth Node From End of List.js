function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}


// const four = new ListNode(4)
// const three = new ListNode(3, four)
// const two = new ListNode(2, three)
// const one = new ListNode(1, two)


// THIS METHOD WORKS. IT USES ITERATION.
// var removeNthFromEnd = function(head, n) {
//     let extractionPoint;
//     let nodeListArray = []
//     let current = head

//     while (current != null) {
//         nodeListArray.push(current)
//         current = current.next
//     }

//     if (nodeListArray.length === 1) return null

//     extractionPoint = nodeListArray.length - n

//     if (extractionPoint === 0) return nodeListArray[1]

//     nodeListArray[extractionPoint - 1].next = nodeListArray[extractionPoint].next

//     return nodeListArray[0]
// }


const three = new ListNode(3)
const two = new ListNode(2, three)
const one = new ListNode(1, two)

// THIS METHOD WORKS AS WELL. IT USES RECURSION.
var removeNthFromEnd = function(head, n, previous = null, count = [0]) {
   if (head === null) {
    return
   }

   removeNthFromEnd(head.next, n, head, count)

   ++count[0]

   if (count[0] === n) {
        if (previous === null) {
            return head.next
        } else {
            previous.next = head.next
        }
   } else {
    return head
   }
};



let n = 2

console.log(removeNthFromEnd(one, n))
