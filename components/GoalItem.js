import { StyleSheet, View, Text, Pressable } from "react-native";

const GoalItem = ({ itemData, onDeteItem }) => {
  const deleteGoalHandler = () => {
    onDeteItem(itemData.item.id);
  }
  
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#333", borderless: true }}
        onPress={deleteGoalHandler}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{itemData.item.text}</Text>
      </Pressable>
    </View>
  )
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    color: "#fff",
    padding: 8,
  },
  pressedItem: {
    opacity: 0.5
  }
});
