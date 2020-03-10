export default interface GraphInterface{
    getNumberOfVertices(): number
    getNumberOfEdges(): number
    addVertice(value: number): boolean
    addEdge(src: number,dest: number): boolean
    getVertice(id: number): VerticeObject
    edgeExists(v1: number,v2: number): boolean
    removeEdge(v1: number, v2: number): boolean
    removeVertice(src: number): boolean
    bfs(): Array<number>
    dfs(): Array<number>
}

export type VerticeObject = {
    value: number,
    adjacencies: Array<number>
}