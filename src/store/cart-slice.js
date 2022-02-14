import { createSlice } from '@reduxjs/toolkit';

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

export const cartItemActions = cartItemSlice.actions;

export default cartItemSlice.reducer;
