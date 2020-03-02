import UnweightedUndirectedGraph from '../data-structures/graphs/unweightedundirectedgraph'

let Graph: UnweightedUndirectedGraph = new UnweightedUndirectedGraph()

beforeEach(()=>{
    Graph = new UnweightedUndirectedGraph()
})

describe('Unweighted Undirected Graph',()=>{
    describe('addVertex()',()=>{
        test('does not throw upon giving valid num arg',()=>{
            expect(Graph.addVertex(1)).not.toThrowError()
        })
    })
})