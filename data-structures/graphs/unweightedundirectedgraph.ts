export default class UnweightedUndirectedGraph{

    private adjList: Map<number,Array<number>>

    constructor(){
        this.adjList = new Map()
    }

    // add a vertex to the graph
    addVertex = (value: number): boolean => {
        // if the map sets successfully send true back, if not send false 
        if(this.adjList.set(value,[])){
            return true
        }
        return false
    }

    //add an edge to our graph
    addEdge = (src: number,dest:number):boolean => {
        try{
            // get the list for the src vertex and push dest into it
            this.adjList.get(src).push(dest)

            // since this is undirected, we must add this edge to both lists
            this.adjList.get(dest).push(src)

            // if both of these dont throw, just return true to indicate success
            return true
        }
        catch(err){
            // for right now return false to indicate something has gone wrong
            return false
        }
    }

    //print graph for debug purposes
    printGraph = () => {
        const keys = this.adjList.keys()

        for(let key in keys){

            //key is a string in keys, so parse it to make it work below for get
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