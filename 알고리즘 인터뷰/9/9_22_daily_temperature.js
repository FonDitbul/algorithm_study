const example_input_1 = [73,74,75,71,69,72,76,73]
const example_input_2 = [30,40,50,60]
const example_input_3 = [55,38,53,81,61,93,97,32,43,78]

function solution(temperatures) {
    let answer = [];
    let stack = [];
    for(let i = 0; i < temperatures.length; i++){
        answer.push(0)
    }
    for(const [index, element] of temperatures.entries()){
        while(stack && element > temperatures[stack[stack.length - 1]]){
            const last = stack.pop()
            answer[last] = index - last;
        }
        stack.push(index)
    }

    return answer
}

console.log(solution(example_input_1))
console.log(solution(example_input_2))
console.log(solution(example_input_3))
