import { useSelector } from 'react-redux';
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';


const Cart = (props) => {

  const cartItemsArray = useSelector(state => state.cart.items)
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItemsArray.map(cartItem => {
          return (<CartItem
            item={
              {
                key: cartItem.id,
                id : cartItem.id,
                title: cartItem.title,
                quantity: cartItem.totalQuantity,
                total: cartItem.totalPrice,
                price: cartItem.price
              }
            }
          />)
        })}
      </ul>
    </Card>
  );
};

export default Cart;
