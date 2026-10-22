function displayProducts(items) {
    console.log("Displaying items:");
    items.forEach(function (item, index) {
        console.log("[".concat(index + 1, "]: ").concat(item));
    });
    console.log("------------------------");
}
function getFirstElement(items) {
    return items[0];
}
var productNames = ["Wireless Mouse", "Mechanical Keyboard", "Monitor"];
var productPrices = [29.99, 89.00, 249.99];
var productIDs = [101, 102, 103];
displayProducts(productNames);
displayProducts(productPrices);
displayProducts(productIDs);
console.log("First Product Name: ".concat(getFirstElement(productNames)));
console.log("First Product Price: $".concat(getFirstElement(productPrices)));
console.log("First Product ID: ".concat(getFirstElement(productIDs)));
