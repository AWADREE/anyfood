import React from 'react';
import {View, Text, SafeAreaView, StatusBar, FlatList, ScrollView} from 'react-native'

import { COLORS, FONTS, SIZES } from "../constants";
import { FocusedStatusBar,ScreenHeader, MealOrderCard} from '../components'

import { Title } from "../components/SubInfo";


const OrderDetailes = ({ route, navigation }) => {
  const { data } = route.params;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <FocusedStatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
      />
      <ScrollView  stickyHeaderIndices={[0]}>
        <ScreenHeader />
        <FlatList
          data={data.items}
          renderItem={({ item }) => <MealOrderCard data={item} isOrder={true}/>}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: SIZES.extraLarge * 3 }}
          ListHeaderComponent={() => (
            <React.Fragment>
              {/* <DetailesHeader data={data} navigation={navigation} /> */}
              
              <View style={{ padding: SIZES.font }}>
                <View style={{
                   width:"100%",
                }}>
                  <View style={{marginBottom:SIZES.small}}>
                    <Title 
                      title={"Order #: " + data.number}
                    //subTitle={data.description}
                      titleSize={SIZES.extraLarge}
                    //subTitleSize={SIZES.font}
                    />
                  </View>
                  <Text style={{
                    fontFamily:FONTS.semiBold,
                    fontSize:SIZES.large
                  }}>Total: ${data.total}</Text>
                </View>
              </View>
            </React.Fragment>
          )}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default OrderDetailes;