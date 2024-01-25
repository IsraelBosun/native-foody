import { View, Text, Image, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Entypo  from 'react-native-vector-icons/Entypo';
import Ionicons  from 'react-native-vector-icons/Ionicons';
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { auth } from '../config/firebase';
import { sendPasswordResetEmail } from 'firebase/auth';

export default function resetPassword() {

    const router = useRouter();
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [mailError, setMailError] = useState("");
    const [mailFocused, setMailFocused] = useState(false);

    const isEmailValid = (mail) => {
      // Regular expression to validate an email address
      const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
      return emailRegex.test(mail);
    };

    const handleSubmit = async () => {
      if(!isEmailValid(email)) {
        // alert("Enter a valid email address")
        setMailError("Enter a valid email address")
        return
    }
      // if(!isValidPassword(password)) {
      //   setPasswordError("Password must be 7 characters long and contain a number")
      //   return;
      // };
      setLoading(true);
          try {
              await sendPasswordResetEmail(auth, email)
              const jsonValue = JSON.stringify(auth);
              await AsyncStorage.setItem('my-key', jsonValue);
              alert(`Check your Email`);
              console.log(auth)
          } catch (error) {
              console.log("got error",error.message);
              alert(error.message)
          } finally {
            setLoading(false)
          }
  }

    const changeMail = (value) => {
      setMailError("")
      setEmail(value)
  }
    const mailColor = `border-neutral-700 ${mailFocused ? 'border-[#FE724C]' : ""}`

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
            <View className="mt-5">
            <TextInput value={email} onChangeText={changeMail} placeholder='example@gmail.com' onFocus={() => setMailFocused(true)} onBlur={()=> setMailFocused(false)}  className={` border-2 ${mailColor}  mt-2 rounded-xl p-3`} />
            <Text className="text-red-600 font-light">{mailError}</Text>
        </View>
        </View>
        <View>
        {loading ? (
            <TouchableOpacity onPress={handleSubmit} className="mt-8 items-center bg-[#FE724C] font-semibold py-4 mx-11 rounded-full">
                 <ActivityIndicator color="white" className = "text-center  rounded-full text-white" />     
            </TouchableOpacity>
        ) : (
        <TouchableOpacity onPress={handleSubmit} disabled={loading} className="mt-8 items-center bg-[#FE724C] font-semibold py-4 mx-11 rounded-full">
            <Text className="text-white">RESET PASSWORD</Text>
        </TouchableOpacity>
        )}
      </View>
      </View>
    </View>
  )
}

// await sendPasswordResetEmail(auth, email)
