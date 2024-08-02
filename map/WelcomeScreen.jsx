import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";

import MapView, { Marker, PROVIDER_GOOGLE,Polyline } from 'react-native-maps';


export default () => {
  let points=[];
  for(let i=0;i<20;i++)
  {
    points.push({
      latitude: 31.470550157302053+i*0.01,
      longitude: 74.27490231355418+i*0.01,

    });
  };
  const [markersList, setMarkersList] = useState([
    {
        id:1,
      latitude: 31.470550157302053,
      longitude: 74.27490231355418,
      title: 'Team A',

      description: 'This is hmoe location'
    },
    {
      id:2,
      latitude: 31.515760673419454,
      longitude: 74.30827080683555,
      title: 'Team B',

      description: 'college location'
    }

  ])
  return (
    <View style={styles.container}>
      <MapView
        // provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.container}
        initialRegion={{
        // where we r going center map on
          latitude:  31.582045,
          longitude: 74.329376,
          // zoom
          latitudeDelta: 0.5,
          longitudeDelta: 0.21,
        }}
      >
         <Polyline
    coordinates={points}
    strokeWidth={6}
      />
        {/* <Marker coordinate={{latitude: 31.520116548082672,
        longitude: 74.37352809247052,}}
        title={"here"}
        description={"Current location"}
        /> */}
        {/* {
          markersList.map((marker)=>{
          return(

        <Marker

          key={marker.id}

        coordinate={{

          latitude: marker.latitude,
          longitude: marker.longitude,
        }}
        title={marker.title}

        description={marker.description}
        />
  
);
        })
            }       */}
            </MapView>

    </View>
    );
}
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: '100%',
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});


