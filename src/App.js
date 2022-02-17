import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { uiActions } from './store/ui-slice';
import Notification from './components/UI/Notification';

let isInitial = true;

function App() {
	const dispatch = useDispatch();
	const isCartVisible = useSelector((state) => state.ui.isCartVisible);
	const cart = useSelector((state) => state.cart);
	const notification = useSelector((state) => state.ui.notification);

	useEffect(() => {
		const sendCartData = async () => {
			dispatch(
				uiActions.showNotification({
					status: 'pending',
					title: 'Sending...',
					message: 'Sending cart data... 🤖',
				})
			);
			const response = await fetch(
				'https://wine-shop-b8f60-default-rtdb.firebaseio.com/cart.json',
				{
					method: 'PUT',
					body: JSON.stringify(cart),
				}
			);

			if (!response.ok) {
				throw new Error('failed!');
			}

			dispatch(
				uiActions.showNotification({
					status: 'success',
					title: 'Success! 😀',
					message: 'sent cart data successfully!',
				})
			);
		};
		if (isInitial) {
			isInitial = false;
			return;
		}

		sendCartData().catch((error) => {
			dispatch(
				uiActions.showNotification({
					status: 'error',
					title: 'Error!',
					message: 'Oh no... 😭 Sending data failed.',
				})
			);
		});
	}, [cart, dispatch]);

	return (
		<>
			{notification && (
				<Notification
					status={notification.status}
					title={notification.title}
					message={notification.message}
				/>
			)}
			<Layout>
				{isCartVisible && <Cart />}
				<Products />
			</Layout>
		</>
	);
}

export default App;
