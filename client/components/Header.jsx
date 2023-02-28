import { View, Text, TouchableOpacity } from 'react-native'
import {Avatar} from "react-native-paper"
import React from 'react'
import { colors } from '../styles/styles'
import { useNavigation, useRoute } from "@react-navigation/native"

const Header = ({back,emptyCart=false}) => {

    const navigateTo = useNavigation()

    const route = useRoute()

    const emptyCartHandler = () =>{
      console.log("Empty cart")
    }

  return (
    <>
    { back && <TouchableOpacity style={{ position:"absolute",left:20,top:40,zIndex:10 }} onPress={()=>navigateTo.goBack()}>
        <Avatar.Icon icon={"arrow-left"} color={ route.name === "productdetails"? colors.color2 : colors.color3} style={{ backgroundColor:colors.color4 }} size={48}/>
    </TouchableOpacity>}

    <TouchableOpacity style={{ position:"absolute",right:32,top:40,zIndex:10 }} onPress={emptyCart ? emptyCartHandler : ()=>navigateTo.navigate("cart")}>
        <Avatar.Icon icon={emptyCart ? "delete-outline" : "cart-outline"} color={ route.name === "productdetails"? colors.color2 : colors.color1} style={{ backgroundColor:colors.color4 }} size={48}/>
    </TouchableOpacity>
    </>
  )
}

export default Header