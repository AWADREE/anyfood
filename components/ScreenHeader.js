import { View, StatusBar , Platform} from 'react-native'
import React from 'react'
import ShoppingCartIcon from "./ShoppingCartIcon";
import { SIZES } from "../constants";

const ScreenHeader = () => {

  return (
    <View
      style={{
        width: "100%",
        justifyContent: "flex-end",
        alignItems: "center",
        flexDirection: "row",
        padding: SIZES.small,
        paddingHorizontal: SIZES.medium,
        zIndex: 1,
        marginTop: Platform.OS === "ios" ? 0 : StatusBar.currentHeight + 10,
      }}
    >
      {/* <CircleButton
        imgUrl={assets.left}
        handlePress={() => navigation.goBack()}
        // left={15}
        // top={StatusBar.currentHeight + 10}
      /> */}
      <ShoppingCartIcon />
    </View>
  );
}

export default ScreenHeader