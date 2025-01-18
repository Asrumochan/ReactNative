import { View, Text, StyleSheet } from "react-native";
import React from "react";

const FlatCards = () => {
  return (
    <View>
      <Text style={styles.headingText}>FlatCards</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
          <Text style={styles.text}>Red</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
          <Text style={styles.text}>Green</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
          <Text style={styles.text}>Blue</Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: "bold",
    paddingHorizontal: 10,
  },
  text: {
    color: "white",
  },
  container: {
    flex: 1,
    flexDirection: "row",
    padding: 5
  },
  card: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    height: 100,
    borderRadius: 5,
    margin: 8,
  },
  cardOne: {
    backgroundColor: "#ef5354",
  },
  cardThree: {
    backgroundColor: "#0613a1",
  },
  cardTwo: {
    backgroundColor: "#158517",
  },
});
export default FlatCards;
