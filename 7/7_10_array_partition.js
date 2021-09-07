

const example_input_1 = [1,4,3,2]
const example_input_2 = [6,2,6,5,1,2];

function solution(value){
    let sortValue = value.sort(function(a,b){return a-b;})
    let result = [];
    let sum = 0;
    for(let i = 0; i < sortValue.length; i+=2){
        if(i !== sortValue.length - 1 ){
            result.push(sortValue[i])
            sum += sortValue[i]
        }
    }
    return sum
}

console.log(solution(example_input_1))
console.log(solution(example_input_2))