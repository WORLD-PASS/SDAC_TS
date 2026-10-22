abstract class Product {
    productID: number;
    name: string;
    price: number;

    constructor(productID: number, name: string, price: number) {
        this.productID = productID;
        this.name = name;
        this.price = price;
    }

    abstract calculateFinalPrice(): number;

    displayInfo(): void {
        console.log(`Product ID: ${this.productID}`);
        console.log(`Name: ${this.name}`);
        console.log(`Base Price: $${this.price.toFixed(2)}`);
        console.log(`Final Price: $${this.calculateFinalPrice().toFixed(2)}`);
        console.log("------------------------");
    }
}

class ElectronicProduct extends Product {
    calculateFinalPrice(): number {
        return this.price * 0.90;
    }
}

class GroceryProduct extends Product {
    calculateFinalPrice(): number {
        return this.price * 0.95;
    }
}

const laptop = new ElectronicProduct(401, "Gaming Laptop", 1500.00);
const organicMilk = new GroceryProduct(402, "Organic Milk", 4.50);

laptop.displayInfo();
organicMilk.displayInfo();

// ram@ram:~/Documents/SDAC/UI/typescript$ node Q6.js 
// Product ID: 401
// Name: Gaming Laptop
// Base Price: $1500.00
// Final Price: $1350.00
// ------------------------
// Product ID: 402
// Name: Organic Milk
// Base Price: $4.50
// Final Price: $4.27
// ------------------------
// ram@ram:~/Documents/SDAC/UI/typescript$ 