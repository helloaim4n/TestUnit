// App.js
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList, Keyboard, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TaskTableScreen from './TaskTableScreen'; // import the new screen

const Stack = createStackNavigator();

const HomeScreen = ({ navigation }) => {
  const [task, setTask] = useState("");
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    if(!task){
      // if task is empty, don't save it
      return;
    }
    
    Keyboard.dismiss();
    setTaskItems([...taskItems, task])
    setTask(null);
  }

  const handleDeleteTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  }

  return (
    <View style={styles.outerContainer}>
    <View style={styles.container}>
      <Text style={styles.title}>To-Do List ⚡️⚡️⚡️</Text>
      <TextInput
        style={styles.input}
        value={task}
        onChangeText={text => setTask(text)}
        placeholder={'Write a task'}
      />
      <TouchableOpacity 
        style={{
          backgroundColor: '#841584', 
          padding: 10, 
          borderRadius: 10, 
          alignItems: 'center'
        }} 
        onPress={handleAddTask}
      >
        <Text style={{ color: 'white', fontSize: 16 }}>Add Task</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={{
          backgroundColor: '#841584', 
          padding: 10, 
          borderRadius: 10, 
          alignItems: 'center', 
          marginTop: 10,
          marginBottom: 25,
        }} 
        onPress={() => navigation.navigate('TaskTable', { tasks: taskItems })}
      >
        <Text style={{ color: 'white', fontSize: 16 }}>Go to Task Table</Text>
      </TouchableOpacity>
      <FlatList
        data={taskItems}
        scrollEnabled={false}
        renderItem={({ item, index }) => (
          <View style={styles.item}>
            <Text style={styles.text} key={index}>{item}</Text>
            <Button style={styles.button} title="Delete" onPress={() => handleDeleteTask(index)} />
          </View>
        )}
      />
    </View>
    </View>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="TaskTable" component={TaskTableScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    width: '80%',
  },
  title: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '100%',
    marginBottom: 10,
    padding: 10,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
    backgroundColor: '#f9c2ff',
    padding: 10,
    borderRadius: 10,
  },
  text: {
    marginRight: 10, // add some space between the text and the button
  },
  button: {
    flex: 0.1, // this means it will take 10% of the available space
  },
});