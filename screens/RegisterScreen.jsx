import React, { useState,useEffect } from 'react';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { Button, Text, View, TextInput, TouchableOpacity,StyleSheet,Alert} from "react-native";
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import OtpCode from './OtpCode'
import { registerUser } from '../apiService';

import AsyncStorage from '@react-native-async-storage/async-storage';
function RegisterScreen({navigation}) {
  // const navigation=useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const [emailErr, setNameError] = useState("");
  const [passErr, setPassError] = useState("");
  const [error, setError] = useState(null);
  const [jwtToken, setJwtToken] = useState('');


const submit = async () => {
 
    const userData = {
      email,
      password,
    };
   
    try {
      const response = await registerUser(userData);
        if (response.success) {
        // Handle successful registration (e.g., OTP sent)
        Alert.alert('Registration successful!');
        console.log('response Data:', response.data);
        const { id,token } = response.data;
        // Store the ID and token
        // await AsyncStorage.setItem('id', id);
        await AsyncStorage.setItem('token', token);
        console.log('Token stored successfully:', token);
        // navigation.navigate('OtpCode');
        navigation.navigate('Profile');
      } else {
        setError(response.message || 'Something went wrong.');
      }
    } catch (error) {
      setError(error.response ? error.response.data : 'An error occurred during registration.');
    }
  }; 
  return (
      <View style={styles.container}>
        <Text style={styles.title}>Sign Up</Text>
     <View style={styles.input}>
          <FontAwesome name='envelope-o' color="#48d1cc" style={styles.icon}/>
          <TextInput  
           placeholder='Email' 
          placeholderTextColor={'gray'}
           value={email}
           onChangeText={(actualdata) => setEmail(actualdata)}
            />
      </View>
            {emailErr ? <Text style={{color:'red'}}>Enter valid email</Text> : null}
            {/* <View style={styles.action}> */}
            <View style={styles.input}>
            <FontAwesome name='lock' color="#48d1cc" style={styles.icon}/>
          <TextInput  
           placeholder='Password'
            placeholderTextColor={'gray'}
            value={password}
            autoCompleteType='passwod'
            onChangeText={(actualPass) => setPass(actualPass)}
            secureTextEntry
             />
              </View>
          {passErr ? <Text style={{color:'red'}}>Enter valid passwod</Text> : null}
      <TouchableOpacity
           style={styles.button}
            onPress={()=>submit()}
          >
            {error && <Text style={{ color: 'red' }}>{error}</Text>}
            <Text style={styles.buttonText}>Next</Text>
          
          </TouchableOpacity>
        
          <Text style={styles.text}>
       Already have an account?{' '}
        <TouchableOpacity>
          <Text style={styles.link}>Login</Text>
        </TouchableOpacity>
      </Text>
    </View>
  );
};


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      marginTop:20,
      backgroundColor: '#ffffff',
    },
    title: {
      fontSize: 24,
      marginBottom: 20,
      textAlign: 'center',
    },
    icon: {
      marginRight: 10,
      
    },
    input: {
      flexDirection: 'row',
      alignItems: 'center',
      height: 40,
      borderColor: 'lightgrey',
      borderWidth: 1,
      borderRadius: 5,
      marginBottom: 20,
      paddingHorizontal: 10,
    },
   
    text: {
      marginTop: 20,
      justifyContent:'center',
      alignItems:'center',
      textAlign: 'center',
    },
    button: {
      backgroundColor: '#167E72',
      padding: 10,
      borderRadius: 5,
      alignItems: 'center',
      
    },
    buttonText: {
      color: 'white',
      fontSize: 16,
    },
    link: {
    
      textDecorationLine: 'underline',
      color: '#167E72',
     
    },
  });
export default RegisterScreen;


  