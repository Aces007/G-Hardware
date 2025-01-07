import React from 'react';
import { View, Image, Text, Button } from 'react-native';
import styles from '../styles';

export default function AScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to A Major!</Text>
      <Text style={styles.subtitle}>This is the screen for A Major chord.</Text>
    
      <Image
        source={require('../assets/chords/majors/A Major.png')}
        style={styles.chordchart}
      />

    <Button title="Go Back" onPress={() => navigation.goBack()} />

    </View>
  );
}
