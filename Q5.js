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
var Product1 = /** @class */ (function () {
    function Product1(name, price) {
        this.name = name;
        this.price = price;
    }
    // Base method returning a 5% discount
    Product1.prototype.calculateDiscount = function () {
        return this.price * 0.05;
    };
    return Product1;
}());
var ElectronicProduct1 = /** @class */ (function (_super) {
    __extends(ElectronicProduct1, _super);
    function ElectronicProduct1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ElectronicProduct1.prototype.calculateDiscount = function () {
        return this.price * 0.10;
    };
    return ElectronicProduct1;
}(Product1));
var ClothingProduct = /** @class */ (function (_super) {
    __extends(ClothingProduct, _super);
    function ClothingProduct() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ClothingProduct.prototype.calculateDiscount = function () {
        return this.price * 0.15;
    };
    return ClothingProduct;
}(Product1));
var basicProduct = new Product1("Generic Notebook", 50.00);
var laptop = new ElectronicProduct1("Laptop", 1200.00);
var jacket = new ClothingProduct("Winter Jacket", 150.00);
console.log("".concat(basicProduct.name, " - Discount: $").concat(basicProduct.calculateDiscount().toFixed(2)));
console.log("".concat(laptop.name, " - Discount: $").concat(laptop.calculateDiscount().toFixed(2)));
console.log("".concat(jacket.name, " - Discount: $").concat(jacket.calculateDiscount().toFixed(2)));
