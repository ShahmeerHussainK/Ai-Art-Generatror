import React, { useState, useRef } from "react";
import { Image, StyleSheet, View, Text, TextInput, TouchableOpacity, ScrollView, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Padding, Border } from "../GlobalStyles";
import { prompt1, prompt2, prompt3, prompt4, prompt5, prompt6  } from "./constant";
import { useTranslation } from 'react-i18next';
import { useTheme } from "../context/ThemeContext";


const artStyles = [
  { label: "Colorful", image: require("../assets/mask-group6.png") },
  { label: "Chibi", image: require("../assets/mask-group7.png") },
  { label: "3D Style", image: require("../assets/mask-group8.png") },
  { label: "Fantasy", image: require("../assets/mask-group9.png") },
];

const buttons = [
  { label: "1 : 1", ratio: "1:1", key: "aspectRatio11" },
  { label: "9 : 16", ratio: "9:16", key: "aspectRatio916" },
  { label: "16 : 9", ratio: "16:9", key: "aspectRatio169" },
  { label: "3 : 4", ratio: "3:4", key: "aspectRatio34" },
  { label: "4 : 3", ratio: "4:3", key: "aspectRatio43" },
  { label: "2 : 3", ratio: "2:3", key: "aspectRatio23" },
  { label: "3 : 2", ratio: "3:2", key: "aspectRatio32" },
];

