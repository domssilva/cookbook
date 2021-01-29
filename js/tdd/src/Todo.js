const uuid = require('uuid');

class Todo {
  constructor({text, when}) {
    this.text = text;
    this.when = when;
    this.status = '';
    this.id = uuid.v4();
  }

  isValid() {
    // 0 - "" - false = falsy value
    // !!{value} = converte valor para bool
    return !!this.text;
  }
}

module.exports = Todo

