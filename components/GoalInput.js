import React, { useState } from 'react';
import { View, StyleSheet, Button, TextInput, Modal } from 'react-native';

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');
    function goalInputHandler(entredText) {
        setEnteredGoal(entredText)
    }

    const addGoalHandler = () => {
        props.onAddGoal(enteredGoal);
        setEnteredGoal('');
    };
    return (
        // if we se our modal visible = {false},it will hide the modal 
        <Modal visible={props.visible} animationType="slide" >
            <View style={styles.inputContainer}>
                <TextInput placeholder="Course" style={styles.input} onChangeText={goalInputHandler} value={enteredGoal} />
                {/* <Button title="ADD" onPress={props.onAddGoal.bind(this, enteredGoal)} /> */}
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="Cancel" color="red" onPress={props.onCacel} />
                    </View>
                    <View style={styles.button}>
                        <Button title="ADD" onPress={addGoalHandler} />
                    </View>
                </View>
            </View>
        </Modal>
    );
};
const styles = StyleSheet.create({
    inputContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    input: { borderColor: 'black', borderWidth: 1, padding: 10, width: '80%', marginBottom: 10 },
    buttonContainer: { flexDirection: 'row', justifyContent: 'space-between', width: '60%' },
    button: {
        width: '40%'
    }
});
export default GoalInput;