import { configureStore } from "@reduxjs/toolkit";
import basketReducer, { BasketState } from "../features/basketSlice";
import restaurantReducer, {
  RestaurantState,
} from "../features/restaurantSlice";

export type RootState = {
  basket: BasketState;
  restaurant: RestaurantState;
};

export const store = configureStore({
  reducer: {
    basket: basketReducer,
    restaurant: restaurantReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
