import { StatusBar } from 'expo-status-bar';
import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useState } from 'react';
import Task from './components/Tasks';
export default function App() {
  const[task, setTask] = useState();
  const[tasks, setTasks] = useState([]);
  const handlePress = () =>{
    Keyboard.dismiss();
    setTasks([...tasks, task]);
    setTask('');
  }
  const DeleteTask = (index) => {
    let tasksCopy = [...tasks];
    tasksCopy.splice(index, 1);
    setTasks(tasksCopy);
  }
  return (
    <View style={styles.container}>
      <View style={styles.tasksContainer}>
        <Text style={styles.title}>Today's Tasks</Text>
        <View style={styles.tasks}>
          {tasks.map((task, index)=>{
            return(
            <TouchableOpacity key={index} onPress={()=>DeleteTask(index)}>
              <Task item={task} />
            </TouchableOpacity>
          )
          })}
        </View>
      </View>
      <StatusBar style="auto" />
      <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.addTaskWrapper}
      >
        <TextInput style={styles.input}
        placeholder='Write New Task' 
        onChangeText={(e)=> setTask(e)}
        value={task}
        />
        <TouchableOpacity onPress={() => handlePress()}>
          <View style={styles.plusWrapper}>
            <Text style={styles.plusText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  tasksContainer: {
    paddingHorizontal: 35,
    paddingVertical: 60
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
  },
  tasks: {
    marginTop: 30,
  },
  addTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',

  },
  input: {
    backgroundColor: 'white',
    borderRadius: 60,
    padding: 15,
    width: 250,
    borderColor: 'grey',
    borderWidth: 1,
  },
  plusWrapper: {
    height: 60,
    width: 60,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 60,
    borderColor: 'grey',
    borderWidth: 1
  },
});
