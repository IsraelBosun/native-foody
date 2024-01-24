import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Entypo  from 'react-native-vector-icons/Entypo';
import Ionicons  from 'react-native-vector-icons/Ionicons';
import { useRouter } from 'expo-router';

export default function resetPassword() {

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

        <View className="mt-[20px] mx-4">
        <Text className="text-3xl font-bold mt-7">Reset Password</Text>
        <View className="mt-5">
            <Text className="text-neutral-600">Please enter your email address to</Text>
            <Text className="text-neutral-600">request a password reset</Text>
            <TextInput className=" border border-[#FE724C] mt-4 rounded-xl p-3" />
        </View>
      <TouchableOpacity  className="mt-8 items-center bg-[#FE724C] font-semibold py-4 mx-11 rounded-full">
            <Text className="text-white">SEND NEW PASSWORD</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}