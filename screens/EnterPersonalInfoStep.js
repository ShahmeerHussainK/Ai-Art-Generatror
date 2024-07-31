import React, { useState } from "react";
import { Pressable, Image, ImageBackground, StyleSheet, View, Text, TextInput, TouchableOpacity, ScrollView, Alert } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { useNavigation } from "@react-navigation/native";
import DateTimePicker from '@react-native-community/datetimepicker';
import { launchImageLibrary } from 'react-native-image-picker';
import { Padding, FontSize, Color, FontFamily, Border } from "../GlobalStyles";
import { useTranslation } from 'react-i18next';
import { useTheme } from "../context/ThemeContext";

const EnterPersonalInfoStep = () => {
  const { t } = useTranslation();
  const navigation = useNavigation();
  const { theme, toggleTheme, isDarkMode } = useTheme();
  const [date, setDate] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [autoLayoutVertical3Open, setAutoLayoutVertical3Open] = useState(false);
  const [autoLayoutVertical3Value, setAutoLayoutVertical3Value] = useState(null);
  const [autoLayoutVertical3Items, setAutoLayoutVertical3Items] = useState([
    { value: "Male", label: t("Male") },
    { value: "Female", label: t("Female") },
  ]);
  const [avatar, setAvatar] = useState(require("../assets/avatar.png"));

  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [streetAddress, setStreetAddress] = useState("");

  const handleDateChange = (event, selectedDate) => {
    setShowDatePicker(false);
    if (selectedDate) {
      setDate(selectedDate);
    }
  };

  const showDatePickerAndroid = () => {
    setShowDatePicker(true);
  };

  const handleImagePicker = () => {
    launchImageLibrary({ mediaType: 'photo' }, (response) => {
      if (response.assets && response.assets.length > 0) {
        setAvatar({ uri: response.assets[0].uri });
      }
    });
  };

  const today = new Date();
  const maxDate = today;
  const minDate = new Date(today.getFullYear() - 7, today.getMonth(), today.getDate());

  const handleSkip = () => {
    navigation.navigate("HomeScreen");
  };

  const handleContinue = () => {
    if (!validateInputs()) {
      return;
    }
    navigation.navigate("CreatePublicProfile", { avatar });
  };

  const validateInputs = () => {
    if (!fullName.trim()) {
      showAlert("Please enter Full Name.");
      return false;
    }

    if (!/^[a-zA-Z ]+$/.test(fullName.trim())) {
      showAlert("Full Name should only contain alphabet characters.");
      return false;
    }

    if (!phoneNumber.trim()) {
      showAlert("Please enter Phone Number.");
      return false;
    }

    if (!/^\d+$/.test(phoneNumber.trim())) {
      showAlert("Phone Number should only contain numeric characters.");
      return false;
    }

    if (!date) {
      showAlert("Please choose Date of Birth.");
      return false;
    }

    const dob = new Date(date);
    const ageDiff = today.getFullYear() - dob.getFullYear();
    const monthDiff = today.getMonth() - dob.getMonth();
    const dayDiff = today.getDate() - dob.getDate();

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
      ageDiff--;
    }

    if (ageDiff < 7) {
      showAlert("You must be at least 7 years old.");
      return false;
    }

    if (!autoLayoutVertical3Value) {
      showAlert("Please select Gender.");
      return false;
    }

    if (!streetAddress.trim()) {
      showAlert("Please enter Street Address.");
      return false;
    }

    return true;
  };

  const showAlert = (message) => {
    Alert.alert("Validation Error", message, [{ text: "OK", onPress: () => {} }]);
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
                <Text style={[styles.title, { color: theme.text }]}>{t('Enter personal info')} 📋</Text>
                <Text style={[styles.informationDetails,{ color: theme.text }]}>
                {t('Please enter your profile. Dont worry, only you can see your personal data. No one else will be able to see it. Or you can skip it for now.')}
                </Text>
              </View>
              <View style={styles.autoLayoutVertical1}>
                <View style={styles.imageContainer}>
                  <ImageBackground
                    source={avatar}
                    style={styles.typeeditComponentavatarIcon}
                    imageStyle={styles.avatarImage}
                  >
                    <TouchableOpacity style={styles.pickerIconContainer} onPress={handleImagePicker}>
                      <Image
                        style={styles.pickerIcon}
                        source={require("../assets/picker.png")}
                      />
                    </TouchableOpacity>
                  </ImageBackground>
                </View>
                <View style={styles.inputFormdefaultStatedefa}>
                  <Text style={[styles.label, styles.textLayout,{ color: theme.text }]}>{t('Full Name')}</Text>
                  <TextInput
                    style={[styles.autoLayoutVertical3,{ color: theme.text }, styles.autoSpaceBlock]}
                    placeholder={t('Full Name')}
                    keyboardType="default"
                    placeholderTextColor="#616161"
                    value={fullName}
                    onChangeText={setFullName}
                  />
                  <View style={[styles.rectangle, styles.rectangleBg]} />
                </View>
                <View style={styles.inputFormdefaultStatedefa}>
                  <Text style={[styles.label, styles.textLayout,{ color: theme.text }]}>{t('Phone Number')}</Text>
                  <TextInput
                    style={[styles.autoLayoutVertical3,{ color: theme.text }, styles.autoSpaceBlock]}
                    placeholder={t('Phone Number')}
                    keyboardType="phone-pad"
                    placeholderTextColor="#616161"
                    value={phoneNumber}
                    onChangeText={setPhoneNumber}
                  />
                  <View style={[styles.rectangle, styles.rectangleBg]} />
                </View>

                <View style={styles.inputFormdefaultStatedefa}>
                  <Text style={[styles.label, styles.textLayout, { color: theme.text }]}>{t('Date of Birth')}</Text>
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
                  {showDatePicker && (
                    <DateTimePicker
                      value={date || new Date()}
                      mode="date"
                      display="default"
                      minimumDate={minDate}
                      maximumDate={maxDate}
                      onChange={handleDateChange}
                    />
                  )}
                </View>
                <View style={styles.inputFormdefaultStatedefa}>
                  <Text style={[styles.label, styles.textLayout,{ color: theme.text }]}>{t('Gender')}</Text>
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
                  <Text style={[styles.label, styles.textLayout,{ color: theme.text }]}>{t('Street Address')}</Text>
                  <TextInput
                    style={[styles.autoLayoutVertical3,{ color: theme.text }, styles.autoSpaceBlock]}
                    placeholder={t('Street Address')}
                    multiline={true}
                    placeholderTextColor="#616161"
                    value={streetAddress}
                    onChangeText={setStreetAddress}
                  />
                  <View style={[styles.rectangle, styles.rectangleBg]} />
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={[styles.button2ButtonsDarktrueC, { backgroundColor: theme.background }, styles.autoLayoutVerticalPosition]}>
        <View style={[styles.autoLayoutHorizontal4, styles.autoFlexBox]}>
          <TouchableOpacity
            style={[styles.buttonpillTypepillIconf,{ backgroundColor: theme.promptbackground } ]}
            activeOpacity={0.0}
            onPress={handleSkip}
          >
            <Text style={[styles.button, styles.textLayout,{ color: theme.canceltext }]}>{t('Skip')}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.buttonpillTypepillIconf3, styles.buttonpillFlexBox]}
            activeOpacity={0.0}
            onPress={handleContinue}
          >
            <Text style={[styles.button, styles.textLayout]}>{t('Continue')}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
    marginLeft: -7,
  },
  dropdownText: {
    color: 'white',
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
  pickerIconContainer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pickerIcon: {
    width: 30,
    height: 30,
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
    height: 1020,
    overflow: "hidden",
    width: "100%",
    flex: 1,
    backgroundColor: Color.darkDarkbg,
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
});

export default EnterPersonalInfoStep;

           
