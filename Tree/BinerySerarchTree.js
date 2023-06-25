class Node{
    constructor(value) {
        this.value=value
        this.left=null
        this.right=null
    }
}
class BST{
    constructor() {
        this.root=null
    }
    IsEmpty(){
        return this.root===null
    }

    insert(value){
        const node=new Node(value)
        if( this.IsEmpty()){
            this.root=node
        }else{
            this.insertNode(this.root,node)
        }
    }

    insertNode(root,node){
        if(node.value<root.value){
            if(root.left===null){
                root.left=node
            }else{
                this.insertNode(root.left,node)
            }
        }else{
            if(root.right==null){
                root.right=node
            }else{
                this.insertNode(root.right,node)
            }
        }
    }

    

    search(root,value){
        if(!root){
            return false
        }else{
            if(root.value===value){
                return true
            }else if(value < root.value){
                return this.search(root.left,value)
            }else{
                return this.search(root.right,value)
            }
        }
    }

    PreOrder(root){
        if(root){
            console.log(root.value)
            this.PreOrder(root.left)
            this.PreOrder(root.right)
        }
    }

    inOrder(root){
        if(root){
            this.inOrder(root.left)
            console.log(root.value)
            this.inOrder(root.right)
        }
    }

    postOrder(root){
        if(root){
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.value)
        }
    }

    levelOrder(){
        const que=[]
        que.push(this.root)
        while(que.length){
            let cur=que.shift()
            console.log(cur.value)
            if(cur.left){
                que.push(cur.left)
            }
            if(cur.right){
                que.push(cur.right)
            }
        }
    }
}

const bst=new BST()
bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(3)
bst.insert(7)
console.log(bst.search(bst.root,50))
bst.PreOrder(bst.root)
console.log("......");
bst.inOrder(bst.root)
console.log("......");
bst.postOrder(bst.root)
console.log('.......')
bst.levelOrder(bst.root)

