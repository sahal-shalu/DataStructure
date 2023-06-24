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
            this.insertNOde(this.root,node)
        }
    }

    insertNOde(root,node){
          if(node.value<root.value){
            if(root.left===null){
                root.left=node
            }else{
                if(root.right===null){
                    root.right=node
                }else{
                    this.insertNOde(root.right,node)
                }
            }
          }
    }
}

const bst=new BST()
bst.insert(10)
bst.insert(50)
bst.insert(40)

