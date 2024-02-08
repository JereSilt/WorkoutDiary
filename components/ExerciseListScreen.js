import React, { useContext } from 'react';
import { View, Text, ScrollView, FlatList } from 'react-native';
import { ExerciseListContext } from './Contexts';

const ExerciseListScreen = () => {
  // Fetch exercise data from your state or storage

  const { exercises } = useContext(ExerciseListContext);
  console.log('Exercises:', exercises)

  return (
    <View>
      <Text>Saved Exercises:</Text>
      <FlatList
        data={exercises}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item }) => (
          <View>
            <Text>Exercise: {item.selectedExercise}</Text>
            <Text>Distance: {item.distance}</Text>
            <Text>Duration: {item.duration}</Text>
            <Text>Date: {new Date(item.date).toDateString()}</Text>
          </View>
        )}
      />
    </View>
  );
}

export default ExerciseListScreen;

