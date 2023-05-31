class Node{
    constructor(value) {
        this.value=value
        this.next=null
    }
}

class LinkedList{
    constructor() {
        this.head=null
        this.size=0
    }
    IsEmpty(){
        return this.size===0
 
    }
//preppend
     preppend(value){
           const node = new Node(value)
           if(this.IsEmpty()){
            this.head=node
           }else{
            node.next=this.head
            this.head=node
           }
           this.size++
     }


     //Append

     Append(value){
         const node=new Node(value)
         if(this.IsEmpty()){
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


     //insert


     insert(value,index){
        if(index<0 || index>this.size){
            return
        }
        if(index===0){
            this.preppend(value)
        }else{
            const node=new Node(value)
            let prev=this.head
            for(let i=0;i<index-1;i++){
                prev=prev.next
            }
            node.next=prev.next
            prev.next=node
            
        }
        this.size++
     }


     //removeWithIndex

     removeFrom(index){
        if(index<0 || index>=this.size){
            return null
        }
        let removedNode
        if(index===0){
            removedNode=this.head
            this.head=this.head.next
        }else{
            let prev=this.head
            for(let i=0;i<index-1;i++){
                prev=prev.next
            }
            removedNode=prev.next
            prev.next=removedNode.next
        }
        this.size--
        return removedNode.value
     }





     //to display


     print(){
        if(this.IsEmpty()){
            console.log('List is empty');
        }else{
            let curr=this.head
            let listValue=""
            while(curr){
                listValue+=`${curr.value} `
                curr=curr.next
            }
            console.log(listValue)
        }
     }


}


const list=new LinkedList()
list.preppend(50)
list.preppend(30)

list.Append(60)
list.Append(70)

list.insert(100,2)
list.insert(100,0)

console.log(list.removeFrom(2))

list.print()