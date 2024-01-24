import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Entypo  from 'react-native-vector-icons/Entypo';
import Ionicons  from 'react-native-vector-icons/Ionicons';

import { useRouter } from 'expo-router';

export default function login() {
    const router = useRouter();

  return (
    <View>
        <View className="flex-row justify-between">
            <View>
                <Image className="z-1" source={require("../assets/images/ellipse.png")} />
                <Image className="mb-10 absolute " source={require("../assets/images/ellipse2.png")} />
                <TouchableOpacity onPress={()=>router.back()} className="bg-white rounded-lg w-1/4 flex items-center py-2 px-1 relative left-8 bottom-6 z-100">
                <Ionicons name="chevron-back-outline" size={20} color="black" />
                </TouchableOpacity>
            </View>
            <View>
            <Image source={require("../assets/images/ellipse3.png")} />
            </View>
        </View>

      <View className="mt-15 mx-4">
      <Text className="text-3xl font-bold mt-7">Login</Text>
        <View className="mt-5">
            <Text className="text-neutral-600">E-mail</Text>
            <TextInput className=" border border-[#FE724C] mt-2 rounded-xl p-3" />
        </View>
        <View className="mt-5">
            <Text className="text-neutral-600">Password</Text>
            <View className="flex-row justify-between items-center  border border-[#FE724C] mt-2 rounded-xl p-3">
            <TextInput className="w-5/6" />
            <TouchableOpacity>
            <Entypo name="eye" size={20} color="gray" />
            </TouchableOpacity>
            </View>
        </View>
        <TouchableOpacity onPress={()=> router.push("resetPassword")} className="flex font-semibold items-center mt-5">
        <Text className="text-[#FE724C]">Forgot password?</Text>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity  className="mt-8 items-center bg-[#FE724C] font-semibold py-4 mx-11 rounded-full">
            <Text className="text-white">LOGIN</Text>
        </TouchableOpacity>
        <View className="flex-row justify-center mt-6">
            <Text className="text-neutral-700">Already have an account? </Text>
            <TouchableOpacity>
           <Text className="underline font-bold text-[#FE724C]">Sign Up</Text> 
            </TouchableOpacity>
        </View>
      </View>

      <View className="flex justify-center flex-row mt-14">
          <Text className=" bg-neutral-700 w-[94px] h-[1] mt-2 mr-3" ></Text>
          <Text className="text-neutral-700">Sign in with</Text>
          <Text className="bg-neutral-700 w-[94px] h-[1] mt-2 ml-3"></Text>
        </View>

        <View className="flex-row items-center justify-center gap-x-10 mt-5 ">
          <TouchableOpacity className="flex-row items-center justify-between bg-white rounded-full px-4 py-3 shadow-md">
            <Image source={require("../assets/images/facebooklogo.png")} />
            <Text className="pl-1 font-semibold text-neutral-800">FACEBOOK</Text>
          </TouchableOpacity>

          <TouchableOpacity className="flex-row  items-center justify-between bg-white rounded-full px-4 py-3 shadow-md">
            <Image source={require("../assets/images/googlelogo.png")} />
            <Text className="pl-1 font-semibold text-neutral-800">GOOGLE</Text>
          </TouchableOpacity>
        </View>
    </View>
  )
}