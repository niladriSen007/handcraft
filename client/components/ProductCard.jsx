import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { colors } from "../styles/styles";
import { Button } from "react-native-paper";

const ProductCard = ({
  stock,
  name,
  price,
  image,
  id,
  addToCartHandler,
  index,
  navigateTo,
}) => {
  return (
    <>
      <TouchableOpacity
      activeOpacity={1}
        onPress={() => navigateTo.navigate("productdetails", { id })}
      >
        <View
          style={{
            elevation: 5,
            width: 220,
            alignItems: "center",
            justifyContent: "flex-start",
            margin: 20,
            borderRadius: 20,
            height: 400,
            backgroundColor: colors.color2,
            overflow: "hidden",
          }}
        >
          <Image
            source={{ uri: image }}
            style={{
              width: "100%",
              height: 200,
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              resizeMode: "contain",
            }}
          />

          <View
            style={{
              padding: 20,
              justifyContent: "space-between",
              width: "100%",
              backgroundColor: colors.color1,
            }}
          >
            <Text
              numberOfLines={2}
              style={{ color: colors.color2, fontWeight: "700", fontSize: 20 }}
            >
              {name}
            </Text>
            <Text
              numberOfLines={2}
              style={{
                color: colors.color2,
                fontWeight: "500",
                fontSize: 14,
                paddingTop: 8,
              }}
            >
              ₹{price}{" "}
              <Text style={{ textDecorationLine: "line-through" }}>
                ₹{price + 2000}
              </Text>
            </Text>
            <TouchableOpacity
              style={{
                backgroundColor: colors.color2,
                borderRadius: 12,
                marginTop:32
              }}
            >
              <Button onPress={()=>addToCartHandler(id,stock)}>
                <Text style={{ color: colors.color1, fontWeight: "700" }}>
                  Add To Cart
                </Text>
              </Button>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    </>
  );
};

export default ProductCard;
