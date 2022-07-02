import React from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, View, Text} from 'react-native';
import {assets, SIZES} from './constants';
import {
  HomeNavigator,
  OrdersNavigator,
  AccountNavigator,
  LoginNavigator,
  LocationNavigator,
} from './CustomNavigation';

import {Provider} from 'react-redux';
import store from './redux/store';
import {COLORS} from './constants';

const Tab = createBottomTabNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent',
  },
};

const App = () => {


  return (
    <Provider store={store}>
      <NavigationContainer theme={theme}>
        <Tab.Navigator
          screenOptions={{
            tabBarShowLabel: false,
            headerShown: false,
            tabBarStyle: {
              borderRadius: 15,
              height: "9%",
              maxHeight:65
            },
          }}>
          <Tab.Screen
            options={{
              tabBarIcon: ({focused}) => (
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    top: '10%',
                  }}>
                  <Image
                    resizeMode="contain"
                    style={{
                      width: 30,
                      height: 30,
                      tintColor: focused ? COLORS.primary : COLORS.gray,
                    }}
                    source={assets.home}
                  />
                  <Text
                    style={{
                      color: focused ? COLORS.primary : COLORS.gray,
                      fontSize: SIZES.small,
                    }}>
                    Home
                  </Text>
                </View>
              ),
            }}
            name="Home"
            component={HomeNavigator}
          />

          <Tab.Screen
            options={{
              tabBarIcon: ({focused}) => (
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    top: '10%',
                  }}>
                  <Image
                    resizeMode="contain"
                    style={{
                      width: 30,
                      height: 30,
                      tintColor: focused ? COLORS.primary : COLORS.gray,
                    }}
                    source={assets.cart}
                  />
                  <Text
                    style={{
                      color: focused ? COLORS.primary : COLORS.gray,
                      fontSize: SIZES.small,
                    }}>
                    Orders
                  </Text>
                </View>
              ),
            }}
            name="Orders"
            component={OrdersNavigator}
          />

          <Tab.Screen
            options={{
              tabBarIcon: ({focused}) => (
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    top: '10%',
                  }}>
                  <Image
                    resizeMode="contain"
                    style={{
                      width: 30,
                      height: 30,
                      tintColor: focused ? COLORS.primary : COLORS.gray,
                    }}
                    source={assets.user}
                  />
                  <Text
                    style={{
                      color: focused ? COLORS.primary : COLORS.gray,
                      fontSize: SIZES.small,
                    }}>
                    Account
                  </Text>
                </View>
              ),
            }}
            name="Account"
            component={AccountNavigator}
          />

          <Tab.Screen
            options={{
              tabBarIcon: ({focused}) => (
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    top: '10%',
                  }}>
                  <Image
                    resizeMode="contain"
                    style={{
                      width: 30,
                      height: 30,
                      tintColor: focused ? COLORS.primary : COLORS.gray,
                    }}
                    source={assets.pin}
                  />
                  <Text
                    style={{
                      color: focused ? COLORS.primary : COLORS.gray,
                      fontSize: SIZES.small,
                    }}>
                    Location
                  </Text>
                </View>
              ),
            }}
            name="Location"
            component={LocationNavigator}
          />

          <Tab.Screen
            options={{
              tabBarIcon: ({focused}) => (
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    top: '10%',
                  }}>
                  <Image
                    resizeMode="contain"
                    style={{
                      width: 30,
                      height: 30,
                      tintColor: focused ? COLORS.primary : COLORS.gray,
                    }}
                    source={assets.enter}
                  />
                  <Text
                    style={{
                      color: focused ? COLORS.primary : COLORS.gray,
                      fontSize: SIZES.small,
                    }}>
                    Login
                  </Text>
                </View>
              ),
            }}
            name="Login"
            component={LoginNavigator}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
