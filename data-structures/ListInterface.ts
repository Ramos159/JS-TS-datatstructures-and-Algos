import Node from "./NodeInterface";

export default interface List{
     addToFrontOfTheList(value: any): void
     addToBackOfTheList(value: any): void
     removeFirstNode(params: void): Node
     removeLastNode(): Node
     getFirstNode(): Node
     getLastNode(): Node
     getNodeAtIndex(index: number): Node
     removeNodeAtIndex(index: number): Node
     insertNodeAtIndex(index: number, value: number): void
     printList(): void
     getSize(): number
}