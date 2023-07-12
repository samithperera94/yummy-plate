import React, { useState } from 'react';
import Button from '../UI/Button';
import classes from "./PaymentMethod.module.scss";
import { checkoutActions } from '../../store/checkout';
import { useAppDispatch } from '../../store';

const visa = 'https://logowik.com/content/uploads/images/857_visa.jpg'
const master = 'https://www.investopedia.com/thmb/F8CKM3YkF1fmnRCU2g4knuK0eDY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/MClogo-c823e495c5cf455c89ddfb0e17fc7978.jpg'
const PaymentMethod = () => {
    const [paymentOption, setPaymentOption] = useState<string>('');
    const [formError, setFormError] = useState(false);

    const dispatch = useAppDispatch();

    const handleChange = (value: string) => {
        setFormError(false);
        setPaymentOption(value);
    }

    const paymentMethodHandler = (event: React.FormEvent) => {
        event.preventDefault();
        if (paymentOption.trim().length > 0) {
            dispatch(checkoutActions.addPaymentDetails({ type: paymentOption }));
            dispatch(checkoutActions.setOrderCompleted());
        } else {
            setFormError(true);
        }
    }
    return (
        <div className={classes.paymentMethod}>
            <h3 className={classes.title}>DeliveryDetails</h3>
            <form className={classes.form}>
                <div className={classes.formSection}
                    onClick={handleChange.bind(null, "visa")}>
                    <input
                        className={classes.input}
                        checked={paymentOption === 'visa' ? true : false}
                        type="radio"
                        id="visa"
                        readOnly={true}
                        name="visa"
                        value="visa" />
                    <label className={classes.label} htmlFor="visa">
                        <img className={classes.image} src={visa} />
                    </label>
                </div>
                <div className={classes.formSection}
                    onClick={handleChange.bind(null, "master")}>
                    <input
                        checked={paymentOption === 'master' ? true : false}
                        className={classes.input}
                        readOnly={true}
                        type="radio"
                        id="master"
                        name="master"
                        value="master" />
                    <label className={classes.label} htmlFor="master">
                        <img className={classes.image} src={master} />
                    </label>
                </div>
                {formError &&
                    <div className={classes.errorMessage}>
                        Please select a payment option
                    </div>
                }

                <Button onClick={paymentMethodHandler}>Complete</Button>
            </form>
        </div>
    )
}

export default PaymentMethod