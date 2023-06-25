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

    min(root){
        if(!root.left){
            return root.value
        }else{
            return this.min (root.left)
        }
    }
    max(root){
        if(!root.right){
            return root.value
        }else{
            return this.max(root.right)
        }
    }

    delete(value){
        this.root=this.deleteNode(this.root,value)
    }
    deleteNode(root,value){
        if(root===null){
            return root
        }
        if(value<root.value){
            root.left=this.deleteNode(root.left,value)
        }else if(value>root.value){
            root.right=this.deleteNode(root.right,value)
        }else{
            if(!root.left && !root.right){
                return null
            }
            if(!root.left){
                return root.right
            }
            if(!root.right){
                return root.left
            }
            root.value=this.min(root.right)
            root.right=this.deleteNode(root.right,root.value)
        }
        return root
    }


    IsBst(){
        return this.helper(this.root,-Infinity,Infinity)
    }
    helper(node,min,max){
        if(!node){
            return true
        }if(node.value<min||node.value>max){
            return false
        }else{
            return (this.helper(node.right,node.value,max) && this.helper(node.left,min,node.value))
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
console.log('.......')
console.log(bst.min(bst.root))
console.log(bst.max(bst.root))
bst.delete(10)
console.log(bst.IsBst())


