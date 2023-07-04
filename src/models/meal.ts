import CartItem from "./cart"
class MealItem extends CartItem {
    // id:string;
    // name:string;
    // price:string;
    // amount:number;
    description:string;
    portion:string;
    tags?:string[];
    url:string;

    constructor(
        id:string,
        name:string,
        price:number,
        amount:number,
        totalPrice:number,
        description:string,
        portion:string,
        tags:string[],
        url:string
        ) {
        super(id,name,price,amount,totalPrice);
        this.description = description;
        this.portion = portion;
        this.tags = tags;
        this.url = url

    }
}

export default MealItem;