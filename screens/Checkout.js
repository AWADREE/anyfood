import React from 'react';

import { useState, useEffect } from "react";
import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from "react-native";

import {COLORS, SIZES , FONTS , assets} from "../constants";
import { FocusedStatusBar } from "../components";
import { useNavigation } from "@react-navigation/native";
import MapView, { Marker } from "react-native-maps";

import { useSelector } from "react-redux";

const Checkout = ({ route }) => {
  const navigation = useNavigation();
  const { totalPrice } = route.params; 
  const [paymentMethod, setPaymentMethod] = useState("")
  const user = useSelector((state) => state.user);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <FocusedStatusBar background={COLORS.primary} />
      <ScrollView style={{ flexGrow: 1 , padding:SIZES.small/2}}>
        <View style={{ padding: SIZES.small, marginTop:SIZES.medium }}>
          <Text
            style={{
              fontFamily: FONTS.bold,
              fontSize: SIZES.extraLarge,
            }}
          >
            Deliver to:
          </Text>
          <Text
            style={{
              fontFamily: FONTS.semiBold,
              fontSize: SIZES.large,
              paddingHorizontal:SIZES.small/2
            }}
          >
            {user.locationString}
          </Text>
        </View>
        <View
          style={{
            width: "100%",
            justifyContent: "center",
            alignItems: "flex-start",
            padding: SIZES.small,
          }}
        >
          <View>
            <Text
              style={{
                fontFamily: FONTS.bold,
                fontSize: SIZES.extraLarge,
              }}
            >
              Pay with
            </Text>
          </View>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() => setPaymentMethod("Cash")}
          >
            <View
              style={{
                height: 30,
                width: 30,
                borderColor: COLORS.gray,
                borderWidth: 2,
                borderRadius: SIZES.large,
                margin: SIZES.small / 2,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {paymentMethod == "Cash" ? (
                <View
                  style={{
                    height: 22,
                    width: 22,
                    backgroundColor: COLORS.primary,
                    borderRadius: SIZES.large,
                  }}
                />
              ) : (
                <></>
              )}
            </View>

            <Text
              style={{
                fontFamily: FONTS.medium,
                fontSize: SIZES.medium,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Cash 💵
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              marginBottom:SIZES.small
            }}
            onPress={() => setPaymentMethod("Card")}
          >
            <View
              style={{
                height: 30,
                width: 30,
                borderColor: COLORS.gray,
                borderWidth: 2,
                borderRadius: SIZES.large,
                margin: SIZES.small / 2,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {paymentMethod == "Card" ? (
                <View
                  style={{
                    height: 22,
                    width: 22,
                    backgroundColor: COLORS.primary,
                    borderRadius: SIZES.large,
                  }}
                />
              ) : (
                <></>
              )}
            </View>

            <Text
              style={{
                fontFamily: FONTS.medium,
                fontSize: SIZES.medium,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Credit/Debit 💳
            </Text>
          </TouchableOpacity>

          <View style={{ width: "80%" }}>
            <Text
              style={{
                fontFamily: FONTS.bold,
                fontSize: SIZES.extraLarge,
              }}
            >
              Total: ${totalPrice}
            </Text>
          </View>
        </View>
        <View
          style={{
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: COLORS.primary,
              height: 35,
              width: 100,
              margin: 20,
              borderRadius: SIZES.extraLarge,
              justifyContent: "center",
              alignItems: "center",
              width: "80%",
              height: 45,
            }}
            onPress={() => navigation.navigate("Checkout", { totalPrice })}
            disabled={paymentMethod !== "Cash" && paymentMethod !== "Card"}
          >
            <Text
              style={{
                fontFamily: FONTS.bold,
                fontSize: SIZES.large,
                color: COLORS.white,
              }}
            >
              Place Order
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Checkout;