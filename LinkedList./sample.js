class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}

class LinkedList{
    constructor(){
        this.head=null
        this.size=0
    }

    isEmpty(){
        return this.size===0
    }

    getsize(){
        return this.size
    }


    print(){
        if(this.isEmpty()){

            console.log( 'list is empty')
        }else{
            let curr=this.head
            let listElements=''
            while(curr){
                listElements += `${curr.value} `
                curr=curr.next
            }
            console.log(listElements)
        }

       
    }

    prepend(value){
        const node =new Node(value);
        if(this.isEmpty()){
            this.head=node
        }else{
           node.next=this.head
           this.head=node
        }
        this.size++
    }
}

const list=new LinkedList()

console.log("list is empty : ",list.isEmpty())
console.log('size',list.getsize())

list.prepend(20)
list.prepend(98)
list.prepend(42)
list.prepend(32)
list.print()