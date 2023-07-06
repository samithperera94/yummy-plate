import React from 'react';
import Card from '../UI/Card';
import MealItem from '../../models/meal';
import classes from "./MealItem.module.scss";
import Button from '../UI/Button';
import { useAppDispatch } from '../../store';
import { cartActions } from '../../store/cart';
import CartItem from "../../models/cart";



// const Meal = ({ id, name, price, amount, description, portion, tags, url }: MealItem) => {
const Meal: React.FC<{ meal: MealItem }> = (props) => {
  const { id, name, price, amount, description, portion, tags, url } = props.meal;

  const dispatch = useAppDispatch();
  const onClickHandler = () => {
    const newItem: CartItem = {
      id,
      name,
      price,
      totalPrice: price * amount,
      amount
    }
    dispatch(cartActions.addToCart({ item: newItem }))
  }
  return (
    <li key={id}>
      <Card className='mealItem' key={id}>
        <img className={classes.image} src={url} />
        <div className={classes.summary}>
          <h3 className={classes.title}>{name} ({portion})</h3>
          <div className={classes.tags}>
            {
              tags && tags?.map((tag: string) => { return <span className={classes.tag}>{tag}</span> })
            }
          </div>
          <span className={classes.description}>{description}</span>
          <div className={classes.actions}>
            <span className={classes.price}>{price}</span>
            {/* order now or add to cart */}
            <Button onClick={onClickHandler}>
              Add To Cart
            </Button>
          </div>
        </div>
      </Card>
    </li>

  )
}

export default Meal