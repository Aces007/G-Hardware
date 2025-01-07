import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Image } from 'react-native';
import styles from '../styles';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
       <Image
          source={require('../assets/Logo.png')}
          style={styles.logo}
        />
      <Text style={styles.text}>Home Screen</Text>
      <Button
        title="Go to Major"
        onPress={() => navigation.navigate('Major')}
      />

<Button
        title="Go to Minor"
        onPress={() => navigation.navigate('Minor')}
      />
    </View>
  );
}

