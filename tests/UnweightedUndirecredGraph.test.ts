import UWUDGraph from '../data-structures/graphs/UnweightedUndirectedGraph'

let Graph: UWUDGraph = new UWUDGraph()

beforeEach(()=>{
    Graph = new UWUDGraph()
})

describe('Unweighted Undirected Graph',()=>{
    describe('addVertex()',()=>{
        test('does not throw upon giving valid num arg',()=>{
            expect(Graph.addVertex(1)).not.toThrowError()
        })
    })
})