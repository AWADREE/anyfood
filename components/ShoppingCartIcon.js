import React from 'react'
import { View, Text ,Image, TouchableOpacity} from 'react-native'

import { SIZES, assets, FONTS} from "../constants";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from 'react-redux/';

const ShoppingCartIcon = () => {

  const navigation = useNavigation();
     const cart = useSelector((state) => state.cart);
    
    const getCartLength = ()=>{
      let length = 0;
      cart.forEach(item => {
        length += item.quantity
      });
      return length;
    }

  return (
    <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
      <View
        style={{
          width: 40,
          height: 40,
          backgroundColor: "#47B5FF",
          borderRadius: SIZES.extraLarge,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={assets.cart}
          resizeMode="contain"
          style={{ width: 25, height: 25 }}
        />
        {cart.length > 0 ? (
          <View
            style={{
              position: "absolute",
              width: 20,
              height: 20,
              bottom: 0,
              left: 0,
              borderRadius: SIZES.large,
              backgroundColor: "#FF5D5D",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontFamily: FONTS.bold,
                fontSize: SIZES.small,
              }}
            >
              {getCartLength() > 9 ? "9+" : getCartLength()}
            </Text>
          </View>
        ) : (
          <></>
        )}
      </View>
    </TouchableOpacity>
  );
}

export default ShoppingCartIcon;