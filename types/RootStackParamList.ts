/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/no-namespace */
type RootStackParamList = {
  Home: undefined;
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
  Basket:
    | {
        id: number;
        name: string;
        description: string;
        price: number;
        image: string;
      }
    | undefined;
  PrepareOrder: undefined;
};

export type Dish = {
  _id: number;
  name: string;
  short_description: string;
  price: number;
  image: string;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export default RootStackParamList;
