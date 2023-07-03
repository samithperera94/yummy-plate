import React from 'react';
import MealItem from '../models/meal';
import classes from "./HomePage.module.scss";

const Dummy_Meals: MealItem[] = [
    new MealItem('1', 'KOTTU', '700', 1, 'chooped bread and vegies', '500g', ['spicy', 'non-veg'], 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Chicken_Kottu.jpg/640px-Chicken_Kottu.jpg'),
    new MealItem('2', 'FRIED RICE', '800', 1, 'rice,eggs and vegies', '500g', ['spicy', 'non-veg'], 'https://lifeloveandgoodfood.com/wp-content/uploads/2023/03/chicken_fried_rice00032a-1200x1200-1.jpg')
]


const HomePage = () => {
    return (
        <>
            <div>HomePage</div>
            <ul className={classes.meals}>


            </ul>
        </>

    )
}

export default HomePage