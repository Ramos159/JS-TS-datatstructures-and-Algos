import SinglyLinkedList from'../lists/SinglyLinkedList'
import SingleListNode from '../lists/SingleListNode'

export default class Queue {

    private body: SinglyLinkedList

    public constructor(){
        this.body = new SinglyLinkedList()
    }

    public push = (value: number): void => {
        this.body.addToBackOfList(value)
    }

    public pop = (): number => {
        try{
            return this.body.removeFirstNode().value
        }
        catch(error){
            return null
        }
    }

    public size = (): number => {
        return this.body.getSize()
    }

    public empty = (): boolean => {
        return this.body.getSize() === 0 ? true : false
    }

    public peek = (): number => {
        return this.body.getFirstNode().value
    }

    public includes = (value: number): boolean => {
        let node = this.body.getFirstNode()
        let answer: boolean = false 

        while(node !== null){
            if(value === node.value){
                answer = true 
                node = null
            }
            else{
                node = node.next
            }
        }
        return answer
    }

}