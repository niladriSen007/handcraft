import {
  View,
  Text,
  Platform,
  StatusBar,
  SafeAreaView,
  ScrollView,
  BackHandler,
} from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { colors } from "../styles/styles";
import { Searchbar } from "react-native-paper";
import SearchItem from "./SearchItem";

const SearchModal = ({
  searchQuery,
  setSearchQuery,
  setActiveSearch,
  products,
}) => {
  const navigateTo = useNavigation();

  const backToHome = () => {
    setSearchQuery("");
    setActiveSearch(false);
    return true;
  };

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", backToHome);

    return () => {
      BackHandler.removeEventListener("hardwareBackPress", backToHome);
    };
  }, []);

  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        position: "absolute",
        top: 0,
        zIndex: 100,
        backgroundColor: colors.color2,
        padding: 35,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      <SafeAreaView>
        <Searchbar
          placeholder="Search..."
          onChangeText={(query) => setSearchQuery(query)}
          value={searchQuery}
          style={{ marginTop: 20, backgroundColor: "white" }}
        />
        <ScrollView>
          <Text style={{ fontWeight:"700",fontSize:24,paddingTop:20}}>Most Popular</Text>
          <View
            style={{
              paddingHorizontal: 2,
              paddingVertical: 10,
            }}
          >
            {products.map((item) => {
              return (
                <SearchItem
                  key={item._id}
                  imgSrc={item.images[0]?.url}
                  name={item.name}
                  price={item.price}
                  handler={() =>
                    navigateTo.navigate("productdetails", { id: item._id })
                  }
                />
              );
            })}
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default SearchModal;
