import * as React from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Padding, Border } from "../GlobalStyles";
import { useTheme } from "../context/ThemeContext";
import { useTranslation } from 'react-i18next';

const DarkAIToolbox = () => {
  const navigation = useNavigation();
  const { t } = useTranslation();
  const { theme, toggleTheme, isDarkMode } = useTheme();

  return (
    <View style={[styles.darkAiToolbox, { backgroundColor: theme.background }]}>
      <View style={[styles.navbardefaultDarktrueCom, styles.generatorFlexBox]}>
        <Image
          style={styles.autoLayout}
          resizeMode="contain"
          source={require("../assets/typelogo-default-componentlogo9.png")}
        />
        <Text style={[styles.titleSection,{ color: theme.text }]}>{t('AI Toolbox')}</Text>
      </View>
      <ScrollView>
        <View style={styles.darkAiToolbox}>
          <View style={[styles.autoLayoutVertical, styles.autoLayoutVerticalPosition]}>
            <View style={styles.autoLayoutVertical1}>
              <TouchableOpacity onPress={() => navigation.navigate("DarkAnimeGenerator")}>
                <View style={[styles.toolboxanimeGeneratorDark, styles.toolboxanimeGeneratorDarkSpaceBlock]}>
                  <Image
                    style={styles.artworkRatio11ArtworkS}
                    resizeMode="cover"
                    source={require("../assets/artwork-ratio1--1-artwork-sizemedium-componentartwork-ratio--size14.png")}
                  />
                  <View style={styles.autoLayoutVertical2}>
                    <Text style={[styles.aiAvatarGenerator, { color: theme.text }]}>{t('Anime Generator')}</Text>
                    <Text style={[styles.turnYourPhoto, styles.textFlexBox, { color: theme.text }]}>{t('Turn your words or prompt into an anime')}
                    </Text>
                  </View>
                  <Image
                    style={[styles.iconlyregularoutlinearrow, styles.iconlycurvedoutlinehomeLayout]}
                    resizeMode="cover"
                    source={isDarkMode ? require("../assets/iconlyregularoutlinearrow--right-21.png") : require("../assets/blackRightarrow.png")}
                  />
                </View>
              </TouchableOpacity>
              <Image
                style={[styles.darktrueComponentdividerIcon, styles.toolboxanimeGeneratorDarkSpaceBlock]}
                resizeMode="cover"
                source={require("../assets/darktrue-componentdivider4.png")}
              />
              <TouchableOpacity onPress={() => navigation.navigate("PhotoToAnimeUploadPhoto")} activeOpacity={0.2}>
                <View style={[styles.toolboxanimeGeneratorDark, styles.toolboxanimeGeneratorDarkSpaceBlock]}>
                  <Image
                    style={styles.artworkRatio11ArtworkS}
                    resizeMode="cover"
                    source={require("../assets/artwork-ratio1--1-artwork-sizemedium-componentartwork-ratio--size15.png")}
                  />
                  <View style={styles.autoLayoutVertical2}>
                    <Text style={[styles.aiAvatarGenerator, { color: theme.text }]}>{t('Photo to Anime')}</Text>
                    <Text style={[styles.turnYourPhoto, styles.textFlexBox, { color: theme.text }]}>
                      {t('Turn your photo or selfie into an anime')}
                    </Text>
                  </View>
                  <Image
                    style={[styles.iconlyregularoutlinearrow, styles.iconlycurvedoutlinehomeLayout]}
                    resizeMode="cover"
                    source={isDarkMode ? require("../assets/iconlyregularoutlinearrow--right-21.png") : require("../assets/blackRightarrow.png")}
                  />
                </View>
              </TouchableOpacity>
              <Image
                style={[styles.darktrueComponentdividerIcon, styles.toolboxanimeGeneratorDarkSpaceBlock]}
                resizeMode="cover"
                source={require("../assets/darktrue-componentdivider4.png")}
              />
              <TouchableOpacity onPress={() => navigation.navigate("RealisticArtUploadPhoto")} activeOpacity={0.2}>
                <View style={[styles.toolboxanimeGeneratorDark, styles.toolboxanimeGeneratorDarkSpaceBlock]}>
                  <Image
                    style={styles.artworkRatio11ArtworkS}
                    resizeMode="cover"
                    source={require("../assets/artwork-ratio1--1-artwork-sizemedium-componentartwork-ratio--size16.png")}
                  />
                  <View style={styles.autoLayoutVertical2}>
                    <Text style={[styles.aiAvatarGenerator, { color: theme.text }]}>{t('Realistic Art Generator')}</Text>
                    <Text style={[styles.turnYourPhoto, styles.textFlexBox, { color: theme.text }]}>
                      {t('Generate Realistic Art from an image')}
                    </Text>
                  </View>
                  <Image
                    style={[styles.iconlyregularoutlinearrow, styles.iconlycurvedoutlinehomeLayout]}
                    resizeMode="cover"
                    source={isDarkMode ? require("../assets/iconlyregularoutlinearrow--right-21.png") : require("../assets/blackRightarrow.png")}
                  />
                </View>
              </TouchableOpacity>
              <Image
                style={[styles.darktrueComponentdividerIcon, styles.toolboxanimeGeneratorDarkSpaceBlock]}
                resizeMode="cover"
                source={require("../assets/darktrue-componentdivider4.png")}
              />
              <TouchableOpacity onPress={() => navigation.navigate("DarkSketchToImagesUpload")} activeOpacity={0.2}>
                <View style={[styles.toolboxanimeGeneratorDark, styles.toolboxanimeGeneratorDarkSpaceBlock]}>
                  <Image
                    style={styles.artworkRatio11ArtworkS}
                    resizeMode="cover"
                    source={require("../assets/artwork-ratio1--1-artwork-sizemedium-componentartwork-ratio--size18.png")}
                  />
                  <View style={styles.autoLayoutVertical2}>
                    <Text style={[styles.aiAvatarGenerator, { color: theme.text }]}>{t('Sketch to Images')}</Text>
                    <Text style={[styles.turnYourPhoto, styles.textFlexBox, { color: theme.text }]}>
                      {t('Turn a simple drawing into a colorful image')}
                    </Text>
                  </View>
                  <Image
                    style={[styles.iconlyregularoutlinearrow, styles.iconlycurvedoutlinehomeLayout]}
                    resizeMode="cover"
                    source={isDarkMode ? require("../assets/iconlyregularoutlinearrow--right-21.png") : require("../assets/blackRightarrow.png")}
                  />
                </View>
              </TouchableOpacity>
              <Image
                style={[styles.darktrueComponentdividerIcon, styles.toolboxanimeGeneratorDarkSpaceBlock]}
                resizeMode="cover"
                source={require("../assets/darktrue-componentdivider4.png")}
              />
              <TouchableOpacity onPress={() => navigation.navigate("DarkImageToPaintingUpload")} activeOpacity={0.2}>
                <View style={[styles.toolboxanimeGeneratorDark, styles.toolboxanimeGeneratorDarkSpaceBlock]}>
                  <Image
                    style={styles.artworkRatio11ArtworkS}
                    resizeMode="cover"
                    source={require("../assets/artwork-ratio1--1-artwork-sizemedium-componentartwork-ratio--size19.png")}
                  />
                  <View style={styles.autoLayoutVertical2}>
                    <Text style={[styles.aiAvatarGenerator, { color: theme.text }]}>{t('Images to Painting')}</Text>
                    <Text style={[styles.turnYourPhoto, styles.textFlexBox, { color: theme.text }]}>
                      {t('Turn the image into an art painting with one click')}
                    </Text>
                  </View>
                  <Image
                    style={[styles.iconlyregularoutlinearrow, styles.iconlycurvedoutlinehomeLayout]}
                    resizeMode="cover"
                    source={isDarkMode ? require("../assets/iconlyregularoutlinearrow--right-21.png") : require("../assets/blackRightarrow.png")}
                  />
                </View>
              </TouchableOpacity>
              <Image
                style={[styles.darktrueComponentdividerIcon, styles.toolboxanimeGeneratorDarkSpaceBlock]}
                resizeMode="cover"
                source={require("../assets/darktrue-componentdivider4.png")}
              />
              <TouchableOpacity onPress={() => navigation.navigate("RecolorImagesUploadPhoto")} activeOpacity={0.2}>
                <View style={[styles.toolboxanimeGeneratorDark, styles.toolboxanimeGeneratorDarkSpaceBlock]}>
                  <Image
                    style={styles.artworkRatio11ArtworkS}
                    resizeMode="cover"
                    source={require("../assets/artwork-ratio1--1-artwork-sizemedium-componentartwork-ratio--size20.png")}
                  />
                  <View style={styles.autoLayoutVertical2}>
                    <Text style={[styles.aiAvatarGenerator, { color: theme.text }]}>{t('Recolor Images')}</Text>
                    <Text style={[styles.turnYourPhoto, styles.textFlexBox, { color: theme.text }]}>
                      {t('Change the color of the image with a variety of styles')}
                    </Text>
                  </View>
                  <Image
                    style={[styles.iconlyregularoutlinearrow, styles.iconlycurvedoutlinehomeLayout]}
                    resizeMode="cover"
                    source={isDarkMode ? require("../assets/iconlyregularoutlinearrow--right-21.png") : require("../assets/blackRightarrow.png")}
                  />
                </View>
              </TouchableOpacity>
              <Image
                style={[styles.darktrueComponentdividerIcon, styles.toolboxanimeGeneratorDarkSpaceBlock]}
                resizeMode="cover"
                source={require("../assets/darktrue-componentdivider4.png")}
              />
              <TouchableOpacity onPress={() => navigation.navigate("DarkLogoGenerator")} activeOpacity={0.2}>
                <View style={[styles.toolboxanimeGeneratorDark, styles.toolboxanimeGeneratorDarkSpaceBlock]}>
                  <Image
                    style={styles.artworkRatio11ArtworkS}
                    resizeMode="cover"
                    source={require("../assets/Artwork1.png")}
                  />
                  <View style={styles.autoLayoutVertical2}>
                    <Text style={[styles.aiAvatarGenerator, { color: theme.text }]}>{t('Logo Generator')}</Text>
                    <Text style={[styles.turnYourPhoto, styles.textFlexBox, { color: theme.text }]}>
                      {t('Generate a unique logo from a prompt')}
                    </Text>
                  </View>
                  <Image
                    style={[styles.iconlyregularoutlinearrow, styles.iconlycurvedoutlinehomeLayout]}
                    resizeMode="cover"
                    source={isDarkMode ? require("../assets/iconlyregularoutlinearrow--right-21.png") : require("../assets/blackRightarrow.png")}
                  />
                </View>
              </TouchableOpacity>
              
              <Image
                style={[
                  styles.darktrueComponentdividerIcon,
                  styles.toolboxanimeGeneratorDarkSpaceBlock,
                ]}
                resizeMode="cover"
                source={require("../assets/darktrue-componentdivider4.png")}
              />
              <TouchableOpacity onPress={() => navigation.navigate("DarkBatchArtGeneratorFill")} activeOpacity={0.2}>
                <View
                  style={[
                    styles.toolboxanimeGeneratorDark,
                    styles.toolboxanimeGeneratorDarkSpaceBlock,
                  ]}
                >
                  <Image
                    style={styles.artworkRatio11ArtworkS}
                    resizeMode="cover"
                    source={require("../assets/artwork-ratio1--1-artwork-sizemedium-componentartwork-ratio--size24.png")}
                  />
                  <View style={styles.autoLayoutVertical2}>
                    <Text style={[styles.aiAvatarGenerator, { color: theme.text }]}>{t('Batch Art Generator')} </Text>
                    <Text style={[styles.turnYourPhoto, styles.textFlexBox, { color: theme.text }]}>
                    {t('Generate batch of AI art with the amount you want')}
                    </Text>
                  </View>
                  <Image
                    style={[
                      styles.iconlyregularoutlinearrow,
                      styles.iconlycurvedoutlinehomeLayout,
                    ]}
                    resizeMode="cover"
                    source={isDarkMode ? require("../assets/iconlyregularoutlinearrow--right-21.png") : require("../assets/blackRightarrow.png")}
                  />
                </View>
              </TouchableOpacity>
              <Image
                style={[
                  styles.darktrueComponentdividerIcon,
                  styles.toolboxanimeGeneratorDarkSpaceBlock,
                ]}
                resizeMode="cover"
                source={require("../assets/darktrue-componentdivider4.png")}
              />
              <TouchableOpacity onPress={() => navigation.navigate("BackgroundRemovalPhotoUpload")} activeOpacity={0.2}>
                <View
                  style={[
                    styles.toolboxanimeGeneratorDark,
                    styles.toolboxanimeGeneratorDarkSpaceBlock,
                  ]}
                >
                  <Image
                    style={styles.artworkRatio11ArtworkS}
                    resizeMode="cover"
                    source={require("../assets/backgroundRemoval.png")}
                  />
                  <View style={styles.autoLayoutVertical2}>
                    <Text style={[styles.aiAvatarGenerator, { color: theme.text }]}>{t('Background Removal')}</Text>
                    <Text style={[styles.turnYourPhoto, styles.textFlexBox, { color: theme.text }]}>
                    {t('Remove backgound of your photo or selfie ')}
                    </Text>
                  </View>
                  <Image
                    style={[
                      styles.iconlyregularoutlinearrow,
                      styles.iconlycurvedoutlinehomeLayout,
                    ]}
                    resizeMode="cover"
                    source={isDarkMode ? require("../assets/iconlyregularoutlinearrow--right-21.png") : require("../assets/blackRightarrow.png")}
                  />
                </View>
              </TouchableOpacity>
              <Image
                style={[
                  styles.darktrueComponentdividerIcon,
                  styles.toolboxanimeGeneratorDarkSpaceBlock,
                ]}
                resizeMode="cover"
                source={require("../assets/darktrue-componentdivider4.png")}
              />
              <TouchableOpacity onPress={() => navigation.navigate("UpscalePhotoUpload")} activeOpacity={0.2}>
                <View
                  style={[
                    styles.toolboxanimeGeneratorDark,
                    styles.toolboxanimeGeneratorDarkSpaceBlock,
                  ]}
                >
                  <Image
                    style={styles.artworkRatio11ArtworkS}
                    resizeMode="cover"
                    source={require("../assets/artwork-ratio1--1-artwork-sizemedium-componentartwork-ratio--size21.png")}
                  />
                  <View style={styles.autoLayoutVertical2}>
                    <Text style={[styles.aiAvatarGenerator, { color: theme.text }]}>{t('Upscale Photo')}</Text>
                    <Text style={[styles.turnYourPhoto, styles.textFlexBox, { color: theme.text }]}>
                    {t('Upscale or resize your photo or selfie ')}
                    </Text>
                  </View>
                  <Image
                    style={[
                      styles.iconlyregularoutlinearrow,
                      styles.iconlycurvedoutlinehomeLayout,
                    ]}
                    resizeMode="cover"
                    source={isDarkMode ? require("../assets/iconlyregularoutlinearrow--right-21.png") : require("../assets/blackRightarrow.png")}
                  />
                </View>
              </TouchableOpacity>
              <Image
                style={[
                  styles.darktrueComponentdividerIcon,
                  styles.toolboxanimeGeneratorDarkSpaceBlock,
                ]}
                resizeMode="cover"
                source={require("../assets/darktrue-componentdivider4.png")}
              />
            </View>
          </View>
          <View
            style={[
              styles.activeMenuaiToolboxDarkt,
              styles.autoLayoutVerticalPosition,
            ]}
          >

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
              source={isDarkMode ? require("../assets/Category.png") : require("../assets/CategoryLight.png")}
            />
            <Text style={[styles.discover, styles.homeTypo,  { color: theme.icontext }]}>{t('AI Toolbox')}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.autoLayoutVertical8}
            activeOpacity={0.0}
            onPress={() => navigation.navigate("DarkProfileFullPage")}
          >
            <Image
              style={styles.iconlyregularoutlinearrowLayout}
              resizeMode="cover"
              source={require("../assets/iconlyregularoutlineprofile.png")}
            />
            <Text style={[styles.discover, styles.homeTypo]}>{t('Profile')}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};



