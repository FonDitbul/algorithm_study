

const example_input_1 = ""

function Queue(){
    this.elements = [];
}
Queue.prototype.enqueue = function(e){
    this.elements.push(e)
}
Queue.prototype.dequeue = function(){
    return this.elements.shift();
}
Queue.prototype.isEmpty = function(){
    return this.elements.length === 0;
}

class MyStack {
    constructor(){
        this.stack1 = new Queue();
    }
    push(x){
        this.stack1.enqueue(x)
        for(let i = 0; i < this.stack1.elements.length - 1; i++){
            const temp = this.stack1.dequeue();
            this.stack1.enqueue(temp)
        }
    }
    pop(){
        return this.stack1.dequeue();
    }
    top(){
        return this.stack1.elements[0]
    }
    empty(){
        return this.stack1.isEmpty();
    }
}
var obj = new MyStack()
obj.push(1);
obj.push(2);
var param_3 = obj.top()
console.log(param_3)
var param_2 = obj.pop()
console.log(param_2)
var param_4 = obj.empty()
console.log(param_4)


