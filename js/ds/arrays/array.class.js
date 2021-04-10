// arrays are just objects in javascript

class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length += 1
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }
}

const arr = new MyArray();
arr.push('Domenique');
arr.push('Doga');
arr.push('Da vinci');
arr.pop();

console.log(arr);
