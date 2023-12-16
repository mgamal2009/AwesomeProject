import { FlatList, StyleSheet, View} from "react-native";
import TodoItem from "./TodoItem";
import useTodos from "../Hooks/useTodos";
import Input from "./Input";


export default function TodoList() {
    const {addTodo,deleteTodo, todos} = useTodos();
    return (
        <View style={styles.container}>
            <Input onAddTodo= {addTodo}/>
            <FlatList
                data={todos}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => <TodoItem text={item.text} onDelete={() => deleteTodo(item.id)}/>}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1,
    },
});