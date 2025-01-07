import React from 'react';
import { View, Image, TouchableOpacity, Text, Button, StyleSheet } from 'react-native';
import styles from '../styles';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
       <Image
          source={require('../assets/Logo.png')}
          style={styles.logo}
        />
        <Text style={styles.title}>G! Tara Na!</Text>
        <Text style={styles.subtitle}>Harmony Unleashed: Your Ultimate Guide to Guitar Chords!</Text>

        <View style={styles.buttonsContainer}>
            {/* Major Button */}
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Major')}
            >
                <Text style={styles.buttonText}>Major</Text>
            </TouchableOpacity>

            {/* Minor Button */}
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Minor')}
            >
            <Text style={styles.buttonText}>Minor</Text>
            </TouchableOpacity>
        </View>
    </View>
  );
}

