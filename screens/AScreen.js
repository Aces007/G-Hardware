import React, { useState, useRef } from 'react';
import { View, TouchableOpacity, Image, Text, Animated } from 'react-native';
import styles from '../styles';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function AScreen({ navigation }) {
  const [isAnimating, setIsAnimating] = useState(false); // Track animation state
  const pulseAnim = useRef(new Animated.Value(1)).current; // Animation scale

  const handleMicPress = () => {
    if (isAnimating) {
      // Stop animation
      setIsAnimating(false);
      pulseAnim.stopAnimation();
      pulseAnim.setValue(1); // Reset scale
    } else {
      // Start animation
      setIsAnimating(true);
      Animated.loop(
        Animated.sequence([
          Animated.timing(pulseAnim, {
            toValue: 2.5,
            duration: 1000,
            useNativeDriver: true,
          }),
          Animated.timing(pulseAnim, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
          }),
        ])
      ).start();
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header_container}>
        <Image
          source={require('../assets/Logo.png')}
          style={styles.logo}
        />
        <Text style={styles.title}>G! Tara Na!</Text>
        <Text style={styles.subtitle}>
          Harmony Unleashed: Your Ultimate Guide to Guitar Chords!
        </Text>
      </View>
      <Image
        source={require('../assets/chords/majors/A Major.png')}
        style={styles.chordchart}
      />
      <Text style={styles.p}>Accuracy Rate:</Text>

      <View style={styles.button_circle_container}>
        {/* Play Button */}
        <TouchableOpacity style={styles.button_circle}>
          <Icon name="play" size={24} color="#1E647E" />
        </TouchableOpacity>

        {/* Microphone Button */}
        <View style={{ position: 'relative' }}>
          {/* Pulse Animation */}
          {isAnimating && (
            <Animated.View
              style={[
                styles.pulse_circle,
                { transform: [{ scale: pulseAnim }] },
              ]}
            />
          )}

          {/* Mic Button */}
          <TouchableOpacity style={styles.button_circle} onPress={handleMicPress}>
            <Icon name="microphone" size={24} color="#1E647E" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
