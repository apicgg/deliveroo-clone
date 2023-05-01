type RootStackParamList = {
  Restaurant: {
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
};

export type Dish = {
  _id: number;
  name: string;
  short_description: string;
  price: number;
  image: string;
};

export default RootStackParamList;