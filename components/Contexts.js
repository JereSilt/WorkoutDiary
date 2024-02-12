import { createContext } from "react";
import { useState } from "react";
import React from 'react';

const ExerciseName = createContext();
const ExerciseListContext = createContext();


const ExerciseListProvider = ({ children }) => {
  const [exercises, setExercises] = useState([]);
  return (
    <ExerciseListContext.Provider value={{ exercises, setExercises }}>
      {children}
    </ExerciseListContext.Provider>
  );
};

export { ExerciseName, ExerciseListContext, ExerciseListProvider};