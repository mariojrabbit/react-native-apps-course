import { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [openModal, setOpenModal] = useState(false);
  const [listGoals, setListGoals] = useState([]);

  const addGoalHandler = (enteredGoalText) => {
    setListGoals((currentListGoals) => [
      ...currentListGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
  };

  const deleteGoalHandler = (id) => {
    setListGoals((currentListGoals) => {
      return currentListGoals.filter((goal) => goal.id !== id);
    })
  };

  const openModalHandler = () => {
    setOpenModal(!openModal);
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="Add new goal"
          color="#a065ec"
          onPress={openModalHandler}
        />
        {openModal && (
          <GoalInput
            onAddGoal={addGoalHandler}
            visible={openModal}
            onCloseModal={openModalHandler}
          />
        )}
        <View style={styles.goalsContainer}>
          <FlatList
            data={listGoals}
            renderItem={(itemData) => (
              <GoalItem itemData={itemData} onDeteItem={deleteGoalHandler} />
            )}
            alwaysBounceVertical={false}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 3,
    marginTop: 16,
    padding: 16,
  },
});
