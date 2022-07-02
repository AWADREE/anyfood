import React from 'react';

import { View , TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import {COLORS, SIZES, SHADOWS } from '../constants'
import { SubInfo, Price, Title } from "./SubInfo";

const OrderCard = ({data}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("OrderDetailes", { data })}
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
        {/* <View style={{ width: "100%", height: 250 }}>
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
        </View> */}

        <SubInfo />
        <View
          style={{
            width: "100%",
            padding: SIZES.font,
          }}
        >
          <Title
            title={"Order #: " + data.number}
            // subTitle={data.creator}
            titleSize={SIZES.large}
            // subtitleSize={SIZES.small}
          />
          <View
            style={{
              marginTop: SIZES.font,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Price price={data.total} />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default OrderCard;