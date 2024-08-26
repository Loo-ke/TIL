function cola(a, b, n) {
  let total = 0;
  while (n >= a) {
    total += Math.floor(n / a) * b;
    n = Math.floor(n / a) * b + (n % a);
  }

  return total;
}

console.log("!!", cola(2, 1, 20));
console.log(cola(3, 1, 20));
