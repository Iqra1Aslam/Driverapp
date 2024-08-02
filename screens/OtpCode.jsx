import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import jwtDecode from 'jwt-decode'; // Correct import
import { verifyOtp } from '../apiService';

const OtpCode = ({navigation}) => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const [error, setError] = useState(null);
  const inputs = [];

  const focusNextField = (index) => {
    if (index < inputs.length - 1) {
      inputs[index + 1].focus();
    }
  };

  const handleChange = (text, index) => {
    if (/^\d$/.test(text) || text === '') {
      const newOtp = [...otp];
      newOtp[index] = text;
      setOtp(newOtp);
      if (text !== '') {
        focusNextField(index);
      }
    }
  };

  const handleSubmit = async () => {
    const otpCode = otp.join('');
   
    console.log('OTP Code:', otpCode);
    userData={otpCode};
    setError(null);
    /*
    // if (response.success) {
          // Handle successful registration (e.g., OTP sent)
        //   Alert.alert('Registration successful!');
        //   console.log('response Data:', response.data);
        //   const { token } = response.data.token;ccC
        //   await AsyncStorage.setItem('token', token);
        //   console.log('Token stored successfully:', token);
        //   navigation.navigate('OtpCode');
       
        // } else {
    */
        try {
          const token = await AsyncStorage.getItem('token');
          // Trimmed tokens for comparison
          const trimmedToken = token.trim();
          console.log('Trimmed Token:', trimmedToken);
          // Ensure tokens match

          const API_URL = 'https://ride-together-mybackend.onrender.com/api/v1/auth';

          const config = {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `${trimmedToken}`
            }
          };
      
          console.log('Request Config:', config);
      
          const response = await axios.post(
            `${API_URL}/verify-otp`,
            { otp_code: otpCode },
            config
          );
      
          console.log('API Response:', response.data);
    
      
          if (response.data.success) {
            Alert.alert('OTP verification successful!');
            console.log('API Response:', response.data);
            navigation.navigate('Profile');
          } else {
            setError(response.data.message || 'Something went wrong.');
          }
        } catch (error) {
          console.error('Error during OTP verification:', error);
          if (error.response) {
            console.error('Error response data:', error.response.data);
            setError(error.response.data.message || 'An error occurred during verification.');
          } else {
            setError('An error occurred during verification.');
          }
        }
      };
      
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter Your OTP Code</Text>
      <View style={styles.otpContainer}>
        {otp.map((_, index) => (
          <TextInput
            key={index}
            style={styles.otpInput}
            keyboardType="numeric"
            maxLength={1}
            value={otp[index]}
            onChangeText={(text) => handleChange(text, index)}
            ref={(input) => (inputs[index] = input)}
          />
        ))}
      </View>
      {error && <Text style={styles.errorText}>{error}</Text>}
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 40,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  otpInput: {
    width: 40,
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    textAlign: 'center',
    fontSize: 24,
    marginHorizontal: 5,
  },
  submitButton: {
    backgroundColor: '#167E72',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#FFF',
    fontSize: 18,
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default OtpCode;
