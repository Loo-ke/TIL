function deque() {
  const data = [];
  let length = 0; // length 초기화

  function addFirst(value) {
    data.unshift(value);
    length++;
  }

  function addLast(value) {
    data.push(value);
    length++;
  }

  function removeFirst() {
    data.shift();
    length--;
  }

  function removeLast() {
    data.pop();
    length--;
  }

  function getFirst() {
    return data[0];
  }

  function getLast() {
    return data[length - 1];
  }
  function getData() {
    return data;
  }

  return {
    addFirst,
    addLast,
    removeFirst,
    removeLast,
    getFirst,
    getLast,
    getData,
  };
}

const de = deque();

de.addFirst(1);
console.log(de.getFirst());
de.addFirst(2);
console.log(de.getData());
de.addLast(3);
console.log(de.getData());
de.removeFirst();
console.log(de.getData());
de.removeLast();
console.log(de.getData());
