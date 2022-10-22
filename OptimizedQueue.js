class Queue {
  constructor() {
    this.items = {};
    this.rear = 0;
    this.front = 0;
  }
  enqueue(element) {
    this.items[this.rear] = element;
    this.rear++;
  }
  dequeue() {
    const items = this.items[this.front];
    delete this.items[this.front];
    this.front++;
    return items;
  }
  isempty() {
    return this.rear - this.front === 0;
  }
  peek() {
    return this.items[this.front];
  }
  size() {
    return this.rear - this.front;
  }
  print() {
    console.log(this.items);
  }
}

const q1 = new Queue();
console.log(q1.isempty());

q1.enqueue(10);
q1.enqueue(20);
q1.enqueue(30);
q1.print();
