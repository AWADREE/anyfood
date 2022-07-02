import React from 'react';

import { View ,Text ,Image, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import {COLORS, SIZES, SHADOWS, assets, FONTS} from '../constants'
import { SubInfo, Price, Title } from "./SubInfo";

import { useDispatch } from "react-redux";
import { increment, decrement, removeItem } from "../redux/reducers/cartSlice";

const CartCard = ({data}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  return (
    <TouchableOpacity onPress={() => navigation.navigate("Detailes", { data })}>
      <View
        style={{
          backgroundColor: COLORS.white,
          borderRadius: SIZES.font,
          marginBottom: SIZES.extraLarge,
          margin: SIZES.base,
          ...SHADOWS.dark,
        }}
      >
        <View style={{ width: "100%", height: 250 }}>
          <Image
            source={data.image}
            resizeMode="cover"
            style={{
              width: "100%",
              height: "100%",
              borderTopLeftRadius: SIZES.font,
              borderTopRightRadius: SIZES.font,
            }}
          />
        </View>

        <SubInfo />
        <View
          style={{
            width: "100%",
            padding: SIZES.font,
          }}
        >
          <Title
            title={data.name}
            subTitle={data.creator}
            titleSize={SIZES.large}
            subtitleSize={SIZES.small}
          />
          <View
            style={{
              marginTop: SIZES.font,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Price price={data.price * data.quantity} />
            <View
              style={{
                justifyContent: "center",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <TouchableOpacity
                style={{
                  padding: SIZES.small,
                  paddingRight: SIZES.medium,
                }}
                onPress={() => {
                  dispatch(removeItem(data.id));
                }}
              >
                <View
                  style={{
                    width: 40,
                    height: 40,
                    backgroundColor: COLORS.primary,
                    borderRadius: SIZES.extraLarge,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image
                    source={assets.trash}
                    resizeMode="contain"
                    style={{ width: 20, height: 20 }}
                  />
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  // backgroundColor: COLORS.primary,
                  // borderRadius: SIZES.extraLarge,
                  padding: SIZES.small,
                }}
                onPress={() => {
                  if (data.quantity === 1) {
                    dispatch(removeItem(data.id));
                  } else {
                    dispatch(decrement(data.id));
                  }
                }}
              >
                <View
                  style={{
                    width: 40,
                    height: 40,
                    backgroundColor: COLORS.primary,
                    borderRadius: SIZES.extraLarge,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      fontFamily: FONTS.bold,
                      fontSize: SIZES.large,
                      color: COLORS.white,
                    }}
                  >
                    -
                  </Text>
                </View>
              </TouchableOpacity>
              <Text
                style={{
                  fontFamily: FONTS.bold,
                  fontSize: SIZES.large,
                }}
              >
                {data.quantity}
              </Text>
              <TouchableOpacity
                style={{
                  // backgroundColor: COLORS.primary,
                  // borderRadius: SIZES.extraLarge,
                  padding: SIZES.small,
                }}
                onPress={() => {
                  dispatch(increment(data.id));
                }}
              >
                <View
                  style={{
                    width: 40,
                    height: 40,
                    backgroundColor: COLORS.primary,
                    borderRadius: SIZES.extraLarge,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      fontFamily: FONTS.bold,
                      fontSize: SIZES.large,
                      color: COLORS.white,
                    }}
                  >
                    +
                  </Text>
                </View>
              </TouchableOpacity>
            </View>

            {/* <RectButton
              minWidth={120}
              fontSize={SIZES.font}
              // handlePress={() => navigation.navigate("Detailes", { data })}
              handlePress={() => dispatch(addToCart(data))}
            /> */}
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default CartCard;