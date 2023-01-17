/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import { SafeAreaView, StatusBar } from 'react-native';

import mock from './src/mocks/basket';
import Basket from './src/screen/Basket';
import { Splash } from './src/screen/Splash';

function App() {
  // const [loading, setLoading] = useState(false);

  // if (loading === false) {
  //   return <Splash setLoading={setLoading} />;
  // }
  return (
    <SafeAreaView>
      <StatusBar />
      <Basket {...mock} />
    </SafeAreaView>
  );
}

export default App;
