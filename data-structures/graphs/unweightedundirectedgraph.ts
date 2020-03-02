import GraphInterface,{ VertexObject } from './GraphInterface'

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
    addVertex = (value: number): boolean => {

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

        // check if this edge exists
        // this condition will check one vertice to check if it has the edge already
        // we only need to check one vertice since we always add them both at the same time to each list
        // indexOf will return -1 if it element isnt in an array
        if(this.adjList.get(src).indexOf(dest)!== -1){

            // set edge if it does not exist
            // this is undirected so add the edge to both
            this.adjList.get(src).push(dest)
            this.adjList.get(dest).push(src)

            // add two to numberOfEdges to keep track
            this.numberOfEdges += 2

            // return true to let user know operation was successful
            return true
        }

        // throw error if it does exists
        throw new Error("Edge already exists on graph")
    }

    getVertex = (value: number): VertexObject => {
        // to be implimented soon
    }

    edgeExists = (v1: number,v2: number): boolean => {
        // to be implimented soon
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