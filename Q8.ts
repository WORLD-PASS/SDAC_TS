function displayProducts<T>(items: T[]): void {
    console.log("Displaying items:");
    items.forEach((item, index) => {
        console.log(`[${index + 1}]: ${item}`);
    });
    console.log("------------------------");
}

function getFirstElement<T>(items: T[]): T {
    return items[0];
}

const productNames: string[] = ["Wireless Mouse", "Mechanical Keyboard", "Monitor"];
const productPrices: number[] = [29.99, 89.00, 249.99];
const productIDs: number[] = [101, 102, 103];

displayProducts(productNames);

displayProducts(productPrices);

displayProducts(productIDs);

console.log(`First Product Name: ${getFirstElement(productNames)}`);
console.log(`First Product Price: $${getFirstElement(productPrices)}`);
console.log(`First Product ID: ${getFirstElement(productIDs)}`);


// ram@ram:~/Documents/SDAC/UI/typescript$ tsc Q8.ts 
// ram@ram:~/Documents/SDAC/UI/typescript$ node Q8.js 
// Displaying items:
// [1]: Wireless Mouse
// [2]: Mechanical Keyboard
// [3]: Monitor
// ------------------------
// Displaying items:
// [1]: 29.99
// [2]: 89
// [3]: 249.99
// ------------------------
// Displaying items:
// [1]: 101
// [2]: 102
// [3]: 103
// ------------------------
// First Product Name: Wireless Mouse
// First Product Price: $29.99
// First Product ID: 101
// ram@ram:~/Documents/SDAC/UI/typescript$ 