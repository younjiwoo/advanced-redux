import { configureStore } from '@reduxjs/toolkit';
import uiReducer from './ui-slice';
import cartItemReducer from './cart-slice';

const store = configureStore({
	reducer: {
		ui: uiReducer,
		cart: cartItemReducer,
	},
});

export default store;
