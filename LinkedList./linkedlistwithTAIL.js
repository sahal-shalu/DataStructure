class Node{
  constructor(value){
    this.value=value
    this.next=null
  }

}
class LinkedList{
    constructor(){
        this.head=null
        this.tail=null
        this.size=0;
    }
getSize(){
    return this.size
}

isEmpty(){
  return  this.size===0
}

print(){
  if(this.isEmpty()){
    console.log('list is empty')
  }else{
    let curr=this.head 
    let listvalues=''
    while(curr){
        listvalues+=`${curr.value} `
        curr=curr.next
    }
    console.log(listvalues)
  }
}
prepend(value){
    const node=new Node(value)
    if(this.isEmpty()){
        this.head=node
        this.tail=node
    }else{
        node.next=this.head
        this.head=node
    }
    this.size++
}

append(value){
    const node=new Node(value)
    if(this.isEmpty()){
        this.head=node
        this.tail=node
    }else{
       this.tail.next=node
       this.tail=node
    }
    this.size++
}

removeFromFront(){
    if(this.isEmpty()){
        return null
    }
    const value=this.head.value
    this.head=this.head.next
    this.size--
    return value
}

removeFromLast(){
    if(this.isEmpty()){
        return null
    }
    const value=this.tail.value
    if(this.size===1){
        this.head=null
        this.tail=null
    }else{
        let prev=this.head
        while(prev.next !== this.tail){
            prev=prev.next
        }
        prev.next=null
        this.tail=prev
    }
    this.size--
    return value
}


}
const list=new LinkedList()
list.prepend(20)
list.prepend(10)
list.prepend(30)
list.append(50)
list.append(60)
list.append(70)
console.log(list.removeFromLast())
list.print()