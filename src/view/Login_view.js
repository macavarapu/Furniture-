
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Alert, Switch } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import GoogleButton from "../components/GoogleButton";

const Loginview = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  useEffect(() => {
    const loadUserData = async () => {
      try {
        const savedEmail = await AsyncStorage.getItem('userEmail');
        const savedRemember = await AsyncStorage.getItem('rememberMe');
        if (savedEmail && savedRemember === 'true') {
          setEmail(savedEmail);
          setRememberMe(true);
        }
      } catch (e) {
        console.log('Failed to load user data', e);
      }
    };

    loadUserData();
  }, []);

  const validateEmail = (email) => {
    const regex = /\S+@\S+\.\S+/;
    return regex.test(email);
  };

  const handleSignIn = async () => {
    let isValid = true;

    if (!email) {
      setEmailError("Email is required");
      isValid = false;
    } else if (!validateEmail(email)) {
      setEmailError("Enter a valid email address");
      isValid = false;
    } else {
      setEmailError('');
    }

    if (!password) {
      setPasswordError("Password is required");
      isValid = false;
    } else if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters");
      isValid = false;
    } else {
      setPasswordError('');
    }

    if (isValid) {
      try {
        if (rememberMe) {
          await AsyncStorage.setItem('userEmail', email);
          await AsyncStorage.setItem('rememberMe', 'true');
        } else {
          await AsyncStorage.removeItem('userEmail');
          await AsyncStorage.removeItem('rememberMe');
        }

        console.log('Logging in with:', email, password);
        navigation.navigate("Bottom");
      } catch (e) {
        console.log('Storage error:', e);
        Alert.alert('Error', 'Failed to save user data');
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Back</Text>
      <Text style={styles.subtitle}>Welcome Back! Please Enter Your Details.</Text>

      <Text style={styles.label}>Email</Text>
      <CustomInput
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
        style={[styles.input, emailError && styles.errorInput]}
      />
      {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}

      <Text style={styles.label}>Password</Text>
      <CustomInput
        placeholder="Enter Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={[styles.input, passwordError && styles.errorInput]}
      />
      {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}

      <View style={styles.row}>
        <View style={styles.rememberRow}>
          <Switch
            value={rememberMe}
            onValueChange={(value) => setRememberMe(value)}
          />
          <Text style={{ marginLeft: 8 }}>Remember For 30 Days</Text>
        </View>
        <TouchableOpacity>
          <Text style={styles.link}>Forgot Password</Text>
        </TouchableOpacity>
      </View>

      <CustomButton title="Sign In" onPress={handleSignIn} />
      <GoogleButton title="Sign In With Google" onPress={() => {}} />

      <View style={styles.footer}>
        <Text>Don't Have An Account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('signup')}>
          <Text style={styles.link}> Sign Up For Free</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#101817",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: "#828A89",
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    paddingVertical: 10,
    color: "#101817",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },
  rememberRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  link: {
    color: "#008060",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  errorText: {
    color: "red",
    marginTop: -8,
    marginBottom: 10,
    fontSize: 12,
  },
  errorInput: {
    borderColor: 'red',
    borderWidth: 1,
    borderRadius: 6,
  },
});

export default Loginview;


// import React, { useState } from "react";
// import { StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";
// import CustomInput from "../components/CustomInput";
// import CustomButton from "../components/CustomButton";
// import GoogleButton from "../components/GoogleButton";

// const Loginview = ({ navigation }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   // Error states
//   const [emailError, setEmailError] = useState('');
//   const [passwordError, setPasswordError] = useState('');

//   const validateEmail = (email) => {
//     const regex = /\S+@\S+\.\S+/;
//     return regex.test(email);
//   };

//   const handleSignIn = () => {
//     let isValid = true;

//     if (!email) {
//       setEmailError("Email is required");
//       isValid = false;
//     } else if (!validateEmail(email)) {
//       setEmailError("Enter a valid email address");
//       isValid = false;
//     } else {
//       setEmailError('');
//     }

//     if (!password) {
//       setPasswordError("Password is required");
//       isValid = false;
//     } else if (password.length < 6) {
//       setPasswordError("Password must be at least 6 characters");
//       isValid = false;
//     } else {
//       setPasswordError('');
//     }

//     if (isValid) {
//       console.log('Logging in with:', email, password);
//         navigation.navigate("Bottom");
//       // Proceed with login
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Welcome Back</Text>
//       <Text style={styles.subtitle}>Welcome Back! Please Enter Your Details.</Text>

//       <Text style={styles.label}>Email</Text>
//       <CustomInput
//         placeholder="Enter your email"
//         value={email}
//         onChangeText={setEmail}
//         style={[styles.input, emailError && styles.errorInput]}
//       />
//       {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}

//       <Text style={styles.label}>Password</Text>
//       <CustomInput
//         placeholder="Enter Password"
//         value={password}
//         onChangeText={setPassword}
//         secureTextEntry
//         style={[styles.input, passwordError && styles.errorInput]}
//       />
//       {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}

//       <View style={styles.row}>
//         <Text>Remember For 30 Days</Text>
//         <TouchableOpacity>
//           <Text style={styles.link}>Forgot Password</Text>
//         </TouchableOpacity>
//       </View>

//       <CustomButton title="Sign In" onPress={handleSignIn} />
//       <GoogleButton title="Sign In With Google" onPress={() => {}} />

//       <View style={styles.footer}>
//         <Text>Don't Have An Account?</Text>
//         <TouchableOpacity onPress={() => navigation.navigate('signup')}>
//           <Text style={styles.link}> Sign Up For Free</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     justifyContent: "center",
//   },
//   title: {
//     fontSize: 26,
//     fontWeight: "bold",
//     color: "#101817",
//     marginBottom: 8,
//   },
//   subtitle: {
//     fontSize: 14,
//     color: "#828A89",
//     marginBottom: 20,
//   },
//   label: {
//     fontSize: 18,
//     paddingVertical: 10,
//     color: "#101817",
//   },
//   row: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     marginVertical: 10,
//   },
//   link: {
//     color: "#008060",
//   },
//   footer: {
//     flexDirection: "row",
//     justifyContent: "center",
//     marginTop: 20,
//   },
//   errorText: {
//     color: "red",
//     marginTop: -8,
//     marginBottom: 10,
//     fontSize: 12,
//   },
//   errorInput: {
//     borderColor: 'red',
//     borderWidth: 1,
//     borderRadius: 6,
//   },
// });

// export default Loginview;
