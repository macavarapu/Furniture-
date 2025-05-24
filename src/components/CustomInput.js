// import React from "react";
// import { StyleSheet, View } from "react-native";
// const CustomInput=()=>{
// return(
//     <View>

//     </View>
// )
// }
// const styles=StyleSheet.create({

// })
// export default CustomInput;

import React from 'react';
import { TextInput, StyleSheet, View } from 'react-native';

const CustomInput = ({ placeholder, value, onChangeText, secureTextEntry }) => (
  <View style={styles.container}>
    <TextInput
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
      style={styles.input}
      placeholderTextColor="#828A89"
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    paddingHorizontal: 15,
  },
  input: {
    height: 50,
    fontSize: 16,
  },
});

export default CustomInput;
