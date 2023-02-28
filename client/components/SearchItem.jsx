import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { colors } from '../styles/styles'
import { Headline } from 'react-native-paper'

const SearchItem = ({imgSrc,name,price,handler}) => {



  return (
   <>
    <TouchableOpacity onPress={handler} activeOpacity={1}>
        <View style={{
            padding:10,
            borderTopLeftRadius:20,
            borderBottomRightRadius:20,
            backgroundColor:colors.color2,
            width:"100%",
            alignItems:"center",
            justifyContent:"center",
            flexDirection:"row",
            marginVertical:6,
            elevation:6
        }}
        
        >
            <Image source={{uri:imgSrc}} style={{ width:100,
            height:80,
            resizeMode:"contain",
            position:'absolute',
            top:10,
            left:10,
            borderTopLeftRadius:20,
            borderBottomRightRadius:20,
            elevation:5
            }}/>
            <View style={{
                width:200,
                // paddingHorizontal:10
                paddingLeft:96,
            }}>
                <Text numberOfLines={2}>{name}</Text>
                <Headline style={{fontWeight:"900",fontSize:14}} numberOfLines={1}> ${price}</Headline>
            </View>
        </View>
    </TouchableOpacity>
   </>
  )
}

export default SearchItem