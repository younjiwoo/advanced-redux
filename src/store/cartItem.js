import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	cartItemList: [],
};

const cartItemSlice = createSlice({
	name: 'cartItem',
	initialState,
	reducers: {
		add(state, action) {
			for (let i = 0; i < state.cartItemList.length; i++) {
				if (state.cartItemList[i].id === action.payload.id) {
					state.cartItemList[i].count++;
					state.cartItemList[i].total += state.cartItemList[i].price;

					return;
				}
			}

			state.cartItemList.push({
				...action.payload,
				count: 1,
				total: action.payload.price,
			});
		},
		remove(state, action) {
			for (let i = 0; i < state.cartItemList.length; i++) {
				if (state.cartItemList[i].id === action.payload.id) {
					if (state.cartItemList[i].count > 1) {
						state.cartItemList[i].count--;
						state.cartItemList[i].total -=
							state.cartItemList[i].price;
					} else {
						state.cartItemList.splice(i, 1);
					}
				}
			}
		},
	},
});

export const cartItemActions = cartItemSlice.actions;

export default cartItemSlice.reducer;
