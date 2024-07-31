import React, { useState, useEffect } from "react";
import {
  Image,
  StyleSheet,
  Pressable,
  View,
  Text,
} from "react-native";
import { BallIndicator } from 'react-native-indicators';
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Padding, Border } from "../GlobalStyles";
import { CommonActions } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';

//#region  B4Translation
// const DarkBatchArtGeneratorGene1 = () => {
//   const [isAnimating, setIsAnimating] = useState(true);
//   const navigation = useNavigation();
//   const handleNavigate = () => {
//     navigation.replace('DarkBatchArtGeneratorGene');
//   };

//   useEffect(() => {
//     const timeout = setTimeout(() => {
//       setIsAnimating(false);
//       handleNavigate()
//     }, 4000);

//     return () => clearTimeout(timeout);
//   }, []);

//   return (
//     <View style={styles.darkAiAvatarGeneratorGene}>
//       <View style={styles.autoLayoutVertical}>
//         <View style={styles.navbardefaultDarktrueCom}>
//           <View style={styles.autoLayoutHorizontal}>
//             <Image
//               style={[styles.typelogoDefaultComponentl, styles.gobackLayout]}
//               resizeMode="cover"
//               source={require("../assets/typelogo-default-componentlogo.png")}
//             />
//             <Pressable
//               style={[styles.goback, styles.gobackLayout]}
//               onPress={() => navigation.goBack()}
//             >
//               <Image
//                 style={styles.icon}
//                 resizeMode="cover"
//                 source={require("../assets/goback.png")}
//               />
//             </Pressable>
//           </View>
//           <Text style={[styles.titleSection, styles.buttonTypo]}>
//             Batch Art Generator
//           </Text>
//           <Image
//             style={[styles.autoLayoutHorizontal1, styles.gobackLayout]}
//             resizeMode="cover"
//             source={require("../assets/auto-layout-horizontal.png")}
//           />
//         </View>
//         <View
//           style={[
//             styles.elementsgeneratingAiAvatar,
//             styles.autoLayoutVertical1FlexBox,
//           ]}
//         >
//           <View style={styles.autoLayoutHorizontal2}>
//             <View style={styles.aspectFlexBox}>
//               <View style={styles.autoLayoutVertical1FlexBox}>
//                 <Image
//                   style={styles.iconlyregularboldprofile}
//                   resizeMode="cover"
//                   source={require("../assets/iconlyregularboldprofile3.png")}
//                 />
//               </View>
//             </View>
//             <View
//               style={[styles.aspectRatio11Sizemediu1, styles.aspectFlexBox]}
//             >
//               <View style={styles.autoLayoutVertical1FlexBox}>
//                 <Image
//                   style={styles.iconlyregularboldprofile}
//                   resizeMode="cover"
//                   source={require("../assets/iconlyregularboldprofile3.png")}
//                 />
//               </View>
//             </View>
//           </View>
//           <View
//             style={[styles.autoLayoutHorizontal3, styles.thisMayTakeSpaceBlock]}
//           >
//             <View style={styles.aspectFlexBox}>
//               <View style={styles.autoLayoutVertical1FlexBox}>
//                 <Image
//                   style={styles.iconlyregularboldprofile}
//                   resizeMode="cover"
//                   source={require("../assets/iconlyregularboldprofile3.png")}
//                 />
//               </View>
//             </View>
//             <View
//               style={[styles.aspectRatio11Sizemediu1, styles.aspectFlexBox]}
//             >
//               <View style={styles.autoLayoutVertical1FlexBox}>
//                 <Image
//                   style={styles.iconlyregularboldprofile}
//                   resizeMode="cover"
//                   source={require("../assets/iconlyregularboldprofile3.png")}
//                 />
//               </View>
//             </View>
//           </View>
//         </View>
//       </View>
//       <View style={[styles.rectangle, styles.rectanglePosition]} />
//       <View style={[styles.buttonsecondaryDarktrueC, styles.rectanglePosition]}>
//         <Pressable
//           style={[
//             styles.buttonpillTypepillIconf,
//             styles.autoLayoutVertical1FlexBox,
//           ]}
//           //onPress={()=>navigation.navigate("DarkAIAvatarGeneratorGene1")}
//         >
//           <Text style={[styles.button, styles.textLayout]}>
//             Notify Me When It's Done
//           </Text>
//         </Pressable>
//       </View>
//       <View
//         style={[styles.elementsloadingGeneratingAi, styles.groupIconPosition]}
//       >
//         <View style={styles.iconloadingComponentadditi}>
//           <BallIndicator
//             style={styles.indicator}
//             animating={isAnimating}
//             size={50}
//             color="#6949FF"
//           />
//         </View>
//         <Text style={[styles.generatingAvatars, styles.thisMayTakeSpaceBlock]}>
//           Batch Art Generating...
//         </Text>
//         <Text style={[styles.thisMayTake, styles.thisMayTakeSpaceBlock]}>
//           This may take a few minutes. Once it's done, you will get 1-4
//           AI-generated Batch Art. Feel free to close the app.
//         </Text>
//       </View>
//     </View>
//   );
// };
//#endregion

