import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

import { IItem } from '../../types/basketType';
import { TextCustom } from '../TextCustom';

type Props = {
  item: IItem;
};

export const Item = ({ item: { name, image } }: Props) => {
  return (
    <View key={name} style={styles.item}>
      <Image source={image} style={styles.image} />
      <TextCustom style={styles.name}>{name}</TextCustom>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    paddingVertical: 16,
    marginHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ECECEC',
  },
  image: {
    width: 46,
    height: 46,
  },
  name: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 11,
    color: '#464646',
  },
});
