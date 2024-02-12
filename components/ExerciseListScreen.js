import React, { useContext } from 'react';
import { View, Text, ScrollView, FlatList } from 'react-native';
import { ExerciseListContext } from './Contexts';
import Style from "../styles/Style"

const ExerciseListScreen = () => {
  // Fetch exercise data from your state or storage

  const { exercises, distanceUnit } = useContext(ExerciseListContext);
  

  const calculateSumDistance = (workoutType) => {
    const filteredExercises = exercises.filter((exercise) => exercise.selectedExercise === workoutType);
    const conversion = distanceUnit === 'Km' ? 1 : 0.621371;
    const sumDistance = filteredExercises.reduce((sum, exercise) => sum + parseFloat(exercise.distance) * conversion, 0);
    return sumDistance.toFixed(2);

  };

  return (
    <View style={Style.container}>
      <View style={Style.distanceContainer}>
        <View style={Style.distanceBox}>
            <Text style={Style.itemText}>Run {calculateSumDistance('Run')} {distanceUnit}</Text>
          </View>
          <View style={Style.distanceBox}>
            <Text style={Style.itemText}>Ski {calculateSumDistance('Ski')} {distanceUnit}</Text>
          </View>
          <View style={Style.distanceBox}>
            <Text style={Style.itemText}>Swim {calculateSumDistance('Swim')} {distanceUnit}</Text>
          </View>
      </View>
      <FlatList
      contentContainerStyle={{paddingBottom: 100}}
        data={exercises}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          
          <View style={Style.exerciseContainer}>
            <Text style={Style.dateHeader}>{new Date(item.date).toDateString()}</Text>
            <Text>Exercise: {item.selectedExercise}</Text>
            <Text>Distance: {item.distance} {distanceUnit} </Text>
            <Text>Duration: {item.duration}</Text>
          </View>
        )}
      />
      
    </View>
  
    
  );
};

export default ExerciseListScreen;

