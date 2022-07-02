import React from 'react';
import {View, SafeAreaView, StatusBar, FlatList, ScrollView} from 'react-native'

import { COLORS, SIZES } from "../constants";
import { SubInfo, FocusedStatusBar, MealCard, ScreenHeader} from '../components'

import { Title } from "../components/SubInfo";


const ResturantDetailes = ({ route, navigation }) => {
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
          data={data.meals}
          renderItem={({ item }) => <MealCard data={item} />}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: SIZES.extraLarge * 3 }}
          ListHeaderComponent={() => (
            <React.Fragment>
              {/* <DetailesHeader data={data} navigation={navigation} /> */}
              <View style={{ marginTop: "3%" }}>
                <SubInfo />
              </View>
              <View style={{ padding: SIZES.font }}>
                <View style={{
                   width:"100%",
                }}>
                  <View style={{marginBottom:SIZES.small}}>
                    <Title 
                      title={data.name}
                    //subTitle={data.description}
                      titleSize={SIZES.extraLarge}
                    //subTitleSize={SIZES.font}
                    />
                  </View>
                </View>
              </View>
            </React.Fragment>
          )}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ResturantDetailes;