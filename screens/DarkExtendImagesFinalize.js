import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Pressable,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Padding, FontFamily, FontSize, Border, Color } from "../GlobalStyles";
import DarkDownloadArtwork from "./DarkDownloadArtwork";
import { useTranslation } from 'react-i18next';

//#region B4Translation
// const DarkExtendImagesFinalize = () => {
//   const navigation = useNavigation();
//   const [modalVisible, setModalVisible] = useState(false);

//   return (
//     <View style={styles.darkBatchArtGeneratorFina}>
//       <View
//         style={[styles.autoLayoutVertical, styles.autoLayoutVerticalPosition]}
//       >
//         <View style={[styles.navbardefaultDarktrueCom, styles.darktrueFlexBox]}>
//           <View style={styles.autoLayoutHorizontal}>
//             <Image
//               style={[styles.typelogoDefaultComponentl, styles.gobackLayout]}
//               resizeMode="cover"
//               source={require("../assets/typelogo-default-componentlogo4.png")}
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
//           <Text style={[styles.titleSection, styles.buttonTypo]}>Finalize</Text>
//           <Image
//             style={[styles.autoLayoutHorizontal1, styles.gobackLayout]}
//             resizeMode="cover"
//             source={require("../assets/auto-layout-horizontal.png")}
//           />
//         </View>
//         <View style={styles.elementsfinalizeArtwork1}>
//           <Image
//             style={styles.artworkRatio11ArtworkS}
//             resizeMode="cover"
//             source={require("../assets/artwork-ratio4--3-artwork-sizelarge-componentartwork-ratio--size.png")}
//           />
//           <View style={styles.elementsfinalizeArtwork1}>
//             <View
//               style={[styles.elementssection4Darktrue, styles.darktrueFlexBox]}
//             >
//               <View
//                 style={[styles.autoLayoutHorizontal2, styles.darktrueFlexBox]}
//               >
//                 <Text style={[styles.title, styles.titleTypo]}>Add Title</Text>
//               </View>
//             </View>
//             <View style={styles.inputSpaceBlock}>
//               <Text style={[styles.label, styles.inputTypo]}>Label</Text>
//               <TextInput
//                 style={[styles.autoLayoutHorizontal3, styles.autoSpaceBlock]}
//                 placeholder="Enter Title"
//                 placeholderTextColor="#757575"
//                 color="white"
//               />
//             </View>
//           </View>
//         </View>
//       </View>
//       <View
//         style={[
//           styles.button2ButtonsDarktrueC,
//           styles.autoLayoutVerticalPosition,
//         ]}
//       >
//         <View style={styles.autoFlexBox}>
//         <TouchableOpacity
//             style={[styles.buttonpillTypepillIconf, styles.buttonpillFlexBox]}
//             activeOpacity={0.0}
//             onPress={() => setModalVisible(true)}
//           >
//             <Text style={[styles.button, styles.textLayout]}>Download Art</Text>
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={[styles.buttonpillTypepillIconf1, styles.buttonpillFlexBox]}
//             activeOpacity={0.0}
//             onPress={() => navigation.navigate("ShareToFeedSuccessful")}
//           >
//             <Text style={[styles.button, styles.textLayout]}>Share to Feed</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//       <DarkDownloadArtwork
//         isVisible={modalVisible}
//         onClose={() => setModalVisible(false)}
//       />
//     </View>
//   );
// };
//#endregion

const DarkExtendImagesFinalize = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const { t } = useTranslation();

  return (
    <View style={styles.darkBatchArtGeneratorFina}>
      <View
        style={[styles.autoLayoutVertical, styles.autoLayoutVerticalPosition]}
      >
        <View style={[styles.navbardefaultDarktrueCom, styles.darktrueFlexBox]}>
          <View style={styles.autoLayoutHorizontal}>
            <Image
              style={[styles.typelogoDefaultComponentl, styles.gobackLayout]}
              resizeMode="cover"
              source={require("../assets/typelogo-default-componentlogo4.png")}
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
          <Text style={[styles.titleSection, styles.buttonTypo]}>{t("Finalize")}</Text>
          <Image
            style={[styles.autoLayoutHorizontal1, styles.gobackLayout]}
            resizeMode="cover"
            source={require("../assets/auto-layout-horizontal.png")}
          />
        </View>
        <View style={styles.elementsfinalizeArtwork1}>
          <Image
            style={styles.artworkRatio11ArtworkS}
            resizeMode="cover"
            source={require("../assets/artwork-ratio4--3-artwork-sizelarge-componentartwork-ratio--size.png")}
          />
          <View style={styles.elementsfinalizeArtwork1}>
            <View
              style={[styles.elementssection4Darktrue, styles.darktrueFlexBox]}
            >
              <View
                style={[styles.autoLayoutHorizontal2, styles.darktrueFlexBox]}
              >
                <Text style={[styles.title, styles.titleTypo]}>{t("Add Title")}</Text>
              </View>
            </View>
            <View style={styles.inputSpaceBlock}>
              <Text style={[styles.label, styles.inputTypo]}>{t('Label')}</Text>
              <TextInput
                style={[styles.autoLayoutHorizontal3, styles.autoSpaceBlock]}
                placeholder={t("Enter Title")}
                placeholderTextColor="#757575"
                color="white"
              />
            </View>
          </View>
        </View>
      </View>
      <View
        style={[
          styles.button2ButtonsDarktrueC,
          styles.autoLayoutVerticalPosition,
        ]}
      >
        <View style={styles.autoFlexBox}>
          <TouchableOpacity
            style={[styles.buttonpillTypepillIconf, styles.buttonpillFlexBox]}
            activeOpacity={0.0}
            onPress={() => setModalVisible(true)}
          >
            <Text style={[styles.button, styles.textLayout]}>{t("Download Art")}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.buttonpillTypepillIconf1, styles.buttonpillFlexBox]}
            activeOpacity={0.0}
            onPress={() => navigation.navigate("ShareToFeedSuccessful")}
          >
            <Text style={[styles.button, styles.textLayout]}>{t("Share to Feed")}</Text>
          </TouchableOpacity>
        </View>
      </View>
      <DarkDownloadArtwork
        isVisible={modalVisible}
        onClose={() => setModalVisible(false)}
      />
    </View>
  );
};


