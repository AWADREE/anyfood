import React from 'react';

import { useState } from "react";
import {Text, View, SafeAreaView, FlatList , ScrollView, StatusBar, TouchableOpacity} from "react-native";

import {
  COLORS,
  PastOrders,
  ActiveOrders,
  SIZES,
  FONTS,
} from "../constants";
import { OrderCard, FocusedStatusBar } from "../components";

const Orders = () => {

  const [isActive, setIsActive] = useState(true)

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.primary }}>
      <FocusedStatusBar background={COLORS.primary} />
      <ScrollView>
        <View>
          <View style={{ alignItems: "center" }}>
            <View
              style={{
                marginVertical: SIZES.large,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                width: "90%",
                height: 50,
              }}
            >
              <TouchableOpacity
                style={[
                  {
                    width: "50%",
                    height: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  isActive && {
                    borderBottomColor: COLORS.white,
                    borderBottomWidth: 2,
                  },
                ]}
                onPress={() => {
                  setIsActive(true);
                }}
              >
                <Text
                  style={{
                    fontFamily: FONTS.medium,
                    color: COLORS.white,
                    fontSize: SIZES.medium,
                  }}
                >
                  Active
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  {
                    width: "50%",
                    height: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  !isActive && {
                    borderBottomColor: COLORS.white,
                    borderBottomWidth: 2,
                  },
                ]}
                onPress={() => {
                  setIsActive(false);
                }}
              >
                <Text
                  style={{
                    fontFamily: FONTS.medium,
                    color: COLORS.white,
                    fontSize: SIZES.medium,
                  }}
                >
                  History
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ zIndex: 0 }}>
            <FlatList
              // style={{ flexGrow: 0 }}
              data={isActive ? ActiveOrders : PastOrders}
              renderItem={({ item }) => <OrderCard data={item} />}
              keyExtractor={(item) => item.id}
              showsVerticalScrollIndicator={false}
              // ListHeaderComponent={<HomeHeader />}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Orders