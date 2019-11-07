import Queue from '../data-structures/stack&queue/queue'

let queue: Queue = new Queue

beforeEach(()=>{
    queue = new Queue()
})

describe('Queue',()=>{
    describe('Initialization',()=>{
        test('Initialized as empty',()=>{
            expect(queue.size()).toEqual(0)
        })
    })
    describe('size()',()=>{
        test('accurately returns how many elements are in the queue',()=>{
            queue.push(1)
            queue.push(1)
            queue.push(1)
            queue.push(1)

            expect(queue.size()).toEqual(4)
        })
    })
    describe('push()',()=>{
        test('pushes value to the last position',()=>{
            queue.push(1)
            queue.push(2)
            queue.push(3)
            queue.push(4)
            queue.push(5)

            expect(queue.pop()).toEqual(1)

            queue.pop()
            queue.pop()
            queue.pop()

            expect(queue.pop()).toEqual(5)
        })
        test('increases the size of the list accurately',()=>{
            queue.push(1)
            queue.push(2)

            expect(queue.size()).toEqual(2)

            queue.push(3)
            queue.push(4)
            queue.push(5)

            expect(queue.size()).toEqual(5)
        })
    })
    describe('pop()',()=>{
        test('return the first element in the queue',()=>{
            queue.push(2)
            queue.push(34)
            queue.push(234)

            expect(queue.pop()).toEqual(2)
        })
        test('reduces size of the list',()=>{
            queue.push(1)

            expect(queue.size()).toEqual(1)

            queue.pop()

            expect(queue.size()).toEqual(0)
        })
        test('does not an error when used on a empty queue',()=>{
            expect(()=>{
                queue.pop()
            }).not.toThrow()
        })
        test('returns null on an empty list',()=>{
            expect(queue.pop()).toEqual(null)
        })
    })
    describe('empty()',()=>{
        test('returns true if queue is empty',()=>{
            expect(queue.empty()).toEqual(true)
        })
        test('returns false if queue is not empty',()=>{
            queue.push(1)
            expect(queue.empty()).toEqual(false)
        })
    })
    describe('peek()',()=>{
        test('returns the element next up',()=>{
            queue.push(1)
            queue.push(3)
            queue.push(56)

            expect(queue.peek()).toEqual(1)
        })
        test('does not remove the element from the queue',()=>{
            queue.push(1)
            queue.push(3)
            queue.push(56)

            queue.peek()

            expect(queue.includes(1)).toEqual(true)
        })
        test('keeps size intact',()=>{
            queue.push(1)
            queue.push(3)
            queue.push(56)

            queue.peek()

            expect(queue.size()).toEqual(3)
        })
    })
    describe('includes()',()=>{
        test('returns false if the queue doesnt contain the value',()=>{
            queue.push(1)
            queue.push(3)
            queue.push(56)
            queue.push(5)

            expect(queue.includes(56)).toEqual(true)
        })
        test('returns true if the queue does continue the value',()=>{
            queue.push(1)
            queue.push(3)
            queue.push(56)
            queue.push(5)

            expect(queue.includes(99)).toEqual(false)
        })
    })
})