import React, { useState } from "react";
import {
  Pressable,
  Image,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Padding, FontFamily, FontSize, Color, Border } from "../GlobalStyles";
import { useTheme } from "../context/ThemeContext";
import { useTranslation } from "react-i18next";

const CreateNewPassword = () => {
  const navigation = useNavigation();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [passwordVisible1, setPasswordVisible1] = useState(false);
  const { t } = useTranslation();
  const { theme, toggleTheme, isDarkMode } = useTheme();

  return (
    <View
      style={[styles.createNewPassword, { backgroundColor: theme.background }]}
    >
      <View
        style={[styles.autoLayoutVertical, styles.autoLayoutVerticalPosition]}
      >
        <View
          style={[
            styles.navbardefaultDarktrueCom,
            styles.autoLayoutHorizontal2FlexBox,
          ]}
        >
          <Pressable style={styles.autoLayoutHorizontal}>
            <Image
              style={[styles.typelogoDefaultComponentl, styles.gobackLayout]}
              resizeMode="cover"
              source={require("../assets/typelogo-default-componentlogo1.png")}
            />
            <Pressable
              style={[styles.gobackLayout]}
              onPress={() => navigation.goBack()}
            >
              <Image
                style={styles.icon}
                resizeMode="cover"
                source={
                  isDarkMode
                    ? require("../assets/iconlyregularoutlinearrow--left.png")
                    : require("../assets/blackarrow.png")
                }
              />
            </Pressable>
          </Pressable>
          <Text
            style={[
              styles.titleSection,
              styles.buttonTypo,
              { color: theme.text },
            ]}
          >
            {t("Title Section")}
          </Text>
          <Image
            style={[styles.autoLayoutHorizontal1, styles.gobackLayout]}
            resizeMode="cover"
            source={require("../assets/auto-layout-horizontal1.png")}
          />
        </View>
        <View
          style={[
            styles.autoLayoutVertical1,
            styles.autoLayoutVertical1SpaceBlock,
          ]}
        >
          <View style={styles.elementstitleDescriptionH}>
            <Text
              style={[styles.title, styles.titleTypo, { color: theme.text }]}
            >
              {t("Create new password")} 🔒
            </Text>
            <Text style={[styles.informationDetails, { color: theme.text }]}>
              {t(
                "Create your new password. If you forget it, then you have to do forgot password."
              )}
            </Text>
          </View>
          <View style={styles.autoLayoutVertical2}>
            <View style={styles.inputFormrightIconStatef}>
              <Text
                style={[styles.label, styles.textLayout, { color: theme.text }]}
              >
                {t("New Password")}
              </Text>
              <TextInput
                style={[styles.autoLayoutVertical3, { color: theme.text }]}
                keyboardType="default"
                secureTextEntry={!passwordVisible}
                placeholder={t("New Password")}
                placeholderTextColor="#757575"
              />
              <TouchableOpacity
                onPress={() => setPasswordVisible(!passwordVisible)}
              >
                <Image
                  style={styles.passwordToggleIcon}
                  source={
                    passwordVisible
                      ? require("../assets/Show.png")
                      : require("../assets/Hide.png")
                  }
                />
              </TouchableOpacity>
              <View style={[styles.rectangle, styles.rectangleBg]} />
            </View>
            <View style={styles.autoLayoutVertical1SpaceBlock1}>
              <Text
                style={[styles.label, styles.textLayout, { color: theme.text }]}
              >
                {t("Confirm New Password")}
              </Text>
              <View style={styles.autoLayoutVertical3}>
                <TextInput
                  style={[
                    styles.autoLayoutHorizontal2,
                    styles.autoLayoutHorizontal2FlexBox,
                  ]}
                  secureTextEntry={!passwordVisible1}
                  color="white"
                  placeholder={t("Confirm New Password")}
                  fontWeight="bold"
                  placeholderTextColor="#757575"
                />
                <TouchableOpacity
                  onPress={() => setPasswordVisible1(!passwordVisible1)}
                >
                  <Image
                    style={styles.passwordToggleIcon}
                    source={
                      passwordVisible1
                        ? require("../assets/Show.png")
                        : require("../assets/Hide.png")
                    }
                  />
                </TouchableOpacity>
                <View style={[styles.rectangle, styles.rectangleBg]} />
              </View>
            </View>
          </View>
        </View>
      </View>
      <View
        style={[
          styles.buttonprimaryDarktrueCom,
          { backgroundColor: theme.background },
          styles.autoLayoutVerticalPosition,
        ]}
      >
        <TouchableOpacity
          style={[styles.buttonpillTypepillIconf, styles.rectangleBg]}
          activeOpacity={0.0}
          onPress={() => navigation.navigate("SignIn")}
        >
          <Text style={[styles.button, styles.textLayout]}>
            {t("Continue")}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  autoLayoutVerticalPosition: {
    paddingHorizontal: Padding.p_5xl,
    left: 0,
    right: 0,
    position: "absolute",
  },
  autoLayoutHorizontal2FlexBox: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "stretch",
  },
  gobackLayout: {
    height: 28,
    width: 28,
  },
  buttonTypo: {
    textAlign: "center",
    fontFamily: FontFamily.bodyXSmallBold,
    fontWeight: "700",
  },
  autoLayoutVertical1SpaceBlock: {
    marginTop: "5%",
    alignSelf: "stretch",
  },
  autoLayoutVertical1SpaceBlock1: {
    marginTop: "15%",
    alignSelf: "stretch",
  },
  titleTypo: {
    fontFamily: FontFamily.bodyXSmallBold,
    fontWeight: "700",
    textAlign: "left",
    alignSelf: "stretch",
  },
  textLayout: {
    fontSize: FontSize.bodyLargeBold_size,
    letterSpacing: 0,
    color: Color.skyWhite,
    marginLeft: "1%",
  },
  rectangleBg: {
    backgroundColor: Color.primary900,
    borderRadius: Border.br_81xl,
    alignSelf: "stretch",
  },
  typelogoDefaultComponentl: {
    borderRadius: Border.br_341xl,
    display: "none",
  },
  icon: {
    height: "100%",
    width: "100%",
    bottom: "20%",
  },
  autoLayoutHorizontal: {
    width: 28,
    alignItems: "center",
    flexDirection: "row",
  },
  titleSection: {
    fontSize: FontSize.h4Bold_size,
    lineHeight: 38,
    color: Color.skyWhite,
    marginLeft: 16,
    display: "none",
    flex: 1,
  },
  autoLayoutHorizontal1: {
    marginLeft: 16,
    display: "none",
  },
  navbardefaultDarktrueCom: {
    height: 48,
    paddingHorizontal: 0,
    alignItems: "center",
    paddingVertical: Padding.p_xs,
  },
  title: {
    fontSize: FontSize.h3Bold_size,
    textAlign: "left",
    color: Color.skyWhite,
  },
  informationDetails: {
    fontSize: FontSize.bodyXLargeBold_size,
    lineHeight: 29,
    fontFamily: FontFamily.bodySmallRegular,
    marginTop: 16,
    letterSpacing: 0,
    textAlign: "left",
    color: Color.skyWhite,
    alignSelf: "stretch",
  },
  elementstitleDescriptionH: {
    justifyContent: "center",
    alignSelf: "stretch",
  },
  label: {
    textAlign: "left",
    fontFamily: FontFamily.bodyXSmallBold,
    fontWeight: "bold",
    alignSelf: "stretch",
  },
  autoLayoutVertical3: {
    //marginTop: 14,
    alignSelf: "stretch",
    fontWeight: "bold",
    fontSize: FontSize.h5Semibold_size,
  },
  inputFormrightIconStatef: {
    alignSelf: "stretch",
  },
  autoLayoutHorizontal2: {
    alignItems: "center",
    fontSize: FontSize.h5Semibold_size,
  },
  passwordToggleIcon: {
    width: 20,
    height: 20,
    marginLeft: 315,
    bottom: 35,
  },
  rectangle: {
    height: 1,
    bottom: 20,
  },
  autoLayoutVertical2: {
    marginTop: "12%",
    alignItems: "center",
    alignSelf: "stretch",
  },
  autoLayoutVertical1: {
    alignItems: "center",
  },
  autoLayoutVertical: {
    height: 888,
    paddingVertical: Padding.p_xs,
  },
  button: {
    textAlign: "center",
    fontFamily: FontFamily.bodyXSmallBold,
    fontWeight: "700",
    alignSelf: "stretch",
  },
  buttonpillTypepillIconf: {
    padding: Padding.p_base,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonprimaryDarktrueCom: {
    bottom: 0,
    borderStyle: "solid",
    borderColor: Color.colorDarkslategray_200,
    paddingTop: Padding.p_5xl,
    paddingBottom: Padding.p_17xl,
  },
  text: {
    marginTop: -13,
    left: 23,
    fontWeight: "600",
    fontFamily: FontFamily.bodyMediumSemibold,
    lineHeight: 26,
    fontSize: FontSize.bodyLargeBold_size,
    letterSpacing: 0,
    color: Color.skyWhite,
    textAlign: "left",
  },
  createNewPassword: {
    height: 932,
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default CreateNewPassword;