const styles = StyleSheet.create({
  autoLayoutHorizontal3FlexBox: {
    flexDirection: "row",
    height: 48,
    alignItems: "center",
    alignSelf: "stretch",
  },
  activeMenudiscoverDarktru: {
    bottom: "0%",
    paddingTop: Padding.p_5xs,
    alignItems: "center",
    paddingBottom: Padding.p_5xs,
  },
  autoLayoutHorizontal3: {
    justifyContent: "center",
    paddingHorizontal: 15,
    paddingVertical: 0,
    alignItems: "center",
  },
  activeMenuhomeDarktrueC: {
    bottom: 0,
    backgroundColor: Color.darkDarkbg,
    paddingTop: Padding.p_5xs,
    alignItems: "center",
  },
  autoLayoutVerticalPosition: {
    left: 0,
    right: 0,
    position: "absolute",
  },
  autoLayoutHorizontal9: {
    height: 48,
    paddingHorizontal: Padding.p_13xl,
    paddingVertical: 0,
    alignSelf: "stretch",
  },
  autoFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  iconlyregularoutlinearrowLayout: {
    width: 24,
    height: 24,
  },
  autoLayoutVertical7: {
    alignItems: "center",
    flex: 1,
  },
  autoLayoutVertical8: {
    marginLeft: 19,
    alignItems: "center",
    flex: 1,
  },
  discover: {
    fontWeight: "500",
    fontFamily: FontFamily.bodyXSmallMedium,
    color: Color.greyscale500,
  },
  generatorFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  autoLayout: {
    height: 28,
    width: 28,
    marginLeft: "2%",
  },
  textFlexBox: {
    letterSpacing: 0,
    textAlign: "left",
  },
  iconlycurvedoutlinehomeLayout: {
    height: 24,
    width: 24,
  },
  toolboxanimeGeneratorDarkSpaceBlock: {
    marginTop: 16,
    alignSelf: "stretch",
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
  iconLayout: {
    maxWidth: "100%",
    overflow: "hidden",
    width: "100%",
  },
  titleSection: {
    fontSize: FontSize.h4Bold_size,
    lineHeight: 38,
    marginRight: "6%",
    textAlign: "center",
    fontFamily: FontFamily.bodyXSmallBold,
    fontWeight: "700",
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
  artworkRatio11ArtworkS: {
    borderRadius: Border.br_5xs,
    width: 90,
    height: 90,
    overflow: "hidden",
  },
  aiAvatarGenerator: {
    fontSize: FontSize.h5Semibold_size,
    lineHeight: 32,
    textAlign: "left",
    fontFamily: FontFamily.bodyXSmallBold,
    fontWeight: "700",
    alignSelf: "stretch",
  },
  turnYourPhoto: {
    fontSize: FontSize.bodyMediumMedium_size,
    lineHeight: 22,
    fontFamily: FontFamily.bodySmallRegular,
    marginTop: 4,
    alignSelf: "stretch",
  },
  autoLayoutVertical2: {
    marginLeft: 20,
    justifyContent: "center",
    flex: 1,
  },
  iconlyregularoutlinearrow: {
    marginLeft: 10,
  },
  toolboxaiAvatarGeneratorD: {
    alignItems: "center",
    alignSelf: "stretch",
  },
  darktrueComponentdividerIcon: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    width: "100%",
  },
  toolboxanimeGeneratorDark: {
    alignItems: "center",
    flexDirection: "row",
  },
  toolboxtextEffectsDarktru: {
    display: "none",
    alignItems: "center",
    flexDirection: "row",
  },
  autoLayoutVertical1: {
    alignSelf: "stretch",
  },
  autoLayoutVertical: {
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: Padding.p_xs,
  },
  home: {
    fontWeight: "500",
    fontFamily: FontFamily.bodyXSmallMedium,
    color: Color.greyscale500,
  },
  autoLayoutHorizontal2: {
    paddingHorizontal: Padding.p_13xl,
    paddingVertical: 0,
    justifyContent: "center",
    alignItems: "center",
    height: 48,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  homeIndicatorIcon: {
    height: 34,
    alignSelf: "stretch",
  },
  activeMenuaiToolboxDarkt: {
    bottom: 0,
    backgroundColor: Color.colorGray_500,
    paddingTop: Padding.p_5xs,
    alignItems: "center",
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
  darkAiToolbox: {
    height: 1350,
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default DarkAIToolbox;
