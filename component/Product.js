import React, { useEffect, useState } from "react";
import { Text, StyleSheet, View,ScrollView,Image, StatusBar, Button } from "react-native";
import { addToCart,removeTOCart } from "./Action";
import {useDispatch, useSelector} from 'react-redux'
 const Product = (probs)=> {
  const item=probs.item
  // When you use Redux in your React Native application, the `dispatch` function is used to dispatch 
  // actions to the Redux store.

  const dispatch=useDispatch();
  const cardData=useSelector((state)=>state.reducer);
   const [isAdded,setIsAdded]=useState(false)
   const handleremoveToCart=(item)=>{
    dispatch(removeTOCart(item.id))
   }
  const handleAddToCart=(item)=>{
    // data goes in action
    dispatch(addToCart(item))
  }
  useEffect(()=>{
    let result= cardData.filter((element )=> {
          return element.id===item.id
           
        });
        if(result.length)
          {
            setIsAdded(true)
          }
          else{
            setIsAdded(false)
          }

  },[cardData])

    return(
    <View style={styles.container}>

<ScrollView>
        <Text style={{fontSize:20}}>{item.id}</Text>
        <Text style={{fontSize:20}}>{item.name}</Text>
        <Text style={{fontSize:20}}>{item.rating}</Text>
        <Image
    
    // className="h-300 w=300 absolute"
    source={require('../assets/loc.png')}
    />
   { isAdded?
   <Button title="Remove to cart" onPress={()=>handleremoveToCart(item)}/>:
    <Button title="Add to cart" onPress={()=>handleAddToCart(item)}/>}
    {/* {() => handleAddToCart(item)}: Creates a new function that will call handleAddToCart(item)
     when executed. Useful for passing event handlers without immediately invoking them.
{handleAddToCart(item)}: Immediately calls handleAddToCart(item) and passes the result to the JSX, 
which is typically not desired for event handlers. */}
        
        
   
  </ScrollView>

  </View> 
// 
);
};
const styles=StyleSheet.create({
  container:{
    flex:1
  }
})
export default Product;



// import React, { useEffect, useState } from "react";
// import { Text, StyleSheet, View,ScrollView,Image, StatusBar, Button } from "react-native";
// import { addDriver,removeDriver,updateDriver} from "./Action";
// import {useDispatch, useSelector} from 'react-redux'
//  const Product = (probs)=> {
//   const item=probs.item
//   const dispatch=useDispatch();
//   const cardData=useSelector((state)=>state.reducer);
//    const [isAdded,setIsAdded]=useState(false)
//    const handleremoveToCart=(item)=>{
//     dispatch(removeDriver(item.id))
//    }
//   const handleAddToCart=(item)=>{
//     // data goes from action
//     dispatch(addDriver(item))
//   }
//   // useEffect(()=>{
//   //   let result= cardData.filter((element )=> {
//   //         return element.name===item.name
           
//   //       });
//   //       if(result.length)
//   //         {
//   //           setIsAdded(true)
//   //         }
//   //         else{
//   //           setIsAdded(false)
//   //         }

//   // },[cardData])

//     return(
//     <View style={styles.container}>

// <ScrollView>
//         <Text style={{fontSize:20}}>{item.id}</Text>
//         <Text style={{fontSize:20}}>{item.name}</Text>
//         <Text style={{fontSize:20}}>{item.rating}</Text>
//         <Image
    
//     // className="h-300 w=300 absolute"
//     source={require('../assets/loc.png')}
//     />
//    {/* { isAdded?
//    <Button title="Remove to cart" onPress={()=>handleremoveToCart(item)}/>: */}
//     <Button title="Add to cart" onPress={()=>handleAddToCart(item)}/>
//     {/* {() => handleAddToCart(item)}: Creates a new function that will call handleAddToCart(item)
//      when executed. Useful for passing event handlers without immediately invoking them.
// {handleAddToCart(item)}: Immediately calls handleAddToCart(item) and passes the result to the JSX, 
// which is typically not desired for event handlers. */} 
//   </ScrollView>

//   </View> 
// // 
// );
// };
// const styles=StyleSheet.create({
//   container:{
//     flex:1
//   }
// })
// export default Product;






















