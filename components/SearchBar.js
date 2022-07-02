import React from 'react';

import {View, Image, TextInput, Text, TouchableOpacity} from 'react-native';

import {COLORS, SIZES, assets} from '../constants'
const SearchBar = ({onSearch}) => {
  return (
    <View
      style={{
        backgroundColor: COLORS.primary,
        padding: SIZES.font,
      }}>
      <View>
        <View
          style={{
            width: '100%',
            borderRadius: SIZES.font,
            backgroundColor: COLORS.lightGray,
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: SIZES.font,
            paddingVertical: SIZES.small - 2,
          }}>
          <Image
            source={assets.search}
            resizeMode="contain"
            style={{
              width: 20,
              height: 20,
              marginRight: SIZES.base,
            }}
          />
            <TextInput
              placeholder="Find a restaurant..."
              style={{flex: 1, height: 20, width: '90%', padding: 0}}
              onChangeText={onSearch}
            />
        </View>
      </View>
    </View>
  );
}

export default SearchBar;