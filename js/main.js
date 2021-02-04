function* generator(i) {
  yield i;
  yield i + 10;
  yield i + 20;
  yield i + 30;
}

const gen = generator(10);

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
