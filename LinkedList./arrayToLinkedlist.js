class Node{
    constructor(value) {
        this.value=value
        this.next=null
    }
}
 
function arrToLinkedlist(arr){
    let head=null
    let current=head
    for(let i=0;i<arr.length;i++){
        if(head==null){
            head=new Node(arr[i])
            current=head;
        }else{
            current.next=newNode(arr[i])
            current=current.next
        }
    }
    return head
}

let linkedListValues=arrToLinkedlist([5,4,3,2,1])

console.log(linkedListValues)

const current=linkedListValues
while(current){
    console.log(current.value);
    current=current.next
}