import { useDispatch } from 'react-redux';
import { cartItemActions } from '../../store/cart-slice';
import classes from './CartItem.module.css';

const CartItem = (props) => {
	const { id, title, count, total, price } = props.item;

	const dispatch = useDispatch();

	const addHandler = () => {
		dispatch(cartItemActions.add(props.item));
	};

	const removeHandler = () => {
		dispatch(cartItemActions.remove(id));
	};

	return (
		<li className={classes.item}>
			<header>
				<h3>{title}</h3>
				<div className={classes.price}>
					${total.toFixed(2)}{' '}
					<span className={classes.itemprice}>
						(${price.toFixed(2)}/item)
					</span>
				</div>
			</header>
			<div className={classes.details}>
				<div className={classes.quantity}>
					x <span>{count}</span>
				</div>
				<div className={classes.actions}>
					<button onClick={removeHandler}>-</button>
					<button onClick={addHandler}>+</button>
				</div>
			</div>
		</li>
	);
};

export default CartItem;
