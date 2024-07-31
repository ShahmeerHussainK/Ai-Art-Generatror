import React, { useState } from "react";
import {
  StyleProp,
  ViewStyle,
  Text,
  StyleSheet,
  Switch,
  Image,
  View,
} from "react-native";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const ElementsSettingsListDarkT = ({ style }) => {
  const [
    styleDefaultEnabledFalseSwitchValueState,
    setStyleDefaultEnabledFalseSwitchValueState,
  ] = useState(false);

  return (
    <View style={[styles.elementssettingsListDarkt, style]}>
      <Text style={styles.settings}>English (US)</Text>
      <Text style={styles.settings1}>Settings</Text>
      <Switch
        style={styles.styledefaultEnabledfalse}
        disabled={true}
        value={styleDefaultEnabledFalseSwitchValueState}
        onValueChange={setStyleDefaultEnabledFalseSwitchValueState}
        thumbColor="#fff"
        trackColor={{ false: "#939393", true: "#35383f" }}
      />
      <Image
        style={styles.stylenoneThemedefaultSelLayout}
        resizeMode="cover"
        source={require("../assets/stylenone-themedefault-selectedtrue-componentradio.png")}
      />
      <Image
        style={[
          styles.iconcheckComponentaddition,
          styles.stylenoneThemedefaultSelLayout,
        ]}
        resizeMode="cover"
        source={require("../assets/iconcheck-componentadditional-icons2.png")}
      />
      <Image
        style={styles.iconcheckComponentaddition1}
        resizeMode="cover"
        source={require("../assets/iconcheck-componentadditional-icons.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  stylenoneThemedefaultSelLayout: {
    width: 24,
    height: 24,
    marginLeft: 20,
    display: "none",
  },
  settings: {
    fontSize: FontSize.h5Semibold_size,
    lineHeight: 32,
    textAlign: "left",
    color: Color.skyWhite,
    fontFamily: FontFamily.bodyMediumSemibold,
    fontWeight: "600",
    flex: 1,
  },
  settings1: {
    fontSize: FontSize.bodyLargeBold_size,
    letterSpacing: 0,
    lineHeight: 26,
    textAlign: "right",
    marginLeft: 20,
    display: "none",
    color: Color.skyWhite,
    fontFamily: FontFamily.bodyMediumSemibold,
    fontWeight: "600",
    flex: 1,
  },
  styledefaultEnabledfalse: {
    borderRadius: Border.br_981xl,
    width: 44,
    overflow: "hidden",
    height: 24,
    marginLeft: 20,
    display: "none",
  },
  iconcheckComponentaddition: {
    overflow: "hidden",
  },
  iconcheckComponentaddition1: {
    width: 32,
    height: 32,
    overflow: "hidden",
    marginLeft: 20,
  },
  elementssettingsListDarkt: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
  },
});

export default ElementsSettingsListDarkT;
