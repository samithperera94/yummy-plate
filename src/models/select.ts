class SelectOption {
    value:string| number;
    label: string;

    constructor(selectValue:string | number,label:string){
        this.label = label;
        this.value = selectValue;
    }
}

export default SelectOption;