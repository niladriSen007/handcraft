import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React, { useState } from "react";
import { colors, defaultStyle } from "../styles/styles";
import Header from "../components/Header";
import { Avatar, Button } from "react-native-paper";
import SearchModal from "../components/SearchModal";
import ProductCard from "../components/ProductCard";
import { useNavigation } from "@react-navigation/native";
import Footer from "../components/Footer";


const categories = [
  { category: "Men", _id: 1 },
  { category: "Women", _id: 2 },
  { category: "Kids", _id: 3 },
  { category: "Footwear", _id: 4 },
  { category: "Kurta", _id: 5 },
];

const products = [
  {
    _id: 1,
    name: "Handmade night lamp",
    price: 1400,
    stock:12,
    images: [
      {
        url: "https://cdn.shopify.com/s/files/1/0036/8757/9760/products/Handcrafted-Table-Lamp-Black-Earthen-Lamp-Writings-On-The-Wall-537_1024x1024.jpg?v=1675094771",
      },
      
    ],
  },
  {
    _id: 2,
    name: "Handmade plant vaas",
    price: 1000,
    stock:12,
    images: [
      {
        url: "https://cdn.shopify.com/s/files/1/2690/0106/files/IMG_6191.jpg?v=1632547270",
      },
    ],
  },
  {
    _id: 3,
    name: "Bottle covered with rust",
    price: 700,
    stock:12,
    images: [
      {
        url: "https://4.imimg.com/data4/WQ/AM/ANDROID-39840672/product-500x500.jpeg",
      },
    ],
  },
  {
    _id: 4,
    name: "Showcase made by wood",
    price: 2100,
    stock:12,
    images: [
      {
        url: "https://cdn.shopify.com/s/files/1/0030/9759/1872/products/el-002-001_a_3_400x400.jpg?v=1570516510",
      },
    ],
  },
  {
    _id: 5,
    name: "Handmade bags by wooden cotton",
    price: 900,
    stock:12,
    images: [
      {
        url: "https://images.livemint.com/img/2022/09/24/600x338/d1d113b6-3bf9-11ed-aa0a-736e94ef98be_1664018066209.jpg",
      },
    ],
  },
];

const Home = () => {

  const [selectedCategoryId, setselectedCategoryId] = useState("");
  const [activeSearch, setActiveSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const navigateTo = useNavigation()

  const setCategoryHandler = (_id) => {
    setselectedCategoryId(_id);
  };

  const addToCartHandler = (id,stock) =>{
    console.log("Adding To Cart")
  }
  return (
    <>
      {activeSearch && (
        <SearchModal
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          setActiveSearch={setActiveSearch}
          products={products}
        />
      )}
      <View style={defaultStyle}>
        <Header />
        <View
          style={{
            paddingTop: 52,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View>
            <Text style={{ fontSize: 24, fontWeight: "600" }}>Our </Text>
            <Text style={{ fontSize: 24, fontWeight: "800" }}>Products</Text>
          </View>
          <View>
            <TouchableOpacity onPress={() => setActiveSearch(!activeSearch)}>
              <Avatar.Icon
                icon={"magnify"}
                color={colors.color3}
                style={{ backgroundColor: colors.color2, elevation: 2 }}
                size={48}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ flexDirection: "row", height: 80 }}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {categories.map((cat, i) => (
              <Button
                key={cat._id}
                style={{
                  backgroundColor:
                    selectedCategoryId === cat._id
                      ? colors.color1
                      : colors.color5,

                  marginTop: 5,
                  marginRight: 5,
                  borderRadius: 100,
                  padding: 2,
                }}
                onPress={() => setCategoryHandler(cat._id)}
              >
                <Text
                  style={{
                    fontSize: 12,
                    color:
                      selectedCategoryId === cat._id
                        ? colors.color2
                        : colors.color1,
                    fontWeight: "700",
                  }}
                >
                  {cat.category}
                </Text>
              </Button>
            ))}
          </ScrollView>
        </View>

        {/* [products] */}
        <View style={{ flex: 1 }}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {products.map((item, index) => (
              <ProductCard
                stock={item.stock}
                name={item.name}
                price={item.price}
                image={item.images[0]?.url}
                addToCartHandler={addToCartHandler}
                id={item._id}
                key={item._id}
                index={index}
                navigateTo={navigateTo}
              />
            ))}
          </ScrollView>
        </View>
      </View>
      <Footer activeRoute={"home"}/>
    </>
  );
};

export default Home;
