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
import CheckBox from "@react-native-community/checkbox";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";
import auth from "@react-native-firebase/auth";
import SigninSuccessful from "./SIgninSuccessful";
import {
  GoogleSignin,
  statusCodes,
} from "@react-native-google-signin/google-signin";
import { useTranslation } from "react-i18next";
import { useTheme } from "../context/ThemeContext";

const SignIn = () => {
  const { t } = useTranslation();
  const navigation = useNavigation();
  const { theme, toggleTheme, isDarkMode } = useTheme();
  const [isChecked, setIsChecked] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isModalVisible, setModalVisible] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);



  const handleCloseModal = () => {
    setModalVisible(false);
    navigation.navigate("HomeScreen");
  };

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        "483679690434-mpduapks59g9hnvalpn1b439mkb6n8o1.apps.googleusercontent.com",
    });
  }, []);

  const toggleModal = async () => {
    if (!email) {
      Alert.alert(t("Incomplete Fields"), t("Please Enter Email"));
    } else if (!password) {
      Alert.alert(t("Incomplete Fields"), t("Please Enter Password"));
    } else if (!password && !email) {
      Alert.alert(t("Incomplete Fields"), t("Please Enter Email and Password"));
    }
    if (email && password) {
      try {
        await auth().signInWithEmailAndPassword(email, password);
        setModalVisible(true);
      } catch (error) {
        Alert.alert(t("Invalid Creds"), t("Invalid UserName or Password"));
        setError(error.message);
        console.log(error.message);
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
    <View style={[styles.signIn, { backgroundColor: theme.background }]}>
      <View style={styles.autoLayoutVertical}>
        <Pressable
          style={[
            styles.navbardefaultDarktrueCom,
            styles.autoLayoutHorizontalFlexBox,
          ]}
          onPress={() => navigation.goBack()}
        >
          <Pressable
            style={[
              styles.autoLayoutHorizontal,
              styles.autoLayoutHorizontalFlexBox,
            ]}
            onPress={() => navigation.goBack()}
          >
            <Image
              style={[styles.typelogoDefaultComponentl, styles.gobackLayout]}
              resizeMode="cover"
              source={require("../assets/typelogo-default-componentlogo.png")}
            />
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
        </Pressable>
        <View style={[styles.autoLayoutVertical1, styles.autoSpaceBlock1]}>
          <View style={styles.elementstitleDescriptionH}>
            <Text
              style={[styles.title, styles.titleTypo, { color: theme.text }]}
            >
              {t("Welcome back")} 👋
            </Text>
            <Text
              style={[
                styles.informationDetails,
                styles.orLayout,
                { color: theme.text },
              ]}
            >
              {t("Please enter your email & password to sign in.")}
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
              style={[styles.styletextThemedarkSelect, styles.autoSpaceBlock1]}
            >
              <CheckBox
                tintColors={{ true: "#6949FF", false: "#6949FF" }}
                value={isChecked}
                onValueChange={(value) => setIsChecked(value)}
              />
              <Text
                style={[
                  styles.unchecked,
                  styles.textTypo,
                  { color: theme.text },
                ]}
              >
                {t("Remember me")}
              </Text>
            </View>
          </View>
          <Image
            style={[
              styles.darktrueComponentdividerIcon,
              styles.darktrueIconLayout,
            ]}
            resizeMode="cover"
            source={require("../assets/darktrue-componentdivider.png")}
          />
          <TouchableOpacity
            activeOpacity={0.0}
            onPress={() => navigation.navigate("ResetYourPassword")}
          >
            <Text style={[styles.forgotPassword, styles.signUpTypo]}>
              {t("Forgot password")}?
            </Text>
          </TouchableOpacity>
          <View style={[styles.autoLayoutHorizontal4, styles.autoFlexBox]}>
            <Text
              style={[
                styles.dontHaveAn,
                styles.buttonTypo,
                { color: theme.text },
              ]}
            >
              {t("Dont have an account")}?
            </Text>
            <TouchableOpacity
              activeOpacity={0.0}
              onPress={() => navigation.navigate("SignUp")}
            >
              <Text style={[styles.signUp, styles.buttonTypos]}>
                {t("Sign Up")}
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
                  styles.buttonpillFlexBox,
                  { backgroundColor: theme.promptbackground },
                ]}
                onPress={onGoogleButtonPress}
              >
                <View style={styles.autoLayoutHorizontal4}>
                  <Image
                    style={styles.frameIcon}
                    resizeMode="cover"
                    source={require("../assets/frame.png")}
                  />
                </View>
              </Pressable>
              <Pressable
                style={[
                  styles.buttonpillTypesocialMedia1,
                  styles.buttonpillFlexBox,
                  ,
                  { backgroundColor: theme.promptbackground },
                ]}
              >
                <View style={styles.autoLayoutHorizontal4}>
                  <Image
                    style={styles.frameIcon}
                    resizeMode="cover"
                    source={require("../assets/frame2.png")}
                  />
                </View>
              </Pressable>
              <Pressable
                style={[
                  styles.buttonpillTypesocialMedia1,
                  styles.buttonpillFlexBox,
                  ,
                  { backgroundColor: theme.promptbackground },
                ]}
              >
                <View style={styles.autoLayoutHorizontal4}>
                  <Image
                    style={styles.frameIcon}
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
            {t("Sign in")}
          </Text>
        </TouchableOpacity>
      </View>
      <SigninSuccessful isVisible={isModalVisible} onClose={handleCloseModal} />
    </View>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: "space-between",
  },
  autoLayoutHorizontalFlexBox: {
    width: 28,
    alignItems: "center",
    flexDirection: "row",
  },
  gobackLayout: {
    marginBottom: "100%",
    height: 28,
    width: 28,
  },
  buttonTypo: {
    textAlign: "center",
    color: Color.skyWhite,
    fontFamily: FontFamily.bodyXSmallBold,
    fontWeight: "700",
  },
  buttonTypos: {
    textAlign: "center",
    color: "#6949FF",
    fontFamily: FontFamily.bodyXSmallBold,
    fontWeight: "bold",
  },
  autoSpaceBlock1: {
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
    marginTop: "5%",
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
  },
  emailInput: {
    flex: 1,
    fontSize: FontSize.h5Semibold_size,
    fontFamily: FontFamily.bodyXSmallBold,
    fontWeight: "700",
    color: "white",
  },
  passwordInputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "transparent",
    height: 48,
  },
  textTypo: {
    fontFamily: FontFamily.bodyMediumSemibold,
    fontWeight: "600",
    lineHeight: 26,
    fontSize: FontSize.bodyLargeBold_size,
    letterSpacing: 0,
    textAlign: "left",
    color: Color.skyWhite,
  },
  darktrueIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  signUpTypo: {
    color: Color.primary900,
    textAlign: "center",
    fontFamily: FontFamily.bodyXSmallBold,
    fontWeight: "bold",
  },
  orTypo: {
    fontFamily: FontFamily.bodyXSmallMedium,
    fontWeight: "500",
    textAlign: "center",
  },
  buttonpillFlexBox: {
    padding: Padding.p_base,
    borderRadius: Border.br_81xl,
    justifyContent: "center",
    alignItems: "center",
  },
  typelogoDefaultComponentl: {
    borderRadius: Border.br_341xl,
    display: "none",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  autoLayoutHorizontal: {
    alignItems: "center",
    flexDirection: "row",
  },
  titleSection: {
    fontSize: FontSize.h4Bold_size,
    lineHeight: 38,
    marginLeft: 16,
    display: "none",
    flex: 1,
  },
  autoLayoutHorizontal1: {
    marginLeft: 16,
    display: "none",
  },
  navbardefaultDarktrueCom: {
    height: 48,
    paddingHorizontal: 0,
    flexDirection: "row",
    marginTop: "2%",
  },
  title: {
    fontSize: FontSize.h3Bold_size,
    alignSelf: "stretch",
    marginTop: "2%",
  },
  informationDetails: {
    fontFamily: FontFamily.bodySmallRegular,
    letterSpacing: 0,
    fontSize: FontSize.bodyXLargeBold_size,
    textAlign: "left",
    alignSelf: "stretch",
    color: Color.skyWhite,
  },
  elementstitleDescriptionH: {
    justifyContent: "center",
    alignSelf: "stretch",
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
  autoSpaceBlock2: {
    marginTop: 30,
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
  passwordToggleIcon: {
    width: 20,
    height: 20,
    marginLeft: 10,
  },
  messageIcon: {
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
  inputFormrightIconStated: {
    alignSelf: "stretch",
  },
  vector: {
    backgroundColor: Color.primary900,
  },
  unchecked: {
    marginLeft: 16,
    flex: 1,
  },
  styletextThemedarkSelect: {
    marginTop: "8%",
    alignItems: "center",
    flexDirection: "row",
  },
  autoLayoutVertical2: {
    alignItems: "center",
  },
  darktrueComponentdividerIcon: {
    marginTop: "13%",
    alignSelf: "stretch",
    width: "100%",
  },
  forgotPassword: {
    alignSelf: "stretch",
    lineHeight: 29,
    fontSize: FontSize.bodyXLargeBold_size,
  },
  dontHaveAn: {
    lineHeight: 26,
    fontSize: FontSize.bodyLargeBold_size,
    letterSpacing: 0,
    color: Color.skyWhite,
    fontWeight: "500",
  },
  signUp: {
    marginLeft: 8,
    lineHeight: 26,
    fontSize: FontSize.bodyLargeBold_size,
    letterSpacing: 0,
  },
  darktrueComponentdividerIcon1: {
    flex: 1,
  },
  or: {
    color: Color.greyscale300,
    lineHeight: 29,
    fontSize: FontSize.bodyXLargeBold_size,
    marginLeft: 16,
  },
  darktrueComponentdividerIcon2: {
    marginLeft: 16,
    flex: 1,
  },
  elementsorContinueWithDar: {
    justifyContent: "center",
    alignSelf: "stretch",
    alignItems: "center",
    flexDirection: "row",
    marginTop: "5%",
  },
  frameIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
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
    marginTop: "2%",
  },
  buttonpillTypesocialMedia: {
    padding: Padding.p_base,
    borderStyle: "solid",
    borderRadius: Border.br_81xl,
    flex: 1,
  },
  buttonpillTypesocialMedia1: {
    backgroundColor: Color.darkDark3,
    padding: Padding.p_base,
    borderColor: Color.colorDarkslategray_200,
    borderStyle: "solid",
    borderRadius: Border.br_81xl,
    flex: 1,
    marginLeft: 16,
  },
  autoLayoutHorizontal3: {
    flexDirection: "row",
    marginTop: "10%",
  },
  autoLayoutVertical1: {
    alignItems: "center",
  },
  autoLayoutVertical: {
    height: "auto",
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_5xl,
    left: 0,
    right: 0,
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
    bottom: "3%",
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
  signIn: {
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default SignIn;
