type RootStackParamList = {
  Restaurant: {
    id: number;
    imgUrl: string;
    title: string;
    rating: number;
    genre: string;
    address: string;
    short_description: string;
    dishes: string[];
    lat: number;
    long: number;
  };
};

export default RootStackParamList;
