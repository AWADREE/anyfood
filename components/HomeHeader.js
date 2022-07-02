import React from 'react';
import { View, Text, Image } from 'react-native'

import {COLORS, FONTS, SIZES, assets} from '../constants'
import ShoppingCartIcon from './ShoppingCartIcon';
import { useSelector } from 'react-redux';

const HomeHeader = () => {
  
  const user = useSelector((state) => state.user);

  return (
    <View
      style={{
        backgroundColor: COLORS.primary,
        padding: SIZES.font,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={assets.logo}
            resizeMode="contain"
            style={{
              width: 60,
              height: 50,
            }}
          />
          <Text
            style={{
              color: COLORS.white,
              fontSize: SIZES.small,
              fontWeight: "300",
              fontStyle: "italic",
            }}
          >
            Any Food
          </Text>
        </View>
        <ShoppingCartIcon />
      </View>

      <View style={{ marginVertical: SIZES.font }}>
        <Text
          style={{
            fontFamily: FONTS.regular,
            fontSize: SIZES.small,
            color: COLORS.white,
          }}
        >
          Hello {user.firstName !== ""? "," + user.firstName: <></>} 👋
        </Text>
        <Text
          style={{
            fontFamily: FONTS.bold,
            fontSize: SIZES.large,
            color: COLORS.white,
            marginTop: SIZES.base / 2,
          }}
        >
          let's find you a good deal
        </Text>
      </View>
    </View>
  );
}

export default HomeHeader