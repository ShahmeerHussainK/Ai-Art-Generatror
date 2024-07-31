import * as React from "react";
import {
  Pressable,
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Padding, FontFamily, FontSize, Color, Border } from "../GlobalStyles";
import { useTranslation } from 'react-i18next';

const ArtStyle = () => {
  const { t } = useTranslation();
  const navigation = useNavigation();
  const [selectedImage, setSelectedImage] = React.useState(null);

  const handleImagePress = (image) => {
    setSelectedImage(image === selectedImage ? null : image);
  };

  const renderImage = (image, heading) => {
    const isSelected = selectedImage === image;
    return (
      <Pressable onPress={() => handleImagePress(image)}>
        <View
          style={[
            styles.imageContainer,
            isSelected && styles.selectedImageContainer,
          ]}
        >
          <Image
            style={styles.maskGroupIcon}
            resizeMode="contain"
            source={image}
          />
          {isSelected && (
            <Image
              style={styles.tickIcon}
              resizeMode="contain"
              source={require("../assets/tick.png")}
            />
          )}
        </View>
        <Text style={[styles.style, isSelected && styles.selectedText]}>
          {heading}
        </Text>
      </Pressable>
    );
  };

  return (
    <View style={[styles.artStyle, styles.artStyleLayout]}>
      <View
        style={[
          styles.navbardefaultDarktrueCom,
          styles.autoLayoutVertical1FlexBox,
        ]}
      >
        <Pressable
          style={styles.autoLayoutHorizontal}
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
              source={require("../assets/goback1.png")}
            />
          </Pressable>
        </Pressable>
        <Text style={[styles.titleSection, styles.buttonTypo]}>{t('Art Style')}</Text>
      </View>
      <ScrollView>
        <View style={[styles.artStyle, styles.artStyleLayout]}>
          <View
            style={[
              styles.autoLayoutVertical,
              styles.autoLayoutVerticalPosition,
            ]}
          >
            <View
              style={[
                styles.autoLayoutVertical1,
                styles.autoLayoutVertical1FlexBox,
              ]}
            >
              <TextInput
                style={[
                  styles.statedefaultSearchDarktru,
                  styles.autoLayoutVertical1FlexBox,
                ]}
                placeholder="Search"
                autoCapitalize="none"
                placeholderTextColor="#757575"
                color="white"
              />
              <ScrollView style={styles.autoLayoutVertical2}>
                <View style={styles.autoLayoutHorizontal2}>
                  {renderImage(require("../assets/mask-group19.png"), "Colorful")}
                  {renderImage(require("../assets/mask-group1.png"), "Cyberpunk")}
                </View>
                <View style={styles.autoLayoutHorizontal3}>
                  {renderImage(require("../assets/mask-group21.png"), "Realistic")}
                  {renderImage(require("../assets/mask-group22.png"), "Fantasy")}
                </View>
                <View style={styles.autoLayoutHorizontal3}>
                  {renderImage(require("../assets/mask-group23.png"), "Robot")}
                  {renderImage(require("../assets/mask-group24.png"), "Anime")}
                </View>
              </ScrollView>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={[styles.buttonContainer]}>
        <View style={[styles.buttonprimaryDarktrueCom, styles.buttonWrapper]}>
          <TouchableOpacity
            style={styles.buttonpillTypepillIconf}
            activeOpacity={0.0}
            onPress={() => navigation.navigate("HomeScreen")}
          >
            <Text style={styles.button}>{t('Continue Selected')}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  autoLayoutVerticalContent: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  artStyleLayout: {
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
  autoLayoutVerticalPosition: {
    paddingHorizontal: Padding.p_5xl,
    left: 0,
    right: 0,
    position: "absolute",
    backgroundColor: Color.darkDark1,
  },
  autoLayoutVertical1FlexBox: {
    alignItems: "center",
    alignSelf: "stretch",
  },
  gobackLayout: {
    height: 28,
    width: 28,
  },
  buttonTypo: {
    textAlign: "center",
    fontFamily: FontFamily.bodyXSmallBold,
    fontWeight: "700",
  },
  styleTypo: {
    marginTop: 12,
    lineHeight: 32,
    fontSize: FontSize.h5Semibold_size,
    textAlign: "center",
    fontFamily: FontFamily.bodyXSmallBold,
    fontWeight: "700",
    alignSelf: "stretch",
  },
  imageContainer: {
    height: 155,
    width: 155,
    alignItems: "center",
    justifyContent: "center",
    margin: 8,
    borderWidth: 2,
    borderColor: "transparent",
  },
  selectedImageContainer: {
    borderColor: Color.primary900,
  },
  textLayout: {
    lineHeight: 26,
    letterSpacing: 0,
    fontSize: FontSize.bodyLargeBold_size,
    color: Color.skyWhite,
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
    marginLeft: "15%",
  },
  autoLayoutHorizontal: {
    width: 28,
    alignItems: "center",
    flexDirection: "row",
  },
  titleSection: {
    fontSize: FontSize.h4Bold_size,
    color: Color.skyWhite,
    textAlign: "center",
    flex: 1,
    marginLeft: "30%",
    marginRight: "35%",
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
  statedefaultSearchDarktru: {
    borderRadius: Border.br_xs,
    backgroundColor: Color.darkDark3,
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_lg,
    fontFamily: FontFamily.bodySmallRegular,
    fontSize: FontSize.bodyXLargeBold_size,
    flexDirection: "row",
  },
  maskGroupIcon: {
    width: "100%",
    height: "100%",
    alignSelf: "stretch",
  },
  style: {
    color: Color.skyWhite,
    textAlign: 'center',
    marginTop: 8,
  },
  selectedText: {
    color: Color.primary900,
  },
  style1: {
    color: "white",
  },
  sizelargeSelectedtrueDar: {
    marginLeft: 16,
  },
  autoLayoutHorizontal2: {
    flexDirection: "row",
    alignSelf: "stretch",
    justifyContent: "space-between",
  },
  autoLayoutHorizontal3: {
    marginTop: 16,
    flexDirection: "row",
    alignSelf: "stretch",
    justifyContent: "space-between",
  },
  autoLayoutVertical2: {
    marginTop: 32,
    alignSelf: "stretch",
    flex: 1,
  },
  autoLayoutVertical1: {
    marginTop: "-10%",
  },
  autoLayoutVertical: {
    top: 44,
    paddingVertical: Padding.p_xs,
  },
  button: {
    fontFamily: FontFamily.bodyXSmallBold,
    fontWeight: "700",
    textAlign: "center",
    lineHeight: 26,
    fontSize: FontSize.bodyLargeBold_size,
    letterSpacing: 0,
    color: "white",
  },
  buttonpillTypepillIconf: {
    padding: Padding.p_base,
    backgroundColor: "#6949FF",
    borderRadius: Border.br_81xl,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  buttonprimaryDarktrueCom: {
    bottom: 0,
    borderStyle: "solid",
    borderColor: Color.darkDark5,
    borderTopWidth: 1,
    paddingTop: Padding.p_5xl,
    paddingBottom: Padding.p_17xl,
  },
  frameParentSpaceBlock: {
    marginTop: 6,
    alignSelf: "stretch",
  },
  button2ButtonsDarktrueC: {
    borderStyle: "solid",
    borderColor: Color.colorDarkslategray_200,
    borderTopWidth: 1,
    paddingTop: Padding.p_5xl,
    paddingBottom: Padding.p_17xl,
    paddingHorizontal: Padding.p_5xl,
    backgroundColor: Color.darkDarkbg,
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
    fontWeight: "600",
    fontFamily: FontFamily.bodyMediumSemibold,
    textAlign: "left",
    lineHeight: 26,
    letterSpacing: 0,
    fontSize: FontSize.bodyLargeBold_size,
    color: Color.skyWhite,
  },
  typestatusBarThemedarkC: {
    top: 0,
    height: 44,
    left: 0,
    right: 0,
    position: "absolute",
  },
  artStyle: {
    height: 950,
    backgroundColor: Color.darkDarkbg,
    width: "100%",
    overflow: "hidden",
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    paddingBottom: 64,
  },
  buttonContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: Color.darkDarkbg,
    borderTopWidth: 1,
    borderTopColor: Color.colorDarkslategray_200,
  },
  buttonWrapper: {
    paddingHorizontal: Padding.p_5xl,
    paddingTop: Padding.p_5xl,
  },
  tickIcon: {
    position: "absolute",
    width: 40,
    height: 40,
    alignSelf: "center",
    top: "50%",
    transform: [{ translateY: -20 }],
    tintColor: "white",
  },
});

export default ArtStyle;




// "Sophia Collins Dreams":"Sophia Collins Dreams",
//   "imaginarybrush":"imaginarybrush",
//   "abstractvisionary":"abstractvisionary",
//   "Noah Ramirez":"Noah Ramirez",
//   "craftycreations":"craftycreations",
//   "Lily Thompson Creations":"Lily Thompson Creations",
//   "Gabriel Sullivan":"Gabriel Sullivan",
//   "visualwhiz":"visualwhiz",
// "Ava Reynolds": "Ava Reynolds",
//   "artfulinkling": "artfulinkling",
//   "Max Bennett Gallery": "Max Bennett Gallery",
//   "designdynamo": "designdynamo",
//   "Emily Mitchell": "Emily Mitchell",
//   "colorsplash": "colorsplash",
//   "Ethan Color Splash": "Ethan Color Splash",
//   "sketchmaven": "sketchmaven",
//   "Olivia Lawson Sketch": "Olivia Lawson Sketch",
//   "dreamweaver": "dreamweaver",
//   "Liam Dream": "Liam Dream",
//   "vibrantpixels": "vibrantpixels",
//   "Stella Maxwell": "Stella Maxwell",
//   "moonbeam": "moonbeam",
//   "Aria Luna": "Aria Luna",