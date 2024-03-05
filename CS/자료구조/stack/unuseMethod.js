function stack() {
  const data = [];
  let i = 0;
  function push(value) {
    data[i] = value;
    i++;
  }
  function pop() {
    data[i] = null;
    i--;
  }
  function peek() {
    return data[i - 1];
  }

  return {
    pop,
    push,
    peek,
  };
}

const s = stack();

s.push(1);
console.log(s.peek());
s.push(2);
console.log(s.peek());
s.pop();
console.log(s.peek());
s.push(4);
console.log(s.peek());
