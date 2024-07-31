import React, { useState } from "react";
import {
  Pressable,
  Image,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Padding, FontFamily, FontSize, Color, Border } from "../GlobalStyles";
import auth from "@react-native-firebase/auth";
import { useTheme } from "../context/ThemeContext";
import { useTranslation } from "react-i18next";
const ResetYourPassword = () => {
  const { t } = useTranslation();
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const { theme, toggleTheme, isDarkMode } = useTheme();

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const toggleModal = async () => {
    if (!email) {
      Alert.alert(t("Incomplete Fields"), t("Please Enter Email"));
    } else if (!validateEmail(email)) {
      Alert.alert(t("Invalid Email"), t("Please enter a valid email address"));
    } else {
      try {
        await auth().sendPasswordResetEmail(email);
        Alert.alert(
          t("Email Sent"),
          t("Please check your email for reset instructions")
        );
        navigation.navigate("OTPCodeVerification");
      } catch (error) {
        Alert.alert(t("Error"), error.message);
      }
    }
  };

  return (
    <View
      style={[styles.resetYourPassword, { backgroundColor: theme.background }]}
    >
      <View
        style={[styles.autoLayoutVertical, styles.autoLayoutVerticalPosition]}
      >
        <Pressable
          style={[
            styles.navbardefaultDarktrueCom,
            styles.autoLayoutHorizontalFlexBox,
          ]}
        >
          <View
            style={[
              styles.autoLayoutHorizontal,
              styles.autoLayoutHorizontalFlexBox,
            ]}
          >
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
          </View>
          <Text style={[styles.titleSection, styles.buttonTypo]}>
            {t("Title Section")}
          </Text>
          <Image
            style={[styles.autoLayoutHorizontal1, styles.gobackLayout]}
            resizeMode="cover"
            source={require("../assets/auto-layout-horizontal1.png")}
          />
        </Pressable>
        <View style={styles.autoLayoutVertical1}>
          <View style={styles.buttonpillTypepillIconfFlexBox}>
            <Text
              style={[styles.title, styles.titleTypo, { color: theme.text }]}
            >
              {t("Reset your password")} 🔑
            </Text>
            <Text style={[styles.informationDetails, { color: theme.text }]}>
              {t(
                "Please enter your email and we will send an OTP code in the next step to reset your password."
              )}
            </Text>
          </View>
          <View style={styles.inputFormrightIconStatef}>
            <TextInput
              style={[
                styles.autoLayoutVertical2,
                styles.titleTypo,
                { color: theme.text },
              ]}
              placeholder={t("Enter Email")}
              placeholderTextColor="#757575"
              keyboardType="email-address"
              autoCapitalize="none"
              onChangeText={setEmail}
              value={email}
            />
            <View style={[styles.rectangle, styles.rectangleBg]} />
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
          style={[
            styles.buttonpillTypepillIconf,
            styles.buttonpillTypepillIconfFlexBox,
          ]}
          activeOpacity={0.0}
          onPress={toggleModal}
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
  rectangle: {
    height: 1,
  },
  rectangleBg: {
    backgroundColor: "#424242",
    borderRadius: Border.br_81xl,
    alignSelf: "stretch",
  },
  autoLayoutVerticalPosition: {
    paddingHorizontal: Padding.p_5xl,
    left: 0,
    right: 0,
    position: "absolute",
  },
  autoLayoutHorizontalFlexBox: {
    flexDirection: "row",
    width: 28,
    alignItems: "center",
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
  titleTypo: {
    fontFamily: FontFamily.bodyXSmallBold,
    fontWeight: "bold",
    alignSelf: "stretch",
  },
  textLayout: {
    lineHeight: 26,
    fontSize: FontSize.bodyXLargeBold_size,
    letterSpacing: 0,
    color: Color.skyWhite,
    marginLeft: "1%",
  },
  buttonpillTypepillIconfFlexBox: {
    justifyContent: "center",
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
    alignItems: "center",
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
    alignItems: "center",
  },
  title: {
    fontSize: FontSize.h3Bold_size,
    textAlign: "left",
    alignSelf: "stretch",
    color: Color.skyWhite,
  },
  informationDetails: {
    fontSize: FontSize.bodyXLargeBold_size,
    lineHeight: 29,
    fontFamily: FontFamily.bodySmallRegular,
    marginTop: 16,
    letterSpacing: 0,
    textAlign: "left",
    alignSelf: "stretch",
    color: Color.skyWhite,
  },
  label: {
    textAlign: "left",
    alignSelf: "stretch",
    fontFamily: FontFamily.bodyXSmallBold,
    fontWeight: "700",
  },
  autoLayoutVertical2: {
    fontSize: FontSize.h5Semibold_size,
    marginTop: 14,
    alignSelf: "stretch",
  },
  inputFormrightIconStatef: {
    marginTop: 32,
    alignSelf: "stretch",
  },
  autoLayoutVertical1: {
    marginTop: "5%",
    alignSelf: "stretch",
    alignItems: "center",
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
    padding: Padding.p_base,
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
  resetYourPassword: {
    height: 932,
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default ResetYourPassword;
