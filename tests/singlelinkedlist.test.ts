import SinglyLinkedList from '../TS-data-structures/SinglyLinkedList'

describe('SinglyLinkedList',()=>{
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
    // test('removes the first node in the list using removeFirstNode',()=>{
    //     let list = new SinglyLinkedList()
    //     list.addToBackOfTheList(1)
    //     list.addToBackOfTheList(2)
    //     list.addToBackOfTheList(3)
    //     list.addToBackOfTheList(4)
    //     let node = list.removeFirstNode()
    //     expect(node.value).toEqual(1)
    // })
})