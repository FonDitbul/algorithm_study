

const example_input_1 = [1,2,3,4]
const example_input_2 = [-1,1,0,-3,3]
const example_input_3 = [0,0]

function solution(value){
    let answer = [];
    let p = 1;
    let out = [];
    for(let i = 0; i < value.length; i++){
        out.push(p)
        p = p * value[i]
    }
    p = 1;
    for (let i = value.length - 1; i >= 0; i--){
        out[i] = out[i] * p
        p = p * value[i]
        if(out[i] === -0) out[i] = 0
    }
    return out
}

console.log(solution(example_input_1))
console.log(solution(example_input_2))
console.log(solution(example_input_3))