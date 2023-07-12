
// interface DeliveryData {
//     firstName:string;
//     lastName:string;
//     email:string;
//     contactNumber:string;    
// }


class DeliveryData {
    firstName:string;
    lastName:string;
    email:string;
    contactNumber:number;

    constructor(firstName:string,lastName:string,email:string,contactNumber:number){
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.contactNumber = contactNumber;
    }
}

export default DeliveryData;

export interface BillData {
    subTotal:number;
    deliveryFee:number;
    couponAmount:number;
    totalToPay:number;
}

export class ValidationError {
    type: string;
    message: string;

    constructor(type: string, message: string) {
        this.type = type;
        this.message = message
    }
}