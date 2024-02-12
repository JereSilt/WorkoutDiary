import React, { useState, useContext } from 'react';
import { View, Text, Button, Alert } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import {RadioButton, TextInput} from 'react-native-paper';
import { ExerciseName, ExerciseListContext } from './Contexts';
import Style from "../styles/Style"

const AddExerciseScreen = ({ navigation }) => {
  const [selectedExercise, setSelectedExercise] = useState("Run");


  const {exercise, setExercise} = useContext(ExerciseName)
  const {setExercises} = useContext(ExerciseListContext)



  const [distance, setDistance] = useState('');
  const [duration, setDuration] = useState('');
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  
  
  function handleSave(){
    // Handle saving exercise data
    setExercise(selectedExercise);
    // Update your state or storage with the new exercise

    setExercises((prevExerciseList) => {
      const updatedExerciseList = [...prevExerciseList, {selectedExercise, distance, duration, date}];
    console.log('Updated Exercise List:', updatedExerciseList);
    return updatedExerciseList;
    });
  };
  

  return (
    <View>
      <Text style={Style.header}>Select Exercise:</Text>
      <View style={Style.radioButtons}>
        
        <RadioButton.Group 
        onValueChange={selectedExercise => setSelectedExercise(selectedExercise)} value={selectedExercise}>
        <View >
          <Text>Run</Text>
          <RadioButton value="Run"/>
        </View>
        <View>
          <Text>Ski</Text>
          <RadioButton value="Ski"/>
        </View>
        <View>
          <Text>Swim</Text>
          <RadioButton value="Swim" />
        </View>
       </RadioButton.Group>
      </View>
      <TextInput label="Distance" keyboardType="numeric" value={distance} onChangeText={setDistance} placeholder="0" />
      <TextInput label="Duration" keyboardType="numeric" value={duration} onChangeText={setDuration} placeholder="0"/>

      <View>
        <Text>Date: {date.toDateString()}</Text>
        <Button title="Select Date" onPress={() => setShowDatePicker(true)} />
        {showDatePicker && (
          <DateTimePicker
            value={date}
            mode="date"
            display="default"
            onChange={(event, selectedDate) => {
              setShowDatePicker(false);
              setDate(selectedDate || date);
            }}
          />
        )}
      </View>

      <Button title="Add workout" onPress={handleSave} />
    </View>
  );
};

export default AddExerciseScreen;