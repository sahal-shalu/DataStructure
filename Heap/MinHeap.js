class MinHeap{
    constructor(){
     this.heap=null
    }
    build(arr){
     this.heap=arr
     for(let i=this.parent(this.heap.length-1);i>=0;i--){
         this.shiftdown(i)
     }
    }
 
    shiftdown(index){
     let end=this.heap.length-1
     let left=this.leftchild(index)
     let shift;
     while(left<=end){
         let right=this.rightchild(index)
         if(right<=end && this.heap[right]<this.heap[left]){
             shift=right
         }else{
             shift=left
         }
         if(this.heap[shift]<this.heap[index]){
             [this.heap[index],this.heap[shift]]=[this.heap[shift],this.heap[index]]
             index=shift
             left=this.leftchild(index)
         }else{
             return
         }
     }
 }
 
 remove(){
     if(this.heap===null){
         return null
     }else{
         [this.heap[0],this.heap[this.heap.length-1]]=[this.heap[this.heap.length-1],this.heap[0]]
         const root=this.heap.pop()
         this.shiftdown(0)
         return root
     }
 }
 
 shiftup(index){
     let parent=this.parent(index)
     while(parent>=0 && this.heap[parent]>this.heap[index]){
         [this.heap[index],this.heap[parent]]=[this.heap[parent],this.heap[index]]
         index=parent
         parent=this.parent(index)
     }
 }
 
 
 insert(value){
     this.heap.push(value)
     this.shiftup(this.heap.length-1)
 }
 
 
 sort(){
     let sorted=[]
     while(this.heap.length>0){
         [this.heap[0],this.heap[this.heap.length-1]]=[this.heap[this.heap.length-1],this.heap[0]]
         sorted.unshift(this.heap.pop())
         this.shiftdown(0)
     }
 console.log(sorted)
 }
 
 
 print(){
     console.log(this.heap)
 }
 
 parent(i){
     return Math.floor((i-1)/2)
 }
 
 leftchild(i){
     return (2*i+1)
 }
 
 rightchild(i){
     return (2*i+2)
 }
 
 
 }
 
 
 const a=new MinHeap()
 
 a.build([5,3,2,22,1,6])
 a.print()
 
 
 console.log(a.remove())
 a.insert(90)
 a.print()
 a.sort()
 