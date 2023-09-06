import { View, StyleSheet, Dimensions } from 'react-native'

import Colors from '../../constants/colors'

const Card = ({ children }) => {
  return (
    <View style={styles.card}>
      {children}
    </View>
  );
}

export default Card;

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  card: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: deviceWidth < 380 ? 12 : 10,
    marginHorizontal: 24,
    borderRadius: 8,
    padding: 16,
    backgroundColor: Colors.primary800,
    elevation: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
  }
});