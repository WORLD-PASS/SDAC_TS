class Product{
    public ProductID : number;
    private Price : number;
    protected Category : String;

    constructor (ProductID :number,Price :number,Category:String){
        this.ProductID = ProductID;
        this.Price = Price;
        this.Category = Category;
    }
    displayData(): void{
    console.log(this.ProductID);
        console.log(this.Price);
        console.log(this.Category);
    
    }
    // }
}

class ElectronicProduct extends Product{
     constructor (ProductID :number,Price :number,Category:String){
        super(ProductID,Price,Category);

    
    }
displayInfo(): void {
    console.log(this.ProductID);
    console.log(this.Category

    );
    
    
}
}


const pro1 = new ElectronicProduct(1001,555,"electronic");
const pro2 = new ElectronicProduct(1003,5552,"electronic-soft");


pro1.displayInfo();
pro2.displayInfo();

pro1.displayData();
pro2.displayData();


// ram@ram:~/Documents/SDAC/UI/typescript$ tsc Q4.ts 
// ram@ram:~/Documents/SDAC/UI/typescript$ node Q4.js 
// 1001
// electronic
// 1003
// electronic-soft
// 1001
// 555
// electronic
// 1003
// 5552
// electronic-soft
// ram@ram:~/Documents/SDAC/UI/typescript$ 


