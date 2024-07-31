import * as React from "react";
import { Pressable, Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Padding, FontFamily, FontSize, Color, Border } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/native";
import { useTranslation } from 'react-i18next';
import { useTheme } from "../context/ThemeContext";

const DarkEraseObject = () => {
  const navigation = useNavigation();
  const { t } = useTranslation();

  const { theme, toggleTheme, isDarkMode } = useTheme();

  return (
    <View style={[styles.darkEraseObject, styles.frameIconLayout, { backgroundColor: theme.background }]}>
      <View
        style={[styles.autoLayoutVertical, styles.autoLayoutVerticalPosition]}
      >
        <View
          style={[
            styles.navbardefaultDarktrueCom,
            styles.navbardefaultDarktrueComSpaceBlock,
          ]}
        >
          <Pressable style={styles.autoLayoutHorizontal}>
            <Image
              style={[
                styles.typelogoDefaultComponentl,
                styles.autoLayoutHorizontal1Layout,
              ]}
              resizeMode="cover"
              source={require("../assets/typelogo-default-componentlogo.png")}
            />
            <TouchableOpacity
              activeOpacity={0.0}
              onPress={() => navigation.navigate("DarkEditArtwork1", { prompt: "" })}
            >
              <Image
                style={[
                  styles.icontimesComponentaddition,
                  styles.autoLayoutHorizontal1Layout,
                ]}
                resizeMode="cover"
                source={isDarkMode ? require("../assets/goback2.png") : require("../assets/blackcross.png")}
              />
            </TouchableOpacity>
          </Pressable>
          <Text style={[styles.titleSection, styles.buttonTypo,{ color: theme.text }]}>
            {t('Erase Object')}
          </Text>
        </View>
        <View style={styles.autoLayoutVertical1}>
          <Image
            style={[styles.frameIcon, styles.frameIconLayout]}
            resizeMode="cover"
            source={require("../assets/frame79.png")}
          />
          <View
            style={[
              styles.elementseraseObjectDarktr,
              styles.navbardefaultDarktrueComSpaceBlock,
            ]}
          >
            <Image
              style={styles.iconeraseOutlineComponent}
              resizeMode="contain"
              source={require("../assets/iconeraseoutline-componentadditional-icons2.png")}
            />
            <Text style={[styles.description, { color: theme.text }]}>
              {t('You can erase the unwanted part of your artwork, then Artify will redraw it for you.')}
            </Text>
          </View>
        </View>
      </View>
      <View
        style={[
          styles.buttonprimaryDarktrueCom,{ backgroundColor: theme.background },
          styles.autoLayoutVerticalPosition,
        ]}
      >
        <TouchableOpacity
          style={styles.buttonpillTypepillIconf}
          activeOpacity={0.0}
          onPress={() => navigation.navigate("DarkEditArtwork1", { prompt: "" })}
        >
          <Text style={[styles.button, styles.textLayout]}>{t('Erase')}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  frameIconLayout: {
    overflow: "hidden",
    width: "100%",
  },
  autoLayoutVerticalPosition: {
    paddingHorizontal: Padding.p_5xl,
    left: 0,
    right: 0,
    position: "absolute",
  },
  navbardefaultDarktrueComSpaceBlock: {
    paddingHorizontal: 0,
    flexDirection: "row",
  },
  autoLayoutHorizontal1Layout: {
    height: 28,
    width: 28,
  },
  buttonTypo: {
    textAlign: "center",
    fontFamily: FontFamily.bodyXSmallBold,
    fontWeight: "700",
  },
  textLayout: {
    lineHeight: 26,
    letterSpacing: 0,
    fontSize: FontSize.bodyLargeBold_size,
    color: Color.skyWhite,
  },
  groupIconPosition: {
    top: "50%",
    position: "absolute",
  },
  typelogoDefaultComponentl: {
    borderRadius: Border.br_341xl,
    display: "none",
  },
  icontimesComponentaddition: {
    marginLeft: "4%",
    bottom: "25%",
  },
  autoLayoutHorizontal: {
    width: 28,
    alignItems: "center",
    flexDirection: "row",
  },
  titleSection: {
    fontSize: FontSize.h4Bold_size,
    width: 294,
    color: Color.skyWhite,
    bottom: "5%",
  },
  autoLayoutHorizontal1: {
    marginLeft: 16,
  },
  navbardefaultDarktrueCom: {
    flexDirection: "row",
    alignItems: "center",
    height: 48,
    paddingHorizontal: 16,
  },
  frameIcon: {
    maxWidth: "100%",
    height: 382,
    alignSelf: "stretch",
  },
  iconeraseOutlineComponent: {
    width: 32,
    height: 32,
  },
  description: {
    fontSize: FontSize.bodyXLargeBold_size,
    lineHeight: 19,
    fontWeight: "500",
    fontFamily: FontFamily.bodyXSmallMedium,
    marginLeft: "2%",
    textAlign: "left",
    color: Color.skyWhite,
    flex: 1,
    paddingRight: "15%"
  },
  elementseraseObjectDarktr: {
    width: 382,
    paddingVertical: Padding.p_8xs,
    marginTop: 24,
  },
  autoLayoutVertical1: {
    marginTop: 24,
    alignSelf: "stretch",
  },
  autoLayoutVertical: {
    height: 888,
    paddingVertical: Padding.p_xs,
  },
  button: {
    alignSelf: "stretch",
    textAlign: "center",
    fontFamily: FontFamily.bodyXSmallBold,
    fontWeight: "700",
  },
  buttonpillTypepillIconf: {
    borderRadius: Border.br_81xl,
    backgroundColor: Color.primary900,
    justifyContent: "center",
    padding: Padding.p_base,
    alignSelf: "stretch",
    alignItems: "center",
  },
  buttonprimaryDarktrueCom: {
    bottom: 0,
    borderStyle: "solid",
    borderColor: Color.colorDarkslategray_200,
    paddingTop: Padding.p_5xl,
    paddingBottom: Padding.p_17xl,
  },
  groupIcon: {
    marginTop: -4,
    right: 76,
    width: 18,
    height: 10,
  },
  groupIcon1: {
    marginTop: -5,
    right: 56,
    width: 15,
    height: 11,
  },
  groupIcon2: {
    marginTop: -6,
    right: 23,
    width: 27,
    height: 13,
  },
  text: {
    marginTop: -13,
    left: 23,
    fontWeight: "600",
    fontFamily: FontFamily.bodyMediumSemibold,
    lineHeight: 26,
    letterSpacing: 0,
    fontSize: FontSize.bodyLargeBold_size,
    color: Color.skyWhite,
    textAlign: "left",
  },
  typestatusBarThemedarkC: {
    top: 0,
    height: 44,
    left: 0,
    right: 0,
    position: "absolute",
  },
  darkEraseObject: {
    height: 932,
    flex: 1,
  },
});

export default DarkEraseObject;
