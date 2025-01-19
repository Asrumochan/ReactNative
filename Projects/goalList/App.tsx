import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [input, setInput] = useState("");
  const handleInputChange = (val: string) => {
    setInput(val);
    console.log(val);
  };
  const handleSetGoal = () => {
    if (input.trim()) {
      setTasks((tasks) => [...tasks, input]);
      setInput("");
    }
  };
  const handleInputReset = () => {
    setInput("");
  };
  const handleDeleteGoal = (index: number) => {
    setTasks((tasks) => tasks.filter((_, i) => i !== index));
  };
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.inputContainer}>
          <View style={{ flexDirection: "row" }}>
            <TextInput
              placeholder="Enter your Goal"
              placeholderTextColor="#0b3d8c"
              style={styles.inputBox}
              onChangeText={handleInputChange}
            >
              {input}
            </TextInput>
            <TouchableOpacity
              style={styles.resetButton}
              onPress={handleInputReset}
            >
              <Text style={{ color: "red", fontSize: 24 }}>X</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.inputButton} onPress={handleSetGoal}>
            <Text style={[styles.headingText, { color: "white" }]}>ADD</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.headingText}>Lists of Goals</Text>
        <View style={styles.goalContainer}>
          {tasks.map((item, index) => (
            <View key={index} style={styles.item}>
              <Text style={styles.text}>{item}</Text>
              <TouchableOpacity
                onPress={() => handleDeleteGoal(index)}
                style={styles.deleteButton}
              >
                <Text style={{ color: "red" }}>Delete</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    padding: 10,
    margin: 5,
    borderBottomWidth: 2,
    borderBottomColor: "black",
    alignItems: "center", 
  },
  goalContainer: {
    flex: 3,
    padding: 10,
  },
  headingText: {
    fontSize: 24,
    fontWeight: "bold",
    fontFamily: "sans-serif",
    marginHorizontal: 5,
    padding: 10,
  },
  inputBox: {
    width: 240,
    height: 50,
    borderWidth: 1,
    borderRadius: 5,
  },
  inputButton: {
    width: 130,
    height: 50,
    borderWidth: 1,
    borderRadius: 5,
    marginHorizontal: 5,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#080f0f",
    elevation: 5,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: "#b1bbc9",
    shadowOpacity: 0.5,
  },
  item: {
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: "#add8e6",
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  text: {
    fontSize: 20,
  },
  deleteButton: {},
  resetButton: {
    color: "red",
    borderWidth: 1,
    borderLeftWidth: 0,
    width: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
  },
});
