import { StatusBar, StyleSheet } from "react-native";
import { MD3LightTheme } from "react-native-paper";

export default Style = StyleSheet.create({
    container: {
        marginTop: StatusBar.currentHeight + 5
    },
    navview:{
        padding: 10
    },
    header: {
        fontWeight: 'bold',
        margin: 5
    },
    formfield:{
        margin: 5
    },
    itemText:{
        fontWeight: 'bold',
        fontSize: 18
    },
    divider:{
        marginTop:5, 
        marginBottom: 5,
        backgroundColor: 'black'
    }

})

export const MyTheme = {
    ...MD3LightTheme,
    roundness: 2,
    colors: {
        ...MD3LightTheme.colors,
        primary: 'brown',
        surfaceVariant: 'orange',
        onSurface: 'brown'
    }
}