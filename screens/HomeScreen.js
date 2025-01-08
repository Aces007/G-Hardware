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

        <View style={styles.chordshapebuttons_container}>
            {/* Major Button */}
            <TouchableOpacity
                style={styles.chordshapebutton}
                onPress={() => navigation.navigate('Major')}
            >
                <Text style={styles.chordshape_buttonText}>Major</Text>
            </TouchableOpacity>

            {/* Minor Button */}
            <TouchableOpacity
                style={styles.chordshapebutton}
                onPress={() => navigation.navigate('Minor')}
            >
            <Text style={styles.chordshape_buttonText}>Minor</Text>
            </TouchableOpacity>
        </View>
    </View>
  );
}

