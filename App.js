import React from "react";
import { Provider } from "react-redux";
import Ride from "./screens/OfferRide";
import { NavigationContainer, useNavigation,DrawerActions} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
 import AnimationPrac from "./screens/AnimationPrac";
import DrawerContent from './DrawerContent';
import WelcomeScreen from './map/WelcomeScreen';
import  Tracking from './map/mapTracking';
import  TrackEvent from './map/hello';
import VehicleDetails from "./screens/VehicleDetails";
import RegisterScreen from './screens/RegisterScreen';
import Profile from "./screens/Profile";
import OtpCode from'./screens/OtpCode'
import OTPInputScreen from './screens/OtpCode';
import LocationScreen from './redux/Location';
import ViewStateScreen from './redux/Head';
import  Navigation  from "./navigation";
import UserDetails from "./redux/ContactInfo";
import DorP from './redux/UserType';
import Messages from "./screens/Messages";
function App () {
  // <DateTime/>
  // <AnimationPrac/>
// /* <CountryExample/> */}

const Stack = createNativeStackNavigator();


return (
  // <NavigationContainer>
  //     <Stack.Navigator>
  //     <Stack.Screen name="Register" component={RegisterScreen} />
  //     {/* <Stack.Screen name="OtpCode" component={OtpCode} /> */}
  //     <Stack.Screen name="Profile" component={Profile} />
  //   </Stack.Navigator>
  //   </NavigationContainer>
  //  <OtpCode/>
     <Messages/>
            // <Profile/>
            // <ViewStateScreen/>
            // <UserDetails/>
            // <DorP/>

);
}

    // <VehicleDetails/>
    // <OTPInputScreen/>



export default App;
  




