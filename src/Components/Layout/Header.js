import { Fragment } from 'react';
import foodimage from '../../Assests/food.jpeg';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

const Header=(props)=>{

    return(
        <Fragment>
            <header className={classes.head}>
                <h1>MyMeals</h1> 
             <HeaderCartButton onCartClick={props.onCartClick}/>
            </header>
            
            <div className={classes['main-image']}>
            <img src={foodimage} alt="food" />
            </div>
        
        </Fragment>
    )

}

export default Header;