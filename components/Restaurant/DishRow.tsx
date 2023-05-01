import React, { useState } from "react";
import Currency from "react-currency-formatter";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { PlusCircleIcon } from "react-native-heroicons/outline";
import { MinusCircleIcon } from "react-native-heroicons/solid";
import { useDispatch, useSelector } from "react-redux";
import {
  addToBasket,
  removeFromBasket,
  selectBasketItemsWithId,
} from "../../features/basketSlice";
import { urlFor } from "../../lib/sanity";

type Props = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
};

const DishRow = ({ id, name, description, price, image }: Props) => {
  const [isPressed, setIsPressed] = useState(false);
  // const basketItems = useSelector(selectBasketItems);
  const basketItems = useSelector((state) =>
    selectBasketItemsWithId(state, id)
  );
  const dispatch = useDispatch();

  const addItemToBasket = () => {
    dispatch(addToBasket({ id, name, description, price, image }));
  };

  const removeItemFromBasket = () => {
    // The button has been disabled if there's no item in the basket
    // if (basketItems.length <= 0) return;

    dispatch(removeFromBasket({ id }));
  };

  return (
    <>
      <TouchableOpacity
        onPress={() => setIsPressed(!isPressed)}
        className={`border border-gray-200 bg-white p-4 ${
          isPressed && "border-b-0"
        }`}
      >
        <View className="flex-row">
          <View className="flex-1 pr-2">
            <Text className="mb-1 text-lg">{name}</Text>
            <Text className="text-gray-400">{description}</Text>
            <Text className="mt-2 text-gray-400">
              <Currency quantity={price} currency="INR" />
            </Text>
          </View>
          <View>
            <Image
              style={{
                borderWidth: 1,
                borderColor: "#f3f3f4",
              }}
              source={{
                uri: urlFor(image).url(),
              }}
              className="h-20 w-20 bg-gray-300 p-4"
            />
          </View>
        </View>
      </TouchableOpacity>

      {isPressed && (
        <View className="bg-white px-4">
          <View className="flex-row items-center space-x-2 pb-3">
            <TouchableOpacity
              onPress={removeItemFromBasket}
              disabled={!basketItems.length}
            >
              <MinusCircleIcon
                color={basketItems.length > 0 ? "#00ccbb" : "gray"}
                size={40}
              />
            </TouchableOpacity>
            <Text>{basketItems.length}</Text>
            <TouchableOpacity onPress={addItemToBasket}>
              <PlusCircleIcon color="#00ccbb" size={40} />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
};

export default DishRow;
