import React, { useRef, useState } from 'react'
import Button from '../UI/Button';
import classes from "./DeliveryDetails.module.scss";
import { ValidateDeliveryFormData } from "../../configs/validations";
import { ValidationError } from '../../models/checkout';
import { checkoutActions } from '../../store/checkout';
import { useAppDispatch } from '../../store';

const DeliveryDetails = () => {
    const firstNameRef = useRef<HTMLInputElement>(null);
    const lastNameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const contactNumberRef = useRef<HTMLInputElement>(null);

    const [formError, setFormError] = useState<{ type: string, message: string }>();

    const dispatch = useAppDispatch();

    const submitDetails = (event: React.FormEvent) => {
        event.preventDefault();
        const firstName = firstNameRef.current?.value;
        const lastName = lastNameRef.current?.value;
        const email = emailRef.current?.value;
        const contactNumber = contactNumberRef.current?.value;

        const formData = {
            firstName: firstName !== undefined ? firstName : '',
            lastName: lastName !== undefined ? lastName : '',
            email: email !== undefined ? email : '',
            contactNumber: contactNumber !== undefined ? Number(contactNumber) : 0
        }

        const validationError = ValidateDeliveryFormData(formData);

        if (validationError) {
            setFormError({ type: validationError.type, message: validationError.message });
        } else {
            dispatch(checkoutActions.addCheckoutData({ checkoutData: formData }))
        }


    }
    return (
        <div className={classes.details}>
            <h3 className={classes.title}>DeliveryDetails</h3>
            <form className={classes.form}>
                <div className={classes.names}>
                    <div
                        className={
                            [classes.formSection, formError && formError.type === 'firstName' ? classes.error : undefined].join(" ")
                        }>
                        <label className={classes.label}>First Name</label>
                        <input
                            ref={firstNameRef}
                            className={classes.input}
                            type="text"
                            name="firstName" />
                    </div>
                    <div className={
                        [classes.formSection, formError && formError.type === 'lastName' ? classes.error : undefined].join(" ")
                    }>
                        <label className={classes.label}>Last Name</label>
                        <input
                            ref={lastNameRef}
                            className={classes.input}
                            type="text"
                            name="lastName" />
                    </div>
                </div>
                <div className={
                    [classes.formSection, formError && formError.type === 'email' ? classes.error : undefined].join(" ")
                }>
                    <label className={classes.label}>Email</label>
                    <input
                        ref={emailRef}
                        className={classes.input}
                        type="email"
                        name="Email" />
                </div>
                <div className={
                    [classes.formSection, formError && formError.type === 'contactNumber' ? classes.error : undefined].join(" ")
                }>
                    <label className={classes.label}>Contact Number</label>
                    <input
                        ref={contactNumberRef}
                        className={classes.input}
                        type="text"
                        name="number" />
                </div>
                {formError?.message &&
                    <div className={classes.errorMessage}>
                        {formError?.message}
                    </div>
                }
                <Button onClick={submitDetails}>
                    Continue
                </Button>

            </form>
        </div>
    )
}

export default DeliveryDetails