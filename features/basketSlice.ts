import { createSlice } from "@reduxjs/toolkit";

export type BasketItem = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
};

export interface BasketState {
  items: BasketItem[];
}

const initialState: BasketState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeFromBasket: (state, action) => {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      const newBasket = [...state.items];

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Can't remove the product (id: ${action.payload.id}) as it's not in basket`
        );
      }
      state.items = newBasket;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToBasket, removeFromBasket } = basketSlice.actions;

// ! TODO: add types
export const selectBasketItems = (state: any) => state.basket.items;

export const selectBasketItemsWithId = (state: any, id: number) => {
  return state.basket.items.filter((item: BasketItem) => item.id === id);
};

export default basketSlice.reducer;
