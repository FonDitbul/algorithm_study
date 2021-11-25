

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
        if(this.output.length === 0){
            while(this.input.length > 0){
                this.output.push(this.input.pop())
            }
        }
        return this.output.pop();
    }
    peek(){
        return this.output[this.output.length - 1];
    }
    empty(){
        return this.input.length === 0 && this.output.length === 0;
    }
}
var obj = new MyQueue()
obj.push(1)
obj.push(2)
var param_2 = obj.pop()
console.log(param_2)
var param_3 = obj.peek()
console.log(param_3)
var param_4 = obj.empty()
console.log(param_4)

obj.push(3)
console.log(obj.pop())
console.log(obj.pop())