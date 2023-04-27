import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import {
  AdjustmentsVerticalIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  UserIcon,
} from "react-native-heroicons/outline";
import Categories from "../components/Category/Categories";
import FeaturedRow from "../components/Featured/FeaturedRow";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="bg-white pt-5">
      {/* Header */}
      <View className="mx-4 flex-row items-center space-x-2 pb-3">
        <Image
          source={{
            uri: "https://links.papareact.com/wru",
          }}
          className="h-7 w-7 rounded-full bg-gray-300 p-4"
        />

        <View className="flex-1">
          <Text className="text-xs font-bold text-gray-400">Deliver Now!</Text>
          <Text className="text-xl font-bold">
            Current Location
            <ChevronDownIcon size={20} color="#00ccbb" />
          </Text>
        </View>

        <UserIcon size={35} color="#00ccbb" />
      </View>

      {/* Search */}
      <View className="mx-4 flex-row items-center space-x-2 pb-2">
        <View className="flex-1 flex-row space-x-2 bg-gray-200 p-3">
          <MagnifyingGlassIcon color="gray" size={20} />
          <TextInput
            placeholder="Restaurants and cuisines"
            keyboardType="default"
          />
        </View>

        <AdjustmentsVerticalIcon color="#00ccbb" />
      </View>

      {/* Body */}
      <ScrollView>
        {/* Categories */}
        <Categories />

        {/* Featured row */}
        <FeaturedRow
          id="1"
          title="Featured"
          description="Paid placements from our partners"
        />
        <FeaturedRow
          id="2"
          title="Tasty Discounts"
          description="Everyone's been enjoying these juicy discounts!"
        />
        <FeaturedRow
          id="3"
          title="Offers near you"
          description="Why not support your local restaurants tonight!"
        />
      </ScrollView>
    </SafeAreaView>
  );
};
export default HomeScreen;
