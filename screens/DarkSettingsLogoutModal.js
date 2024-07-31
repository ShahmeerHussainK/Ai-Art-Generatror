import React from "react";
import { View, StyleSheet, Dimensions, TouchableOpacity, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, Border, Padding, FontSize } from "../GlobalStyles";
import Modal from "react-native-modal";
import { useTranslation } from 'react-i18next';
import { useTheme } from "../context/ThemeContext";

const { width, height } = Dimensions.get('window');

const DarkSettingsLogoutModal = ({ isVisible, onClose }) => {
  const { t } = useTranslation();
  const navigation = useNavigation();
  const { theme, toggleTheme, isDarkMode } = useTheme();

  return (
    <Modal
      animationIn={'bounce'}
      isVisible={isVisible}
      onBackdropPress={onClose}
      deviceWidth={width}
      style={styles.modal}
    >
      {/* <View style={styles.modalBackground}> */}
      <View style={styles.blurView}>
        <View style={[styles.rectangle]} />
        <View style={[styles.autoLayoutVertical12, { backgroundColor: theme.background }]}>
          <View style={[styles.frame, styles.frameLayout]}>
            <View style={[styles.rectangle1, styles.frameLayout]} />
          </View>
          <Text style={[styles.downloadArtwork, styles.downloadArtworkSpaceBlock]}>
            {t('Logout')}
          </Text>
          <Image
            style={[styles.darktrueComponentdividerIcon, styles.artworkLayout]}
            resizeMode="cover"
            source={require("../assets/darktrue-componentdivider4.png")}
          />
          <Text style={[styles.areYouSure, styles.autoSpaceBlock, { color: theme.text }]}>
          {t('Are you sure you want to Logout?')}
          </Text>
          <View style={[styles.autoLayoutHorizontal12, styles.autoSpaceBlock]}>
          <TouchableOpacity
            style={[styles.buttonpillTypepillIconf, styles.rectangle1Bg, { backgroundColor: theme.promptbackground }]}
            activeOpacity={0.0}
            onPress={onClose}
          >
            <Text style={[styles.button, styles.textLayout, { color: theme.canceltext }]}>{t('Cancel')}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.buttonpillTypepillIconf1, styles.autoFlexBox]}
            activeOpacity={0.0}
            onPress={() => navigation.navigate("SignIn")}
          >
            <Text style={[styles.button, styles.textLayout]}>{t('Yes, Logout')}</Text>
          </TouchableOpacity>
        </View>
        </View>
      </View>
      {/* </View> */}
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    margin: 0,
    justifyContent: 'flex-end',
  },
  blurView: {
    width: "100%",
    height: "30%",
    alignSelf: 'flex-end',
    position: 'absolute',
    bottom: 0
  },
  modalBackground: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "yellow",
  },
  rectangle: {
    backgroundColor: Color.colorGray_400,
    top: 0,
    left: 0,
    right: 0,
  },
  rectangle1: {
    marginLeft: -19,
    left: "50%",
    bottom: 0,
    position: "absolute",
    backgroundColor: Color.colorDarkslategray_200,
    borderRadius: Border.br_81xl,
  },
  frame: {
    overflow: "hidden",
    height: 3,
    width: 38,
  },
  downloadArtwork: {
    textAlign: "center",
    color: Color.alertsStatusError,
    lineHeight: 38,
    fontSize: FontSize.h4Bold_size,
    fontFamily: FontFamily.bodyXSmallBold,
    fontWeight: "700",
    marginTop: 24,
  },
  darktrueComponentdividerIcon: {
    marginTop: 24,
    alignSelf: "stretch",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    width: "100%",
  },
  autoLayoutVertical12: {
    borderTopLeftRadius: Border.br_9xl,
    borderTopRightRadius: Border.br_9xl,
    borderColor: Color.colorDarkslategray_200,
    borderWidth: 1,
    paddingTop: Padding.p_5xs,
    paddingBottom: Padding.p_17xl,
    borderStyle: "solid",
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: Padding.p_5xl,
    left: 0,
    right: 0,
    position: "absolute",
    overflow: "hidden",
  },
  autoLayoutHorizontal12: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  areYouSure: {
    fontSize: FontSize.h5Semibold_size,
    lineHeight: 32,
    color: Color.greyscale50,
    textAlign: "center",
    fontFamily: FontFamily.bodyXSmallBold,
    fontWeight: "700",
  },
  autoSpaceBlock: {
    marginTop: 24,
    alignSelf: "stretch",
  },
  rectangle1Bg: {
    borderRadius: Border.br_81xl,
  },
  buttonpillTypepillIconf: {
    justifyContent: "center",
    padding: Padding.p_base,
    alignItems: "center",
    flex: 1,
  },
  button: {
    textAlign: "center",
    fontFamily: FontFamily.bodyXSmallBold,
    fontWeight: "700",
    alignSelf: "stretch",
  },
  textLayout: {
    lineHeight: 26,
    fontSize: FontSize.bodyLargeBold_size,
    letterSpacing: 0,
    color: Color.skyWhite,
  },
  buttonpillTypepillIconf1: {
    backgroundColor: Color.primary900,
    marginLeft: 16,
    flex: 1,
  },
  autoFlexBox: {
    borderRadius: Border.br_81xl,
    justifyContent: "center",
    padding: Padding.p_base,
    alignItems: "center",
  },
  downloadArtworkSpaceBlock: {
    marginTop: 24,
    alignSelf: "stretch",
  },
});

export default DarkSettingsLogoutModal;
