import { View, Text, StyleSheet, Dimensions } from 'react-native';

import Colors from '../../constants/colors';

const NumberContainer = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>
        {children}
      </Text>
    </View>
  )
}

export default NumberContainer;

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.secondary500,
    padding: deviceWidth < 380 ? 10 : 10,
    margin: deviceWidth < 380 ? 20 : 10,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    color: Colors.secondary500,
    fontSize: deviceWidth < 380 ? 24 : 36,
    fontFamily: "open-sans-bold",
  },
});