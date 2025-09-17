let products = [
        {SKU: "E-005", Name: "Electric Vaccum", Category: "household", Price: 100.00, Inventory: 500.00},
        {SKU: "B-018", Name: "Beats Headphones", Category: "electronics", Price: 300.00,  Inventory: 150.00},
        {SKU: "S-029", Name: "Spaghetti Sauce", Category: "groceries", Price: 5.00, Inventory: 200.00},
        {SKU: "P-500", Name: "PS5", Category: "video games", Price: 500.00, Inventory: 1000.00},
        {SKU: "L-900", Name: "Large Shirt", Category: "apparel", Price: 1000000.00, Inventory: 25.00}
];

for (let product in products) {
    let discount = 0;
    
    switch (product.catgeory) {
        case "electronics":
            discount = 0.20;
            break;
        case "apparel":
            discount = 0.15;
            break;
        case "groceries":
        case "household":
            discount = 0.10;
            break;
        default:
            discount = 0;
    }

    let promoPrice = productPrice - (product.price * discount);
    product.promoPrice = promoPrice;
}
 
console.log (promoPrice);

const customers = [
{ 
id: 1,
customerType: "regular",
couponCode: "FREESHIP",
taxRate: 0.007,
cart: [{ sku: "L-900", qty: 2 }, {sku: "P-500", qty: 1}]
},
{
    id: 2,
customerType: "student",
couponCode: "SAVE10",
taxRate: 0.004,
cart: [{sku: "S-029", qty: 1}, {sku: "B-018", qty: 1}]
},
{
    id: 3,
    customerType: "Senior",
    couponCode: "SAVE20",
    taxRate: 0.005,
    cart: [{ sku: "E-005", qty: 1}, {sku: "L-900", qty: 4}]},
];

console.log(products);
console.log (customers);






