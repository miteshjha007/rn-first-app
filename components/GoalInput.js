import React, { useState } from 'react';
import { View, StyleSheet, Button, TextInput } from 'react-native';

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');
    function goalInputHandler(entredText) {
        setEnteredGoal(entredText)
    }
    return (
        <View style={styles.inputContainer}>
            <TextInput placeholder="Course" style={styles.input} onChangeText={goalInputHandler} value={enteredGoal} />
            <Button title="ADD" onPress={props.onAddGoal.bind(this, enteredGoal)} />
        </View>);
};
const styles = StyleSheet.create({

    inputContainer: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
    input: { borderColor: 'black', borderWidth: 1, padding: 6, width: '80%' },
})
export default GoalInput;