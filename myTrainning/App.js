import React from "react";
import { View,Text, StyleSheet } from "react-native";
import ProductDetails from "./screens/ProductDetails";
import HomeScreen from "./screens/HomeScreen";
import CardScreen from "./screens/CartScreen";

export default function App(){
  return(
    <View style={styles.container}>
      {/* <HomeScreen /> */}
      <ProductDetails />
       {/* <CardScreen /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  }
});