import { Animated } from 'react-native';

// The function that handles the microphone button press animation
export const handleMicPress = (micScaleAnim) => {
  Animated.sequence([
    Animated.timing(micScaleAnim, {
      toValue: 1.5, // Scale up
      duration: 500, // Half a second
      useNativeDriver: true,
    }),
    Animated.timing(micScaleAnim, {
      toValue: 1, // Scale back to original size
      duration: 500, // Half a second
      useNativeDriver: true,
    }),
  ]).start();
};
