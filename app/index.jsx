import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';


export default function index() {

  const router = useRouter();

  return (
    <View className="">
      <Image style={{width: wp(100)}} source={require("../assets/images/background.png")} />
      <LinearGradient
        colors={['transparent', '#18181b']}
        style={{}}
        // start={{x:0.5, y:0}}
        // end={{x:0.5, y:0.8}}
        className="flex-1 absolute h-full w-full"
      >
        <SafeAreaView className="flex mx-3"/>
        <View className="mx-3">
        <TouchableOpacity className=" items-end">
          <Text className="bg-white px-3 py-1 rounded-xl text-md text-[#FE724C]">Skip</Text>
        </TouchableOpacity>
        <View className="mt-20">
          <Text className="font-bold text-5xl">Welcome to</Text>
          <Text className="text-4xl text-[#FE724C] font-bold mt-1">FoodHub</Text>
          <Text className="text-neutral-600 font-semibold text-md mt-2 tracking-wider ">Your favourite foods delivered </Text>
          <Text className="text-neutral-600 font-semibold text-md tracking-wider">fast at your door.</Text>
        </View>

        <View className="flex justify-center flex-row mt-[250px]">
          <Text className=" bg-white w-[94px] h-[1] mt-2 mr-3 " ></Text>
          <Text className="text-white">Sign in with</Text>
          <Text className="bg-white w-[94px] h-[1] mt-2 ml-3"></Text>
        </View>

        <View className="flex-row items-center justify-center gap-x-10 mt-5 ">
          <TouchableOpacity className="flex-row  items-center justify-between bg-white rounded-full px-4 py-3">
            <Image source={require("../assets/images/facebooklogo.png")} />
            <Text className="pl-1 font-semibold text-neutral-800">FACEBOOK</Text>
          </TouchableOpacity>

          <TouchableOpacity className="flex-row  items-center justify-between bg-white rounded-full px-4 py-3">
            <Image source={require("../assets/images/googlelogo.png")} />
            <Text className="pl-1 font-semibold text-neutral-800">GOOGLE</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={()=> router.push("signup")} className="flex items-center justify-center mt-4 rounded-full border border-white mx-5 py-4 bg-neutral-600">
          <Text className="text-white">Start with email or phone</Text>
        </TouchableOpacity>
        </View>
        
        <View className="flex-row justify-center mt-4">
            <Text className="text-white">Already have an account? </Text>
            <TouchableOpacity>
           <Text className="underline font-bold text-white">Sign in</Text> 
            </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  )
}

const styles = StyleSheet.create({
  horizontalLine: {
    borderBottomColor: 'red',
    borderBottomWidth: 10,
    marginVertical: 10,
  },
});