const DarkBatchArtGeneratorGene1 = () => {
  const { t } = useTranslation();
  const [isAnimating, setIsAnimating] = useState(true);
  const navigation = useNavigation();
  
  const handleNavigate = () => {
    navigation.replace('DarkBatchArtGeneratorGene');
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsAnimating(false);
      handleNavigate();
    }, 4000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <View style={styles.darkAiAvatarGeneratorGene}>
      <View style={styles.autoLayoutVertical}>
        <View style={styles.navbardefaultDarktrueCom}>
          <View style={styles.autoLayoutHorizontal}>
            <Image
              style={[styles.typelogoDefaultComponentl, styles.gobackLayout]}
              resizeMode="cover"
              source={require("../assets/typelogo-default-componentlogo.png")}
            />
            <Pressable
              style={[styles.goback, styles.gobackLayout]}
              onPress={() => navigation.goBack()}
            >
              <Image
                style={styles.icon}
                resizeMode="cover"
                source={require("../assets/goback.png")}
              />
            </Pressable>
          </View>
          <Text style={[styles.titleSection, styles.buttonTypo]}>
            {t('Batch Art Generator')}
          </Text>
          <Image
            style={[styles.autoLayoutHorizontal1, styles.gobackLayout]}
            resizeMode="cover"
            source={require("../assets/auto-layout-horizontal.png")}
          />
        </View>
        <View
          style={[
            styles.elementsgeneratingAiAvatar,
            styles.autoLayoutVertical1FlexBox,
          ]}
        >
          <View style={styles.autoLayoutHorizontal2}>
            <View style={styles.aspectFlexBox}>
              <View style={styles.autoLayoutVertical1FlexBox}>
                <Image
                  style={styles.iconlyregularboldprofile}
                  resizeMode="cover"
                  source={require("../assets/iconlyregularboldprofile3.png")}
                />
              </View>
            </View>
            <View
              style={[styles.aspectRatio11Sizemediu1, styles.aspectFlexBox]}
            >
              <View style={styles.autoLayoutVertical1FlexBox}>
                <Image
                  style={styles.iconlyregularboldprofile}
                  resizeMode="cover"
                  source={require("../assets/iconlyregularboldprofile3.png")}
                />
              </View>
            </View>
          </View>
          <View
            style={[styles.autoLayoutHorizontal3, styles.thisMayTakeSpaceBlock]}
          >
            <View style={styles.aspectFlexBox}>
              <View style={styles.autoLayoutVertical1FlexBox}>
                <Image
                  style={styles.iconlyregularboldprofile}
                  resizeMode="cover"
                  source={require("../assets/iconlyregularboldprofile3.png")}
                />
              </View>
            </View>
            <View
              style={[styles.aspectRatio11Sizemediu1, styles.aspectFlexBox]}
            >
              <View style={styles.autoLayoutVertical1FlexBox}>
                <Image
                  style={styles.iconlyregularboldprofile}
                  resizeMode="cover"
                  source={require("../assets/iconlyregularboldprofile3.png")}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.rectangle, styles.rectanglePosition]} />
      <View
        style={[styles.buttonsecondaryDarktrueC, styles.rectanglePosition]}
      >
        <Pressable
          style={[
            styles.buttonpillTypepillIconf,
            styles.autoLayoutVertical1FlexBox,
          ]}
          //onPress={()=>navigation.navigate("DarkAIAvatarGeneratorGene1")}
        >
          <Text style={[styles.button, styles.textLayout]}>
            {t("Notify Me When It's Done")}
          </Text>
        </Pressable>
      </View>
      <View
        style={[styles.elementsloadingGeneratingAi, styles.groupIconPosition]}
      >
        <View style={styles.iconloadingComponentadditi}>
          <BallIndicator
            style={styles.indicator}
            animating={isAnimating}
            size={50}
            color="#6949FF"
          />
        </View>
        <Text style={[styles.generatingAvatars, styles.thisMayTakeSpaceBlock]}>
          {t("Batch Art Generating...")}
        </Text>
        <Text style={[styles.thisMayTake, styles.thisMayTakeSpaceBlock]}>
          {t("This may take a few minutes. Once it's done, you will get 1-4 AI-generated Batch Art. Feel free to close the app.")}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  indicator: {
    bottom: "10%",
    position: "absolute",
    left: "50%",
    right: "50%",
    justifyContent: "center",
    alignItems: "center",
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
  autoLayoutVertical1FlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  textLayout: {
    lineHeight: 26,
    fontSize: FontSize.bodyLargeBold_size,
    letterSpacing: 0,
    color: Color.skyWhite,
  },
  aspectFlexBox: {
    padding: Padding.p_5xl,
    height: 183,
    backgroundColor: Color.colorGray_200,
    borderRadius: Border.br_xs,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    flex: 1,
  },
  thisMayTakeSpaceBlock: {
    marginTop: 16,
    alignSelf: "stretch",
  },
  groupIconPosition: {
    top: "50%",
    position: "absolute",
  },
  rectanglePosition: {
    bottom: 0,
    left: 0,
    right: 0,
    position: "absolute",
  },
  typelogoDefaultComponentl: {
    borderRadius: Border.br_341xl,
    display: "none",
  },
  icon: {
    bottom:"25%",
    height: "100%",
    width: "100%",
  },
  autoLayoutHorizontal: {
    width: 28,
    alignItems: "center",
    flexDirection: "row",
  },
  titleSection: {
    color: Color.skyWhite,
    fontSize: FontSize.h4Bold_size,
    textAlign: "center",
    fontFamily: FontFamily.bodyXSmallBold,
    fontWeight: "700",
    marginLeft: "5%",
    flex: 1,
    marginBottom:"5%"
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
  iconlyregularboldprofile: {
    width: 44,
    height: 44,
  },
  aspectRatio11Sizemediu1: {
    marginLeft: 16,
  },
  autoLayoutHorizontal2: {
    flexDirection: "row",
    alignSelf: "stretch",
  },
  autoLayoutHorizontal3: {
    flexDirection: "row",
  },
  elementsgeneratingAiAvatar: {
    marginTop: "40%",
    alignSelf: "stretch",
  },
  autoLayoutVertical: {
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_5xl,
    left: 0,
    right: 0,
    position: "absolute",
  },
  text: {
    marginTop: -13,
    left: 23,
    fontWeight: "600",
    fontFamily: FontFamily.bodyMediumSemibold,
    textAlign: "left",
    lineHeight: 26,
    fontSize: FontSize.bodyLargeBold_size,
    letterSpacing: 0,
    color: Color.skyWhite,
  },
  rectangle: {
    backgroundColor: "rgba(255, 255, 255, 0.01)",
    top: 0,
  },
  button: {
    textAlign: "center",
    fontFamily: FontFamily.bodyXSmallBold,
    fontWeight: "700",
    fontSize: FontSize.bodyLargeBold_size,
    alignSelf: "stretch",
  },
  buttonpillTypepillIconf: {
    borderRadius: Border.br_81xl,
    backgroundColor: Color.colorDarkslategray_200,
    padding: Padding.p_base,
    alignSelf: "stretch",
  },
  buttonsecondaryDarktrueC: {
    borderStyle: "solid",
    borderColor: Color.colorDarkslategray_200,
    borderTopWidth: 1,
    paddingTop: Padding.p_5xl,
    paddingBottom: Padding.p_17xl,
    paddingHorizontal: Padding.p_5xl,
    backgroundColor: Color.darkDarkbg,
  },
  iconloadingComponentadditi: {
    width: 80,
    height: 80,
    overflow: "hidden",
  },
  generatingAvatars: {
    textAlign: "center",
    fontFamily: FontFamily.bodyXSmallBold,
    fontWeight: "700",
    color: Color.skyWhite,
    lineHeight: 38,
    fontSize: FontSize.h4Bold_size,
  },
  thisMayTake: {
    fontSize: FontSize.bodyXLargeBold_size,
    lineHeight: 29,
    fontWeight: "500",
    fontFamily: FontFamily.bodyXSmallMedium,
    letterSpacing: 0,
    marginTop: 16,
    textAlign: "center",
    color: Color.skyWhite,
    marginLeft: "7%",
    marginRight: "7%",
  },
  elementsloadingGeneratingAi: {
    marginTop: -118,
    marginLeft: -215,
    left: "50%",
    width: 430,
    paddingVertical: 0,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: Padding.p_5xl,
  },
  darkAiAvatarGeneratorGene: {
    height: 932,
    overflow: "hidden",
    width: "100%",
    flex: 1,
    backgroundColor: Color.darkDarkbg,
  },
});

export default DarkBatchArtGeneratorGene1;
