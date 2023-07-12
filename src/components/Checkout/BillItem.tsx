import classes from "./BillItem.module.scss";

interface Props {
    title: string,
    amount: number
}

const BillItem = ({ title, amount }: Props) => {
    return (
        <li className={classes.item} key={title}>
            <span className={classes.title}>{title}</span>
            <span className={classes.price}>{amount}</span>
        </li>
    )
}

export default BillItem