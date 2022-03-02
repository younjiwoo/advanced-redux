import { uiActions } from './ui-slice';
import { cartItemActions } from './cart-slice';

export const fetchCartData = () => {
	return async (dispatch) => {
		const fetchData = async () => {
			const response = await fetch(
				'https://wine-shop-b8f60-default-rtdb.firebaseio.com/cart.json'
			);

			if (!response.ok) {
				throw new Error('Could not fetch cart data :/');
			}

			const data = await response.json();

			return data;
		};

		try {
			const cartData = await fetchData();

			dispatch(
				cartItemActions.replaceCart({
					cartItemList: cartData.cartItemList || [],
					totalCount: cartData.totalCount,
				})
			);
		} catch (error) {
			console.log(error);
			dispatch(
				uiActions.showNotification({
					status: 'error',
					title: 'Error!',
					message: 'Oh no... 😭 Fetching cart data failed.',
				})
			);
		}
	};
};
// action creator
export const sendCartData = (cart) => {
	return async (dispatch) => {
		dispatch(
			uiActions.showNotification({
				status: 'pending',
				title: 'Sending...',
				message: 'Sending cart data... 🤖',
			})
		);

		const sendRequest = async () => {
			const response = await fetch(
				'https://wine-shop-b8f60-default-rtdb.firebaseio.com/cart.json',
				{
					method: 'PUT',
					body: JSON.stringify({
						cartItemList: cart.cartItemList || [],
						totalCount: cart.totalCount,
					}),
				}
			);

			if (!response.ok) {
				throw new Error('failed!');
			}
		};

		try {
			await sendRequest();

			dispatch(
				uiActions.showNotification({
					status: 'success',
					title: 'Success! 😀',
					message: 'sent cart data successfully!',
				})
			);
		} catch (error) {
			dispatch(
				uiActions.showNotification({
					status: 'error',
					title: 'Error!',
					message: 'Oh no... 😭 Sending data failed.',
				})
			);
		}
	};
};
