import { useDispatch, useSelector } from 'react-redux';
import classes from './CartItem.module.css';
import { createAction } from '@reduxjs/toolkit';
import { cartActions } from '../../store/cart-slice.js';

const CartItem = (props) => {
  const { title, quantity, total, price ,id} = props.item;
  
  const dispatch = useDispatch()

  function handleAddItem(){
    dispatch(cartActions.addToCart({
      id: id,
      title : title,
      totalQuantity : quantity,
      totalPrice : total,
      price 
    }))
  }

  function handleRemoveItem(){

    dispatch(cartActions.removeFromCart(id))
  }

  
  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>{price}</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={handleRemoveItem} >-</button>
          <button onClick={handleAddItem} >+</button> 
        </div>
      </div>
    </li>
  );
};

export default CartItem;
