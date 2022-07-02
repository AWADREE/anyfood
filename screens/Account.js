import React from 'react';

import { useState } from "react";
import {
  Text,
  View,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import {COLORS, SIZES, FONTS} from "../constants";
import {FocusedStatusBar} from "../components";
import { useSelector, useDispatch } from "react-redux";
import { Formik } from "formik";
import * as yup from "yup";
import { updateInfo } from "../redux/reducers/userSlice";

const FormSchema = yup.object({
  firstName: yup
    .string()
    .matches(/^[A-Za-z ]*$/, "Please enter a valid name")
    .max(40),
  lastName: yup
    .string()
    .matches(/^[A-Za-z ]*$/, "Please enter a valid name")
    .max(40),
  email: yup.string().email(),
});



const Account = () => {
  const [isEditing, setIsEditing] = useState(false)
  const user = useSelector((state) => state.user);
    const dispatch = useDispatch(); 

  const updateUserInfo = (values) =>{
    const newInfo = {
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
    };
    dispatch(updateInfo(newInfo));
    setIsEditing(false);
  }

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.primary}}>
      <FocusedStatusBar background={COLORS.primary} />
      <KeyboardAwareScrollView
      // contentContainerStyle={{ flexGrow: 1 }}
      // enableOnAndroid={true}
      >
        <ScrollView>
          <View style={{padding: SIZES.large}}>
            {user.firstName === '' ? (
              <View
                style={{
                  height: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    color: COLORS.white,
                    fontFamily: FONTS.regular,
                    fontSize: SIZES.extraLarge,
                    padding: SIZES.small,
                    marginVertical: SIZES.small,
                  }}>
                  You are not logged in yet
                </Text>
              </View>
            ) : isEditing ? (
              <View>
                <View
                  style={{
                    width: '100%',
                    height: '30%',
                    alignItems: 'center',
                    marginBottom: SIZES.small,
                  }}>
                  <Image
                    resizeMode="contain"
                    style={{
                      width: 170,
                      height: 170,
                      borderRadius: SIZES.extraLarge,
                    }}
                    source={{
                      uri: user.photo,
                    }}
                  />
                </View>
                <View
                  style={{
                    justifyContent: 'flex-start',
                    height: '70%',
                    width: '100%',
                  }}>
                  <Formik
                    validationSchema={FormSchema}
                    initialValues={{firstName: '', lastName: '', email: ''}}
                    onSubmit={(values, actions) => {
                      actions.resetForm();
                      updateUserInfo(values);
                    }}>
                    {props => (
                      <View>
                        <Text
                          style={{
                            fontFamily: FONTS.semiBold,
                            fontSize: SIZES.extraLarge,
                            color: COLORS.white,
                          }}>
                          First Name:
                        </Text>
                        <TextInput
                          style={{
                            backgroundColor: COLORS.white,
                            borderRadius: SIZES.large,
                            paddingHorizontal: SIZES.small * 2,
                            padding: SIZES.small / 2,
                            marginVertical: SIZES.small,
                          }}
                          placeholder="First Name..."
                          onChangeText={props.handleChange('firstName')}
                          value={props.values.firstName}
                        />
                        <Text
                          style={{
                            marginLeft: SIZES.large,
                            fontWeight: '300',
                            fontSize: SIZES.small * 1.3,
                            color: 'red',
                          }}>
                          {props.errors.firstName}
                        </Text>
                        <Text
                          style={{
                            fontFamily: FONTS.semiBold,
                            fontSize: SIZES.extraLarge,
                            color: COLORS.white,
                          }}>
                          Last Name:
                        </Text>
                        <TextInput
                          style={{
                            backgroundColor: COLORS.white,
                            borderRadius: SIZES.large,
                            paddingHorizontal: SIZES.small * 2,
                            padding: SIZES.small / 2,
                            marginVertical: SIZES.small,
                          }}
                          placeholder="Last Name..."
                          onChangeText={props.handleChange('lastName')}
                          value={props.values.lastName}
                        />
                        <Text
                          style={{
                            marginLeft: SIZES.large,
                            fontWeight: '300',
                            fontSize: SIZES.small * 1.3,
                            color: 'red',
                          }}>
                          {props.errors.lastName}
                        </Text>
                        <Text
                          style={{
                            fontFamily: FONTS.semiBold,
                            fontSize: SIZES.extraLarge,
                            color: COLORS.white,
                          }}>
                          Email:
                        </Text>
                        <TextInput
                          style={{
                            backgroundColor: COLORS.white,
                            borderRadius: SIZES.large,
                            paddingHorizontal: SIZES.small * 2,
                            padding: SIZES.small / 2,
                            marginVertical: SIZES.small,
                          }}
                          placeholder="Email..."
                          onChangeText={props.handleChange('email')}
                          value={props.values.email}
                          keyboardType="email-address"
                          onBlur={props.handleBlur('email')}
                        />
                        <Text
                          style={{
                            marginLeft: SIZES.large,
                            fontWeight: '300',
                            fontSize: SIZES.small * 1.3,
                            color: 'red',
                          }}>
                          {props.touched.email && props.errors.email}
                        </Text>
                        <View
                          style={{
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            flexDirection: 'row',
                            marginTop: SIZES.small,
                          }}>
                          <TouchableOpacity
                            style={{
                              width: '40%',
                              backgroundColor: COLORS.white,
                              height: 40,
                              borderRadius: SIZES.large,
                              justifyContent: 'center',
                              alignItems: 'center',
                              marginVertical: SIZES.small,
                            }}
                            onPress={() => {
                              setIsEditing(false);
                            }}>
                            <Text
                              style={{
                                fontFamily: FONTS.bold,
                                fontSize: SIZES.extraLarge,
                              }}>
                              Cancel
                            </Text>
                          </TouchableOpacity>
                          <TouchableOpacity
                            style={{
                              width: '40%',
                              backgroundColor: COLORS.white,
                              height: 40,
                              borderRadius: SIZES.large,
                              justifyContent: 'center',
                              alignItems: 'center',
                              marginVertical: SIZES.small,
                            }}
                            onPress={props.handleSubmit}>
                            <Text
                              style={{
                                fontFamily: FONTS.bold,
                                fontSize: SIZES.extraLarge,
                              }}>
                              Save
                            </Text>
                          </TouchableOpacity>
                        </View>
                      </View>
                    )}
                  </Formik>
                </View>
              </View>
            ) : (
              <View>
                <View
                  style={{
                    width: '100%',
                    height: '40%',
                    alignItems: 'center',
                    marginBottom: SIZES.small,
                  }}>
                  <Image
                    resizeMode="contain"
                    style={{
                      width: 170,
                      height: 170,
                      borderRadius: SIZES.extraLarge,
                    }}
                    source={{
                      uri: user.photo,
                    }}
                  />
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginVertical: SIZES.small,
                  }}>
                  <Text
                    style={{
                      fontFamily: FONTS.semiBold,
                      fontSize: SIZES.extraLarge,
                      color: COLORS.white,
                    }}>
                    First Name:
                  </Text>
                  <Text
                    style={{
                      fontWeight: '300',
                      fontSize: SIZES.extraLarge,
                      color: COLORS.white,
                    }}
                    numberOfLines={1}
                    adjustsFontSizeToFit>
                    {' '}
                    {user.firstName}
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginVertical: SIZES.small,
                  }}>
                  <Text
                    style={{
                      fontFamily: FONTS.semiBold,
                      fontSize: SIZES.extraLarge,
                      color: COLORS.white,
                    }}>
                    Last Name:
                  </Text>
                  <Text
                    style={{
                      fontWeight: '300',
                      fontSize: SIZES.extraLarge,
                      color: COLORS.white,
                    }}
                    numberOfLines={1}
                    adjustsFontSizeToFit>
                    {' '}
                    {user.lastName}
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginVertical: SIZES.small,
                  }}>
                  <Text
                    style={{
                      fontFamily: FONTS.semiBold,
                      fontSize: SIZES.extraLarge,
                      color: COLORS.white,
                    }}>
                    Email:
                  </Text>
                  <Text
                    style={{
                      fontWeight: '300',
                      fontSize: SIZES.extraLarge,
                      color: COLORS.white,
                    }}
                    numberOfLines={1}
                    adjustsFontSizeToFit>
                    {' '}
                    {user.email}
                  </Text>
                </View>
                <View
                  style={{
                    jsutifyContent: 'center',
                    alignItems: 'center',
                    marginVertical: SIZES.small,
                  }}>
                  {!isEditing && (
                    <TouchableOpacity
                      style={{
                        width: '50%',
                        backgroundColor: COLORS.white,
                        height: 40,
                        borderRadius: SIZES.large,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                      onPress={() => {
                        setIsEditing(true);
                      }}>
                      <Text
                        style={{
                          fontFamily: FONTS.bold,
                          fontSize: SIZES.extraLarge,
                        }}>
                        Edit
                      </Text>
                    </TouchableOpacity>
                  )}
                </View>
              </View>
            )}
          </View>
        </ScrollView>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}

export default Account;