import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import styles from '../styles';

export default function ({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Major Screen</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}


