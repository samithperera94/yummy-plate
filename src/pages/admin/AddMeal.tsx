import React, { useState, useRef } from 'react';
import classes from "./AddMeal.module.scss";
import Button from '../../components/UI/Button';
import Card from '../../components/UI/Card';

const AddMeal = () => {

    // id:string,
    //     name:string,
    //     price:number,
    //     amount:number,
    //     totalPrice:number,
    //     description:string,
    //     portion:string,
    //     tags:string[],
    //     url:string
    const mealNameRef = useRef<HTMLInputElement>(null);
    const priceRef = useRef<HTMLInputElement>(null);
    const descriptionRef = useRef<HTMLInputElement>(null);
    const portionRef = useRef<HTMLInputElement>(null);
    const urlRef = useRef<HTMLInputElement>(null);


    const [formError, setFormError] = useState<{ type: string, message: string }>();

    const submitDetails = (event: React.FormEvent) => {
        event.preventDefault();
    }
    return (

        <div className={classes.addMeal}>
            <Card className='addMealForm'>
                <h2>AddMeal</h2>
                <form className={classes.form}>
                    <div
                        className={
                            [classes.formSection, formError && formError.type === 'firstName' ? classes.error : undefined].join(" ")
                        }>
                        <label className={classes.label}>First Name</label>
                        <input
                            ref={mealNameRef}
                            className={classes.input}
                            type="text"
                            name="firstName" />
                    </div>
                    <div className={
                        [classes.formSection, formError && formError.type === 'lastName' ? classes.error : undefined].join(" ")
                    }>
                        <label className={classes.label}>Last Name</label>
                        <input
                            ref={priceRef}
                            className={classes.input}
                            type="text"
                            name="lastName" />
                    </div>
                    <div className={
                        [classes.formSection, formError && formError.type === 'email' ? classes.error : undefined].join(" ")
                    }>
                        <label className={classes.label}>Email</label>
                        <input
                            ref={descriptionRef}
                            className={classes.input}
                            type="text"
                            name="Email" />
                    </div>
                    <div className={
                        [classes.formSection, formError && formError.type === 'contactNumber' ? classes.error : undefined].join(" ")
                    }>
                        <label className={classes.label}>Contact Number</label>
                        <input
                            ref={portionRef}
                            className={classes.input}
                            type="text"
                            name="number" />
                    </div>
                    <div className={
                        [classes.formSection, formError && formError.type === 'contactNumber' ? classes.error : undefined].join(" ")
                    }>
                        <label className={classes.label}>Contact Number</label>
                        <input
                            ref={urlRef}
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
            </Card>

        </div>


    )
}

export default AddMeal