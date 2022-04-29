import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  button: {
    width: 80,
    height: 80,
    borderRadius: 100,
    justifyContent: 'center',
  },
  buttonOval: {
    width: 160,
  },
  buttonText: {
    fontSize: 40,
    fontWeight: 'normal',
    alignSelf: 'center',
    color: 'white',
  },
  otherButtons: {
    backgroundColor: '#9B9B9B',
  },
  otherButtonsText: {
    color: 'black',
  },
  numberButtons: {
    backgroundColor: '#2D2D2D',
  },
  numberButtonsText: {
    color: 'white',
  },
  operatorButtons: {
    backgroundColor: '#FF9427',
  },
  operatorButtonsText: {
    color: 'white',
  },
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
  memText: {
    fontFamily: 'sans-serif-light',
    fontSize: 20,
    color: 'grey',
    marginHorizontal: 15,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 5,
    marginHorizontal: 10,
  },
});
