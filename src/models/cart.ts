class CartItem {
    id:string;
    name:string;
    price:number;
    totalPrice:number;
    amount:number;

    constructor(id:string,name:string,price:number,amount:number,totalPrice:number){
        this.id = id;
        this.name = name;
        this.price = price;
        this.totalPrice = totalPrice;
        this.amount = amount;
    }
}

export default CartItem;