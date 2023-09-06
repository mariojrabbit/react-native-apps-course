import { Text, StyleSheet, Dimensions } from 'react-native';

import Colors from '../../constants/colors';

const InstructionText = ({ children, style }) => {
  return <Text style={[styles.instructionText, style]}>{children}</Text>;
}

export default InstructionText;

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  instructionText: {
    fontFamily: "open-sans",
    color: Colors.secondary500,
    fontSize: deviceWidth < 380 ? 16 : 24,
  },
});