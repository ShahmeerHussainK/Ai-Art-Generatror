import React, { useState } from "react";
import {
  Pressable,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Switch,
  ScrollView,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Padding, Color } from "../GlobalStyles";
import DarkSettingsLogoutModal from "./DarkSettingsLogoutModal";
import { useTranslation } from "react-i18next";
import { useTheme } from "../context/ThemeContext";

const DarkSettings = () => {
  const { t } = useTranslation();
  const navigation = useNavigation();
  const { theme, toggleTheme, isDarkMode } = useTheme();
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View
      style={[
        styles.darkSettings,
        styles.darkSettingsFlexBox,
        { backgroundColor: theme.background },
      ]}
    >
      <View style={[styles.navbardefaultDarktrueCom, styles.darktrueFlexBox]}>
        <Pressable
          style={styles.autoLayoutHorizontal}
          onPress={() => navigation.goBack()}
        >
          <Image
            style={[styles.typelogoDefaultComponentl, styles.gobackLayout]}
            resizeMode="cover"
            source={require("../assets/typelogo-default-componentlogo6.png")}
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
        <Text style={[styles.titleSection, { color: theme.text }]}>
          {t("Settings")}
        </Text>
        <Image
          style={[styles.autoLayoutHorizontal1, styles.gobackLayout]}
          resizeMode="cover"
          source={require("../assets/auto-layout-horizontal.png")}
        />
      </View>
      <ScrollView>
        <View style={[styles.darkSettings, styles.darkSettingsFlexBox]}>
          <View
            style={[
              styles.autoLayoutVertical,
              styles.autoLayoutVerticalPosition,
            ]}
          >
            <View style={styles.elementssettingsDarktrue}>
              <LinearGradient
                style={styles.box}
                locations={[0, 1]}
                colors={["#6949ff", "#876dff"]}
                useAngle={true}
                angle={-73.83}
              >
                <TouchableOpacity
                  style={styles.touchableopacity}
                  activeOpacity={0.0}
                  onPress={() => navigation.navigate("DarkUpgradeToPro")}
                >
                  <Image
                    style={styles.groupIcon}
                    resizeMode="cover"
                    source={require("../assets/group6.png")}
                  />
                  <View
                    style={[styles.autoLayoutVertical1, styles.autoFlexBox1]}
                  >
                    <Text style={[styles.upgradeToPro]}>
                      {t("Upgrade to PRO")}
                    </Text>
                    <Text style={[styles.enjoyAllFeatures, styles.titleLayout]}>
                      {t(
                        "Enjoy all features & benefits without any restrictions"
                      )}
                    </Text>
                  </View>
                  <Image
                    style={[
                      styles.iconlyregularoutlinearrow,
                      styles.iconlyregularoutlinearrowLayout,
                    ]}
                    resizeMode="cover"
                    source={require("../assets/iconlyregularoutlinearrow--right-2.png")}
                  />
                </TouchableOpacity>
              </LinearGradient>
              <View style={[styles.autoLayoutVertical2, styles.autoFlexBox1]}>
                <View
                  style={[
                    styles.elementssectionDividerDark,
                    styles.darktrueFlexBox,
                  ]}
                >
                  <Text style={[styles.title, styles.textTypo]}>
                    {t("General")}
                  </Text>
                  <Image
                    style={[
                      styles.darktrueComponentdividerIcon,
                      styles.darkSettingsFlexBox,
                    ]}
                    resizeMode="cover"
                    source={require("../assets/darktrue-componentdivider2.png")}
                  />
                </View>
                <TouchableOpacity
                  style={[
                    styles.elementssettingsDarktrue1,
                    styles.darktrueFlexBox,
                  ]}
                  activeOpacity={0.0}
                  onPress={() =>
                    navigation.navigate("DarkSettingsPersonalInfo")
                  }
                >
                  <View
                    style={[styles.autoLayoutHorizontal2, styles.autoFlexBox]}
                  >
                    <Image
                      style={styles.iconlyregularoutlinearrowLayout}
                      resizeMode="cover"
                      source={require("../assets/iconlyregularboldnotification.png")}
                    />
                  </View>
                  <Image
                    style={styles.iconlyregularoutlinearrow7Layout}
                    resizeMode="cover"
                    source={
                      isDarkMode
                        ? require("../assets/iconlyregularoutlineprofile1.png")
                        : require("../assets/ProfileLight.png")
                    }
                  />
                  <Text
                    style={[
                      styles.settings,
                      styles.settingsTypo,
                      { color: theme.text },
                    ]}
                  >
                    {t("Personal Info")}
                  </Text>
                  <Image
                    style={styles.iconlyregularoutlinearrow7Layout}
                    resizeMode="cover"
                    source={
                      isDarkMode
                        ? require("../assets/iconlyregularoutlinearrow--right-21.png")
                        : require("../assets/blackRightarrow.png")
                    }
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.elementssettingsDarktrue1,
                    styles.darktrueFlexBox,
                  ]}
                  activeOpacity={0.0}
                  onPress={() => navigation.navigate("DarkSettingsLanguage")}
                >
                  <Image
                    style={styles.iconlyregularoutlinearrow7Layout}
                    resizeMode="cover"
                    source={
                      isDarkMode
                        ? require("../assets/iconlyregularoutlinedocument.png")
                        : require("../assets/Document.png")
                    }
                  />
                  <Text
                    style={[
                      styles.settings,
                      styles.settingsTypo,
                      { color: theme.text },
                    ]}
                  >
                    {t("Language")}
                  </Text>
                  <Image
                    style={styles.iconlyregularoutlinearrow7Layout}
                    resizeMode="cover"
                    source={
                      isDarkMode
                        ? require("../assets/iconlyregularoutlinearrow--right-21.png")
                        : require("../assets/blackRightarrow.png")
                    }
                  />
                </TouchableOpacity>
                <View
                  style={[
                    styles.elementssettingsDarktrue1,
                    styles.darktrueFlexBox,
                  ]}
                >
                  <Image
                    style={styles.iconlyregularoutlinearrow7Layout}
                    resizeMode="cover"
                    source={
                      isDarkMode
                        ? require("../assets/iconlyregularoutlineshow.png")
                        : require("../assets/ShowLight.png")
                    }
                  />
                  <Text
                    style={[
                      styles.settings,
                      styles.settingsTypo,
                      { color: theme.text },
                    ]}
                  >
                    {t("Dark Mode")}
                  </Text>
                  <Switch
                    style={styles.styledefaultLayout}
                    value={isDarkMode}
                    onValueChange={toggleTheme}
                    thumbColor="#fff"
                    trackColor={{ false: "#939393", true: "#6949ff" }}
                  />
                </View>
                <View
                  style={[
                    styles.elementssettingsDarktrue1,
                    styles.darktrueFlexBox,
                  ]}
                >
                  <Text style={[styles.title, styles.textTypo]}>
                    {t("About")}
                  </Text>
                  <Image
                    style={[
                      styles.darktrueComponentdividerIcon,
                      styles.darkSettingsFlexBox,
                    ]}
                    resizeMode="cover"
                    source={require("../assets/darktrue-componentdivider3.png")}
                  />
                </View>
                <TouchableOpacity
                  style={[
                    styles.elementssettingsDarktrue1,
                    styles.darktrueFlexBox,
                  ]}
                  activeOpacity={0.0}
                  onPress={() => navigation.navigate("FollowUsOnSocialMedia")}
                >
                  <Image
                    style={styles.iconlyregularoutlinearrow7Layout}
                    resizeMode="cover"
                    source={
                      isDarkMode
                        ? require("../assets/iconlyregularoutlinepaper1.png")
                        : require("../assets/Paper.png")
                    }
                  />
                  <Text
                    style={[
                      styles.settings,
                      styles.settingsTypo,
                      { color: theme.text },
                    ]}
                  >
                    {t("Follow us on Social Media")}
                  </Text>
                  <Image
                    style={styles.iconlyregularoutlinearrow7Layout}
                    resizeMode="cover"
                    source={
                      isDarkMode
                        ? require("../assets/iconlyregularoutlinearrow--right-21.png")
                        : require("../assets/blackRightarrow.png")
                    }
                  />
                </TouchableOpacity>
                <Pressable
                  style={[
                    styles.elementssettingsDarktrue1,
                    styles.darktrueFlexBox,
                  ]}
                  onPress={() =>
                    navigation.navigate("DarkSettingsPrivacyPolicy")
                  }
                >
                  <Image
                    style={styles.iconlyregularoutlinearrow7Layout}
                    resizeMode="cover"
                    source={
                      isDarkMode
                        ? require("../assets/iconlyregularoutlinelock1.png")
                        : require("../assets/Lock.png")
                    }
                  />
                  <Text
                    style={[
                      styles.settings,
                      styles.settingsTypo,
                      { color: theme.text },
                    ]}
                  >
                    {t("Privacy Policy")}
                  </Text>
                  <Image
                    style={styles.iconlyregularoutlinearrow7Layout}
                    resizeMode="cover"
                    source={
                      isDarkMode
                        ? require("../assets/iconlyregularoutlinearrow--right-21.png")
                        : require("../assets/blackRightarrow.png")
                    }
                  />
                </Pressable>
                <Pressable
                  style={[
                    styles.elementssettingsDarktrue1,
                    styles.darktrueFlexBox,
                  ]}
                  onPress={() => navigation.navigate("ChatBot")}
                >
                  <Image
                    style={styles.iconlyregularoutlinearrow7Layout}
                    resizeMode="cover"
                    source={
                      isDarkMode
                        ? require("../assets/ChatDark.png")
                        : require("../assets/ChatLight.png")
                    }
                  />
                  <Text
                    style={[
                      styles.settings,
                      styles.settingsTypo,
                      { color: theme.text },
                    ]}
                  >
                    {t("ChatBot")}
                  </Text>
                  <Image
                    style={styles.iconlyregularoutlinearrow7Layout}
                    resizeMode="cover"
                    source={
                      isDarkMode
                        ? require("../assets/iconlyregularoutlinearrow--right-21.png")
                        : require("../assets/blackRightarrow.png")
                    }
                  />
                </Pressable>
                <Pressable
                  style={[
                    styles.elementssettingsDarktrue1,
                    styles.darktrueFlexBox,
                  ]}
                  onPress={() => navigation.navigate("DarkSettingsAboutArtify")}
                >
                  <Image
                    style={styles.iconlyregularoutlinearrow7Layout}
                    resizeMode="cover"
                    source={
                      isDarkMode
                        ? require("../assets/iconlyregularoutlineinfo-square.png")
                        : require("../assets/ArtifyInfo.png")
                    }
                  />
                  <Text
                    style={[
                      styles.settings,
                      styles.settingsTypo,
                      { color: theme.text },
                    ]}
                  >
                    {t("About Artify")}
                  </Text>
                  <Image
                    style={styles.iconlyregularoutlinearrow7Layout}
                    resizeMode="cover"
                    source={
                      isDarkMode
                        ? require("../assets/iconlyregularoutlinearrow--right-21.png")
                        : require("../assets/blackRightarrow.png")
                    }
                  />
                </Pressable>
                <TouchableOpacity
                  style={[
                    styles.elementssettingsDarktrue1,
                    styles.darktrueFlexBox,
                  ]}
                  activeOpacity={0.0}
                  onPress={() => setModalVisible(true)}
                >
                  <View
                    style={[styles.autoLayoutHorizontal11, styles.autoFlexBox]}
                  >
                    <Image
                      style={styles.iconlyregularoutlinearrowLayout}
                      resizeMode="cover"
                      source={require("../assets/iconlyregularboldlogout.png")}
                    />
                  </View>
                  <Image
                    style={styles.iconlyregularoutlinearrow7Layout}
                    resizeMode="cover"
                    source={require("../assets/iconlyregularoutlinelogout.png")}
                  />
                  <Text style={[styles.settings7, styles.settingsTypo]}>
                    {t("Logout")}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <DarkSettingsLogoutModal
        isVisible={modalVisible}
        onClose={() => setModalVisible(false)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  darkSettingsFlexBox: {
    overflow: "hidden",
    flex: 1,
  },
  autoLayoutVerticalPosition: {
    left: 0,
    right: 0,
    position: "absolute",
  },
  darktrueFlexBox: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "stretch",
  },
  gobackLayout: {
    height: 28,
    width: 28,
    marginLeft: "5%",
  },
  autoFlexBox1: {
    justifyContent: "center",
    alignSelf: "stretch",
  },
  titleLayout: {
    lineHeight: 22,
    fontSize: FontSize.bodyMediumMedium_size,
  },
  iconlyregularoutlinearrowLayout: {
    height: 24,
    width: 24,
  },
  textTypo: {
    fontFamily: FontFamily.bodyMediumSemibold,
    fontWeight: "600",
    letterSpacing: 0,
    textAlign: "left",
  },
  autoFlexBox: {
    justifyContent: "center",
    display: "none",
    alignItems: "center",
    flexDirection: "row",
  },
  settingsTypo: {
    lineHeight: 29,
    fontSize: FontSize.bodyXLargeBold_size,
    marginLeft: "5%",
    textAlign: "left",
    fontFamily: FontFamily.bodyXSmallBold,
    fontWeight: "700",
    flex: 1,
  },
  loremTypo: {
    textAlign: "right",
    lineHeight: 29,
    fontSize: FontSize.bodyXLargeBold_size,
    marginLeft: 20,
    fontFamily: FontFamily.bodyMediumSemibold,
    fontWeight: "600",
    letterSpacing: 0,
    color: Color.skyWhite,
    flex: 1,
  },
  styledefaultLayout: {
    width: 44,
    marginLeft: 20,
    height: 24,
    overflow: "hidden",
  },
  iconlyregularoutlinearrow7Layout: {
    marginLeft: "4%",
    height: 24,
    width: 24,
  },
  typelogoDefaultComponentl: {
    display: "none",
  },
  icon: {
    height: "100%",
    width: "100%",
    marginLeft: "8%",
  },
  autoLayoutHorizontal: {
    width: 28,
    alignItems: "center",
    flexDirection: "row",
  },
  titleSection: {
    textAlign: "center",
    color: Color.skyWhite,
    fontFamily: FontFamily.bodyXSmallBold,
    fontWeight: "700",
    lineHeight: 38,
    fontSize: FontSize.h4Bold_size,
    marginLeft: 16,
    flex: 1,
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
  groupIcon: {
    width: 83,
    height: 80,
  },
  upgradeToPro: {
    textAlign: "left",
    color: Color.skyWhite,
    fontFamily: FontFamily.bodyXSmallBold,
    fontWeight: "700",
    lineHeight: 38,
    fontSize: FontSize.h4Bold_size,
    alignSelf: "stretch",
  },
  enjoyAllFeatures: {
    fontWeight: "500",
    fontFamily: FontFamily.bodyXSmallMedium,
    marginTop: 4,
    letterSpacing: 0,
    lineHeight: 22,
    fontSize: FontSize.bodyMediumMedium_size,
    textAlign: "left",
    color: Color.skyWhite,
    alignSelf: "stretch",
  },
  autoLayoutVertical1: {
    marginLeft: 24,
    flex: 1,
    justifyContent: "center",
  },
  iconlyregularoutlinearrow: {
    marginLeft: 24,
  },
  touchableopacity: {
    backgroundColor: Color.gradientsGradientBlue,
    padding: Padding.p_base,
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  iconlyregularoutlinearrow1: {
    display: "none",
  },
  title: {
    color: Color.greyscale500,
    lineHeight: 22,
    fontSize: FontSize.bodyMediumMedium_size,
    fontWeight: "600",
    marginLeft: 16,
  },
  darktrueComponentdividerIcon: {
    maxWidth: "100%",
    maxHeight: "100%",
    marginLeft: 16,
  },
  elementssectionDividerDark: {
    alignItems: "center",
  },
  autoLayoutHorizontal2: {
    backgroundColor: Color.transparentPurple,
  },
  settings: {
    color: Color.skyWhite,
  },
  elementssettingsDarktrue1: {
    marginTop: 24,
    alignItems: "center",
  },
  autoLayoutHorizontal3: {
    backgroundColor: Color.transparentGreen,
  },
  autoLayoutHorizontal6: {
    backgroundColor: Color.transparentBlue,
  },
  iconlyregularoutlinearrow7: {
    display: "none",
  },
  autoLayoutHorizontal9: {
    backgroundColor: Color.transparentBrown,
  },
  autoLayoutHorizontal11: {
    backgroundColor: Color.transparentRed,
  },
  settings7: {
    color: Color.alertsStatusError,
  },
  autoLayoutVertical2: {
    marginTop: 24,
    alignItems: "center",
    marginLeft: "-5%",
  },
  elementssettingsDarktrue: {
    marginTop: 24,
    alignSelf: "stretch",
  },
  box: {
    borderRadius: 15,
  },
  autoLayoutVertical: {
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: Padding.p_xs,
  },
  text: {
    marginTop: -13,
    left: 23,
    fontSize: FontSize.bodyLargeBold_size,
    lineHeight: 26,
    fontFamily: FontFamily.bodyMediumSemibold,
    fontWeight: "600",
    letterSpacing: 0,
    textAlign: "left",
    color: Color.skyWhite,
  },
  darkSettings: {
    //backgroundColor: Color.darkDarkbg,
    height: 790,
    width: "100%",
  },
});

export default DarkSettings;
