import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Pressable,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Padding, FontFamily, FontSize, Border, Color } from "../GlobalStyles";
import DarkDownloadArtwork from "./DarkDownloadArtwork";
import ShareToFeedSuccessful from "./ShareToFeedSuccessful";
import { useTranslation } from 'react-i18next';
import { useTheme } from "../context/ThemeContext";

const FinalizeArtwork = ({route}) => {
  const { t } = useTranslation();
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();
  const { imageUrl } = route.params;
  const [isModalVisible, setModalVisible1] = useState(false);
  const { theme, toggleTheme, isDarkMode } = useTheme();

  const handleCloseModal = () => {
    setModalVisible1(false);
  };
  const toggleModal = async () => {
    
    console.log("toggling modal")
    setModalVisible1(true); 
  };

  return (
    <View style={[styles.darkBatchArtGeneratorFina, { backgroundColor: theme.background }]}>
      <View
        style={[styles.autoLayoutVertical, styles.autoLayoutVerticalPosition]}
      >
        <View style={[styles.navbardefaultDarktrueCom, styles.darktrueFlexBox]}>
          <View style={styles.autoLayoutHorizontal}>
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
                source={isDarkMode ? require("../assets/iconlyregularoutlinearrow--left1.png") : require("../assets/blackarrow.png")}
              />
            </Pressable>
          </View>
          <Text style={[styles.titleSection, styles.buttonTypo,  { color: theme.text }]}>{t('Finalize')}</Text>
          <Image
            style={[styles.autoLayoutHorizontal1, styles.gobackLayout]}
            resizeMode="cover"
            source={require("../assets/auto-layout-horizontal.png")}
          />
        </View>
        <View style={styles.elementsfinalizeArtwork1}>
          <Image
            style={styles.artworkRatio11ArtworkS}
            resizeMode="contain"
            source={{ uri: imageUrl }}
            />
          <View style={styles.elementsfinalizeArtwork1}>
            <View
              style={[styles.elementssection4Darktrue, styles.darktrueFlexBox]}
            >
              <View
                style={[styles.autoLayoutHorizontal2, styles.darktrueFlexBox]}
              >
                <Text style={[styles.title, styles.titleTypo,  { color: theme.text }]}>{t('Add Title')}</Text>
              </View>
            </View>
            <View style={styles.inputSpaceBlock}>
              <TextInput
                style={[styles.autoLayoutHorizontal3, styles.autoSpaceBlock, 
                { color: theme.text },{ backgroundColor: theme.promptbackground }]}
                placeholder="Enter Title"
                placeholderTextColor="#757575"
              />
            </View>
          </View>
        </View>
      </View>
      <View
        style={[
          styles.button2ButtonsDarktrueC, { backgroundColor: theme.background },
          styles.autoLayoutVerticalPosition,
        ]}
      >
        <View style={styles.autoFlexBox}>
        <TouchableOpacity
            style={[{ backgroundColor: theme.promptbackground }, styles.buttonpillFlexBox]}
            activeOpacity={0.0}
            onPress={() => setModalVisible(true)}
          >
            <Text style={[styles.button, styles.textLayout, { color: theme.canceltext }]}>{t('Download Art')}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.buttonpillTypepillIconf1, styles.buttonpillFlexBox]}
            activeOpacity={0.0}
            onPress={toggleModal}
          >
            <Text style={[styles.button, styles.textLayout]}>{t('Share to Feed')}</Text>
          </TouchableOpacity>
        </View>
      </View>
      <DarkDownloadArtwork
        isVisible={modalVisible}
        onClose={() => setModalVisible(false)}
      />
      <ShareToFeedSuccessful isVisible={isModalVisible}  onClose={handleCloseModal} />
    </View>
  );
};

