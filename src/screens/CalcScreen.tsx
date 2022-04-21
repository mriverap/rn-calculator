import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CalcButton from '../components/CalcButton';

export default function CalcScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.resultContainer}>
        <Text style={styles.resultText}>1,500.00</Text>
      </View>
      <CalcButton title="1" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    height: '100%',
    padding: 10,
  },
  resultContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  resultText: {
    fontFamily: 'Arial',
    fontSize: 60,
    color: 'white',
  },
});
