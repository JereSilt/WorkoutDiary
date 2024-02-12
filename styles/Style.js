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
    },
    radioButtons: {
        padding: 5,
        margin: 5,
    },
    exerciseContainer: {
        marginBottom: 10,
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 10,
        borderRadius: 8,
      },
    distanceContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 5,
        padding: 10,
      },
      dateHeader: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
      },
      distanceBox: {
        backgroundColor: '#e0e0e0',
        padding: 10,
        borderRadius: 8,
        alignItems: 'center',
        flex: 1,
        margin: 5,
      },
      unitContainer: {
        marginBottom: 20,
      },
      radioButtonContainer: {
        flexDirection: 'row',
        marginTop: 10,
      },
      radioButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 20,
      },
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