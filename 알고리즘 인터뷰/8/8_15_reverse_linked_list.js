

const example_input_1 = ""

var reverseList = function(head) {
    let resultList = null;
    let reverse = head;
    let temp;
    while(reverse){
        temp = reverse.next;
        reverse.next = resultList;
        resultList = reverse;
        reverse = temp;
    }
    // console.log(resultList)
    return resultList
};

console.log(solution(example_input_1))
