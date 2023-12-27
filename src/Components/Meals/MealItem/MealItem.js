import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';
import { useContext } from 'react';
import CartContex from '../../Store/Cart-Contex';
const MealItem = (props) => {
    const cartCtx    = useContext(CartContex)
    const price = `$${props.price}`;

    const onAddTocarthandler =(amount)=>{
        cartCtx.addItem({
            title : props.title,
            amount: amount,
            price: props.price
        });
    }
    return(
        <div className={classes.div}>
        <li className={classes.meal}>
            <div>
                <h3>{props.title}</h3>
                <div className={classes.description}>{props.description}</div>
                <div className={classes.price}>{price}</div>
            </div>
            <div>
        <MealItemForm onAddToCart = {onAddTocarthandler}/> 
            </div>
        </li>
        </div>
    )
    
};

export default MealItem;
