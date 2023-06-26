
class Node{
    constructor(){
        this.child=new Map()
        this.end=false

    }
}
class TRIE{
     constructor() {
        this.root=new Node()
     }

     insert(word){
        for(let i=0;i<word.length;i++){
            this.insertWord(i,word)
        }
     }

     insertWord(index,word){
        let node=this.root
        for(let i=index;i<word.length;i++){
            let curr=word[i]
            if(!node.child.has(curr)){
                node.child.set(curr,new Node())
            }
            node=node.child.get(curr)
        }
        node.end=true
     }

     search(word){
        let node=this.root
        for(let i=0;i<word.length;i++){
            let cur=word[i]
            if(!node.child.has(cur)){
                return false
            }
            node=node.child.get(cur)
        }
        return node.end
     }


     prefix(pre){
        let node=this.root
        for(let i=0;i<pre.length;i++){
            let cur=pre[i]
            if(!node.child.has(cur)){
                return false

            }
            node=node.child.get(cur)
        }
        return true
     }
}


const trie=new TRIE()
trie.insert('fasil')
trie.insert("nisyas")
trie.insert("ca degree")
console.log(trie.search('fasil'))
console.log(trie.prefix('fa'))