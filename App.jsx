import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import styles from './styles';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Image
          source={require('./assets/Logo.png')}
          style={styles.logo}
        />
        <Text style={styles.title}>G! Tara Na!</Text>
        <Text style={styles.subtitle}>Harmony Unleashed: Your Ultimate Guide to Guitar Chords!</Text>
        <TouchableOpacity style={styles.powerButton}>
          <Text style={styles.powerText}>⏻</Text>
        </TouchableOpacity>
      </View>

      {/* Buttons Section */}
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Major</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Minor</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
