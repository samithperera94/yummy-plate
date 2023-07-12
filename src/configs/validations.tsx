import DeliveryData, { ValidationError } from "../models/checkout";

export const ValidateEmail = (mail: string) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
        return (true)
    }
    return (false)
}

export const ValidateContactNumber = (contactNumber: number) => {
    if (contactNumber.toLocaleString().length === 10) {
        return (true)
    }
    return (false)
}

export const ValidateDeliveryFormData = (data: DeliveryData) => {
    const { firstName, lastName, email, contactNumber } = data;
    if (firstName.trim().length === 0) {
        return new ValidationError("firstName", "Please enter First Name")
    }
    if (lastName.trim().length === 0) {
        return new ValidationError("lastName", "Please enter Last Name")
    }
    if (lastName.trim().length === 0 || !ValidateEmail(email)) {
        return new ValidationError("email", "Please enter a valid Email")
    }
    if (contactNumber.toString().length === 0 || !ValidateContactNumber(contactNumber)) {
        return new ValidationError("contactNumber", "Please enter a valid Contact Number")
    }
}

