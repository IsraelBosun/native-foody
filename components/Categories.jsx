import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { categories } from '../constants'

export default function Categories() {

    const [active, setActive] = useState(null)

  return (
    <ScrollView className="gap-x-5" horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{paddingHorizontal: 15}}>
      {
        categories.map((item, index)=> {
            let isActive = item.id==active;
            let btnClass = isActive ? "bg-[#FE724C]" : "bg-white";
            let textClass = isActive ? "font-semibold text-white" : "text-black"
            return (
                    <TouchableOpacity onPress={()=>setActive(item.id)} className={`${btnClass} px-1 pb-5 rounded-full pt-2 flex justify-center items-center`} key={item.id}>
                    <Image className="rounded-full w-[51px] h-[51px]" resizeMode='contain' source={item.image} />
                    <Text className={`text-[12px]  mt-2 ${textClass}`}>{item.name}</Text>
                    </TouchableOpacity>

            )
        })
      }
    </ScrollView>
  )
}