var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Product = /** @class */ (function () {
    function Product(productID, name, price) {
        this.productID = productID;
        this.name = name;
        this.price = price;
    }
    Product.prototype.displayInfo = function () {
        console.log("Product ID: ".concat(this.productID));
        console.log("Name: ".concat(this.name));
        console.log("Base Price: $".concat(this.price.toFixed(2)));
        console.log("Final Price: $".concat(this.calculateFinalPrice().toFixed(2)));
        console.log("------------------------");
    };
    return Product;
}());
var ElectronicProduct = /** @class */ (function (_super) {
    __extends(ElectronicProduct, _super);
    function ElectronicProduct() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ElectronicProduct.prototype.calculateFinalPrice = function () {
        return this.price * 0.90;
    };
    return ElectronicProduct;
}(Product));
var GroceryProduct = /** @class */ (function (_super) {
    __extends(GroceryProduct, _super);
    function GroceryProduct() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GroceryProduct.prototype.calculateFinalPrice = function () {
        return this.price * 0.95;
    };
    return GroceryProduct;
}(Product));
var laptop = new ElectronicProduct(401, "Gaming Laptop", 1500.00);
var organicMilk = new GroceryProduct(402, "Organic Milk", 4.50);
laptop.displayInfo();
organicMilk.displayInfo();
