import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text, TouchableOpacity } from 'react-native';
import CountryPicker from "react-native-country-codes-picker";
import DateTimePicker from '@react-native-community/datetimepicker';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
export default function Ride()  {
    const [date, setDate] = useState(new Date());
    const [show, setShow] = useState(false);
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [text, setText] = useState('');
    const [shows, setShows] = useState(false);
    
  //  func get called when the user select date 
    const onChange = (event, selectedDate) => {
      // date: Stores the currently selected date and time.
      const currentDate = selectedDate || date;
      // set date with selected date
      setDate(currentDate);
     
    };
  // isDatePickerVisible: Controls the visibility of the date picker modal.
    const showMode = (currentMode) => {
      setShow(true);
    };
  
    const showDatePicker = () => {
      setDatePickerVisibility(true);
    };
  
    const hideDatePicker = () => {
      setDatePickerVisibility(false);
    };
  
    const handleConfirm = (date) => {
      hideDatePicker();
      setDate(date);
  
      let tempDate = new Date(date);
      let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();
      let fTime = 'Hours: ' + tempDate.getHours() + ' | Minutes: ' + tempDate.getMinutes();
      setText(fDate + '\n' + fTime);
  
      console.log(fDate + ' (' + fTime + ')');
    };
  
    return (
      <View style={styles.container}>
         <Text style={styles.title}> Offer A Ride  </Text>
         <TextInput
        style={styles.input}
        placeholder="Pickup Location"
  
      />
       <TextInput
        style={styles.input}
        placeholder="Drop Location"
  
      />
       <View style={styles.inputt}>
      <FontAwesome name='calendar' color="#48d1cc" style={styles.icon}/>
         <TextInput
        
        
          placeholder="Select Date and Time"
          value={text}
          onFocus={showDatePicker}
          />
          </View>
           <TextInput
        style={styles.input}
        placeholder="No of Seats"
  
      />
       <TextInput
        style={styles.input}
        placeholder="Picker Per Seat"
  
      />
       <TouchableOpacity style={styles.button} >
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>
      
    <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="datetime"
          is24Hour={false}
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />
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
    
    pickerContainer: {
      
      width: '100%',
      overflow: 'hidden',
      borderColor: 'lightgrey',
      borderWidth: 1,
      borderRadius: 5,
      marginBottom: 20,
      
  
    },
    picker: {
      width: '100%',
      height: 50,
    },
    icon: {
      marginRight: 10,
      
    },
    inputt:{
      flexDirection: 'row',
      alignItems: 'center',
      height: 40,
      borderColor: 'lightgrey',
      borderWidth: 1,
      borderRadius: 5,
      marginBottom: 20,
      paddingHorizontal: 10,
    },
    input: {
      height: 40,
      borderColor: 'lightgrey',
      borderWidth: 1,
      borderRadius: 5,
      marginBottom: 20,
      paddingHorizontal: 10,
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
  
  
  


 


