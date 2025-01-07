import React, { useState } from 'react';
import { View, Image, Text, Button, TouchableOpacity } from 'react-native';
import styles from '../styles';

export default function ({ navigation }) {
  const notes = ["A", "B", "C", "D", "E", "F", "G"];
  const [currentNoteIndex, setCurrentNoteIndex] = useState(0);

  const handlePrev = () => {
    setCurrentNoteIndex((prevIndex) => (prevIndex === 0 ? notes.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentNoteIndex((prevIndex) => (prevIndex === notes.length - 1 ? 0 : prevIndex + 1));
  };

  const currentNote = notes[currentNoteIndex];

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/Logo.png')}
        style={styles.logo}
      />
      <Text style={styles.title}>G! Tara Na!</Text>
      <Text style={styles.subtitle}>Harmony Unleashed: Your Ultimate Guide to Guitar Chords!</Text>

      {/* Navigation Buttons */}
      <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
        <TouchableOpacity onPress={handlePrev} style={styles.button}>
          <Text style={styles.buttonText}>{"<"}</Text>
        </TouchableOpacity>

        <Text style={[styles.title, { color: '#00FF00', fontSize: 350, marginHorizontal: 20 }]}>
          {currentNote}
        </Text>

        <TouchableOpacity onPress={handleNext} style={styles.button}>
          <Text style={styles.buttonText}>{">"}</Text>
        </TouchableOpacity>
      </View>

      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}
