import * as React from "react";
import {
  Image,
  StyleSheet,
  Pressable,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Padding, Color, FontFamily, Border, FontSize } from "../GlobalStyles";
import { BallIndicator } from 'react-native-indicators';
import { useTranslation } from 'react-i18next';

//#region B4Translation
// const DarkExtendImagesUploadedI = () => {
//   const navigation = useNavigation();
//   const [loading, setLoading] = useState(false);
//   const [loadingText, setLoadingText] = useState("");

//   const handleNavigate = () => {
//     navigation.replace('DarkExtendImagesEditArtwo');
//   };

//   const handleRegenerate = () => {
//     setLoading(true);
//     setLoadingText("Generating...");
//     setTimeout(() => {
//       handleNavigate();
//     }, 4000);
//   };

//   return (
//     <View style={styles.darkExtendImagesUploadedI}>
//       <View style={[styles.navbardefaultDarktrueCom, styles.darktrueFlexBox]}>
//         <View style={styles.autoLayoutHorizontal}>
          
//           <Pressable
//             style={[styles.gobackLayout]}
//             onPress={() => navigation.goBack()}
//           >
//             <Image
//               style={styles.icon}
//               resizeMode="cover"
//               source={require("../assets/goback3.png")}
//             />
//           </Pressable>
//         </View>
//         <Text style={[styles.titleSection, styles.extendTypo]}>
//         Realistic Art Generation
//         </Text>
//         <Image
//           style={[styles.autoLayoutHorizontal1, styles.gobackLayout]}
//           resizeMode="cover"
//           source={require("../assets/auto-layout-horizontal.png")}
//         />
//       </View>
//       <ScrollView>
//         <View style={styles.darkExtendImagesUploadedI}>
//           <ScrollView>
//             <View style={styles.darkExtendImagesUploadedI}>
//               <View
//                 style={[styles.autoLayoutVertical, styles.autoLayoutVerticalPosition]}
//               >
//                 <View
//                   style={[
//                     styles.elementsuploadedImagesToGe,
//                     styles.autoLayoutVertical1FlexBox,
//                   ]}
//                 >
//                   <View style={styles.autoLayoutVertical1FlexBox}>
//                     <Text style={[styles.uploadYourPhoto, styles.textClr]}>
//                       Upload an Image
//                     </Text>
//                     <Text style={styles.uploadYourPhoto1}>
//                     You can upload any type of Image. We’ll generate a realistic art version for you.
//                     </Text>
//                   </View>
//                   <View style={[styles.frame, styles.frameSpaceBlock]}>
//                     <Image
//                       style={[styles.artworkRatio11ArtworkS, styles.artworkLayout]}
//                       resizeMode="cover"
//                       source={require("../assets/artwork-ratio1--1-artwork-sizelarge-componentartwork-ratio--size1.png")}
//                     />
//                     <TouchableOpacity
//                       style={[
//                         styles.autoLayoutVertical2,
//                         styles.autoLayoutVertical2FlexBox,
//                       ]}
//                       activeOpacity={0.0}
//                       onPress={() => navigation.navigate("DarkExtendImagesUploadIma")}
//                     >
//                       <Image
//                         style={[styles.icontimesComponentaddition, styles.gobackLayout]}
//                         resizeMode="cover"
//                         source={require("../assets/goback2.png")}
//                       />
//                     </TouchableOpacity>
                   
