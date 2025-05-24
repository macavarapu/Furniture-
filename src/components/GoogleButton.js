import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const GoogleButton = ({ title, onPress }) => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    <Image source={require('../assets/images/google.png')} style={styles.icon} />
    <Text style={styles.text}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  text: {
    fontSize: 16,
  },
});

export default GoogleButton;
