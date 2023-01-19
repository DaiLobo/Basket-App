import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';

import { IDetails } from '../../types/basketType';
import { ButtonCustom } from '../ButtonCustom';
import { TextCustom } from '../TextCustom';

export const Details = ({
  name,
  logoFarm,
  farmName,
  description,
  price,
  button,
}: IDetails) => {
  return (
    <>
      <TextCustom style={styles.name}>{name}</TextCustom>

      <View style={styles.farmView}>
        <Image source={logoFarm} style={styles.image} />
        <TextCustom style={styles.farmName}>{farmName}</TextCustom>
      </View>

      <TextCustom style={styles.description}>{description}</TextCustom>

      <TextCustom style={styles.price}>{price}</TextCustom>

      <ButtonCustom name={button} />
    </>
  );
};

const styles = StyleSheet.create({
  name: {
    fontSize: 26,
    lineHeight: 42,
    color: '#464646',
    fontWeight: 'bold',
  },
  image: {
    width: 32,
    height: 32,
  },
  farmName: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 12,
  },
  farmView: {
    flexDirection: 'row',
    paddingVertical: 12,
  },
  description: {
    color: '#A3A3A3',
    fontSize: 16,
    lineHeight: 26,
  },
  price: {
    color: '#2A9F85',
    fontWeight: 'bold',
    fontSize: 26,
    lineHeight: 42,
    marginTop: 8,
  },
});
