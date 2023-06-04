class Node{
    constructor(value) {
        this.prev=null
        this.value=value
        this.next=null

    }
}

class LinkedList{
    constructor() {
        this.head=null
        this.size=0
    }

    empty(){
        return this.size===0
    }

   append(value){
    const node=new Node(value)
    if(this.empty()){
        this.head=node

    }else{
        let currnet=this.head
        let prev=null
        while(current.next){
            prev=current
            current=current.next
        }
        current.next=node
        current.prev=prev
    }
    this.size++
   }
   print(){
    let curr=this.head
    let ListValue=""
    while(curr){
        ListValue+=`${current.value} `
        curr=curr.next

    }
    console.log(ListValue)
   }
}