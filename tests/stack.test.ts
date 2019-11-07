import Stack from '../data-structures/stack&queue/stack'

let stack: Stack = new Stack()

beforeEach(()=>{
    stack = new Stack()
})

describe('Stack',()=>{
    describe('Initialization',()=>{
        test('Intialized as empty',()=>{    
            expect(stack.size()).toEqual(0)
        })
    })
    describe('Pop()',()=>{
        test('returns the last element inserted',()=>{
            stack.push(1)
            let num: number = stack.pop()

            expect(num).toEqual(1)

            stack.push(2)
            stack.push(3)

            num = stack.pop()

            expect(num).toEqual(3)
        })
        test('removes the element popped from the list',()=>{
            stack.push(1)
            stack.push(2)
            stack.push(3)

            stack.pop()

            expect(stack.includes(3)).toEqual(false)

            stack.pop()
            expect(stack.includes(2)).toEqual(false)
        })
        test('does not throw an error when it is used on an empty stack',()=>{
            expect(()=>{
                stack.pop()
            }).not.toThrow()
        })
        test('decreases the size of the list',()=>{
            stack.push(1)
            stack.push(2)
            stack.push(3)
            stack.pop()

            expect(stack.size()).toEqual(2)
        })
    })
    describe('push()',()=>{
        test('inserts value to the last position',()=>{
            stack.push(1)
            stack.push(2)
            expect(stack.pop()).toEqual(2)

            stack.push(2)
            stack.push(3)
            stack.push(4)

            expect(stack.pop()).toEqual(4)
        })
        test('increases the size of the list',()=>{
            stack.push(1)
            expect(stack.size()).toEqual(1)
        })
    })
    describe('peek()',()=>{
        test('returns the last number',()=>{
            stack.push(1)
            stack.push(2)
            stack.push(3)
            stack.push(4)

            expect(stack.peek()).toEqual(4)

            stack.push(5)

            expect(stack.peek()).toEqual(5)
        })
        test('does not remove peeked element from the list',()=>{
            stack.push(2)
            stack.push(4)
            stack.push(56)

            expect(stack.peek()).toBe(56)
            expect(stack.includes(56)).toEqual(true)
        })
    })
    describe('empty()',()=>{
        test('return a boolean to indicate if the stack is empty or not',()=>{
            expect(stack.empty()).toEqual(true)
    
            stack.push(1)
    
            expect(stack.empty()).toEqual(false)
        })
    })
    describe('includes()',()=>{
        test('returns a boolean depending if a number is found within the stack or not',()=>{
            stack.push(1)
            stack.push(3)
            stack.push(5)

            expect(stack.includes(5)).toEqual(true)
            expect(stack.includes(6)).toEqual(false)
        })
    })
    describe('size()',()=>{
        test('returns the size of the list accurately',()=>{
            stack.push(2)

            expect(stack.size()).toEqual(1)

            stack.push(4)

            expect(stack.size()).toEqual(2)

            stack.pop()
            stack.pop()

            expect(stack.size()).toEqual(0)
        })
    })
})