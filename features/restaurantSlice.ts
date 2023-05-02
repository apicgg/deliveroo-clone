import { createSlice } from "@reduxjs/toolkit";
import { Dish } from "../types/RootStackParamList";

export type RestaurantItem = {
  id: number;
  imgUrl: string;
  title: string;
  rating: number;
  genre: string;
  address: string;
  short_description: string;
  dishes: Dish[];
  lat: number;
  long: number;
};

export type RestaurantState = {
  restaurant: RestaurantItem;
};

const initialState: RestaurantState = {
  restaurant: {
    id: 0,
    imgUrl: "",
    title: "",
    rating: 0,
    genre: "",
    address: "",
    short_description: "",
    dishes: [],
    lat: 0,
    long: 0,
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

export const selectRestaurant = (state: { restaurant: RestaurantState }) =>
  state.restaurant.restaurant;

export default restaurantSlice.reducer;
