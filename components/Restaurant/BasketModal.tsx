import { NavigationProp, useNavigation } from "@react-navigation/native";
import React from "react";
import Currency from "react-currency-formatter";
import { Text, TouchableOpacity, View } from "react-native";
import { useSelector } from "react-redux";
import {
  selectBasketItems,
  selectBasketTotal,
} from "../../features/basketSlice";
import RootStackParamList from "../../types/RootStackParamList";

type BasketScreenNavigationProp = NavigationProp<RootStackParamList, "Basket">;

const BasketIcon = () => {
  const basketItems = useSelector(selectBasketItems);
  const basketTotal = useSelector(selectBasketTotal);
  const navigation = useNavigation<BasketScreenNavigationProp>();

  if (basketItems.length === 0) return null;

  return (
    <View className="absolute bottom-10 z-50 w-full">
      <TouchableOpacity
        onPress={() => navigation.navigate("Basket")}
        className="mx-5 flex-row items-center rounded-lg bg-[#00ccbb] p-4"
      >
        <Text className="bg-[#01a296] px-2 py-1 text-lg font-extrabold text-white">
          {basketItems.length}
        </Text>
        <Text className="flex-1 text-center text-lg font-extrabold text-white">
          View Basket
        </Text>
        <Text className="text-lg font-extrabold text-white">
          <Currency quantity={basketTotal} currency="INR" />
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default BasketIcon;
