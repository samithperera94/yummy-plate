import React from 'react';
import Button from '../UI/Button';
import classes from "./PaymentMethod.module.scss";

const visa = 'https://logowik.com/content/uploads/images/857_visa.jpg'
const master = 'https://www.investopedia.com/thmb/F8CKM3YkF1fmnRCU2g4knuK0eDY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/MClogo-c823e495c5cf455c89ddfb0e17fc7978.jpg'
const PaymentMethod = () => {
    return (
        <div className={classes.paymentMethod}>
            <h3>DeliveryDetails</h3>
            <form className={classes.form}>
                <div className={classes.formSection}>
                    <input type="radio" id="visa" name="visa" value="visa" />
                    <label htmlFor="visa">
                        <img src={visa} />
                    </label>
                </div>
                <div className={classes.formSection}>
                    <input type="radio" id="master" name="master" value="master" />
                    <label htmlFor="master">
                        <img src={master} />
                    </label>
                </div>

                <Button>Complete</Button>
            </form>
        </div>
    )
}

export default PaymentMethod