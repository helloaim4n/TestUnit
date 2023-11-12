// TaskTableScreen.js
import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const TaskTableScreen = ({ route }) => {
  const { tasks } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Task Table</Text>
      <FlatList
        data={tasks}
        renderItem={({ item, index }) => (
          <View style={styles.item}>
            <Text style={styles.text} key={index}>{item}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    borderRadius: 10,
  },
  text: {
    fontSize: 18,
  },
});

export default TaskTableScreen;