import * as React from "react";
import {
  Pressable,
  Image,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Border, Color, Padding } from "../GlobalStyles";
import { useTheme } from "../context/ThemeContext";

const DarkSettingsPrivacyPolicy = () => {
  const navigation = useNavigation();
  const { theme, toggleTheme, isDarkMode } = useTheme();

  return (
    <View style={[styles.darkSettingsPrivacyPolicy,{ backgroundColor: theme.background }]}>
      <View style={styles.autoLayoutVertical}>
        <View style={styles.navbardefaultDarktrueCom}>
          <TouchableOpacity
            style={styles.autoLayoutHorizontal}
            activeOpacity={0.0}
            onPress={() => navigation.navigate("DarkSettings")}
          >
            <Image
              style={[styles.typelogoDefaultComponentl, styles.gobackLayout]}
              resizeMode="cover"
              source={require("../assets/typelogo-default-componentlogo4.png")}
            />
            <Pressable
              style={[styles.gobackLayout]}
              onPress={() => navigation.goBack()}
            >
              <Image
                style={styles.icon}
                resizeMode="cover"
                source={isDarkMode ? require("../assets/iconlyregularoutlinearrow--left.png") : require("../assets/blackarrow.png")}
              />
            </Pressable>
          </TouchableOpacity>
          <Text style={[styles.titleSection, styles.titleSectionTypo, { color: theme.text }]}>
            Privacy Policy
          </Text>
          <Image
            style={[styles.autoLayoutHorizontal1, styles.gobackLayout]}
            resizeMode="cover"
            source={require("../assets/auto-layout-horizontal.png")}
          />
        </View>
        <Text style={styles.atArtifyWeContainer}>
          <Text style={[styles.atArtifyWe, { color: theme.text }]}
          >{`At Artify, we respect and protect the privacy of our users. This Privacy Policy outlines the types of personal information we collect, how we use it, and how we protect your information.

`}</Text>
          <Text style={[styles.titleSectionTypo,{ color: theme.text }]}>{`Information We Collect
`}</Text>
          <Text
            style={[styles.atArtifyWe, { color: theme.text }]}
          >{`When you use our app, we may collect the following types of personal information:
Device Information: We may collect information about the type of device you use, its operating system, and other technical details to help us improve our app.
Usage Information: We may collect information about how you use our app, such as which features you use and how often you use them.
Personal Information: We may collect personal information, such as your name, email address, or phone number, if you choose to provide it to us.

`}</Text>
          <Text style={[styles.titleSectionTypo,{ color: theme.text }]}>{`How We Use Your Information
`}</Text>
          <Text
            style={[styles.atArtifyWe,{ color: theme.text }]}
          >{`We use your information for the following purposes:
To provide and improve our app: We use your information to provide and improve our app, including to personalize your experience and to analyze how our app is used.
To communicate with you: We may use your information to communicate with you about our app, including to provide you with updates and news about our app.
To protect our rights and the rights of others: We may use your information to protect our rights and the rights of others, such as to investigate and prevent fraud or other illegal activity.`}</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  gobackLayout: {
    height: 28,
    width: 28,
    marginLeft: "-65%",
    bottom: "25%"
  },
  titleSectionTypo: {
    fontFamily: FontFamily.bodyXSmallBold,
    fontWeight: "700",
    fontSize: FontSize.h4Bold_size,
  },
  groupIconPosition: {
    top: "50%",
    position: "absolute",
  },
  typelogoDefaultComponentl: {
    borderRadius: Border.br_341xl,
    display: "none",
  },
  icon: {
    height: "100%",
    width: "100%",
    bottom: "20%"
  },
  goback: {
    marginLeft: 16,
  },
  autoLayoutHorizontal: {
    width: 28,
    alignItems: "center",
    flexDirection: "row",
  },
  titleSection: {
    textAlign: "center",
    width: 294,
    color: Color.skyWhite,
    marginLeft: "-5%",
    marginBottom: "7%"
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
  atArtifyWe: {
    fontSize: FontSize.bodyXLargeBold_size,
    fontFamily: FontFamily.bodySmallRegular,
    letterSpacing: 0,
  },
  atArtifyWeContainer: {
    alignSelf: "stretch",
    color: Color.greyscale50,
    marginTop: 24,
    textAlign: "left",
  },
  autoLayoutVertical: {
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: Padding.p_xs,
    left: 0,
    right: 0,
    position: "absolute",
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
    fontSize: FontSize.bodyLargeBold_size,
    lineHeight: 26,
    fontWeight: "600",
    fontFamily: FontFamily.bodyMediumSemibold,
    letterSpacing: 0,
    textAlign: "left",
    color: Color.skyWhite,
  },
  typestatusBarThemedarkC: {
    top: 0,
    height: 44,
    left: 0,
    right: 0,
    position: "absolute",
  },
  darkSettingsPrivacyPolicy: {
    flex: 1,
    height: 932,
    overflow: "hidden",
    width: "100%",
  },
});

export default DarkSettingsPrivacyPolicy;
