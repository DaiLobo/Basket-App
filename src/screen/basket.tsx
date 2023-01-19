import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import { Details } from '../components/Basket/Details';
import { Header } from '../components/Basket/Header';
import { Item } from '../components/ListItens/Item';
import { TextCustom } from '../components/TextCustom';
import { IBasket } from '../types/basketType';

export default function Basket({ header, details, itens }: IBasket) {
  return (
    <FlatList
      data={itens.list}
      renderItem={Item}
      keyExtractor={({ name }) => name}
      ListHeaderComponent={() => {
        return (
          <>
            <Header {...header} />
            <View style={styles.container}>
              <Details {...details} />
              <TextCustom style={styles.title}> {itens.title} </TextCustom>
            </View>
          </>
        );
      }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  title: {
    color: '#464646',
    fontSize: 20,
    marginTop: 32,
    lineHeight: 32,
    marginBottom: 8,
    fontWeight: 'bold',
  },
});
