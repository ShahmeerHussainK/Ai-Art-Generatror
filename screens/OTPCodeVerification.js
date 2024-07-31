import * as React from "react";
import { Pressable, Image, StyleSheet, View, Text, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Padding, Border, FontFamily, FontSize, Color } from "../GlobalStyles";
import { useTranslation } from 'react-i18next';
import { useTheme } from "../context/ThemeContext";

const OTPCodeVerification = () => {
  const { t } = useTranslation();
  
  const navigation = useNavigation();
  const { theme, toggleTheme, isDarkMode } = useTheme();

  return (
    <View style={[styles.otpCodeVerification,{ backgroundColor: theme.background }]}>
      <View
        style={[styles.autoLayoutVertical, styles.autoLayoutVerticalPosition]}
      >
        <View
          style={[
            styles.navbardefaultDarktrueCom,
            styles.autoLayoutHorizontal2FlexBox1,
          ]}
        >
          <Pressable style={styles.autoLayoutHorizontal}>
            <Image
              style={[
                styles.typelogoDefaultComponentl,
                styles.autoLayoutHorizontal1Layout,
              ]}
              resizeMode="cover"
              source={require("../assets/typelogo-default-componentlogo1.png")}
            />
            <Pressable
              style={styles.goback}
              onPress={() => navigation.goBack()}
            >
              <Image
                style={styles.icon}
                resizeMode="cover"
                source={isDarkMode ? require("../assets/iconlyregularoutlinearrow--left.png") : require("../assets/blackarrow.png")}
              />
            </Pressable>
          </Pressable>
          <Text style={[styles.titleSection,{ color: theme.text }]}>{t('Title Section')}</Text>
          <Image
            style={[
              styles.autoLayoutHorizontal1,
              styles.autoLayoutHorizontal1Layout,
            ]}
            resizeMode="cover"
            source={require("../assets/auto-layout-horizontal1.png")}
          />
        </View>
        <View style={styles.autoLayoutVertical1}>
          <View style={styles.autoLayoutVertical2}>
            <View style={styles.autoLayoutHorizontal2FlexBox}>
              <Text style={[styles.title,{ color: theme.text }]}>{t('OTP code verification')} 🔐</Text>
              <Text style={[styles.informationDetails,{ color: theme.text }]}>
              {t('We have sent an OTP code to your provided email. Enter the OTP code below to verify.')}
              </Text>
            </View>
          </View>
          <View style={styles.autoLayoutVertical3}>
            <View
              style={[
                styles.autoLayoutHorizontal2,
                styles.autoLayoutHorizontal2FlexBox,
              ]}
            >
              <TextInput
                style={[styles.inputFormnumberPinState, styles.inputFlexBox,{ backgroundColor: theme.promptbackground }, { color: theme.text }]}
                keyboardType="number-pad"
                autoCapitalize="none"
                placeholderTextColor="#fff"
              />
              <TextInput
                style={[styles.inputFormnumberPinState1, styles.inputFlexBox,{ backgroundColor: theme.promptbackground },{ color: theme.text }]}
                keyboardType="number-pad"
                autoCapitalize="none"
                placeholderTextColor="#fff"
              />
              <TextInput
                style={[styles.inputFormnumberPinState2, styles.inputFlexBox,{ backgroundColor: theme.promptbackground },{ color: theme.text }]}
                keyboardType="number-pad"
                autoCapitalize="none"
                placeholderTextColor="#fff"
              />
              <TextInput
                style={[styles.inputFormnumberPinState1, styles.inputFlexBox,{ backgroundColor: theme.promptbackground },{ color: theme.text }]}
                keyboardType="number-pad"
                autoCapitalize="none"
                placeholderTextColor="#1f222a"
              />
            </View>
            <View style={styles.autoLayoutVertical4}>
              <Text
                style={[styles.didntReceiveEmail, styles.didntReceiveEmailTypo,{ color: theme.text }]}
              >
                {t('Didnt receive email?')}
              </Text>
              <Text
                style={[
                  styles.youCanResendContainer,
                  styles.didntReceiveEmailTypo,
                ]}
              >
                <Text
                  style={[styles.youCanResend,{ color: theme.text }]}
                >{t('`You can resend code in `')}</Text>
                <Text style={styles.text}>55</Text>
                <Text style={[styles.youCanResend,{ color: theme.text }]}> s</Text>
              </Text>
            </View>
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
          style={[
            styles.buttonpillTypepillIconf,
            styles.buttonpillTypepillIconfFlexBox,
          ]}
          activeOpacity={0.0}
          onPress={() => navigation.navigate("CreateNewPassword")}
        >
          <Text style={[styles.button, styles.textLayout]}>{t('Continue')}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  autoLayoutHorizontal2FlexBox1: {
    flexDirection: "row",
    alignItems: "center",
  },
  autoLayoutHorizontal1Layout: {
    display: "none",
    height: 28,
    width: 28,
  },
  autoLayoutHorizontal2FlexBox: {
    justifyContent: "center",
    alignSelf: "stretch",
  },
  inputFlexBox: {
    paddingVertical: Padding.p_base,
    paddingHorizontal: Padding.p_13xl,
    borderStyle: "solid",
    borderRadius: Border.br_xs,
    justifyContent: "center",
    fontFamily: FontFamily.bodyXSmallBold,
    fontWeight: "700",
    fontSize: FontSize.h4Bold_size,
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
    flex: 1,
  },
  didntReceiveEmailTypo: {
    fontFamily: FontFamily.bodyXSmallMedium,
    fontWeight: "500",
    lineHeight: 29,
    letterSpacing: 0,
    fontSize: FontSize.h5Semibold_size,
    textAlign: "center",
    alignSelf: "stretch",
  },
  typelogoDefaultComponentl: {
    borderRadius: Border.br_341xl,
  },
  icon: {
    height: "100%",
    width: "100%",
    bottom: "20%",
  },
  goback: {
    height: 28,
    width: 28,
  },
  autoLayoutHorizontal: {
    width: 28,
    alignItems: "center",
    flexDirection: "row",
  },
  titleSection: {
    lineHeight: 38,
    textAlign: "center",
    fontFamily: FontFamily.bodyXSmallBold,
    fontWeight: "700",
    fontSize: FontSize.h4Bold_size,
    color: Color.skyWhite,
    marginLeft: 16,
    display: "none",
    flex: 1,
  },
  autoLayoutHorizontal1: {
    marginLeft: 16,
  },
  navbardefaultDarktrueCom: {
    height: 48,
    paddingHorizontal: 0,
    alignItems: "center",
    alignSelf: "stretch",
    paddingVertical: Padding.p_xs,
  },
  title: {
    fontSize: FontSize.h3Bold_size,
    textAlign: "left",
    color: Color.skyWhite,
    fontFamily: FontFamily.bodyXSmallBold,
    fontWeight: "700",
    alignSelf: "stretch",
  },
  informationDetails: {
    fontFamily: FontFamily.bodySmallRegular,
    marginTop: 16,
    lineHeight: 29,
    fontSize: FontSize.bodyXLargeBold_size,
    letterSpacing: 0,
    textAlign: "left",
    color: Color.skyWhite,
    alignSelf: "stretch",
  },
  autoLayoutVertical2: {
    alignSelf: "stretch",
  },
  inputFormnumberPinState: {
    paddingVertical: Padding.p_base,
    paddingHorizontal: Padding.p_13xl,
    borderStyle: "solid",
    borderRadius: Border.br_xs,
  },
  inputFormnumberPinState1: {
    paddingVertical: Padding.p_base,
    paddingHorizontal: Padding.p_13xl,
    borderStyle: "solid",
    borderRadius: Border.br_xs,
    marginLeft: 10,
  },
  inputFormnumberPinState2: {
    paddingVertical: Padding.p_base,
    paddingHorizontal: Padding.p_13xl,
    borderStyle: "solid",
    borderRadius: Border.br_xs,
    marginLeft: 16,
  },
  autoLayoutHorizontal2: {
    alignItems: "center",
    flexDirection: "row",
  },
  didntReceiveEmail: {
    color: Color.skyWhite,
  },
  youCanResend: {
    color: Color.skyWhite,
  },
  text: {
    color: Color.primary900,
  },
  youCanResendContainer: {
    marginTop: 16,
  },
  autoLayoutVertical4: {
    marginTop: 40,
    alignSelf: "stretch",
  },
  autoLayoutVertical3: {
    alignItems: "center",
    alignSelf: "stretch",
    marginBottom: "10%"
  },
  autoLayoutVertical1: {
    justifyContent: "space-between",
    paddingBottom: 70,
    marginTop: 24,
    alignItems: "center",
    alignSelf: "stretch",
    flex: 1,
  },
  autoLayoutVertical: {
    height: 582,
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: Padding.p_xs,
  },
  text1: {
    marginTop: -13,
    left: 23,
    fontSize: FontSize.bodyLargeBold_size,
    lineHeight: 26,
    fontWeight: "600",
    fontFamily: FontFamily.bodyMediumSemibold,
    letterSpacing: 0,
    top: "50%",
    textAlign: "left",
    color: Color.skyWhite,
  },
  otpCodeVerification: {
    height: 932,
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
  buttonprimaryDarktrueCom: {
    bottom: 0,
    borderStyle: "solid",
    borderColor: Color.colorDarkslategray_200,
    //borderTopWidth: 1,
    paddingTop: Padding.p_5xl,
    paddingBottom: Padding.p_17xl,
  },
  autoLayoutVerticalPosition: {
    paddingHorizontal: Padding.p_5xl,
    left: 0,
    right: 0,
    position: "absolute",
  },
  buttonpillTypepillIconf: {
    borderRadius: Border.br_81xl,
    backgroundColor: Color.primary900,
    padding: Padding.p_base,
    alignItems: "center",
  },
  buttonpillTypepillIconfFlexBox: {
    justifyContent: "center",
    alignSelf: "stretch",
  },
  textLayout: {
    lineHeight: 26,
    fontSize: FontSize.bodyLargeBold_size,
    letterSpacing: 0,
    color: Color.skyWhite,
  },
  button: {
    alignSelf: "stretch",
    textAlign: "center",
    fontFamily: FontFamily.bodyXSmallBold,
    fontWeight: "700",
  },
});

export default OTPCodeVerification;
