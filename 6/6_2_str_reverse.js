

const example_input_1 = 'hello'
const example_input_2 = 'hannah'

const example_list1 = example_input_1.split("")
const example_list2 = example_input_2.split("")


function solution(value){
    let tempList=[];
    while(value.length > 0){
        tempList.push(value.pop())
    }
    return tempList
}

console.log(solution(example_list1))
console.log(solution(example_list2))

