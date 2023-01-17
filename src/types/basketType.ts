import { ImageSourcePropType } from 'react-native/types';

export interface IHeader {
  title: string;
}

export interface IDetails {
  name: string;
  logoFarm: ImageSourcePropType;
  farmName: string;
  description: string;
  price: string;
}

export interface IItens {
  title: string;
  list: {
    name: string;
    image: string;
  }[];
}

export interface IBasket {
  header: IHeader;
  details: IDetails;
}
