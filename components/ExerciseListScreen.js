import React, { useContext } from 'react';
import { View, Text, ScrollView, FlatList } from 'react-native';
import { ExerciseListContext } from './Contexts';
import Style from "../styles/Style"

const ExerciseListScreen = () => {
  // Fetch exercise data from your state or storage

  const { exercises } = useContext(ExerciseListContext);
  console.log('Exercises:', exercises)

  const calculateSumDistance = (workoutType) => {
    const filteredExercises = exercises.filter((exercise) => exercise.selectedExercise === workoutType);
    const sumDistance = filteredExercises.reduce((sum, exercise) => sum + parseFloat(exercise.distance), 0);
    return sumDistance.toFixed(2); // Assuming distances are numbers; adjust as needed
  };

  return (
    <View style={Style.container}>
      <View style={Style.distanceContainer}>
        <View style={Style.distanceBox}>
            <Text>Run:</Text>
            <Text>{calculateSumDistance('Run')} km</Text>
          </View>
          <View style={Style.distanceBox}>
            <Text>Ski:</Text>
            <Text>{calculateSumDistance('Ski')} km</Text>
          </View>
          <View style={Style.distanceBox}>
            <Text>Swim:</Text>
            <Text>{calculateSumDistance('Swim')} km</Text>
          </View>
      </View>
      <FlatList
        data={exercises}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item }) => (
          <View style={Style.exerciseContainer}>
            <Text style={Style.dateHeader}>{new Date(item.date).toDateString()}</Text>
            <Text>Exercise: {item.selectedExercise}</Text>
            <Text>Distance: {item.distance} km</Text>
            <Text>Duration: {item.duration}</Text>
          </View>
        )}
      />
    </View>
  );
}

export default ExerciseListScreen;

