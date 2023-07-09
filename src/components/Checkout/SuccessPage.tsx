import React from 'react';
import classes from "./SuccessPage.module.scss";
import Button from '../UI/Button';
import BillItem from "./BillItem";

const SuccessPage = () => {
    return (
        <div className={classes.success}>
            <h3 className={classes.title}>DeliveryDetails</h3>
            <form className={classes.form}>
                <div className={classes.bill}>
                    <div className={classes.billItems}>
                        <span className={classes.title}>Bill Items</span>
                        <div className={classes.items}>
                            <BillItem title={`Kottu (500g) x 2`} amount={100} />
                        </div>
                    </div>
                    <div className={classes.summary}>
                        <BillItem title={`Sub Total`} amount={1200} />
                        <BillItem title={`Delivery Fee`} amount={200} />
                        <BillItem title={`Coupon Applied`} amount={100} />
                        <BillItem title={`Total To Pay`} amount={1300} />
                    </div>
                </div>
                <div className={classes.actions}>
                    <Button>Print Bill</Button>
                    <Button>Back to HomePage</Button>
                </div>
            </form>
        </div>
    )
}

export default SuccessPage