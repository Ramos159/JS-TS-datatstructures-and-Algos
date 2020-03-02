export default interface GraphInterface{
    getNumberOfVertices(): number
    getNumberOfEdges(): number
    addVertex(value: number): boolean
    addEdge(src: number,dest: number): boolean
    getVertex(id: number): VertexObject
    edgeExists(v1: number,v2: number): boolean
}

export type VertexObject = {
    value: number,
    adjacencies: Array<number>
}