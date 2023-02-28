import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { colors } from "../styles/styles";
import { Avatar } from "react-native-paper";

const Footer = ({ activeRoute }) => {
  const navigateTo = useNavigation();

  const isAuthenticated = false;

  const loading = false;

  const navigationHandler = (key) => {
    switch (key) {
      case 0:
        navigateTo.navigate("home");
        break;
      case 1:
        navigateTo.navigate("cart");
        break;
      case 2:
        if (isAuthenticated) navigateTo.navigate("profile");
        else navigateTo.navigate("login");
        break;
      default:
        navigateTo.navigate("home");
        break;
    }
  };

  const avatarIcon = {
    style: { backgroundColor: colors.color2, margin: 2 },
    color: colors.color1,
    size: 48,
  };

  return (
    ( !loading && <View
      style={{
        backgroundColor: colors.color1,
        borderTopLeftRadius: 120,
        borderTopRightRadius: 120,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigationHandler(1)}
        >
          <Avatar.Icon
            {...avatarIcon}
            icon={activeRoute === "cart" ? "shopping" : "shopping-outline"}
          />
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigationHandler(2)}
        >
          <Avatar.Icon
            {...avatarIcon}
            icon={activeRoute === "profile" ? "account" : "account-outline"}
          />
        </TouchableOpacity>
      </View>

      <View
        style={{
          position: "absolute",
          width: 70,
          height: 70,
          backgroundColor: colors.color2,
          borderRadius: 100,
          justifyContent: "center",
          alignItems: "center",
          top: -36,
          alignSelf: "center",
        }}
      >
        <View
          style={{
            borderRadius: 100,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigationHandler(0)}
          >
            <Avatar.Icon
              icon={activeRoute === "home" ? "home" : "home-outline"}
              style={{ backgroundColor: colors.color1, margin: 2 }}
              color={colors.color2}
              size={48}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>)
  );
};

export default Footer;
