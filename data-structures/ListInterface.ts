import Node from "./NodeInterface";

export default interface List{
     addToFrontOfTheList(value: any): void
     addToBackOfTheList(value: any): void
     removeFirstNode(params: void): Node
     removeLastNode(params: void): Node
     getFirstNode(params: void): Node
     getLastNode(params: void): Node
     getNodeAtIndex(index: number): Node
     removeNodeAtIndex(index: number): Node
     printList(params: void): void
}