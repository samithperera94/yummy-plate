import React, { useState } from 'react';
import classes from './CustomSelect.module.scss';
import Select from 'react-select';
import SelectOption from '../../models/select';
import makeAnimated from 'react-select/animated';



// interface selectOption {
//     value: string | number,
//     label: string
// }
const animatedComponents = makeAnimated();


interface PropType {
    options: SelectOption[],
    defaultValue: SelectOption,
    onItemSelect?: (selectedItem: SelectOption | null) => void,
    onMultiItemSelect?: ((items: string[]) => void),
    className: string,
    isMulti: boolean
}
const CustomSelect = ({ options, defaultValue, onItemSelect, onMultiItemSelect, className, isMulti }: PropType) => {
    const onChangeHandler = (option: SelectOption | null) => {
        if (onItemSelect) {
            onItemSelect(option);
        }
    }
    const onChangeHandlerMulti = (options: any) => {
        const optionsArray: string[] = [];
        options.map((opt: any) => {
            optionsArray.push(opt.attributes[0].value)
        });
        if (onMultiItemSelect) {
            onMultiItemSelect(optionsArray)

        }
    }
    return (
        <div className="App">
            {isMulti &&
                <Select
                    isMulti
                    options={options}
                    defaultValue={defaultValue}
                    components={animatedComponents}
                    onChange={onChangeHandlerMulti}
                    className={[classes[className], classes.customSelect].join(",")}
                    isDisabled={false}
                />
            }
            {!isMulti &&
                <Select
                    options={options}
                    defaultValue={defaultValue}
                    onChange={onChangeHandler}
                    className={[classes[className], classes.customSelect].join(",")}
                    isDisabled={false}
                />
            }

        </div>
    )
}

export default CustomSelect