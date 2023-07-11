import React, { useState } from 'react';
import Card from '../UI/Card';
import CustomSelect from '../UI/CustomSelect';
import SelectOption from '../../models/select';
import classes from "./DeliveryBox.module.scss";
import { useAppDispatch, useAppSelector } from '../../store';
import { checkoutActions } from '../../store/checkout';

const _options: SelectOption[] = [
    new Option('Delivery', 'delivery'),
    new Option('Pick Up', 'pickup'),
];
const _defaultValue: SelectOption = new Option('Delivery', 'delivery');


const DeliveryBox = () => {

    const dispatch = useAppDispatch();
    const deliveryType = useAppSelector(state => state.checkout.deliveryType);


    const onItemSelectHandler = (item: SelectOption | null) => {
        console.warn("item ::::::", item, item?.value);
        const value = item?.value;
        if (value) {
            dispatch(checkoutActions.setDeliveryType({ type: value }))
        }

    }
    return (
        <Card>
            <CustomSelect
                options={_options}
                defaultValue={_defaultValue}
                onItemSelect={onItemSelectHandler}
                className='deliveryType'
            />
            {deliveryType === 'delivery' && <div className={classes.address}>
                <a>Enter a delivery address</a>
            </div>}
            {deliveryType === 'pickup' && <div className={classes.time}>
                open : 9.00 A.M. to 10.00 P.M
            </div>}
        </Card>

    )
}

export default DeliveryBox