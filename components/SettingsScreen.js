import React from 'react';
import { useContext } from 'react';
import { View, Text, ScrollView, FlatList } from 'react-native';
import { ExerciseListContext } from './Contexts';
import Style from "../styles/Style"
import { RadioButton } from 'react-native-paper';

const SettingsScreen = () => {
    const { distanceUnit, setDistanceUnit } = useContext(ExerciseListContext);


    return (
    <View style={Style.container}>
       <View>
            <Text style={Style.header}>Change to metric/imperial</Text>
        </View>     
        <View >
           <RadioButton.Group style={Style.radioButtonContainer}>
            <RadioButton.Item 
            style={Style.radioButton}
            label="Kilometers" 
            value="Km" 
            status={distanceUnit === 'Km' ? 'checked' : 'unchecked'} 
            onPress={() => setDistanceUnit('Km')} />
            <RadioButton.Item
            style={Style.radioButton}
            label="Miles" 
            value="Miles" 
            status={distanceUnit === 'Miles' ? 'checked' : 'unchecked'} 
            onPress={() => setDistanceUnit('Miles')} />
           </RadioButton.Group>
        </View>
    </View>
    )
}

export default SettingsScreen;