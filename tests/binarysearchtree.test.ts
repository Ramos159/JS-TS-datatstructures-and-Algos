import BinarySearchTree from '../data-structures/tree/BinarySearchTree'

let BST: BinarySearchTree = new BinarySearchTree

beforeEach(()=>{
    BST = new BinarySearchTree
})

describe('Binary Search Tree',()=>{
    describe('Initialization',()=>{
        test('Tree starts with a empty root',()=>{
            expect(BST.getRoot()).toEqual(null)
        })
    })
})