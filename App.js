import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import MajorScreen from './screens/MajorScreen';
import MinorScreen from './screens/MinorScreen';
import styles from './styles';
import AScreen from './screens/AScreen'; // A Major screen

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Major" component={MajorScreen} />
        <Stack.Screen name="Minor" component={MinorScreen} />
        <Stack.Screen name="A Major" component={AScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
