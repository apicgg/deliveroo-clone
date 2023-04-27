import { Image, Text, TouchableOpacity } from "react-native";

type Props = {
  imgUrl: string;
  title: string;
};

const CategoryCard = ({ imgUrl, title }: Props) => {
  return (
    <TouchableOpacity className="relative mr-2">
      <Image
        source={{
          uri: imgUrl,
        }}
        className="rou h-20 w-20"
      />
      <Text className="lef1 absolute bottom-1 font-bold text-white">
        {title}
      </Text>
    </TouchableOpacity>
  );
};
export default CategoryCard;
