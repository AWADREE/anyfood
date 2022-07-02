import React from 'react';

import { View ,Image, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import {COLORS, SIZES, SHADOWS } from '../constants'
import { OrderAgainButton } from './Button'
import { SubInfo, Price, Title } from "./SubInfo";
import { addToCart } from "../redux/reducers/cartSlice";
import { useDispatch } from "react-redux";

const MealOrderCard = ({data}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Detailes", { data })}
    >
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

          {/* <CircleButton imgUrl={assets.heart} right={10} top={10}/> */}
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
            subTitle={data.description}
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
            <Price price={data.price} />
            {/* <Rating rating={data.rating} /> */}

          <OrderAgainButton
          minWidth={120}
          fontSize={SIZES.font}
          // handlePress={() => navigation.navigate("Detailes", { data })}
          handlePress={() => dispatch(addToCart(data))}
          />

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

export default MealOrderCard;