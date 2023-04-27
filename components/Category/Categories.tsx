import { ScrollView } from "react-native";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
    >
      {/* Category card */}
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Test" />
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Test" />
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Test" />
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Test" />
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Test" />
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Test" />
    </ScrollView>
  );
};

export default Categories;
