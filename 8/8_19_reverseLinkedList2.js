

const example_input_1 = ""

var reverseBetween = function(head, left, right) {
    let root = new ListNode(null);
    let start = root;
    root.next = head;
    for(let i = 1; i < left; i++){
        start = start.next;
    }
    let end = start.next;
    let temp = null;
    for(let i = 0; i < right - left; i++){
        temp = start.next;
        start.next = end.next;
        end.next = end.next.next;
        start.next.next = temp;
    }
    return root.next;
};
console.log(solution(example_input_1))
