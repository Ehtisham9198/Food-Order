import react from 'react';
import classes from './AvailableMeal.module.css';
import Card from '../UI/Card'
import MealItem from './MealItem/MealItem'

const Meals = [
    {
    title: "Biryani",
    description: "A delicious Non veg dish",
    price: 499,
    },
    {
    title: "Sushi",
    description: "A delicious dish",
    price: 699,
    },
    {
    title: "Chicken tikka",
    description: "A delicious Non veg dish",
    price: 299,
    },
    {
    title: "Kadhai paneer",
    description: "A delicious veg dish",
    price: 499,
    },
];
const AvailableMeals=( )=>{
    const meals_item = Meals.map((Meals)=> <MealItem title={Meals.title} description={Meals.description} price={Meals.price}/>);
    return(
        
        <section className={classes.sect}>
            <Card>
            <ul>{meals_item}</ul> 
            </Card>
        </section>
        
    )
};

export default AvailableMeals;