//  Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
} 

const list1 = [1,2,4], list2 = [1,3,4];

const four = new ListNode(4)
const two = new ListNode(2, four)
const one = new ListNode(1, two)

const four_4 = new ListNode(4)
const three_3 = new ListNode(3, four_4)
const one_1 = new ListNode(1, three_3)

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
        }

        if (list1.val > list2.val) {
            tail.next = list2
            tail = list2
            list2 = list2.next
        }

        

        list1 = list1.next
        list2 = list2.next
    }
};

mergeTwoLists(one, one_1);