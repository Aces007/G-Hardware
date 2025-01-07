import React from 'react';
import { View, Image, Text, Button, StyleSheet } from 'react-native';
import styles from '../styles';

export default function ({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
                source={require('../assets/Logo.png')}
                style={styles.logo}
              />
              <Text style={styles.title}>G! Tara Na!</Text>
              <Text style={styles.subtitle}>Harmony Unleashed: Your Ultimate Guide to Guitar Chords!</Text>

      <Image
        source={require('../assets/chords/majors/A Major.png')}
        style={styles.chordchart}
      />

      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}


