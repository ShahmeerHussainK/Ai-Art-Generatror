import React, { useState } from "react";
import {
  Pressable,
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Alert,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { BallIndicator } from "react-native-indicators";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Padding, Border } from "../GlobalStyles";
import { Buffer } from "buffer";
import { BlurView } from "@react-native-community/blur";
import { useTranslation } from "react-i18next";
import { useTheme } from "../context/ThemeContext";

const buttons = [
  { label: "1 : 1", ratio: "1:1", key: "aspectRatio11" },
  { label: "9 : 16", ratio: "9:16", key: "aspectRatio916" },
  { label: "16 : 9", ratio: "16:9", key: "aspectRatio169" },
  { label: "3 : 4", ratio: "3:4", key: "aspectRatio34" },
  { label: "4 : 3", ratio: "4:3", key: "aspectRatio43" },
  { label: "2 : 3", ratio: "2:3", key: "aspectRatio23" },
  { label: "3 : 2", ratio: "3:2", key: "aspectRatio32" },
];

const backgroundImagesRow1 = [
  require("../assets/frame41.png"),
  require("../assets/frame42.png"),
  require("../assets/frame43.png"),
  require("../assets/frame29.png"),
  require("../assets/frame32.png"),
];

const backgroundImagesRow2 = [
  require("../assets/frame33.png"),
  require("../assets/frame34.png"),
  require("../assets/frame35.png"),
  require("../assets/frame36.png"),
  require("../assets/frame37.png"),
];

