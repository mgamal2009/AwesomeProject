import {Button, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import React, {useState} from "react";
import useTodos from "../Hooks/useTodos";
interface InputProps{
    onAddTodo : (newTodo:string) => void
}
export default function Input({onAddTodo} : InputProps) {
    const [newTodo, setNewTodo] = useState('');

    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.input}
                placeholder="Enter new todo"
                value={newTodo}
                onChangeText={(text) => setNewTodo(text)}
            />
            <TouchableOpacity onPress={() => {
                onAddTodo(newTodo);
                setNewTodo('');
            }
            } style={styles.addButton}>
                <Text style={styles.addButtonText}>ADD</Text>
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        marginBottom: 20,
        height: 40
    },
    addButton: {
        backgroundColor: '#0086ff',
        justifyContent: "center",
        alignItems: "center",
        padding: 5,
        borderRadius: 5,
        width: "20%"
    },
    addButtonText: {
        color: 'white',
    },
    input: {
        flex: 1,
        marginRight: 10,
        padding: 10,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
    },
})