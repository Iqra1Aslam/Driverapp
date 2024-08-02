import React from 'react';
import {View, StyleSheet, Text,TouchableOpacity } from "react-native";
import {DrawerContentScrollView,DrawerItem} from '@react-navigation/drawer';
import {Avatar, Title} from 'react-native-paper';
import {} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const DrawerList = [
  {icon: 'clockcircleo', label: 'History', navigateTo: 'Home'},
  {icon: 'car', label: 'manageRide', navigateTo: 'Profile'},
  {icon: 'setting', label: 'Settings', navigateTo: 'User'},
  {icon: 'infocirlceo', label: 'FAQ', navigateTo: ''},
];
// layput of our drawer items
const DrawerLayout = ({icon, label, navigationTo}) => {
  const navigation = useNavigation();
  // console.log(userData);
  return (
<DrawerItem
      icon={({color, size}) => <Icon name={icon} color={color} size={size} />}
      label={label}
      onPress={() => {
        navigation.navigate(navigateTo);
      }}
      
    />
  );
};

const DrawerItems = props => {
    return DrawerList.map((el, i) => {
      return (
        <DrawerLayout
          key={i}
          icon={el.icon}
          label={el.label}
          navigateTo={el.navigateTo}
        />
     
      );
    });
  };
function DrawerContent(props) {
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <TouchableOpacity activeOpacity={0.8}>
            <View style={styles.userInfoSection}>
              <View style={{flexDirection: 'row', marginTop: 15}}>
                <Avatar.Image
                  source={require('./assets/profile.png')}
                  size={50}
                  style={{marginTop: 5}}
                />
                <View style={{marginLeft: 10, flexDirection: 'column'}}>
                  <Title style={styles.title}>Aslam</Title>
                 
         
                  
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <View style={styles.drawerSection}>
            <DrawerItems />
          </View>
        </View>
      </DrawerContentScrollView>
      <View >
      <TouchableOpacity style={{
         backgroundColor: '#167E72',
         padding: 10,
         borderRadius: 5,
         alignItems: 'center',}} >
         <Text style={{ color: 'white',
      fontSize: 16,}}>Go TO Driver Mode</Text>
        </TouchableOpacity>   
      </View>
    </View>
  );
}
export default DrawerContent;

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 13,
    lineHeight: 14,
    // color: '#6e6e6e',
    width: '100%',
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    // marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
    borderBottomWidth: 0,
    borderBottomColor: '#dedede',
    borderBottomWidth: 1,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#dedede',
    borderTopWidth: 1,
    borderBottomColor: '#dedede',
    borderBottomWidth: 1,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});