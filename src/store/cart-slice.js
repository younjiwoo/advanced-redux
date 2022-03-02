import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	cartItemList: [],
	totalCount: 0,
	cartChanged: false,
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
			state.cartChanged = true;
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
			state.cartChanged = true;
		},
		replaceCart(state, action) {
			state.totalCount = action.payload.totalCount;
			state.cartItemList = action.payload.cartItemList;
			state.cartChanged = false;
		},
	},
});

export const cartItemActions = cartItemSlice.actions;

export default cartItemSlice.reducer;
