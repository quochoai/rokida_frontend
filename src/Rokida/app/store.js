import userReducer from 'Rokida/slices/userSlice';
import cartReducer from 'Rokida/slices/cartSlice';
const { configureStore } = require('@reduxjs/toolkit');

const rootReducer = {
  user: userReducer,
  cart: cartReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
