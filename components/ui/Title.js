import { Text, StyleSheet, Dimensions, Platform } from "react-native";

const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  title: {
    fontSize: deviceWidth < 380 ? 16 : 24,
    fontFamily: "open-sans-bold",
    color: "white",
    textAlign: "center",
    borderWidth: Platform.select({ ios: 0, android: 2 }),
    borderColor: "white",
    padding: 12,
    maxWidth: deviceWidth < 380 ? "100%" : "80%",
    width: 300
  },
});