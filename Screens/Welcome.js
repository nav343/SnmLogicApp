import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text } from "react-native";
import WelcomeImage from "./../Components/Welcome/WelcomeImage";
import WelcomeMainText from "./../Components/Welcome/WelcomeMainText";
import WelcomeSubText from "./../Components/Welcome/WelcomeSubText";
import WelcomeButton from "./../Components/Welcome/WelcomeButton";

export default function Welcome({ navigation }) {
  return (
    <View
      style={{
        backgroundColor: "#A032F6",
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <WelcomeImage />
      <WelcomeMainText />
      <WelcomeSubText />
      <WelcomeButton navigation={navigation} />
      <StatusBar backgroundColor="#A032F6" style="light" />
    </View>
  );
}
