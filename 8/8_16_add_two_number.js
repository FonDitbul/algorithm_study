

const example_input_1 = ""
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addNode = (node, data)=>{
    if(node){
        while(node.next){
            node = node.next;
        }
    }
    node.next = data;
}
var addTwoNumbers = function(l1, l2) {
    let Listl1 = l1;
    let Listl2 = l2;

    let PrevNum = 0;

    let answerList = null;

    while(Listl1 || Listl2){
        const sum = (Listl1 ? Listl1.val : 0) + (Listl2 ? Listl2.val : 0)
        const temp = sum + PrevNum;
        PrevNum = 0;

        let num = temp % 10;

        if(answerList){
            addNode(answerList, new ListNode(num))
        }else{
            answerList = new ListNode(num)
        }
        if(temp > 9){
            PrevNum = Math.floor(temp / 10)
        }
        Listl1 = Listl1 ? Listl1.next : null;
        Listl2 = Listl2 ? Listl2.next : null;
    }
    if(PrevNum){
        addNode(answerList, new ListNode(PrevNum))
    }
    return answerList
};
console.log(solution(example_input_1))
