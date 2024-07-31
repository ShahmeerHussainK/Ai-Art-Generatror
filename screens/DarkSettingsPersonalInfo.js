import React, { useState } from "react";
import { Pressable, Image, StyleSheet, View, Text, TextInput, TouchableOpacity, ScrollView, Platform } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { useNavigation } from "@react-navigation/native";
import { Padding, FontSize, Color, FontFamily, Border } from "../GlobalStyles";
import DateTimePicker from '@react-native-community/datetimepicker';
import { useTranslation } from 'react-i18next';
import { useTheme } from "../context/ThemeContext";

const DarkSettingsPersonalInfo = () => {
  const { t } = useTranslation();
  const navigation = useNavigation();
  const [date, setDate] = useState();
  const { theme, toggleTheme, isDarkMode } = useTheme();
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [autoLayoutVertical3Open, setAutoLayoutVertical3Open] = useState(false);
  const [autoLayoutVertical3Value, setAutoLayoutVertical3Value] = useState();
  const [autoLayoutVertical3Items, setAutoLayoutVertical3Items] = useState([
    { value: "Male", label: t("Male") },
    { value: "Female", label: t("Female") },
  ]);

  const handleDateChange = (event, selectedDate) => {
    setShowDatePicker(false);
    if (selectedDate) {
      setDate(selectedDate);
    }
  };

  const showDatePickerAndroid = () => {
    setShowDatePicker(true);
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={[styles.navbarprogressBarDarktrue, styles.autoFlexBox1]}>
        <Pressable style={[styles.autoLayoutHorizontal, styles.autoFlexBox1]}>
          <Pressable style={styles.gobackLayout} onPress={() => navigation.goBack()}>
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={isDarkMode ? require("../assets/iconlyregularoutlinearrow--left.png") : require("../assets/blackarrow.png")}
            />
          </Pressable>
        </Pressable>
        <View style={styles.autoFlexBox}>
          <Text style={[styles.title, { color: theme.text }]}>{t('Personal info')}</Text>
        </View>
        <Image
          style={styles.gobackLayout}
          resizeMode="cover"
          source={require("../assets/auto-layout-horizontal.png")}
        />
      </View>
      <ScrollView style={styles.container}>
        <View style={[styles.enterPersonalInfoStep2, { backgroundColor: theme.background }]}>
          <View style={[styles.autoLayoutVertical, styles.autoLayoutVerticalPosition]}>
            <View style={styles.autoLayoutVertical1}>
              <View style={styles.autoLayoutVertical1}>
                <Image
                  style={styles.typeeditComponentavatarIcon}
                  resizeMode="contain"
                  source={require("../assets/typeedit-componentavatar1.png")}
                />
                <View style={styles.inputFormdefaultStatedefa}>
                  <Text style={[styles.label, styles.textLayout,  { color: theme.text }]}>{t('Full Name')}</Text>
                  <TextInput
                    style={[styles.autoLayoutVertical3, styles.autoSpaceBlock, { color: theme.text }]}
                    placeholder={t('Full Name')}
                    keyboardType="default"
                    placeholderTextColor="#616161"
                  />
                  <View style={[styles.rectangle, styles.rectangleBg]} />
                </View>
                <View style={styles.inputFormdefaultStatedefa}>
                  <Text style={[styles.label, styles.textLayout, { color: theme.text }]}>{t('Phone Number')}</Text>
                  <TextInput
                    style={[styles.autoLayoutVertical3, styles.autoSpaceBlock, { color: theme.text }]}
                    placeholder={t('Phone Number')}
                    // placeholder="Enter Phone Number"
                    keyboardType="phone-pad"
                    placeholderTextColor="#616161"
                  />
                  <View style={[styles.rectangle, styles.rectangleBg]} />
                </View>
                <View style={styles.inputFormdefaultStatedefa}>
                  <Text style={[styles.label, styles.textLayout,  { color: theme.text }]}>{t('Date of Birth')}</Text>
                  <TouchableOpacity
                    onPress={showDatePickerAndroid}
                    style={styles.autoSpaceBlock}
                  >
                    <View style={[styles.autoLayoutHorizontal2, styles.autoFlexBox1]}>
                      <Text style={[styles.loremIpsum, styles.loremIpsumTypo, { color: theme.text }]}>
                        {date ? `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}` : "Choose DOB"}
                      </Text>
                      <Image
                        style={[styles.iconlyregularoutlinecalenda, styles.gobackLayout]}
                        resizeMode="cover"
                        source={isDarkMode ? require("../assets/iconlyregularoutlinecalendar.png") : require("../assets/Calendar.png")}
                      />
                    </View>
                    <View style={styles.rectangle19} />
                  </TouchableOpacity>
                  {showDatePicker && Platform.OS === 'android' && (
                    <DateTimePicker
                      value={date || new Date()}
                      mode="date"
                      display="default"
                      onChange={handleDateChange}
                    />
                  )}
                </View>
                <View style={styles.inputFormdefaultStatedefa}>
                  <Text style={[styles.label, styles.textLayout,  { color: theme.text }]}>{t('Gender')}</Text>
                  <View style={styles.autoSpaceBlock1}>
                  <DropDownPicker
                    open={autoLayoutVertical3Open}
                    setOpen={setAutoLayoutVertical3Open}
                    value={autoLayoutVertical3Value}
                    setValue={setAutoLayoutVertical3Value}
                    placeholder={t('Pronoun')}
                    placeholderStyle={{ color: "#616161" }}
                    items={autoLayoutVertical3Items}
                    labelStyle={[styles.autoLayoutVertical3Value, { color: theme.text }]}
                    containerStyle={styles.dropdownPicker}
                    style={[styles.dropdown, { backgroundColor: theme.background }]}
                    dropDownContainerStyle={[styles.dropdown, { backgroundColor: theme.background },{ color: theme.text1 } ]}
                    textStyle={[styles.dropdownText, { color: theme.text }]}
                    arrowIconStyle={[styles.dropdownArrow, { tintColor: theme.text } ]}
                    selectedItemContainerStyle={{ backgroundColor: theme.background}}
                    selectedItemLabelStyle={[styles.dropdownTextSelect, { color: theme.text }]}
                  />
                  </View>
                </View>
                <View style={styles.inputFormdefaultStatedefa}>
                  <Text style={[styles.label, styles.textLayout,  { color: theme.text }]}>{t('Street Address')}</Text>
                  <TextInput
                    style={[styles.autoLayoutVertical3, styles.autoSpaceBlock,{ color: theme.text }]}
                    placeholder={t('Street Address')}
                    multiline={true}
                    placeholderTextColor="#616161"
                  />
                  <View style={[styles.rectangle, styles.rectangleBg]} />
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <View
        style={[
          styles.buttonprimaryDarktrueCom, { backgroundColor: theme.background },
          styles.autoLayoutVerticalPosition,
        ]}
      >
        <TouchableOpacity style={[styles.buttonpillTypepillIconf, styles.rectangleBg1]}
          activeOpacity={0.0}
          onPress={() => navigation.navigate("DarkSettings")}>
          <Text style={styles.button}>{t('Save')}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonprimaryDarktrueCom: {
    bottom: 0,
    borderStyle: "solid",
    borderColor: Color.colorDarkslategray_200,
    paddingTop: Padding.p_5xl,
    paddingBottom: Padding.p_17xl,
    paddingHorizontal: Padding.p_5xl,
  },
  rectangle: {
    height: 1,
  },
  rectangleBg: {
    backgroundColor: "#424242",
    borderRadius: Border.br_81xl,
    alignSelf: "stretch",
  },
  rectangleBg1: {
    backgroundColor: Color.primary900,
    borderRadius: Border.br_81xl,
    alignSelf: "stretch",
  },
  container: {
    flex: 1,
  },
  autoLayoutVertical3Value: { 
    fontSize: 12,
    fontWeight: "bold",
    fontFamily: "Urbanist-Bold",
  },
  dropdownContainer: {
    width: '100%',
    zIndex: 1000,
    marginTop: '3%',
  },
  dropdownPicker: {
    zIndex: 1000,
  },
  dropdown: {
    backgroundColor: Color.darkDarkbg,
    borderColor: 'transparent',
  },
  dropdownText: {
    color: 'white',
  },
  dropdownTextSelect:{
    fontWeight: "bold",
    color: "red"
  },
  dropdownArrow: {
    tintColor: 'white',
  },
  autoLayoutVerticalPosition: {
    paddingHorizontal: Padding.p_5xl,
    left: 0,
    position: "absolute",
    right: 0,
  },
  autoFlexBox1: {
    flexDirection: "row",
    alignItems: "center",
  },
  textLayout: {
    fontSize: FontSize.bodyLargeBold_size,
    letterSpacing: 0,
    color: Color.skyWhite,
    marginLeft: "1%",
  },
  autoSpaceBlock: {
    alignSelf: "stretch",
  },
  autoSpaceBlock1: {
    marginTop: 14,
    alignSelf: "stretch",
    marginLeft: -8,
  },
  loremIpsumTypo: {
    fontSize: FontSize.h5Semibold_size,
    fontFamily: FontFamily.bodyXSmallBold,
    fontWeight: "700",
  },
  gobackLayout: {
    height: 28,
    width: 28,
  },
  autoFlexBox: {
    justifyContent: "center",
    alignSelf: "stretch",
  },
  buttonpillFlexBox: {
    marginLeft: 16,
    padding: Padding.p_base,
    justifyContent: "center",
    borderRadius: Border.br_81xl,
    alignItems: "center",
    flex: 1,
  },
  icon: {
    height: "100%",
    width: "100%",
    marginLeft: "70%",
  },
  autoLayoutHorizontal: {
    alignItems: "center",
  },
  navbarprogressBarDarktrue: {
    height: 48,
    justifyContent: "space-between",
    paddingHorizontal: 0,
    alignItems: "center",
    alignSelf: "stretch",
    paddingVertical: Padding.p_xs,
  },
  title: {
    fontSize: FontSize.h4Bold_size,
    textAlign: "center",
    color: Color.skyWhite,
    fontFamily: FontFamily.bodyXSmallBold,
    fontWeight: "700",
  },
  informationDetails: {
    fontSize: FontSize.bodyXLargeBold_size,
    lineHeight: 19,
    fontFamily: FontFamily.bodySmallRegular,
    marginTop: 16,
    letterSpacing: 0,
    textAlign: "left",
    color: Color.skyWhite,
    alignSelf: "stretch",
  },
  typeeditComponentavatarIcon: {
    height: 120,
    width: 120,
  },
  label: {
    textAlign: "left",
    fontFamily: FontFamily.bodyXSmallBold,
    fontWeight: "bold",
    fontSize: FontSize.bodyLargeBold_size,
    alignSelf: "stretch",
  },
  autoLayoutVertical3: {
    fontSize: FontSize.h5Semibold_size,
    fontFamily: FontFamily.bodyXSmallBold,
    fontWeight: "700",
  },
  inputFormdefaultStatedefa: {
    marginTop: "10%",
    alignSelf: "stretch",
  },
  loremIpsum: {
    lineHeight: 32,
    color: Color.colorDimgray,
    textAlign: "left",
    flex: 1,
  },
  iconlyregularoutlinecalenda: {
    marginLeft: 12,
  },
  autoLayoutHorizontal2: {
    alignItems: "center",
    alignSelf: "stretch",
  },
  rectangle19: {
    backgroundColor: Color.colorDarkslategray_100,
    height: 1,
    marginTop: 8,
    borderRadius: Border.br_81xl,
    alignSelf: "stretch",
  },
  autoLayoutVertical1: {
    marginTop: 20,
    alignItems: "center",
    alignSelf: "stretch",
  },
  autoLayoutVertical: {
    height: 888,
    paddingVertical: Padding.p_xs,
  },
  button: {
    textAlign: "center",
    fontFamily: FontFamily.bodyXSmallBold,
    fontWeight: "700",
    fontSize: FontSize.bodyLargeBold_size,
    alignSelf: "stretch",
    color: "white",
  },
  buttonpillTypepillIconf: {
    padding: Padding.p_base,
    justifyContent: "center",
    backgroundColor: Color.colorDarkslategray_200,
    borderRadius: Border.br_81xl,
    alignItems: "center",
    flex: 1,
  },
  buttonpillTypepillIconf3: {
    backgroundColor: Color.alertsStatusButtonDisabled,
  },
  autoLayoutHorizontal4: {
    marginTop: 24,
    alignItems: "center",
    flexDirection: "row",
  },
  button2ButtonsDarktrueC: {
    bottom: 0,
    borderStyle: "solid",
    borderColor: Color.colorDarkslategray_200,
    paddingTop: Padding.p_5xl,
    paddingBottom: Padding.p_17xl,
    backgroundColor: Color.darkDarkbg,
  },
  text: {
    marginTop: -13,
    left: 23,
    fontWeight: "600",
    fontFamily: FontFamily.bodyMediumSemibold,
    lineHeight: 26,
    fontSize: FontSize.bodyLargeBold_size,
    letterSpacing: 0,
    color: Color.skyWhite,
    textAlign: "left",
  },
  enterPersonalInfoStep2: {
    height: 850,
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default DarkSettingsPersonalInfo;
