import UWUDGraph from '../data-structures/graphs/UnweightedUndirectedGraph'

let Graph: UWUDGraph = new UWUDGraph()

// before each test, reset graph
beforeEach(()=>{
    Graph = new UWUDGraph()
})

// test suite for entire graph
// i wont be testing for getNumberOfVertices and getNumberOfEdges
// it seems pretty dumb since its it just returns an incrimented total number
describe('Unweighted Undirected Graph',()=>{
    describe('initialization',()=>{
        test('numberOfVertices is 0 at init',()=>{
            expect(Graph.getNumberOfVertices()).toEqual(0)
        })
        test('numberOfEdges is 0 at init',()=>{
            expect(Graph.getNumberOfEdges()).toEqual(0)
        })
    })
    describe('addVertex()',()=>{
        test('does not throw upon giving valid num arg',()=>{
            // when using toThrowError(), you have to wrap your expect expression in a function. 
            expect(()=>{
                Graph.addVertex(1)
            }).not.toThrowError()

            expect(()=>{
                Graph.addVertex(-1)
            }).not.toThrowError()
        })
        test('correctly adds to numberOfVertices property',()=>{
            Graph.addVertex(4)
            Graph.addVertex(2)
            expect(Graph.getNumberOfVertices()).toEqual(2)
        })
        test('will throw on attempting to add duplicate vertices',()=>{
            expect(()=>{
                Graph.addVertex(1)
                Graph.addVertex(1)
            }).toThrowError()
        })
    })
})