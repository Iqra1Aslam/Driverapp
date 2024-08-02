import React, { useEffect, useState } from "react";
import { Text, StyleSheet, View,StatusBar, Button } from "react-native";
import { useSelector } from "react-redux";
import { reducer } from "./Reducer";


const Header = ()=> {
 

const cardData=useSelector((state)=>state.reducer);

const [cardItems,setcardItems]=useState(0)
useEffect(()=>{
  setcardItems(cardData.length)
},[cardData])

    return(
        <View>
    
     <Text style={{fontSize:30}}>{cardItems}</Text>
    
      </View> 
    // 
    );
    };
    const styles=StyleSheet.create({
      container:{
        flex:1
      }
    })
  export default Header;



