import React from "react";
import { Button, Text,TouchableOpacity,Image, View,StyleSheet,Alert} from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View><Image
    
    // className="h-300 w=300 absolute"
    source={require('../assets/loc.png')}
    /></View>
      <View>
           <Text style={{ fontSize: 30 }}>Are you live in Lahore</Text>
          <TouchableOpacity
            className="w-{950} bg-sky-400 p-3  rounded-2xl mt-3 mb-3" 
            onPress={()  => navigation.navigate('LoginScreen')}  >
          

            <Text className="text-xl font-bold text-white text-center">Yes i am here</Text>

</TouchableOpacity>
</View>
       
    <View>
    <TouchableOpacity
            className="w-{950} bg-sky-400 p-3  rounded-2xl mt-3 mb-3" 
            onPress={()  => Alert.alert('Currently available only for lahore')} >
               <Text className="text-xl font-bold text-white text-center">NO</Text>

</TouchableOpacity>
        </View>
        </View>
    
  );
} 
      
const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
  },
});

      