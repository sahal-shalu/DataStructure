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

    

}

const graph=new Graph()
graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')
graph.addVertex('D')


graph.addEdges('A','B')
graph.addEdges('B','c')
graph.addEdges('A','D')