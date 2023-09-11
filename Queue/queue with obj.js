class Queue{
    constructor(){

        this.itmes={}
        this.rear=0;
        this.front=0;
    }

    enqueue(element){
      this.itmes[this.rear]=element
      this.rear++;
    }

    dequeue(){
       const itme= this.itmes[this.front]
       delete this.itmes[this.front]
       this.front++;
       return itme
    }

    isEmpty(){
        return this.rear-this.front===0
    }

    peek(){
       return this.itmes[this.front]
    }

  size(){
    return this.rear-this.front
  }

  print(){

    console.log(this.itmes)

  }

}

const queue=new Queue()

queue.enqueue(23)
queue.enqueue(2)
queue.enqueue(34)
queue.enqueue(95)

console.log(queue.dequeue())
console.log(queue.isEmpty())
console.log(queue.peek())
console.log(queue.size())

queue.print()