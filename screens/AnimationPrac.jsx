
import React,{ useRef } from 'react';
import  { interpolate } from 'react-native-reanimated';
import {View,Text, TouchableOpacity,Animated } from 'react-native';

 function AnimationPrac() {
    // animation ref
    const animation=useRef(new Animated.Value(0)).current;
    // animated func use to animation start
    const startAnimation=()=>{
        Animated.spring(animation,{
            toValue:1,
            useNativeDriver:true
        }).start();
    };
  return (
    <View  style={{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
      }}>
        {/* transform changes */}
    <Animated.View
      style={[{
        width: 100,
        height: 100,
        backgroundColor: 'violet',
      },{transform:[{translateY:animation.interpolate({
        inputRange:[0,1],
        outputRange:[0,-100]
      })}]

      }]}
    /> 
    <TouchableOpacity style={{marginTop: 10,
        alignItems: 'center',
        textAlign: 'center',
        margin: 20,}} 
        onPress={()=>{startAnimation()}}>
    <Text>Animation start </Text></TouchableOpacity>
    </View>
  );
}
export default AnimationPrac;
// import { Button, View } from 'react-native';
// import Animated, { useSharedValue } from 'react-native-reanimated';

//  function AnimationPrac() {
//   const width = useSharedValue(100);

//   const handlePress = () => {
//     width.value = width.value + 50;
//   };

//   return (
//     <View style={{ flex: 1, alignItems: 'center' }}>
//       <Animated.View
//         style={{
//           width,
//           height: 100,
//           backgroundColor: 'violet',
//         }}
//       />
//       <Button onPress={handlePress} title="Click me" />
//     </View>
//   );
// }
