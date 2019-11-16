import Node from './binarysearchtreenode'
import Queue from '../stack&queue/queue'
import Stack from '../stack&queue/stack'

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

    public bfs = (): Array<number> => {
       let node: Node = this.root
       let queue: Queue = New Queue()
       let arr = []

       queue.push(this.root)

       while(!queue.empty()){
            arr.push(node.value)

            if(node.left){
                queue.push(node.left)
            }
            if(node.right){
                queue.push(node.right)
            }

            queue.pop()
       }
       return arr
    }

    public dfs = (arg: string): Array<number> => {
        this.checkArg(arg)

        let node: Node = this.root
        let stack: Stack = new Stack()

        if(arg.toLowerCase() === 'inorder'){
            return traverseInorder(node,stack,arr)
        }
        else if(arg.toLowerCase() === 'postorder'){
            return traversePostorder(node,stack,arr)
        }
        else if(arg.toLowerCase() === 'preorder'){
            return traversePreorder(node,stack,arr)
        }
    }

    private traverseInorder = (node: Node, arr: Array<number>) => {
        if(node.left){
            this.traverseInorder(node.left,arr)
        }
        arr.push(node.value)
        if(node.right){
            this.traverseInorder(node.left,arr)
        }
        return list 
    }

    private traversePostorder = (node: Node, arr: Array<number>) => {
        if(node.left){
            this.traverseInorder(node.left,arr)
        }
        if(node.right){
            this.traverseInorder(node.left,arr)
        }
        arr.push(node.value)
        return list 
    }

    private traversePreorder = (node: Node,arr: Array<number>) => {
        arr.push(node.value)
        if(node.left){
            this.traverseInorder(node.left,arr)
        }
        if(node.right){
            this.traverseInorder(node.left,arr)
        }
        return list 
    }

    private checkArg = (arg: string) => {
        if(arg.toLowerCase() !== 'inorder' || arg.toLowerCase() !== 'postorder' || arg.toLowerCase() !== 'preorder'){
            throw new Error('Invalid Arguement for dfs()')
        }
    }
}