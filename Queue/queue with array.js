class Queue{
    constructor(){
        this.items=[]
    }
    enqueue(element){
        this.items.push(element)
    }

    dequeue(){
        return this.items.shift()
    }

    isEmpty(){
       return this.items.length===0
    }

    peek(){
        if(!this.isEmpty()){
            return this.items[0]
        }
        return null
    }

    size(){
        return this.items.length
    }

    print(){
        console.log(this.items.toString())
    }
}

const queue=new Queue()

queue.enqueue(21)
queue.enqueue(34)
queue.enqueue(23)
queue.enqueue(1)
queue.enqueue(90)
console.log(queue.dequeue())
console.log(queue.peek())
console.log(queue.size())

queue.print()