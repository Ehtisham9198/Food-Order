import react from 'react';
import Available_Meals from './AvailableMeal';
import Meal_Summary from './MealSummary';
import { Fragment } from 'react';

const Meals=()=>{
    return(
        <Fragment>
        <Meal_Summary/>
        <Available_Meals/>
        </Fragment>
        
    );
}

export default Meals;