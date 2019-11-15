import Node from './binarysearchtreenode'

export default class BinarySearchTree {
    private root: Node | null

    public constructor(){
        this.root = null
    }

    public getRoot = (): Node => {
        return this.root
    }

    public insert = (value: number): boolean => {
        const node: Node = new Node(value)

        if(!this.root){
            this.root = node
            return true
        }
        else if(this.root.value > node.value){
            if(this.root.left){
                return this.insertTraverse(this.root.left,node)
            }
            else{
                this.root.left = node
                return true
            }
        }
        else if(this.root.value < node.value){
            if(this.root.right){
                return this.insertTraverse(this.root.right,node)
            }
            else{
                this.root.right = node
                return true
            }
        }
        else if(this.root.value === node.value){
            return false
        }
    }

    private insertTraverse = (root: Node, node: Node): boolean => {
        if(root.value > node.value){
            if(root.left){
                return this.insertTraverse(root.left,node)
            }
            else{
                root.left = node
                return true
            }
        }
        else if(root.value < node.value){
            if(root.right){
                return this.insertTraverse(root.right,node)
            }
            else{
                root.right = node
                return true
            }
        }
        else if(root.value === node.value){
            return false
        }
    }

    public includes = (value: number,node: Node = this.root): boolean => {
        if(node.value === value){
            return true
        }
        else if(node.value > value){
            if(node.left){
                return this.includes(value,node.left)
            }
            else{
                return false 
            }
        }
        else if(node.value < value){
            if(node.right){
                return this.includes(value,node.right)
            }
            else{
                return false
            }
        }
    }
}