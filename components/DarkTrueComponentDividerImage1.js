import * as React from "react";
import { StyleProp, ViewStyle, Image, StyleSheet } from "react-native";

const DarkTrueComponentDividerImage = ({ style }) => {
  return (
    <Image
      style={[styles.darktrueComponentdividerIcon, style]}
      resizeMode="cover"
      source={require("../assets/darktrue-componentdivider4.png")}
    />
  );
};

const styles = StyleSheet.create({
  darktrueComponentdividerIcon: {
    alignSelf: "stretch",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    width: "100%",
  },
});

export default DarkTrueComponentDividerImage;
