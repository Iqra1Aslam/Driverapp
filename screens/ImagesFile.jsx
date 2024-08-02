
import React, { useState } from "react";
import { View, StyleSheet, Text, Image} from "react-native";
import tw from "twrnc";

export default () => {


    return (
    <View>
    {/* // <View className="bg-white h-full w-full"> */}
    
    <Text style={styles.textStyle}> This is Images file </Text>
    
    <Image
    
    // className="h-300 w=300 absolute"
    source={require('../assets/test.jpg')}
    />
    </View>
    );
 }
 const styles=StyleSheet.create({


    listStyle:
    
    {
    
    display: "flex",
    justifyContent: "center", 
    alignItems: "center",
},
textStyle:
{fontSize:30},
imageStyle:{height:300,
width:300,},
});
