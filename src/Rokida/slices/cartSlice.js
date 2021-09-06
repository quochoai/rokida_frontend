import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import cartApi from 'Rokida/api/cartApi';

export const getCartList = createAsyncThunk('cart/getCartList', async (payload) => {
  const response = await cartApi.getAll();
  localStorage.setItem("cart", JSON.stringify(response.data));
  return response.data;
});

export const addToCart = createAsyncThunk('cart/addToCart', async (payload) => {
  const response = await cartApi.add(payload);
  return response.data;
});

export const updateCartStatus = createAsyncThunk('cart/updateStatus', async (payload) => {
  const response = await cartApi.updateCartStatus(payload);
  localStorage.setItem("confirmItem", JSON.stringify(response.data));
  return response.data;
});

export const confirmCart = createAsyncThunk('cart/confirmCart', async (payload) => {
  const confirmItems = JSON.parse(localStorage.getItem("confirmItem"));
  const confirmIDs = confirmItems.map(item => item.id);
  const response = await cartApi.confirmCart({ id_cart: confirmIDs });
  return response.data;
});

export const confirmOrder = createAsyncThunk('cart/confirmOrder', async (payload) => {
  const response = await cartApi.confirmOrder(payload);
  if (response.success) localStorage.removeItem("confirmItem");
  return response;
});

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    current: JSON.parse(localStorage.getItem('cart')) || [],
    settings: {},
  },
  reducers: {},
  extraReducers: {
    [getCartList.fulfilled]: (state, action) => {
      state.current = action.payload;
    },
    [addToCart.fulfilled]: (state, action) => {
      // state.current = action.payload;
    },
    [updateCartStatus.fulfilled]: (state, action) => {
      // state.current = action.payload;
    },
    [confirmCart.fulfilled]: (state, action) => {
      // state.current = action.payload;
    },
    [confirmOrder.fulfilled]: (state, action) => {
      state.current = [];
    },
  }
});

const { reducer } = cartSlice;
// export const { getCartList } = actions;
export default reducer;