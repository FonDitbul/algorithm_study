

const example_input_1 = "babad"
const example_input_2 = "cbbd"
const example_input_3 = "a"
const example_input_4 = "ac"
const example_input_5 = "abb"
const example_input_6 = "ccd"


function expand(s, left, right){
    while(left >= 0 && right < s.length){
        if(s[left] === s[right]){
            left--;
            right++;
        }else{
            break;
        }
    }
    // console.log(s.substr(left- 1,right))
    return s.slice(left + 1, right)
}
function solution(value){
    const letter = value;
    if(letter.length < 2 || letter === letter.split("").reverse().join("")){
        return letter
    }
    let longest = '';
    for(let i = 0; i < letter.length; i++){
        const hol = expand(letter, i, i)
        const jjack = expand(letter, i, i + 1)
        const temp = hol.length < jjack.length ? jjack : hol;
        longest = longest.length < temp.length ? temp : longest;
    }
    return longest
}

console.log(solution(example_input_1))
console.log(solution(example_input_2))
console.log(solution(example_input_3))
console.log(solution(example_input_4))
console.log(solution(example_input_5))
console.log(solution(example_input_6))
