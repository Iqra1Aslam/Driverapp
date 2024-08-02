// src/screens/ViewStateScreen.js

import React from 'react';
import { useSelector } from 'react-redux';
import { View, Text, StyleSheet } from 'react-native';

const ViewStateScreen = () => {
  // Use useSelector to get the state from Redux store
  const location = useSelector((state) => state.location);
  const userType = useSelector((state) => state.userType);
  const email = useSelector((state) => state.name);
  const phoneNumber = useSelector((state) => state.phoneNumber);
  return (
    <View style={styles.container}>
      <Text style={styles.label2}>State Data</Text>
      <Text style={styles.label}>Location:</Text>
      <Text style={styles.value}>{location}</Text>
      
      <Text style={styles.label}>User Type:</Text>
      <Text style={styles.value}>{userType}</Text>
      
      <Text style={styles.label}>Name:</Text>
      <Text style={styles.value}>{email}</Text>
      
      <Text style={styles.label}>Phone Number:</Text>
      <Text style={styles.value}>{phoneNumber}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  label2: {
    marginTop:20,
    justifyContent:'center',
    alignItems:'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  value: {
    fontSize: 16,
    marginBottom: 16,
  },
});

export default ViewStateScreen;
