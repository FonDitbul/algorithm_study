

const example_input_1 = "Bob hit a ball, the hit BALL flew far after it was hit."
const banned = ["hit"]

function solution(paragraph, banned){
let resultDict ={};
    paragraph = paragraph.toLowerCase();
    let reg = /[^\w]/g
    if(reg.test(paragraph)){
        paragraph = paragraph.replace(reg, " ")
    }
    paragraph.split(" ").forEach((i, index)=>{
        // if(reg.test(i)){
        //     i = i.replace(reg, " ")
        // }
        if(isNaN(resultDict[i]))resultDict[i] = 0;
        resultDict[i]++;
    })
    delete resultDict['']
    let maxFre = 0;
    let maxWord = '';
    for(let [index, element] of Object.entries(resultDict)){
        if(!(banned.includes(index))){
            if(maxFre < element) {
                maxFre = element
                maxWord = index;
            }
        }
    }
    return maxWord
}

console.log(solution(example_input_1, banned))

