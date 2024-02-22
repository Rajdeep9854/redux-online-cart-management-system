import { useDispatch, useSelector } from 'react-redux';
import classes from './CartButton.module.css';
import { uiActions } from '../../store/ui-slice';

const CartButton = (props) => {

  // const cartItems = useSelector((state) => state.cart.items)
  // const cartTotal = cartItems.reduce((accumulator, currItem) => {
  //   accumulator += currItem.quantity;
  //   return accumulator
  // }, 0)
  //console.log(cartTotal);


  const dispatch = useDispatch();

  function toggleCartHandler(){
    dispatch(uiActions.toggle());
  }

  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}></span>
    </button>
  );
};

export default CartButton;
