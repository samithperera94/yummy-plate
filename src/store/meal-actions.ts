
import axios from "axios";
import MealItem from "../models/meal";
const baseUrl = 'https://react-http-d7746-default-rtdb.asia-southeast1.firebasedatabase.app/meal.json';


export const getMealData = ()=> {
    console.log("mealData ---------")
    return async()=>{
        const getData = async()=> {
            axios.get(baseUrl).then(response => {
                const _meals:MealItem[] = []
                console.log(",,,,........,,,,")
                const mealData =  response.data;
                
                console.log("mealData ;;;;;",mealData)
            }).catch(err => {
                console.error(err)
                console.log("7&&&&&&&")
            });
            
        }

        try{
            console.log("///////")
            await getData();
        }catch(error){
            throw new Error("data retriving failed!");
        }
    }
}

export const addMealItem = (meals:MealItem[]) => {
    return async() => {
        console.log("adding Meal ;;;;;;;; meals",meals)
        const AddMeal = async()=> {
            axios.put(baseUrl, meals).then((response) => {
                console.log(response.data);
            }).catch((error) => {
                throw new Error("Sending Meak Data Failed!")
            });
        }

        try{
            await AddMeal()
        }catch(error){
            throw new Error("Sending Meak Data Failed!")
        }
    }
}