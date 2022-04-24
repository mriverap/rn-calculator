import {View as SafeAreaView} from 'react-native';
import React from 'react';
import CalcScreen from './src/screens/CalcScreen';

export default function App() {
  return (
    <SafeAreaView>
      <CalcScreen />
    </SafeAreaView>
  );
}
