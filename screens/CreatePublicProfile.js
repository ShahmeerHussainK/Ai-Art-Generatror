import React, { useState } from "react";
import { Alert, Pressable, Image, StyleSheet, View, Text, TextInput, TouchableOpacity, ScrollView, ImageBackground } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { useNavigation } from "@react-navigation/native";
import { Padding, FontSize, Color, FontFamily, Border } from "../GlobalStyles";
import { useTranslation } from 'react-i18next';

import { useTheme } from "../context/ThemeContext";

const CreatePublicProfile = ({ route }) => {
  const navigation = useNavigation();
  const { t } = useTranslation();
  const { theme, toggleTheme, isDarkMode } = useTheme();
  const [fullName, setFullName] = useState("");
  const [nickName, setNickName] = useState("");
  const [bio, setBio] = useState("");
  const [autoLayoutVertical3Open, setAutoLayoutVertical3Open] = useState(false);
  const [autoLayoutVertical3Value, setAutoLayoutVertical3Value] = useState(null);
  const [autoLayoutVertical3Items, setAutoLayoutVertical3Items] = useState([
    { value: "He", label: t("He") },
    { value: "She", label: t("She") },
    { value: "Not Specified", label: t("Not Specified") },
  ]);

  const { avatar } = route.params;

  const validateInputs = () => {
    const nameRegex = /^[A-Za-z\s]+$/;
    if (!fullName || !nickName || !bio || !autoLayoutVertical3Value) {
      Alert.alert(t('Error'), t('All fields are compulsory'));
      return false;
    }
    if (!nameRegex.test(fullName)) {
      Alert.alert(t('Error'), t('Full Name should contain only alphabets'));
      return false;
    }
    if (!nameRegex.test(nickName)) {
      Alert.alert(t('Error'), t('Nickname should contain only alphabets'));
      return false;
    }
    return true;
  };

  const handleFinish = () => {
    if (validateInputs()) {
      navigation.navigate("HomeScreen");
    }
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
      </View>
      <ScrollView style={styles.container}>
        <View style={[styles.enterPersonalInfoStep2, { backgroundColor: theme.background }]}>
          <View style={[styles.autoLayoutVertical, styles.autoLayoutVerticalPosition]}>
            <View style={styles.autoLayoutVertical1}>
              <View style={styles.autoFlexBox}>
                <Text style={[styles.title,{ color: theme.text }]}>{t('Create public profile')} 👤</Text>
                <Text style={[styles.informationDetails,{ color: theme.text }]}>
                  {t('This username and profile will be a unique identity so people can find you and the artwork you share in the community.')}
                </Text>
              </View>
              <View style={styles.autoLayoutVertical1}>
                <ImageBackground
                  source={avatar}
                  style={[styles.typeeditComponentavatarIcon, styles.avatarImage]}
                  imageStyle={{ borderRadius: 60 }}
                />
                <View style={styles.inputFormdefaultStatedefa}>
                  <Text style={[styles.label, styles.textLayout,{ color: theme.text }]}>{t('Full Name')}</Text>
                  <TextInput
                    style={[styles.autoLayoutVertical3, styles.autoSpaceBlock,{ color: theme.text }]}
                    placeholder={t('Full Name')}
                    keyboardType="default"
                    placeholderTextColor="#616161"
                    value={fullName}
                    onChangeText={setFullName}
                  />
                  <View style={[styles.rectangle, styles.rectangleBg]} />
                </View>
                <View style={styles.inputFormdefaultStatedefa}>
                  <Text style={[styles.label, styles.textLayout,{ color: theme.text }]}>{t('NickName')}</Text>
                  <TextInput
                    style={[styles.autoLayoutVertical3, styles.autoSpaceBlock,{ color: theme.text }]}
                    placeholder={t('Enter NickName')}
                    keyboardType="default"
                    placeholderTextColor="#616161"
                    value={nickName}
                    onChangeText={setNickName}
                  />
                  <View style={[styles.rectangle, styles.rectangleBg]} />
                </View>
                <View style={styles.inputFormdefaultStatedefa}>
                  <Text style={[styles.label, styles.textLayout,{ color: theme.text }]}>{t('Pronoun')}</Text>
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
                    selectedItemLabelStyle={{ color: theme.text }}
                  />
                  </View>
                </View>
                <View style={styles.inputFormdefaultStatedefa}>
                  <Text style={[styles.label, styles.textLayout,{ color: theme.text }]}>{t('Bio')}</Text>
                  <TextInput
                    style={[styles.autoLayoutVertical3, styles.autoSpaceBlock,{ color: theme.text }]}
                    placeholder={t('Bio')}
                    multiline={true}
                    placeholderTextColor="#616161"
                    value={bio}
                    onChangeText={setBio}
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
          styles.buttonprimaryDarktrueCom,{ backgroundColor: theme.background },
          styles.autoLayoutVerticalPosition,
        ]}
      >
        <TouchableOpacity
          style={[
            styles.buttonpillTypepillIconf,
            styles.buttonpillTypepillIconfFlexBox,
          ]}
          activeOpacity={0.0}
          onPress={handleFinish}
        >
          <Text style={[styles.button, styles.textLayout]}>{t('Finish')}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};




const styles = StyleSheet.create({
  autoLayoutVerticalPosition: {
    paddingHorizontal: Padding.p_5xl,
    left: 0,
    position: "absolute",
    right: 0,
  },
  buttonprimaryDarktrueCom: {
    bottom: 0,
    borderStyle: "solid",
    borderColor: Color.colorDarkslategray_200,
    paddingTop: Padding.p_5xl,
    paddingBottom: Padding.p_17xl,
  },
  rectangle: {
    height: 1,
  },
  rectangleBg: {
    backgroundColor: "#424242",
    borderRadius: Border.br_81xl,
    alignSelf: "stretch",
  },
  container: {
    flex: 1,
    backgroundColor: Color.darkDarkbg,
  },
  autoLayoutVertical3Value: {
    fontSize: 12,
    fontWeight: "bold",
    fontFamily: "Urbanist-Bold",
  },
  autoFlexBox1: {
    flexDirection: "row",
    alignItems: "center",
  },
  textLayout: {
    fontSize: FontSize.bodyLargeBold_size,
    letterSpacing: 0,
    color: Color.skyWhite,
    marginLeft: "1%"
  },
  autoSpaceBlock: {
    alignSelf: "stretch",
  },
  autoSpaceBlock1: {
    marginTop: 14,
    alignSelf: "stretch",
  },
  dropdown: {
    backgroundColor: Color.darkDarkbg,
    borderColor: 'transparent',
    marginLeft: -7,
  },
  dropdownText: {
    color: 'white',
  },
  dropdownArrow: {
    tintColor: 'white',
  },
  dropdownContainer: {
    width: '100%',
    zIndex: 1000,
    marginTop: '3%',
  },
  dropdownPicker: {
    zIndex: 1000,
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
    marginLeft:"70%",
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
    fontSize: FontSize.h3Bold_size,
    textAlign: "left",
    color: Color.skyWhite,
    fontFamily: FontFamily.bodyXSmallBold,
    fontWeight: "700",
    alignSelf: "stretch",
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
  avatarImage: {
    borderRadius: 60,
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
  },
  buttonpillTypepillIconf: {
    padding: Padding.p_base,
    justifyContent: "center",
    backgroundColor: "#543acc",
    borderRadius: Border.br_81xl,
    alignItems: "center",
    flex: 1,
  },
  buttonpillTypepillIconfFlexBox: {
    justifyContent: "center",
    alignSelf: "stretch",
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
    height: 870,
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default CreatePublicProfile;
