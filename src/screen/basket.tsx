import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Details } from '../components/Basket/Details';
import { Header } from '../components/Basket/Header';

export default function Basket() {
  return (
    <>
      <Header />

      <View style={styles.container}>
        <Details />
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
