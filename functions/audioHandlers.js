import Sound from 'react-native-sound';

export const playSound = () => {
  Sound.setCategory('Playback');
  const sound = new Sound(require('../assets/audio/major/A_Major.mp3'), (error) => {
    if (error) {
      console.error('Failed to load the sound', error);
      return;
    }
    sound.play((success) => {
      if (success) {
        console.log('Sound played successfully');
      } else {
        console.error('Sound playback failed');
      }
      sound.release();
    });
  });
};
