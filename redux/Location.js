import React from "react";
import { Button, Text,TouchableOpacity,Image, View,StyleSheet,Alert} from "react-native";
import { useDispatch } from 'react-redux';
import  {setLocation}  from './screenAction';

export default function LocationScreen({ navigation }) {
  const dispatch = useDispatch();

  const handleLocationChange = (newLocation) => {
    dispatch(setLocation(newLocation));
  };

  return (
    <View style={styles.container}>
    <Image
    
    // className="h-300 w=300 absolute"
    source={require('../assets/loc.png')}
    />
      
      
           <Text style={{ fontSize: 20 }}>Are you in Lahore?</Text>
        
          <TouchableOpacity
          style={styles.button} 
            onPress={()  => handleLocationChange(("Lahore"))}
             >
          

            <Text style={styles.buttonText}>Yes i am here</Text>

</TouchableOpacity>

       
    
    <TouchableOpacity style={styles.button2}            
     onPress={()  => Alert.alert('Currently available only for lahore')} >
        <Text style={styles.buttonText}>NO</Text>
</TouchableOpacity>
        
        </View>
    
  );
} 
      
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        marginTop: 20,
        backgroundColor: '#fff',
        justifyContent:'center',
        alignItems:'center'
      },
      button: {
        backgroundColor: '#167E72',
        padding: 10,
        marginTop: 10,
       
        borderRadius: 5,
        alignItems: 'center',
      },
      button2: {
        backgroundColor: '#167E72',
        padding: 10,
        marginTop: 10,
        width: 120,
        borderRadius: 5,
        alignItems: 'center',
      },
      buttonText: {
        color: 'white',
        fontSize: 16,
      },
});

      