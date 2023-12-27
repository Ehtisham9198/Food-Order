import classes from './CartItem.module.css';
import React from 'react';

const CartItem=(props)=>{
    const price = `$${props.price}`;

    return(
        <li className={classes['cart-item']}>
            <div>
                <h2>{props.title}</h2>
                <div className={classes.summary}>
                    <span className={classes.price}>{price}</span>
                    <span className={classes.amount}>x{props.amount}</span>
                </div>
                <div className={classes.action}>
                    <button onClick={props.onRemove} className={classes.Remove}>-</button>
                    <button onClick={props.onAdd} className={classes.Add}>+</button>
                </div>
            </div>
        </li>
    )
};

export default CartItem;
