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

  const handleNoteClick = () => {
    if (notes[currentNoteIndex] === "A") {
      navigation.navigate("AScreen"); // Navigate to AScreen when "A" is clicked
    }
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

      {/* Note Display */}
      <TouchableOpacity onPress={handleNoteClick}>
        <Text style={[styles.title, { color: '#A8F94F', fontSize: 250, marginVertical: 20 }]}>
          {currentNote}
        </Text>
      </TouchableOpacity>

      {/* Navigation Buttons */}
      <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
        <TouchableOpacity onPress={handlePrev} style={styles.button}>
          <Text style={styles.buttonText}>{"<"}</Text>
        </TouchableOpacity>

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
