import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import RootStackParamList from "../types/RootStackParamList";
import { urlFor } from "../sanity";
import { ArrowLeftIcon } from "react-native-heroicons/solid";

type RestaurantScreenRouteProp = RouteProp<RootStackParamList, "Restaurant">;

const RestaurantScreen = () => {
  const navigation = useNavigation();

  const {
    params: {
      id,
      imgUrl,
      title,
      rating,
      genre,
      address,
      short_description,
      dishes,
      long,
      lat,
    },
  } = useRoute<RestaurantScreenRouteProp>();

  // useLayoutEffect can be used
  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });

  return (
    <ScrollView>
      <View className="relative">
        <Image
          source={{
            uri: urlFor(imgUrl).url(),
          }}
          className="h-56 w-full"
        />
        <TouchableOpacity
          onPress={navigation.goBack}
          className="absolute left-5 top-14 rounded-full bg-gray-100 p-2"
        >
          <ArrowLeftIcon size={20} color="#00ccbb" />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default RestaurantScreen;
