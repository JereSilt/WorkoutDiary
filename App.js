import React from 'react';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ExerciseListScreen from './components/ExerciseListScreen';
import AddExerciseScreen from './components/AddExerciseScreen';
import SettingsScreen from './components/SettingsScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { ExerciseName, ExerciseListContext, ExerciseListProvider  } from './components/Contexts';

const Tab = createBottomTabNavigator();

const App = () => {

  const [exercise, setExercise] = useState("");
  return (
    <ExerciseName.Provider value={{exercise, setExercise}}>
      <ExerciseListProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Add Exercise" component={AddExerciseScreen} />
          <Tab.Screen name="Exercise list" component={ExerciseListScreen} />
        </Tab.Navigator>
      </NavigationContainer>
      </ExerciseListProvider>
      </ExerciseName.Provider>
  );
};

export default App;