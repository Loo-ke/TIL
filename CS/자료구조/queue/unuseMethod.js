function Queue() {
  const data = [];
  let front = 0;
  let rear = 0;
  function enqueue(value) {
    data[rear] = value;
    rear++;
  }
  function dequeue() {
    const value = data[front];
    data[front] = undefined;
    front++;
    return value;
  }
  function print() {
    console.log(data);
  }
  return {
    enqueue,
    dequeue,
    print,
  };
}

const myQueue = Queue();

myQueue.enqueue(1);
myQueue.print();
myQueue.enqueue(2);
myQueue.print();
myQueue.enqueue(3);
myQueue.print();
myQueue.dequeue();
myQueue.print();
myQueue.dequeue();
myQueue.print();
