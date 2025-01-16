import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const Sital = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.one}>
          <Text style={styles.text}>This is the Red Section (1 Part)</Text>
        </View>
        <View style={styles.two}>
          <Text style={styles.text}>This is the Blue Section (3 Parts)</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // The parent container should take the entire screen
    backgroundColor:'black'
  },
  one: {
    flex: 1, // Occupies 1 part of the container
    backgroundColor: 'red',
    justifyContent: 'center', // Centers text vertically
    alignItems: 'center', // Centers text horizontally
  },
  two: {
    flex: 3, // Occupies 3 parts of the container
    backgroundColor: 'blue',
    justifyContent: 'center', // Centers text vertically
    alignItems: 'center', // Centers text horizontally
  },
  text: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Sital;
