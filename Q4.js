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
    function Product(ProductID, Price, Category) {
        this.ProductID = ProductID;
        this.Price = Price;
        this.Category = Category;
    }
    Product.prototype.displayData = function () {
        console.log(this.ProductID);
        console.log(this.Price);
        console.log(this.Category);
    };
    return Product;
}());
var ElectronicProduct = /** @class */ (function (_super) {
    __extends(ElectronicProduct, _super);
    function ElectronicProduct(ProductID, Price, Category) {
        return _super.call(this, ProductID, Price, Category) || this;
    }
    ElectronicProduct.prototype.displayInfo = function () {
        console.log(this.ProductID);
        console.log(this.Category);
    };
    return ElectronicProduct;
}(Product));
var pro1 = new ElectronicProduct(1001, 555, "electronic");
var pro2 = new ElectronicProduct(1003, 5552, "electronic-soft");
pro1.displayInfo();
pro2.displayInfo();
pro1.displayData();
pro2.displayData();
