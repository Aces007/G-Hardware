import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, NavigationContainer  } from '@react-navigation/native';
import { AppProvider, useAppContext } from "./AppContext"; 
import { ThemeProvider, useTheme } from './ThemeContext';

// const Stack = createStackNavigator();


function MainScreen () {
  
}


export default function App() {
  return (
    <MainScreen />
  );
}

