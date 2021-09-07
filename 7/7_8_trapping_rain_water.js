

const example_input_1 = [0,1,0,2,1,0,1,3,2,1,2,1]
const example_input_2 = [4,2,0,3,2,5]

function solution(value){
    console.log(value)
    let height = value;
    let vloume = 0;
    let left = 0;
    let right = value.length - 1;
    let left_max = 0;
    let right_max = 0;
    while(left < right){

        left_max = Math.max(left_max, value[left])
        right_max = Math.max(right_max, value[right])
        if(left_max <= right_max){
            vloume += Math.min(left_max, right_max) - height[left]
            left++;
        }else{
            vloume += Math.min(left_max, right_max) - height[right]
            right--;
        }

    }
    return vloume
}

console.log(solution(example_input_1))
console.log(solution(example_input_2))

