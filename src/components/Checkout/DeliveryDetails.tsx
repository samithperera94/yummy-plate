import React from 'react'
import Button from '../UI/Button';
import classes from "./DeliveryDetails.module.scss";

const DeliveryDetails = () => {
    return (
        <div className={classes.details}>
            <h3 className={classes.title}>DeliveryDetails</h3>
            <form className={classes.form}>
                <div className={classes.names}>
                    <div className={classes.formSection}>
                        <label className={classes.label}>First Name</label>
                        <input className={classes.input} type="text" name="firstName" />
                    </div>
                    <div className={classes.formSection}>
                        <label className={classes.label}>Last Name</label>
                        <input className={classes.input} type="text" name="lastName" />
                    </div>
                </div>
                <div className={classes.formSection}>
                    <label className={classes.label}>Email</label>
                    <input className={classes.input} type="email" name="Email" />
                </div>
                <div className={classes.formSection}>
                    <label className={classes.label}>Contact Number</label>
                    <input className={classes.input} type="text" name="number" />
                </div>
                <Button>
                    Continue
                </Button>

            </form>
        </div>
    )
}

export default DeliveryDetails