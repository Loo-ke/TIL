function Queue() {
  const data = [];

  function enqueue(value) {
    data.push(value);
  }
  function dequeue() {
    return data.shift();
  }

  function front() {
    return data[0];
  }
  function print() {
    console.log(data);
  }

  return {
    enqueue,
    dequeue,
    front,
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
