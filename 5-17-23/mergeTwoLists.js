//  Definition for singly-linked list.
function ListNode(val, next, list) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
    this.list = list
} 

const list1 = [1,2,4], list2 = [1,3,4];

const four = new ListNode(4, null, "List 1")
const two = new ListNode(2, four, "List 1")
const one = new ListNode(1, two, "List 1")

const four_4 = new ListNode(4, null, "List 2")
const three_3 = new ListNode(3, four_4, "List 2")
const one_1 = new ListNode(1, three_3, "List 2")

var mergeTwoLists = function(list1, list2) {
    if (list1 === null && list2 !== null) return list2
    if (list2 === null && list1 !== null) return list1
    if (list1 === null && list2 === null) return null

    let dummy = new ListNode(null, null)

    let tail = dummy

    while (list1 && list2) {

        if (list1.val <= list2.val) {
            tail.next = list1
            tail = list1
            list1 = list1.next
            // console.log(tail.val, " ", tail.list)
        } else if (list1.val > list2.val) {
            tail.next = list2
            tail = list2
            list2 = list2.next
            // console.log(tail.val, " ", tail.list)
        }
    }

    if (list1 === null) list2.next = list1
    if (list2 === null) list1.next = list2

    return dummy.next
};

console.log(mergeTwoLists(one, one_1));