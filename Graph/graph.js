class Graph{
    constructor(){
        this.List={}
    }
    addVertex(vertex){
        if(!this.List[vertex]){
            this.List[vertex]=new Set()
        }
    }

    addEdges(vertex1,vertex2){
        if(!this.List[vertex1]){
            this.addVertex(vertex1)
        }
        if(!this.List[vertex2]){
            this.addVertex(vertex2)
        }
        this.List[vertex1].add(vertex2)
        this.List[vertex2].add(vertex1)
    }

    hasEdges(vertex1,vertex2){
        return (this.List[vertex1].has(vertex2) && this.List[vertex2].has(vertex1))
    }


    display(){
        for(let vertex in this.List){
            console.log(vertex+'->'+[...this.List[vertex]])
        }
    }

    removeEdges(vertex1,vertex2){
        this.List[vertex1].delete(vertex2)
        this.List[vertex2].delete(vertex1)
    }

    removeVertex(vertex){
        if(!this.List[vertex]){
            return null
        }else{
            for(let removeVertex in this.List){
                this.removeEdges(vertex,removeVertex)
            }
            delete this.List[vertex]
        }
    }

    dfs(start){
       let visited=new Set()
       let result=[]
       const dfsHelper=(vertex)=>{
       visited.add(vertex)
       result.push(vertex)
       this.List[vertex].forEach(neighbor=>{
        if(!visited.has(neighbor)){
            dfsHelper(neighbor)
        }
       })
    }
    dfsHelper(start)
    return result
}


bfs(start){
    const queue=[start]
    let visited=new Set(start)
    let result=[]
    while(queue.length){
        let cur=queue.shift()
        result.push(cur)
        this.List[cur].forEach((neighbor)=>{
            if(!visited.has(neighbor)){
                queue.push(neighbor)
                visited.add(neighbor)
            }
        })
    }
    return result;
  }
}

const graph=new Graph()
graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")
graph.addVertex("D")
graph.addVertex("E")
graph.addVertex("F")




graph.addEdges("A","B")
graph.addEdges("A","C")
graph.addEdges("B","D")
graph.addEdges("C","E")
graph.addEdges("D","E")
graph.addEdges("D","F")
graph.addEdges("A","E")

graph.display()
console.log('.......')
console.log(graph)
console.log(graph.dfs('A'));
console.log(graph.bfs("A"))

