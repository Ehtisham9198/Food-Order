import react from 'react';
import Available_Meals from './Available_Meal';
import Meal_Summary from './Meal_Summary';
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