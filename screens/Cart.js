import React from 'react';

import {
  Text,
  View,
  SafeAreaView,
  FlatList,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  Image
} from "react-native";

import { COLORS, assets, SIZES, FONTS } from "../constants";
import { FocusedStatusBar, CartCard, CircleButton } from "../components";

import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { clear } from "../redux/reducers/cartSlice";
import { cartTotalPriceSeleector } from "../redux/selectors";

const Cart = () => {
  
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const cart = useSelector((state)=>state.cart);
    const totalPrice = useSelector(cartTotalPriceSeleector);

    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
        <ScrollView
        //  stickyHeaderIndices={[1]}
        >
          <FocusedStatusBar background={COLORS.primary} />
          {/* <View
            style={{
              width: "100%",
              padding: SIZES.small,
              paddingHorizontal: SIZES.medium,
              zIndex: 1,
              // marginTop:
              //   Platform.OS === "ios" ? 0 : StatusBar.currentHeight ,
            }}
          >
            <CircleButton
              imgUrl={assets.left}
              handlePress={() => navigation.goBack()}
              // left={15}
              // top={StatusBar.currentHeight + 10}
            />
          </View> */}

          {cart.length > 0 ? (
            <View>
              <View
                style={{
                  alignItems: "flex-end",
                  //   marginTop: SIZES.small,
                }}
              >
                <TouchableOpacity
                  style={{
                    backgroundColor: "#FF5D5D",
                    height: 35,
                    width: 100,
                    margin: 20,
                    borderRadius: SIZES.large,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  onPress={() => dispatch(clear())}
                >
                  <Text
                    style={{
                      fontFamily: FONTS.semiBold,
                      color: COLORS.white,
                    }}
                  >
                    Clear Cart
                  </Text>
                </TouchableOpacity>
              </View>
              <FlatList
                data={cart}
                renderItem={({ item }) => <CartCard data={item} />}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
                // ListHeaderComponent={<HomeHeader />}
              />
              <View
                style={{
                  width: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: SIZES.small,
                }}
              >
                <View style={{ width: "80%" }}>
                  <Text
                    style={{
                      fontFamily: FONTS.bold,
                      fontSize: SIZES.large,
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
                  onPress={() =>
                    navigation.navigate("Checkout", { totalPrice })
                  }
                >
                  <Text
                    style={{
                      fontFamily: FONTS.bold,
                      fontSize: SIZES.large,
                      color: COLORS.white,
                    }}
                  >
                    Checkout
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          ) : (
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
              }}
            >
              <View style={{ margin: SIZES.large }}>
                <Text
                  style={{
                    fontFamily: FONTS.light,
                    fontSize: SIZES.extraLarge,
                  }}
                >
                  your cart is Empty
                </Text>
              </View>
              <Image
                source={assets.sad}
                resizeMode="cover"
                style={{
                  width: 80,
                  height: 80,
                }}
              />
              <TouchableOpacity
                style={{
                  margin: SIZES.large,
                  backgroundColor: COLORS.primary,
                  borderRadius: SIZES.extraLarge,
                  width: "80%",
                  height: 40,
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onPress={() => navigation.navigate("Home")}
              >
                <Text
                  style={{
                    color: COLORS.white,
                    fontFamily: FONTS.medium,
                    fontSize: SIZES.large,
                  }}
                >
                  Continue shopping
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </ScrollView>
      </SafeAreaView>
    );
};

export default Cart;
