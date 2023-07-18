import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import MealItem from "../models/meal";

interface mealsState {
    meals : MealItem[],
    isModified:boolean
}

const initialMealsState:mealsState = {
    meals: [],
    isModified:false
}

const mealSlice =  createSlice({
    name:'meal',
    initialState:initialMealsState,
    reducers:{
        getMeals(state,action:PayloadAction<{meals:MealItem[]}>){
            state.meals = action.payload.meals;
        },
        addMeal(state,action:PayloadAction<{meal:MealItem}>){
            const {meal} = action.payload;            
            state.meals.push(meal)
        }
    }

});

export default mealSlice.reducer;
export const mealActions = mealSlice.actions;