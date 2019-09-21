import SinglyLinkedList from "./data-structures/singlyLinkedList";

const list = new SinglyLinkedList()

list.addNode(1)
list.addNode(12)
list.addNode(123)
list.addNode(1234)
console.log(list.size)
console.log(list.getNodeAtIndex(3))
