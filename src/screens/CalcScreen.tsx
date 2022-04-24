import {Text, View} from 'react-native';
import React, {useState} from 'react';
import CalcButton from '../components/CalcButton';
import {styles} from '../../CalculatorTheme';

export default function CalcScreen() {
  const [total, setTotal] = useState('0');
  const [memValue, setMemValue] = useState(0);
  const [operator, setOperator] = useState('');

  interface Operator {
    value: '+' | '-' | '/' | '*';
  }

  const appendDigit = (digit: string): void => {
    if (digit === '.' && total.includes('.')) {
      return;
    }
    setTotal(total === '0' ? digit : total + digit);
  };

  const applyOperator = (operatorVal: Operator.value): void => {
    if (operator !== '') {
      const newValue = parseFloat(total);
      switch (operator) {
        case '+':
          // setTotal((parseFloat(total) + newValue).toString());
          break;
        case '-':
          // setTotal((parseFloat(total) - newValue).toString());
          break;
        case '*':
          // setTotal((parseFloat(total) * newValue).toString());
          break;
        case '/':
          // setTotal((parseFloat(total) / newValue).toString());
          break;
        case '%':
          break;
        case '+/-':
          break;
      }
      // setMemValue(parseFloat(total));
    } else {
      // setMemValue(parseFloat(total));
      // setTotal('0');
      // setOperator(operatorVal);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.resultContainer}>
        <Text style={styles.resultText}>
          {memValue !== 0 ? memValue : total}
        </Text>
      </View>
      <View style={styles.buttonRow}>
        <CalcButton title="C" colorGroup="other" action={() => setTotal('0')} />
        <CalcButton
          title="+/-"
          colorGroup="other"
          action={() => applyOperator('+/-')}
        />
        <CalcButton
          title="%"
          colorGroup="other"
          action={() => applyOperator('%')}
        />
        <CalcButton
          title="&#247;"
          colorGroup="operators"
          action={() => applyOperator('/')}
        />
      </View>
      <View style={styles.buttonRow}>
        <CalcButton title="7" action={() => appendDigit('7')} />
        <CalcButton title="8" action={() => appendDigit('8')} />
        <CalcButton title="9" action={() => appendDigit('9')} />
        <CalcButton
          title="x"
          colorGroup="operators"
          action={() => applyOperator('*')}
        />
      </View>
      <View style={styles.buttonRow}>
        <CalcButton title="4" action={() => appendDigit('4')} />
        <CalcButton title="5" action={() => appendDigit('5')} />
        <CalcButton title="6" action={() => appendDigit('6')} />
        <CalcButton
          title="-"
          colorGroup="operators"
          action={() => applyOperator('-')}
        />
      </View>
      <View style={styles.buttonRow}>
        <CalcButton title="1" action={() => appendDigit('1')} />
        <CalcButton title="2" action={() => appendDigit('2')} />
        <CalcButton title="3" action={() => appendDigit('3')} />
        <CalcButton
          title="+"
          colorGroup="operators"
          action={() => applyOperator('+')}
        />
      </View>
      <View style={styles.buttonRow}>
        <CalcButton
          title="0"
          shapeOval={true}
          action={() => appendDigit('0')}
        />
        <CalcButton title="." action={() => appendDigit('.')} />
        <CalcButton title="=" colorGroup="operators" />
      </View>
    </View>
  );
}
