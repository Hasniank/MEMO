import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Styles } from './style'

export const CommonButton = ({text,width,height,fontSize,color,backgroundColor,onPress}) => {
  return (
    <TouchableOpacity style={Styles({width,height,backgroundColor}).container} onPress={onPress}>
      <Text style={Styles({fontSize,color}).text}>{text}</Text>
    </TouchableOpacity>
  )
}

