import * as React from "react";
import { useState } from "react";
import {
  Image,
  StyleSheet,
  Pressable,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { BallIndicator } from 'react-native-indicators';
import { Padding, FontSize, FontFamily, Border, Color } from "../GlobalStyles";
import { useTranslation } from 'react-i18next';

//#region B4Translation
// const DarkExtendImagesEditArtwo = () => {
//   const navigation = useNavigation();
//   const [loading, setLoading] = useState(false);
//   const [loadingText, setLoadingText] = useState("");

//   const handleRegenerate = () => {
//     setLoading(true);
//     setLoadingText("Please wait, regenerating...");
//     setTimeout(() => {
//       setLoading(false);
//     }, 4000);
//   };

//   return (
//     <View style={[styles.darkExtendImagesEditArtwo, styles.artworkLayout]}>
//       <View
//         style={[
//           styles.elementsnavbarEditDarktru,
//           styles.autoLayoutHorizontal1FlexBox,
//         ]}
//       >
//         <View style={[styles.autoLayoutHorizontal, styles.finalize1Layout]}>
//           <Pressable
//             style={styles.gobackLayout}
//             onPress={() => navigation.goBack()}
//           >
//             <Image
//               style={styles.icon}
//               resizeMode="cover"
//               source={require("../assets/goback.png")}
//             />
//           </Pressable>
//         </View>
//         <Text style={[styles.title, styles.autoFlexBox]}>Edit Artwork</Text>
//         <TouchableOpacity
//           activeOpacity={0.0}
//           onPress={() => navigation.navigate("DarkExtendImagesFinalize")}
//         >
//           <Text style={[styles.finalize1, styles.cmTypo]}>Finalize</Text>
//         </TouchableOpacity>
//       </View>
//     <ScrollView>
//     <View style={[styles.darkExtendImagesEditArtwo, styles.artworkLayout]}>
//       <View
//         style={[styles.autoLayoutVertical, styles.autoLayoutVerticalPosition]}
//       >
//         <View style={[styles.elementsextendImages43, styles.autoSpaceBlock]}>
//           <Image
//             style={[styles.artworkRatio43ArtworkS, styles.artworkLayout]}
//             resizeMode="cover"
//             source={require("../assets/artwork-ratio4--3-artwork-sizelarge-componentartwork-ratio--size.png")}
//           />
//           <View style={styles.autoSpaceBlock}>
//             <View style={styles.autoLayoutHorizontal1FlexBox}>
//               <Text style={[styles.title1, styles.labelTypo]}>
//                 Extend Aspect Ratio
//               </Text>
//               <Text style={[styles.viewAll, styles.textLayout]}>View All</Text>
//               <Image
//                 style={styles.iconlyregularoutlinearrow}
//                 resizeMode="cover"
//                 source={require("../assets/iconlyregularoutlinearrow--right4.png")}
//               />
//               <Image
//                 style={styles.iconlyregularoutlinearrow}
//                 resizeMode="cover"
//                 source={require("../assets/iconlyregularoutlinearrow--right4.png")}
//               />
//             </View>
//             <View
//               style={[
//                 styles.autoLayoutHorizontal1,
//                 styles.autoLayoutHorizontal1FlexBox,
//               ]}
//             >
//               <View style={styles.inputFormnormalStatefille}>
//                 <Text style={[styles.label, styles.textLayout]}>Label</Text>
//                 <View style={styles.autoLayoutVertical2}>
//                   <View style={styles.autoLayoutHorizontal1FlexBox}>
//                     <Image
//                       style={[
//                         styles.iconlyregularoutlineprofile,
//                         styles.gobackLayout,
//                       ]}
//                       resizeMode="cover"
//                       source={require("../assets/iconlyregularoutlineprofile2.png")}
//                     />
//                     <Text style={styles.loremIpsum}> </Text>
//                     <Text style={[styles.cm, styles.cmTypo]}>px</Text>
//                     <Image
//                       style={[
//                         styles.iconlyregularoutlinearrow2,
//                         styles.gobackLayout,
//                       ]}
//                       resizeMode="cover"
//                       source={require("../assets/iconlyregularoutlinearrow--down-2.png")}
//                     />
//                   </View>
//                   <View style={styles.rectangle} />
//                 </View>
//               </View>
//               <View style={styles.inputFormnormalStatefille1}>
//                 <Text style={[styles.label, styles.textLayout]}>Label</Text>
//                 <View style={styles.autoLayoutVertical2}>
//                   <View style={styles.autoLayoutHorizontal1FlexBox}>
//                     <Image
//                       style={[
//                         styles.iconlyregularoutlineprofile,
//                         styles.gobackLayout,
//                       ]}
//                       resizeMode="cover"
//                       source={require("../assets/iconlyregularoutlineprofile2.png")}
//                     />
//                     <Text style={styles.loremIpsum}>   </Text>
//                     <Text style={[styles.cm, styles.cmTypo]}>px</Text>
//                     <Image
//                       style={[
//                         styles.iconlyregularoutlinearrow2,
//                         styles.gobackLayout,
//                       ]}
//                       resizeMode="cover"
//                       source={require("../assets/iconlyregularoutlinearrow--down-2.png")}
//                     />
//                   </View>
//                   <View style={styles.rectangle} />
//                 </View>
//               </View>
//             </View>
//           </View>
//         </View>
//       </View>
       
//     </View>
//     </ScrollView>
//     {loading && (
//         <View style={styles.loadingOverlay}>
//         <BallIndicator
//         style={styles.indicator}
//         animating={loading}
//         size={50}
//         color="#6949FF"
//       />
//       <Text style={styles.loadingText}>{loadingText}</Text>
//         </View>
//       )}
//       <View
//         style={[
//           styles.button2ButtonsDarktrueC,
//           styles.autoLayoutVerticalPosition,
//         ]}
//       >
//         <View style={[styles.autoLayoutHorizontal4, styles.autoFlexBox]}>
//           <TouchableOpacity
//             style={[styles.buttonpillTypepillIconf, styles.buttonpillFlexBox]}
//             activeOpacity={0.0}
//             onPress={handleRegenerate}
//           >
//             <Text style={[styles.button, styles.textLayout]}>Re-generate</Text>
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={[styles.buttonpillTypepillIconf1, styles.buttonpillFlexBox]}
//             activeOpacity={0.0}
//             onPress={() => navigation.navigate("DownloadSuccessful")}
//           >
//             <Text style={[styles.button, styles.textLayout]}>Download</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </View>
//   );
// };
//#endregion

const DarkExtendImagesEditArtwo = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [loadingText, setLoadingText] = useState("");
  const { t } = useTranslation();

  const handleRegenerate = () => {
    setLoading(true);
    setLoadingText(t("Please wait, regenerating..."));
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  };

  return (
    <View style={[styles.darkExtendImagesEditArtwo, styles.artworkLayout]}>
      <View
        style={[
          styles.elementsnavbarEditDarktru,
          styles.autoLayoutHorizontal1FlexBox,
        ]}
      >
        <View style={[styles.autoLayoutHorizontal, styles.finalize1Layout]}>
          <Pressable
            style={styles.gobackLayout}
            onPress={() => navigation.goBack()}
          >
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={require("../assets/goback.png")}
            />
          </Pressable>
        </View>
        <Text style={[styles.title, styles.autoFlexBox]}>{t('Edit Artwork')}</Text>
        <TouchableOpacity
          activeOpacity={0.0}
          onPress={() => navigation.navigate("DarkExtendImagesFinalize")}
        >
          <Text style={[styles.finalize1, styles.cmTypo]}>{t('Finalize')}</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View style={[styles.darkExtendImagesEditArtwo, styles.artworkLayout]}>
          <View
            style={[styles.autoLayoutVertical, styles.autoLayoutVerticalPosition]}
          >
            <View style={[styles.elementsextendImages43, styles.autoSpaceBlock]}>
              <Image
                style={[styles.artworkRatio43ArtworkS, styles.artworkLayout]}
                resizeMode="cover"
                source={require("../assets/artwork-ratio4--3-artwork-sizelarge-componentartwork-ratio--size.png")}
              />
              <View style={styles.autoSpaceBlock}>
                <View style={styles.autoLayoutHorizontal1FlexBox}>
                  <Text style={[styles.title1, styles.labelTypo]}>
                    {t("Extend Aspect Ratio")}
                  </Text>
                  <Text style={[styles.viewAll, styles.textLayout]}>
                    {t("View All")}
                  </Text>
                  <Image
                    style={styles.iconlyregularoutlinearrow}
                    resizeMode="cover"
                    source={require("../assets/iconlyregularoutlinearrow--right4.png")}
                  />
                  <Image
                    style={styles.iconlyregularoutlinearrow}
                    resizeMode="cover"
                    source={require("../assets/iconlyregularoutlinearrow--right4.png")}
                  />
                </View>
                <View
                  style={[
                    styles.autoLayoutHorizontal1,
                    styles.autoLayoutHorizontal1FlexBox,
                  ]}
                >
                  <View style={styles.inputFormnormalStatefille}>
                    <Text style={[styles.label, styles.textLayout]}>{t('Label')}</Text>
                    <View style={styles.autoLayoutVertical2}>
                      <View style={styles.autoLayoutHorizontal1FlexBox}>
                        <Image
                          style={[
                            styles.iconlyregularoutlineprofile,
                            styles.gobackLayout,
                          ]}
                          resizeMode="cover"
                          source={require("../assets/iconlyregularoutlineprofile2.png")}
                        />
                        <Text style={styles.loremIpsum}> </Text>
                        <Text style={[styles.cm, styles.cmTypo]}>px</Text>
                        <Image
                          style={[
                            styles.iconlyregularoutlinearrow2,
                            styles.gobackLayout,
                          ]}
                          resizeMode="cover"
                          source={require("../assets/iconlyregularoutlinearrow--down-2.png")}
                        />
                      </View>
                      <View style={styles.rectangle} />
                    </View>
                  </View>
                  <View style={styles.inputFormnormalStatefille1}>
                    <Text style={[styles.label, styles.textLayout]}>{t('Label')}</Text>
                    <View style={styles.autoLayoutVertical2}>
                      <View style={styles.autoLayoutHorizontal1FlexBox}>
                        <Image
                          style={[
                            styles.iconlyregularoutlineprofile,
                            styles.gobackLayout,
                          ]}
                          resizeMode="cover"
                          source={require("../assets/iconlyregularoutlineprofile2.png")}
                        />
                        <Text style={styles.loremIpsum}>   </Text>
                        <Text style={[styles.cm, styles.cmTypo]}>px</Text>
                        <Image
                          style={[
                            styles.iconlyregularoutlinearrow2,
                            styles.gobackLayout,
                          ]}
                          resizeMode="cover"
                          source={require("../assets/iconlyregularoutlinearrow--down-2.png")}
                        />
                      </View>
                      <View style={styles.rectangle} />
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
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
      <View
        style={[
          styles.button2ButtonsDarktrueC,
          styles.autoLayoutVerticalPosition,
        ]}
      >
        <View style={[styles.autoLayoutHorizontal4, styles.autoFlexBox]}>
          <TouchableOpacity
            style={[styles.buttonpillTypepillIconf, styles.buttonpillFlexBox]}
            activeOpacity={0.0}
            onPress={handleRegenerate}
          >
            <Text style={[styles.button, styles.textLayout]}>
              {t("Re-generate")}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.buttonpillTypepillIconf1, styles.buttonpillFlexBox]}
            activeOpacity={0.0}
            onPress={() => navigation.navigate("DownloadSuccessful")}
          >
            <Text style={[styles.button, styles.textLayout]}>
              {t("Download")}
            </Text>
          </TouchableOpacity>
        </View>
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
  artworkLayout: {
    overflow: "hidden",
    width: "100%",
  },
  autoLayoutVerticalPosition: {
    paddingHorizontal: Padding.p_5xl,
    left: 0,
    right: 0,
    position: "absolute",
  },
  autoLayoutHorizontal1FlexBox: {
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  finalize1Layout: {
    width: 75,
    alignItems: "center",
  },
  autoFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  cmTypo: {
    textAlign: "right",
    lineHeight: 32,
    fontSize: FontSize.h5Semibold_size,
    fontFamily: FontFamily.bodyXSmallBold,
    fontWeight: "700",
  },
  autoSpaceBlock: {
    marginTop: 24,
    alignSelf: "stretch",
  },
  labelTypo: {
    fontFamily: FontFamily.bodyXSmallBold,
    fontWeight: "700",
    textAlign: "left",
  },
  textLayout: {
    lineHeight: 26,
    letterSpacing: 0,
    fontSize: FontSize.bodyLargeBold_size,
  },
  gobackLayout: {
    height: 28,
    width: 28,
  },
  buttonpillFlexBox: {
    padding: Padding.p_base,
    borderRadius: Border.br_81xl,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  groupIconPosition: {
    top: "50%",
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
    marginLeft: "85%"
  },
  autoLayoutHorizontal: {
    flexDirection: "row",
  },
  title: {
    width: 190,
    display: "flex",
    textAlign: "center",
    color: Color.skyWhite,
    fontFamily: FontFamily.bodyXSmallBold,
    fontWeight: "700",
    lineHeight: 38,
    fontSize: FontSize.h4Bold_size,
    marginLeft: "5%",
  },
  finalize1: {
    color: Color.primary900,
    display: "flex",
    width: 75,
    alignItems: "center",
    marginRight: "5%",
  },
  elementsnavbarEditDarktru: {
    justifyContent: "space-between",
    paddingHorizontal: 0,
    paddingVertical: Padding.p_8xs,
  },
  artworkRatio43ArtworkS: {
    borderRadius: Border.br_xl,
    maxWidth: "100%",
    height: 287,
    alignSelf: "stretch",
  },
  title1: {
    textAlign: "left",
    color: Color.skyWhite,
    lineHeight: 38,
    fontSize: FontSize.h4Bold_size,
    flex: 1,
  },
  viewAll: {
    marginLeft: 16,
    display: "none",
    textAlign: "left",
    color: Color.primary900,
    fontFamily: FontFamily.bodyXSmallBold,
    fontWeight: "700",
  },
  iconlyregularoutlinearrow: {
    width: 24,
    height: 24,
    marginLeft: 16,
    display: "none",
  },
  label: {
    display: "none",
    textAlign: "left",
    color: Color.skyWhite,
    fontFamily: FontFamily.bodyXSmallBold,
    fontWeight: "700",
    alignSelf: "stretch",
  },
  iconlyregularoutlineprofile: {
    display: "none",
  },
  loremIpsum: {
    marginLeft: 12,
    textAlign: "left",
    lineHeight: 32,
    fontSize: FontSize.h5Semibold_size,
    color: Color.skyWhite,
    fontFamily: FontFamily.bodyXSmallBold,
    fontWeight: "700",
    flex: 1,
  },
  cm: {
    marginLeft: 12,
    color: Color.skyWhite,
  },
  iconlyregularoutlinearrow2: {
    marginLeft: 12,
    display: "none",
  },
  rectangle: {
    height: 1,
    marginTop: 8,
    backgroundColor: Color.primary900,
    borderRadius: Border.br_81xl,
    alignSelf: "stretch",
  },
  autoLayoutVertical2: {
    marginTop: 14,
    alignSelf: "stretch",
  },
  inputFormnormalStatefille: {
    flex: 1,
  },
  inputFormnormalStatefille1: {
    marginLeft: 24,
    flex: 1,
  },
  autoLayoutHorizontal1: {
    marginTop: 20,
  },
  elementsextendImages43: {
    height: 410,
  },
  autoLayoutVertical: {
    top: 44,
    paddingVertical: Padding.p_xs,
  },
  button: {
    textAlign: "center",
    color: Color.skyWhite,
    fontFamily: FontFamily.bodyXSmallBold,
    fontWeight: "700",
    alignSelf: "stretch",
  },
  buttonpillTypepillIconf: {
    backgroundColor: Color.colorDarkslategray_200,
  },
  buttonpillTypepillIconf1: {
    backgroundColor: Color.primary900,
    marginLeft: 16,
  },
  autoLayoutHorizontal4: {
    flexDirection: "row",
    alignSelf: "stretch",
  },
  buttonpillTypepillIconf3: {
    backgroundColor: Color.alertsStatusButtonDisabled,
    marginLeft: 16,
  },
  autoLayoutHorizontal5: {
    display: "none",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  button2ButtonsDarktrueC: {
    bottom: 0,
    borderStyle: "solid",
    borderColor: Color.colorDarkslategray_200,
    borderTopWidth: 1,
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
    letterSpacing: 0,
    fontSize: FontSize.bodyLargeBold_size,
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
  darkExtendImagesEditArtwo: {
    height: 800,
    flex: 1,
    backgroundColor: Color.darkDarkbg,
  },
  loadingOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default DarkExtendImagesEditArtwo;
