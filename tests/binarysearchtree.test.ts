import BinarySearchTree from '../data-structures/tree/BinarySearchTree'

let BST: BinarySearchTree = new BinarySearchTree

//testing notes: I Know the tree inserts properly, but im not sure how i would test if its correct

beforeEach(()=>{
    BST = new BinarySearchTree
})

describe('Binary Search Tree',()=>{
    describe('Initialization',()=>{
        test('Tree starts with a empty root',()=>{
            expect(BST.getRoot()).toEqual(null)
        })
    })
    describe('insert()',()=>{
        test('Returns true on a successful insertion of non-duplicate',()=>{
            expect(BST.insert(1)).toEqual(true)
            expect(BST.insert(2)).toEqual(true)
        })
        test('Returns false when trying to insert a duplicate number',()=>{
            BST.insert(1)
            expect(BST.insert(1)).toEqual(false)
        })
    })
    describe('includes()',()=>{
        test('Returns true when number parameter is found in the tree',()=>{
            BST.insert(1)
            expect(BST.includes(1)).toEqual(true)
        })
        test('Returns false when number parameter is not found in the tree',()=>{
            BST.insert(2)
            expect(BST.includes(3))
        })
    })
})