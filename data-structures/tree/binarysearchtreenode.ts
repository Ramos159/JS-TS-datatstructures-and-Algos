export default class BinarySearchTreeNode {
    public value: number | null
    public left: BinarySearchTreeNode | null
    public right: BinarySearchTreeNode | null

    public constructor(value: number){
        this.value = value
        this.left = null
        this.right = null
    }
}