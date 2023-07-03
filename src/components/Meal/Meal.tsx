import React from 'react';
import Card from '../UI/Card';
import MealItem from '../../models/meal';
import classes from "./MealItem.module.scss";



const Meal = ({ id, name, price, amount, description, portion, tags, url }: MealItem) => {
  return (
    <Card className='mealItem'>
      <img src={url} />
      <div className={classes.summary}>
        <h3 className={classes.title}>{name} ({portion})</h3>
        <div className={classes.tags}>
          {
            tags?.map((tag) => { return <span className={classes.tag}>{tag}</span> })
          }
        </div>
        <span className={classes.description}>{description}</span>

      </div>
    </Card>

  )
}

export default Meal