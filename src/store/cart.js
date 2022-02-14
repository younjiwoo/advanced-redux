import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	isCartVisible: false,
};

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		toggleCart(state) {
			state.isCartVisible = !state.isCartVisible;
		},
	},
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
