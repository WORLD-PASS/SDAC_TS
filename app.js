var Products = /** @class */ (function () {
    function Products(productID, name, price, category) {
        this.productID = productID;
        this.name = name;
        this.price = price;
        this.category = category;
    }
    Products.prototype.displayinfo = function () {
        console.log('ProductID : ' + this.productID);
        console.log('Product_Name:' + this.name);
        console.log(this.price);
        console.log("category: " + this.category);
    };
    return Products;
}());
var product1 = new Products(1001, "tom", 25.90, "electromic");
var product2 = new Products(1002, "tim", 10.90, "electromic");
var product3 = new Products(1003, "jerry", 215.90, "electromic");
product1.displayinfo();
product2.displayinfo();
product3.displayinfo();
// // outout
// ram@ram:~/Documents/SDAC/UI/typescript$ tsc app.ts 
// ram@ram:~/Documents/SDAC/UI/typescript$ node app.js 
// ProductID : 1001
// Product_Name:tom
// 25.9
// category: electromic
// ram@ram:~/Documents/SDAC/UI/typescript$ 
