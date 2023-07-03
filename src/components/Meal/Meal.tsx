import React from 'react';
import Card from '../UI/Card';
import MealItem from '../../models/meal';
import classes from "./MealItem.module.scss";
import Button from '../UI/Button';



// const Meal = ({ id, name, price, amount, description, portion, tags, url }: MealItem) => {
const Meal: React.FC<{ meal: MealItem }> = (props) => {
  const { id, name, price, amount, description, portion, tags, url } = props.meal;

  return (
    <Card className='mealItem'>
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
          <Button>
            Add To Cart
          </Button>
        </div>
      </div>
    </Card>

  )
}

export default Meal