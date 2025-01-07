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
    margin:10,
  },

  chordshapebuttons_container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
    width: '80%',
  },

  chordshapebutton:{
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 3 },
    width:'100%',
    margin: 20,
  },

  chordshape_buttonText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#000',
    textAlign:'center',
  },

  buttonsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
  },

  buttonText: {
    fontSize: 70,
    fontWeight: 'bold',
    color: '#ffff',
    textAlign:'center',
  },

  chordchart: {
    height: '40%',
    resizeMode: 'contain', // Ensures proper scaling of images
  },

  carousel_container:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '80%' ,
  },

  button_circle_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '50%', // Adjust as needed
    alignSelf: 'center',
    position: 'absolute',
    bottom: 0,
    marginBottom:50,
  },
  button_circle: {
    backgroundColor: '#A8F94F',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
