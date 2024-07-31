import * as React from "react";
import {
  TextInput,
  StyleSheet,
  ScrollView,
  Pressable,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { FontFamily, Color, Padding, Border, FontSize } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "../context/ThemeContext";

import { useTranslation } from 'react-i18next';

const DarkFollowers = () => {
  const navigation = useNavigation();
  const { t } = useTranslation(); // Initialize useTranslation hook
  const { theme, toggleTheme, isDarkMode } = useTheme();

  return (
    <ScrollView>
    <View style={[styles.darkFollowers, { backgroundColor: theme.background }]}>
      <View
        style={[styles.autoLayoutVertical, styles.autoLayoutVerticalPosition]}
      >
        <TextInput
          style={[
            styles.navbardefaultDarktrueCom,{ backgroundColor: theme.promptbackground },{ color: theme.text },
            styles.autoLayoutVertical2SpaceBlock,
          ]}
          placeholder="Search"
          autoCapitalize="none"
          placeholderTextColor="#757575"
          color="white"
        />
        <ScrollView
          style={[
            styles.autoLayoutVertical1,
            styles.autoLayoutVertical1SpaceBlock,
          ]}
          showsVerticalScrollIndicator={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.autoLayoutVerticalContent}
        >
           <View style={styles.autoLayoutHorizontal}>
            <TouchableOpacity style={styles.activetrueStylenoneTheme}>
              <Text style={[styles.horizontalTab1, styles.chipsTypo]}
               onPress={()=> navigation.navigate("DarkFollowers")} activeOpacity={0.0}
            >
                Followers
              </Text>
              <View
                style={[styles.autoLayoutVertical2, styles.rectangleSpaceBlock]}
              >
                <View style={styles.rectangle1} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.activetrueStylenoneTheme}
                onPress={()=>navigation.navigate("DarkFollowing")} activeOpacity={0.0}
            >
              <Text style={[styles.horizontalTab, styles.chipsTypo]}>
                Following
              </Text>
              <View style={[styles.rectangle, styles.rectangleSpaceBlock]} />
            </TouchableOpacity>
          </View>
          <View
            style={[
              styles.typedefaultListDarktrue,
              styles.autoLayoutVertical1SpaceBlock,
            ]}
          >
            <View style={styles.autoLayoutHorizontal1}>
              <Image
                style={styles.typedefaultComponentavatarIcon}
                resizeMode="contain"
                source={require("../assets/typedefault-componentavatar6.png")}
              />
              <LinearGradient
                style={[styles.autoLayoutHorizontal2, styles.autoShadowBox]}
                locations={[0, 1]}
                colors={["#235dff", "#4f7dff"]}
                useAngle={true}
                angle={-73.83}
              >
                <Image
                  style={styles.iconlybolddownload}
                  resizeMode="cover"
                  source={require("../assets/iconlybolddownload.png")}
                />
              </LinearGradient>
              <View style={styles.autoLayoutVertical3}>
                <Text style={[styles.name,{ color: theme.text }]}>creativepalette</Text>
                <Text style={[styles.information, styles.chipsLayout, { color: theme.text }]}>
                  Ava Reynolds
                </Text>
              </View>
            </View>
            <Pressable
              style={[
                styles.sizesmallTypefilledIcon,
                styles.sizesmallIconSpaceBlock,
              ]}
            >
              <Text style={[styles.chips, styles.chipsLayout]}>Follow</Text>
            </Pressable>
          </View>
          <View
            style={[
              styles.typedefaultListDarktrue,
              styles.autoLayoutVertical1SpaceBlock,
            ]}
          >
             
            <View style={styles.autoLayoutHorizontal1}>
              <Image
                style={styles.typedefaultComponentavatarIcon}
                resizeMode="contain"
                source={require("../assets/typedefault-componentavatar7.png")}
              />
              <LinearGradient
                style={[styles.autoLayoutHorizontal4, styles.autoShadowBox]}
                locations={[0, 1]}
                colors={["#235dff", "#4f7dff"]}
                useAngle={true}
                angle={-73.83}
              >
                <Image
                  style={styles.iconlybolddownload}
                  resizeMode="cover"
                  source={require("../assets/iconlybolddownload.png")}
                />
              </LinearGradient>
              <View style={styles.autoLayoutVertical3}>
                <Text  style={[styles.name,{ color: theme.text }]}>artfulinkling</Text>
                <Text style={[styles.information, styles.chipsLayout, { color: theme.text }]}>
                  Max Bennett Gallery
                </Text>
              </View>
            </View>
            <Pressable
              style={[
                styles.sizesmallTypeborderIcon,
                styles.sizesmallIconSpaceBlock,
              ]}
            >
              <Text style={[styles.chips1, styles.chipsLayout]}>Following</Text>
            </Pressable>
          </View>
          <View
            style={[
              styles.typedefaultListDarktrue,
              styles.autoLayoutVertical1SpaceBlock,
            ]}
          >
             
            <View style={styles.autoLayoutHorizontal1}>
              <Image
                style={styles.typedefaultComponentavatarIcon}
                resizeMode="cover"
                source={require("../assets/typedefault-componentavatar8.png")}
              />
              <LinearGradient
                style={[styles.autoLayoutHorizontal6, styles.autoShadowBox]}
                locations={[0, 1]}
                colors={["#235dff", "#4f7dff"]}
                useAngle={true}
                angle={-73.83}
              >
                <Image
                  style={styles.iconlybolddownload}
                  resizeMode="cover"
                  source={require("../assets/iconlybolddownload.png")}
                />
              </LinearGradient>
              <View style={styles.autoLayoutVertical3}>
                <Text  style={[styles.name,{ color: theme.text }]}>designdynamo</Text>
                <Text style={[styles.information, styles.chipsLayout, { color: theme.text }]}>
                  Emily Mitchell
                </Text>
              </View>
            </View>
            <View
              style={[
                styles.sizesmallTypefilledIcon,
                styles.sizesmallIconSpaceBlock,
              ]}
            >
              <Text style={[styles.chips, styles.chipsLayout]}>Follow</Text>
            </View>
          </View>
          <View
            style={[
              styles.typedefaultListDarktrue,
              styles.autoLayoutVertical1SpaceBlock,
            ]}
          >
             
            <View style={styles.autoLayoutHorizontal1}>
              <Image
                style={styles.typedefaultComponentavatarIcon}
                resizeMode="cover"
                source={require("../assets/typedefault-componentavatar9.png")}
              />
              <LinearGradient
                style={[styles.autoLayoutHorizontal8, styles.autoShadowBox]}
                locations={[0, 1]}
                colors={["#235dff", "#4f7dff"]}
                useAngle={true}
                angle={-73.83}
              >
                <Image
                  style={styles.iconlybolddownload}
                  resizeMode="cover"
                  source={require("../assets/iconlybolddownload.png")}
                />
              </LinearGradient>
              <View style={styles.autoLayoutVertical3}>
                <Text  style={[styles.name,{ color: theme.text }]}>colorsplash</Text>
                <Text style={[styles.information, styles.chipsLayout, { color: theme.text }]}>
                  Ethan Color Splash
                </Text>
              </View>
            </View>
            <View
              style={[
                styles.sizesmallTypefilledIcon,
                styles.sizesmallIconSpaceBlock,
              ]}
            >
              <Text style={[styles.chips, styles.chipsLayout]}>Follow</Text>
            </View>
          </View>
          <View
            style={[
              styles.typedefaultListDarktrue,
              styles.autoLayoutVertical1SpaceBlock,
            ]}
          >
             
            <View style={styles.autoLayoutHorizontal1}>
              <Image
                style={styles.typedefaultComponentavatarIcon}
                resizeMode="cover"
                source={require("../assets/typedefault-componentavatar10.png")}
              />
              <LinearGradient
                style={[styles.autoLayoutHorizontal10, styles.autoShadowBox]}
                locations={[0, 1]}
                colors={["#235dff", "#4f7dff"]}
                useAngle={true}
                angle={-73.83}
              >
                <Image
                  style={styles.iconlybolddownload}
                  resizeMode="cover"
                  source={require("../assets/iconlybolddownload.png")}
                />
              </LinearGradient>
              <View style={styles.autoLayoutVertical3}>
                <Text  style={[styles.name,{ color: theme.text }]}>sketchmaven</Text>
                <Text style={[styles.information, styles.chipsLayout, { color: theme.text }]}>
                  Olivia Lawson Sketch
                </Text>
              </View>
              <View style={[styles.sizesmallTypefilledIcon, styles.sizesmallIconSpaceBlock]}>
                <Text style={[styles.chips, styles.chipsLayout]}>{t('Follow')}</Text>
              </View>
            </View>
            
          </View>
          <View
            style={[
              styles.typedefaultListDarktrue,
              styles.autoLayoutVertical1SpaceBlock,
            ]}
          >
             
            <View style={styles.autoLayoutHorizontal1}>
              <Image
                style={styles.typedefaultComponentavatarIcon}
                resizeMode="cover"
                source={require("../assets/typedefault-componentavatar12.png")}
              />
              <LinearGradient
                style={[styles.autoLayoutHorizontal14, styles.autoShadowBox]}
                locations={[0, 1]}
                colors={["#235dff", "#4f7dff"]}
                useAngle={true}
                angle={-73.83}
              >
                <Image
                  style={styles.iconlybolddownload}
                  resizeMode="cover"
                  source={require("../assets/iconlybolddownload1.png")}
                />
              </LinearGradient>
              <View style={styles.autoLayoutVertical3}>
                <Text  style={[styles.name,{ color: theme.text }]}>craftycreations</Text>
                <Text style={[styles.information, styles.chipsLayout, { color: theme.text }]}>
                  Lily Thompson Creations
                </Text>
              </View>
            </View>
            <View
              style={[
                styles.sizesmallTypeborderIcon,
                styles.sizesmallIconSpaceBlock,
              ]}
            >
              <Text style={[styles.chips1, styles.chipsLayout]}>Following</Text>
            </View>
          </View>
          <View
            style={[
              styles.typedefaultListDarktrue,
              styles.autoLayoutVertical1SpaceBlock,
            ]}
          >
             
            <View style={styles.autoLayoutHorizontal1}>
              <Image
                style={styles.typedefaultComponentavatarIcon}
                resizeMode="cover"
                source={require("../assets/typedefault-componentavatar13.png")}
              />
              <LinearGradient
                style={[styles.autoLayoutHorizontal16, styles.autoShadowBox]}
                locations={[0, 1]}
                colors={["#235dff", "#4f7dff"]}
                useAngle={true}
                angle={-73.83}
              >
                <Image
                  style={styles.iconlybolddownload}
                  resizeMode="cover"
                  source={require("../assets/iconlybolddownload.png")}
                />
              </LinearGradient>
              <View style={styles.autoLayoutVertical3}>
                <Text  style={[styles.name,{ color: theme.text }]}>abstractvisionary</Text>
                <Text style={[styles.information, styles.chipsLayout, { color: theme.text }]}>
                  Noah Ramirez
                </Text>
              </View>
            </View>
            <View
              style={[
                styles.sizesmallTypefilledIcon,
                styles.sizesmallIconSpaceBlock,
              ]}
            >
              <Text style={[styles.chips, styles.chipsLayout]}>Follow</Text>
            </View>
          </View>
          <View
            style={[
              styles.typedefaultListDarktrue,
              styles.autoLayoutVertical1SpaceBlock,
            ]}
          >
             
            <View style={styles.autoLayoutHorizontal1}>
              <Image
                style={styles.typedefaultComponentavatarIcon}
                resizeMode="cover"
                source={require("../assets/typedefault-componentavatar14.png")}
              />
              <LinearGradient
                style={[styles.autoLayoutHorizontal18, styles.autoShadowBox]}
                locations={[0, 1]}
                colors={["#235dff", "#4f7dff"]}
                useAngle={true}
                angle={-73.83}
              >
                <Image
                  style={styles.iconlybolddownload}
                  resizeMode="cover"
                  source={require("../assets/iconlybolddownload.png")}
                />
              </LinearGradient>
              <View style={styles.autoLayoutVertical3}>
                <Text  style={[styles.name,{ color: theme.text }]}>imaginarybrush</Text>
                <Text style={[styles.information, styles.chipsLayout, { color: theme.text }]}>
                  Sophia Collins Dreams
                </Text>
              </View>
            </View>
            <View
              style={[
                styles.sizesmallTypefilledIcon,
                styles.sizesmallIconSpaceBlock,
              ]}
            >
              <Text style={[styles.chips, styles.chipsLayout]}>Follow</Text>
            </View>
          </View>
        </ScrollView>
      </View>
      
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  autoLayoutVerticalContent: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  autoLayoutVerticalPosition: {
    left: 0,
    right: 0,
    position: "absolute",
  },
  autoLayoutVertical2SpaceBlock: {
    borderRadius: Border.br_xs,
    paddingHorizontal: "5%",
    alignItems: "center",
  },
  autoLayoutVertical1SpaceBlock: {
    marginTop: 24,
    alignSelf: "stretch",
  },
  chipsTypo: {
    textAlign: "center",
    fontFamily: FontFamily.bodyMediumSemibold,
    fontWeight: "600",
  },
  rectangleSpaceBlock: {
    marginTop: 12,
    alignSelf: "stretch",
  },
  autoShadowBox: {
    backgroundColor: Color.gradientsGradientBlue,
    padding: Padding.p_xs,
    shadowOpacity: 1,
    elevation: 24,
    shadowRadius: 24,
    shadowOffset: {
      width: 4,
      height: 8,
    },
    shadowColor: "rgba(105, 73, 255, 0.25)",
    marginLeft: 20,
    justifyContent: "center",
    display: "none",
    borderRadius: Border.br_81xl,
    alignItems: "center",
    flexDirection: "row",
  },
  chipsLayout: {
    lineHeight: 22,
    fontSize: FontSize.bodyMediumMedium_size,
    letterSpacing: 0,
  },
  sizesmallIconSpaceBlock: {
    paddingVertical: Padding.p_7xs,
    paddingHorizontal: Padding.p_base,
    marginLeft: 16,
    justifyContent: "center",
    borderRadius: Border.br_81xl,
    alignItems: "center",
    flexDirection: "row",
  },
  groupIconPosition: {
    top: "50%",
    position: "absolute",
  },
  navbardefaultDarktrueCom: {
    height: 48,
    justifyContent: "space-between",
    flexDirection: "row",
    alignSelf: "stretch",
    paddingVertical: Padding.p_xs,
  },
  horizontalTab: {
    color: Color.primary900,
    textAlign: "center",
    lineHeight: 29,
    letterSpacing: 0,
    fontSize: FontSize.bodyXLargeBold_size,
    alignSelf: "stretch",
  },
  rectangle: {
    height: 4,
    backgroundColor: Color.primary900,
    borderRadius: Border.br_81xl,
  },
  activetrueStylenoneTheme: {
    alignItems: "center",
    flex: 1,
  },
  horizontalTab1: {
    color: Color.colorDimgray,
    lineHeight: 29,
    letterSpacing: 0,
    fontSize: FontSize.bodyXLargeBold_size,
    alignSelf: "stretch",
  },
  rectangle1: {
    backgroundColor: Color.colorDarkslategray_200,
    height: 2,
    borderRadius: Border.br_81xl,
    alignSelf: "stretch",
  },
  autoLayoutVertical2: {
    justifyContent: "flex-end",
    paddingVertical: Padding.p_12xs,
    paddingHorizontal: 0,
    alignItems: "center",
  },
  autoLayoutHorizontal: {
    flexDirection: "row",
    alignSelf: "stretch",
  },
  text: {
    width: 24,
    justifyContent: "center",
    display: "none",
    color: Color.skyWhite,
    fontFamily: FontFamily.bodyXSmallBold,
    fontWeight: "700",
    textAlign: "center",
    lineHeight: 29,
    fontSize: FontSize.bodyXLargeBold_size,
    alignItems: "center",
  },
  typedefaultComponentavatarIcon: {
    width: 60,
    height: 60,
  },
  iconlybolddownload: {
    width: 16,
    height: 16,
  },
  autoLayoutHorizontal2: {
    marginLeft: 20,
  },
  name: {
    textAlign: "left",
    color: Color.skyWhite,
    fontFamily: FontFamily.bodyXSmallBold,
    fontWeight: "700",
    lineHeight: 29,
    fontSize: FontSize.bodyXLargeBold_size,
    alignSelf: "stretch",
  },
  information: {
    fontWeight: "500",
    fontFamily: FontFamily.bodyXSmallMedium,
    color: Color.greyscale300,
    marginTop: 4,
    textAlign: "left",
    alignSelf: "stretch",
  },
  autoLayoutVertical3: {
    marginLeft: 20,
    flex: 1,
  },
  autoLayoutHorizontal1: {
    marginLeft: 16,
    alignItems: "center",
    flexDirection: "row",
    flex: 1,
  },
  chips: {
    color: Color.skyWhite,
    textAlign: "center",
    fontFamily: FontFamily.bodyMediumSemibold,
    fontWeight: "600",
  },
  sizesmallTypefilledIcon: {
    backgroundColor: Color.primary900,
  },
  typedefaultListDarktrue: {
    alignItems: "center",
    flexDirection: "row",
  },
  autoLayoutHorizontal4: {
    marginLeft: 20,
  },
  chips1: {
    textAlign: "center",
    fontFamily: FontFamily.bodyMediumSemibold,
    fontWeight: "600",
    color: Color.primary900,
  },
  sizesmallTypeborderIcon: {
    borderStyle: "solid",
    borderColor: Color.primary900,
    borderWidth: 2,
  },
  autoLayoutHorizontal6: {
    marginLeft: 20,
  },
  autoLayoutHorizontal8: {
    marginLeft: 20,
  },
  autoLayoutHorizontal10: {
    marginLeft: 20,
  },
  autoLayoutHorizontal12: {
    marginLeft: 20,
  },
  autoLayoutHorizontal14: {
    marginLeft: 20,
  },
  autoLayoutHorizontal16: {
    marginLeft: 20,
  },
  autoLayoutHorizontal18: {
    marginLeft: 20,
  },
  autoLayoutVertical1: {
    flex: 1,
  },
  autoLayoutVertical: {
    top: 44,
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: Padding.p_xs,
    borderRadius: "5%"
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
  text9: {
    marginTop: -13,
    left: 23,
    fontSize: FontSize.bodyLargeBold_size,
    lineHeight: 26,
    textAlign: "left",
    color: Color.skyWhite,
    fontFamily: FontFamily.bodyMediumSemibold,
    fontWeight: "600",
    top: "50%",
    letterSpacing: 0,
  },
  typestatusBarThemedarkC: {
    top: 0,
    height: 44,
  },
  darkFollowers: {
    backgroundColor: Color.darkDarkbg,
    width: "100%",
    height: 1000,
    overflow: "hidden",
    flex: 1,
  },
});

export default DarkFollowers;
