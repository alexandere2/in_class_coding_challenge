
let inventory = [
   
   
    {sku:"SKU-052"}, {name:"Polo Ralph Lauren Black Tee"}, {price: 50.00}, {stock: 500.00},
    {sku: "SKU-226"},{name: "NBA 2k26"}, {price: 60.00}, {stock: 120.00},
    {sku: "SKU-150"},{name: "Digital Cameras"},{price: 250.00},{stock: 350.00},
    {sku: "SKU-200"},{name: "Blue Light Glasses"}, {price: 20.00},{stock: 150.00}
];

inventory.forEach(obj =>console.log (`SKU: ${obj.sku}`));
inventory.forEach(obj =>console.log (`Name: ${obj.name}`));
inventory.forEach(obj =>console.log (`Price: ${obj.price}`));
inventory.forEach(obj =>console.log (`Stock: ${obj.stock}`));

console.log (inventory.forEach(obj =>console.log (`SKU: ${obj.sku}`)));
console.log (inventory.forEach(obj =>console.log (`Name: ${obj.name}`)));
console.log (inventory.forEach(obj =>console.log (`Price: ${obj.price}`)));
console.log (inventory.forEach(obj =>console.log (`Stock: ${obj.stock}`)));

new_object = {sku: "SKU-667"}, {name: "67 Water",}, {price: 6.70}, {stock: 67.00};
inventory.push(new_object);
console.log (inventory);

inventory.shift();
console.log(inventory);