//                   </View>
//                 </View>
//               </View>
//             </View>
//           </ScrollView>
//         </View>
//       </ScrollView>
//       {loading && (
//         <View style={styles.loadingOverlay}>
//           <BallIndicator
//             style={styles.indicator}
//             animating={loading}
//             size={50}
//             color="#6949FF"
//           />
//           <Text style={styles.loadingText}>{loadingText}</Text>
//         </View>
//       )}
//       <View style={[styles.buttonprimaryDarktrueCom, styles.frameBorder]}>
//         <TouchableOpacity
//           activeOpacity={0.0}
//           onPress={handleRegenerate}
//           disabled={loading} 
//           style={loading && styles.disabledButton} 
//         >
//           <View
//             style={[
//               styles.buttonpillTypepillIconf,
//               styles.autoLayoutVertical2FlexBox,
//             ]}
//           >
//             <Text style={[styles.extend, styles.textLayout]}>
//               {loading ? "Generate" : "Generate"}
//             </Text>
//           </View>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };
//#endregion
const DarkExtendImagesUploadedI = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [loadingText, setLoadingText] = useState("");
  const { t } = useTranslation();

  const handleNavigate = () => {
    navigation.replace('DarkExtendImagesEditArtwo');
  };

  const handleRegenerate = () => {
    setLoading(true);
    setLoadingText(t("Generating..."));
    setTimeout(() => {
      handleNavigate();
    }, 4000);
  };

  return (
    <View style={styles.darkExtendImagesUploadedI}>
      <View style={[styles.navbardefaultDarktrueCom, styles.darktrueFlexBox]}>
        <View style={styles.autoLayoutHorizontal}>
          <Pressable
            style={[styles.gobackLayout]}
            onPress={() => navigation.goBack()}
          >
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={require("../assets/goback3.png")}
            />
          </Pressable>
        </View>
        <Text style={[styles.titleSection, styles.extendTypo]}>
          {t("Realistic Art Generation")}
        </Text>
        <Image
          style={[styles.autoLayoutHorizontal1, styles.gobackLayout]}
          resizeMode="cover"
          source={require("../assets/auto-layout-horizontal.png")}
        />
      </View>
      <ScrollView>
        <View style={styles.darkExtendImagesUploadedI}>
          <ScrollView>
            <View style={styles.darkExtendImagesUploadedI}>
              <View
                style={[styles.autoLayoutVertical, styles.autoLayoutVerticalPosition]}
              >
                <View
                  style={[
                    styles.elementsuploadedImagesToGe,
                    styles.autoLayoutVertical1FlexBox,
                  ]}
                >
                  <View style={styles.autoLayoutVertical1FlexBox}>
                    <Text style={[styles.uploadYourPhoto, styles.textClr]}>
                      {t("Upload an Image")}
                    </Text>
                    <Text style={styles.uploadYourPhoto1}>
                      {t("You can upload any type of Image. We’ll generate a realistic art version for you.")}
                    </Text>
                  </View>
                  <View style={[styles.frame, styles.frameSpaceBlock]}>
                    <Image
                      style={[styles.artworkRatio11ArtworkS, styles.artworkLayout]}
                      resizeMode="cover"
                      source={require("../assets/artwork-ratio1--1-artwork-sizelarge-componentartwork-ratio--size1.png")}
                    />
                    <TouchableOpacity
                      style={[
                        styles.autoLayoutVertical2,
                        styles.autoLayoutVertical2FlexBox,
                      ]}
                      activeOpacity={0.0}
                      onPress={() => navigation.navigate("DarkExtendImagesUploadIma")}
                    >
                      <Image
                        style={[styles.icontimesComponentaddition, styles.gobackLayout]}
                        resizeMode="cover"
                        source={require("../assets/goback2.png")}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </ScrollView>
      {loading && (
        <View style={styles.loadingOverlay}>
          <BallIndicator
            style={styles.indicator}
            animating={loading}
            size={50}
            color="#6949FF"
          />
          <Text style={styles.loadingText}>{loadingText}</Text>
        </View>
      )}
      <View style={[styles.buttonprimaryDarktrueCom, styles.frameBorder]}>
        <TouchableOpacity
          activeOpacity={0.0}
          onPress={handleRegenerate}
          disabled={loading}
          style={loading && styles.disabledButton}
        >
          <View
            style={[
              styles.buttonpillTypepillIconf,
              styles.autoLayoutVertical2FlexBox,
            ]}
          >
            <Text style={[styles.extend, styles.textLayout]}>
              {loading ? t("Generating") : t("Generate")}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  loadingText: {
    color: Color.skyWhite,
    marginTop: 10,
    fontSize: FontSize.bodyLargeBold_size,
    fontFamily: FontFamily.bodyXSmallBold,
    fontWeight: "bold",
  },
  indicator: {
    top: "40%",
    position: "absolute",
    left: "50%",
    right: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  loadingOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  autoLayoutVerticalPosition: {
    paddingHorizontal: Padding.p_5xl,
    left: 0,
    right: 0,
    position: "absolute",
  },
  darktrueFlexBox: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "stretch",
  },
  gobackLayout: {
    height: 28,
    width: 28,
  },
  extendTypo: {
    textAlign: "center",
    color: Color.skyWhite,
    fontFamily: FontFamily.bodyXSmallBold,
    fontWeight: "700",
  },
  autoLayoutVertical1FlexBox: {
    justifyContent: "center",
    alignSelf: "stretch",
  },
  textClr: {
    color: Color.skyWhite,
    textAlign: "left",
  },
  frameSpaceBlock: {
    marginTop: "10%",
    alignSelf: "center",
    width: "100%",
  },
  artworkLayout: {
    borderRadius: Border.br_xl,
    overflow: "hidden",
  },
  autoLayoutVertical2FlexBox: {
    borderRadius: Border.br_81xl,
    justifyContent: "center",
    alignItems: "center",
  },
  textLayout: {
    lineHeight: 26,
    fontSize: FontSize.bodyLargeBold_size,
    letterSpacing: 0,
  },
  autoLayoutVertical4Typo: {
    fontSize: FontSize.h5Semibold_size,
    fontFamily: FontFamily.bodyXSmallBold,
    fontWeight: "700",
  },
  frameBorder: {
    borderColor: Color.colorDarkslategray_200,
    borderStyle: "solid",
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
    marginLeft: "20%"
  },
  goback: {
    marginLeft: 16,
  },
  autoLayoutHorizontal: {
    width: 28,
    alignItems: "center",
    flexDirection: "row",
  },
  titleSection: {
    fontSize: FontSize.h4Bold_size,
    marginLeft: 16,
    flex: 1,
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
  uploadYourPhoto: {
    textAlign: "left",
    fontFamily: FontFamily.bodyXSmallBold,
    fontWeight: "700",
    lineHeight: 38,
    fontSize: FontSize.h4Bold_size,
    alignSelf: "stretch",
  },
  uploadYourPhoto1: {
    fontSize: FontSize.bodyXLargeBold_size,
    fontFamily: FontFamily.bodySmallRegular,
    marginTop: 8,
    letterSpacing: 0,
    textAlign: "left",
    color: Color.skyWhite,
    alignSelf: "stretch",
  },
  artworkRatio11ArtworkS: {
    height: "100%",
    width: "98.96%",
    top: "0%",
    right: "1.04%",
    bottom: "1.04%",
    left: "0%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
  },
  icontimesComponentaddition: {
    overflow: "hidden",
  },
  autoLayoutVertical2: {
    top: 12,
    right: 16,
    backgroundColor: Color.alertsStatusError,
    padding: Padding.p_7xs,
    position: "absolute",
    overflow: "hidden",
  },
  frame: {
    borderWidth: 2,
    height: 482,
    borderColor: Color.colorDarkslategray_200,
    borderStyle: "solid",
    borderRadius: Border.br_xl,
    overflow: "hidden",
  },
  title: {
    textAlign: "left",
    fontFamily: FontFamily.bodyXSmallBold,
    fontWeight: "700",
    lineHeight: 38,
    fontSize: FontSize.h4Bold_size,
    flex: 1,
  },
  viewAll: {
    color: Color.primary900,
    textAlign: "left",
    fontFamily: FontFamily.bodyXSmallBold,
    fontWeight: "700",
    marginLeft: 16,
    display: "none",
  },
  iconlyregularoutlinearrow: {
    width: 24,
    height: 24,
    marginLeft: 16,
    display: "none",
  },
  elementssection1Darktrue: {
    alignItems: "center",
  },
  inputFormnormalStatefille: {
    flex: 1,
  },
  label: {
    textAlign: "left",
    color: Color.skyWhite,
    fontFamily: FontFamily.bodyXSmallBold,
    fontWeight: "700",
    display: "none",
    alignSelf: "stretch",
  },
  autoLayoutVertical4: {
    marginTop: 14,
    alignSelf: "stretch",
  },
  inputFormnormalStatefille1: {
    marginLeft: 24,
    flex: 1,
  },
  autoLayoutHorizontal2: {
    marginTop: 20,
    alignItems: "center",
  },
  elementsuploadedImagesToGe: {
    alignItems: "center",
  },
  autoLayoutVertical: {
    paddingVertical: Padding.p_xs,
  },
  extend: {
    textAlign: "center",
    color: Color.skyWhite,
    fontFamily: FontFamily.bodyXSmallBold,
    fontWeight: "700",
    alignSelf: "stretch",
  },
  buttonpillTypepillIconf: {
    backgroundColor: Color.primary900,
    padding: Padding.p_base,
    alignSelf: "stretch",
  },
  buttonprimaryDarktrueCom: {
    bottom: 0,
    borderTopWidth: 1,
    paddingTop: Padding.p_5xl,
    paddingBottom: Padding.p_17xl,
    paddingHorizontal: Padding.p_5xl,
    left: 0,
    right: 0,
    position: "absolute",
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
    lineHeight: 26,
    fontSize: FontSize.bodyLargeBold_size,
    letterSpacing: 0,
    textAlign: "left",
    color: Color.skyWhite,
  },
  typestatusBarThemedarkC: {
    top: 0,
    height: 44,
    left: 0,
    right: 0,
    position: "absolute",
  },
  darkExtendImagesUploadedI: {
    height: 700,
    overflow: "hidden",
    width: "100%",
    flex: 1,
    backgroundColor: Color.darkDarkbg,
  },
  disabledButton: {
    opacity: 0.6,
  }
});

export default DarkExtendImagesUploadedI;
