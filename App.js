import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Button,Text,ScrollView,FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {

  const [courseGoals, setCourseGoals] = useState([]);

  const addGoalHandler = goalTitle => {
    setCourseGoals(courseGoals =>[...courseGoals,{id: Math.random().toString(), value:goalTitle }
    ]);
  };
  return (
    <View style={styles.screen}>
       <GoalInput onAddGoal={addGoalHandler}/>
      <FlatList data={courseGoals} renderItem={itemData => <GoalItem title={itemData.item.value}/>} />
      {/* <ScrollView>
        { courseGoals.map((goal)=> <View key={goal} style={styles.listItem}><Text>{goal}</Text></View>)}
      </ScrollView> */}
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
  
});

