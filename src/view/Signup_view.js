
import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import GoogleButton from "../components/GoogleButton";

const Signupview = ({ navigation }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Error states
  const [fullNameError, setFullNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validateEmail = (email) => {
    const regex = /\S+@\S+\.\S+/;
    return regex.test(email);
  };

  const handleSignIn = () => {
    let isValid = true;

    if (!fullName.trim()) {
      setFullNameError("Full Name is required");
      isValid = false;
    } else {
      setFullNameError('');
    }

    if (!email.trim()) {
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
      console.log('Signing up with:', fullName, email, password);
        navigation.navigate("Bottom");
      // Proceed with signup logic
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Account</Text>
      <Text style={styles.subtitle}>Let’s create account together</Text>
      <Text style={styles.label}>Full Name</Text>
      <CustomInput
        placeholder="Enter your name"
        value={fullName}
        onChangeText={setFullName}
        style={[styles.input, fullNameError && styles.errorInput]}
      />
      {fullNameError ? <Text style={styles.errorText}>{fullNameError}</Text> : null}

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

      <CustomButton title="Sign Up" onPress={handleSignIn} />
      <GoogleButton title="Sign up with Google" onPress={() => {}} />

      <View style={styles.footer}>
        <Text>Already have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('login')}>
          <Text style={styles.link}> Sign in</Text>
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
    borderColor: "red",
    borderWidth: 1,
    borderRadius: 6,
  },
});

export default Signupview;
