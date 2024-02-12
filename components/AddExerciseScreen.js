import React, { useState, useContext } from 'react';
import { View, Text, Button, Alert } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import {RadioButton, TextInput,} from 'react-native-paper';
import { ExerciseName, ExerciseListContext } from './Contexts';
import Style from "../styles/Style"

const AddExerciseScreen = ({ navigation }) => {
  const [selectedExercise, setSelectedExercise] = useState("Run");


  const {exercise, setExercise} = useContext(ExerciseName)
  const {setExercises, distanceUnit} = useContext(ExerciseListContext)



  const [distance, setDistance] = useState('');
  const [duration, setDuration] = useState('');
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  

  function handleSave()  {
    if (distance === "" || duration === "") {
      alert("Please fill in all fields");
      return;
    }
    if (distance < 0 || duration < 0) {
      alert("Distance and duration must be positive numbers");
      return;
    }
    // Handle saving exercise data
    setExercise(selectedExercise);
    // Update your state or storage with the new exercise
    
      setExercises((prevExerciseList) => {
        const updatedExerciseList = [...prevExerciseList, {selectedExercise, distance, duration, date}];
        alert("Exercise added successfully to list");
      return updatedExerciseList;
      });
  };
  

  return (
    <View style={Style.container}>
      <View>
        <Text style={Style.header}>Select Exercise</Text>
      </View>
      <View >    
        <RadioButton.Group style={Style.radioButtonContainer}>
          <RadioButton.Item 
          style={Style.radioButton}
          label="Run" value="Run" 
          status={selectedExercise === 'Run' ? 'checked' : 'unchecked'} 
          onPress={() => setSelectedExercise('Run')} />
          <RadioButton.Item
          style={Style.radioButton}
          label="Ski" value="Ski"
          status={selectedExercise === 'Ski' ? 'checked' : 'unchecked'}
          onPress={() => setSelectedExercise('Ski')} />
          <RadioButton.Item
          style={Style.radioButton}
          label="Swim" value="Swim"
          status={selectedExercise === 'Swim' ? 'checked' : 'unchecked'}
          onPress={() => setSelectedExercise('Swim')} />
        </RadioButton.Group>
    </View>
    <View style={Style.container}>
      <TextInput
      style={Style.formfield} 
      label="Distance " 
      keyboardType='numeric'
      value={distance} 
      onChangeText={setDistance} 
      placeholder="0"
      right={<TextInput.Affix text={distanceUnit} />}
      />
    
      <TextInput
      style={Style.formfield} 
      label="Duration (minutes)" 
      keyboardType="numeric"
      value={duration} 
      onChangeText={setDuration} 
      placeholder="0"
      
      />
    
    </View>
      <View style={Style.container}>
        <Text style={Style.dateHeader}>Date: {date.toDateString()}</Text>
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
    <View style={Style.container}>
      
      <Button title="Add workout" onPress={handleSave} />
    </View>
  </View>
  );
};

export default AddExerciseScreen;