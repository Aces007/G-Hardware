import React from 'react';
import { View, TouchableOpacity, Image, Text, Button } from 'react-native';
import styles from '../styles';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function AScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header_container}>
        <Image
          source={require('../assets/Logo.png')}
          style={styles.logo}
        />
        <Text style={styles.title}>G! Tara Na!</Text>
        <Text style={styles.subtitle}>Harmony Unleashed: Your Ultimate Guide to Guitar Chords!</Text>
      </View>
      <Image
        source={require('../assets/chords/majors/A Major.png')}
        style={styles.chordchart}
      />
      <Text style={styles.p}> Accuracy Rate: </Text>

    <View style={styles.button_circle_container}>
      {/* Play Button */}
      <TouchableOpacity style={styles.button_circle} >
        <Icon name="play" size={24} color="#1E647E" />
      </TouchableOpacity>

      {/* Microphone Button */}
      <TouchableOpacity style={styles.button_circle} >
        <Icon name="microphone" size={24} color="#1E647E" />
      </TouchableOpacity>
    </View>
    </View> 
    
  );
}
