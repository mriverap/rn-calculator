import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import CalcButton from '../components/CalcButton';

export default function CalcScreen() {
  const [total, setTotal] = useState('0');

  const appendDigit = (digit: string): string => {
    setTotal(total === '0' ? digit : total + digit);
  };

  return (
    <View style={styles.container}>
      <View style={styles.resultContainer}>
        <Text style={styles.resultText}>{total}</Text>
      </View>
      <View style={styles.buttonRow}>
        <CalcButton title="C" colorScheme="lg" onPress={() => setTotal('0')} />
        <CalcButton title="+/-" colorScheme="lg" />
        <CalcButton title="%" colorScheme="lg" />
        <CalcButton title="&#247;" colorScheme="org" />
      </View>
      <View style={styles.buttonRow}>
        <CalcButton
          title="7"
          colorScheme="dg"
          onPress={() => appendDigit('7')}
        />
        <CalcButton
          title="8"
          colorScheme="dg"
          onPress={() => appendDigit('8')}
        />
        <CalcButton
          title="9"
          colorScheme="dg"
          onPress={() => appendDigit('9')}
        />
        <CalcButton title="x" colorScheme="org" />
      </View>
      <View style={styles.buttonRow}>
        <CalcButton
          title="4"
          colorScheme="dg"
          onPress={() => appendDigit('4')}
        />
        <CalcButton
          title="5"
          colorScheme="dg"
          onPress={() => appendDigit('5')}
        />
        <CalcButton
          title="6"
          colorScheme="dg"
          onPress={() => appendDigit('6')}
        />
        <CalcButton title="-" colorScheme="org" />
      </View>
      <View style={styles.buttonRow}>
        <CalcButton
          title="1"
          colorScheme="dg"
          onPress={() => appendDigit('1')}
        />
        <CalcButton
          title="2"
          colorScheme="dg"
          onPress={() => appendDigit('2')}
        />
        <CalcButton
          title="3"
          colorScheme="dg"
          onPress={() => appendDigit('3')}
        />
        <CalcButton title="+" colorScheme="org" />
      </View>
      <View style={styles.buttonRow}>
        <CalcButton
          title="0"
          colorScheme="dg"
          shape="oval"
          onPress={() => appendDigit('0')}
        />
        <CalcButton
          title="."
          colorScheme="dg"
          onPress={() => appendDigit('.')}
        />
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
