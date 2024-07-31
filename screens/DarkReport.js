import * as React from "react";
import { useState } from "react";
import { Image, StyleSheet, Text, View, ScrollView, TouchableOpacity } from "react-native";
import { Padding, FontFamily, FontSize, Color, Border } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/native";
import { RadioButton } from 'react-native-paper';
import ReportingSuccessful from "./ReportingSuccessful";
import { useTranslation } from 'react-i18next';
import { useTheme } from "../context/ThemeContext";

const DarkReport = () => {
  const { t } = useTranslation();
  const navigation = useNavigation();
  const [checked, setChecked] = useState('other');
  const [isModalVisible, setModalVisible] = useState(false);
  const { theme, toggleTheme, isDarkMode } = useTheme();

  const handleCloseModal = () => {
    setModalVisible(false);
    navigation.navigate("HomeScreen");
  };
  const toggleModal = async () => {
    console.log("toggling modal")
    setModalVisible(true); 
  };

  return (
    <View style={[styles.darkReport, { backgroundColor: theme.background }]}>
      <View
        style={[
          styles.navbardefaultDarktrueCom,
          styles.navbardefaultDarktrueComFlexBox,
        ]}
      >
        <TouchableOpacity style={styles.autoLayoutHorizontal}
          activeOpacity={0.0}
          onPress={() => navigation.navigate("DarkArtworkPostDetails")}>
          <Image
            style={[
              styles.autoLayoutHorizontal1Layout,
            ]}
            resizeMode="cover"
            source={isDarkMode ? require("../assets/goback2.png") : require("../assets/blackcross.png")}
          />
        </TouchableOpacity>
        <Text style={[styles.titleSection, styles.buttonTypo, { color: theme.text }]}>{t('Report')}</Text>
        <Image
          style={[
            styles.autoLayoutHorizontal1,
            styles.autoLayoutHorizontal1Layout,
          ]}
          resizeMode="cover"
          source={require("../assets/auto-layout-horizontal.png")}
        />
      </View>
      <ScrollView>
        <View style={styles.darkReport}>
          <View
            style={[styles.autoLayoutVertical, styles.autoLayoutVerticalPosition]}
          >
            <ScrollView>
              <View style={styles.selectSpaceBlock}>
                <Text style={[styles.whyAreYou, styles.textTypo, { color: theme.text }]}>
                  {t('Why are you reporting this?')}
                </Text>
                {reportOptions.map((option, index) => (
                  <View
                    key={index}
                    style={[styles.styletextThemedarkSelect, styles.selectSpaceBlock]}
                  >
                    <RadioButton
                      style={styles.stylenoneThemedefaultSel}
                      value={option.value}
                      status={checked === option.value ? 'checked' : 'unchecked'}
                      color="#6949ff"
                      onPress={() => setChecked(option.value)}
                    />
                    <Text style={[styles.selected, { color: theme.text }]}>{option.label}</Text>
                  </View>
                ))}
              </View>
            </ScrollView>
          </View>
        </View>
      </ScrollView>
      <View
        style={[
          styles.buttonprimaryDarktrueCom, { backgroundColor: theme.background },
          styles.autoLayoutVerticalPosition,
        ]}
      >
        <TouchableOpacity style={styles.buttonpillTypepillIconf}
          activeOpacity={0.0}
          onPress={toggleModal}
        >
          <Text style={[styles.button, styles.textLayout]}>{t('Report')}</Text>
        </TouchableOpacity>
      </View>
      <ReportingSuccessful isVisible={isModalVisible}  onClose={handleCloseModal} />
    </View>
  );
};

const reportOptions = [
  { value: 'fraud', label: 'Fraud or Scam' },
  { value: 'offensive', label: 'Offensive or Inappropriate Content' },
  { value: 'nudity', label: 'Nudity or Pornography' },
  { value: 'harmful', label: 'Harmful or Dangerous Content' },
  { value: 'hateful', label: 'Hateful Activities' },
  { value: 'violence', label: 'Graphic Violence' },
  { value: 'guidelines', label: 'Violation of Guidelines or Policies' },
  { value: 'plagiarism', label: 'Plagiarism and Copyright Infringement' },
  { value: 'cultural', label: 'Cultural Appropriation' },
  { value: 'counterfeit', label: 'Counterfeit or Fake Artwork' },
  { value: 'safety', label: 'Safety Concerns' },
  { value: 'other', label: 'Other' },
];

const styles = StyleSheet.create({
  autoLayoutVerticalPosition: {
    paddingHorizontal: Padding.p_5xl,
    left: 0,
    right: 0,
    position: "absolute",
  },
  navbardefaultDarktrueComFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  autoLayoutHorizontal1Layout: {
    height: 28,
    width: 28,
  },
  buttonTypo: {
    textAlign: "center",
    fontFamily: FontFamily.bodyXSmallBold,
    fontWeight: "700",
  },
  textTypo: {
    textAlign: "left",
    fontFamily: FontFamily.bodyMediumSemibold,
    fontWeight: "600",
  },
  selectSpaceBlock: {
    marginTop: "5%",
    alignSelf: "stretch",
  },
  textLayout: {
    lineHeight: 26,
    fontSize: FontSize.bodyLargeBold_size,
    letterSpacing: 0,
    color: Color.skyWhite,
  },
  typelogoDefaultComponentl: {
    borderRadius: Border.br_341xl,
    display: "none",
  },
  autoLayoutHorizontal: {
    width: 28,
    alignItems: "center",
    flexDirection: "row",
  },
  titleSection: {
    fontSize: FontSize.h4Bold_size,
    lineHeight: 38,
    color: Color.skyWhite,
    marginLeft: 16,
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
  whyAreYou: {
    fontSize: FontSize.h5Semibold_size,
    lineHeight: 32,
    color: Color.skyWhite,
    alignSelf: "stretch",
  },
  groupIcon: {
    width: 24,
    height: 24,
  },
  selected: {
    fontSize: FontSize.bodyXLargeBold_size,
    letterSpacing: 0,
    textAlign: "left",
    fontFamily: FontFamily.bodyMediumSemibold,
    fontWeight: "600",
    color: Color.skyWhite,
    marginLeft: 16,
    flex: 1,
  },
  styletextThemedarkSelect: {
    alignItems: "center",
    flexDirection: "row",
  },
  autoLayoutVertical: {
    height: 888,
    paddingVertical: Padding.p_xs,
  },
  button: {
    textAlign: "center",
    fontFamily: FontFamily.bodyXSmallBold,
    fontWeight: "700",
    alignSelf: "stretch",
  },
  buttonpillTypepillIconf: {
    borderRadius: Border.br_81xl,
    backgroundColor: Color.primary900,
    justifyContent: "center",
    padding: Padding.p_base,
    alignItems: "center",
    alignSelf: "stretch",
  },
  buttonprimaryDarktrueCom: {
    bottom: 0,
    borderStyle: "solid",
    borderColor: Color.colorDarkslategray_200,
    paddingTop: Padding.p_5xl,
    paddingBottom: Padding.p_17xl,
  },
  text: {
    marginTop: -13,
    left: 23,
    lineHeight: 26,
    fontSize: FontSize.bodyLargeBold_size,
    letterSpacing: 0,
    color: Color.skyWhite,
    textAlign: "left",
    fontFamily: FontFamily.bodyMediumSemibold,
    fontWeight: "600",
  },
  darkReport: {
    width: "100%",
    height: 830,
    overflow: "hidden",
    flex: 1,
  },
});

export default DarkReport;
