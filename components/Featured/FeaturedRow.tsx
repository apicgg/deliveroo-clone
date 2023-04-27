import { View, Text, ScrollView } from "react-native";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "../Restaurant/RestaurantCard";
type Props = {
  id: string;
  title: string;
  description: string;
};

const FeaturedRow = ({ title, description }: Props) => {
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="text-lg font-bold">{title}</Text>
        <ArrowRightIcon color="#00ccbb" />
      </View>

      <Text className="px-4 text-xs text-gray-500">{description}</Text>

      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        {/* Restaurant cards */}

        <RestaurantCard
          id={1}
          imgUrl="https://links.papareact.com/gn7"
          title="Yo! Sushi"
          rating={4.5}
          genre="Japanese"
          address="123 Main St"
          short_description="Test description"
          dishes={[]}
          lat={32}
          long={20}
        />
        <RestaurantCard
          id={1}
          imgUrl="https://links.papareact.com/gn7"
          title="Yo! Sushi"
          rating={4.5}
          genre="Japanese"
          address="123 Main St"
          short_description="Test description"
          dishes={[]}
          lat={32}
          long={20}
        />
        <RestaurantCard
          id={1}
          imgUrl="https://links.papareact.com/gn7"
          title="Yo! Sushi"
          rating={4.5}
          genre="Japanese"
          address="123 Main St"
          short_description="Test description"
          dishes={[]}
          lat={32}
          long={20}
        />
      </ScrollView>
    </View>
  );
};
export default FeaturedRow;
