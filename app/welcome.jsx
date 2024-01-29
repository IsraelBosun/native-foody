import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Tabs/Home';
import Details from './Tabs/Details';
import Cart from './Tabs/Cart';


export default function welcome() {

    const Tab = createBottomTabNavigator()

  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Details" component={Details} />
      <Tab.Screen name="Cart" component={Cart} />
    </Tab.Navigator>
  )
}