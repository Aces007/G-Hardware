import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A0D17',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header_container: {
    position: 'absolute',
    top: 0,
    alignItems: 'center',
    width: '100%',
    zIndex: 1,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  subtitle: {
    fontSize: 12,
    color: '#CCCCCC',
    textAlign: 'center',
    marginBottom: 20,
  },
  p: {
    fontSize: 25,
    color: '#CCCCCC',
    textAlign: 'center',
    margin: 10,
  },
  chordchart: {
    height: '40%',
    resizeMode: 'contain',
  },
  button_circle_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '50%',
    alignSelf: 'center',
    position: 'absolute',
    bottom: 0,
    marginBottom: 50,
  },
button_circle: {
  backgroundColor: '#A8F94F',
  width: 60,
  height: 60,
  borderRadius: 30,
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1, // Keep mic button above the pulse
},
pulse_circle: {
  position: 'absolute',
  backgroundColor: '#53a5c5',
  width: 60,
  height: 60,
  borderRadius: 30,
  opacity: 0.5,
  zIndex: 0, // Pulse effect below the button
},

  micContainer: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  micCircle: {
    position: 'absolute',
    height: 150,
    width: 150,
    backgroundColor: '#53a5c5',
    borderRadius: 75,
    zIndex: 1,
  },
});
