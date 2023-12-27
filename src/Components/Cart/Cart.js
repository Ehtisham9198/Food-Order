import classes from './Cart.module.css';
import Modal from '../UI/Modal';
import React, { useContext } from 'react';
import CartContex from '../Store/Cart-Contex';
import CartItem from './CartItem';

const Cart = props => {
    const cartCtx = useContext(CartContex);

    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`
    const hasItems = cartCtx.items.length > 0;
    
    const cartItemRemoveHandler = item =>{
        cartCtx.removeItem(item)
    };
    const cartitemAddHandler = item =>{
        cartCtx.addItem(item);
    };

    const CartItems = (
    <ul className={classes['cart-items']}>
    {cartCtx.items.map((item) =>( <CartItem key = {item.title} title ={item.title} price ={item.price} amount = {item.amount} onRemove ={cartItemRemoveHandler.bind(null,item)} onAdd={cartitemAddHandler.bind(null,item)}/>))}</ul>);
    const closehandler = () => {

        props.onCloseClick();
    }

    return (
        
        <Modal >

            {CartItems}
            <div className={classes.total}>
                <span>Total amount</span></div>
            <span className={classes.price}>{totalAmount}</span>
            <div className={classes.actions}>
                <button className={classes.but_close} onClick={closehandler}>Close</button>
                {hasItems && <button className={classes.but_order}>Order</button>}
            </div>

        </Modal>
    )
};
export default Cart;