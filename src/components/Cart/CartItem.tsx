import React from 'react';
import classes from "./CartItem.module.scss";

const CartProductItem = () => {
    return (
        <li className={classes.cartItem}>
            <div className={classes.details}>
                <h3 className={classes.title}>Fish Bun</h3>
                <div className={classes.summary}>
                    <span className={classes.amount}>x 2</span>
                    <span className={classes.price}>80</span>
                </div>
            </div>
            <div className={classes.actions}>
                <button>-</button>
                <button>+</button>
            </div>
        </li>
    )
}

export default CartProductItem;