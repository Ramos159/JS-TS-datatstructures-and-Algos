import SingleListNode from "./SingleListNode";

export default interface List{
    head: SingleListNode | null
    tail: SingleListNode | null
    size: number
     addToFrontOfTheList(value: any): void
     addToTheBackOfTheList(value: any): void
     removeFirstNode(params: void): SingleListNode
     removeLastNode(params: void): SingleListNode
     getFirstNode(params: void): SingleListNode
     getLastNode(params: void): SingleListNode
     getNodeAtIndex(index: number): SingleListNode
     removeNodeAtIndex(index: number): SingleListNode
     printList(params: void): void
}