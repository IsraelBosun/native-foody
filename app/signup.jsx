import { View, Text, Image, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Entypo  from 'react-native-vector-icons/Entypo';
import { useRouter } from 'expo-router';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomKeyboardView from '../components/CustomKeyboardView';


export default function signup() {

    const router = useRouter();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const [mailError, setMailError] = useState("");
    const [nameError, setNameError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [focused, setFocused] = useState(false);
    const [mailFocused, setMailFocused] = useState(false);
    const [passwordFocused, setPasswordFocused] = useState(false)


const validate = () => {
    if(!name || !email ||password) {
    alert("please enter value in all fields");
    return false
    }
    return true
};

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
    if(!name) {
        setNameError('Please enter your name');
        
    }
    // if(!email || !password) {
    //     alert("Enter both email and password")
    //     return;
    // }
    if(!isEmailValid(email)) {
      // alert("Enter a valid email address")
      setMailError("Enter a valid email address")
      return
  }
  if(!password) {
    setPasswordError('Please enter your password');
    return
}
    // if(!isValidPassword(password)) {
    //   setPasswordError("Password must be 7 characters long and contain a number")
    //   return;
    // };
    setLoading(true);
        try {
            await createUserWithEmailAndPassword(auth, email, password)
            const jsonValue = JSON.stringify(auth);
            await AsyncStorage.setItem('my-key', jsonValue);
            alert(`${name} is signed up`);
            console.log(auth)
        } catch (error) {
            console.log("got error",error.message);
            alert(error.message)
        } finally {
          setLoading(false)
        }
}

const changeName = (value) => {
    setNameError("")
    setName(value)
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

const color = `border-neutral-700 ${focused ? 'border-[#FE724C]' : ""}`
const mailColor = `border-neutral-700 ${mailFocused ? 'border-[#FE724C]' : ""}`
const passwordColor = `border-neutral-700 ${passwordFocused ? 'border-[#FE724C]' : ""}`


  return (
    <CustomKeyboardView>
        <View className="flex-row justify-between">
            <View>
                <Image className="z-10" source={require("../assets/images/ellipse.png")} />
                <Image className="mb-10 absolute " source={require("../assets/images/ellipse2.png")} />
            </View>
            <View>
            <Image source={require("../assets/images/ellipse3.png")} />
            </View>
        </View>
      <Text className="text-3xl font-semibold ml-4 mt-7">Sign Up</Text>

      <View className="mt-5 mx-4">
        <View >
            <Text className="text-neutral-600">Full name</Text>
            <TextInput value={name}  onChangeText={changeName} onFocus={() => setFocused(true)} onBlur={()=> setFocused(false)} placeholder='Enter Fullname' className={` border-2 ${color}  mt-2 rounded-xl p-3`} />
            <Text className="text-red-600 font-light">{nameError}</Text>
        </View>
        <View className="mt-5">
            <Text className="text-neutral-600">E-mail</Text>
            <TextInput value={email} onChangeText={changeMail} placeholder='example@gmail.com' onFocus={() => setMailFocused(true)} onBlur={()=> setMailFocused(false)}  className={` border-2 ${mailColor}  mt-2 rounded-xl p-3`} />
            <Text className="text-red-600 font-light">{mailError}</Text>
        </View>
        <View className="mt-5">
            <Text className="text-neutral-600">Password</Text>
            <View className={`flex-row justify-between items-center  border-2 ${passwordColor} mt-2 rounded-xl p-3`}>
            <TextInput value={password} onChangeText={changePassword} onFocus={() => setPasswordFocused(true)} onBlur={()=> setPasswordFocused(false)} placeholder='********' secureTextEntry={!showPassword} className="w-5/6" />
            <TouchableOpacity onPress={togglePasswordVisibility}>
              {showPassword ? (
              <Entypo name="eye" size={20} color="gray" />) : (<Entypo name="eye-with-line" size={20} color="gray" />) }
            </TouchableOpacity>
            </View>
            <Text className="text-red-600 font-light">{passwordError}</Text>
        </View>
      </View>

      <View>
        {loading ? (
            <TouchableOpacity onPress={handleSubmit} className="mt-8 items-center bg-[#FE724C] font-semibold py-4 mx-11 rounded-full">
                 <ActivityIndicator color="white" className = "text-center  rounded-full text-white" />     
            </TouchableOpacity>
        ) : (
        <TouchableOpacity onPress={handleSubmit} disabled={loading} className="mt-8 items-center bg-[#FE724C] font-semibold py-4 mx-11 rounded-full">
            <Text className="text-white">SIGN UP</Text>
        </TouchableOpacity>
        )}
        <View className="flex-row justify-center mt-6">
            <Text className="text-neutral-700">Already have an account? </Text>
                <TouchableOpacity onPress={()=> router.push("login")}>
                <Text className="underline font-bold text-[#FE724C]">Login</Text> 
                 </TouchableOpacity>
        </View>
      </View>
      <View className="flex justify-center flex-row mt-14">
          <Text className=" bg-neutral-700 w-[94px] h-[1] mt-2 mr-3" ></Text>
          <Text className="text-neutral-700">Sign up with</Text>
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
    </CustomKeyboardView>
  )
}






      {/* <Entypo name="eye-with-line" size={30} color="#900" /> */}
    //   const [clicked, setClicked] = useState(false);


    //   const handleClick = () => {
    //     setClicked(!clicked)
    //   }
  
    //   const unClick = () => {
    //       setClicked(false)
    //   }
    // <TextInput onFocus={handleClick} onBlur={unClick} className={`border ${color} mt-2 rounded-xl p-3 ` }/>
    // const color = `border-neutral-700 ${clicked ? 'border-[#FE724C]' : ""}`


    // const handleSubmit = async () => {
    //     if(email && password) {
    //         try {
    //             await createUserWithEmailAndPassword(auth, email, password)
    //             const jsonValue = JSON.stringify(auth);
    //             await AsyncStorage.setItem('my-key', jsonValue);
    //             alert(`${name} is signed up`);
    //             console.log(auth)
    //         } catch (error) {
    //             console.log("got error",error.message);
    //             alert(error.message)
    //         }
    //     }
    // }