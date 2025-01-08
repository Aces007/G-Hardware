import { useRef, useState } from 'react';
import { Animated } from 'react-native';

export function useMicAnimation() {
  const micScaleAnim = useRef(new Animated.Value(1)).current;
  const [micVisible, setMicVisible] = useState(false);

  const handleMicPress = () => {
    if (micVisible) {
      // Stop animation
      Animated.timing(micScaleAnim).stop();
      micScaleAnim.setValue(1); // Reset animation scale
      setMicVisible(false);
    } else {
      // Start animation
      setMicVisible(true);
      Animated.loop(
        Animated.sequence([
          Animated.timing(micScaleAnim, {
            toValue: 2.5,
            duration: 1000,
            useNativeDriver: true,
          }),
          Animated.timing(micScaleAnim, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
          }),
        ])
      ).start();
    }
  };

  return { micScaleAnim, micVisible, handleMicPress };
}
