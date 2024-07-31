import * as React from "react";
import {
  Image,
  StyleSheet,
  Pressable,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";
import { useTranslation } from 'react-i18next';
import { useTheme } from "../context/ThemeContext";

const DarkProfileFullPage = () => {
  const navigation = useNavigation();
  const { t } = useTranslation();  
  const { theme, toggleTheme, isDarkMode } = useTheme();
  return (
    <View style={[styles.darkProfileFullPage, { backgroundColor: theme.background }]}>
      <View
        style={[
          styles.navbardefaultDarktrueCom,
          styles.autoLayoutVertical6SpaceBlock,
        ]}
      >
        <View style={styles.autoLayoutHorizontal}>
          <Image
            style={[styles.typelogoDefaultComponentl, styles.gobackLayout]}
            resizeMode="contain"
            source={require("../assets/typelogo-default-componentlogo6.png")}
          />
        </View>
        <Text style={[styles.titleSection, styles.textTypo, { color: theme.text }]}>Profile</Text>
        <TouchableOpacity
          style={[styles.autoLayoutHorizontal1, styles.gobackLayout]}
          activeOpacity={0.0}
          onPress={() => navigation.navigate("DarkSettings")}
        >
          <Image
            style={styles.iconLayout1}
            resizeMode="cover"
            source={isDarkMode ? require("../assets/auto-layout-horizontal3.png") : require("../assets/blackSetting.png")}
          />
        </TouchableOpacity>
      </View>
    <ScrollView>
    <View style={styles.darkProfileFullPage}>
      <View
        style={[styles.autoLayoutVertical, styles.autoLayoutVerticalPosition]}
      >
        <View style={styles.autoLayoutVertical1}>
          <View style={styles.elementscreatorProfileDark}>
            <View style={styles.autoLayoutHorizontal2}>
              <View style={styles.typedefaultComponentavatar}>
                <ImageBackground
                  style={[styles.ellipseIcon, styles.ellipseIconPosition]}
                  resizeMode="contain"
                  source={require("../assets/ellipse1.png")}
                />
                <Image
                  style={[styles.ellipseIcon1, styles.iconLayout]}
                  resizeMode="cover"
                  source={require("../assets/ellipse2.png")}
                />
              </View>
              <View
                style={[
                  styles.autoLayoutVertical2,
                  styles.autoLayoutVertical2SpaceBlock,
                ]}
              >
                <Text style={[styles.name, styles.nameFlexBox, { color: theme.text }]}>
                  andrew.art 
                {/* DontKnow */}
                </Text>
                <Text style={[styles.description, styles.horizontalLayout, { color: theme.text }]}>
                  Andrew Art
                {/* DontKnow */}
                </Text>
              </View>
              <Pressable
                style={[
                  styles.sizemediumTypeborderIcon,
                  styles.autoLayoutVertical2SpaceBlock,
                ]}
                onPress={() => navigation.navigate("DarkEditProfile")}
              >
                <Text style={[styles.chips, styles.chipsTypo]}>
                  {t('Edit Profile')}
                </Text>
              </Pressable>
            </View>
           
            <View style={[styles.autoLayoutHorizontal33, styles.autoFlexBox]}>
              <View style={styles.autoLayoutVertical3}>
            <TouchableOpacity onPress={()=>navigation.navigate("DarkProfileFullPage")} activeOpacity={0.0}>
                <Text style={[styles.text, styles.textTypo1]}>156</Text>
                <Text style={[styles.artwork1, styles.homeTypo1]}>{t('Artwork')}</Text>
              </TouchableOpacity>
              </View>
              <Image
                style={styles.darktrueComponentdividerIcon}
                resizeMode="cover"
                source={require("../assets/darktrue-componentdivider6.png")}
              />
               <TouchableOpacity onPress={()=>navigation.navigate("DarkFollowers")} activeOpacity={0.0} style={styles.autoLayoutVertical4}>
              <View style={styles.autoLayoutVertical4}>
                <Text style={[styles.text, styles.textTypo, , { color: theme.text }]}>9,675</Text>
                <Text style={[styles.artwork, styles.homeTypo1, { color: theme.text }]}>
                  {t('Followers')}
                </Text>
              </View>
              </TouchableOpacity>
              <Image
                style={styles.darktrueComponentdividerIcon}
                resizeMode="cover"
                source={require("../assets/darktrue-componentdivider7.png")}
              />
              <TouchableOpacity onPress={()=>navigation.navigate("DarkFollowing")} activeOpacity={0.0} style={styles.autoLayoutVertical4}>
              <View style={styles.autoLayoutVertical4}>
                <Text style={[styles.text, styles.textTypo , { color: theme.text }]}>124</Text>
                <Text style={[styles.artwork, styles.homeTypo1, { color: theme.text }]}>
                  {t('Following')}
                </Text>
              </View>
              </TouchableOpacity>
            </View>
           
          </View>
          <View style={styles.autoLayoutHorizontal4}>
            <Pressable style={styles.autoLayoutVertical3}>
              <Text style={[styles.horizontalTab1, styles.text3Typo]}>
                {t('Created')}
              </Text>
              <View
                style={[styles.autoLayoutVertical6, styles.rectangleSpaceBlock]}
              >
                <View style={styles.rectangle1} />
              </View>
            </Pressable>
            <Pressable style={styles.autoLayoutVertical3}>
              <Text style={[styles.horizontalTab1, styles.text3Typo]}>
                {t('Liked')}
              </Text>
              <View
                style={[styles.autoLayoutVertical6, styles.rectangleSpaceBlock]}
              >
                <View style={styles.rectangle1} />
              </View>
            </Pressable>
            <Pressable style={styles.autoLayoutVertical3}>
              <Text style={[styles.horizontalTab1, styles.text3Typo]}>
                {t('Saved')}
              </Text>
              <View
                style={[styles.autoLayoutVertical6, styles.rectangleSpaceBlock]}
              >
                <View style={styles.rectangle1} />
              </View>
            </Pressable>
          </View>
          <ScrollView
            style={styles.autoLayoutHorizontal5}
            horizontal={false}
            showsVerticalScrollIndicator={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.autoLayoutHorizontal5Content}
          >
            <View style={styles.autoLayoutVertical88}>
              <Image
                style={[styles.artworkRatio11ArtworkS, styles.artworkLayout1]}
                resizeMode="contain"
                source={require("../assets/artwork-ratio1--1-artwork-sizemedium-componentartwork-ratio--size.png")}
              />
              <Image
                style={[styles.artworkRatio34ArtworkS, styles.artworkLayout]}
                resizeMode="contain"
                source={require("../assets/artwork-ratio3--4-artwork-sizemedium-componentartwork-ratio--size.png")}
              />
              <Image
                style={[styles.artworkRatio23ArtworkS, styles.artworkLayout]}
                resizeMode="contain"
                source={require("../assets/artwork-ratio2--3-artwork-sizemedium-componentartwork-ratio--size.png")}
              />
              <Image
                style={[styles.artworkRatio23ArtworkS, styles.artworkLayout]}
                resizeMode="contain"
                source={require("../assets/artwork-ratio2--3-artwork-sizemedium-componentartwork-ratio--size1.png")}
              />
              <Image
                style={[styles.artworkRatio43ArtworkS, styles.artworkLayout]}
                resizeMode="contain"
                source={require("../assets/artwork-ratio4--3-artwork-sizemedium-componentartwork-ratio--size.png")}
              />
              <Image
                style={[styles.artworkRatio34ArtworkS, styles.artworkLayout]}
                resizeMode="contain"
                source={require("../assets/artwork-ratio3--4-artwork-sizemedium-componentartwork-ratio--size1.png")}
              />
              <Image
                style={[styles.artworkRatio11ArtworkS1, styles.artworkLayout]}
                resizeMode="cover"
                source={require("../assets/artwork-ratio1--1-artwork-sizemedium-componentartwork-ratio--size1.png")}
              />
            </View>
            <View style={styles.autoLayoutVertical9}>
              <Image
                style={[styles.artworkRatio11ArtworkS, styles.artworkLayout1]}
                resizeMode="contain"
                source={require("../assets/artwork-ratio1--1-artwork-sizemedium-componentartwork-ratio--size2.png")}
              />
              <Image
                style={[styles.artworkRatio23ArtworkS, styles.artworkLayout]}
                resizeMode="contain"
                source={require("../assets/artwork-ratio2--3-artwork-sizemedium-componentartwork-ratio--size2.png")}
              />
              <Image
                style={[styles.artworkRatio23ArtworkS, styles.artworkLayout]}
                resizeMode="contain"
                source={require("../assets/artwork-ratio2--3-artwork-sizemedium-componentartwork-ratio--size3.png")}
              />
              <Image
                style={[styles.artworkRatio23ArtworkS, styles.artworkLayout]}
                resizeMode="contain"
                source={require("../assets/artwork-ratio2--3-artwork-sizemedium-componentartwork-ratio--size4.png")}
              />
              <Image
                style={[styles.artworkRatio11ArtworkS1, styles.artworkLayout]}
                resizeMode="contain"
                source={require("../assets/artwork-ratio1--1-artwork-sizemedium-componentartwork-ratio--size3.png")}
              />
              <Image
                style={[styles.artworkRatio11ArtworkS1, styles.artworkLayout]}
                resizeMode="cover"
                source={require("../assets/artwork-ratio1--1-artwork-sizemedium-componentartwork-ratio--size4.png")}
              />
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
    </ScrollView>
    <View
      style={[
        styles.activeMenudiscoverDarktru, { backgroundColor: theme.background },
        styles.autoLayoutVerticalPosition,
      ]}
    >
      <View
        style={[
          styles.autoLayoutHorizontal3,
          styles.autoLayoutHorizontal3FlexBox,
        ]}
      >
        <TouchableOpacity
          style={styles.autoLayoutVertical7}
          activeOpacity={0.0}
          onPress={() => navigation.navigate("HomeScreen")}
        >
          <Image
            style={styles.iconlyregularoutlinearrowLayout}
            resizeMode="cover"
            source={require("../assets/iconlycurvedoutlinehome.png")}
          />
          <Text style={[styles.home, styles.homeTypo]}>{t('Home')}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.autoLayoutVertical8}
          activeOpacity={0.0}
          onPress={() => navigation.navigate("DarkDiscover")}
        >
          <Image
            style={styles.iconlyregularoutlinearrowLayout}
            resizeMode="cover"
            source={require("../assets/iconlyregularoutlinediscovery.png")}
          />
          <Text style={[styles.discover, styles.homeTypo]}>{t('Discover')}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.autoLayoutVertical8}
          activeOpacity={0.0}
          onPress={() => navigation.navigate("DarkAIToolbox")}
        >
          <Image
            style={styles.iconlyregularoutlinearrowLayout}
            resizeMode="cover"
            source={require("../assets/iconlycurvedlightcategory.png")}
          />
          <Text style={[styles.discover, styles.homeTypo]}>{t('AI Toolbox')}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.autoLayoutVertical8}
          activeOpacity={0.0}
          onPress={() => navigation.navigate("DarkProfileFullPage")}
        >
          <Image
            style={styles.iconlyregularoutlinearrowLayout}
            resizeMode="cover"
            source={isDarkMode ? require("../assets/iconlyregularboldprofile.png") : require("../assets/Profile.png")}
          />
          <Text style={[styles.discover, styles.homeTypo, { color: theme.icontext }]}>{t('Profile')}</Text>
        </TouchableOpacity>
      </View>
      
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  activeMenudiscoverDarktru: {
    bottom: "0%",
    paddingTop: Padding.p_5xs,
    alignItems: "center",
    paddingBottom: Padding.p_5xs,
  },
  autoLayoutHorizontal5Content: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  autoLayoutVerticalPosition: {
    left: 0,
    right: 0,
    position: "absolute",
  },
  autoLayoutVertical6SpaceBlock: {
    paddingHorizontal: 0,
    alignItems: "center",
  },
  gobackLayout: {
    height: 28,
    width: 28,
  },
  iconLayout1: {
    height: "100%",
    width: "100%",
    marginLeft: "-85%"
  },
  textTypo: {
    textAlign: "center",
    fontFamily: FontFamily.bodyXSmallBold,
    fontWeight: "700",
    lineHeight: 38,
    fontSize: FontSize.h4Bold_size,
  },
  textTypo1: {
    color: Color.primary900,
    textAlign: "center",
    fontFamily: FontFamily.bodyXSmallBold,
    fontWeight: "700",
    lineHeight: 38,
    fontSize: FontSize.h4Bold_size,
  },
  ellipseIconPosition: {
    bottom: "0%",
    right: "0%",
    position: "absolute",
  },
  iconLayout: {
    maxWidth: "100%",
    overflow: "hidden",
  },
  autoLayoutVertical2SpaceBlock: {
    marginLeft: 20,
    justifyContent: "center",
  },
  nameFlexBox: {
    textAlign: "left",
    color: Color.skyWhite,
  },
  horizontalLayout: {
    lineHeight: 29,
    fontSize: FontSize.bodyXLargeBold_size,
    alignSelf: "stretch",
  },
  chipsTypo: {
    color: Color.primary900,
    fontFamily: FontFamily.bodyMediumSemibold,
    fontWeight: "600",
    letterSpacing: 0,
    textAlign: "center",
  },
  autoFlexBox: {
    justifyContent: "center",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  homeTypo1: {
    fontFamily: FontFamily.bodyXSmallMedium,
    fontWeight: "500",
  },
  rectangleSpaceBlock: {
    marginTop: 12,
    alignSelf: "stretch",
  },
  text3Typo: {
    fontFamily: FontFamily.bodyMediumSemibold,
    fontWeight: "600",
    letterSpacing: 0,
  },
  artworkLayout1: {
    height: 183,
    borderRadius: Border.br_xs,
  },
  artworkLayout: {
    marginTop: 16,
    maxWidth: "100%",
    alignSelf: "stretch",
    overflow: "hidden",
    width: "100%",
  },
  homeTypo: {
    marginTop: 2,
    lineHeight: 16,
    fontSize: FontSize.bodyXSmallMedium_size,
    letterSpacing: 0,
    textAlign: "center",
    alignSelf: "stretch",
    fontWeight: "bold",
  },
  discover: {
    fontWeight: "500",
    fontFamily: FontFamily.bodyXSmallMedium,
    color: Color.greyscale500,
  },
  groupIconPosition: {
    top: "50%",
    position: "absolute",
  },
  typelogoDefaultComponentl: {
    borderRadius: Border.br_341xl,
    marginLeft: "85%",
  },
  icon: {
    display: "none",
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
    marginLeft: 16,
    flex: 1,
  },
  autoLayoutHorizontal1: {
    //marginLeft: 61,
  },
  navbardefaultDarktrueCom: {
    flexDirection: "row",
    alignItems: "center",
    height: 48,
    paddingHorizontal: 16,
  },
  ellipseIcon: {
    top: "0%",
    left: "0%",
    height: "100%",
    width: "100%",
  },
  ellipseIcon1: {
    height: "25%",
    width: "25%",
    top: "75%",
    left: "75%",
    maxHeight: "100%",
    bottom: "0%",
    right: "0%",
    position: "absolute",
    display: "none",
  },
  typedefaultComponentavatar: {
    width: 80,
    height: 80,
  },
  name: {
    fontFamily: FontFamily.bodyXSmallBold,
    fontWeight: "700",
    lineHeight: 38,
    fontSize: FontSize.h4Bold_size,
    textAlign: "left",
    alignSelf: "stretch",
  },
  description: {
    fontFamily: FontFamily.bodySmallRegular,
    marginTop: 6,
    letterSpacing: 0,
    textAlign: "left",
    color: Color.skyWhite,
  },
  autoLayoutVertical2: {
    alignSelf: "stretch",
    flex: 1,
  },
  chips: {
    lineHeight: 26,
    fontSize: FontSize.bodyLargeBold_size,
  },
  sizemediumTypeborderIcon: {
    borderStyle: "solid",
    borderColor: Color.primary900,
    borderWidth: 2,
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_5xs,
    borderRadius: Border.br_81xl,
    alignItems: "center",
    flexDirection: "row",
  },
  autoLayoutHorizontal2: {
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  text: {
    textAlign: "center",
    alignSelf: "stretch",
  },
  artwork: {
    color: Color.greyscale300,
    lineHeight: 26,
    fontSize: FontSize.bodyLargeBold_size,
    letterSpacing: 0,
    textAlign: "center",
    alignSelf: "stretch",
  },
  artwork1: {
    color: Color.primary900,
    lineHeight: 26,
    fontSize: FontSize.bodyLargeBold_size,
    letterSpacing: 0,
    textAlign: "center",
    alignSelf: "stretch",
  },
  autoLayoutVertical3: {
    alignItems: "center",
    flex: 1,
  },
  darktrueComponentdividerIcon: {
    width: 0,
    marginLeft: 8,
    maxHeight: "100%",
    alignSelf: "stretch",
  },
  autoLayoutVertical4: {
    marginLeft: 8,
    alignItems: "center",
    flex: 1,
  },
  autoLayoutHorizontal3: {
    justifyContent: "center",
    paddingHorizontal: 15,
    paddingVertical: 0,
    alignItems: "center",
  },
  autoLayoutHorizontal33: {
    marginTop: 24,
  },
  autoLayoutHorizontal3FlexBox: {
    flexDirection: "row",
    height: 48,
    alignItems: "center",
    alignSelf: "stretch",
  },
  autoLayoutVertical7: {
    alignItems: "center",
    flex: 1,
  },
  iconlyregularoutlinearrowLayout: {
    width: 24,
    height: 24,
  },
  elementscreatorProfileDark: {
    alignSelf: "stretch",
  },
  horizontalTab: {
    lineHeight: 29,
    fontSize: FontSize.bodyXLargeBold_size,
    alignSelf: "stretch",
  },
  rectangle: {
    backgroundColor: Color.primary900,
    height: 4,
    borderRadius: Border.br_81xl,
  },
  horizontalTab1: {
    color: Color.colorDimgray,
    lineHeight: 29,
    fontSize: FontSize.bodyXLargeBold_size,
    alignSelf: "stretch",
    textAlign: "center",
  },
  rectangle1: {
    backgroundColor: Color.colorDarkslategray_200,
    height: 2,
    borderRadius: Border.br_81xl,
    alignSelf: "stretch",
  },
  autoLayoutVertical6: {
    justifyContent: "flex-end",
    paddingVertical: Padding.p_12xs,
    paddingHorizontal: 0,
    alignItems: "center",
  },
  autoLayoutHorizontal4: {
    marginTop: 24,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  artworkRatio11ArtworkS: {
    maxWidth: "100%",
    overflow: "hidden",
    alignSelf: "stretch",
    width: "100%",
  },
  artworkRatio34ArtworkS: {
    height: 244,
    borderRadius: Border.br_xs,
    marginTop: 16,
  },
  artworkRatio23ArtworkS: {
    height: 275,
    borderRadius: Border.br_xs,
    marginTop: 16,
  },
  artworkRatio43ArtworkS: {
    borderRadius: Border.br_3xs,
    height: 137,
  },
  artworkRatio11ArtworkS1: {
    height: 183,
    borderRadius: Border.br_xs,
  },
  autoLayoutVertical8: {
    marginLeft: 19,
    alignItems: "center",
    flex: 1,
  },
  autoLayoutVertical88: {
    flex: 1,
  },
  autoLayoutVertical9: {
    marginLeft: 16,
    flex: 1,
  },
  autoLayoutHorizontal5: {
    marginTop: 24,
    alignSelf: "stretch",
    flex: 1,
  },
  autoLayoutVertical1: {
    marginTop: 24,
    alignItems: "center",
    alignSelf: "stretch",
  },
  autoLayoutVertical: {
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: Padding.p_xs,
  },
  iconlycurvedoutlinehome: {
    width: 24,
    height: 24,
  },
  home: {
    color: Color.greyscale500,
    fontFamily: FontFamily.bodyXSmallMedium,
    fontWeight: "500",
  },
  autoLayoutVertical11: {
    marginLeft: 19,
    alignItems: "center",
    flex: 1,
  },
  account: {
    color: Color.greyscale50,
    fontFamily: FontFamily.bodyXSmallBold,
    fontWeight: "700",
  },
  autoLayoutHorizontal6: {
    paddingHorizontal: Padding.p_13xl,
    paddingVertical: 0,
    alignItems: "center",
    height: 48,
  },
  homeIndicatorIcon: {
    height: 34,
    alignSelf: "stretch",
    width: "100%",
    maxWidth: "100%",
  },
  activeMenuprofileDarktrue: {
    bottom: 0,
    backgroundColor: Color.darkDarkbg,
    paddingTop: Padding.p_5xs,
    alignItems: "center",
  },
  text3: {
    marginTop: -13,
    left: 23,
    fontFamily: FontFamily.bodyMediumSemibold,
    fontWeight: "600",
    letterSpacing: 0,
    lineHeight: 26,
    fontSize: FontSize.bodyLargeBold_size,
    textAlign: "left",
    color: Color.skyWhite,
  },
  typestatusBarThemedarkC: {
    top: 0,
    height: 44,
  },
  darkProfileFullPage: {
    height: 2050,
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default DarkProfileFullPage;
