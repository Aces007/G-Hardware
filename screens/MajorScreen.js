import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import styles from '../styles';
import { notes, handlePrev, handleNext, handleNoteClick } from '../functions/noteHandlers';

export default function ({ navigation }) {
  const [currentNoteIndex, setCurrentNoteIndex] = useState(0);

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

      <View style={styles.carousel_container}>
        <TouchableOpacity onPress={() => handlePrev(currentNoteIndex, setCurrentNoteIndex)} style={styles.button}>
          <Text style={styles.buttonText}>{"<"}</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleNoteClick(currentNoteIndex, navigation)}>
          <Text style={[styles.title, { color: '#A8F94F', fontSize: 250, marginVertical: 20 }]}>
            {notes[currentNoteIndex]}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleNext(currentNoteIndex, setCurrentNoteIndex)} style={styles.button}>
          <Text style={styles.buttonText}>{">"}</Text>
        </TouchableOpacity>
        
      </View>
    </View>
  );
}
