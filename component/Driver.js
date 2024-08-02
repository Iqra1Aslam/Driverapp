

import React from "react";
import { Text, StyleSheet, View, StatusBar,ScrollView, Button,Image } from "react-native";
import  Header  from "./Headers";
import Product from "./Product";
import Driverlist from "./Driverlist";
// import { ScrollView } from "react-native-gesture-handler";


const Driver= ({navigation})=> {
 
 const drivers=[
   {
    id:1,
    name: 'Dani',
    // vehicle: string; // Car model, etc.
    rating: 4.4 // Average rating from passengers
    // Add other relevant driver properties
  },
 {
  id:2,
    name: 'Aslam',
    // vehicle: string; // Car model, etc.
    rating: 4.43
 },
 {
  id:3,
  name:"Ubaid",
 rating:6
 }
]
    return(

<View style={styles.container}>   
<Button title="go to driver list" onPress={()=>navigation.navigate('Driverlist')}/>         
  <Header/>
  <ScrollView>
   { 
   drivers.map((item)=><Product item={item}/>)
   }
   </ScrollView>
   {/* <Text style={{fontSize:30}}>UI for add to cart redux</Text> */}
 
    </View> 
    
  );
  };
  const styles=StyleSheet.create({
    container:{
      flex:1,
      justifyContent:'center',
      alignItems:'center'
    }
  })
  export default Driver;



