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
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const ElementsSettingsListDarkT8 = ({ style }) => {
  const [
    styleDefaultEnabledFalseSwitchValueState,
    setStyleDefaultEnabledFalseSwitchValueState,
  ] = useState(false);

  return (
    <View style={[styles.elementssettingsListDarkt, style]}>
      <Text style={[styles.settings, styles.settingsTypo]}>Japanese</Text>
      <Text style={[styles.settings1, styles.settings1SpaceBlock]}>
        Settings
      </Text>
      <Switch
        style={[
          styles.styledefaultEnabledfalse,
          styles.styledefaultEnabledfalseSpaceBlock,
        ]}
        disabled={true}
        value={styleDefaultEnabledFalseSwitchValueState}
        onValueChange={setStyleDefaultEnabledFalseSwitchValueState}
        thumbColor="#fff"
        trackColor={{ false: "#939393", true: "#35383f" }}
      />
      <Image
        style={[styles.stylenoneThemedefaultSel, styles.settings1SpaceBlock]}
        resizeMode="cover"
        source={require("../assets/stylenone-themedefault-selectedfalse-componentradio.png")}
      />
      <Image
        style={[styles.stylenoneThemedefaultSel, styles.settings1SpaceBlock]}
        resizeMode="cover"
        source={require("../assets/iconlyregularoutlinearrow--right-2.png")}
      />
      <Image
        style={[
          styles.iconcheckComponentaddition,
          styles.styledefaultEnabledfalseSpaceBlock,
        ]}
        resizeMode="cover"
        source={require("../assets/iconcheck-componentadditional-icons.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  settingsTypo: {
    color: Color.skyWhite,
    fontFamily: FontFamily.bodyMediumSemibold,
    fontWeight: "600",
    flex: 1,
  },
  settings1SpaceBlock: {
    marginLeft: 20,
    display: "none",
  },
  styledefaultEnabledfalseSpaceBlock: {
    overflow: "hidden",
    marginLeft: 20,
    display: "none",
  },
  settings: {
    fontSize: FontSize.h5Semibold_size,
    lineHeight: 32,
    textAlign: "left",
  },
  settings1: {
    fontSize: FontSize.bodyLargeBold_size,
    letterSpacing: 0,
    lineHeight: 26,
    textAlign: "right",
    color: Color.skyWhite,
    fontFamily: FontFamily.bodyMediumSemibold,
    fontWeight: "600",
    flex: 1,
  },
  styledefaultEnabledfalse: {
    borderRadius: Border.br_981xl,
    width: 44,
    height: 24,
  },
  stylenoneThemedefaultSel: {
    width: 24,
    height: 24,
  },
  iconcheckComponentaddition: {
    width: 32,
    height: 32,
  },
  elementssettingsListDarkt: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
  },
});

export default ElementsSettingsListDarkT8;
