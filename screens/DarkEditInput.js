import React, { useState } from "react";
import { Image, StyleSheet, Dimensions, ScrollView, TextInput, View, Text, TouchableOpacity, Alert } from "react-native";
import Modal from "react-native-modal";
import { BlurView } from "@react-native-community/blur";
import { useNavigation } from "@react-navigation/native";
import Slider from "@react-native-community/slider";
import { Color, FontSize, FontFamily, Padding, Border } from "../GlobalStyles";
import { BallIndicator } from 'react-native-indicators';
import { generateImage, uploadImageGeneration } from '../helper';
import { useTheme } from "../context/ThemeContext";
import { useTranslation } from 'react-i18next';


const buttons = [
  { label: "1 : 1", ratio: "1:1", key: "aspectRatio11" },
  { label: "9 : 16", ratio: "9:16", key: "aspectRatio916" },
  { label: "16 : 9", ratio: "16:9", key: "aspectRatio169" },
  { label: "3 : 4", ratio: "3:4", key: "aspectRatio34" },
  { label: "4 : 3", ratio: "4:3", key: "aspectRatio43" },
  { label: "2 : 3", ratio: "2:3", key: "aspectRatio23" },
  { label: "3 : 2", ratio: "3:2", key: "aspectRatio32" },
];

const { width } = Dimensions.get("window");

