import {Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from '../../CalculatorTheme';

interface Props {
  title: string;
  colorGroup?: 'numbers' | 'operators' | 'other';
  shapeOval?: boolean;
  action?: () => void; //Function,
}

const CalcButton = ({
  title,
  colorGroup = 'numbers',
  shapeOval = false,
  action,
}: Props) => {
  switch (colorGroup) {
    case 'operators':
      return (
        <TouchableOpacity onPress={action}>
          <View
            style={[
              styles.button,
              styles.operatorButtons,
              {width: shapeOval ? 160 : 80},
            ]}>
            <Text style={[styles.buttonText, styles.operatorButtonsText]}>
              {title}
            </Text>
          </View>
        </TouchableOpacity>
      );
    case 'other':
      return (
        <TouchableOpacity onPress={action}>
          <View
            style={[
              styles.button,
              {width: shapeOval ? 160 : 80},
              styles.otherButtons,
            ]}>
            <Text style={[styles.buttonText, styles.otherButtonsText]}>
              {title}
            </Text>
          </View>
        </TouchableOpacity>
      );
    case 'numbers':
    default:
      return (
        <TouchableOpacity onPress={action}>
          <View
            style={[
              styles.button,
              styles.numberButtons,
              {width: shapeOval ? 160 : 80},
            ]}>
            <Text style={[styles.buttonText, styles.numberButtonsText]}>
              {title}
            </Text>
          </View>
        </TouchableOpacity>
      );
  }
};

export default CalcButton;
