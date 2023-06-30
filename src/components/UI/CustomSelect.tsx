import React, { useState } from 'react';
import classes from './CustomSelect.module.scss';
import Select from 'react-select';
import SelectOption from '../../models/select';

// interface selectOption {
//     value: string | number,
//     label: string
// }


interface PropType {
    options: SelectOption[],
    defaultValue: SelectOption,
    onItemSelect: (selectedItem: SelectOption | null) => void,
    className: string
}
const CustomSelect = ({ options, defaultValue, onItemSelect, className }: PropType) => {
    const onChangeHandler = (option: SelectOption | null) => {
        onItemSelect(option);
    }
    return (
        <div className="App">
            <Select
                options={options}
                defaultValue={defaultValue}
                onChange={onChangeHandler}
                className={[classes[className], classes.customSelect].join(",")}
                isDisabled={false}
            />
        </div>
    )
}

export default CustomSelect