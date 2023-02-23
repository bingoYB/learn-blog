class MaxQueue {
    stack: number[]
    maxStack: number[]

    constructor() {
        this.stack = []
        this.maxStack = []
    }

    max_value(): number {
        if (this.stack.length)
            return this.maxStack[0]

        return -1;
    }

    push_back(value: number): void {
        this.stack.push(value);

        while (this.maxStack.length && value > this.maxStack[this.maxStack.length - 1]) {
            this.maxStack.pop();
        }

        while (this.maxStack.length < this.stack.length) {
            this.maxStack.push(value);
        }
    }

    pop_front(): number {
        if (this.stack.length) {
            this.maxStack.shift();
            return this.stack.shift() as number;
        }
        return -1;
    }
}

/**
 * Your MaxQueue object will be instantiated and called as such:
 * var obj = new MaxQueue()
 * var param_1 = obj.max_value()
 * obj.push_back(value)
 * var param_3 = obj.pop_front()
 */