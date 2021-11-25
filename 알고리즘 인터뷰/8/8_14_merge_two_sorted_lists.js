

const example_input_1 = ""
let l1 = new ListNode([1,2,4])
let l2 = [1,3,4]
function solution(l1, l2){
    // let temp
    // if(!l1 || (l2 && l1.val > l2.val)){
    //     temp = l1;
    //     l1 = l2;
    //     l2 = temp;
    // }
    // if(l1){
    //     l1.next = mergeTwoLists(l1.next, l2)
    // }
    // return l1;
    let pre = new ListNode(-1),
        curr = pre;
    while(l1 && l2){
        if(l1.val < l2.val){
            curr.next = l1
            l1 = l1.next;
            curr = curr.next;
        }else{
            curr.next = l2;
            l2 = l2.next;
            curr = curr.next;
        }
    }
    if(!l1) curr.next = l2
    if(!l2) curr.next = l1
    return pre.next;
}

console.log(solution(example_input_1))