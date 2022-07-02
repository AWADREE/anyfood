import React, { useState } from "react";
import {Text, View, SafeAreaView, FlatList , ScrollView, StatusBar, ActivityIndicator} from "react-native";

import {COLORS, Resturants, Offers, SIZES} from "../constants";
import {OfferCard, RestaurantCard, HomeHeader, FocusedStatusBar , SearchBar} from "../components";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { useSelector } from "react-redux";

const Home = () => {
  const [resturantData, setResturantData] = useState(Resturants);
  const [searching, setSearching] = useState(false);
  const user = useSelector((state) => state.user);

  const handleSearch = (value) => {
    if (!value.length) {
      setSearching(false);
      return setResturantData(Resturants);
    }

    setSearching(true);
    const filteredResturants = Resturants.filter((item) =>
      item.name.toLocaleLowerCase().includes(value.toLocaleLowerCase())
    );

    if (filteredResturants.length) {
      setResturantData(filteredResturants);
    } else {
      setResturantData(Resturants);
    }
  };


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.primary }}>
      <FocusedStatusBar background={COLORS.primary} />
      <KeyboardAwareScrollView enableResetScrollToCoords={false}>
        <ScrollView>
          <HomeHeader />
          {user.locationString === "" ? (
            <></>
          ) : (
            <View style={{ marginHorizontal: SIZES.small }}>
              <Text
                style={{
                  color: COLORS.white,
                  fontWeight: "200",
                  fontSize: SIZES.small,
                  marginBottom: SIZES.small,
                }}
              >
                Deliver to:{" "}
              </Text>
              <Text
                style={{
                  color: COLORS.white,
                  fontWeight: "200",
                  fontSize: SIZES.small,
                  marginBottom: SIZES.small,
                }}
              >
                {" "}
                {user.locationString}{" "}
              </Text>
            </View>
          )}
          <SearchBar onSearch={handleSearch} />

          <View style={{ flex: 1 }}>
            {searching ? (
              <></>
            ) : (
              <View style={{ zIndex: 0 }}>
                <FlatList
                  data={Offers}
                  renderItem={({ item }) => <OfferCard data={item} />}
                  keyExtractor={(item) => item.id}
                  showsVerticalScrollIndicator={false}
                  showsHorizontalScrollIndicator={false}
                  // ListHeaderComponent={<HomeHeader />}
                  horizontal={true}
                />
              </View>
            )}

            <View style={{ zIndex: 0 }}>
              <FlatList
                // style={{ flexGrow: 0 }}
                data={resturantData}
                renderItem={({ item }) => <RestaurantCard data={item} />}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
                // ListHeaderComponent={<HomeHeader />}
              />
            </View>
            <View
              style={{
                position: "absolute",
                top: 0,
                bottom: 0,
                right: 0,
                left: 0,
                zIndex: -1,
              }}
            >
              <View
                style={{ height: "100%", backgroundColor: COLORS.primary }}
              />
              <View style={{ flex: 1, backgroundColor: COLORS.white }} />
            </View>
          </View>
        </ScrollView>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}

export default Home