

const example_input_1 = ""

function solution(head){
    let cur = head;
    while(cur){
        let curVal = cur.val;
        if(cur.next){
            cur.val = cur.next.val;
            cur.next.val = curVal;
            cur = cur.next.next;
        }else{
            cur = cur.next;
        }
    }
    return head
    // while (cur && cur.next){
    //     temp = cur.next.val;
    //     cur.next.val = cur.val;
    //     cur.val = temp;
    //
    //     cur = cur.next.next;
    // }
    // return head
}

console.log(solution(example_input_1))
