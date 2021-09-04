

const example_input_1 = ["dig1 8 1 5 1", "let1 art can", "dig2 3 6", "let2 own kit dig", "let3 art zero"]
const example_input_2 = ["1 n u", "r 527", "j 893", "6 14", "6 82"]
const example_input_3 = ["a1 9 2 3 1","g1 act car","zo4 4 7","ab1 off key dog","a8 act zoo","a2 act car"]

function solution(logs){
    let letterKey = [];
    let numberKey = [];
    logs.forEach((data, index)=>{
        let letterTest = data.split(' ');
        const NumberCasting = +letterTest[1]
        if(isNaN(NumberCasting)){
            letterKey.push(data)
        }else{
            numberKey.push(data)
        }
    })
    letterKey.sort( (a,b)=>{
        let aa = a.substr(a.indexOf(' ') + 1);
        let bb = b.substr(b.indexOf(' ') + 1);
        if(aa !== bb){
            return aa.localeCompare(bb);
        }else{
            return a.localeCompare(b);
        }
    })
    return letterKey.concat(numberKey)
}

console.log(solution(example_input_1))
console.log(solution(example_input_2))
console.log(solution(example_input_3))

