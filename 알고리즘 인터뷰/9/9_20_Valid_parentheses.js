

const example_input_1 = "()"
const example_input_2 = "()[]{}"
const example_input_3 = "{[]}"
const example_input_4 = "([)]"
function solution(s){
    const value = s.split('')
    let stack = [];
    let table = {
        ')':'(',
        ']':'[',
        '}':'{'
    }
    for(let i = 0; i < value.length; i++){
        if(Object.values(table).includes(value[i])){
            // console.log(i)
            stack.push(value[i])
        }else if (stack.length === 0 || table[value[i]] !== stack.pop()){
            return false;
        }
    }
    return stack.length === 0;
}

console.log(solution(example_input_1))
console.log(solution(example_input_2))
console.log(solution(example_input_3))
console.log(solution(example_input_4))