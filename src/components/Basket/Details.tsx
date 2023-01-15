import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

// @ts-ignore
import logo from '../../../assets/logo.png';
import { TextCustom } from '../TextCustom';

export const Details = () => {
  return (
    <>
      <TextCustom style={styles.name}>Cesta de Verduras</TextCustom>

      <View style={styles.farmView}>
        <Image source={logo} style={styles.image} />
        <TextCustom style={styles.farmName}>Jenny Jack Farm</TextCustom>
      </View>

      <TextCustom style={styles.description}>
        Uma cesta com produtos selecionados cuidadosamente da fazenda direto
        para sua cozinhas
      </TextCustom>

      <TextCustom style={styles.price}>R$ 40,00</TextCustom>
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
