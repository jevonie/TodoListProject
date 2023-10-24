import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';
import { Button as RNEButton } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]); 

  const addTask = () => {
    if (task) {
      setTasks([...tasks, task]);
      setTask('');
    }
  };
  const removeTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.header}>To-Do List</Text>
      <TextInput
        style={styles.input}
        placeholder="Add a new task"
        value={task}
        onChangeText={(text) => setTask(text)}
      />
      <Button title="Add Task" onPress={addTask} />
      <FlatList
        data={tasks}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.taskItem}>
            <View style={{ flex: 1,  }}>
                <Text style={styles.taskText}>{item}</Text>
            </View>
           
            <RNEButton title="" icon={
                <Icon
                  name="trash"
                  size={20}
                  color="white">
                  </Icon>
              } buttonStyle={styles.removeButton} onPress={() => removeTask(index)} />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 8,
  },
  taskItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: 'lightgray',
    
  },
  taskText: {
    flex: 1, // This allows the text to expand to fill the available space
    verticalAlign: 'middle',
  },
  removeButton: {
    backgroundColor: '#ff0000',
  },
});
