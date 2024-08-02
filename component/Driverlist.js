import React, { useEffect } from "react";
import { View, StyleSheet, Text, Image} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {getDriverList} from './Action'

const Driverlist =()=> {
   const dispatch=useDispatch();
   const Driverlist=useSelector((state)=>state.reducer)
   useEffect(()=>{
      dispatch(getDriverList())
 },[])
 console.log(Driverlist);
 return (
    <View>
    {/* // <View className="bg-white h-full w-full"> */}
    
    
     { Driverlist.length?
    Driverlist.map((item)=>(<Text style={{fontSize:30}}>{item.password}</Text>))
    :null
   }
    
    </View>
    );
 }
 const styles=StyleSheet.create({

textStyle:

{fontSize:30},

});
export default Driverlist;