const styles = StyleSheet.create({
  autoLayoutVerticalPosition: {
    paddingHorizontal: Padding.p_5xl,
    left: 0,
    right: 0,
    position: "absolute",
  },
  darktrueFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  gobackLayout: {
    height: 28,
    width: 28,
  },
  buttonTypo: {
    textAlign: "center",
    fontFamily: FontFamily.bodyXSmallBold,
    fontWeight: "700",
  },
  titleTypo: {
    fontFamily: FontFamily.bodyXSmallBold,
    fontWeight: "700",
  },
  informationTypo: {
    marginLeft: 8,
    lineHeight: 26,
    letterSpacing: 0,
    fontSize: FontSize.bodyLargeBold_size,
    textAlign: "left",
  },
  inputTypo: {
    fontFamily: FontFamily.bodyMediumSemibold,
    fontWeight: "600",
  },
  autoSpaceBlock: {
    marginTop: 8,
    paddingVertical: Padding.p_lg,
    paddingHorizontal: Padding.p_xl,
    borderRadius: Border.br_xs,
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  buttonpillFlexBox: {
    padding: Padding.p_base,
    borderRadius: Border.br_81xl,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  textLayout: {
    lineHeight: 26,
    letterSpacing: 0,
    fontSize: FontSize.bodyLargeBold_size,
    color: Color.skyWhite,
  },
  autoFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  typelogoDefaultComponentl: {
    borderRadius: Border.br_341xl,
    display: "none",
  },
  icon: {
    height: "100%",
    width: "100%",
    bottom: "30%"
  },
  autoLayoutHorizontal: {
    width: 28,
    alignItems: "center",
    flexDirection: "row",
  },
  titleSection: {
    fontSize: FontSize.h4Bold_size,
    color: Color.skyWhite,
    marginLeft: 16,
    flex: 1,
    marginBottom: "7%"
  },
  autoLayoutHorizontal1: {
    marginLeft: 16,
  },
  navbardefaultDarktrueCom: {
    height: 48,
    paddingHorizontal: 0,
    alignSelf: "stretch",
  },
  artworkRatio11ArtworkS: {
    borderRadius: Border.br_xl,
    width: "100%",
    height: "100%",
    alignSelf: "stretch",
    overflow: "hidden",
    width: "100%",
  },
  title: {
    fontSize: FontSize.h5Semibold_size,
    lineHeight: 32,
    textAlign: "left",
    color: Color.skyWhite,
    marginLeft: "1%"
  },
  informationDetails: {
    color: Color.greyscale300,
    fontFamily: FontFamily.bodySmallRegular,
    marginLeft: 8,
    flex: 1,
  },
  autoLayoutHorizontal2: {
    flex: 1,
  },
  elementssection4Darktrue: {
    alignSelf: "stretch",
  },
  label: {
    lineHeight: 29,
    fontWeight: "600",
    fontSize: FontSize.bodyXLargeBold_size,
    letterSpacing: 0,
    textAlign: "left",
    color: Color.skyWhite,
    display: "none",
    alignSelf: "stretch",
  },
  autoLayoutHorizontal3: {
    backgroundColor: Color.darkDark3,
    fontFamily: FontFamily.bodyMediumSemibold,
    fontWeight: "600",
    fontSize: FontSize.bodyXLargeBold_size,
  },
  inputSpaceBlock: {
    alignSelf: "stretch",
  },
  elementsfinalizeArtwork1: {
    marginTop: 24,
    alignSelf: "stretch",
  },
  autoLayoutVertical: {
    paddingVertical: Padding.p_xs,
  },
  button: {
    textAlign: "center",
    fontFamily: FontFamily.bodyXSmallBold,
    fontWeight: "700",
    alignSelf: "stretch",
  },
  buttonpillTypepillIconf1: {
    backgroundColor: Color.primary900,
    marginLeft: 16,
  },
  button2ButtonsDarktrueC: {
    bottom: 0,
    borderStyle: "solid",
    borderColor: Color.colorDarkslategray_200,
    paddingTop: Padding.p_5xl,
    paddingBottom: Padding.p_17xl,
  },
  text: {
    marginTop: -13,
    left: 23,
    fontFamily: FontFamily.bodyMediumSemibold,
    fontWeight: "600",
    lineHeight: 26,
    letterSpacing: 0,
    fontSize: FontSize.bodyLargeBold_size,
    color: Color.skyWhite,
    textAlign: "left",
  },
  darkBatchArtGeneratorFina: {
    height: 932,
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default FinalizeArtwork;
