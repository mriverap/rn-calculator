import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
} from 'react-native';
import React from 'react';

interface Props {
  title: string;
  colorScheme: 'lg' | 'dg' | 'org';
  shape?: 'round' | 'oval';
  onPress?: () => void; //Function,
}

const CalcButton = ({
  title,
  colorScheme = 'dg',
  shape = 'round',
  onPress,
}: Props) => {
  const ios = () => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        // style={[styles.fabLocation]}
        onPress={onPress}>
        <View style={shape === 'oval' ? styles.ovalFab : styles.fab}>
          <Text style={styles.fabText}>{title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const android = () => {
    if (colorScheme === 'lg') {
      return (
        // <View style={[styles.fabLocation]}>
        <TouchableNativeFeedback
          onPress={onPress}
          background={TouchableNativeFeedback.Ripple('black', false, 30)}>
          <View
            style={
              shape === 'oval'
                ? [styles.ovalFab, styles.lightGray]
                : [styles.fab, styles.lightGray]
            }>
            <Text style={[styles.fabText, styles.lightGray]}>{title}</Text>
          </View>
        </TouchableNativeFeedback>
        // </View>
      );
    } else if (colorScheme === 'dg') {
      return (
        <TouchableNativeFeedback
          onPress={onPress}
          background={TouchableNativeFeedback.Ripple('black', false, 30)}>
          <View
            style={
              shape === 'oval'
                ? [styles.ovalFab, styles.darkGray]
                : [styles.fab, styles.darkGray]
            }>
            <Text style={[styles.fabText, styles.darkGray]}>{title}</Text>
          </View>
        </TouchableNativeFeedback>
      );
    } else if (colorScheme === 'org') {
      return (
        <TouchableNativeFeedback
          onPress={onPress}
          background={TouchableNativeFeedback.Ripple('black', false, 30)}>
          <View
            style={
              shape === 'oval'
                ? [styles.ovalFab, styles.orange]
                : [styles.fab, styles.orange]
            }>
            <Text style={[styles.fabText, styles.orange]}>{title}</Text>
          </View>
        </TouchableNativeFeedback>
      );
    }
  };

  return Platform.OS === 'ios' ? ios() : android();
};

export default CalcButton;

const styles = StyleSheet.create({
  fab: {
    width: 80,
    height: 80,
    borderRadius: 100,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  ovalFab: {
    width: 180,
    height: 80,
    borderRadius: 100,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  fabText: {
    fontSize: 40,
    fontWeight: 'normal',
    alignSelf: 'center',
  },
  fabLocation: {
    // position: 'absolute',
    // bottom: 25,
    flex: 1,
  },
  lightGray: {
    backgroundColor: '#B2B2B1',
    color: 'black',
  },
  darkGray: {
    backgroundColor: '#343231',
    color: 'white',
  },
  orange: {
    backgroundColor: '#FDB146',
    color: 'white',
  },
});
