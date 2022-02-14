import { useSelector } from 'react-redux';

import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

// import { useDispatch } from 'react-redux';

const Cart = (props) => {
	// const dispatch = useDispatch()
	const price = 6;
	const count = useSelector((state) => state.cartItem.count);
	const total = count * price;

	return (
		<Card className={classes.cart}>
			<h2>Your Shopping Cart</h2>
			<ul>
				<CartItem
					item={{
						title: 'Test Item',
						quantity: count,
						total,
						price,
					}}
				/>
			</ul>
		</Card>
	);
};

export default Cart;
