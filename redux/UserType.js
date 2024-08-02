import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useDispatch } from 'react-redux';
import {setUserType} from './screenAction';
export default function DorP() {
    const dispatch=useDispatch();
    const handleUserType = (userType) => {
        dispatch(setUserType(userType));
      };
  return (
    <View style={styles.container}>
      <Text style={styles.questionText}>Are you a passenger or a Driver ?</Text>
      {/* <Image
        source={require('../assets/PD.jpg')} // Replace with your image path
        style={styles.image}
      /> */}
      <TouchableOpacity style={[styles.button, styles.passengerButton]}
      onPress={()  => handleUserType(("Passenger"))}
      >
        <Text style={styles.buttonText}> Passenger </Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, styles.riderButton]}
       onPress={()  => handleUserType(("Driver"))}
      >
        <Text style={styles.buttonText}> Diver </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 20,
  },
  questionText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginVertical: 100,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginVertical: 10,
  },
  passengerButton: {
    backgroundColor: '#167E72',
  },
  riderButton: {
    backgroundColor: 'lightgrey',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});