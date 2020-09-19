import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';
import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen'; // importing our welcome screen

export default function App() {
  return (
    //render screens here 
    <ViewImageScreen/>
  );
}


