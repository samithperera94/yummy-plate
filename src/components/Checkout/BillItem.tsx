import classes from "./BillItem.module.scss";

interface Props {
    title: string,
    amount: number
}

const BillItem = ({ title, amount }: Props) => {
    return (
        <div className={classes.item}>
            <span className={classes.title}>{title}</span>
            <span className={classes.price}>{amount}</span>
        </div>
    )
}

export default BillItem