import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

const inputBar = (props) => {

    return (
        <View style={styles.inputContainer}>
            <TouchableOpacity style={styles.touchableOpacity} onPress={props.addNewTodo}>
                <Text style={styles.add}>ADD</Text>
            </TouchableOpacity>
            <TextInput
                style={styles.textInput}
                value={props.todoInput}
                onChangeText={(todoInput)=>props.textChange(todoInput)}
                />
        </View>
    )
}


const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        shadowOffset: { width: 0, height: 3 },
        shadowColor: '#171717',
        shadowOpacity: 0.1
    },
    textInput: {
        backgroundColor: "#F3F3F3",
        flex: 1,
        fontSize: 18,
        height: 35
    },
    touchableOpacity: {
        width: 100,
        backgroundColor: '#FFCE00',
        alignItems: 'center',
        justifyContent: 'center'
    },
    addBtn: {
        color: '#171717',
        fontSize: 18,
        fontWeight: '700',

    }

})

export default inputBar;
