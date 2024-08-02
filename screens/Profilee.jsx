import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image,Alert} from 'react-native';
import { RadioButton } from 'react-native-paper';
import PhoneInput from "react-native-phone-number-input";
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as ImagePicker from 'expo-image-picker'; // Import Expo ImagePicker
import * as ImageManipulator from 'expo-image-manipulator';
import axios from 'axios';
export default function Profile() {
  const [fullName, setFullName] = useState('');
  const [checked, setChecked] = useState(''); // State for radio button selection
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [image, setImage] = useState('https://t.ly/6f2ou'); // Initial profile image URL
  const [error, setError] = useState(null);
  useEffect(() => {
    (async () => {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Sorry, we need camera roll permissions to make this work!');
      }
    }
  )();
  }, []);

  const selectPhoto = async () => {

    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true, // We will handle cropping
        quality: 1, // Highest quality
      });

      if (!result.canceled) {
        const uri = result.assets[0].uri;
        console.log('Image URI:', uri);
        
        // Crop the image in a circular manner
        const manipulatedImage = await ImageManipulator.manipulateAsync(
          uri,
          [{ resize: { width: 400, height: 400 } }], // Resize the image to make it square
          { compress: 1, format: ImageManipulator.SaveFormat.PNG }
        );

        setImage(manipulatedImage.uri); // Set cropped image URI to state
      }
    } catch (error) {
      console.log('Error selecting image:', error);
    }
  };

   
  const handlePhoneNumberChange = (number) => {
    setPhoneNumber(number);
  };

  const handleSave = async() => {
    const profileDetails = {
      fullName,
      gender: checked,
      email,
      phoneNumber,
      profileImage: image,
    };
    const formData = new FormData();
    formData.append('profile_image', {
      name:'profile.jpg',
      uri: image,
      type: 'image/jpeg',
    });
    console.log(profileDetails);
    try {
     
      // Update profile details
      const token = await AsyncStorage.getItem('token');
        

      // Trimmed tokens for comparison
      const trimmedToken = token.trim();
     
      console.log('Trimmed Token:', trimmedToken);
     
  
      // Ensure tokens match
     
  
  

      const config = {
        headers: {
          
          'Authorization': `${trimmedToken}`,
          'Content-Type': 'multipart/form-data',
        }
      };
  
      console.log('Request Config:', config);
      const id = await AsyncStorage.getItem('id');
      const API_URL = 'http://10.0.2.2:8081/api/v1/user';
      const response = await axios.patch ((`${API_URL}/user-profile-image-add/:${id}`)
      , formData, {
       
        config
      });

      if (response.data.success) {
        Alert.alert('Image uplaod successful!');
        console.log('API Response:', response.data);
      } else {
        setError(response.data.message || 'Something went wrong.');
      }
    } catch (error) {
      console.error('Error during image uploading:', error);
      if (error.response) {
        console.error('Error response data:', error.response.data);
        setError(error.response.data.message || 'An error occurred during image uploading.');
      } else {
        setError('An error occurred during image uploading.');
      }
    }
  console.log(profileDetails);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Profile</Text>
      <TouchableOpacity style={styles.imageContainer} onPress={selectPhoto}>
        <Image
          style={styles.image}
          source={{ uri: image }}
        />
        <Text style={styles.changeImageText}>Change Image</Text>
      </TouchableOpacity>
      <TextInput
        style={styles.input}
        placeholder="Full Name"
        value={fullName}
        onChangeText={setFullName}
      />
      <View style={styles.radioContainer}>
        <Text style={styles.label}>Gender</Text>
        <View style={styles.radioButton}>
          <RadioButton
            value="Male"
            status={checked === 'Male' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('Male')}
            color="#167E72" // Change color of the checked RadioButton
            />
          <Text style={styles.radioText}>Male</Text>
        </View>
        <View style={styles.radioButton}>
          <RadioButton
            value="Female"
            status={checked === 'Female' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('Female')}
            color="#167E72" // Change color of the checked RadioButton
          />
          <Text style={styles.radioText}>Female</Text>
        </View>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <PhoneInput
        value={phoneNumber}
        onChangePhoneNumber={handlePhoneNumberChange}
        initialCountry="us"
        containerStyle={styles.phoneInputContainer}
        textContainerStyle={styles.textContainer}
      />
      <TouchableOpacity style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>Save Changes</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop:20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  changeImageText: {
    color: '#167E72',
    marginTop: 10,
  },
  input: {
    height: 40,
    borderColor: 'lightgrey',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  phoneInputContainer: {
    height: 40,
    width: '100%',
    borderColor: 'lightgrey',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  textContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 5,
    paddingVertical: 0,
    paddingHorizontal: 10,
  },
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginRight: 20,
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
  },
  radioText: {
    fontSize: 16,
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
});