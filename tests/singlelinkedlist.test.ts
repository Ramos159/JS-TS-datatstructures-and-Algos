import SinglyLinkedList from '../TS-data-structures/SinglyLinkedList'
import SingleListNode from '../TS-data-structures/SingleListNode'

describe('SinglyLinkedList',()=>{
    describe('Intialization',()=>{
        test('head is initialized to null',()=>{
            let list: SinglyLinkedList = new SinglyLinkedList()
            expect(list.getFirstNode()).toEqual(null)
        })
        test('tail is intialized to null',()=>{
            let list: SinglyLinkedList = new SinglyLinkedList()
            expect(list.getLastNode()).toEqual(null)
        })
        test('list size is initialized to 0',()=>{
            let list = new SinglyLinkedList()
            expect(list.getSize()).toEqual(0)
        })
    })
    describe('addToFrontOfList',()=>{
        test('inserts nodes to the front correctly',()=>{
            let list: SinglyLinkedList = new SinglyLinkedList()
            list.addToFrontOfTheList(2)
            let node = list.getFirstNode()
            expect(node.value).toEqual(2)
        })
        test('increases list size correctly',()=>{
            let list: SinglyLinkedList = new SinglyLinkedList()
            list.addToFrontOfTheList(1)
            list.addToFrontOfTheList(2)
            list.addToFrontOfTheList(3)
            expect(list.getSize()).toEqual(3)
        })
    })
    describe('addToBackOflist',()=>{
        test('inserts nodes to the back correctly using addToBackOfTheList',()=>{
            let list: SinglyLinkedList = new SinglyLinkedList()
            list.addToFrontOfTheList(1)
            list.addToBackOfTheList(2)
            list.addToBackOfTheList(3)
            let node = list.getLastNode()
            expect(node.value).toEqual(3)
        })
        test('increases the list size correctly',()=>{
            let list: SinglyLinkedList = new SinglyLinkedList()
            list.addToBackOfTheList(1)
            list.addToBackOfTheList(2)
            list.addToBackOfTheList(3)
            expect(list.getSize()).toEqual(3)
        })
    })
    describe('removeFirstNode',()=>{
        test('removes first node on a list correctly',()=>{
            let list: SinglyLinkedList = new SinglyLinkedList()
            list.addToBackOfTheList(1)
            list.addToBackOfTheList(2)
            list.addToBackOfTheList(3)
            list.addToBackOfTheList(4)
            let node = list.removeFirstNode()
            expect(node.value).toEqual(1)
        })
        test('decreases the list size correctly',()=>{
            let list: SinglyLinkedList = new SinglyLinkedList()
            list.addToBackOfTheList(1)
            list.addToBackOfTheList(2)
            list.addToBackOfTheList(3)
            list.addToBackOfTheList(4)
            let node = list.removeFirstNode()
            expect(list.getSize()).toEqual(3)
        })
        test('throws an error if the list is empty',()=>{
            let list: SinglyLinkedList = new SinglyLinkedList()
            expect(()=>{
                list.removeFirstNode()
            }).toThrow()
        })
    })
    describe('removeLastNode',()=>{
        test('removes last node on a list correctly',()=>{
            let list: SinglyLinkedList = new SinglyLinkedList()
            list.addToBackOfTheList(1)
            list.addToBackOfTheList(2)
            list.addToBackOfTheList(3)
            list.addToBackOfTheList(4)
            let node = list.removeLastNode()
            expect(node.value).toEqual(4)
        })
        test('decreases the list size correctly',()=>{
            let list: SinglyLinkedList = new SinglyLinkedList()
            list.addToBackOfTheList(1)
            list.addToBackOfTheList(2)
            list.addToBackOfTheList(3)
            list.addToBackOfTheList(4)
            let node = list.removeLastNode()
            expect(list.getSize()).toEqual(3)
        })
        test('throws an error if the list is empty',()=>{
            let list: SinglyLinkedList = new SinglyLinkedList()
            expect(()=>{
                list.removeLastNode()
            }).toThrow()
        })
    })
    describe('removeNodeAtIndex',()=>{
        test('removes correct node based on zero index',()=>{
            let list: SinglyLinkedList = new SinglyLinkedList()
            list.addToFrontOfTheList(1)
            list.addToFrontOfTheList(2)
            list.addToFrontOfTheList(3)
            list.addToFrontOfTheList(4)
            list.addToFrontOfTheList(5)
            let node = list.removeNodeAtIndex(3)
            expect(node.value).toEqual(4)
        })
        test('decreases size of list correctly',()=>{
            let list: SinglyLinkedList = new SinglyLinkedList()
            list.addToFrontOfTheList(1)
            list.addToFrontOfTheList(2)
            list.addToFrontOfTheList(3)
            list.addToFrontOfTheList(4)
            list.addToFrontOfTheList(5)
            list.removeNodeAtIndex(4)
            expect(list.getSize()).toEqual(4)
        })
        test('throws error when used on empty list',()=>{
            let list: SinglyLinkedList = new SinglyLinkedList()
            expect(()=>{
                list.removeNodeAtIndex(1)
            }).toThrow()
        })
        test('throws error when index param goes above size of list',()=>{
            let list: SinglyLinkedList = new SinglyLinkedList()
            list.addToBackOfTheList(1)
            list.addToFrontOfTheList(2)
            expect(()=>{
                list.removeNodeAtIndex(2)
            }).toThrow()
        })
        test('throws error on negative number index params',()=>{
            let list: SinglyLinkedList = new SinglyLinkedList()
            list.addToBackOfTheList(1)
            expect(()=>{
                list.removeNodeAtIndex(-1)
            }).toThrow()
        })
    })
    describe('insertNodeAtIndex',()=>{
        test('inserts node correctly based on zero index',()=>{
            let list: SinglyLinkedList = new SinglyLinkedList()
            list.addToBackOfTheList(1)
            list.addToBackOfTheList(2)
            list.addToBackOfTheList(3)
            list.addToBackOfTheList(4)
            list.addToBackOfTheList(5)
            list.insertNodeAtIndex(4,6)
            let node = list.getNodeAtIndex(4)
            expect(node.value).toEqual(6)
        })
        test('increases size of list correctly',()=>{
            let list: SinglyLinkedList = new SinglyLinkedList()
            list.addToFrontOfTheList(1)
            list.addToFrontOfTheList(2)
            list.addToFrontOfTheList(3)
            list.addToFrontOfTheList(4)
            list.addToFrontOfTheList(5)
            list.insertNodeAtIndex(4,40)
            expect(list.getSize()).toEqual(6)
        })
        test('does not work when used on empty list',()=>{
            let list: SinglyLinkedList = new SinglyLinkedList()
            expect(()=>{
                list.insertNodeAtIndex(0,1)
            }).toThrow()
        })
        test('throws error when index param goes above size of list',()=>{
            let list: SinglyLinkedList = new SinglyLinkedList()
            list.addToBackOfTheList(1)
            list.addToFrontOfTheList(2)
            expect(()=>{
                list.insertNodeAtIndex(2,3)
            }).toThrow()
        })
        test('throws error on negative number index params',()=>{
            let list: SinglyLinkedList = new SinglyLinkedList()
            list.addToBackOfTheList(1)
            expect(()=>{
                list.getNodeAtIndex(-1)
            }).toThrow()
        })
    })
})
