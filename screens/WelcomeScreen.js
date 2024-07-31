import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable, TouchableOpacity, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Padding, Border, FontSize, Color, FontFamily } from "../GlobalStyles";
import { useTranslation } from 'react-i18next';
import { getAuth, signInWithPopup, TwitterAuthProvider } from "@react-native-firebase/auth";
// const { RNTwitterSignIn } = NativeModules;

import { useTheme } from "../context/ThemeContext";

const { width } = Dimensions.get('window');
let theme1;

const WelcomeScreen = () => {
  const { t } = useTranslation();
  const navigation = useNavigation();
  const { theme, toggleTheme, isDarkMode } = useTheme();
  theme1=theme
  const auth = getAuth();
signInWithPopup(auth)
  .then((result) => {
    // This gives you a the Twitter OAuth 1.0 Access Token and Secret.
    // You can use these server side with your app's credentials to access the Twitter API.
    const credential = TwitterAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const secret = credential.secret;

    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = TwitterAuthProvider.credentialFromError(error);
    // ...
  });


  return (
    <View style={[styles.container,{ backgroundColor: theme.background }]}>
      <View style={styles.content}>
        <Image
          style={styles.logo}
          resizeMode="cover"
          source={require("../assets/typelogo-default-componentlogo2.png")}
        />
        <View style={styles.textContainer}>
          <Text style={[styles.title,{ color: theme.text }]}>{t('Artify')}</Text>
          <Text style={[styles.description,{ color: theme.text }]}>
          {t('Welcome! Lets dive into your account')}!
          </Text>
        </View>
        <View style={styles.socialButtonsContainer}>
          <SocialButton icon={require("../assets/frame.png")} text={t('Continue with Google')} />
          {/* <SocialButton icon={require("../assets/frame4.png")} text="Continue with Apple" /> */}
          <SocialButton icon={require("../assets/frame5.png")} text={t('Continue with Facebook')}/>
          <SocialButton icon={require("../assets/frame3.png")} text={t('Continue with Twitter')}/>
        </View>
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.8}
          onPress={() => navigation.navigate("SignIn")}
        >
          <Text style={styles.buttonText}>
          {t('Sign in with password')}
          </Text>
        </TouchableOpacity>
        <View style={styles.footer}>
          <Text style={[styles.footerText,{ color: theme.text }]}>{t('Dont have an account')}?</Text>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate("SignUp")}
          >
            <Text style={[styles.footerText, styles.signUp]}>{t('Sign Up')}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const SocialButton = ({ icon, text }) => (
  
  <View style={styles.socialButtonWrapper}>
    <TouchableOpacity activeOpacity={0.8} style={[styles.socialButton, { backgroundColor: theme1.promptbackground }]} android_ripple={{ color: Color.darkDark3 }} onPress={() => {}}>
      <Image style={styles.socialButtonIcon} resizeMode="cover" source={icon} />
      <Text style={[styles.socialButtonText,{color:theme1.text}]}>{text}</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    alignItems: "center",
    paddingHorizontal: Padding.p_5xl,
    width: width * 0.8,
    maxWidth: 400,
  },
  logo: {
    width: width * 0.5,
    height: width * 0.5,
    borderRadius: Border.br_981xl,
  },
  textContainer: {
    marginTop: "15%",
    alignItems: "center",
  },
  title: {
    fontSize: FontSize.h2Bold_size,
    fontFamily: FontFamily.bodyXSmallBold,
    fontWeight: "700",
    color: Color.skyWhite,
    marginBottom: "5%",
  },
  description: {
    fontSize: FontSize.bodyXLargeBold_size,
    fontFamily: FontFamily.bodySmallRegular,
    color: Color.skyWhite,
    textAlign: "center",
  },
  socialButtonsContainer: {
    marginTop: "5%",
    marginBottom: Padding.p_3xl,
    alignSelf: "center",
    width: "100%",
    justifyContent: "center",
    borderRadius: Border.br_81xl,
  },
  socialButtonWrapper: {
    borderRadius: Border.br_81xl,
    marginBottom: Padding.p_lg,
    overflow: "hidden", 
  },
  socialButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: Padding.p_base,
    paddingHorizontal: Padding.p_2xl,
  },
  socialButtonIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  socialButtonText: {
    fontFamily: FontFamily.bodyXSmallBold,
    fontWeight: "700",
    color: Color.skyWhite,
  },
  button: {
    backgroundColor: Color.primary900,
    paddingVertical: Padding.p_base,
    paddingHorizontal: Padding.p_2xl,
    borderRadius: Border.br_81xl,
    marginBottom: Padding.p_3xl,
    alignSelf: "stretch",
  },
  buttonText: {
    fontSize: FontSize.bodyLargeBold_size,
    fontFamily: FontFamily.bodyXSmallBold,
    fontWeight: "700",
    color: Color.skyWhite,
    textAlign: "center",
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "stretch",
    justifyContent: "center",
    marginTop: "5%",
  },
  footerText: {
    fontSize: FontSize.bodyLargeBold_size,
    fontFamily: FontFamily.bodyXSmallMedium,
    color: Color.skyWhite,
  },
  signUp: {
    marginLeft: Padding.p_base,
    color: Color.primary900,
    fontWeight: "bold",
  },
});

export default WelcomeScreen;
