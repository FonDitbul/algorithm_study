

const example_input_1 = ""


class MyQueue {
    constructor(){
        this.input = [];
        this.output = [];
    }
    push(x){
        this.input.push(x);
    }
    pop(){
        if(this.output.lenth) {
            while(this.input.length > 0){
                this.output.push(this.input.pop())
            }
        }
        return this.output.pop();
    }
    peek(){
        if(this.output.lenth) {
            while(this.input.length > 0){
                this.output.push(this.input.pop())
            }
        }
        return this.output[this.input.length - 1];
    }
    empty(){
        return this.input.length === 0 && this.output.length === 0;
    }
}
function solution(value){

    return true
}

console.log(solution(example_input_1))
