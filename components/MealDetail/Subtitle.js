import { Text, View, StyleSheet } from "react-native";

function Subtitle({children}) {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{children}</Text>
    </View>
  );
}
export default Subtitle;

const styles = StyleSheet.create ({
    subtitle: {
        color: "#701C3B",
        fontSize: 18,
        fontWeight: "bold",
        margin: 4,
        textAlign: "center",
      },
      subtitleContainer: {
        borderBottomColor: "#701C3B",
        borderBottomWidth: 2,
        margin: 4,
        marginHorizontal: 12,
        marginVertical: 4,
        padding: 6,
      },
});
