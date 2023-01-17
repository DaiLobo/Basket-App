import React from 'react';
import { Dimensions, Image, StyleSheet } from 'react-native';

//@ts-ignore
import topo from '../../../assets/topo.png';
import { IHeader } from '../../types/basketType';
import { TextCustom } from '../TextCustom';

const width = Dimensions.get('screen').width;

export const Header = ({ title }: IHeader) => {
  return (
    <>
      <Image source={topo} style={styles.topo} />
      <TextCustom style={styles.title}>{title}</TextCustom>
    </>
  );
};

const styles = StyleSheet.create({
  topo: {
    width: '100%',
    height: (578 / 768) * width,
  },
  title: {
    width: '100%',
    position: 'absolute',
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 26,
    color: 'white',
    fontWeight: 'bold',
    padding: 16,
  },
});
