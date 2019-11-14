import Node from './binarysearchtreenode'

export default class BinarySearchTree {
    private root: Node | null

    public constructor(){
        this.root = null
    }

    public getRoot = () => {
        return this.root
    }

    public insert = (value: number): void => {
        const node: Node = new Node(value)

        if(!this.root){
            this.root = node
        }
        else if(this.root.value > node.value){
            if(this.root.left){
                return this.insertTraverse(this.root.left,node)
            }
            else{
                this.root.left = node
            }
        }
        else if(this.root.value < node.value){
            if(this.root.right){
                return this.insertTraverse(this.root.right,node)
            }
            else{
                this.root.right = node
            }
        }
    }

    private insertTraverse = (root: Node, value: Node): void => {
        if(root.value > value.value){
            if(root.left){
                return this.insertTraverse(root.left,value)
            }
            else{
                root.left = value
            }
        }
        else{
            if(root.right){
                return this.insertTraverse(root.right,value)
            }
            else{
                root.right = value
            }
        }
    }
}