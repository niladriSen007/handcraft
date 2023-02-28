import {
  View,
  Text,
  Dimensions,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useRef, useState } from "react";
import { colors, defaultStyle } from "../styles/styles";
import Header from "../components/Header";
import Carousel from "react-native-snap-carousel";
import { Avatar } from "react-native-paper";

const SLIDER_WIDTH = Dimensions.get("window").width;
const ITEM_WIDTH = SLIDER_WIDTH;
const name = "fxjklhlgbh";
const price = 1600;
const description = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos, repellendus quidem.Neque dicta repellendus tempora dolorem dolorum nulla. Veritatis consequuntur ipsa beatae vel,qui deleniti. Quaerat nostrum vitae consequuntur ipsum!`;
const tempStock = 5;
const ProductDetails = ({ route: { params } }) => {
  //   console.log(params);

  const [quantity, setQuantity] = useState(1);

  const images = [
    {
      id: 1,
      url: "https://rukminim1.flixcart.com/image/416/416/kgpg5u80/table-lamp/h/g/f/multicolor-handmade-decorative-night-lamp-lpine04-lpine-original-imafwvz4g67zgfzr.jpeg?q=70",
    },
    {
      id: 2,
      url: "https://cdn.shopify.com/s/files/1/0036/8757/9760/products/Handcrafted-Table-Lamp-Black-Earthen-Lamp-Writings-On-The-Wall-537_1024x1024.jpg?v=1675094771",
    },
    {
      id: 3,
      url: "https://m.media-amazon.com/images/I/61HQ6wWd2WL._SX466_.jpg",
    },
  ];

  const isCarousel = useRef(null);

  return (
    <View
      style={{ ...defaultStyle, padding: 0, backgroundColor: colors.color1 }}
    >
      <Header back={true} />

      <Carousel
        layout="stack"
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        ref={isCarousel}
        data={images}
        renderItem={CarouselCardItem}
      />
      <View
        style={{
          backgroundColor: colors.color2,
          padding: 36,
          flex: 1,
          marginTop: -340,
          borderTopEndRadius: 30,
          borderTopStartRadius: 30,
        }}
      >
        <Text style={{ fontSize: 25, fontWeight: "600" }} numberOfLines={2}>
          {name}
        </Text>
        <Text style={{ fontSize: 18, fontWeight: "900" }} numberOfLines={2}>
          {price}
        </Text>
        <Text
          style={{
            letterSpacing: 1,
            lineHeight: 18,
            marginVertical: 15,
          }}
          numberOfLines={8}
        >
          {description}
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: 5,
          }}
        >
          <Text style={{ color: colors.color3, fontWeight: "200" }}>
            Quantity
          </Text>
          <View
            style={{
              flexDirection: "row",
              width: 80,
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              onPress={() =>
                setQuantity(quantity > 1 ? quantity - 1 : quantity)
              }
            >
              <Avatar.Icon
                icon={"minus"}
                size={20}
                style={{
                  borderRadius: 5,
                  backgroundColor: colors.color5,
                  height: 25,
                  width: 25,
                }}
              />
            </TouchableOpacity>

            <Text
              style={{
                backgroundColor: colors.color2,
                height: 25,
                width: 25,
                textAlignVertical: "center",
                textAlign: "center",
                borderWidth: 1,
                borderRadius: 5,
                borderColor: colors.color5,
              }}
            >
              {quantity}
            </Text>

            <TouchableOpacity
              onPress={() =>
                setQuantity(quantity < tempStock ? quantity + 1 : quantity)
              }
            >
              <Avatar.Icon
                icon={"plus"}
                size={20}
                style={{
                  borderRadius: 5,
                  backgroundColor: colors.color5,
                  height: 25,
                  width: 25,
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const CarouselCardItem = ({ item, index }) => (
  <View style={imageContainerStyle.container}>
    <Image source={{ uri: item.url }} style={imageContainerStyle.image} />
  </View>
);

const imageContainerStyle = StyleSheet.create({
  container: {
    backgroundColor: colors.color1,
    width: ITEM_WIDTH,
    paddingVertical: 70,
    height: 380,
  },
  image: {
    width: ITEM_WIDTH,
    resizeMode: "contain",
    height: 250,
  },
});

export default ProductDetails;
