
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
    contactNumber:string;

    constructor(firstName:string,lastName:string,email:string,contactNumber:string){
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.contactNumber = contactNumber;
    }
}

export default DeliveryData;