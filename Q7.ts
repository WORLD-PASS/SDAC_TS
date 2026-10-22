interface IProduct {
    productID: number;
    name: string;
    price: number;
    category: string;
}

class Product2 implements IProduct {
    productID: number;
    name: string;
    price: number;
    category: string;

    constructor(productID: number, name: string, price: number, category: string) {
        this.productID = productID;
        this.name = name;
        this.price = price;
        this.category = category;
    }
}

const prod1 = new Product2(301, "Wireless Earbuds", 59.99, "Electronics");
const prod2 = new Product2(302, "Yoga Mat", 25.00, "Fitness");

function printProduct(product2: IProduct): void {
    console.log(`Product ID: ${product2.productID}`);
    console.log(`Name: ${product2.name}`);
    console.log(`Price: $${product2.price.toFixed(2)}`);
    console.log(`Category: ${product2.category}`);
}

printProduct(prod1);
printProduct(prod2);


// ram@ram:~/Documents/SDAC/UI/typescript$ tsc Q7.ts 
// ram@ram:~/Documents/SDAC/UI/typescript$ node Q7.js 
// Product ID: 301
// Name: Wireless Earbuds
// Price: $59.99
// Category: Electronics
// Product ID: 302
// Name: Yoga Mat
// Price: $25.00
// Category: Fitness
// ram@ram:~/Documents/SDAC/UI/typescript$ 
