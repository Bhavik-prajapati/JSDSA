
class Queue {
  constructor() {
    this.items = [];
  }
  enqueue(element) {
    this.items.push(element);
  }
  dequeue() {
    this.items.shift();
  }
  isempty() {
    return this.items.length === 0;
  }
  peek() {
    if (!this.isempty) {
      return this.items[0];
    }
    return null;
  }
  print() {
    console.log(this.items.toString());
  }
}
const q1 = new Queue();
console.log(q1.isempty());
q1.enqueue(30);
q1.enqueue(20);
q1.enqueue(10);
q1.enqueue(10);
q1.enqueue(50);
q1.print();
q1.dequeue();
q1.print();
