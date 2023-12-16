import {useEffect, useState} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface Todo {
    id: string;
    text: string;
}
export default function useTodos(){
    const [todos, setTodos] = useState<Todo[]>([]);

    useEffect(() => {
        // Load todos from AsyncStorage on component mount
        loadTodos();
    }, []);

    const loadTodos = async () => {
        try {
            const storedTodos = await AsyncStorage.getItem('todos');
            if (storedTodos) {
                setTodos(JSON.parse(storedTodos));
            }
        } catch (error) {
            console.error('Error loading todos from AsyncStorage:', error);
        }
    };

    const saveTodos = async (updatedTodos: Todo[]) => {
        try {
            await AsyncStorage.setItem('todos', JSON.stringify(updatedTodos));
        } catch (error) {
            console.error('Error saving todos to AsyncStorage:', error);
        }
    };
    const addTodo = (newTodo : string) => {
        if (newTodo.trim() !== '') {
            const updatedTodos = [
                ...todos,
                { id: Math.random().toString(), text: newTodo },
            ];
            setTodos(updatedTodos);
            saveTodos(updatedTodos);
        }
    };
    const deleteTodo = (id: string) => {
        const updatedTodos = todos.filter((todo) => todo.id !== id);
        setTodos(updatedTodos);
        saveTodos(updatedTodos);
    };
    return {loadTodos,saveTodos,addTodo,deleteTodo,todos}
}