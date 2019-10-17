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
    describe('Single List Node',()=>{
        test('has a value property',()=>{
            let node: SingleListNode = new SingleListNode(1)
            expect(node).toMatchObject({value:1})
        })
        test('has a next property that is intialized to null',()=>{
            let node: SingleListNode = new SingleListNode(1)
            expect(node).toMatchObject({next:null})
        })
    })
    describe('addToFrontOfList',()=>{
        test('inserts nodes to the front correctly',()=>{
            let list = new SinglyLinkedList()
            list.addToFrontOfTheList(2)
            let node = list.getFirstNode()
            expect(node.value).toEqual(2)
        })
        test('increases list size correctly',()=>{
            let list = new SinglyLinkedList()
            list.addToFrontOfTheList(1)
            list.addToFrontOfTheList(2)
            list.addToFrontOfTheList(3)
            expect(list.getSize()).toEqual(3)
        })
    })
    describe('addToBackOflist',()=>{
        test('inserts nodes to the back correctly using addToBackOfTheList',()=>{
            let list = new SinglyLinkedList()
            list.addToFrontOfTheList(1)
            list.addToBackOfTheList(2)
            list.addToBackOfTheList(3)
            let node = list.getLastNode()
            expect(node.value).toEqual(3)
        })
        test('increases the list size correctly',()=>{
            let list = new SinglyLinkedList()
            list.addToBackOfTheList(1)
            list.addToBackOfTheList(2)
            list.addToBackOfTheList(3)
            expect(list.getSize()).toEqual(3)
        })
    })
    describe('removeFirstNode',()=>{
        test('removes first node on a list correctly',()=>{
            let list = new SinglyLinkedList()
            list.addToBackOfTheList(1)
            list.addToBackOfTheList(2)
            list.addToBackOfTheList(3)
            list.addToBackOfTheList(4)
            let node = list.removeFirstNode()
            expect(node.value).toEqual(1)
        })
        test('decreases the list size correctly',()=>{
            let list = new SinglyLinkedList()
            list.addToBackOfTheList(1)
            list.addToBackOfTheList(2)
            list.addToBackOfTheList(3)
            list.addToBackOfTheList(4)
            let node = list.removeFirstNode()
            expect(list.getSize()).toEqual(3)
        })
        test('throws an error if the list is empty',()=>{
            let list = new SinglyLinkedList()
            expect(()=>{
                list.removeFirstNode()
            }).toThrow()
        })
    })
    describe('removeLastNode',()=>{
        test('removes last node on a list correctly',()=>{
            let list = new SinglyLinkedList()
            list.addToBackOfTheList(1)
            list.addToBackOfTheList(2)
            list.addToBackOfTheList(3)
            list.addToBackOfTheList(4)
            let node = list.removeLastNode()
            expect(node.value).toEqual(4)
        })
        test('decreases the list size correctly',()=>{
            let list = new SinglyLinkedList()
            list.addToBackOfTheList(1)
            list.addToBackOfTheList(2)
            list.addToBackOfTheList(3)
            list.addToBackOfTheList(4)
            let node = list.removeLastNode()
            expect(list.getSize()).toEqual(3)
        })
        test('throws an error if the list is empty',()=>{
            let list = new SinglyLinkedList()
            expect(()=>{
                list.removeLastNode()
            }).toThrow()
        })
    })
})