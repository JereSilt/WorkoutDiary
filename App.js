import React from 'react';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ExerciseListScreen from './components/ExerciseListScreen';
import AddExerciseScreen from './components/AddExerciseScreen';
import SettingsScreen from './components/SettingsScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { PaperProvider } from 'react-native-paper';
import Style from "./styles/Style"
import { SafeAreaView } from 'react-native-safe-area-context';


import { ExerciseName, ExerciseListContext, ExerciseListProvider  } from './components/Contexts';

const Tab = createBottomTabNavigator();

const App = () => {

  const [exercise, setExercise] = useState("");
  return (
    <PaperProvider>
    
    <ExerciseName.Provider value={{exercise, setExercise}}>
      <ExerciseListProvider>
      
      <NavigationContainer>
        <Tab.Navigator
        tabBarPosition="bottom"
        style={Style.container} 
        >
          <Tab.Screen name="Add Exercise" component={AddExerciseScreen} />
          <Tab.Screen name="Exercise list" component={ExerciseListScreen} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
      
      </ExerciseListProvider>
      </ExerciseName.Provider>
    
    </PaperProvider>
  );
};

export default App;