const DarkLogoGenerator = () => {
  const { t } = useTranslation();
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [prompt, setPrompt] = useState("");
  const [selectedBgImage, setSelectedBgImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const { theme, toggleTheme, isDarkMode } = useTheme();
  const [loadingText, setLoadingText] = useState("");
  const navigation = useNavigation();
  const style_id = 28;
  const selectedImage = "";
  const type = "";
  const strength = "";
  const control = "";
  const steps = "";
  const cfg = "";

  const handlePress = (index) => {
    setSelectedIndex(index);
  };

  const handleBgImagePress = (index) => {
    setSelectedBgImage(index);
  };

  const handleNavigate = () => {
    setLoading(true);
    setLoadingText(t("Please wait, generating..."));
    generateLogo();
  };

  const handleRegenerate = () => {
    if (!prompt) {
      Alert.alert(
        t("Enter Prompt"),
        t("Please enter a prompt to generate art.")
      );
    } else {
      handleNavigate();
    }
  };

  const generateLogo = async () => {
    try {
      setLoading(true);
      let newPrompt = prompt + " logo";
      console.log(newPrompt);
      console.log("heyy");
      let headers = new Headers();
      headers.append(
        "Authorization",
        "replace your Token"
      );
      let formdata = new FormData();
      formdata.append("prompt", newPrompt);
      formdata.append("style_id", "28");

      let requestOptions = {
        method: "POST",
        body: formdata,
        headers: headers,
      };

      fetch("https://api.vyro.ai/v1/imagine/api/generations", requestOptions)
        .then((response) => response.arrayBuffer())
        .then((result) => {
          const base64 = Buffer.from(result, "binary").toString("base64");
          const asImageSrc = `data:image/png;base64,${base64}`;
          setLoading(false);
          navigation.navigate("GeneratingArtwork", {
            asImageSrc,
            prompt: prompt + "logo",
            style_id,
            selectedImage,
            type,
            strength,
            cfg,
            control,
          });
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    } catch (error) {
      console.error("Error generating image:", error);
    } finally {
    }
  };

  return (
    <View
      style={[styles.DarkLogoGenerator, { backgroundColor: theme.background }]}
    >
      <View style={[styles.navbardefaultDarktrueCom, styles.darktrueFlexBox]}>
        <Pressable style={styles.autoLayoutHorizontal}>
          <Pressable
            style={[styles.goback, styles.gobackLayout]}
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
        <Text
          style={[styles.titleSection, styles.titleTypo, { color: theme.text }]}
        >
          {t("Logo Generator")} {/* Translate title */}
        </Text>
        <Image
          style={[styles.autoLayoutHorizontal1, styles.gobackLayout]}
          resizeMode="cover"
        />
      </View>
      <ScrollView>
        <View
          style={[
            styles.DarkLogoGenerator,
            { backgroundColor: theme.background },
          ]}
        >
          <View style={styles.autoLayoutVertical}>
            <ScrollView
              style={[styles.autoLayoutVertical1, styles.autoSpaceBlock]}
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.autoLayoutVerticalContent}
            >
              <View style={styles.autoLayoutVertical2}>
                <View
                  style={[
                    styles.elementssection3Darktrue,
                    styles.darktrueFlexBox,
                  ]}
                >
                  <View
                    style={[
                      styles.autoLayoutHorizontal2,
                      styles.darktrueFlexBox,
                    ]}
                  >
                    <Text
                      style={[
                        styles.title,
                        styles.titleTypo,
                        { color: theme.text },
                      ]}
                    >
                      {t("Enter Prompt")}
                    </Text>
                  </View>
                </View>
                <TextInput
                  style={[
                    styles.inputFormtextAreaStatede,
                    styles.autoLayoutHorizontal3SpaceBlock,
                    {
                      textAlignVertical: "top",
                      paddingLeft: 10,
                      borderRadius: 5,
                    },
                    { color: theme.text },
                    { backgroundColor: theme.promptbackground },
                  ]}
                  placeholder={t("Type the logo you want to generate")}
                  autoCapitalize="none"
                  multiline={true}
                  placeholderTextColor="#9e9e9e"
                  onChangeText={setPrompt}
                  value={prompt}
                />
              </View>
              <View style={styles.autoLayoutVertical3}>
                <View style={[styles.elementssection3Darktrue]}>
                  <Text style={[styles.titleTypo, { color: theme.text }]}>
                    {t("Aspect Ratio")} {/* Translate label */}
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
              <View style={styles.autoSpaceBlock}>
                <View
                  style={[
                    styles.elementssection3Darktrue,
                    styles.darktrueFlexBox,
                  ]}
                >
                  <View
                    style={[
                      styles.autoLayoutHorizontal2,
                      styles.darktrueFlexBox,
                    ]}
                  >
                    <Text
                      style={[
                        styles.title,
                        styles.titleTypo,
                        { color: theme.text },
                      ]}
                    >
                      {t("Background Color")} {/* Translate label */}
                    </Text>
                  </View>
                </View>
                <ScrollView
                  style={[styles.autoLayoutHorizontal4, styles.autoSpaceBlock]}
                  horizontal={true}
                  showsVerticalScrollIndicator={false}
                  showsHorizontalScrollIndicator={false}
                  contentContainerStyle={styles.autoLayoutHorizontal4Content}
                >
                  {backgroundImagesRow1.map((image, index) => (
                    <TouchableOpacity
                      key={index}
                      style={[
                        styles.frameIconLayout,
                        styles.aspectBoxSpacing,
                        index === selectedBgImage && styles.selectedBgBorder,
                      ]}
                      onPress={() => handleBgImagePress(index)}
                    >
                      <Image
                        style={styles.frameIconLayout}
                        resizeMode="cover"
                        source={image}
                      />
                    </TouchableOpacity>
                  ))}
                </ScrollView>
                <ScrollView
                  style={[
                    styles.autoLayoutHorizontal3,
                    styles.autoLayoutHorizontal3SpaceBlock,
                  ]}
                  horizontal={true}
                  showsVerticalScrollIndicator={false}
                  showsHorizontalScrollIndicator={false}
                  contentContainerStyle={styles.autoLayoutHorizontal6Content}
                >
                  {backgroundImagesRow2.map((image, index) => (
                    <TouchableOpacity
                      key={index + backgroundImagesRow1.length}
                      style={[
                        styles.frameIconLayout,
                        styles.aspectBoxSpacing,
                        index + backgroundImagesRow1.length ===
                          selectedBgImage && styles.selectedBgBorder,
                      ]}
                      onPress={() =>
                        handleBgImagePress(index + backgroundImagesRow1.length)
                      }
                    >
                      <Image
                        style={styles.frameIconLayout}
                        resizeMode="cover"
                        source={image}
                      />
                    </TouchableOpacity>
                  ))}
                </ScrollView>
              </View>
            </ScrollView>
          </View>
        </View>
      </ScrollView>
      {loading && (
        <View style={styles.loadingOverlay}>
          <BlurView style={styles.absolute} blurType="dark" blurAmount={5} />
          <BallIndicator
            style={styles.indicator}
            animating={loading}
            size={50}
            color="#6949FF"
          />
          <Text style={styles.loadingText}>{loadingText}</Text>
        </View>
      )}
      <View
        style={[
          styles.buttonprimaryDarktrueCom,
          { backgroundColor: theme.background },
          styles.autoLayoutVerticalPosition,
        ]}
      >
        <TouchableOpacity
          style={[styles.buttonpillTypepillIconf, styles.rectangleLayout]}
          activeOpacity={0.0}
          onPress={handleRegenerate}
        >
          <Text style={[styles.button, styles.textLayout]}>
            {t("Generate")} {/* Translate button label */}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textLayout: {
    lineHeight: 26,
    fontSize: FontSize.bodyLargeBold_size,
    letterSpacing: 0,
  },
  loadingText: {
    color: Color.skyWhite,
    marginTop: 10,
    fontSize: FontSize.bodyLargeBold_size,
    fontFamily: FontFamily.bodyXSmallBold,
    fontWeight: "bold",
  },
  indicator: {
    top: "40%",
    position: "absolute",
    left: "50%",
    right: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  loadingOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  absolute: {
    ...StyleSheet.absoluteFillObject,
  },
  autoLayoutHorizontal6Content: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  autoLayoutVerticalContent: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  darktrueFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  gobackLayout: {
    height: 28,
    width: 28,
  },
  titleTypo: {
    fontFamily: FontFamily.bodyXSmallBold,
    fontWeight: "700",
    lineHeight: 38,
    fontSize: FontSize.h4Bold_size,
    color: Color.skyWhite,
  },
  autoSpaceBlock: {
    marginTop: "1%",
    alignSelf: "stretch",
  },
  autoLayoutHorizontal3SpaceBlock: {
    marginTop: 20,
    alignSelf: "stretch",
  },
  aspectBorder: {
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_xl,
    justifyContent: "center",
    borderWidth: 2,
    borderColor: Color.primary900,
    borderStyle: "solid",
    borderRadius: Border.br_81xl,
    alignItems: "center",
    flexDirection: "row",
  },
  rectangleBorder: {
    height: 16,
    borderWidth: 2,
    borderColor: Color.primary900,
    borderStyle: "solid",
  },
  frameIconLayout: {
    height: 64,
    maxWidth: "100%",
    borderRadius: 10,
    overflow: "hidden",
    flex: 1,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  goback: {
    marginLeft: "75%",
  },
  autoLayoutHorizontal: {
    width: 28,
    alignItems: "center",
    flexDirection: "row",
  },
  titleSection: {
    textAlign: "center",
    color: Color.skyWhite,
    marginLeft: 16,
    flex: 1,
  },
  autoLayoutHorizontal1: {
    marginLeft: 16,
  },
  navbardefaultDarktrueCom: {
    height: 48,
    paddingHorizontal: 0,
    alignSelf: "stretch",
  },
  title: {
    textAlign: "left",
    color: Color.skyWhite,
  },
  autoLayoutHorizontal2: {
    flex: 1,
  },
  iconlyregularoutlinearrow: {
    marginLeft: 8,
    display: "none",
  },
  elementssection3Darktrue: {
    alignSelf: "stretch",
  },
  inputFormtextAreaStatede: {
    fontFamily: FontFamily.bodySmallRegular,
    fontSize: FontSize.bodyXLargeBold_size,
    marginTop: 20,
    height: 250,
  },
  autoLayoutVertical2: {
    alignSelf: "stretch",
  },
  text: {
    marginLeft: 12,
    color: Color.primary900,
    textAlign: "center",
  },
  autoLayoutHorizontal3: {
    width: "100%",
  },
  frameIcon1: {
    marginLeft: 16,
  },
  autoLayoutVertical1: {
    flex: 1,
  },
  autoLayoutVertical: {
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_5xl,
    left: 0,
    right: 0,
    position: "absolute",
  },
  button: {
    textAlign: "center",
    color: Color.skyWhite,
    fontFamily: FontFamily.bodyXSmallBold,
    fontWeight: "700",
    alignSelf: "stretch",
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
  buttonprimaryDarktrueCom: {
    bottom: 0,
    borderStyle: "solid",
    borderColor: Color.colorDarkslategray_200,
    paddingTop: Padding.p_5xl,
    paddingBottom: Padding.p_17xl,
  },
  autoLayoutVerticalPosition: {
    paddingHorizontal: Padding.p_5xl,
    left: 0,
    right: 0,
    position: "absolute",
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
  viewClr: {
    color: "#6949ff",
    letterSpacing: 0,
  },
  aspectBoxSpacing: {
    marginRight: 10,
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
  autoLayoutHorizontal4: {
    width: "100%",
  },
  autoLayoutVertical3: {
    marginTop: "1%",
    alignSelf: "stretch",
  },
  autoLayoutHorizontal4Content: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  selectedBgBorder: {
    borderColor: Color.primary900,
    borderWidth: 2,
  },
  loadingContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  blurView: {
    ...StyleSheet.absoluteFillObject,
  },
  DarkLogoGenerator: {
    height: 800,
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default DarkLogoGenerator;
