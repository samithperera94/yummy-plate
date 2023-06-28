import classes from './HeaderCartButton.module.scss';
import CartIcon from './CartIcon';

const HeaderCartButton = () => {
    // const [btnHighlighted,setBtnHighlighted] = useState(false);





    return <button  >
        <span className={classes.icon}>
            <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>
            0
        </span>
    </button>
}

export default HeaderCartButton;