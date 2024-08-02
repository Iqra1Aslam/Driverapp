// import 'react-native-gesture-handler';
import {
    NavigationContainer,
    useNavigation,
    DrawerActions
  } from '@react-navigation/native';
  
  import {createNativeStackNavigator} from '@react-navigation/native-stack';
  import {createDrawerNavigator} from '@react-navigation/drawer';
  import WelcomeScreen from "./map/WelcomeScreen";
   import Ride from "./screens/OfferRide";
  import Tracking from "./map/mapTracking";
  import * as Icon from "react-native-feather";
  import DrawerContent from './DrawerContent';
  const StackNav = () => {
    const Stack = createNativeStackNavigator();
    const navigation = useNavigation();
    return (
          <Stack.Navigator >
          <Stack.Screen name=" " component={Ride}  options={{
            headerLeft: () => {
              return (
              <Icon.Menu height="25" width="25" stroke="gray"
              onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
              options={{
                headerShown: false,
              }}
            />
  
            );
          },}}
          />
        {/* <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} /> */}
          {/* <Stack.Screen name="VehicleDetails" component={VehicleDetails} /> */}
         </Stack.Navigator>
    );
  };
  const DrawerNav = () => {
    const Drawer = createDrawerNavigator();
    return (
      <Drawer.Navigator
        drawerContent={props => <DrawerContent {...props} />}
        screenOptions={{
          headerShown: false,
        }}>
        <Drawer.Screen name="Home" component={StackNav} />
      </Drawer.Navigator>
    );
  }
  
export default function Navigation(){
return(
   <NavigationContainer>
    <DrawerNav/> 
    {/* <LoginScreen/> */}
    {/* <Stack.Navigator >
        <Stack.Screen name="LoginScreen" component={LoginScreen}  options={{
         headerShown= 
        }}
        /> */}
      
      
      
    </NavigationContainer> 
  
);
}



