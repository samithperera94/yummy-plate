class CartItem {
    id:string;
    name:string;
    price:string;
    amount:number;

    constructor(id:string,name:string,price:string,amount:number){
        this.id = id;
        this.name = name
        this.price = price
        this.amount = amount
    }
}

export default CartItem;