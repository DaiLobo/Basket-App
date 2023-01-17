import React from 'react';
import { ImageSourcePropType, StyleSheet, View } from 'react-native';

import { Details } from '../components/Basket/Details';
import { Header } from '../components/Basket/Header';

type Props = {
  header: { title: string };
  details: {
    name: string;
    logoFarm: ImageSourcePropType;
    farmName: string;
    description: string;
    price: string;
  };
};

export default function Basket({ header, details }: Props) {
  return (
    <>
      <Header {...header} />

      <View style={styles.container}>
        <Details {...details} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
});
