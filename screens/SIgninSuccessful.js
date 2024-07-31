import React, { useState, useEffect } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Modal from "react-native-modal";
import { BallIndicator } from 'react-native-indicators';
import { Color, FontSize, Padding, Border, FontFamily } from "../GlobalStyles";
import { useTranslation } from 'react-i18next';
import { useTheme } from "../context/ThemeContext";

const SigninSuccessful = ({ isVisible, onClose }) => {
  const { t } = useTranslation();
  const [frameActivityIndicatorAnimating, setFrameActivityIndicatorAnimating] = useState(true);
  const { theme, toggleTheme, isDarkMode } = useTheme();

  useEffect(() => {
    console.log(isVisible);
    let timer;
    if (isVisible) {
      timer = setTimeout(() => {
        onClose();
      }, 5000);
    }
    return () => clearTimeout(timer);
  }, [isVisible]);

  return (
    <Modal isVisible={isVisible} onBackdropPress={onClose} useNativeDriver={true}>
      <View style={[styles.modalContent, { backgroundColor: theme.background }]}>
        <Image
          style={styles.groupIcon}
          resizeMode="cover"
          source={require("../assets/group8.png")}
        />
        <View style={styles.autoLayoutVertical}>
          <Text style={[styles.modalTitle, { color: theme.text }]}>{t('Sign in Successful')}!</Text>
          <Text style={[styles.loremIpsumDolor,{ color: theme.text }]}>
          {t('Please wait')}...
          {'\n'}{t('You will be directed to the homepage.')}
          </Text>
        </View>
        <BallIndicator
          style={styles.indicator}
          animating={frameActivityIndicatorAnimating}
          size={50}
          color="#6949FF"
        />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContent: {
    width: 340,
    height: 482,
    borderRadius: Border.br_5xl,
    paddingHorizontal: Padding.p_21xl,
    paddingTop: Padding.p_21xl,
    paddingBottom: Padding.p_13xl,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  autoLayoutVertical: {
    alignSelf: "stretch",
    marginTop: 32,
    alignItems: "center",
  },
  groupIcon: {
    width: 186,
    height: 180,
  },
  modalTitle: {
    fontSize: FontSize.h4Bold_size,
    lineHeight: 38,
    color: Color.primary900,
    textAlign: "center",
    fontFamily: FontFamily.bodyXSmallBold,
    fontWeight: "700",
    alignSelf: "stretch",
  },
  loremIpsumDolor: {
    color: Color.skyWhite,
    fontFamily: FontFamily.bodySmallRegular,
    fontSize: FontSize.bodyLargeBold_size,
    lineHeight: 26,
    textAlign: "center",
    marginTop: 16,
  },
  indicator: {
    marginTop: 32,
  },
});

export default SigninSuccessful;
