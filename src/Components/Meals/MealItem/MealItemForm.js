import React from "react";
import classes from './MealItemForm.module.css';
import Input from "../../UI/Input";
import { useRef,useState } from "react";

const MealItemForm=(props)=>{
    const [AmountIsValid,SetAmountIsValid] = useState(true)
    const amountInputRef = useRef();


    const sumbitHandler = (event)=>{
        event.preventDefault();
        const  enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount;
        if(enteredAmount.trim().length===0 || enteredAmount<1||enteredAmount>5){
            SetAmountIsValid(false);
            return;
        }

        props.onAddToCart(enteredAmountNumber);
    };
    return(
        <form className={classes.form} onSubmit={sumbitHandler} >
        <Input 
        label="Amount" input ={{
            id:"amount",
            type:'number',
            min :'1',
            max:'5',
            Step:'1',
            defaultValue:'1',
            
        }}
        ref={amountInputRef}/>    
        <button>+Add</button>
        {!AmountIsValid && <p>Please enter a valid amount (1-5).</p>}     
        </form>
    )
};
export default MealItemForm; 