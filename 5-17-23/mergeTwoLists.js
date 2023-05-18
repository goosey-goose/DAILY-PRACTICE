var mergeTwoLists = function(list1, list2) {
    if (list1 === null && list2 !== null) return list2
    if (list2 === null && list1 !== null) return list1
    if (list1 === null && list2 === null) return null

    console.log(list1.val, list2.val)

    let dummy = new ListNode(null, null)

    let tail = dummy

    while (list1 && list2) {
        if (list1.val <= list2.val) {
            console.log("first conditional")
            tail.next = list1
            tail = list1
            list1 = list1.next
            console.log(tail.val)
        }

        if (list1.val > list2.val) {
            console.log("second conditional")
            tail.next = list2
            tail = list2
            list2 = list2.next
            console.log(tail.val)
        }


    }
};