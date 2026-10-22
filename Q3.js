var Product = /** @class */ (function () {
    function Product(productID, name, price) {
        this.name = name;
        this.productID = productID;
        this.price = price;
    }
    Product.prototype.displayCompany = function () {
        console.log("Company_Name:" + this.displayCompany);
    };
    Product.prototype.displayInfo = function () {
        console.log("ProductID: " + this.productID);
        console.log("Name:" + this.name);
        console.log("Price: " + this.price);
    };
    Product.companyName = "TechStore";
    return Product;
}());
var Product1 = new Product(1001, "tom", 24.54);
var Product2 = new Product(1002, "tim", 28.54);
Product1.displayInfo();
Product2.displayInfo();
Product.companyName;
