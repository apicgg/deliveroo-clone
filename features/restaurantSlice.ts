import { createSlice } from "@reduxjs/toolkit";

export type RestaurantItem = {
  id: number | null;
  imgUrl: string | null;
  title: string | null;
  rating: number | null;
  genre: string | null;
  address: string | null;
  short_description: string | null;
  dishes: string | null;
};

const initialState = {
  restaurant: {
    id: null,
    imgUrl: null,
    title: null,
    rating: null,
    genre: null,
    address: null,
    short_description: null,
    dishes: null,
  },
};

export const restaurantSlice = createSlice({
  name: "restaurant",
  initialState,
  reducers: {
    setRestaurant: (state, action) => {
      state.restaurant = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setRestaurant } = restaurantSlice.actions;

// ! TODO: add types instead of any
export const selectRestaurant = (state: any) => state.restaurant.restaurant;

export default restaurantSlice.reducer;
