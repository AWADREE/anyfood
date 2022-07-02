import React from 'react';
import {View, SafeAreaView, Image, StatusBar, FlatList, ScrollView} from 'react-native'

import { COLORS, SIZES, SHADOWS } from "../constants";
import {
  SubInfo,
  FocusedStatusBar,
  RectButton,
  DetailesDesc,
  DetailesInfo,
  ScreenHeader,
} from '../components';

import { addToCart } from "../redux/reducers/cartSlice";
import { useDispatch } from "react-redux";

const DetailesHeader = ({data})=>(

  <View style={{
    width:"100%",
    height:373
  }}>
    <Image 
    source={data.image} 
    resizeMode="cover" 
    style={{ width:"100%", height:"100%"}}
    />
  </View>
)


const Detailes = ({route, navigation}) => {
  const {data} = route.params; 

  const dispatch = useDispatch();

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <ScrollView stickyHeaderIndices={[1]}>
        <FocusedStatusBar
          barStyle="dark-content"
          backgroundColor="transparent"
          translucent={true}
        />

        <ScreenHeader />
        <View
          style={{
            width: '100%',
            position: 'absolute',
            bottom: 0,
            paddingVertical: SIZES.font * 2,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(255,255,255,0.5)',
            zIndex: 1,
          }}>
          <RectButton
            handlePress={() => dispatch(addToCart(data))}
            minWidth={170}
            fontSize={SIZES.large}
            {...SHADOWS.dark}
          />
        </View>

        <FlatList
          data={data.bids}
          renderItem={({item}) => <DetailesInfo bid={item} />}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: SIZES.extraLarge * 3}}
          ListHeaderComponent={() => (
            <React.Fragment>
              <DetailesHeader data={data} navigation={navigation} />
              <SubInfo />
              <View style={{padding: SIZES.font}}>
                <DetailesDesc data={data} />
              </View>
            </React.Fragment>
          )}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

export default Detailes