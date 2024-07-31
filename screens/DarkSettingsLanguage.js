import React, { useState, useEffect } from "react";
import {
  Pressable,
  Image,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  SectionList,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, FontSize, FontFamily, Color, Padding } from "../GlobalStyles";
import I18n, { setLanguage } from '../i18n';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useTheme } from "../context/ThemeContext";
let theme1;

const DarkSettingsLanguage = () => {
 

  const [selectedLanguage, setSelectedLanguage] = useState(I18n.locale);
  const navigation = useNavigation();
  const { theme, toggleTheme, isDarkMode } = useTheme();
  theme1=theme
  const [autoLayoutVerticalData, setAutoLayoutVerticalData] = useState([
    {
      headerComponent: <Text style={[styles.sectionHeader,{ color: theme.text } ]}>{I18n.t('Select Language')}</Text>,
      data: [
        { key: "1", name: "English", code: "en" },
        { key: "2", name: "French", code: "fr" },
        // Add more languages here
      ],
    },
  ]);


  useEffect(() => {
    const initializeLanguage = async () => {
      const language = await AsyncStorage.getItem('user-language');
      if (language) {
        setSelectedLanguage(language);
      }
    };
    initializeLanguage();
  }, []);

  const handleLanguageSelect = async (language, code) => {
    setSelectedLanguage(code);
    try {
      await I18n.changeLanguage(language);
      await AsyncStorage.setItem('user-language', code);
      console.log(`Language changed to ${code}`);
      Alert.alert(
        I18n.t('Language Changed'),
        I18n.t('For required changes, please re-run your application.'),
        [{ text: I18n.t('OK') }]
      );
    } catch (error) {
      console.error('Error changing language:', error);
    }
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => handleLanguageSelect(item.name, item.code)}
    >
      <Text style={[styles.itemText,{ color: theme.text }]}>{item.name}</Text>
      {selectedLanguage === item.code && (
        <Image
          style={styles.tickIcon}
          source={require("../assets/tick.png")}
        />
      )}
    </TouchableOpacity>
  );

  const renderSectionHeader = ({ section }) => (
    <View>{section.headerComponent}</View>
  );

  return (
    <View style={[styles.darkSettingsLanguage,{ backgroundColor: theme.background }]}>
      <View style={styles.autoLayoutVertical}>
        <View style={styles.navbardefaultDarktrueCom}>
          <TouchableOpacity
            style={styles.autoLayoutHorizontal}
            activeOpacity={0.0}
            onPress={() => navigation.navigate("DarkSettings")}
          >
            <Image
              style={[styles.typelogoDefaultComponentl, styles.gobackLayout]}
              resizeMode="cover"
              source={require("../assets/typelogo-default-componentlogo4.png")}
            />
            <Pressable
              style={[styles.gobackLayout]}
              onPress={() => navigation.goBack()}
            >
              <Image
                style={styles.icon}
                resizeMode="cover"
                source={isDarkMode ? require("../assets/iconlyregularoutlinearrow--left.png") : require("../assets/blackarrow.png")}
              />
            </Pressable>
          </TouchableOpacity>
          <Text style={[styles.titleSection, { color: theme.text }]}>{I18n.t('Language')}</Text>
          <Image
            style={[styles.autoLayoutHorizontal1, styles.gobackLayout]}
            resizeMode="cover"
            source={require("../assets/auto-layout-horizontal.png")}
          />
        </View>
        <SectionList
          style={styles.autoLayoutVertical1}
          sections={autoLayoutVerticalData}
          renderItem={renderItem}
          renderSectionHeader={renderSectionHeader}
          contentContainerStyle={styles.autoLayoutVerticalContent}
          keyExtractor={(item) => item.key}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  autoLayoutVerticalContent: {
    flexDirection: "column",
  },
  gobackLayout: {
    height: 28,
    width: 28,
  },
  groupIconPosition: {
    top: "50%",
    position: "absolute",
  },
  typelogoDefaultComponentl: {
    borderRadius: Border.br_341xl,
    display: "none",
  },
  icon: {
    height: "100%",
    width: "100%",
    bottom: "35%",
  },
  autoLayoutHorizontal: {
    width: 28,
    alignItems: "center",
    flexDirection: "row",
  },
  titleSection: {
    fontSize: FontSize.h4Bold_size,
    fontWeight: "700",
    fontFamily: FontFamily.bodyXSmallBold,
    textAlign: "center",
    color: Color.skyWhite,
    marginLeft: 16,
    flex: 1,
    marginBottom: "7%",
  },
  autoLayoutHorizontal1: {
    marginLeft: 16,
  },
  navbardefaultDarktrueCom: {
    height: 48,
    paddingHorizontal: 0,
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  autoLayoutVertical1: {
    marginTop: 24,
    alignSelf: "stretch",
    flex: 1,
  },
  autoLayoutVertical: {
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: Padding.p_xs,
    left: 0,
    right: 0,
    position: "absolute",
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
  text: {
    marginTop: -13,
    left: 23,
    fontSize: FontSize.bodyLargeBold_size,
    letterSpacing: 0,
    lineHeight: 26,
    fontWeight: "600",
    fontFamily: FontFamily.bodyMediumSemibold,
    textAlign: "left",
    color: Color.skyWhite,
  },
  typestatusBarThemedarkC: {
    top: 0,
    height: 44,
    left: 0,
    right: 0,
    position: "absolute",
  },
  darkSettingsLanguage: {
    backgroundColor: Color.darkDarkbg,
    height: "100%",
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
  sectionHeader: {
    fontSize: FontSize.h5Semibold_size,
    fontWeight: "700",
    fontFamily: FontFamily.interRegular,
    color: "white",
    marginBottom: 8,
    marginLeft: "1%",
  },
  item: {
    padding: "4%",
    borderBottomWidth: 1,
    borderBottomColor: Color.grayLight,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  itemText: {
    fontSize: FontSize.bodyLarge_size,
    fontFamily: FontFamily.bodyMediumRegular,
    color: Color.skyWhite,
  },
  tickIcon: {
    width: 20,
    height: 20,
    resizeMode: "contain"
  },
});

export default DarkSettingsLanguage;
