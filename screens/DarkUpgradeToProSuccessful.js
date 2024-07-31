import React, { useState, useEffect } from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Modal from "react-native-modal";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, Padding, Border, FontFamily } from "../GlobalStyles";
import { useTranslation } from 'react-i18next';
import { useTheme } from "../context/ThemeContext";

const DarkUpgradeToProSuccessful = ({ isVisible, onClose }) => {
  const { t } = useTranslation();
  const navigation = useNavigation();
  const { theme, toggleTheme, isDarkMode } = useTheme();


  return (
    <Modal isVisible={isVisible} onBackdropPress={onClose} useNativeDriver={true}>
      <View style={[styles.modalContent,{ backgroundColor: theme.background }]}>
        <Image
          style={styles.groupIcon3}
          resizeMode="cover"
          source={require("../assets/group5.png")}
        />
        <View style={styles.autoLayoutVertical}>
          <Text style={[styles.modalTitle,  { color: theme.text }]}>{t('Welcome to PRO Plan!')}</Text>
          <Text style={[styles.loremIpsumDolor,  { color: theme.text }]}>
          {t('You have successfully subscribed Pro for 6 months! E-Receipt has been sent to your email address. Enjoy all the benefits!')}
          </Text>
        </View>
        <TouchableOpacity style={[styles.autoLayoutVertical1, styles.autoFlexBox]}
          activeOpacity={0.0}
            onPress={() => navigation.navigate("HomeScreen")}
        >
          <View
            style={[styles.buttonpillTypepillIconf, styles.buttonpillFlexBox]}
          >
            <Text style={[styles.button, styles.buttonTypo]}>{t('OK')}</Text>
          </View>
        </TouchableOpacity>
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
    fontFamily: FontFamily.bodySmallRegular,
    fontSize: FontSize.bodyLargeBold_size,
    lineHeight: 26,
    textAlign: "center",
    marginTop: 16,
  },
  indicator: {
    marginTop: 32,
  },
  autoLayoutVertical1: {
    marginTop: 32,
    alignItems: "center",
    alignSelf: "stretch",
  },
  autoFlexBox: {
    alignSelf: "stretch",
    marginTop: 32,
  },
  buttonpillTypepillIconf: {
    backgroundColor: Color.primary900,
    height: 58,
  },
  buttonpillFlexBox: {
    padding: Padding.p_base,
    borderRadius: Border.br_81xl,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    fontFamily: FontFamily.bodyXSmallBold,
    fontWeight: "700",
    lineHeight: 26,
    letterSpacing: 0,
    fontSize: FontSize.bodyLargeBold_size,
  },
  buttonTypo: {
    color: Color.skyWhite,
    lineHeight: 26,
    letterSpacing: 0,
    fontSize: FontSize.bodyLargeBold_size,
    textAlign: "center",
    alignSelf: "stretch",
  },
});

export default DarkUpgradeToProSuccessful;