const DarkEditInput = ({ isVisible, onClose, onDataChange, promptt }) => {
  const navigation = useNavigation();
  const { t } = useTranslation();
  const { theme, toggleTheme, isDarkMode } = useTheme();
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [cfgScale, setCfgScale] = useState(9);
  const [seedValue, setSeedValue] = useState('');
  const [prompt, setPrompt] = useState(promptt);
  const [loading, setLoading] = useState(false);
  const [loadingText, setLoadingText] = useState("");

  const selectedImage = '';
  const type = '';
  const strength = '';
  const control = '';
  const steps = '';
  const cfg = '';
  const style_id = 28;




  const handlePress = (index) => {
    setSelectedIndex(index);
  };

  const handleSeedChange = (value) => {
    const parsedValue = parseInt(value, 10);
    if (!isNaN(parsedValue) && parsedValue > 0) {
      setSeedValue(value);
    } else {
      Alert.alert(t("Invalid Input"), t("Please Enter positive number."));
    }
  };

  const handleSave = () => {
    onDataChange(prompt);
  };

  const handleGeneration = async () => {
    // setLoading(true)
    // setLoadingText("Please wait, regenerating...");

    // console.log("i ammmm inn thee helo")
    // const ImageSrc = await generateImage(prompt,style_id)
    // console.log(ImageSrc)
    // setLoading(false)
    onClose();
    onEditInput(prompt);

    // navigation.navigate('GeneratingArtwork', { ImageSrc, prompt, style_id, selectedImage,type,strength,cfg,control });
  };

  return (

    <Modal
      animationIn={"bounce"}
      isVisible={isVisible}
      onBackdropPress={onClose}
      deviceWidth={width}
      style={styles.modal}
    >
     
      <View style={styles.blurContainer}>
        <BlurView blurType="dark" blurAmount={5}>
        <ScrollView style={[styles.container, { backgroundColor: theme.background }]} showsVerticalScrollIndicator={false}>

          <View style={[styles.rectangle, styles.rectanglePosition, { backgroundColor: theme.background }]} />
            <View style={styles.darkEditInput}>
              <View style={[styles.rectangle, styles.text8Position]} />
              <Text style={[styles.editInput1, styles.inputSpaceBlock1, { color: theme.text }]}>
                {t('Edit Input')}
              </Text>
              <Image
                style={[styles.darktrueComponentdividerIcon, styles.artworkLayout]}
                resizeMode="cover"
                source={require("../assets/darktrue-componentdivider4.png")}
              />
                <View style={styles.inputSpaceBlock1}>
                  <View style={styles.autoLayoutVertical1}>
                    <View style={styles.autoLayoutHorizontal1FlexBox}>
                      <Text style={[styles.title1, styles.title1Typo, { color: theme.text }]}>
                        {t('Edit Prompt')}
                      </Text>
                    </View>
                    <TextInput
                      style={[styles.inputFormtextAreaStatefi, styles.inputSpaceBlock, 
                    { color: theme.text },{ backgroundColor: theme.promptbackground }]}
                      autoCapitalize="none"
                      multiline={true}
                      placeholderTextColor="#fff"
                        onChangeText={setPrompt}
                      value={prompt}
                    />
                  </View>
                  <View style={styles.autoLayoutVertical14}>
                    <View style={styles.autoLayoutHorizontal1FlexBox}>
                      <Text style={[styles.title1, styles.title1Typo, { color: theme.text }]}>
                        {t('Add Negative Prompt')}
                      </Text>
                    </View>
                    <TextInput
                      style={[styles.inputFormtextAreaStatefi1, styles.inputSpaceBlock, 
                    { color: theme.text },{ backgroundColor: theme.promptbackground },{ textAlignVertical: "top" }]}
                      autoCapitalize="none"
                      multiline={true}
                      placeholderTextColor="#fff"
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
                  <View style={styles.autoLayoutVertical14}>
                    <View style={styles.autoLayoutHorizontal1FlexBox}>
                      <Text style={[styles.title1, styles.title1Typo, { color: theme.text }]}>
                        {t('CFG Scale')}
                      </Text>
                    </View>
                    <View style={styles.sliderContainer}>
                      <Slider
                        style={styles.slider}
                        minimumValue={1}
                        maximumValue={15}
                        value={cfgScale}
                        onValueChange={setCfgScale}
                        minimumTrackTintColor="#6949ff"
                        maximumTrackTintColor="#23252B"
                        thumbTintColor="#6949ff"
                      />
                      <Text style={styles.sliderValue}>{Math.round(cfgScale)}</Text>
                    </View>
                  </View>
                  <View style={styles.autoLayoutVertical14}>
                    <View style={styles.autoLayoutHorizontal1FlexBox}>
                      <Text style={[styles.title1, styles.title1Typo, { color: theme.text }]}>{t('Seed')}</Text>
                    </View>
                    <TextInput
                      style={[styles.inputFormtextAreaStatefi, styles.inputSpaceBlock, 
                    { color: theme.text },{ backgroundColor: theme.promptbackground }]}
                      keyboardType="numeric"
                      placeholderTextColor="#fff"
                        value={seedValue}
                      onChangeText={handleSeedChange}
                    />
                  </View>
                  <View
                    style={[
                      styles.button2ButtonsDarktrueC,
                      styles.autoLayoutVertical12Position, { backgroundColor: theme.background }
                    ]}
                  >
                    <View style={[styles.autoLayoutHorizontal41, styles.autoFlexBox1]}>
                      <TouchableOpacity
                        style={[
                          { backgroundColor: theme.promptbackground },
                          styles.buttonpillFlexBox,
                        ]}
                        activeOpacity={0.0}
                        onPress={onClose}
                      >
                        <Text style={[styles.button, styles.buttonTypo, { color: theme.canceltext }]}>{t('Cancel')}</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={[
                          styles.buttonpillTypepillIconf1,
                          styles.buttonpillFlexBox,
                        ]}
                        activeOpacity={0.0}
                        onPress={handleSave}
                      >
                        <Text style={[styles.button, styles.buttonTypo]}>{t('Generate')}</Text>
                      </TouchableOpacity>
                    </View>
                </View>
                </View>
              </View>
          </ScrollView>



        </BlurView>
      </View>
      {loading && (
        <View style={styles.loadingOverlay}>
          <BallIndicator
            style={styles.indicator}
            animating={loading}
            size={50}
            color="#6949FF"
          />
          <Text style={styles.loadingText}>{loadingText}</Text>
        </View>
      )}
    </Modal>
  );
};
const styles = StyleSheet.create({
  container: {
    borderRadius: 40,
    paddingHorizontal:17
  },
  loadingOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 10,
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  indicator: {
    top: "40%",
    position: "absolute",
    left: "50%",
    right: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    margin: 0,
    justifyContent: "flex-end",
    backgroundColor: "transparent"
  },
  blurContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    top: "20%",
    width: "auto",
  },
  autoLayoutVertical12Content: {
    flexDirection: "column",
    paddingHorizontal: 24,
    paddingTop: 8,
    paddingBottom: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  autoFlexBox1: {
    justifyContent: "center",
    alignItems: "center",
  },
  title1Typo: {
    lineHeight: 32,
    fontSize: FontSize.h5Semibold_size,
    fontFamily: FontFamily.bodyXSmallBold,
    fontWeight: "700",
  },
  inputSpaceBlock1: {
    marginTop: 24,
    alignSelf: "stretch",
    paddingHorizontal: 20,
  },
  artworkLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    width: "100%",
  },
  autoLayoutHorizontal1FlexBox: {
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  text8Position: {
    position: "absolute",
  },
  autoLayoutVertical12Position: {
    borderColor: Color.colorDarkslategray_200,
    borderStyle: "solid",
    left: 0,
    right: 0,
  },
  buttonpillFlexBox: {
    padding: Padding.p_base,
    borderRadius: Border.br_81xl,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  buttonTypo: {
    lineHeight: 26,
    fontSize: FontSize.bodyLargeBold_size,
    letterSpacing: 0,
    fontFamily: FontFamily.bodyXSmallBold,
    fontWeight: "700",
  },
  inputSpaceBlock: {
    marginTop: 12,
    alignSelf: "stretch",
  },
  rectanglePosition: {
    height: 6,
    top: 41,
    borderRadius: 50,
    left: 0,
    position: "absolute",
  },
  group1Layout: {
    height: 25,
    top: 0,
    width: 28,
    position: "absolute",
  },
  autoLayoutVertical3: {
    marginTop: "2%",
    alignSelf: "stretch",
  },
  elementssection3Darktrue: {
    alignItems: "center",
    alignSelf: "stretch",
  },
  autoLayoutHorizontal3FlexBox: {
    flexDirection: "row",
    height: 48,
    alignItems: "center",
    alignSelf: "stretch",
  },
  title2: {
    textAlign: "left",
    flex: 1,
  },
  titleTypo: {
    color: Color.skyWhite,
    lineHeight: 38,
    fontSize: FontSize.h4Bold_size,
    fontFamily: FontFamily.bodyXSmallBold,
    fontWeight: "700",
  },
  iconlyregularoutlinearrow: {
    marginLeft: 8,
  },
  iconlyregularoutlinearrowLayout: {
    height: 24,
    width: 24,
  },
  autoLayoutHorizontal4: {
    width: "100%",
  },
  autoLayoutHorizontal41: {
    flexDirection: "row",
    alignSelf: "stretch",
  },
  autoSpaceBlock: {
    alignSelf: "stretch",
    marginTop: "1%",
  },
  autoLayoutHorizontal4Content: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
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
  text: {
    marginLeft: 8,
    textAlign: "left",
    color: Color.skyWhite,
  },
  rectangle: {
    bottom: 0,
  },
  button: {
    textAlign: "center",
    color: Color.skyWhite,
    alignSelf: "stretch",
  },
  buttonpillTypepillIconf1: {
    marginLeft: 16,
    backgroundColor: Color.primary900,
  },
  button2ButtonsDarktrueC: {
    paddingTop: Padding.p_5xl,
    paddingBottom: Padding.p_17xl,
    marginTop: 20,
    paddingHorizontal: Padding.p_5xl,
  },
  editInput1: {
    textAlign: "center",
    color: Color.skyWhite,
    fontFamily: FontFamily.bodyXSmallBold,
    fontWeight: "700",
    lineHeight: 38,
    fontSize: FontSize.h4Bold_size,
  },
  darktrueComponentdividerIcon: {
    marginTop: 24,
    alignSelf: "stretch",
  },
  title1: {
    textAlign: "left",
    color: Color.skyWhite,
    flex: 1,
  },
  inputFormtextAreaStatefi: {
    fontSize: FontSize.bodyXLargeBold_size,
    marginTop: 12,
    fontFamily: FontFamily.bodyMediumSemibold,
    fontWeight: "600",
    borderRadius: 15,
    padding: 10,
  },
  inputFormtextAreaStatefi1: {
    height: 130,
    fontSize: FontSize.bodyXLargeBold_size,
    marginTop: 12,
    fontFamily: FontFamily.bodyMediumSemibold,
    fontWeight: "600",
    backgroundColor: "#23252B",
    borderRadius: 15,
    padding: 10,
  },
  autoLayoutVertical14: {
    marginTop: 24,
    alignSelf: "stretch",
  },
  sliderContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 12,
  },
  slider: {
    flex: 1,
  },
  sliderValue: {
    marginLeft: 10,
    color: "white",
    fontSize: FontSize.bodyXLargeBold_size,
  },
  autoLayoutVertical12: {
    top: 144,
    borderTopLeftRadius: Border.br_9xl,
    borderTopRightRadius: Border.br_9xl,
    borderWidth: 1,
    overflow: "hidden",
    flex: 1,
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
  darkEditInput: {
    height: 1000,
    width: "100%",
    flex: 1,
    borderRadius: 50,
  },
});

export default DarkEditInput;