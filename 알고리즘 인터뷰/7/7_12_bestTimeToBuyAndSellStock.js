

const example_input_1 = [7,1,5,3,6,4]

function solution(value){
    const values = value;
    let profit = 0;
    let minPrices = 10000;

    for(let i = 0; i < values.length; i++){
        minPrices = Math.min(minPrices, values[i])
        profit = Math.max(values[i] - minPrices , profit)
    }
    return profit
}

console.log(solution(example_input_1))
