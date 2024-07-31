import React, { useState, useRef  } from "react";
import { Image, StyleSheet, View, Text, TextInput, Alert,  TouchableOpacity, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Padding, Border } from "../GlobalStyles";
import { prompt1, prompt2, prompt3, prompt4, prompt5, prompt6  } from "./constant";
import { useTranslation } from 'react-i18next';
import { useTheme } from "../context/ThemeContext";
import { Modal } from "react-native-paper";

const buttons = [
  { label: "1 : 1", ratio: "1:1", key: "aspectRatio11" },
  { label: "9 : 16", ratio: "9:16", key: "aspectRatio916Selected" },
  { label: "16 : 9", ratio: "16:9", key: "aspectRatio169Selected" },
  { label: "3 : 4", ratio: "3:4", key: "aspectRatio34Selected" },
  { label: "4 : 3", ratio: "4:3", key: "aspectRatio43Selected" },
  { label: "2 : 3", ratio: "2:3", key: "aspectRatio23Selected" },
  { label: "3 : 2", ratio: "3:2", key: "aspectRatio32Selected" },
];

const artStyles = [
  { label: "Cyberpunk", image: require("../assets/mask-group.png"), model_id: 28 },
  { label: "Potrait", image: require("../assets/mask-group1.png"), model_id: 26 },
  { label: "Realistic", image: require("../assets/mask-group2.png"), model_id: 29 },
  { label: "Fantasy", image: require("../assets/mask-group22.png"), model_id: 31 },
  { label: "Robot", image: require("../assets/mask-group23.png"), model_id: 34 },
  { label: "Anime", image: require("../assets/mask-group24.png"), model_id: 6 },
];

