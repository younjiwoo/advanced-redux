import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	count: 0,
};

const cartItemSlice = createSlice({
	name: 'cartItem',
	initialState,
	reducers: {
		add(state) {
			state.count++;
		},
		remove(state) {
			state.count--;
		},
	},
});

export const cartItemActions = cartItemSlice.actions;

export default cartItemSlice.reducer;
