import {useState} from 'react';

const useCalculator = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [runningTotal, setRunningTotal] = useState('0');
  const [startNewNumber, setStartNewNumber] = useState(true);
  const [lastOperator, setLastOperator] = useState('');

  const resetToZero = (): void => {
    setCurrentNumber('0');
    setRunningTotal('0');
  };

  const buildNumber = (digit: string): void => {
    if (digit === '.' && currentNumber.includes('.')) {
      return;
    }

    setCurrentNumber(startNewNumber ? digit : currentNumber + digit);
    setStartNewNumber(false);
  };

  const updateRunningTotal = (): number => {
    const newTotal = computeTwoNumberOperation(
      parseFloat(runningTotal),
      parseFloat(currentNumber),
      lastOperator,
    );
    setRunningTotal(newTotal.toString());
    setStartNewNumber(true);
    return newTotal;
  };

  const applyOperator = (operator: string): void => {
    if (operator === '+/-') {
      if (currentNumber.startsWith('-')) {
        setCurrentNumber(currentNumber.replace('-', ''));
      } else {
        setCurrentNumber('-' + currentNumber);
      }
      return;
    }

    if (operator === '%') {
      const numberFloat = parseFloat(currentNumber);
      const numberPercent = numberFloat / 100;
      setCurrentNumber(numberPercent.toString());
      return;
    }

    const newTotal = updateRunningTotal();

    if (operator === '=') {
      setCurrentNumber(newTotal.toString());
      setRunningTotal('');
    }

    setLastOperator(operator === '=' ? '' : operator);
  };

  const computeTwoNumberOperation = (
    number1: number,
    number2: number,
    operator: string,
  ): number => {
    switch (operator) {
      case '':
        return number2;
      case '+':
        return number1 + number2;
      case '-':
        return number1 - number2;
      case 'x':
        return number1 * number2;
      case '÷':
        return number1 / number2;
    }
    return 0;
  };

  return {
    currentNumber,
    runningTotal,
    resetToZero,
    applyOperator,
    buildNumber,
  };
};

export default useCalculator;
