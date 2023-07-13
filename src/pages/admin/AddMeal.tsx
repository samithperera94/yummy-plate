import React, { useState, useRef } from 'react';
import classes from "./AddMeal.module.scss";
import Button from '../../components/UI/Button';
import Card from '../../components/UI/Card';
import CustomSelect from '../../components/UI/CustomSelect';
import SelectOption from '../../models/select';
import axios from 'axios';

const _options: SelectOption[] = [
    new Option('Spicy', 'spicy'),
    new Option('Non Veg', ' non-veg'),
    new Option('Sweat', 'sweat'),
    new Option('Salty', 'salty'),
    new Option('Crunchy', 'crunchy'),
    new Option('Healthy', 'healthy'),
    new Option('Veg', 'veg'),
    new Option('Creamhy', 'creamy'),
];
const _defaultValue: SelectOption = new Option('Spicy', 'spicy');

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
    const [tags, setTags] = useState<string[]>([]);

    const submitDetails = (event: React.FormEvent) => {
        event.preventDefault();
        //need to do the validations
        const id = new Date();
        const mealData = {
            id: id.toString(),
            name: mealNameRef.current?.value,
            price: priceRef.current?.value,
            amount: 1,
            totalPrice: priceRef.current?.value,
            description: descriptionRef.current?.value,
            portion: portionRef.current?.value,
            tags: tags,
            url: urlRef.current?.value
        }

        const baseUrl = 'https://react-http-d7746-default-rtdb.asia-southeast1.firebasedatabase.app/meal.json'
        axios.post(baseUrl, mealData).then((response) => {
            console.log(response.data);
        }).catch((error) => {
            throw new Error("Sending Meak Data Failed!")
        });
    }

    const onItemSelectHandler = (items: string[]) => {
        setTags(items)
    }
    return (

        <div className={classes.addMeal}>
            <Card className='addMealForm'>
                <h2>AddMeal</h2>
                <form className={classes.form}>
                    <div
                        className={
                            [classes.formSection, formError && formError.type === 'name' ? classes.error : undefined].join(" ")
                        }>
                        <label className={classes.label}>Meal Name</label>
                        <input
                            ref={mealNameRef}
                            className={classes.input}
                            type="text" />

                    </div>
                    <div className={
                        [classes.formSection, formError && formError.type === 'price' ? classes.error : undefined].join(" ")
                    }>
                        <label className={classes.label}>Price</label>
                        <input
                            ref={priceRef}
                            className={classes.input}
                            type="text" />
                    </div>
                    <div className={
                        [classes.formSection, formError && formError.type === 'description' ? classes.error : undefined].join(" ")
                    }>
                        <label className={classes.label}>Description</label>
                        <input
                            ref={descriptionRef}
                            className={classes.input}
                            type="text" />
                    </div>
                    <div className={
                        [classes.formSection, formError && formError.type === 'tags' ? classes.error : undefined].join(" ")
                    }>
                        <label className={classes.label}>Select Tags</label>
                        <CustomSelect
                            options={_options}
                            defaultValue={_defaultValue}
                            onMultiItemSelect={onItemSelectHandler}
                            className='deliveryType'
                            isMulti={true}
                        />
                    </div>

                    <div className={
                        [classes.formSection, formError && formError.type === 'portion' ? classes.error : undefined].join(" ")
                    }>
                        <label className={classes.label}>Portion</label>
                        <input
                            ref={portionRef}
                            className={classes.input}
                            type="text" />
                    </div>
                    <div className={
                        [classes.formSection, formError && formError.type === 'url' ? classes.error : undefined].join(" ")
                    }>
                        <label className={classes.label}>Image URL</label>
                        <input
                            ref={urlRef}
                            className={classes.input}
                            type="text" />
                    </div>
                    {formError?.message &&
                        <div className={classes.errorMessage}>
                            {formError?.message}
                        </div>
                    }
                    <Button onClick={submitDetails}>
                        Add Meal
                    </Button>

                </form>
            </Card>

        </div>


    )
}

export default AddMeal