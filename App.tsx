/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';

import Basket from './src/screen/basket';

function App() {
  return (
    <SafeAreaView>
      <StatusBar />
      <Basket />
    </SafeAreaView>
  );
}

export default App;
