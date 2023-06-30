import React, { useState } from 'react';
import Card from '../UI/Card';
import CustomSelect from '../UI/CustomSelect';
import SelectOption from '../../models/select';
import classes from "./DeliveryBox.module.scss";


const _options: SelectOption[] = [
    new Option('Delivery', 'delivery'),
    new Option('Pick Up', 'pickup'),
];
const _defaultValue: SelectOption = new Option('Delivery', 'delivery');


const DeliveryBox = () => {



    const onItemSelectHandler = (item: SelectOption | null) => {
        console.warn("item ::::::", item)
    }
    return (
        <Card>
            <CustomSelect
                options={_options}
                defaultValue={_defaultValue}
                onItemSelect={onItemSelectHandler}
                className='deliveryType'
            />
            <div className={classes.address}>
                <a>Enter a delivery address</a>
            </div>
        </Card>

    )
}

export default DeliveryBox