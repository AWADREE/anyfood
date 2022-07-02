import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./screens/Home";
import Orders from './screens/Orders';
import Account from './screens/Account';
import Login from './screens/Login';
import Location from './screens/Location';
import { COLORS } from './constants'
import Detailes from "./screens/Detailes";
import ResturantDetailes from "./screens/ResturantDetailes";
import Cart from "./screens/Cart";
import Checkout from "./screens/Checkout";
import OrderDetailes from './screens/OrderDetailes';


const Stack = createStackNavigator();

const HomeNavigator =()=>{
    return (
      <Stack.Navigator
        // screenOptions={{ headerShown: false }}
        initialRouteName="Home"
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerStyle: {
              backgroundColor: COLORS.primary,
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          // options={({ route }) => ({ title: route.params.name })}
          options={{
            title: "Restaurant",
            headerStyle: {
              backgroundColor: COLORS.white,
            },
            headerTintColor: COLORS.primary,
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
          name="ResturantDetailes"
          component={ResturantDetailes}
        />
        <Stack.Screen
          options={{
            title: "Meal Detailes",
            headerStyle: {
              backgroundColor: COLORS.white,
            },
            headerTintColor: COLORS.primary,
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
          name="Detailes"
          component={Detailes}
        />
        <Stack.Screen
          options={{
            headerStyle: {
              backgroundColor: COLORS.white,
            },
            headerTintColor: COLORS.primary,
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
          name="Cart"
          component={Cart}
        />
        <Stack.Screen
          options={{
            headerStyle: {
              backgroundColor: COLORS.white,
            },
            headerTintColor: COLORS.primary,
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
          name="Checkout"
          component={Checkout}
        />
      </Stack.Navigator>
    );
}

const OrdersNavigator =()=>{
    return (
      <Stack.Navigator
      // screenOptions={{ headerShown: false }}
      >
        <Stack.Screen
          options={{
            headerStyle: {
              backgroundColor: COLORS.primary,
            },
            headerTintColor: COLORS.white,
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
          name="Orders"
          component={Orders}
        />
        <Stack.Screen
          options={{
            title: "Order Detailes",
            headerStyle: {
              backgroundColor: COLORS.white,
            },
            headerTintColor: COLORS.primary,
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
          name="OrderDetailes"
          component={OrderDetailes}
        />
        <Stack.Screen
          options={{
            title: "Meal Detailes",
            headerStyle: {
              backgroundColor: COLORS.white,
            },
            headerTintColor: COLORS.primary,
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
          name="Detailes"
          component={Detailes}
        />
        <Stack.Screen
          options={{
            headerStyle: {
              backgroundColor: COLORS.white,
            },
            headerTintColor: COLORS.primary,
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
          name="Cart"
          component={Cart}
        />
      </Stack.Navigator>
    );
}

const AccountNavigator =()=>{
    return (
      <Stack.Navigator
      // screenOptions={{ headerShown: false }}
      >
        <Stack.Screen
          options={{
            headerStyle: {
              backgroundColor: COLORS.primary,
            },
            headerTintColor: COLORS.white,
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
          name="Account"
          component={Account}
        />
      </Stack.Navigator>
    );
}

const LoginNavigator = () => {
  return (
    <Stack.Navigator
    // screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: COLORS.primary,
          },
          headerTintColor: COLORS.white,
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
        name="Login"
        component={Login}
      />
    </Stack.Navigator>
  );
};

const LocationNavigator =()=>{
    return (
      <Stack.Navigator
      // screenOptions={{ headerShown: false }}
      >
        <Stack.Screen
          options={{
            headerStyle: {
              backgroundColor: COLORS.primary,
            },
            headerTintColor: COLORS.white,
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
          name="Location"
          component={Location}
        />
      </Stack.Navigator>
    );
}

export {
  HomeNavigator,
  OrdersNavigator,
  AccountNavigator,
  LoginNavigator,
  LocationNavigator,
};