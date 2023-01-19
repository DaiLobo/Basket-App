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
  button?: string;
}

export interface IItem {
  name: string;
  image: ImageSourcePropType;
}

export interface IItens {
  title: string;
  list: IItem[];
}

export interface IBasket {
  header: IHeader;
  details: IDetails;
  itens: IItens;
}
