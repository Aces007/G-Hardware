import { useRef, useState } from 'react';
import { Animated } from 'react-native';

export function useMicAnimation() {
  const micScaleAnim = useRef(new Animated.Value(1)).current;
  const micOpacityAnim = useRef(new Animated.Value(0)).current;
  const [micVisible, setMicVisible] = useState(false);

  const handleMicPress = () => {
    if (micVisible) {
      // Stop animation
      Animated.timing(micOpacityAnim).stop();
      setMicVisible(false);
    } else {
      // Start pulse animation
      setMicVisible(true);
      Animated.loop(
        Animated.sequence([
          Animated.timing(micScaleAnim, {
            toValue: 2.5,
            duration: 1000,
            useNativeDriver: true,
          }),
          Animated.timing(micOpacityAnim, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: true,
          }),
        ])
      ).start();
    }
  };

  return { micScaleAnim, micOpacityAnim, micVisible, handleMicPress };
}
