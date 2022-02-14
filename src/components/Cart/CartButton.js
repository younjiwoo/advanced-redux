import { useDispatch } from 'react-redux';
import classes from './CartButton.module.css';

import { cartActions } from '../../store/cart';
// import
const CartButton = (props) => {
	const dispatch = useDispatch();

	const clickHandler = () => {
		dispatch(cartActions.toggleCart());
	};

	return (
		<button className={classes.button} onClick={clickHandler}>
			<span>My Cart</span>
			<span className={classes.badge}>1</span>
		</button>
	);
};

export default CartButton;
