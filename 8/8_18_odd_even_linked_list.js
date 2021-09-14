

const example_input_1 = ""

var oddEvenList = function(head) {
    if(!head) return null;
    let odd = head;
    let even = head.next;
    let even_head = head.next;
    while(even && even.next){
        odd.next = odd.next.next;
        even.next = even.next.next;
        odd = odd.next;
        even = even.next;
    }
    // console.log(head)
    odd.next = even_head;
    // console.log(head)
    return head
};

console.log(solution(example_input_1))
