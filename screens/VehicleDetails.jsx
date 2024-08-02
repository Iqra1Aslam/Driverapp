// import React, { useState } from 'react';
// import { View, Text, StyleSheet,TextInput,TouchableOpacity} from 'react-native';
// import { Picker } from '@react-native-picker/picker';
// export default function VehicleDetails()  {
// const [selectedCar, setSelectedCar] = useState('');
// const cars = ['Toyota', 'Honda', 'Ford', 'Chevrolet', 'BMW'];
// const [manufactorName, setManufactorName] = useState('');
// const [modelName, setModelName] = useState('');
// const [vehicleNumber, setVehicleNumber] = useState('');
//   return (
//     <View style={styles.container}>
//        <Text style={styles.label}>Vehicle Details</Text>
//       <View style={styles.pickerContainer}>
//         <Picker
//           selectedValue={selectedCar}
//           onValueChange={(itemValue) => setSelectedCar(itemValue)}
//           style={styles.picker}
//         >
//           <Picker.Item label="Select a car" value=""  color="#888"
//     />
//           {cars.map((car) => (
//             <Picker.Item label={car} value={car} key={car} />
//           ))}
//         </Picker>
//       </View>
//       <TextInput
//         style={styles.input}
//         placeholder="Manufactor Name"
//         value={manufactorName}
//         onChangeText={setManufactorName}
       
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Model Name"
//         value={modelName}
//         onChangeText={setModelName}
       
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Vehicle number"
//         value={vehicleNumber}
//         onChangeText={setVehicleNumber}
       
//       />
//        <TouchableOpacity style={styles.button} >
//         <Text style={styles.buttonText}>Save</Text>
//       </TouchableOpacity>
     
      
//       {/* <View>
//      */}
//       </View>
      
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     marginTop:20,
//     backgroundColor: '#ffffff',
//   },
//   label: {
//     fontSize: 24,
//     marginBottom: 20,
//     textAlign: 'center',
//   },
//   pickerContainer: {
    
//     width: '100%',
//     overflow: 'hidden',
//     borderColor: 'lightgrey',
//     borderWidth: 1,
//     borderRadius: 5,
//     marginBottom: 20,
    

//   },
//   picker: {
//     width: '100%',
//     height: 50,
//   },
//   input: {
//     height: 40,
//     borderColor: 'lightgrey',
//     borderWidth: 1,
//     borderRadius: 5,
//     marginBottom: 20,
//     paddingHorizontal: 10,
//   },
//    input: {
//     height: 40,
//     borderColor: 'lightgrey',
//     borderWidth: 1,
//     borderRadius: 5,
//     marginBottom: 20,
//     paddingHorizontal: 10,
//   },
//   button: {
//     backgroundColor: '#167E72',
//     padding: 10,
//     borderRadius: 5,
//     alignItems: 'center',
    
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 16,
//   },
// });
//Manage Vehicle 
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

export default function VehicleDetails() {
  const [carType, setCarType] = useState('');
  const [manufacturerName, setManufacturerName] = useState('');
  const [modelName, setModelName] = useState('');
  const [modelYear, setModelYear] = useState('');
  const [vehiclePlateNumber, setVehiclePlateNumber] = useState('');
  const [numberOfSeats, setNumberOfSeats] = useState('');
  const [vehicleColor, setVehicleColor] = useState('');

  const handleSave = () => {
    // Handle saving of vehicle details
    const vehicleDetails = {
      carType,
      manufacturerName,
      modelName,
      modelYear,
      vehiclePlateNumber,
      numberOfSeats,
      vehicleColor,
    };
    console.log(vehicleDetails);
    // Add your save functionality here, e.g., sending data to server or storing locally
  };

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={{
          latitude: 31.520116548082672,
          longitude: 74.37352809247052,
          latitudeDelta: 0.5,
          longitudeDelta: 0.21,
        }}
      />
      <View style={styles.formContainer}>
        <Text style={styles.title}>Vehicle Details</Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={carType}
            style={styles.input}
            onValueChange={(itemValue, itemIndex) => setCarType(itemValue)}
          >
            <Picker.Item label="Select Car Type" value="" />
            <Picker.Item label="Sedan" value="Sedan" />
            <Picker.Item label="SUV" value="SUV" />
            <Picker.Item label="Truck" value="Truck" />
            <Picker.Item label="Van" value="Van" />
          </Picker>
        </View>
        <TextInput
          style={styles.input}
          placeholder="Manufacturer Name"
          value={manufacturerName}
          onChangeText={setManufacturerName}
        />
        <TextInput
          style={styles.input}
          placeholder="Model Name"
          value={modelName}
          onChangeText={setModelName}
        />
        <TextInput
          style={styles.input}
          placeholder="Model Year"
          value={modelYear}
          onChangeText={setModelYear}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="Vehicle Plate Number"
          value={vehiclePlateNumber}
          onChangeText={setVehiclePlateNumber}
        />
        <TextInput
          style={styles.input}
          placeholder="Number of Seats"
          value={numberOfSeats}
          onChangeText={setNumberOfSeats}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="Vehicle Color"
          value={vehicleColor}
          onChangeText={setVehicleColor}
        />
        <TouchableOpacity style={styles.button} onPress={handleSave}>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  formContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent background
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: 'lightgrey',
    borderRadius: 5,
    marginBottom: 20,
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