const DarkAnimeGenerator = () => {
  const { t } = useTranslation();
  const { theme, toggleTheme, isDarkMode } = useTheme();
  const navigation = useNavigation();
  const [prompt, setPrompt] = useState('');
  const [selectedArtStyle, setSelectedArtStyle] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const style_id = 34;
  console.log(prompt)
  
  const handlePress = (index) => {
    setSelectedIndex(index);
  };

  const handleGeneratePress = () => {
    if (!prompt) {
      Alert.alert(t("Enter Prompt"), t("Please enter a prompt to generate art."));
    } else {
      navigation.navigate("DarkEditArtwork1", { prompt: prompt + " anime" ,style_id});
    }
  };

  const handleArtStylePress = (index) => {
    setSelectedArtStyle(index);
  };

  const scrollViewRef = useRef();

  const scrollToTop = (prompt) => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({ y: 0, animated: true });
      setPrompt(prompt)
    }
  };

  return (
    <ScrollView ref={scrollViewRef}>
    <View style={[styles.homeScreen, { backgroundColor: theme.background }]}>
      <View
        style={[styles.elementsnavbarHomeDarktru, styles.autoLayoutHorizontal3FlexBox]}>
        <View style={[styles.navbardefaultDarktrueCom, styles.darktrueFlexBox, { justifyContent: 'space-between' }]}>
          <TouchableOpacity
            style={styles.gobackLayout}
            onPress={() => navigation.goBack()}
            hitSlop={{ top: 20, left: 20, bottom: 20, top: 20 }}
          >
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={isDarkMode ? require("../assets/iconlyregularoutlinearrow--left.png") : require("../assets/blackarrow.png")}
            />
          </TouchableOpacity>
          <View style={{ width: 28 }} />
        </View>
        <Text style={[styles.title, styles.titleTypo,{ color: theme.text }]}>{t('Anime Generator')}</Text>
      </View>
      <ScrollView style={styles.container}>
        <View style={styles.homeScreen}>
          <View
            style={[styles.autoLayoutVertical, styles.autoLayoutVerticalPosition]}>
            <ScrollView
              style={[styles.autoLayoutVertical1, styles.autoSpaceBlock]}
              showsVerticalScrollIndicator={true}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.autoLayoutVerticalContent}
            >
              <View style={styles.autoLayoutVertical2}>
                <View style={[styles.elementssection3Darktrue, styles.autoLayoutHorizontal3FlexBox,]}>
                  <View style={[styles.autoLayoutHorizontal3, styles.autoLayoutHorizontal3FlexBox,]}>
                    <Text style={[styles.title1, styles.titleTypo, { color: theme.text }]}>{t('Enter Prompt')}</Text>
                  </View>

                </View>
                <TextInput
                  style={[styles.inputFormtextAreaStatede, { textAlignVertical: "top", paddingLeft: 10 },
                  { color: theme.text },{ backgroundColor: theme.promptbackground }]}
                  placeholder={t("Type anything...")}
                  autoCapitalize="none"
                  multiline={true}
                  placeholderTextColor="#9e9e9e"
                  onChangeText={setPrompt}
                  value={prompt}
                />
              </View>
              <View style={styles.autoLayoutVertical3}>
                <View
                  style={[
                    styles.elementssection3Darktrue,
                    styles.autoLayoutHorizontal3FlexBox,
                  ]}
                >
                  <Text style={[styles.title2, styles.titleTypo, { color: theme.text }]}>
                    {t('Aspect Ratio')}
                  </Text>
                </View>
                <ScrollView
                  style={[styles.autoLayoutHorizontal4, styles.autoSpaceBlock]}
                  horizontal={true}
                  showsVerticalScrollIndicator={false}
                  showsHorizontalScrollIndicator={false}
                  contentContainerStyle={styles.autoLayoutHorizontal4Content}
                >
                  {buttons.map((button, index) => (
                    <TouchableOpacity
                      key={index}
                      style={[
                        styles.aspectBorder,
                        styles.aspectBoxSpacing,
                        selectedIndex === index && styles.selectedBackground,
                      ]}
                      onPress={() => handlePress(index)}
                    >
                      <View
                        style={[
                          styles[button.key],
                          selectedIndex === index
                            ? styles.selectedRectangleBorder
                            : styles.rectangleBorder,
                        ]}
                      />
                      <Text
                        style={[
                          styles.text,
                          selectedIndex === index
                            ? styles.selectedText
                            : styles.viewClr,
                        ]}
                      >
                        {button.label}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </ScrollView>
              </View>
             

              <View style={styles.autoLayoutVertical3}>
                <View style={[styles.elementssection3Darktrue, styles.autoLayoutHorizontal3FlexBox]}>
                  <View style={[styles.autoLayoutHorizontal33, styles.autoLayoutHorizontal3FlexBox]}>
                    <Text style={[styles.title1, styles.titleTypo, { color: theme.text }]}>{t('Art Style')}</Text>
                    <Text style={[styles.informationDetails1, styles.informationTypo]}>{t('(Optional)')}</Text>
                  </View>
                </View>
                <ScrollView
                  style={[styles.autoLayoutHorizontal4, styles.autoSpaceBlock]}
                  horizontal={true}
                  showsVerticalScrollIndicator={false}
                  showsHorizontalScrollIndicator={false}
                  contentContainerStyle={styles.autoLayoutHorizontal6Content}
                >
                  {artStyles.map((style, index) => (
                    <TouchableOpacity
                      key={index}
                      style={[
                        styles.sizemediumLayout,
                        index === selectedArtStyle && styles.selectedArtStyleBorder,
                      ]}
                      onPress={() => handleArtStylePress(index)}
                    >
                      <Image
                        style={[
                          styles.maskGroupIcon,
                          index === selectedArtStyle && styles.selectedArtStyleImage,
                        ]}
                        resizeMode="cover"
                        source={style.image}
                      />
                      {index === selectedArtStyle && (
                        <Image
                          style={styles.tickIcon}
                          resizeMode="contain"
                          source={require("../assets/tick.png")}
                        />
                      )}
                      <Text
                        style={[
                          styles.style,{ color: theme.text },
                          index === selectedArtStyle && styles.selectedArtStyleText,
                        ]}
                      >
                        {style.label}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </ScrollView>
              </View>

              <View style={[styles.darkDiscover, { backgroundColor: theme.background }]}>
                <Text style={[styles.title1, styles.titleTypo, { color: theme.text }]}>{t('Discover Prompts')}</Text>
                <View style={[styles.autoLayoutVertical31, styles.autoLayoutVerticalPosition]}>
                  <ScrollView
                    style={styles.autoLayoutHorizontal21}
                    horizontal={false}
                    showsVerticalScrollIndicator={true}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.autoLayoutHorizontal2Content}
                  >
                    <View style={styles.autoLayoutVertical1}>
                      <TouchableOpacity
                        activeOpacity={0.0}
                        onPress={()=>scrollToTop(prompt1)}
                      >
                        <Image
                          style={styles.artworkLayout1}
                          resizeMode="cover"
                          source={require("../assets/1.png")}
                        />
                      </TouchableOpacity>
                      <TouchableOpacity
                        activeOpacity={0.0}
                        onPress={()=>scrollToTop(prompt2)}
                      >
                        <Image
                          style={[styles.artworkRatio34ArtworkS, styles.artworkLayout2]}
                          resizeMode="cover"
                          source={require("../assets/2.png")}
                        />
                      </TouchableOpacity>
                      <TouchableOpacity
                        activeOpacity={0.0}
                        onPress={()=>scrollToTop(prompt3)}
                      >
                        <Image
                          style={styles.artworkLayout}
                          resizeMode="cover"
                          source={require("../assets/3.png")}
                        />
                      </TouchableOpacity>
                    </View>
                    <View style={styles.autoLayoutVertical2}>
                      <TouchableOpacity
                        activeOpacity={0.0}
                        onPress={()=>scrollToTop(prompt4)}
                      >
                        <Image
                          style={styles.artworkLayout3}
                          resizeMode="cover"
                          source={require("../assets/4.png")}
                        />
                      </TouchableOpacity>
                      <TouchableOpacity
                        activeOpacity={0.0}
                        onPress={()=>scrollToTop(prompt5)}
                      >
                        <Image
                          style={ styles.artworkLayout4}
                          resizeMode="cover"
                          source={require("../assets/5.png")}
                        />
                      </TouchableOpacity>
                      <TouchableOpacity
                        activeOpacity={0.0}
                        onPress={()=>scrollToTop(prompt6)}
                      >
                        <Image
                          style={[styles.artworkRatio23ArtworkS, styles.artworkLayout5]}
                          resizeMode="cover"
                          source={require("../assets/6.png")}
                        />
                      </TouchableOpacity>
                    </View>
                  </ScrollView>
                </View>
              </View>

            </ScrollView>
          </View>

        </View>
      </ScrollView>

      <View
        style={[
          styles.buttonprimaryDarktrueCom, { backgroundColor: theme.background },
          styles.autoLayoutVerticalPosition78,
        ]}
      >
        <TouchableOpacity
          style={[styles.buttonpillTypepillIconf, styles.rectangleLayout]}
          activeOpacity={0.0}
          onPress={handleGeneratePress}
        >
          <Text style={[styles.button, styles.textLayout]}>{t('Generate')}</Text>
        </TouchableOpacity>
      </View>
    </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  darktrueFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  navbardefaultDarktrueCom: {
    flexDirection: "row",
    alignItems: "center",
    height: 48,
    paddingHorizontal: 16,
  },
  gobackLayout: {
    height: 28,
    width: 28,
    marginLeft: "1%"
  },
  buttonprimaryDarktrueCom: {
    bottom: 0,
    borderStyle: "solid",
    borderColor: Color.colorDarkslategray_200,
    paddingTop: Padding.p_5xl,
    paddingBottom: Padding.p_17xl,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  autoLayoutHorizontal4Content: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  autoLayoutHorizontal6Content: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  sizemediumLayout: {
    margin: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  selectedArtStyleImage: {
    borderColor: Color.primary900,
    borderWidth: 4,
    borderRadius: 10,
  },
  selectedArtStyleBorder: {
    borderColor: "transparent",
    borderWidth: 2,
    borderRadius: 10,
  },
  tickIcon: {
    position: "absolute",
    width: 40,
    height: 40,
    alignSelf: "center",
    top: "50%",
    transform: [{ translateY: -20 }],
    tintColor: "white",
  },
  style: {
    marginTop: 10,
    lineHeight: 29,
    fontSize: FontSize.bodyXLargeBold_size,
    textAlign: "center",
    color: Color.skyWhite,
    fontFamily: FontFamily.bodyXSmallBold,
    fontWeight: "700",
    alignSelf: "stretch",
  },
  selectedArtStyleText: {
    color: Color.primary900,
  },
  autoLayoutHorizontal8Content: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    height: 450,
  },
  autoLayoutVerticalContent: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  autoLayoutHorizontal3FlexBox: {
    flexDirection: "row",
    height: 48,
    alignItems: "center",
    alignSelf: "stretch",
  },
  titleTypo: {
    color: Color.skyWhite,
    lineHeight: 38,
    fontSize: FontSize.h4Bold_size,
    fontFamily: FontFamily.bodyXSmallBold,
    fontWeight: "700",
  },
  autoSpaceBlock: {
    marginTop: "1%",
    alignSelf: "stretch",
  },
  informationTypo: {
    color: Color.greyscale300,
    marginLeft: 8,
    fontFamily: FontFamily.bodySmallRegular,
    lineHeight: 29,
    fontSize: FontSize.bodyXLargeBold_size,
    textAlign: "left",
    letterSpacing: 0,
    flex: 1,
  },
  iconlyregularoutlinearrowLayout: {
    width: 24,
    height: 24,
  },
  aspectBorder: {
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_xl,
    borderWidth: 2,
    borderColor: Color.primary900,
    borderStyle: "solid",
    justifyContent: "center",
    borderRadius: Border.br_81xl,
    alignItems: "center",
    flexDirection: "row",
  },
  aspectBoxSpacing: {
    marginRight: 10,
  },
  iconLayout: {
    maxWidth: "100%",
    alignSelf: "stretch",
    overflow: "hidden",
    width: "100%",
  },
  // sizemediumLayout: {
  //   height: 189,
  //   width: 150,
  //   alignItems: "center",
  // },
  autoLayoutVertical6FlexBox: {
    padding: Padding.p_base,
    justifyContent: "center",
    alignItems: "center",
  },
  maskGroupIcon4Layout: {
    height: 150,
    width: 150,
  },
  title: {
    textAlign: "center",
    marginLeft: "12%",
  },
  elementsnavbarHomeDarktru: {
    paddingHorizontal: 0,
    paddingVertical: Padding.p_8xs,
    alignItems: "center",
    alignSelf: "stretch",
  },
  title1: {
    textAlign: "left",
  },
  autoLayoutHorizontal3: {
    alignItems: "center",
    flex: 1,
  },
  iconlyregularoutlinearrow: {
    marginLeft: 88,
  },
  iconlyregularoutlinearrow1: {
    marginLeft: 8,
    display: "none",
  },
  elementssection3Darktrue: {
    alignItems: "center",
    alignSelf: "stretch",
  },
  inputFormtextAreaStatede: {
    fontFamily: FontFamily.bodySmallRegular,
    fontSize: FontSize.bodyXLargeBold_size,
    alignSelf: "stretch",
    height: "80%",
    borderRadius: Border.br_7xs,
  },
  autoLayoutVertical2: {
    alignSelf: "stretch",
    height: "20%"
  },
  title2: {
    textAlign: "left",
    flex: 1,
  },
  text: {
    marginLeft: 12,
    lineHeight: 26,
    fontSize: FontSize.bodyLargeBold_size,
    fontFamily: FontFamily.bodyMediumSemibold,
    fontWeight: "600",
    textAlign: "center",
  },
  autoLayoutHorizontal4: {
    width: "100%",
  },
  autoLayoutVertical3: {
    marginTop: "2%",
    alignSelf: "stretch",
  },
  informationDetails1: {
    marginLeft: 8,
  },
  maskGroupIcon: {
    flex: 1,
    borderRadius: 10,
  },
  sizemediumSelectedfalseD1: {
    marginLeft: 12,
  },
  iconplusComponentadditiona: {
    height: 44,
    width: 44,
    top: 10,
    bottom: 10
  },
  upload: {
    marginTop: 12,
    textAlign: "left",
    fontFamily: FontFamily.bodyMediumSemibold,
    fontWeight: "600",
    lineHeight: 22,
    fontSize: FontSize.bodyMediumMedium_size,
  },
  autoLayoutVertical6: {
    borderRadius: Border.br_xs,
    backgroundColor: Color.transparentPurple,
    height: 150,
    width: 150,
  },
  sizemediumSelectedfalseD4: {
    marginLeft: 12,
  },
  maskGroupIcon4: {
    marginLeft: 12,
  },
  autoLayoutVertical1: {
    flex: 1,
  },
  button: {
    textAlign: "center",
    color: Color.skyWhite,
    fontFamily: FontFamily.bodyXSmallBold,
    fontWeight: "700",
    alignSelf: "stretch",
  },
  textLayout: {
    lineHeight: 26,
    fontSize: FontSize.bodyLargeBold_size,
    letterSpacing: 0,
  },
  buttonpillTypepillIconf: {
    backgroundColor: Color.alertsStatusButtonDisabled,
    padding: Padding.p_base,
    justifyContent: "center",
    alignItems: "center",
  },
  rectangleLayout: {
    borderRadius: Border.br_81xl,
    alignSelf: "stretch",
  },
  homeScreen: {
    height: 1850,
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
  viewClr: {
    color: "#6949ff",
    letterSpacing: 0,
  },
  selectedText: {
    color: "white",
  },
  selectedBackground: {
    backgroundColor: "#6949ff",
  },
  selectedRectangleBorder: {
    borderColor: "white",
    borderWidth: 2,
  },
  rectangleBorder: {
    borderWidth: 2,
    borderColor: Color.primary900,
    borderStyle: "solid",
  },
  aspectRatio11: {
    height: 18,
    width: 18,
  },
  aspectRatio916: {
    height: 23,
    width: 14,
  },
  aspectRatio169: {
    width: 23,
    height: 14,
  },
  aspectRatio34: {
    width: 16,
    height: 21,
  },
  aspectRatio43: {
    width: 21,
    height: 16,
  },
  aspectRatio23: {
    width: 16,
    height: 23,
  },
  aspectRatio32: {
    width: 23,
    height: 16,
  },
  artworkLayout: {
    height: 325,
    maxWidth: "100%",
    borderRadius: Border.br_xs,
    alignSelf: "stretch",
    overflow: "hidden",
    width: 170,
    top: 20,
  },
  artworkLayout4: {
    height: 225,
    maxWidth: "100%",
    borderRadius: Border.br_xs,
    alignSelf: "stretch",
    overflow: "hidden",
    width: 170,
    top: 10,
  },
  artworkLayout3: {
    height: 325,
    maxWidth: "100%",
    borderRadius: Border.br_xs,
    alignSelf: "stretch",
    overflow: "hidden",
    width: 170,
    top:0,
  },
  artworkLayout1: {
    height: 183,
    maxWidth: "100%",
    borderRadius: Border.br_xs,
    alignSelf: "stretch",
    overflow: "hidden",
    width: 170,
  },
  artworkLayout2: {
    maxWidth: "100%",
    alignSelf: "stretch",
    overflow: "hidden",
    width: 170,
    top:10,
  },
  artworkLayout5: {
    height: 325,
    maxWidth: "100%",
    borderRadius: Border.br_xs,
    alignSelf: "stretch",
    overflow: "hidden",
    width: 170,
    marginTop: 20,
  },
  artworkRatio23ArtworkS: {
    height: 275,
    borderRadius: Border.br_xs,
    maxWidth: "100%",
  },
  artworkRatio34ArtworkS: {
    height: 244,
    borderRadius: Border.br_xs,
    maxWidth: "100%",
    left: 0,
    right: 0,
    overflow: "hidden",
  },
  darkDiscover: {
    height: 1300,
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
  autoLayoutVertical: {
    paddingHorizontal: 8,
    width: "100%",
    alignItems: "center",
  },
  autoLayoutVertical31: {
    paddingHorizontal: 8,
    paddingVertical: 34,
    width: "100%",
    alignItems: "center",
  },
  autoLayoutVerticalPosition: {
    left: 0,
    right: 0,
    position: "absolute",
  },
  autoLayoutVerticalPosition78: {
    paddingHorizontal: Padding.p_5xl,
    left: 0,
    right: 0,
    position: "absolute",
  },
  autoLayoutHorizontal2Content: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  autoLayoutHorizontal21: {
    marginTop: "1%",
    alignSelf: "stretch",
    flex: 1,
  },
});

export default DarkAnimeGenerator;
