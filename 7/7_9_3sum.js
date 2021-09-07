

const example_input_1 = [-1,0,1,2,-1,-4]

function solution(nums){
    let numsort = nums.sort(function(a,b){return a-b;})
    let result = [];
    let left = 0;
    let right = numsort.length - 1;
    console.log(numsort)
    for (let i = 0; i < numsort.length - 2; i++){
        if( i > 0 && numsort[i] === numsort[i-1])
            continue
        left = i +1
        right = numsort.length - 1
        while(left < right){
            let sum = numsort[i] + numsort[left] + numsort[right]
            if(sum> 0) right--;
            else if (sum < 0) left++;
            else if(sum === 0 ){
                result.push([numsort[i], numsort[left], numsort[right]])
                while (left < right && numsort[left] === numsort[left + 1]){
                    left++;
                }
                while (left <right && numsort[right] === numsort[right - 1]){
                    right --;
                }
                left++
                right--
            }
        }
    }

    return result
}

console.log(solution(example_input_1))
