import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Pressable,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";
import { useTranslation } from 'react-i18next';
import { useTheme } from "../context/ThemeContext";

const DarkSettingsAboutArtify = () => {
  const { t } = useTranslation();
  const navigation = useNavigation();
  const { theme, toggleTheme, isDarkMode } = useTheme();

  return (
    <View style={[styles.darkSettingsAboutArtify,{ backgroundColor: theme.background }]}>
      <View
        style={[
          styles.navbardefaultDarktrueCom,
          styles.elementssettingsFlexBox,
        ]}
      >
        <View style={styles.autoLayoutHorizontal}>
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
        </View>
        <Text style={[styles.titleSection, styles.artifyV785Typo, { color: theme.text }]}>
          {t('About Artify')}
        </Text>
        <Image
          style={[styles.autoLayoutHorizontal1, styles.gobackLayout]}
          resizeMode="cover"
          source={require("../assets/auto-layout-horizontal.png")}
        />
      </View>
    <ScrollView>
    <View style={styles.darkSettingsAboutArtify}>
      <View
        style={[styles.autoLayoutVertical, styles.autoLayoutVerticalPosition]}
      >
        <View style={styles.autoLayoutVertical1}>
          <Image
            style={styles.typelogoDefaultComponentl1}
            resizeMode="contain"
            source={require("../assets/typelogo-default-componentlogo5.png")}
          />
          <Text style={[styles.artifyV785, styles.artifyV785SpaceBlock, { color: theme.text }]}>
            {t('Artify v7.8.5')}
          </Text>
          <Image
            style={[
              styles.darktrueComponentdividerIcon,
              styles.artifyV785SpaceBlock,
            ]}
            resizeMode="cover"
            source={require("../assets/darktrue-componentdivider4.png")}
          />
            <TouchableOpacity
              style={[
                styles.elementssettingsListDarkt1,
                styles.artifyV785SpaceBlock,
              ]}
              activeOpacity={0.0}
              //onPress={() => navigation.navigate("ExplorePrompt")}
            >
              <Text style={[styles.settings, { color: theme.text }]}>{t('Terms of Use')}</Text>
              <Image
                style={styles.stylenoneThemedefaultSelLayout}
                resizeMode="cover"
                source={isDarkMode ? require("../assets/iconlyregularoutlinearrow--right-21.png") : require("../assets/blackRightarrow.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.elementssettingsListDarkt1,
                styles.artifyV785SpaceBlock,
              ]}
              activeOpacity={0.0}
              //onPress={() => navigation.navigate("ExplorePrompt")}
            >
              <Text style={[styles.settings, { color: theme.text }]}>{t('Feedback')}</Text>
              <Image
                style={styles.stylenoneThemedefaultSelLayout}
                resizeMode="cover"
                source={isDarkMode ? require("../assets/iconlyregularoutlinearrow--right-21.png") : require("../assets/blackRightarrow.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.elementssettingsListDarkt1,
                styles.artifyV785SpaceBlock,
              ]}
              activeOpacity={0.0}
              //onPress={() => navigation.navigate("ExplorePrompt")}
            >
              <Text style={[styles.settings, { color: theme.text }]}>{t('Rate us')}</Text>
              <Image
                style={styles.stylenoneThemedefaultSelLayout}
                resizeMode="cover"
                source={isDarkMode ? require("../assets/iconlyregularoutlinearrow--right-21.png") : require("../assets/blackRightarrow.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.elementssettingsListDarkt1,
                styles.artifyV785SpaceBlock,
              ]}
              activeOpacity={0.0}
              //onPress={() => navigation.navigate("ExplorePrompt")}
            >
              <Text style={[styles.settings, { color: theme.text }]}>{t('Visit Our Website')}</Text>
              <Image
                style={styles.stylenoneThemedefaultSelLayout}
                resizeMode="cover"
                source={isDarkMode ? require("../assets/iconlyregularoutlinearrow--right-21.png") : require("../assets/blackRightarrow.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.elementssettingsListDarkt1,styles.artifyV785SpaceBlock,]}
              activeOpacity={0.0}
              onPress={() => navigation.navigate("FollowUsOnSocialMedia")}
              >
              <Text style={[styles.settings, { color: theme.text }]}>{t('Follow us on Social Media')}</Text>
              <Image
                style={styles.stylenoneThemedefaultSelLayout}
                resizeMode="cover"
                source={isDarkMode ? require("../assets/iconlyregularoutlinearrow--right-21.png") : require("../assets/blackRightarrow.png")}
              />
            </TouchableOpacity>
        </View>
      </View>
    </View>
    </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  autoLayoutVerticalPosition: {
    left: 0,
    right: 0,
    position: "absolute",
  },
  elementssettingsFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  gobackLayout: {
    height: 28,
    width: 28,
    marginLeft: "5%"
  },
  artifyV785Typo: {
    textAlign: "center",
    color: Color.skyWhite,
    fontFamily: FontFamily.bodyXSmallBold,
    fontWeight: "700",
    lineHeight: 38,
    fontSize: FontSize.h4Bold_size,
  },
  artifyV785SpaceBlock: {
    marginTop: 28,
    alignSelf: "stretch",
  },
  stylenoneThemedefaultSelLayout: {
    width: 24,
    height: 24,
    marginLeft: 20,
  },
  typelogoDefaultComponentl: {
    borderRadius: Border.br_341xl,
    display: "none",
  },
  icon: {
    height: "100%",
    width: "100%",
    marginLeft: "85%"
  },
  autoLayoutHorizontal: {
    width: 28,
    alignItems: "center",
    flexDirection: "row",
  },
  titleSection: {
    marginLeft: 16,
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
  },
  typelogoDefaultComponentl1: {
    width: 140,
    height: 140,
    borderRadius: Border.br_981xl,
  },
  artifyV785: {
    textAlign: "center",
    color: Color.skyWhite,
    fontFamily: FontFamily.bodyXSmallBold,
    fontWeight: "700",
    lineHeight: 38,
    fontSize: FontSize.h4Bold_size,
  },
  darktrueComponentdividerIcon: {
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
    width: "100%",
  },
  settings: {
    fontSize: FontSize.h5Semibold_size,
    lineHeight: 32,
    textAlign: "left",
    fontFamily: FontFamily.bodyMediumSemibold,
    fontWeight: "600",
    color: Color.skyWhite,
    flex: 1,
  },
  elementssettingsListDarkt1: {
    alignItems: "center",
    flexDirection: "row",
  },
  autoLayoutVertical1: {
    marginTop: 24,
    alignItems: "center",
    alignSelf: "stretch",
  },
  autoLayoutVertical: {
    top: 44,
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: Padding.p_xs,
  },
  text: {
    marginTop: -13,
    left: 23,
    lineHeight: 26,
    letterSpacing: 0,
    fontSize: FontSize.bodyLargeBold_size,
    fontFamily: FontFamily.bodyMediumSemibold,
    fontWeight: "600",
    color: Color.skyWhite,
    textAlign: "left",
  },
  darkSettingsAboutArtify: {
    height: 750,
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default DarkSettingsAboutArtify;
