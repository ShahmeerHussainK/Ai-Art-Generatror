import * as React from "react";
import { StyleProp, ViewStyle, Text, StyleSheet } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const SuggestedText = ({ style }) => {
  return <Text style={[styles.suggested, style]}>Suggested</Text>;
};

const styles = StyleSheet.create({
  suggested: {
    alignSelf: "stretch",
    fontSize: FontSize.h5Semibold_size,
    lineHeight: 32,
    fontWeight: "600",
    fontFamily: FontFamily.bodyMediumSemibold,
    color: Color.greyscale300,
    textAlign: "left",
  },
});

export default SuggestedText;
