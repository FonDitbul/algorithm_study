

const example_input_1 = ""

function solution(head){
    let cur = head;
    let temp;
    while (cur && cur.next){
        temp = cur.next.val;
        cur.next.val = cur.val;
        cur.val = temp;

        cur = cur.next.next;
    }
    return head
}

console.log(solution(example_input_1))
