import React, { useState, useEffect } from "react";
import {
  Pressable,
  Image,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize, Padding } from "../GlobalStyles";
import CheckBox from "@react-native-community/checkbox";
import auth from "@react-native-firebase/auth";
import {
  GoogleSignin,
  statusCodes,
} from "@react-native-google-signin/google-signin";
import { useTranslation } from "react-i18next";
import { useTheme } from "../context/ThemeContext";

const SignUp = () => {
  const { t } = useTranslation();
  const navigation = useNavigation();
  const { theme, toggleTheme, isDarkMode } = useTheme();
  const [isChecked, setIsChecked] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        "483679690434-mpduapks59g9hnvalpn1b439mkb6n8o1.apps.googleusercontent.com",
    });
  }, []);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    return passwordRegex.test(password);
  };

  const toggleModal = async () => {
    if (!email) {
      Alert.alert(t("Incomplete Fields"), t("Please Enter Email"));
    } else if (!validateEmail(email)) {
      Alert.alert(t("Invalid Email"), t("Please enter a valid email address"));
    } else if (!password) {
      Alert.alert(t("Incomplete Fields"), t("Please Enter Password"));
    } else if (!validatePassword(password)) {
      Alert.alert(
        t("Invalid Password"),
        t(
          "Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, and one number"
        )
      );
    } else if (!isChecked) {
      Alert.alert(
        t("Incomplete Fields"),
        t("Please Accept terms and conditions")
      );
    } else {
      setModalVisible(!isModalVisible);
      try {
        await auth().createUserWithEmailAndPassword(email, password);
        setModalVisible(!isModalVisible);
        navigation.navigate("EnterPersonalInfoStep");
      } catch (error) {
        setError(error.message);
        Alert.alert(
          "Already Registerd",
          "User already registered, Enter new Email and Passowrd"
        );
      }
    }
  };

  const onGoogleButtonPress = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log("User Info --> ", userInfo);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log("User cancelled the login flow");
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log("Signing in");
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log("Play services not available or outdated");
      } else {
        console.log("Some other error happened: ", error);
      }
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={[styles.signUp, { backgroundColor: theme.background }]}>
        <View style={styles.autoLayoutVertical}>
          <View>
            <Pressable style={styles.autoLayoutHorizontal}>
              <Pressable
                style={styles.gobackLayout}
                onPress={() => navigation.goBack()}
              >
                <Image
                  style={styles.icon}
                  resizeMode="cover"
                  source={
                    isDarkMode
                      ? require("../assets/iconlyregularoutlinearrow--left.png")
                      : require("../assets/blackarrow.png")
                  }
                />
              </Pressable>
            </Pressable>
          </View>
          <View style={[styles.autoLayoutVertical1, styles.autoSpaceBlock1]}>
            <View style={styles.elementstitleDescriptionH}>
              <Text
                style={[styles.title, styles.titleTypo, { color: theme.text }]}
              >
                {t("Hello there")} 👋
              </Text>
              <Text
                style={[
                  styles.informationDetails,
                  styles.orLayout,
                  { color: theme.text },
                ]}
              >
                {t("Please enter your email & password to create an account.")}
              </Text>
            </View>
            <View style={[styles.autoLayoutVertical2, styles.autoSpaceBlock]}>
              <View style={styles.inputFormrightIconStated}>
                <Text
                  style={[
                    styles.label,
                    styles.labelLayout,
                    { color: theme.text },
                  ]}
                >
                  {t("Email")}
                </Text>
                <View style={styles.emailInputWrapper}>
                  <TextInput
                    style={[
                      styles.emailInput,
                      styles.autoLayoutVertical3,
                      { color: theme.text },
                    ]}
                    placeholder={t("Enter Email")}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    placeholderTextColor="#616161"
                    onChangeText={setEmail}
                    value={email}
                  />
                  <Image
                    style={styles.messageIcon}
                    source={
                      isDarkMode
                        ? require("../assets/Message.png")
                        : require("../assets/MessageLight.png")
                    }
                  />
                </View>
              </View>
              <View style={styles.autoSpaceBlock2}>
                <Text
                  style={[
                    styles.label,
                    styles.labelLayout,
                    { color: theme.text },
                  ]}
                >
                  {t("Password")}
                </Text>
                <View style={styles.passwordInputWrapper}>
                  <TextInput
                    style={[
                      styles.passwordInput,
                      styles.signInTypo,
                      { color: theme.text },
                    ]}
                    placeholder={t("Enter Password")}
                    secureTextEntry={!passwordVisible}
                    placeholderTextColor="#616161"
                    onChangeText={setPassword}
                    value={password}
                  />
                  <TouchableOpacity
                    onPress={() => setPasswordVisible(!passwordVisible)}
                  >
                    <Image
                      style={styles.passwordToggleIcon}
                      source={
                        passwordVisible
                          ? require("../assets/Show.png")
                          : require("../assets/Hide.png")
                      }
                    />
                  </TouchableOpacity>
                </View>
                <View style={[styles.rectangle, styles.rectangleBg]} />
              </View>
              <View
                style={[
                  styles.styletextThemedarkSelect,
                  styles.autoSpaceBlock1,
                ]}
              >
                <View style={styles.checkboxWrapper}>
                  <CheckBox
                    tintColors={{ true: "#6949FF", false: "#6949FF" }}
                    value={isChecked}
                    onValueChange={(value) => setIsChecked(value)}
                    style={styles.checkbox}
                  />
                </View>
                <Text
                  style={[
                    styles.iAgreeToContainer,
                    styles.textTypo,
                    { color: theme.text },
                  ]}
                >
                  {" "}
                  {t("I agree to Artify")} {"   "}
                  <Text
                    style={styles.termsPrivacy}
                    onPress={() =>
                      navigation.navigate("DarkSettingsPrivacyPolicy")
                    }
                  >
                    {t("Terms, & Privacy Policy.")}
                  </Text>
                </Text>
              </View>
            </View>
            <View style={[styles.autoLayoutHorizontal4, styles.autoFlexBox]}>
              <Text
                style={[
                  styles.alreadyHaveAn,
                  styles.orTypo,
                  { color: theme.text },
                ]}
              >
                {t("Already have an account")}?
              </Text>
              <TouchableOpacity
                activeOpacity={0.0}
                onPress={() => navigation.navigate("SignIn")}
              >
                <Text style={[styles.signIn, styles.labelLayout]}>
                  {t("Sign in")}
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.autoSpaceBlock}>
              <View style={styles.elementsorContinueWithDar}>
                <Image
                  style={[
                    styles.darktrueComponentdividerIcon1,
                    styles.darktrueIconLayout,
                  ]}
                  resizeMode="cover"
                  source={require("../assets/darktrue-componentdivider1.png")}
                />
                <Text style={[styles.or, styles.orTypo, { color: theme.text }]}>
                  {t("or continue with")}
                </Text>
                <Image
                  style={[
                    styles.darktrueComponentdividerIcon2,
                    styles.darktrueIconLayout,
                  ]}
                  resizeMode="cover"
                  source={require("../assets/darktrue-componentdivider1.png")}
                />
              </View>
              <View
                style={[styles.autoLayoutHorizontal3, styles.autoSpaceBlock1]}
              >
                <Pressable
                  style={[
                    styles.buttonpillTypesocialMedia,
                    { backgroundColor: theme.promptbackground },
                    styles.buttonpillFlexBox,
                  ]}
                  onPress={onGoogleButtonPress}
                >
                  <View style={styles.autoLayoutHorizontal4}>
                    <Image
                      style={[styles.frameIcon, styles.iconLayout]}
                      resizeMode="cover"
                      source={require("../assets/frame.png")}
                    />
                  </View>
                </Pressable>
                <Pressable
                  style={[
                    styles.buttonpillTypesocialMedia1,
                    { backgroundColor: theme.promptbackground },
                    styles.buttonpillFlexBox,
                  ]}
                >
                  <View style={styles.autoLayoutHorizontal4}>
                    <Image
                      style={[styles.frameIcon, styles.iconLayout]}
                      resizeMode="cover"
                      source={require("../assets/frame2.png")}
                    />
                  </View>
                </Pressable>
                <Pressable
                  style={[
                    styles.buttonpillTypesocialMedia1,
                    { backgroundColor: theme.promptbackground },
                    styles.buttonpillFlexBox,
                  ]}
                >
                  <View style={styles.autoLayoutHorizontal4}>
                    <Image
                      style={[styles.frameIcon, styles.iconLayout]}
                      resizeMode="cover"
                      source={require("../assets/frame3.png")}
                    />
                  </View>
                </Pressable>
              </View>
            </View>
          </View>
        </View>
        <View
          style={[
            styles.buttonprimaryDarktrueCom,
            { backgroundColor: theme.background },
          ]}
        >
          <TouchableOpacity
            style={[styles.buttonpillTypepillIconf, styles.buttonpillFlexBox]}
            activeOpacity={0.0}
            onPress={toggleModal}
          >
            <Text style={[styles.button, styles.labelLayout]}>
              {t("Sign up")}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: "space-between",
  },
  autoSpaceBlock1: {
    marginTop: 20,
    alignSelf: "stretch",
  },
  autoSpaceBlock2: {
    marginTop: 60,
    alignSelf: "stretch",
  },
  titleTypo: {
    textAlign: "left",
    color: Color.skyWhite,
    fontFamily: FontFamily.bodyXSmallBold,
    fontWeight: "bold",
  },
  orLayout: {
    fontSize: FontSize.bodyXLargeBold_size,
  },
  autoSpaceBlock: {
    marginTop: 20,
    alignSelf: "stretch",
  },
  labelLayout: {
    fontSize: FontSize.bodyXLargeBold_size,
    letterSpacing: 0,
    marginLeft: 5,
  },
  emailInputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#424242",
    paddingBottom: 5,
    marginTop: 10,
  },
  emailInput: {
    flex: 1,
    fontSize: FontSize.h5Semibold_size,
    fontFamily: FontFamily.bodyXSmallBold,
    fontWeight: "700",
    color: "white",
  },
  messageIcon: {
    width: 20,
    height: 20,
    marginLeft: 10,
  },
  passwordInputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "transparent",
    height: 48,
  },
  passwordInput: {
    flex: 1,
    fontSize: FontSize.h5Semibold_size,
    fontFamily: FontFamily.bodyXSmallBold,
    fontWeight: "700",
    color: "white",
  },
  signInTypo: {
    fontFamily: FontFamily.bodyXSmallBold,
    fontWeight: "700",
  },
  passwordToggleIcon: {
    width: 20,
    height: 20,
    marginLeft: 10,
  },
  rectangle: {
    height: 1,
  },
  rectangleBg: {
    backgroundColor: "#424242",
    borderRadius: Border.br_81xl,
    alignSelf: "stretch",
  },
  textTypo: {
    fontFamily: FontFamily.bodyMediumSemibold,
    fontWeight: "600",
    lineHeight: 16,
    fontSize: FontSize.bodyXLargeBold_size,
    letterSpacing: 0,
    textAlign: "left",
    color: "white",
  },
  darktrueIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  orTypo: {
    fontFamily: FontFamily.bodyXSmallMedium,
    fontWeight: "500",
    textAlign: "center",
  },
  buttonpillFlexBox: {
    padding: Padding.p_base,
    justifyContent: "center",
    borderRadius: Border.br_81xl,
    alignItems: "center",
  },
  iconLayout: {
    height: 24,
    width: 24,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  gobackLayout: {
    height: 28,
    width: 28,
  },
  autoLayoutHorizontal: {
    alignItems: "center",
    flexDirection: "row",
  },
  title: {
    fontSize: FontSize.h3Bold_size,
    alignSelf: "stretch",
  },
  informationDetails: {
    fontFamily: FontFamily.bodySmallRegular,
    letterSpacing: 0,
    fontSize: FontSize.bodyXLargeBold_size,
    textAlign: "left",
    color: Color.skyWhite,
    alignSelf: "stretch",
  },
  elementstitleDescriptionH: {
    justifyContent: "center",
    alignSelf: "stretch",
  },
  label: {
    textAlign: "left",
    color: Color.skyWhite,
    fontFamily: FontFamily.bodyXSmallBold,
    fontWeight: "bold",
    alignSelf: "stretch",
  },
  autoLayoutVertical3: {
    fontSize: FontSize.h5Semibold_size,
    alignSelf: "stretch",
    fontFamily: FontFamily.bodyXSmallBold,
    fontWeight: "700",
  },
  inputFormrightIconStated: {
    alignSelf: "stretch",
  },
  iAgreeTo: {
    color: Color.skyWhite,
  },
  termsPrivacy: {
    color: "#6949FF",
    fontFamily: FontFamily.bodyMediumSemibold,
    fontWeight: "600",
    fontSize: FontSize.bodyLargeBold_size,
    textAlign: "left",
  },
  iAgreeToContainer: {
    marginLeft: 16,
    flex: 1,
  },
  styletextThemedarkSelect: {
    marginTop: "5%",
    alignItems: "center",
    flexDirection: "row",
  },
  checkboxWrapper: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  checkbox: {
    width: "100%",
    height: "100%",
  },
  autoLayoutVertical2: {
    alignItems: "center",
  },
  darktrueComponentdividerIcon: {
    marginTop: "5%",
    alignSelf: "stretch",
    width: "100%",
  },
  alreadyHaveAn: {
    textAlign: "center",
    lineHeight: 26,
    fontSize: FontSize.bodyXLargeBold_size,
    letterSpacing: 0,
    color: Color.skyWhite,
    marginRight: "5%",
  },
  signIn: {
    marginLeft: 8,
    textAlign: "center",
    color: Color.primary900,
    fontFamily: FontFamily.bodyXSmallBold,
    fontWeight: "700",
  },
  darktrueComponentdividerIcon1: {
    flex: 1,
  },
  or: {
    color: Color.greyscale300,
    textAlign: "center",
    marginLeft: 16,
    lineHeight: 29,
    fontSize: FontSize.bodyXLargeBold_size,
    fontWeight: "500",
  },
  darktrueComponentdividerIcon2: {
    marginLeft: 16,
    flex: 1,
  },
  elementsorContinueWithDar: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  frameIcon: {
    overflow: "hidden",
  },
  continueWithGoogle: {
    marginLeft: 16,
    textAlign: "left",
    color: Color.skyWhite,
    fontFamily: FontFamily.bodyXSmallBold,
    fontWeight: "700",
    display: "none",
  },
  autoLayoutHorizontal4: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  autoFlexBox: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "10%",
  },
  buttonpillTypesocialMedia: {
    padding: Padding.p_base,
    borderColor: Color.colorDarkslategray_200,
    borderStyle: "solid",
    flex: 1,
  },
  buttonpillTypesocialMedia1: {
    padding: Padding.p_base,
    borderColor: Color.colorDarkslategray_200,
    borderStyle: "solid",
    flex: 1,
    marginLeft: 16,
  },
  autoLayoutHorizontal3: {
    flexDirection: "row",
  },
  autoLayoutVertical1: {
    alignItems: "center",
  },
  autoLayoutVertical: {
    height: 888,
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_5xl,
    left: 0,
    right: 0,
    position: "absolute",
  },
  button: {
    textAlign: "center",
    color: Color.skyWhite,
    fontFamily: FontFamily.bodyXSmallBold,
    fontWeight: "700",
    alignSelf: "stretch",
  },
  buttonpillTypepillIconf: {
    backgroundColor: Color.alertsStatusButtonDisabled,
    alignSelf: "stretch",
  },
  buttonprimaryDarktrueCom: {
    bottom: 30,
    borderColor: Color.colorDarkslategray_200,
    borderStyle: "solid",
    paddingHorizontal: Padding.p_5xl,
    left: 0,
    right: 0,
    position: "absolute",
  },
  text: {
    marginTop: -13,
    left: 23,
    fontFamily: FontFamily.bodyMediumSemibold,
    fontWeight: "600",
    lineHeight: 26,
    fontSize: FontSize.bodyLargeBold_size,
    letterSpacing: 0,
    textAlign: "left",
    color: Color.skyWhite,
  },
  signUp: {
    height: 700,
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default SignUp;
