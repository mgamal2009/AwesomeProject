import {Image, StyleSheet, Text, View} from "react-native";
import Constants from 'expo-constants';

export default function Header(){
    return(
      <View style={styles.view}>
          <Image style={styles.icon} source={require('../assets/blue-check2219.jpg')}/>
          <Text style={styles.header}>Todo List</Text>
      </View>
    );
}

const styles = StyleSheet.create({
    header: {
        color:'#3F3D56',
        fontSize: 24,
        fontWeight: "bold"
    },
    icon: {
        width: 50,
        height: 50,

    },
    view:{
        flexDirection:"row",
        alignItems: "center",
        justifyContent: "center",
        marginTop: Constants.statusBarHeight ,
        borderRadius: 5,
        borderStyle:"solid",
        borderColor:"#000",
        borderBottomWidth: 1,
    }
})