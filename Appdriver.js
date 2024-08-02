import React from "react";
import { Text, StyleSheet, View, StatusBar,ScrollView, Button,Image } from "react-native";

import Driver from './component/Driver';
import Driverlist from './component/Driverlist';
// import { ScrollView } from "react-native-gesture-handler";

const Stack = createNativeStackNavigator();
const App = ()=> {
  return (
  <NavigationContainer> 
    <Stack.Navigator >
            <Stack.Screen name="HomeScreen" component={Driver}  />
          <Stack.Screen name="Driverlist" component={Driverlist} />
           </Stack.Navigator>
           </NavigationContainer>
  );
};


    
  
  export default App;



