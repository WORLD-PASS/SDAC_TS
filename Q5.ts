class Product1 {
    name: string;
    price: number;

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }

    calculateDiscount(): number {
        return this.price * 0.05;
    }
}

class ElectronicProduct1 extends Product1 {
    calculateDiscount(): number {
        return this.price * 0.10;
    }
}

class ClothingProduct extends Product1 {
    calculateDiscount(): number {
        return this.price * 0.15;
    }
}

const basicProduct = new Product1("Generic Notebook", 50.00);
const laptop = new ElectronicProduct1("Laptop", 1200.00);
const jacket = new ClothingProduct("Winter Jacket", 150.00);

console.log(`${basicProduct.name} - Discount: $${basicProduct.calculateDiscount().toFixed(2)}`);
console.log(`${laptop.name} - Discount: $${laptop.calculateDiscount().toFixed(2)}`);
console.log(`${jacket.name} - Discount: $${jacket.calculateDiscount().toFixed(2)}`);



// ram@ram:~/Documents/SDAC/UI/typescript$ tsc Q5.ts 
// ram@ram:~/Documents/SDAC/UI/typescript$ node Q5.js 
// Generic Notebook - Discount: $2.50
// Laptop - Discount: $120.00
// Winter Jacket - Discount: $22.50
// ram@ram:~/Documents/SDAC/UI/typescript$ 