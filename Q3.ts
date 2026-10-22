class Product{
    static companyName : String="TechStore";

    displayCompany(){
        console.log("Company_Name:"+this.displayCompany);
        
    }
    productID:number;
     name: String;
     price :number;

     constructor(productID:number, name: String, price :number){
        this.name = name;
        this.productID = productID;
        this.price = price;
     }

     displayInfo(){
        
        
        console.log("ProductID: "+this.productID);
        console.log("Name:"+this.name);
        console.log("Price: "+this.price);
        
        
        
        
     }
}

const Product1 = new Product(1001,"tom",24.54);
const Product2 = new Product(1002,"tim",28.54);

Product1.displayInfo();
Product2.displayInfo();
Product.companyName;

// ram@ram:~/Documents/SDAC/UI/typescript$ tsc Q3.ts 
// ram@ram:~/Documents/SDAC/UI/typescript$ node Q3.js 
// ProductID: 1001
// Name:tom
// Price: 24.54
// ProductID: 1002
// Name:tim
// Price: 28.54
