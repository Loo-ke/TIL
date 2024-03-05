function stack() {
  const data = [];

  function push(value) {
    return data.push(value);
  }
  function pop() {
    return data.pop();
  }
  function peek() {
    return data[data.length - 1];
  }
  return { push, pop, peek };
}

const s = stack();

s.push(1);
console.log(s.peek());
s.push(2);
console.log(s.peek());
s.push(3);
console.log(s.peek());
s.pop();
console.log(s.peek());
s.pop();
console.log(s.peek());
s.pop();
console.log(s.peek());
