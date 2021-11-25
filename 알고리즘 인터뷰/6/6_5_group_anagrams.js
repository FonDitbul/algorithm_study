

const example_input_1 = ["eat","tea","tan","ate","nat","bat"]

function solution(value){
    let resultArr = [];
    let checkDict = [];
    value.forEach((i,index)=>{
        const arr = Array.from(i)
        const arrSortjoin = arr.sort().join('')
        if(checkDict.includes(arrSortjoin)){
            resultArr[checkDict.indexOf(arrSortjoin)].push(i)
        }else{
            resultArr.push([i])
            checkDict.push(arrSortjoin)
        }
    })
    return resultArr.reverse()
}

console.log(solution(example_input_1))
