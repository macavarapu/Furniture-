import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const CustomButton = ({ title, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.button}>
    <Text style={styles.text}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#008060',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 10,
  },
  text: {
    color: '#fff',
    fontSize: 16,
  },
});

export default CustomButton;
