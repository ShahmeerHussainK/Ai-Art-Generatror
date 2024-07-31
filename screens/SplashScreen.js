import React, { useState, useEffect } from "react";
import { StyleSheet, Image, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { BallIndicator } from 'react-native-indicators';
import { Border, FontSize, FontFamily, Color } from "../GlobalStyles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useTheme } from "../context/ThemeContext";

const SplashScreen = () => {
  const [isAnimating, setIsAnimating] = useState(true);
  const navigation = useNavigation();
  const { theme, toggleTheme, isDarkMode } = useTheme();

  useEffect(() => {
    const checkFirstLaunch = async () => {
      const value = await AsyncStorage.getItem("alreadyLaunched");
      const isFirstLaunch = value === null;

      const timeout = setTimeout(() => {
        setIsAnimating(false);
        navigation.replace(isFirstLaunch ? "Walkthrough" : "WelcomeScreen");
      }, 4000);

      return () => clearTimeout(timeout);
    };

    checkFirstLaunch();
  }, [navigation]);

  return (
    <Pressable
      style={[styles.splashScreen, { backgroundColor: theme.background }]}
      onPress={() => navigation.navigate("Walkthrough")}
    >
      <BallIndicator
        style={styles.indicator}
        animating={isAnimating}
        size={50}
        color="#6949FF"
      />
      <View style={[styles.autoLayoutVertical, styles.groupIconPosition]}>
        <Image
          style={styles.typelogoDefaultComponentl}
          resizeMode="cover"
          source={require("../assets/typelogo-default-componentlogo3.png")}
        />
        <Text style={[styles.artify, { color: theme.text }]}>Artify</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  groupIconPosition: {
    top: "50%",
    position: "absolute",
  },
  indicator: {
    bottom: "10%",
    position: "absolute",
    left: "50%",
    right: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  typelogoDefaultComponentl: {
    borderRadius: Border.br_981xl,
    width: 160,
    height: 160,
  },
  artify: {
    fontSize: FontSize.h2Bold_size,
    lineHeight: 64,
    fontWeight: "700",
    fontFamily: FontFamily.bodyXSmallBold,
    textAlign: "center",
    marginTop: 32,
    color: Color.skyWhite,
  },
  autoLayoutVertical: {
    marginTop: -160,
    marginLeft: -80,
    alignItems: "center",
    left: "50%",
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
  splashScreen: {
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
  },
});

export default SplashScreen;
