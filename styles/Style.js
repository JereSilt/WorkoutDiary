import { StatusBar, StyleSheet } from "react-native"

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