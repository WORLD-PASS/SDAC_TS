class Products {
    productID : number;
    name : string;
    price : number;
    category : String;

    constructor (productID:number,name : string, price : number,category : String){
        this.productID = productID;
        this.name = name;
        this.price = price;
        this.category=category;

    }


    displayinfo():void{
        console.log('ProductID : '+this.productID);
        console.log('Product_Name:'+this.name);
        console.log(this.price);
        console.log("category: "+this.category);
        
        
        
        
    }
}



const product1 = new Products(1001,"tom",25.90,"electromic");
const product2 = new Products(1002,"tim",10.90,"electromic");
const product3 = new Products(1003,"jerry",215.90,"electromic");
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

// ram@ram:~/Documents/SDAC/UI/typescript$ tsc app.ts 
// ram@ram:~/Documents/SDAC/UI/typescript$ node app.js 
// ProductID : 1001
// Product_Name:tom
// 25.9
// category: electromic
// ProductID : 1002
// Product_Name:tim
// 10.9
// category: electromic
// ProductID : 1003
// Product_Name:jerry
// 215.9
// category: electromic
// ram@ram:~/Documents/SDAC/UI/typescript$ 
