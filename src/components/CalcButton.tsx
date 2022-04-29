import {Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from '../styles/CalculatorTheme';

interface Props {
  title: string;
  colorGroup?: 'numbers' | 'operators' | 'other';
  shapeOval?: boolean;
  action: (numberText: string) => void;
}

const CalcButton = ({
  title,
  colorGroup = 'numbers',
  shapeOval = false,
  action,
}: Props) => {
  return (
    <TouchableOpacity onPress={() => action(title)}>
      <View
        style={[
          styles.button,
          styles.operatorButtons,
          colorGroup === 'operators' && styles.operatorButtons,
          colorGroup === 'numbers' && styles.numberButtons,
          colorGroup === 'other' && styles.otherButtons,
          shapeOval && styles.buttonOval,
        ]}>
        <Text style={[styles.buttonText, styles.operatorButtonsText]}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CalcButton;
