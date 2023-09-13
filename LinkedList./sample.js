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

    append(value){
       const node=new Node(value)
        if(this.isEmpty()){
            this.head=node
        }else{
            let prev=this.head
            while(prev.next){
                prev=prev.next
            }
            prev.next=node
        }
        this.size++
    }

    insert(value,index){
        if(index<0 || index>this.size){
           return
        }
        if(index===0){
           this.prepend(value)
        }else{
            const node=new Node(value)
            let prev=this.head
            for(let i=0;i<index-1;i++){
                prev=prev.next
            }
            node.next=prev.next
            prev.next=node
            this.size++;
        }

    }

    removefrom(index){
        if(index<0 || index>= this.size){
            return null
        }
        let removednode
        if(index===0){
            removednode=this.head
            this.head=this.head.next
            
        }else{
            let prev=this.head
            for(let i=0;i<index-1;i++){
                prev=prev.next
            }
            removednode=prev.next
            prev.next=removednode.next

        }
        this.size--
        return removednode.value
    }

    removeValue(value){
     if(this.isEmpty()){
        return null
     }
     if(this.head.value===value){
        this.head=this.head.next
        this.size--
        return value
     }
else{
    let prev=this.head
    while(prev.next && prev.next.value !== value){
        prev=prev.next
    }
    if(prev.next){
    
       const removednode=prev.next
        prev.next=removednode.next
        this.size--
        return value
    }
    return null

}

    }

   search(value){
    if(this.isEmpty()){
        return -1
    }
    let i=0;
    let curr=this.head
    while(curr){
        if(curr.value===value){
            return i
        }
        curr=curr.next
        i++
    }
    return -1

   }
}

const list=new LinkedList()

console.log("list is empty : ",list.isEmpty())
console.log('size',list.getsize())

list.prepend(20)
list.prepend(98)
list.prepend(42)
list.prepend(32)
list.append(3490)
list.append(389)
list.append(87)
list.insert(10,7)
list.insert(11,7)
list.insert(12,7)
list.insert(13,7)
console.log(list.removefrom(1))
list.print()
console.log(list.search(98))
list.print()


