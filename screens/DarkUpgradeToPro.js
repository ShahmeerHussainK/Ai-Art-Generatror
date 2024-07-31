import * as React from "react";
import {
  Image,
  StyleSheet,
  View,
  Pressable,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";
import { useTranslation } from 'react-i18next';
import { useTheme } from "../context/ThemeContext";

const DarkUpgradeToPro = () => {
  const { t } = useTranslation();
  const navigation = useNavigation();
  const { theme, toggleTheme, isDarkMode } = useTheme();

  return (
  <View style={[styles.darkUpgradeToPro, { backgroundColor: theme.background }]}>
      <ScrollView>
    <View style={styles.darkUpgradeToPro}>
      <Image
        style={[styles.frameIcon, styles.frameIconPosition]}
        resizeMode="cover"
        source={require("../assets/frame14.png")}
      />
      <LinearGradient
        style={styles.rectangle}
        locations={[0, 0.07, 0.15, 0.31, 0.47]}
        colors={[
          "rgba(24, 26, 32, 0)",
          "rgba(24, 26, 32, 0.3)",
          "rgba(24, 26, 32, 0.8)",
          "rgba(24, 26, 32, 0.95)",
          "#181a20",
        ]}
        useAngle={true}
        angle={180}
      />
    <View style={[styles.navbardefaultDarktrueCom, styles.autoFlexBox]}>
          <Pressable
            style={styles.autoLayoutHorizontal}
            onPress={() => navigation.goBack()}
          >
            <Image
              style={[styles.typelogoDefaultComponentl, styles.gobackLayout]}
              resizeMode="cover"
              source={require("../assets/typelogo-default-componentlogo4.png")}
            />
            <Pressable
              style={[styles.goback, styles.gobackLayout]}
              onPress={() => navigation.goBack()}
            >
              <Image
                style={styles.icon}
                resizeMode="cover"
                source={require("../assets/goback.png")}
              />
            </Pressable>
          </Pressable>
      </View>
      <View style={styles.autoLayoutVertical}>
        
        <View style={styles.elementsupgradeToProBenefi}>
          <View
            style={[
              styles.autoLayoutVertical1,
              styles.autoLayoutVertical1FlexBox,
            ]}
          >
            <Text style={[styles.upgradeToPro, styles.buttonFlexBox]}>
              {t('UPGRADE TO PRO')}
            </Text>
            <Text
              style={[styles.enjoyAllFeatures, styles.removeAdsTypo]}
            >{t('`Enjoy all features & benefits without any restrictions`')}</Text>
          </View>
          <View style={[styles.autoLayoutVertical2,{ backgroundColor: theme.background }]}>
            <View style={styles.autoFlexBox}>
              <Image
                style={styles.iconlycurvedoutlinetickSqu}
                resizeMode="cover"
                source={isDarkMode ? require("../assets/iconlycurvedoutlinetick-square.png") : require("../assets/blackTick.png")}
              />
              <Text style={[styles.removeAds, styles.textFlexBox, { color: theme.text }]}>
                {t('Remove Ads')}
              </Text>
            </View>
            <View style={[styles.autoLayoutHorizontal3, styles.autoFlexBox]}>
              <Image
                style={styles.iconlycurvedoutlinetickSqu}
                resizeMode="cover"
                source={isDarkMode ? require("../assets/iconlycurvedoutlinetick-square.png") : require("../assets/blackTick.png")}
              />
              <Text style={[styles.removeAds, styles.textFlexBox, { color: theme.text }]}>
                {t('Unlimited Artwork Creation')}
              </Text>
            </View>
            <View style={[styles.autoLayoutHorizontal3, styles.autoFlexBox]}>
              <Image
                style={styles.iconlycurvedoutlinetickSqu}
                resizeMode="cover"
                source={isDarkMode ? require("../assets/iconlycurvedoutlinetick-square.png") : require("../assets/blackTick.png")}
              />
              <Text style={[styles.removeAds, styles.textFlexBox, { color: theme.text }]}>
                {t('Faster Processing Times')}
              </Text>
            </View>
            <View style={[styles.autoLayoutHorizontal3, styles.autoFlexBox]}>
              <Image
                style={styles.iconlycurvedoutlinetickSqu}
                resizeMode="cover"
                source={isDarkMode ? require("../assets/iconlycurvedoutlinetick-square.png") : require("../assets/blackTick.png")}
              />
              <Text style={[styles.removeAds, styles.textFlexBox, { color: theme.text }]}>
                {t('Remove Watermarks')}
              </Text>
            </View>
            <View style={[styles.autoLayoutHorizontal3, styles.autoFlexBox]}>
              <Image
                style={styles.iconlycurvedoutlinetickSqu}
                resizeMode="cover"
                source={isDarkMode ? require("../assets/iconlycurvedoutlinetick-square.png") : require("../assets/blackTick.png")}
              />
              <Text style={[styles.removeAds, styles.textFlexBox, { color: theme.text }]}>
                {t('Download High Resolution Artwork')}
              </Text>
            </View>
            <View style={[styles.autoLayoutHorizontal3, styles.autoFlexBox]}>
              <Image
                style={styles.iconlycurvedoutlinetickSqu}
                resizeMode="cover"
                source={isDarkMode ? require("../assets/iconlycurvedoutlinetick-square.png") : require("../assets/blackTick.png")}
              />
              <Text style={[styles.removeAds, styles.textFlexBox, { color: theme.text }]}>
                {t('Access to Advanced AI Models')}
              </Text>
            </View>
            <View style={[styles.autoLayoutHorizontal3, styles.autoFlexBox]}>
              <Image
                style={styles.iconlycurvedoutlinetickSqu}
                resizeMode="cover"
                source={isDarkMode ? require("../assets/iconlycurvedoutlinetick-square.png") : require("../assets/blackTick.png")}
              />
              <Text style={[styles.removeAds, styles.textFlexBox, { color: theme.text }]}>
                {t('Premium Styles')}
              </Text>
            </View>
            <View style={[styles.autoLayoutHorizontal3, styles.autoFlexBox]}>
              <Image
                style={styles.iconlycurvedoutlinetickSqu}
                resizeMode="cover"
                source={isDarkMode ? require("../assets/iconlycurvedoutlinetick-square.png") : require("../assets/blackTick.png")}
              />
              <Text style={[styles.removeAds, styles.textFlexBox, { color: theme.text }]}>
                {t('More Aspect Ratio')}
              </Text>
            </View>
            <View style={[styles.autoLayoutHorizontal3, styles.autoFlexBox]}>
              <Image
                style={styles.iconlycurvedoutlinetickSqu}
                resizeMode="cover"
                source={isDarkMode ? require("../assets/iconlycurvedoutlinetick-square.png") : require("../assets/blackTick.png")}
              />
              <Text style={[styles.removeAds, styles.textFlexBox, { color: theme.text }]}>
                {t('Priority Queue')}
              </Text>
            </View>
            <View style={[styles.autoLayoutHorizontal3, styles.autoFlexBox]}>
              <Image
                style={styles.iconlycurvedoutlinetickSqu}
                resizeMode="cover"
                source={isDarkMode ? require("../assets/iconlycurvedoutlinetick-square.png") : require("../assets/blackTick.png")}
              />
              <Text style={[styles.removeAds, styles.textFlexBox, { color: theme.text }]}>
                {t('Priority Customer Support')}
              </Text>
            </View>
            <View style={[styles.autoLayoutHorizontal3, styles.autoFlexBox]}>
              <Image
                style={styles.iconlycurvedoutlinetickSqu}
                resizeMode="cover"
                source={isDarkMode ? require("../assets/iconlycurvedoutlinetick-square.png") : require("../assets/blackTick.png")}
              />
              <Text style={[styles.removeAds, styles.textFlexBox, { color: theme.text }]}>
                {t('Priority Access to New Features')}
              </Text>
            </View>
            <View style={[styles.autoLayoutHorizontal3, styles.autoFlexBox]}>
              <Image
                style={styles.iconlycurvedoutlinetickSqu}
                resizeMode="cover"
                source={isDarkMode ? require("../assets/iconlycurvedoutlinetick-square.png") : require("../assets/blackTick.png")}
              />
              <Text style={[styles.removeAds, styles.textFlexBox, { color: theme.text }]}>
                {t('Commercial Use Rights')}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
    </ScrollView>
      <View style={[styles.buttonprimaryDarktrueCom,{ backgroundColor: theme.background }]}>
        <TouchableOpacity
          style={[
            styles.buttonpillTypepillIconf,
            styles.autoLayoutVertical1FlexBox,
          ]}
          activeOpacity={0.0}
          onPress={() => navigation.navigate("UpgradeToProChoosePlan")}
        >
          <Text style={[styles.button, styles.textLayout]}>{t('Upgrade to PRO')}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameIconPosition: {
    left: 0,
    right: 0,
    top: 0,
    position: "absolute",
  },
  autoFlexBox: {
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  gobackLayout: {
    height: 28,
    width: 28,
  },
  buttonFlexBox: {
    textAlign: "center",
    color: Color.skyWhite,
  },
  autoLayoutVertical1FlexBox: {
    backgroundColor: Color.primary900,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
  },
  removeAdsTypo: {
    fontFamily: FontFamily.bodyXSmallMedium,
    fontWeight: "500",
  },
  textFlexBox: {
    textAlign: "left",
    color: Color.skyWhite,
  },
  textLayout: {
    letterSpacing: 0,
    fontSize: FontSize.bodyLargeBold_size,
  },
  groupIconPosition: {
    top: "50%",
    position: "absolute",
  },
  frameIcon: {
    bottom: 502,
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  rectangle: {
    backgroundColor: Color.gradientsGradientBlue,
    bottom: 0,
    left: 0,
    right: 0,
    top: 0,
    position: "absolute",
  },
  typelogoDefaultComponentl: {
    borderRadius: Border.br_341xl,
    display: "none",
  },
  icon: {
    height: "100%",
    width: "100%",
    bottom: "35%",
    marginLeft: "20%",
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
    fontFamily: FontFamily.bodyXSmallBold,
    fontWeight: "700",
    color: Color.skyWhite,
    lineHeight: 38,
    fontSize: FontSize.h4Bold_size,
    display: "none",
    flex: 1,
  },
  navbardefaultDarktrueCom: {
    height: 48,
    justifyContent: "space-between",
    paddingHorizontal: 0,
    paddingVertical: Padding.p_xs,
  },
  upgradeToPro: {
    fontFamily: FontFamily.bodyXSmallBold,
    fontWeight: "700",
    color: Color.skyWhite,
    lineHeight: 38,
    fontSize: FontSize.h4Bold_size,
    alignSelf: "stretch",
  },
  enjoyAllFeatures: {
    marginTop: 8,
    lineHeight: 26,
    letterSpacing: 0,
    fontSize: FontSize.bodyLargeBold_size,
    textAlign: "center",
    color: Color.skyWhite,
    alignSelf: "stretch",
  },
  autoLayoutVertical1: {
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_base,
  },
  iconlycurvedoutlinetickSqu: {
    width: 24,
    height: 24,
  },
  removeAds: {
    fontSize: FontSize.bodyXLargeBold_size,
    lineHeight: 29,
    marginLeft: 12,
    fontFamily: FontFamily.bodyXSmallMedium,
    fontWeight: "500",
    flex: 1,
  },
  autoLayoutHorizontal3: {
    marginTop: 16,
  },
  autoLayoutVertical2: {
    padding: Padding.p_xl,
    alignSelf: "stretch",
  },
  elementsupgradeToProBenefi: {
    borderRadius: Border.br_base,
    borderWidth: 1,
    marginTop: 24,
    justifyContent: "center",
    borderColor: Color.colorDarkslategray_200,
    borderStyle: "solid",
    alignSelf: "stretch",
    overflow: "hidden",
  },
  autoLayoutVertical: {
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_5xl,
    left: 0,
    right: 0,
    position: "absolute",
    marginTop: "5%",
  },
  button: {
    textAlign: "center",
    color: Color.skyWhite,
    fontFamily: FontFamily.bodyXSmallBold,
    fontWeight: "700",
    alignSelf: "stretch",
  },
  buttonpillTypepillIconf: {
    borderRadius: Border.br_81xl,
    padding: Padding.p_base,
  },
  buttonprimaryDarktrueCom: {
    paddingTop: Padding.p_5xl,
    paddingBottom: Padding.p_17xl,
    borderColor: Color.colorDarkslategray_200,
    borderStyle: "solid",
    paddingHorizontal: Padding.p_5xl,
    bottom: 0,
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
    fontWeight: "600",
    fontFamily: FontFamily.bodyMediumSemibold,
    textAlign: "left",
    color: Color.skyWhite,
    lineHeight: 26,
    letterSpacing: 0,
    fontSize: FontSize.bodyLargeBold_size,
  },
  typestatusBarThemedarkC: {
    height: 44,
  },
  darkUpgradeToPro: {
    height: 932,
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default DarkUpgradeToPro;
