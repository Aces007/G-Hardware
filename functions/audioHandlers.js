import { Audio } from 'expo-av';

let sound;

export const handleAudioPlayback = async (isPlaying, setIsPlaying) => {
  try {
    if (isPlaying) {
      // Pause the audio if it's currently playing
      if (sound) {
        await sound.pauseAsync();
      }
      return false;
    } else {
      if (!sound) {
        // Load the audio file if not already loaded
        sound = new Audio.Sound();
        await sound.loadAsync(require('../assets/audio/major/A_Major.mp3')); // Replace with your actual wav file path
      }

      // Play the audio
      await sound.playAsync();

      // Reset play state when the audio finishes
      sound.setOnPlaybackStatusUpdate((status) => {
        if (status.didJustFinish) {
          setIsPlaying(false);
        }
      });

      return true;
    }
  } catch (error) {
    console.error('Error handling audio playback:', error);
    return false;
  }
};
