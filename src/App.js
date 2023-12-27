import './App.css';
import Header from './Components/Layout/Header';
import Meals from './Components/Meals/Meals';
import Cart from './Components/Cart/Cart';
import { useState } from 'react';
import ContexProvider from './Components/Store/ContexProvider';

function App() {
 const [showCart,setShowCart] = useState(false);
 const CartHandler=()=>{
  setShowCart(true);
 }
 const CartCloseHandler=()=>{
  setShowCart(false);
 }
  return (
    <ContexProvider>
     {showCart && <Cart onCloseClick={CartCloseHandler}/> }
      <Header  onCartClick ={CartHandler}/>
      <main>
      <Meals/>
      </main>
      </ContexProvider>
  );
}

export default App;
