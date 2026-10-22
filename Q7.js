var Product2 = /** @class */ (function () {
    function Product2(productID, name, price, category) {
        this.productID = productID;
        this.name = name;
        this.price = price;
        this.category = category;
    }
    return Product2;
}());
var prod1 = new Product2(301, "Wireless Earbuds", 59.99, "Electronics");
var prod2 = new Product2(302, "Yoga Mat", 25.00, "Fitness");
function printProduct(product2) {
    console.log("Product ID: ".concat(product2.productID));
    console.log("Name: ".concat(product2.name));
    console.log("Price: $".concat(product2.price.toFixed(2)));
    console.log("Category: ".concat(product2.category));
}
printProduct(prod1);
printProduct(prod2);
