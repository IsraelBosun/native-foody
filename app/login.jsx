import { View, Text, Image, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Entypo  from 'react-native-vector-icons/Entypo';
import Ionicons  from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase';

export default function login() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [mailError, setMailError] = useState("");
    const [passwordError, setPasswordError] = useState();
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [mailFocused, setMailFocused] = useState(false);
    const [passwordFocused, setPasswordFocused] = useState(false);



    const isEmailValid = (mail) => {
      // Regular expression to validate an email address
      const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
      return emailRegex.test(mail);
    };

    const isValidPassword = (password) => {
      if (password.length === 7) {
        if (/\d/.test(password)) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
    }

    const handleSubmit = async () => {
      if(!email || !password) {
          alert("Enter both email and password")
          return;
      }
      if(!isEmailValid(email)) {
        // alert("Enter a valid email address")
        setMailError("Enter a valid email address")
        return
    }
      // if(!isValidPassword(password)) {
      //   setPasswordError("Password must be 7 characters long and contain a number")
      //   return;
      // }
      setLoading(true)
          try {
              await signInWithEmailAndPassword(auth, email, password)
              const jsonValue = JSON.stringify(auth);
              await AsyncStorage.setItem('my-key', jsonValue);
              router.push("main")
              alert(`You are logged in successfully`);
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

  const changePassword = (value) => {
    setPasswordError("")
    setPassword(value)
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };


const mailColor = `border-neutral-700 ${mailFocused ? 'border-[#FE724C]' : ""}`
const passwordColor = `border-neutral-700 ${passwordFocused ? 'border-[#FE724C]' : ""}`

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
            <TextInput value={email} onChangeText={changeMail} placeholder='Enter your Email' onFocus={() => setMailFocused(true)} onBlur={()=> setMailFocused(false)}  className={` border-2 ${mailColor}  mt-2 rounded-xl p-3`} />
            <Text className="text-red-600 font-light">{mailError}</Text>
        </View>
        <View className="mt-5">
            <Text className="text-neutral-600">Password</Text>
            <View className={`flex-row justify-between items-center  border-2 ${passwordColor} mt-2 rounded-xl p-3`}>
            <TextInput value={password} onChangeText={changePassword} placeholder='*******' secureTextEntry={!showPassword} onFocus={() => setPasswordFocused(true)} onBlur={()=> setPasswordFocused(false)} className="w-5/6"/>
            <TouchableOpacity onPress={togglePasswordVisibility}>
              {showPassword ? (
              <Entypo name="eye" size={20} color="gray" />) : (<Entypo name="eye-with-line" size={20} color="gray" />) }
            </TouchableOpacity>
            </View>
            <Text className="text-red-600 font-light">{passwordError}</Text>
        </View>
        <TouchableOpacity onPress={()=> router.push("resetPassword")} className="flex font-semibold items-center mt-5">
        <Text className="text-[#FE724C]">Forgot password?</Text>
        </TouchableOpacity>
      </View>

      <View>
      {loading ? (
            <TouchableOpacity onPress={handleSubmit} className="mt-8 items-center bg-[#FE724C] font-semibold py-4 mx-11 rounded-full">
                 <ActivityIndicator color="white" className = "text-center  rounded-full text-white" />     
            </TouchableOpacity>
        ) : (
        <TouchableOpacity onPress={handleSubmit} disabled={loading} className="mt-8 items-center bg-[#FE724C] font-semibold py-4 mx-11 rounded-full">
            <Text className="text-white">LOGIN</Text>
        </TouchableOpacity>
        )}
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