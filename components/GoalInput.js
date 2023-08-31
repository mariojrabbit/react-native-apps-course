import { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal, Image } from "react-native";

const GoalInput = ({ onAddGoal, visible, onCloseModal }) => {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  const goalInputHandler = (enteredGoalText) => {
    setEnteredGoalText(enteredGoalText);
  };

  const addGoalHandler = () => {
    onAddGoal(enteredGoalText);
    setEnteredGoalText('');
    onCloseModal();
  }


  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/goal.png")}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Your goal!"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <Button
            title="Add goal"
            onPress={addGoalHandler}
            disabled={!enteredGoalText}
            color="#b180f0"
          />
          <Button
            title="Cancel"
            onPress={onCloseModal}
            color="#f31282"
          />
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#311b6b",
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    backgroundColor: "#ddd",
    borderRadius: 6,
    width: "70%",
    color: "#000",
    padding: 8,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 16,
    gap: 8,
  },
});
