import BinarySearchTree from '../data-structures/tree/BinarySearchTree'

let BST: BinarySearchTree = new BinarySearchTree

const setUpBSTForSearch = (BST: BinarySearchTree): void => {
    BST.insert(5)
    BST.insert(2)
    BST.insert(3)
    BST.insert(4)
    BST.insert(7)
    BST.insert(8)
    BST.insert(6)
    BST.insert(1)
}

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
    describe('bfs()',()=>{
        test('returns array in correct bfs manner',()=>{
            BST.insert(5)
            BST.insert(2)
            BST.insert(3)
            BST.insert(4)
            BST.insert(7)
            BST.insert(8)
            BST.insert(6)
            BST.insert(1)

            expect(BST.bfs()).toEqual([5,2,7,1,3,6,8,4])
        })
    })
    describe('dfs()',()=>{
        test('will return accept "postorder","preorder" and "inorder" as valid args',()=>{
            BST.insert(1)
            BST.insert(2)

            expect(()=>{
                BST.dfs("inorder")
            }).not.toThrow()

            expect(()=>{
                BST.dfs("postorder")
            }).not.toThrow()

            expect(()=>{
                BST.dfs("inorder")
            }).not.toThrow()
        })
        test('dfs() with "inorder" arg will return appropriate array',()=>{
            setUpBSTForSearch(BST)

            expect(BST.dfs("inorder")).toEqual([1,2,3,4,5,6,7,8])
        })
        test('dfs() with "postorder" arg will return appropriate array',()=>{
            setUpBSTForSearch(BST)

            expect(BST.dfs("postorder")).toEqual([1,4,3,2,6,8,7,5])
        })
        test('dfs() with "preorder" arg will return appropriate array',()=>{
            setUpBSTForSearch(BST)

            expect(BST.dfs("preorder")).toEqual([5,2,1,3,4,7,6,8])
        })
    })
})