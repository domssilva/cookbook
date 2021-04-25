// col idx, 0 = name
// col idx, 1 = price

const menu = [
  [{item:'hamburguer', price: 8.99}, {item: 'grilled meat with fries', price: 12.50}], // row1: meat options
  [{item: 'pasta al ragu', price: 8.00}, {item: '', price: 0.00}] // row2: pasta options
];

console.table(menu)
//console.log(menu[0][1].item)
