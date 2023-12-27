import react from 'react';
import AvailableMeals from './AvailableMeal';
import MealSummary from './MealSummary';
import { Fragment } from 'react';

const Meals=()=>{
    return(
        <Fragment>
        <MealSummary/>
        <AvailableMeals/>
        </Fragment>
        
    );
}

export default Meals;