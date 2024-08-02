import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

import { useDispatch } from 'react-redux';
import {setContactInfo} from './screenAction';
export default function UserDetails() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const dispatch = useDispatch();
  const handleNext = (name,phone) => {
   
    dispatch(setContactInfo(name,phone));
    console.log('Name:', name);
    console.log('Phone:', phone);
    // navigation.navigate('FindARide'); 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Welcome to Ride Together </Text>
      <Text style={styles.subHeaderText}>Tell us a little bit about yourself</Text>

      <TextInput
        style={styles.input}
        placeholder="Name"
        placeholderTextColor="#999"
        onChangeText={text => setName(text)}
        value={name}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone No"
        placeholderTextColor="#999"
        keyboardType="phone-pad"
        onChangeText={text => setPhone(text)}
        value={phone}
        
      />

      <TouchableOpacity style={styles.button} 
         onPress={()  => handleNext(name,phone)}
    >
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#FFF', // Background color to match the screenshot
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#000', // Black color for header text
  },
  subHeaderText: {
    fontSize: 16,
    marginBottom: 30,
    color: '#666', // Dark grey color for subheader text
  },
  input: {
    height: 40,
    width: '90%',
    borderColor: '#999',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
    backgroundColor: '#F0F0F0', // Light grey color for input background
  },
  button: {
    backgroundColor: '#008080', // Teal color for button background
    paddingVertical: 10,
    paddingHorizontal: 60,
    borderRadius: 5, // Rounded corners
  },
  buttonText: {
    color: '#FFF', // White color for button text
    fontSize: 16,
    fontWeight: 'bold',
  },
});