import React from "react";
import { Text, View, StyleSheet, ImageBackground } from "react-native";


const SukuScreen = () => {
  return (
    <ImageBackground
      source={require("../assets/bg_welcome.png")}
      style={{ width: "100%", height: "100%" }}
  
    >
      <Text>Inside</Text>
      
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default SukuScreen;
