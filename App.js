import React from "react";
import { StyleSheet, Text, View } from "react-native";

import AppNavigation from "./navigation/AppNavigator";

export default function App() {
  return <AppNavigation />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //fontSize: '18',
    backgroundColor: "#ffff",
    alignItems: "center",
    justifyContent: "center"
  }
});
