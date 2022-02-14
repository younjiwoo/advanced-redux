import { useDispatch, useSelector } from 'react-redux';
import classes from './CartButton.module.css';

import { uiActions } from '../../store/ui-slice';

const CartButton = (props) => {
	const dispatch = useDispatch();

	const totalCount = useSelector((state) => state.cart.totalCount);
	// console.log('토탈 카운트: ', totalCount);
	const toggleCartHandler = () => {
		dispatch(uiActions.toggleCart());
	};

	return (
		<button className={classes.button} onClick={toggleCartHandler}>
			<span>My Cart</span>
			<span className={classes.badge}>{totalCount}</span>
		</button>
	);
};

export default CartButton;
