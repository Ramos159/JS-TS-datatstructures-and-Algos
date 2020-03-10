import GraphInterface,{ VerticeObject } from './GraphInterface'

export default class UnweightedUndirectedGraph implements GraphInterface{

    // uses a map of numbers, who's keys are arrays of numbers to keep track of edges
    private adjList: Map<number,Array<number>>
    // self explanitory really, just keeps track of totals
    private numberOfVertices: number
    private numberOfEdges: number 

    constructor(){
        this.numberOfVertices = 0
        this.numberOfEdges = 0
        this.adjList = new Map()
    }

    // getters for private fields above
    getNumberOfVertices = (): number => {
        return this.numberOfVertices
    }

    getNumberOfEdges = (): number => {
        return this.numberOfEdges
    }

    // add a vertex to the graph
    addVertice = (value: number): boolean => {

        // check for duplicate key, throw error if it has a duplicate
        if(this.adjList.has(value)){
            throw new Error('Duplicate vertices are not allowed')
        }

        // if the map sets successfully send true back
        if(this.adjList.set(value,[])){
            this.numberOfVertices++
            return true
        }
        // throw an error to tell the user something went wrong if you can't set value above
        throw new Error('Vertice could not be added')
    }

    // add an edge to our graph
    addEdge = (src: number,dest:number): boolean => {

        // they might send the same nodes to be added together, return false cause thats not legal
        if(src === dest){
            throw new Error("A vertice cant have an edge with itself")
        }

        // check if this edge exists
        // this condition will check one vertice to check if it has the edge already
        // we only need to check one vertice since we always add them both at the same time to each list
        // indexOf will return -1 if it element isnt in an array
        if(this.adjList.get(src).indexOf(dest)!== -1){

            // set edge if it does not exist
            // this is undirected so add the edge to both
            this.adjList.get(src).push(dest)
            this.adjList.get(dest).push(src)
            console.log("LIST",this.adjList)
            // add one to numberOfEdges to keep track
            this.numberOfEdges += 1

            // return true to let user know operation was successful
            return true
        }

        // throw error if it does exists
        throw new Error("Edge already exists on graph")
    }

    getVertice = (src: number): VerticeObject => {
        const ref = this.adjList.get(src)
        console.log("REF",ref)
        if(ref){
            // vertex object
            return {
                value: src,
                adjacencies: ref
            }
        }

        throw new Error("Requested Vertex doesn't Exist!")
    }

    edgeExists = (v1: number,v2: number): boolean => {
        const v1Vertex = this.adjList.get(v1)

        // if v1vertex array contains the requested edge it won't be -1
        if(v1Vertex.indexOf(v2) !== -1){
            return true
        }

        return false
    }

    removeEdge = (v1: number,v2: number): boolean => {
        const v1Vertex = this.adjList.get(v1)
        const v2Vertex = this.adjList.get(v2)

        v1Vertex.splice(v1Vertex.indexOf(v2)) 
        v2Vertex.splice(v2Vertex.indexOf(v1))

        // make sure both items are removed from each list
        if(v1Vertex.indexOf(v2) === -1 && v2Vertex.indexOf(v1) === -1){
            this.numberOfEdges --
            return true
        }

        return false
    }

    removeVertice = (src: number): boolean => {

        // will return true if is successful
        if(this.adjList.delete(src)){
            this.numberOfVertices --
            return true
        }

        return false
    }

    bfs = (): Array<number> => {
        // implimentation soon
        return [1]
    }

    dfs = (): Array<number> => {
        // implimentation soon
        return [1]
    }

    // print graph for debug purposes
    printGraph = (): void => {
        const keys = this.adjList.keys()

        for(let key in keys){

            // key is a string in keys, so parse it to make it work below for get
            const list = this.adjList.get(parseInt(key))
            // will be a string of all the vertices in the list
            let str = ''

            // make the string of vertices
            for(let num in list){
                str += num + ' '
            }

            // display it nice and proper
            console.log(key + ' -> ' + str)
        }
    }

}