import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import Currency from "react-currency-formatter";
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { XCircleIcon } from "react-native-heroicons/solid";
import { useDispatch, useSelector } from "react-redux";
import {
  BasketItem,
  removeFromBasket,
  selectBasketItems,
  selectBasketTotal,
} from "../features/basketSlice";
import { RestaurantItem, selectRestaurant } from "../features/restaurantSlice";
import { urlFor } from "../lib/sanity";

const BasketScreen = () => {
  const [groupedItemsInBasket, setGroupedItemsInBasket] = useState<{
    [key: string]: BasketItem[];
  }>({});
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const restaurant: RestaurantItem = useSelector(selectRestaurant);
  const basketItems = useSelector(selectBasketItems);
  const basketTotal = useSelector(selectBasketTotal);

  useEffect(() => {
    const groupedBasketItems = basketItems.reduce(
      (results: { [key: string]: BasketItem[] }, item: BasketItem) => {
        (results[item.id] = results[item.id] || []).push(item);
        return results;
      },
      {}
    );
    setGroupedItemsInBasket(groupedBasketItems);
  }, [basketItems]);

  // console.log(groupedItemsInBasket);

  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1 bg-gray-100">
        <View className="border-b border-[#00ccbb] bg-white p-5 shadow-sm">
          <View>
            <Text className="text-center text-lg font-bold">Basket</Text>
            <Text className="text-center text-gray-400">
              {restaurant.title}
            </Text>
          </View>

          <TouchableOpacity
            onPress={navigation.goBack}
            className="absolute right-5 top-3 rounded-full bg-gray-100"
          >
            <XCircleIcon color="#00ccbb" size={50} />
          </TouchableOpacity>
        </View>

        <View className="my-5 flex-row items-center space-x-4 bg-white px-4 py-3">
          <Image
            source={{
              uri: "https://links.papareact.com/wru",
            }}
            className="h-7 w-7 rounded-full bg-gray-300 p-4"
          />
          <Text className="flex-1">Deliver in 20-30 mins</Text>
          <TouchableOpacity>
            <Text className="text-[#00ccbb]">Change</Text>
          </TouchableOpacity>
        </View>

        <ScrollView className="divide-y divide-gray-200">
          {Object.entries(groupedItemsInBasket).map(([key, items]) => (
            <View
              key={key}
              className="flex-row items-center space-x-3 bg-white px-5 py-2"
            >
              <Text className="text-[#00ccbb]">{items.length} x</Text>
              <Image
                source={{
                  uri: urlFor(items[0]?.image).url(),
                }}
                className="h-12 w-12 rounded-full"
              />
              <Text className="flex-1">{items[0]?.name}</Text>

              <Text>
                <Currency quantity={items[0]?.price} currency="INR" />
              </Text>

              <TouchableOpacity>
                <Text
                  onPress={() => dispatch(removeFromBasket({ id: key }))}
                  className="text-xs text-[#00ccbb]"
                >
                  Remove
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>

        <View className="mt-5 space-y-4 bg-white p-5">
          <View className="flex-row justify-between">
            <Text className="text-gray-400">Subtotal</Text>
            <Text className="text-gray-400">
              <Currency quantity={basketTotal} currency="INR" />
            </Text>
          </View>

          <View className="flex-row justify-between">
            <Text className="text-gray-400">Delivery Fee</Text>
            <Text className="text-gray-400">
              <Currency quantity={20} currency="INR" />
            </Text>
          </View>

          <View className="flex-row justify-between">
            <Text>Order Total</Text>
            <Text className="font-extrabold">
              <Currency quantity={basketTotal + 20} currency="INR" />
            </Text>
          </View>

          <TouchableOpacity className="rounded-lg bg-[#00ccbb] p-4">
            <Text className="text-center text-lg font-bold text-white">
              Place Order
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default BasketScreen;
