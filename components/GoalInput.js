import React, { useState } from 'react';
import { View, StyleSheet, Button, TextInput, Modal } from 'react-native';

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');
    function goalInputHandler(entredText) {
        setEnteredGoal(entredText)
    }
    return (
        // if we se our modal visible = {false},it will hide the modal 
        <Modal visible={props.visible} animationType="slide" >
        <View style={styles.inputContainer}>
            <TextInput placeholder="Course" style={styles.input} onChangeText={goalInputHandler} value={enteredGoal} />
            <Button title="ADD" onPress={props.onAddGoal.bind(this, enteredGoal)} />
        </View>
        </Modal>
        );
};
const styles = StyleSheet.create({

    inputContainer: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
    input: { borderColor: 'black', borderWidth: 1, padding: 6, width: '80%' },
});
export default GoalInput;