import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React from "react";

interface TodoItemProps {
    text: string;
    onDelete: () => void;}
export default function TodoItem({text,onDelete}: TodoItemProps){
    return (
        <View style={styles.item}>
            <Text>{text}</Text>
            <TouchableOpacity onPress={onDelete} style={styles.deleteButton}>
                <Text style={styles.deleteButtonText}>Delete</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        marginVertical: 5,
        backgroundColor: '#e0e0e0',
        borderRadius: 5,
    },
    deleteButton: {
        backgroundColor: 'red',
        padding: 5,
        borderRadius: 5,
    },
    deleteButtonText: {
        color: 'white',
    },
});
