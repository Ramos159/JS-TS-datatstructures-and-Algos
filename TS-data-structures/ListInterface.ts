export default interface List{
     head: any
     tail: any
     size: number

     addToFrontOfTheList(value: any): void
     addToTheBackOfTheList(value: any): void
     removeFirstNode(params: void): any
     removeLastNode(params: void): any
     getNodeAtIndex(index: number): any
     removeNodeAtIndex(index: number): any
     printList(params: void): void
}