import React from "react";
import { Text, View, StyleSheet, Dimensions, Image } from "react-native";

const { width: DEVICE_WIDTH, height: DEVICE_HEIGHT } = Dimensions.get("window");

const Artikel = props => {
  return (
    <View style={{ width: DEVICE_WIDTH, height: 500, padding: 10 }}>
      <Text style={{ fontSize: 28, padding: 10 }}>{props.judul}</Text>
      <Image source={props.gambar} style={{ width: "100%", height: "50%" }} />
      <Text> {props.deskripsi}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default Artikel;