const styles = StyleSheet.create({
  autoLayoutVerticalPosition: {
    paddingHorizontal: Padding.p_5xl,
    left: 0,
    right: 0,
    position: "absolute",
  },
  darktrueFlexBox: {
    alignItems: "center",
    flexDirection: "row",
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
  titleTypo: {
    fontFamily: FontFamily.bodyXSmallBold,
    fontWeight: "700",
  },
  informationTypo: {
    marginLeft: 8,
    lineHeight: 26,
    letterSpacing: 0,
    fontSize: FontSize.bodyLargeBold_size,
    textAlign: "left",
  },
  inputTypo: {
    fontFamily: FontFamily.bodyMediumSemibold,
    fontWeight: "600",
  },
  autoSpaceBlock: {
    marginTop: 8,
    paddingVertical: Padding.p_lg,
    paddingHorizontal: Padding.p_xl,
    borderRadius: Border.br_xs,
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  buttonpillFlexBox: {
    padding: Padding.p_base,
    borderRadius: Border.br_81xl,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  textLayout: {
    lineHeight: 26,
    letterSpacing: 0,
    fontSize: FontSize.bodyLargeBold_size,
    color: Color.skyWhite,
  },
  autoFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  typelogoDefaultComponentl: {
    borderRadius: Border.br_341xl,
    display: "none",
  },
  icon: {
    height: "100%",
    width: "100%",
    bottom: "35%"
  },
  autoLayoutHorizontal: {
    width: 28,
    alignItems: "center",
    flexDirection: "row",
  },
  titleSection: {
    fontSize: FontSize.h4Bold_size,
    color: Color.skyWhite,
    marginLeft: "5%",
    flex: 1,
    marginBottom: "5%"
  },
  autoLayoutHorizontal1: {
    marginLeft: 16,
  },
  navbardefaultDarktrueCom: {
    height: 48,
    paddingHorizontal: 0,
    alignSelf: "stretch",
  },
  artworkRatio11ArtworkS: {
    borderRadius: Border.br_xl,
    maxWidth: "100%",
    height: 382,
    alignSelf: "stretch",
    overflow: "hidden",
    width: "100%",
  },
  title: {
    fontSize: FontSize.h5Semibold_size,
    lineHeight: 32,
    textAlign: "left",
    color: Color.skyWhite,
  },
  informationDetails: {
    color: Color.greyscale300,
    fontFamily: FontFamily.bodySmallRegular,
    marginLeft: 8,
    flex: 1,
  },
  autoLayoutHorizontal2: {
    flex: 1,
  },
  elementssection4Darktrue: {
    alignSelf: "stretch",
  },
  label: {
    lineHeight: 29,
    fontWeight: "600",
    fontSize: FontSize.bodyXLargeBold_size,
    letterSpacing: 0,
    textAlign: "left",
    color: Color.skyWhite,
    display: "none",
    alignSelf: "stretch",
  },
  autoLayoutHorizontal3: {
    backgroundColor: Color.darkDark3,
    fontFamily: FontFamily.bodyMediumSemibold,
    fontWeight: "600",
    fontSize: FontSize.bodyXLargeBold_size,
  },
  inputSpaceBlock: {
    marginTop: 16,
    alignSelf: "stretch",
  },
  elementsfinalizeArtwork1: {
    marginTop: 24,
    alignSelf: "stretch",
  },
  autoLayoutVertical: {
    paddingVertical: Padding.p_xs,
  },
  button: {
    textAlign: "center",
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
    fontFamily: FontFamily.bodyMediumSemibold,
    fontWeight: "600",
    lineHeight: 26,
    letterSpacing: 0,
    fontSize: FontSize.bodyLargeBold_size,
    color: Color.skyWhite,
    textAlign: "left",
  },
  darkBatchArtGeneratorFina: {
    height: 932,
    overflow: "hidden",
    width: "100%",
    flex: 1,
    backgroundColor: Color.darkDarkbg,
  },
});

export default DarkExtendImagesFinalize;