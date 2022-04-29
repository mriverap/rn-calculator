import {Text, View} from 'react-native';
import React from 'react';
import CalcButton from '../components/CalcButton';
import {styles} from '../styles/CalculatorTheme';
import useCalculator from '../hooks/useCalculator';

export default function CalcScreen() {
  const {runningTotal, currentNumber, resetToZero, applyOperator, buildNumber} =
    useCalculator();

  return (
    <View style={styles.container}>
      <View style={styles.resultContainer}>
        <Text style={styles.memText} numberOfLines={1} adjustsFontSizeToFit>
          {runningTotal !== '0' ? runningTotal : ''}
        </Text>
      </View>
      <View style={styles.resultContainer}>
        <Text style={styles.resultText} numberOfLines={1} adjustsFontSizeToFit>
          {currentNumber}
        </Text>
      </View>
      <View style={styles.buttonRow}>
        <CalcButton title="C" colorGroup="other" action={resetToZero} />
        <CalcButton title="+/-" colorGroup="other" action={applyOperator} />
        <CalcButton title="%" colorGroup="other" action={applyOperator} />
        <CalcButton
          title="&#247;"
          colorGroup="operators"
          action={applyOperator}
        />
      </View>
      <View style={styles.buttonRow}>
        <CalcButton title="7" action={buildNumber} />
        <CalcButton title="8" action={buildNumber} />
        <CalcButton title="9" action={buildNumber} />
        <CalcButton title="x" colorGroup="operators" action={applyOperator} />
      </View>
      <View style={styles.buttonRow}>
        <CalcButton title="4" action={buildNumber} />
        <CalcButton title="5" action={buildNumber} />
        <CalcButton title="6" action={buildNumber} />
        <CalcButton title="-" colorGroup="operators" action={applyOperator} />
      </View>
      <View style={styles.buttonRow}>
        <CalcButton title="1" action={buildNumber} />
        <CalcButton title="2" action={buildNumber} />
        <CalcButton title="3" action={buildNumber} />
        <CalcButton title="+" colorGroup="operators" action={applyOperator} />
      </View>
      <View style={styles.buttonRow}>
        <CalcButton title="0" shapeOval action={buildNumber} />
        <CalcButton title="." action={buildNumber} />
        <CalcButton title="=" colorGroup="operators" action={applyOperator} />
      </View>
    </View>
  );
}
