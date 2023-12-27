import React from "react";
import classes from './Meal_Summary.module.css'


const Meal_Summary=()=>{
    return(
        <section className={classes.summary}>
    <h2 className={classes.delicious}>Delicious Food, Delivered to You</h2>
    <p>Choose your favourite meal from our broad selection of available meals and enjoy
        a delicious lunch or dinner at home</p>
        <p>
            All our meals are cooked with high-quality ingredients, just-in-time and 
            of course by experineced chefs!
        </p>


    </section>)

};


export default Meal_Summary;