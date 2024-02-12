import { StatusBar, StyleSheet } from "react-native";


export default Style = StyleSheet.create({
    container: {
        padding: 10,
       backgroundColor: '#0C7BEB',
       
    },
    navview:{
        padding: 10
    },
    header: {
        fontWeight: 'bold',
        margin: 5,
        color: 'white',
        fontSize: 25,
        textAlign: 'center',
    },
    formfield:{
        margin: 5,
        backgroundColor: 'white',
    },
    itemText:{
        fontWeight: 'bold',
        fontSize: 18,
        color: '#7209EB',
        textShadowColor: 'black',
        textShadowRadius: 2,
        textShadowOffset: {width: 1, height: 1},
    },
    exerciseContainer: {
        marginLeft: 5,
        marginRight: 5,
        backgroundColor: '#0CC1EB',
        borderlineColor: '#7209EB',
        borderWidth: 2,
        padding: 10,
        borderRadius: 8,
        marginBottom: StatusBar.currentHeight + 3
      },
    distanceContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#0C7BEB',
        marginTop: 5,
        padding: 10,
        borderWidth: 2,
        borderRadius: 8,
      },
    dateHeader: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
      },
    distanceBox: {
        backgroundColor: '#0CC1EB',
        padding: 13,
        borderRadius: 8,
        alignItems: 'center',
        flex: 1,
        margin: 5,
        
      },
    unitContainer: {
        marginBottom: 20,
      },
    radioButtonContainer: {

        justifyContent: 'center',
        margin: 5,
        padding: 10,
        flex: 1,
       
      },
    radioButton: {
      backgroundColor: '#e0e0e0',
        alignItems: 'center',
        margin: 5,
        padding: 10,
        borderRadius: 8,
        
      },
      
})

