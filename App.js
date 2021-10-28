import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Button,Text,ScrollView } from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);


  function goalInputHandler(entredText) {
    setEnteredGoal(entredText)
  }

  function addGoalHandler() {
    setCourseGoals([...courseGoals, enteredGoal]);
  }
  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Course" style={styles.input} onChangeText={goalInputHandler} value={enteredGoal} />
        <Button title="Add" onPress={addGoalHandler} />
      </View>
      <ScrollView>
        { courseGoals.map((goal)=> <View key={goal} style={styles.listItem}><Text>{goal}</Text></View>)}
      </ScrollView>
      {/* <Text>{outputText}</Text>
      <Button title="Change Text" onPress={ () =>setOutputText('The Text Changed!')}/>
      <StatusBar style="auto" /> */}
    </View>
  );
}


const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  screen: {
    padding: 50
  },
  inputContainer: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  input: { borderColor: 'black', borderWidth: 1, padding: 6, width: '80%' },
  listItem:{
    padding:10,
    margin:10,
    backgroundColor: '#ccc',
    borderColor:'black',
    borderWidth:1
  }
});

