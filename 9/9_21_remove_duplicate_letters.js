

const example_input_1 =  "bcabc"
const example_input_2 = "cbacdcbc"
const example_input_3 = "cdadabcc"
function solution(s){
    let stack = []
    for(let i = 0; i < s.length; i++){
        var char = s[i];
        if(stack.indexOf(char) > -1) continue;
        while(stack.length > 0 && stack[stack.length - 1] > char &&
            s.indexOf(stack[stack.length - 1], i) > i){
            stack.pop();
        }
        stack.push(char)
    }
    return stack.join('')
}
console.log(solution(example_input_1))
console.log(solution(example_input_2))
console.log(solution(example_input_3))