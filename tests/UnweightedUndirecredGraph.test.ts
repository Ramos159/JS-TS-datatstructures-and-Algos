import UWUDGraph from '../data-structures/graphs/unweightedundirectedgraph'
// import {VerticeObject} from '../data-structures/graphs/GraphInterface'

let Graph: UWUDGraph = new UWUDGraph()

// generic function that will set up my graph
const setUpGraph = (graph: UWUDGraph, edges?: boolean): void => {
    // set up dummy vertices
    graph.addVertice(0)
    graph.addVertice(1)
    graph.addVertice(2)
    graph.addVertice(3)
    graph.addVertice(4)
    graph.addVertice(5)
    graph.addVertice(6)
    graph.addVertice(7)
    graph.addVertice(8)

    if(edges === true){
        console.log("EDGES")
        graph.addEdge(0,4)
        graph.addEdge(4,6)
        graph.addEdge(6,7)
        graph.addEdge(6,8)
        graph.addEdge(0,1)
        graph.addEdge(1,3)
        graph.addEdge(1,2)
        graph.addEdge(2,5)
    }
}

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
    describe('addVertice()',()=>{
        test('does not throw upon giving valid num arg',()=>{
            // when using toThrowError(), you have to wrap your expect expression in a function. 
            expect(()=>{
                Graph.addVertice(1)
            }).not.toThrowError()

            expect(()=>{
                Graph.addVertice(-1)
            }).not.toThrowError()
        })
        test('correctly adds to numberOfVertices property',()=>{
            Graph.addVertice(4)
            Graph.addVertice(2)
            expect(Graph.getNumberOfVertices()).toEqual(2)
        })
        test('will throw on attempting to add duplicate vertices',()=>{
            expect(()=>{
                Graph.addVertice(1)
                Graph.addVertice(1)
            }).toThrowError()
        })
    })
    describe('addEdge()',()=>{
        test('will return true if edges are added',()=>{
            setUpGraph(Graph)

            const result2 = Graph.addEdge(0,1)
            const result1 = Graph.addEdge(2,1)

            expect(result1 === true && result2 === true)
        })
        test('will throw when adding edges that already exist',()=>{
            expect(()=>{
                setUpGraph(Graph,true)

                Graph.addEdge(0,4)
                Graph.addEdge(6,4)
            }).toThrowError()
        })
        test('will incriment number of edges property accordingly',()=>{
            setUpGraph(Graph,true)
            expect(Graph.getNumberOfEdges()).toEqual(8)
        })
    })
    describe('getVertice()',()=>{
        test('returns a object of type VerticeObject',()=>{
            setUpGraph(Graph,true)

            const vertice = Graph.getVertice(0)

            expect(typeof(vertice)).toEqual('VerticeObject')
        })
        test('will throw if vertice requested does not exist',()=>{
            expect(()=>{
                setUpGraph(Graph)
                Graph.getVertice(69)
            }).toThrowError()
        })
        test('will return the proper object associated with the vertice',()=>{
            setUpGraph(Graph)
            const vertice = Graph.getVertice(0)
            console.log(vertice)
            expect(vertice).toMatchObject({
                value: 0,
                adjacencies:[1,4]
            })
        })
    })
})