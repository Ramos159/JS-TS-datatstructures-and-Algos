import DoublyLinkedList from '../data-structures/lists/DoublyLinkedList'
import DoubleListNode from '../data-structures/lists/DoubleListNode'

// this is basically just my singlelinked test just changed for double
// they are 99% identical as structures so why not

let list: DoublyLinkedList = new DoublyLinkedList()
let node: DoubleListNode =  new DoubleListNode(1)

beforeEach(()=>{
    list = new DoublyLinkedList()
})

describe('DoublyLinkedList',()=>{
    describe('Intialization',()=>{
        test('head is initialized to null',()=>{
            
            expect(list.getFirstNode()).toEqual(null)
        })
        test('tail is intialized to null',()=>{
            
            expect(list.getLastNode()).toEqual(null)
        })
        test('list size is initialized to 0',()=>{
            let list = new DoublyLinkedList()
            expect(list.getSize()).toEqual(0)
        })
    })
    describe('Double List Node',()=>{
        test('has a value property',()=>{
            expect(node).toMatchObject({value:1})
        })
        test('has a next property that is intialized to null',()=>{
            expect(node).toMatchObject({next:null})
        })
        test('has a prev property that is intialized to null',()=>{
            expect(node).toMatchObject({prev:null})
        })
    })
    describe('addToFrontOfList()',()=>{
        test('inserts nodes to the front correctly',()=>{
            list.addToFrontOfList(2)
            let node = list.getFirstNode()
            expect(node.value).toEqual(2)

            list.addToFrontOfList(3)
            node = list.getFirstNode()
            expect(node.value).toEqual(3)

            list.addToFrontOfList(25)
            node = list.getFirstNode()
            expect(node.value).toEqual(25)

        })
        test('increases list size correctly',()=>{
            list.addToFrontOfList(1)
            expect(list.getSize()).toEqual(1)

            list.addToFrontOfList(2)
            expect(list.getSize()).toEqual(2)

            list.addToFrontOfList(3)
            expect(list.getSize()).toEqual(3)
        })
    })
    describe('addToBackOflist()',()=>{
        test('inserts nodes to the back correctly using addToBackOfList',()=>{   
            list.addToBackOfList(1)

            list.addToBackOfList(2)
            let node = list.getLastNode()
            expect(node.value).toEqual(2)

            list.addToBackOfList(3)
            node = list.getLastNode()
            expect(node.value).toEqual(3)

            list.addToBackOfList(367)
            node = list.getLastNode()
            expect(node.value).toEqual(367)
        })
        test('increases the list size correctly',()=>{         
            list.addToBackOfList(1)
            list.addToBackOfList(2)
            list.addToBackOfList(3)
            expect(list.getSize()).toEqual(3)
        })
    })
    describe('removeFirstNode()',()=>{
        test('removes first node on a list correctly',()=>{     
            list.addToBackOfList(1)
            list.addToBackOfList(2)
            list.addToBackOfList(3)
            list.addToBackOfList(4)

            let node = list.removeFirstNode()
            expect(node.value).toEqual(1)

            node = list.removeFirstNode()
            expect(node.value).toEqual(2)

            node = list.removeFirstNode()
            expect(node.value).toEqual(3)
        })
        test('decreases the list size correctly',()=>{
            list.addToBackOfList(1)
            list.addToBackOfList(2)
            list.addToBackOfList(3)
            list.addToBackOfList(4)

            let node = list.removeFirstNode()
            expect(list.getSize()).toEqual(3)
            
            node = list.removeFirstNode()
            expect(list.getSize()).toEqual(2)

            node = list.removeFirstNode()
            expect(list.getSize()).toEqual(1)
        })
        test('throws an error if the list is empty',()=>{
            expect(()=>{
                list.removeFirstNode()
            }).toThrow()
        })
    })
    describe('removeLastNode()',()=>{
        test('removes last node on a list correctly',()=>{
            list.addToBackOfList(1)
            list.addToBackOfList(2)
            list.addToBackOfList(3)
            list.addToBackOfList(4)

            let node = list.removeLastNode()
            expect(node.value).toEqual(4)

            node = list.removeLastNode()
            expect(node.value).toEqual(3)
            
            node = list.removeLastNode()
            expect(node.value).toEqual(2)
        })
        test('decreases the list size correctly',()=>{
            list.addToBackOfList(1)
            list.addToBackOfList(2)
            list.addToBackOfList(3)
            list.addToBackOfList(4)

            let node = list.removeLastNode()
            expect(list.getSize()).toEqual(3)

            node = list.removeLastNode()
            expect(list.getSize()).toEqual(2)
            
            node = list.removeLastNode()
            expect(list.getSize()).toEqual(1)
        })
        test('throws an error if the list is empty',()=>{
            expect(()=>{
                list.removeLastNode()
            }).toThrow()
        })
    })
    describe('removeNodeAtIndex()',()=>{
        test('removes correct node based on zero index',()=>{
            list.addToFrontOfList(1)
            list.addToFrontOfList(2)
            list.addToFrontOfList(3)
            list.addToFrontOfList(4)
            list.addToFrontOfList(5)

            let node = list.removeNodeAtIndex(3)
            expect(node.value).toEqual(2)

            node = list.removeNodeAtIndex(1)
            expect(node.value).toEqual(4)
        })
        test('decreases size of list correctly',()=>{
            list.addToFrontOfList(1)
            list.addToFrontOfList(2)
            list.addToFrontOfList(3)
            list.addToFrontOfList(4)
            list.addToFrontOfList(5)

            list.removeNodeAtIndex(4)
            expect(list.getSize()).toEqual(4)

            list.removeNodeAtIndex(1)
            expect(list.getSize()).toEqual(3)

            list.removeNodeAtIndex(1)
            expect(list.getSize()).toEqual(2)
        })
        test('throws error when used on empty list',()=>{
            expect(()=>{
                list.removeNodeAtIndex(1)
            }).toThrow()
        })
        test('throws error when index param goes above size of list',()=>{
            list.addToBackOfList(1)
            list.addToFrontOfList(2)
            expect(()=>{
                list.removeNodeAtIndex(2)
            }).toThrow()
        })
        test('throws error on negative number index params',()=>{
            list.addToBackOfList(1)
            expect(()=>{
                list.removeNodeAtIndex(-1)
            }).toThrow()
        })
    })
    describe('insertNodeAtIndex()',()=>{
        test('inserts node correctly based on zero index',()=>{
            list.addToBackOfList(1)
            list.addToBackOfList(2)
            list.addToBackOfList(3)
            list.addToBackOfList(4)
            list.addToBackOfList(5) 

            list.insertNodeAtIndex(4,6)
            
            let node = list.getNodeAtIndex(4)
            expect(node.value).toEqual(6)

            list.insertNodeAtIndex(2,15)
            node = list.getNodeAtIndex(2)
            expect(node.value).toEqual(15)

            list.insertNodeAtIndex(4,65)
            node = list.getNodeAtIndex(4)
            expect(node.value).toEqual(65)

        })
        test('increases size of list correctly',()=>{
            list.insertNodeAtIndex(0,40)
            expect(list.getSize()).toEqual(1)

            list.insertNodeAtIndex(0,40)
            list.insertNodeAtIndex(1,40)
            expect(list.getSize()).toEqual(3)

            list.insertNodeAtIndex(2,40)
            expect(list.getSize()).toEqual(4)

            list.insertNodeAtIndex(0,40)
            expect(list.getSize()).toEqual(5)
        })
        test('works when used on empty list',()=>{
            expect(()=>{
                list.insertNodeAtIndex(0,1)
            }).not.toThrow()
        })
        test('throws error when index param goes above size of list',()=>{
            list.addToBackOfList(1)
            list.addToFrontOfList(2)

            expect(()=>{
                list.insertNodeAtIndex(2,3)
            }).toThrow()
        })
        test('throws error on negative number index params',()=>{
            list.addToBackOfList(1)

            expect(()=>{
                list.getNodeAtIndex(-1)
            }).toThrow()
        })
    })
})
