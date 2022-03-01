import { createSlice } from '@reduxjs/toolkit';
import { uiActions } from './ui-slice';

const initialState = {
	cartItemList: [],
	totalCount: 0,
};

const cartItemSlice = createSlice({
	name: 'cartItem',
	initialState,
	reducers: {
		add(state, action) {
			const newItem = action.payload;
			const existingItem = state.cartItemList.find(
				(item) => item.id === newItem.id
			);

			state.totalCount++;

			if (!existingItem) {
				state.cartItemList.push({
					...newItem,
					count: 1,
					total: newItem.price,
				});
			} else {
				existingItem.count++;
				existingItem.total += newItem.price;
			}
		},
		remove(state, action) {
			const id = action.payload;
			const existingItem = state.cartItemList.find(
				(item) => item.id === id
			);

			state.totalCount--;

			if (existingItem.count === 1) {
				state.cartItemList = state.cartItemList.filter(
					(item) => item.id !== id
				);
			} else {
				existingItem.count--;
				existingItem.total -= existingItem.price;
			}
		},
	},
});

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
					body: JSON.stringify(cart),
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

export const cartItemActions = cartItemSlice.actions;

export default cartItemSlice.reducer;