const HomeScreen = () => {
  const navigation = useNavigation();
  const [prompt, setPrompt] = useState('')
  const { t } = useTranslation();
  const { theme, toggleTheme, isDarkMode } = useTheme();
  let style_id=28;

  const [selectedIndex, setSelectedIndex] = useState(null);
  const [isSelected, setIsSelected] = useState(false);
  const [selectedRatio, setSelectedRatio] = useState(null);
  const [selectedArtStyle, setSelectedArtStyle] = useState(0);
  const [modelId, setModalID]  = useState(28);



  console.log("passing ", prompt)
  const handlePress = (index, ratio) => {
    setSelectedIndex(index);
    setSelectedRatio(buttons[index].label);
    
  };

  const handleGeneratePress = () => {
    if (!prompt) {
      Alert.alert(t("Enter Prompt"), t("Please enter a prompt to generate art."));
    } else {
      console.log("aspectRatioooo : ",selectedRatio)
      console.log("style_iddddddd : ",style_id)

      navigation.navigate("DarkEditArtwork1", { prompt,selectedRatio, style_id:modelId});
    }
  };

  const handleArtStylePress = (index) => {
    setSelectedArtStyle(index);
    console.log("model",artStyles[index].model_id)
    style_id=artStyles[index].model_id;
    setModalID(artStyles[index].model_id);
    console.log("style id ",style_id)

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
    <View style={[styles.homeScreen,{ backgroundColor: theme.background }]}>
      <View
        style={[styles.elementsnavbarHomeDarktru, styles.autoLayoutHorizontal3FlexBox,]}>
        <View style={styles.autoFlexBox1}>
          <Image
            style={[styles.typelogoDefaultComponentl, styles.typelogoDefaultComponentlLayout,]}
            resizeMode="cover"
            source={require("../assets/typelogo-default-componentlogo.png")}
          />
        </View>
        <Text style={[styles.title, styles.titleTypo, { color: theme.text }]}>Artify</Text>
        <View style={[styles.autoLayoutHorizontal1, styles.autoFlexBox1]}>
          <TouchableOpacity style={[styles.autoLayoutHorizontal2, styles.autoFlexBox]}
            activeOpacity={0.0}
            onPress={() => navigation.navigate("DarkUpgradeToPro")}>
            <Image
              style={styles.iconcrownComponentaddition}
              resizeMode="cover"
              source={require("../assets/iconcrown-componentadditional-icons.png")}
            />
            <Text style={[styles.pro, styles.textTypo]}>{t('PRO')}</Text>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView>
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
                  <View style={[styles.autoLayoutHorizontal33, styles.autoLayoutHorizontal3FlexBox,]}>
                    <Text style={[styles.title1, styles.titleTypo, { color: theme.text }]}>{t('Enter Prompt')}</Text>
                  </View>
                </View>
                <TextInput
                  style={[styles.inputFormtextAreaStatede, { textAlignVertical: "top", paddingLeft: 10, },
                  { color: theme.text },{ backgroundColor: theme.promptbackground }
                  ]}
                  placeholder={t("Type anything...")}
                  autoCapitalize="none"
                  multiline={true}
                  placeholderTextColor="#616161"
                  onChangeText={setPrompt}
                  value={prompt}
                />

              </View>
              <View style={styles.autoLayoutVertical3}>
                <View style={[styles.elementssection3Darktrue, styles.autoLayoutHorizontal3FlexBox]}>
                  <Text style={[styles.title2, styles.titleTypo, { color: theme.text }]}>{t('Aspect Ratio')}</Text>
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
                          selectedIndex === index ? styles.selectedRectangleBorder : styles.rectangleBorder,
                        ]}
                      />
                      <Text style={[
                        styles.text,
                        selectedIndex === index ? styles.selectedText : styles.viewClr
                      ]}>{button.label}</Text>
                    </TouchableOpacity>
                  ))}
                </ScrollView>
              </View>

              <View style={styles.autoLayoutVertical31}>
                <View style={[styles.elementssection3Darktrue, styles.autoLayoutHorizontal3FlexBox]}>
                  <View style={[styles.autoLayoutHorizontal33, styles.autoLayoutHorizontal3FlexBox]}>
                    <Text style={[styles.title1, styles.titleTypo, { color: theme.text }]}>{t("Art Style")}</Text>
                    <Text style={[styles.informationDetails1, styles.informationTypo]}>{t("(Optional)")}</Text>
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
                <TouchableOpacity
                  style={[styles.buttonpillTypepillIconf, styles.rectangleLayout]}
                  activeOpacity={0.0}
                  onPress={handleGeneratePress}
                >
                  <Text style={[styles.button, styles.textLayout]}>{t('Generate')}</Text>
                </TouchableOpacity>
              </View>
              <View style={[styles.darkDiscover,{ backgroundColor: theme.background }]}>
                <Text style={[styles.title1, styles.titleTypo, { color: theme.text }]}>{t('Discover Prompts')}</Text>
                <View style={[styles.autoLayoutVertical311, styles.autoLayoutVerticalPosition]}>
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
        style={[styles.activeMenudiscoverDarktru,styles.autoLayoutVerticalPosition,{ backgroundColor: theme.background }]}>
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
              source={isDarkMode ? require("../assets/Home.png") : require("../assets/HomeLight.png")}
            />
            <Text style={[styles.home, styles.homeTypo, { color: theme.icontext }]}>{t('Home')}</Text>
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
              source={require("../assets/iconlyregularoutlineprofile.png")}
            />
            <Text style={[styles.discover, styles.homeTypo]}>{t('Profile')}</Text>
          </TouchableOpacity>
        </View>

      </View>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  autoLayoutVertical31: {
    alignSelf: "stretch",
    marginTop: "5%",
    bottom:0,
  },
  activeMenudiscoverDarktru: {
    bottom: "0%",
    paddingTop: Padding.p_5xs,
    alignItems: "center",
    paddingBottom: Padding.p_5xs,
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
  typelogoDefaultComponentlLayout: {
    height: 28,
    width: 28,
  },
  titleTypo: {
    color: Color.skyWhite,
    lineHeight: 38,
    fontSize: FontSize.h4Bold_size,
    fontFamily: FontFamily.bodyXSmallBold,
    fontWeight: "700",
  },
  autoFlexBox1: {
    width: 105,
    alignItems: "center",
    flexDirection: "row",
    marginRight: "5%"
  },
  autoLayoutHorizontal3FlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  autoFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  textTypo: {
    fontFamily: FontFamily.bodyMediumSemibold,
    fontWeight: "600",
  },
  autoSpaceBlock: {
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
  viewClr: {
    color: '#6949ff',
    letterSpacing: 0,
  },
  selectedText: {
    color: 'white',
  },
  selectedBackground: {
    backgroundColor: '#6949ff',
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
  tickIcon: {
    position: "absolute",
    width: 40,
    height: 40,
    alignSelf: "center",
    top: "50%",
    transform: [{ translateY: -20 }],
    tintColor: "white",
  },
  selectedArtStyleText: {
    color: Color.primary900,
  },
  autoLayoutVertical6FlexBox: {
    padding: Padding.p_base,
    justifyContent: "center",
    alignItems: "center",
  },
  maskGroupIcon4Layout: {
    height: 150,
    width: 150,
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
  textViewLayout: {
    lineHeight: 26,
    fontSize: FontSize.bodyLargeBold_size,
  },
  typelogoDefaultComponentl: {
    borderRadius: Border.br_341xl,
    marginLeft: "12%",
  },
  title: {
    marginLeft: 16,
    textAlign: "center",
    flex: 1,
  },
  iconcrownComponentaddition: {
    height: 14,
    width: 14,
    overflow: "hidden",
  },
  pro: {
    marginLeft: 4,
    lineHeight: 22,
    fontSize: FontSize.bodyMediumMedium_size,
    fontWeight: "600",
    letterSpacing: 0,
    color: Color.skyWhite,
    textAlign: "center",
  },
  autoLayoutHorizontal2: {
    backgroundColor: Color.primary900,
    paddingHorizontal: 12,
    paddingVertical: Padding.p_9xs,
    borderRadius: Border.br_81xl,
    marginLeft: 56,
  },
  autoLayoutHorizontal1: {
    marginLeft: "5%",
    textAlign: "center",
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
    justifyContent: "center",
    paddingHorizontal: 15,
    paddingVertical: 0,
    alignItems: "center",
  },
  autoLayoutHorizontal33: {
    alignItems: "center",
    flex: 1,
  },
  viewAll: {
    lineHeight: 26,
    fontSize: FontSize.bodyLargeBold_size,
    marginLeft: 8,
    textAlign: "left",
    fontFamily: FontFamily.bodyXSmallBold,
    fontWeight: "700",
  },
  iconlyregularoutlinearrow: {
    marginLeft: 8,
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
    height: "12%"
  },
  title2: {
    textAlign: "left",
    flex: 1,
  },
  selectedRectangleBorder: {
    borderColor: 'white',
    borderWidth: 2,
  },
  text: {
    marginLeft: 12,
    lineHeight: 26,
    fontSize: 16,
    fontFamily: FontFamily.bodyMediumSemibold,
    fontWeight: "600",
    textAlign: "center",
  },
  aspectRatio916Selected: {
    height: 23,
    width: 14,
  },
  aspectRatio169Selected: {
    width: 23,
    height: 14,
  },
  aspectRatio34Selected: {
    width: 16,
    height: 21,
  },
  aspectRatio43Selected: {
    width: 21,
    height: 16,
  },
  aspectRatio23Selected: {
    width: 16,
    height: 23,
  },
  aspectRatio32Selected: {
    width: 23,
    height: 16,
  },
  rectangle2: {
    width: 23,
    height: 14,
  },
  autoLayoutHorizontal4: {
    width: "100%",
  },
  autoLayoutVertical3: {
    alignSelf: "stretch",
  },
  informationDetails1: {
    marginLeft: 8,
  },
  maskGroupIcon: {
    flex: 1,
    borderRadius: 10,
  },
  style: {
    marginTop: 10,
    lineHeight: 29,
    fontSize: FontSize.bodyXLargeBold_size,
    textAlign: "center",
    //color: Color.skyWhite,
    fontFamily: FontFamily.bodyXSmallBold,
    fontWeight: "700",
    alignSelf: "stretch",
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
  autoLayoutHorizontal21: {
    marginTop: "1%",
    alignSelf: "stretch",
    flex: 1,
  },
  autoLayoutHorizontal2Content: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  autoLayoutVerticalPosition: {
    left: 0,
    right: 0,
    position: "absolute",
  },
  home: {
    fontFamily: FontFamily.bodyXSmallBold,
    fontWeight: "700",
  },
  autoLayoutVertical7: {
    alignItems: "center",
    flex: 1,
  },
  discover: {
    fontWeight: "500",
    fontFamily: FontFamily.bodyXSmallMedium,
    color: Color.greyscale500,
  },
  autoLayoutVertical8: {
    marginLeft: 19,
    alignItems: "center",
    flex: 1,
  },
  button: {
    letterSpacing: 0,
    color: Color.skyWhite,
    textAlign: "center",
    fontFamily: FontFamily.bodyXSmallBold,
    fontWeight: "700",
    alignSelf: "stretch",
  },
  buttonpillTypepillIconf: {
    right: 0,
    bottom: 0,

    left: 0,
    backgroundColor: Color.alertsStatusButtonDisabled,
    borderRadius: Border.br_81xl,
    // position: "absolute",
    padding: Padding.p_base,
  },
  rectangleBorder: {
    borderColor: Color.primary900,
    borderWidth: 2,
  },
  aspectRatio11: {
    height: 18,
    width: 18,
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
    width: "100%",
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
  autoLayoutVertical311: {
    paddingHorizontal: 8,
    paddingVertical: 34,
    width: "100%",
    alignItems: "center",
  },
  homeScreen: {
    height: 1750,
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default HomeScreen;