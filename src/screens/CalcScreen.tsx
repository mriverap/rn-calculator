import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CalcButton from '../components/CalcButton';

export default function CalcScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.resultContainer}>
        <Text style={styles.resultText}>1,500.00</Text>
      </View>
      <View style={styles.buttonRow}>
        <CalcButton title="C" colorScheme="lg" />
        <CalcButton title="+/-" colorScheme="lg" />
        <CalcButton title="%" colorScheme="lg" />
        <CalcButton title="&#247;" colorScheme="org" />
      </View>
      <View style={styles.buttonRow}>
        <CalcButton title="7" colorScheme="dg" />
        <CalcButton title="8" colorScheme="dg" />
        <CalcButton title="9" colorScheme="dg" />
        <CalcButton title="x" colorScheme="org" />
      </View>
      <View style={styles.buttonRow}>
        <CalcButton title="4" colorScheme="dg" />
        <CalcButton title="5" colorScheme="dg" />
        <CalcButton title="6" colorScheme="dg" />
        <CalcButton title="-" colorScheme="org" />
      </View>
      <View style={styles.buttonRow}>
        <CalcButton title="1" colorScheme="dg" />
        <CalcButton title="2" colorScheme="dg" />
        <CalcButton title="3" colorScheme="dg" />
        <CalcButton title="+" colorScheme="org" />
      </View>
      <View style={styles.buttonRow}>
        <CalcButton title="0" colorScheme="dg" shape="oval" />
        <CalcButton title="." colorScheme="dg" />
        <CalcButton title="=" colorScheme="org" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    paddingHorizontal: 5,
    paddingBottom: 10,
  },
  resultContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  resultText: {
    fontFamily: 'sans-serif-light',
    fontSize: 80,
    color: 'white',
    marginHorizontal: 15,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 5,
    marginHorizontal: 10,
  },
});
