import {StyleSheet, View} from 'react-native';
import Header from "./components/Header";
import TodoList from "./components/TodoList";


export default function App() {
    return (
        <View style={styles.container}>
            <Header/>
            <TodoList />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
