import { createContext } from "react";
import { useState } from "react";
import React from 'react';

const ExerciseName = createContext();
const ExerciseListContext = createContext();


const ExerciseListProvider = ({ children }) => {
  const [exercises, setExercises] = useState([]);
  const [distanceUnit, setDistanceUnit] = useState('Km');
  return (
    <ExerciseListContext.Provider value={{ exercises, setExercises, distanceUnit, setDistanceUnit }}>
      {children}
    </ExerciseListContext.Provider>
  );
};

export { ExerciseName, ExerciseListContext, ExerciseListProvider};