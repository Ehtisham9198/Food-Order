import React, { useContext, useEffect, useState } from "react";
import classes from './HeaderCartButton.module.css'
import CartContex from "../Store/Cart-Contex";


const HeaderCartButton = (props) => {
  const [btnIsHighLighet, setBtnISHighlighted] = useState(false);
  const cartCtx = useContext(CartContex);
  const { items } = cartCtx;
  const numberOfCartItems = items.reduce((currNum, items) => {
    return currNum + items.amount;
  }, 0);

  const Carthandle = () => {
    props.onCartClick();
  };
  const btnclasses = `${classes.button} ${btnIsHighLighet ? classes.bump : ''}`;

  useEffect(() => {
    if (cartCtx.items.length === 0) {
      return;
    }
    setBtnISHighlighted(true);
    setTimeout(()=>{setBtnISHighlighted(false)},300);

    return ()=>{
      clearTimeout(TimeRanges);
    }
  }, [items,cartCtx.items.length])

  return (
    <button className={btnclasses} onClick={Carthandle}>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  )
}


export default HeaderCartButton;