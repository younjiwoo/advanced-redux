import { useSelector } from 'react-redux';

import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {
	const cartItemList = useSelector((state) => state.cartItem.cartItemList);
	console.log('cartItemList: ', cartItemList);

	return (
		<Card className={classes.cart}>
			<h2>Your Shopping Cart</h2>
			<ul>
				{cartItemList?.map((cartItem) => {
					console.log('cartItem: ', cartItem);
					console.log('total: ', cartItem.count * cartItem.price);
					return (
						<CartItem
							key={cartItem.id}
							item={{
								id: cartItem.id,
								title: cartItem.title,
								count: cartItem.count,
								total: cartItem.count * cartItem.price,
								price: cartItem.price,
							}}
						/>
					);
				})}
			</ul>
		</Card>
	);
};

export default Cart;
