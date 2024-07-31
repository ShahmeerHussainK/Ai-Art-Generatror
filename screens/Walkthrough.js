import * as React from "react";
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, Dimensions } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import Carousel from 'react-native-snap-carousel';
import * as Animatable from 'react-native-animatable';
import { Color, Padding, Border, FontFamily, FontSize } from "../GlobalStyles";
import { useTranslation } from 'react-i18next';
import { useTheme } from "../context/ThemeContext";

const { width, height } = Dimensions.get('window');



const Walkthrough = () => {
  const { t } = useTranslation(); 
  const navigation = useNavigation();
  const carouselRef = React.useRef(null);
  const [activeIndex, setActiveIndex] = React.useState(0);
  const walkthroughData = [
    {
      title: "Turn your words into artwork instantly",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",
      //image: require("../assets/image1.png")
      image: isDarkMode ? require("../assets/image1.png") : require("../assets/GroupLight.png")
    },
    {
      title: "Create stunning visuals",
      description: "Ut enim ad minim veniam, quis nostrud exercitation nisi ut aliquip...",
      //image: require("../assets/image1.png")
      image: isDarkMode ? require("../assets/image1.png") : require("../assets/GroupLight.png")
    },
    {
      title: "Share your creations instantly",
      description: "Duis aute irure dolor in reprehenderit in voluptate dolore eu fugiat...",
      //image: require("../assets/image1.png")
      image: isDarkMode ? require("../assets/image1.png") : require("../assets/GroupLight.png")
  
    }
  ];
  const { theme, toggleTheme, isDarkMode } = useTheme();

  const renderItem = ({ item }) => (
    <Animatable.View animation="fadeInUp" style={styles.frameParent}>
      <View style={styles.image1Wrapper}>
        <ImageBackground style={styles.image1Icon} resizeMode="contain" source={item.image} />
      </View>
      <View style={[styles.autoLayoutVertical,{ backgroundColor: theme.background }]}>
        <View style={styles.elementstitleDescriptionH}>
          <Text style={[styles.turnYourWords, { color: theme.text }]}>{t(item.title)}</Text>
          <Text style={[styles.loremIpsumDolor,{ color: theme.text } ]}>{item.description}</Text>
        </View>
        <View style={styles.autoLayoutHorizontal}>
          {walkthroughData.map((_, i) => (
            <View
              key={i}
              style={[
                styles.rectangle1,
                i === activeIndex && styles.rectangle
              ]}
            />
          ))}
        </View>
      </View>
    </Animatable.View>
  );

  const handleNext = () => {
    if (activeIndex < walkthroughData.length - 1) {
      carouselRef.current.snapToNext();
    } else {
      navigation.navigate("WelcomeScreen");
    }
  };

  return (
    <View style={[styles.walkthrough1,{ backgroundColor: theme.background }]}>
      <Carousel
        ref={carouselRef}
        data={walkthroughData}
        renderItem={renderItem}
        sliderWidth={width}
        itemWidth={width}
        onSnapToItem={(index) => setActiveIndex(index)}
      />
      <View style={[styles.button2ButtonsDarktrueC,{ backgroundColor: theme.background }, styles.autoLayoutVerticalPosition]}>
        <View style={[styles.autoLayoutHorizontal4, styles.autoFlexBox]}>
          <TouchableOpacity
            style={[{ backgroundColor: theme.promptbackground }, styles.buttonpillTypepillIconf, ]}
            activeOpacity={0.0}
            onPress={() => navigation.navigate("WelcomeScreen")}
          >
            <Text style={[styles.button, styles.textLayout,  { color: theme.canceltext }]}>{t("Skip")}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.buttonpillTypepillIconf3, styles.buttonpillFlexBox]}
            activeOpacity={0.0}
            onPress={handleNext}
          >
            <Text style={[styles.button, styles.textLayout]}>{t(activeIndex === walkthroughData.length - 1 ? "Finish" : "Next")}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonpillTypepillIconf3: {
    backgroundColor: Color.alertsStatusButtonDisabled,
  },
  autoLayoutVerticalPosition: {
    paddingHorizontal: Padding.p_5xl,
    left: 0,
    position: "absolute",
    right: 0,
  },
  textLayout: {
    fontSize: FontSize.bodyLargeBold_size,
    letterSpacing: 0,
    color: Color.skyWhite,
    marginLeft: "1%",
  },
  autoLayoutHorizontal4: {
    marginTop: 24,
    alignItems: "center",
    flexDirection: "row",
  },
  autoFlexBox: {
    alignItems: "center",
    alignSelf: "stretch",
  },
  buttonpillFlexBox: {
    marginLeft: 16,
    padding: Padding.p_base,
    borderRadius: Border.br_81xl,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  text: {
    marginTop: -13,
    left: 23,
    fontWeight: "600",
    fontFamily: FontFamily.bodyMediumSemibold,
    textAlign: "left",
    color: Color.skyWhite,
    lineHeight: 26,
    letterSpacing: 0,
    fontSize: FontSize.bodyLargeBold_size,
    top: "50%",
    position: "absolute",
  },
  image1Icon: {
    width: '100%',
    height: '100%',
    marginLeft: "25%",
  },
  image1Wrapper: {
    marginTop: '10%',
    width: '80%',
    height: height * 0.4,
    justifyContent: "center",
    alignItems: "center",
  },
  turnYourWords: {
    fontSize: FontSize.h3Bold_size,
    fontFamily: FontFamily.bodyXSmallBold,
    fontWeight: "700",
    textAlign: "center",
    color: Color.skyWhite,
    marginHorizontal: '10%',
  },
  loremIpsumDolor: {
    fontSize: FontSize.bodyXLargeBold_size,
    fontFamily: FontFamily.bodySmallRegular,
    marginTop: 20,
    textAlign: "center",
    color: Color.skyWhite,
    marginHorizontal: '10%',
  },
  elementstitleDescriptionH: {
    justifyContent: "center",
  },
  rectangle: {
    width: 32,
    backgroundColor: Color.primary900,
    height: 8,
    borderRadius: Border.br_81xl,
  },
  rectangle1: {
    width: 8,
    marginLeft: 6,
    backgroundColor: Color.primary900,
    height: 8,
    borderRadius: Border.br_81xl,
  },
  autoLayoutHorizontal: {
    alignItems: "flex-end",
    marginTop: "35%",
    justifyContent: "center",
    flexDirection: 'row',
  },
  autoLayoutVertical: {
    paddingTop: '5%',
    paddingBottom: '10%',
    paddingHorizontal: '10%',
    alignItems: 'center',
    width: '100%',
  },
  frameParent: {
    flex: 1,
  },
  button: {
    fontFamily: FontFamily.bodyXSmallBold,
    fontWeight: "700",
    textAlign: "center",
    lineHeight: 26,
    fontSize: FontSize.bodyLargeBold_size,
    letterSpacing: 0,
    color: Color.skyWhite,
  },
  buttonpillTypepillIconf: {
    padding: Padding.p_base,
    borderRadius: Border.br_81xl,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  button2ButtonsDarktrueC: {
    bottom: 0,
    borderStyle: "solid",
    borderColor: Color.colorDarkslategray_200,
    paddingTop: Padding.p_5xl,
    paddingBottom: Padding.p_17xl,
  },
  paddingHorizontal: Padding.p_5xl,
    left: 0,
    position: "absolute",
    right: 0,
  walkthrough1: {
    width: "100%",
    height: "100%",
    flex: 1,
  },
});

export default Walkthrough;