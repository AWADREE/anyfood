import React from 'react';
import { useState } from "react";
import {
  Text,
  View,
  SafeAreaView,
  StatusBar,
  Image,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from "react-native";

import {COLORS, SIZES, assets, FONTS} from "../constants";
import { FocusedStatusBar } from "../components";
import { useSelector, useDispatch } from "react-redux";
import { updateInfo , logout } from "../redux/reducers/userSlice";

import auth from '@react-native-firebase/auth';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
GoogleSignin.configure({
  scopes: ['https://www.googleapis.com/auth/userinfo.profile'], //scopes as you need
  webClientId:
    '620209233873-9n3khrbjtl6lk3t5nma4jnafnkpetkrc.apps.googleusercontent.com',
});

const Login = () => {
  const [loading, setLoading] = useState(false)
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();  


  const GoogleSignIn = async () => {
    setLoading(true)
    try {
      await GoogleSignin.hasPlayServices();
      const {idToken} = await GoogleSignin.signIn();
      // Create a Google credential with the token
      const googleCredential = await auth.GoogleAuthProvider.credential(
        idToken,
      );
      // Sign-in the user with the credential
      const res = await auth().signInWithCredential(googleCredential);
      const userInfo = {
        firstName: res.additionalUserInfo.profile.given_name,
        lastName: res.additionalUserInfo.profile.family_name,
        email: res.additionalUserInfo.profile.email,
        photo: res.additionalUserInfo.profile.picture,
      };
      dispatch(updateInfo(userInfo));

      // const accessToken = await (await GoogleSignin.getTokens()).accessToken;
      // console.log(res);
      // console.log(accessToken)
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
    
  };

  const googleSignOut = async ()=>{
    await GoogleSignin.revokeAccess();
    await auth().signOut().then(()=>{
      console.log('User Signed out')
    }).catch(e => Alert.alert('Error', e.message));
  }

  const logoutAlert = async () =>
    Alert.alert("Logout", "Are you sure?", [
      {
        text: "Cancel",
        onPress: () => {setLoading(false);},
        style: "cancel",
      },
      { text: "Yes", onPress: async () => {
        setLoading(false)
          await googleSignOut();
          await dispatch(logout());      
      }},
    ]);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.primary}}>
      <FocusedStatusBar background={COLORS.primary} />
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
        }}>
        <View
          style={{
            height: '50%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={assets.logo}
            resizeMode="contain"
            style={{
              width: 100,
              height: 90,
            }}
          />
          <Text
            style={{
              color: COLORS.white,
              fontSize: SIZES.extraLarge,
              fontWeight: '100',
              fontStyle: 'italic',
            }}>
            Any Food
          </Text>
        </View>
        <View style={{height: '50%', width: '100%', alignItems: 'center'}}>
          {user.firstName === '' ? (
            <></>
          ) : (
            <View>
              <Text
                style={{
                  fontFamily: FONTS.bold,
                  fontSize: SIZES.medium,
                  color: COLORS.white,
                  margin: SIZES.small,
                }}>
                Logged in as {user.firstName} {user.lastName}
              </Text>
              <Text
                style={{
                  fontFamily: FONTS.medium,
                  fontSize: SIZES.small,
                  color: COLORS.white,
                  textAlign: 'center',
                }}>
                Not you?
              </Text>
            </View>
          )}

          {loading ? (
            <ActivityIndicator size="large" color="white" />
          ) : user.firstName !== '' ? (
            <TouchableOpacity
              style={{
                backgroundColor: COLORS.white,
                borderRadius: SIZES.extraLarge,
                minWidth: 250,
                width: '80%',
                height: 45,
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
                margin: SIZES.small,
              }}
              onPress={() => {
                setLoading(true);
                logoutAlert();
              }}>
              <Text
                style={{
                  fontSize: SIZES.large,
                  fontWeight: '800',
                }}>
                Sign out
              </Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={{
                backgroundColor: COLORS.white,
                borderRadius: SIZES.extraLarge,
                minWidth: 250,
                width: '80%',
                height: 45,
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
                margin: SIZES.small,
              }}
              onPress={() => {
                GoogleSignIn();
              }}>
              <View
                style={{
                  width: '15%',
                  alignItems: 'flex-start',
                }}>
                <Image
                  source={assets.google}
                  resizeMode="contain"
                  style={{width: 22, height: 22}}
                />
              </View>
              <Text
                style={{
                  fontSize: SIZES.large,
                  fontWeight: '800',
                }}>
                Continue with google
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Login