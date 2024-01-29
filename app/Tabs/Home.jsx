import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native'
import React from 'react';
import AntDesign  from 'react-native-vector-icons/AntDesign';
import { SafeAreaView } from 'react-native-safe-area-context';
import Categories from '../../components/Categories';


export default function Home() {
  return (
      <View className="px-4 ">
          <SafeAreaView />
          <View className="flex-row justify-between items-center">
              <TouchableOpacity className="bg-white shadow-md rounded-md p-1">
                  <AntDesign  name="bars" size={30} color="black" />
              </TouchableOpacity>
              <View>
                  <View className="flex items-center">
                    <TouchableOpacity className="flex-row items-center justify-center">
                      <Text>Deliver to</Text>
                      <AntDesign name="down" size={13} color="black" />
                   </TouchableOpacity>
                  <Text className="text-center text-[#FE724C] ">4102 Pretty View Lane</Text>
                  </View>
              </View>
              <TouchableOpacity>
                  <Image className="rounded-lg" source={require("../../assets/images/profilepicture.png")} />
              </TouchableOpacity>
          </View>

          <View className="mt-7">
            <Text className="text-4xl font-bold">What would you like to order</Text>
          </View>

          <View className="flex-row mt-3 items-center gap-x-2">
            <View className="flex-row items-center bg-white shadow shadow-xl rounded-md px-1 py-2">
            <AntDesign  name="search1" size={20} color="black" />
            <TextInput className="w-4/5 px-2" placeholder='Find food or resturant' />
            </View>
            <TouchableOpacity className="bg-white shadow-xl p-2 rounded-md">
            <AntDesign  name="filter" size={30} color="red" />
            </TouchableOpacity>
          </View>

          <View className="mt-5">
            <Categories />
          </View>
      </View>
  )
}