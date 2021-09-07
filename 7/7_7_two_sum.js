

const example_input_1 = [2,7,11,15]
const target_1 = 9;

const example_input_2 = [3,2,4]
const target_2 = 6;

const example_input_3 = [3,3]
const target_3 = 6;

function solution(nums, target){
    let resultIndex=[];
    for(let i = 0; i < nums.length; i++){
        for(let j = i + 1; j < nums.length; j++){
            let sum = nums[i] + nums[j]
            if(sum === target){
                resultIndex.push(i)
                resultIndex.push(j)
                break;
            }
        }
    }
    return resultIndex
}

console.log(solution(example_input_1, target_1))
console.log(solution(example_input_2, target_2))
console.log(solution(example_input_3, target_3))
