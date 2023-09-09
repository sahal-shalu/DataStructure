class stack{
    constructor(){
        this.items=[]
    }

    push(element){
        this.items.push(element)
    }

    pop(){
        return this.items.pop()
    }

    peek(){
        return this.items[this.items.length-1]
    }

    isEmpty(){
        return this.items.length===0
    }

    size(){
        return this.items.length
    }

    print(){
        console.log(this.items.toString())
    }
}


const stk=new stack()

stk.push(29)
stk.push(23)
stk.push(45)
stk.push(22)
stk.push(11)
stk.push(90)
console.log(stk.pop())
console.log(stk.peek())
console.log(stk.isEmpty())
console.log(stk.size())
stk.print()

