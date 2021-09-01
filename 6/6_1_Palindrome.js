

const example_input_1 = "A man, a plan, a canal: Panama"
const example_input_2 = "race a car"

function regExp(str){
  const reg = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi
  if(reg.test(str)){
    return str.replace(reg, "");
  } else {
    return str;
  }
}
function solution(value){
    let tempList = [];
    let temp = regExp(value)
    temp = temp.split(" ").join("");
    temp = temp.toLowerCase()
    tempList = temp.split("")

    while (tempList.length > 1) {
        if (tempList.shift() !== tempList.pop()) {
            return false
        }
    }
    return true
}

function solution2(value){
    let temp = value.toLowerCase()
    let reg = /[^0-9a-z]/gi
    if(reg.test(temp)){
        temp = temp.replace(reg, "")
    }else{
        temp = temp;
    }
    let tempList = temp.split("")
        while (tempList.length > 1) {
        if (tempList.shift() !== tempList.pop()) {
            return false
        }
    }
    return true
}
console.log(solution2(example_input_1))
console.log(solution2(example_input_2))