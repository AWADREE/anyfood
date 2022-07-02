import React from 'react';

// import { useState, useEffect } from "react";
import {
  Text,
  View,
  SafeAreaView,
  // StatusBar,
  // Alert,
  // ActivityIndicator,
  // TouchableOpacity,
  // Image,
} from "react-native";

import {assets, COLORS, FONTS, SIZES} from "../constants";
import { FocusedStatusBar } from "../components";

// import { useSelector, useDispatch } from "react-redux";
// import { updateInfo } from "../redux/reducers/userSlice";

// import MapView, { Marker } from "react-native-maps";
// import Geolocation from '@react-native-community/geolocation';

const Location = () => {
  // const [currentLocationisEnabled, setCurrentLocationisEnabled] = useState(true)
  // const [gettingLocation, setGettingLocation] = useState(true)
  // const user = useSelector((state) => state.user);
  // const dispatch = useDispatch();  

  // useEffect(() => {
  //   Geolocation.getCurrentPosition(info => {
  //   dispatch(updateInfo(
  //       {location: { 
  //         latitude: info.coords.latitude,
  //         longitude: info.coords.longitude
  //       }}
  //   ));
  //  });

    // if (status !== "granted") {
    //   Alert.alert(
    //     "Permission not granted",
    //     "Allow the app to use location service.",
    //     [{ text: "OK" }],
    //     { cancelable: false }
    //   );
    // }
  //   if(currentLocationisEnabled)
  //   { 
  //     GetCurrentLocation()
  //   }

  // }, []);
  

  // async function GetCurrentLocation() {
  //   try{

  //   Geolocation.getCurrentPosition(info => {
  //     if (info.coords) {
  //       const {latitude, longitude} = info.coords;
  //       //set google maps location to latlatitude and longitude
  //       // saveLocation(latitude, longitude);
  //       setGettingLocation(false);
  //     }
  //   });
    
  //    } catch(err){
  //     console.log(err)
  //    }
  // }

  // const saveLocation = async ( latitude, longitude) => {
  //   dispatch(updateInfo(
  //       {location: { latitude: latitude,
  //         longitude: longitude
  //       }}
  //   ));

  //   setGettingLocation(false)

  //   let response = await location.reverseGeocodeAsync({
  //     latitude,
  //     longitude,
  //   });

  //   for (let item of response) {
  //        let address = `${item.country}, ${
  //          item.region
  //        }`;
  //     dispatch(updateInfo({locationString:address}))
  //   }

  // }

//  const getLocationNow = async () =>
//  {
//   setCurrentLocationisEnabled(!currentLocationisEnabled)
//   if(currentLocationisEnabled === true)
//   {
//     setGettingLocation(true); 
//     GetCurrentLocation()
//   }
// }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.primary }}>
      <FocusedStatusBar background={COLORS.primary} />
      <View>
        <View style={{ width: "100%", height: "100%", padding: SIZES.small, justifyContent:"center", alignItems:"center" }}>
          <Text style={{fontWeight:"300", fontSize:SIZES.extraLarge, color:COLORS.white}}>Location</Text>
          {/* {
          gettingLocation ? 
          (
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                width: "100%",
              }}
            >
              <Text
                style={{
                  fontWeight: "300",
                  fontSize: SIZES.extraLarge,
                  color: COLORS.white,
                  marginVertical: SIZES.small,
                }}
              >
                Getting your current location
              </Text>

              <ActivityIndicator size="large" color="white" />
            </View>
          ) : 
          (
            <View>
              <View
                style={{ zIndex: 1, position: "absolute", top: 10, right: 10 }}
              >
                <View
                  style={{
                    backgroundColor: COLORS.white,
                    borderRadius: SIZES.large,
                    paddingHorizontal: SIZES.small / 2,
                    justifyContent: "center",
                    alignItems: "center",
                    marginBottom: SIZES.small / 2,
                    borderWidth: 1,
                    borderBottomColor: COLORS.primary,
                  }}
                >
                  <Text
                    style={{
                      fontSize: SIZES.small / 1.15,
                      color: COLORS.primary,
                      fontFamily: FONTS.semiBold,
                    }}
                  >
                    Get current location?
                  </Text>
                </View>
                <TouchableOpacity
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  onPress={() => {
                    getLocationNow();
                  }}
                >
                  <Image source={assets.location}/>
                  <View
                    style={{
                      width: 80,
                      height: 40,
                      borderRadius: SIZES.extraLarge,
                      backgroundColor: COLORS.primary,
                      justifyContent: "center",
                      padding: 5,
                      alignItems: currentLocationisEnabled
                        ? "flex-end"
                        : "flex-start",
                    }}
                  >
                    <View
                      style={{
                        width: 30,
                        height: 30,
                        borderRadius: SIZES.extraLarge,
                        backgroundColor: currentLocationisEnabled
                          ? "red"
                          : "green",
                      }}
                    />
                  </View>
                </TouchableOpacity>
              </View>
              <MapView
                initialRegion={{
                  latitude: user.location.latitude,
                  longitude: user.location.longitude,
                  latitudeDelta: 0.0022,
                  longitudeDelta: 0.0021,
                }}
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: SIZES.small,
                }}
              >
                <Marker
                  draggable
                  coordinate={{
                    latitude: user.location.latitude,
                    longitude: user.location.longitude,
                  }}
                  onDragEnd={(e) => {
                    saveLocation(
                      e.nativeEvent.coordinate.latitude,
                      e.nativeEvent.coordinate.longitude
                    );
                  }}
                />
              </MapView>
            </View>
          )} */}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Location;