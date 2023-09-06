import React, { useState } from 'react'
import {
  View,
  TextInput,
  StyleSheet,
  Alert,
  useWindowDimensions,
  KeyboardAvoidingView,
  ScrollView
} from 'react-native'

import Colors from '../constants/colors';
import Title from '../components/ui/Title';
import PrimaryButton from '../components/ui/PrimaryButton'
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';

const StartGameScreen = ({ onPickedNumber }) => {
  const [number, setNumber] = useState("");
  const { width, height } = useWindowDimensions();

  const handleResetInput = () => {
    setNumber("");
  };

  const numberInputHandler = (inputText) => {
    setNumber(inputText);
  };

  const handleConfirm = () => {
    const choseNumber = parseInt(number);

    if (isNaN(choseNumber) || choseNumber <= 0 || choseNumber > 99) {
      Alert.alert(
        "Invalid Number",
        "Number has to be a number between 1 and 99",
        [{ text: "OK", style: "destructive", onPress: handleResetInput }]
      );
      return;
    }

    onPickedNumber(choseNumber);
  };

  const marginTopDistance = height < 380 ? 20 : 50;

  return (
    <ScrollView style={styles.screen}>
      <KeyboardAvoidingView style={styles.screen} behavior="position">
        <View style={[styles.rootContainer, { marginTop: marginTopDistance }]}>
          <Title>Guess My Number</Title>
          <Card>
            <InstructionText>Enter a Number</InstructionText>
            <TextInput
              maxLength={2}
              style={styles.numberInput}
              keyboardType="number-pad"
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={numberInputHandler}
              value={number}
            />
            <View style={styles.buttonsContainer}>
              <View style={styles.buttonContainer}>
                <PrimaryButton onHandlePress={handleResetInput}>
                  Reset
                </PrimaryButton>
              </View>
              <View style={styles.buttonContainer}>
                <PrimaryButton onHandlePress={handleConfirm}>
                  Confirm
                </PrimaryButton>
              </View>
            </View>
          </Card>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
  rootContainer: {
    flex: 1,
    alignItems: 'center',
  },
  numberInput: {
    height: 50,
    width: 50,
    textAlign: 'center',
    fontSize: 32,
    borderBottomColor: Colors.secondary500,
    borderBottomWidth: 2,
    color: Colors.secondary500,
    marginVertical: 8,
    fontWeight: 'bold',
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  buttonContainer: {
    flex: 1,
  }
});
