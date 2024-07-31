import * as React from "react";
import {
  Image,
  StyleSheet,
  Pressable,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useTranslation } from 'react-i18next';
import { Padding, FontFamily, FontSize, Border, Color } from "../GlobalStyles";

//#region   B4Translation
// const DarkExtendImagesUploadIma = () => {
//   const navigation = useNavigation();

//   return (
//     <View style={styles.PhotoToAnimeUploadPhoto}>
//       <View
//         style={[styles.autoLayoutVertical, styles.autoLayoutVerticalPosition]}
//       >
//         <View style={[styles.navbardefaultDarktrueCom, styles.darktrueFlexBox]}>
//           <View style={styles.autoLayoutHorizontal}>
//             <Image
//               style={[styles.typelogoDefaultComponentl, styles.gobackLayout]}
//               resizeMode="cover"
//               source={require("../assets/typelogo-default-componentlogo8.png")}
//             />
//             <Pressable
//               style={[styles.gobackLayout]}
//               onPress={() => navigation.goBack()}
//             >
//               <Image
//                 style={styles.icon}
//                 resizeMode="cover"
//                 source={require("../assets/goback7.png")}
//               />
//             </Pressable>
//           </View>
//           <Text style={[styles.titleSection, styles.titleTypo]}>
//           Extend Images
//           </Text>
//           <Image
//             style={[styles.autoLayoutHorizontal1, styles.gobackLayout]}
//             resizeMode="cover"
//             source={require("../assets/auto-layout-horizontal.png")}
//           />
//         </View>
//         <View
//           style={[
//             styles.elementsuploadImagesToGene,
//             styles.autoLayoutVertical1FlexBox,
//           ]}
//         >
//           <View style={styles.autoLayoutVertical1FlexBox}>
//             <Text style={[styles.uploadYourPhoto, styles.titleTypo]}>
//               Upload an Image
//             </Text>
//             <Text style={styles.uploadYourPhoto1}>
//             Upload your image, and we’ll extend it for you.
//             </Text>
//           </View>
//           <TouchableOpacity
//             style={[styles.autoLayoutVertical2, styles.autoSpaceBlock]}
//             activeOpacity={0.0}
//              // onPress={() => navigation.navigate("ExplorePrompt")}
//           >
//             <Image
//               style={styles.iconlycurvedoutlineupload}
//               resizeMode="cover"
//               source={require("../assets/iconlycurvedoutlineupload1.png")}
//             />
//           </TouchableOpacity>
//           <View style={styles.autoSpaceBlock}>
//             <View
//               style={[styles.elementssection1Darktrue, styles.darktrueFlexBox]}
//             >
//               <Text style={[styles.title, styles.titleTypo]}>
//                 Extend Aspect Ratio
//               </Text>
//               <Text style={[styles.viewAll, styles.textLayout]}>View All</Text>
//               <Image
//                 style={styles.iconlyregularoutlinearrow}
//                 resizeMode="cover"
//                 source={require("../assets/iconlyregularoutlinearrow--right2.png")}
//               />
//               <Image
//                 style={styles.iconlyregularoutlinearrow}
//                 resizeMode="cover"
//                 source={require("../assets/iconlyregularoutlinearrow--right2.png")}
//               />
//             </View>
//             <View style={[styles.autoLayoutHorizontal2, styles.autoSpaceBlock]}>
//               <View style={styles.inputFormnormalStatedefau}>
//                 <Text style={[styles.label, styles.textLayout]}>Label</Text>
//                 <TextInput
//                   style={[styles.autoLayoutVertical4, styles.titleTypo]}
//                   placeholder="Enter Width"
//                   keyboardType="numeric"
//                   autoCapitalize="none"
//                   placeholderTextColor="#616161"
//                 />
//               </View>
//               <View style={styles.inputFormnormalStatedefau1}>
//                 <Text style={[styles.label, styles.textLayout]}>Label</Text>
//                 <TextInput
//                   style={[styles.autoLayoutVertical4, styles.titleTypo]}
//                   placeholder="Enter Height"
//                   keyboardType="numeric"
//                   autoCapitalize="none"
//                   placeholderTextColor="#616161"
//                 />
//               </View>
//             </View>
//           </View>
//         </View>
//       </View>
//       <View
//         style={[
//           styles.buttonprimaryDarktrueCom,
//           styles.autoLayoutVerticalPosition,
//         ]}
//       >
//         <TouchableOpacity
//           style={[styles.buttonpillTypepillIconf, styles.rectangleLayout]}
//           activeOpacity={0.0}
//           onPress={() => navigation.navigate("DarkExtendImagesUploadedI")}
//         >
//           <Text style={[styles.button, styles.textLayout]}>Extend</Text>
//         </TouchableOpacity>
        
//       </View>
//     </View>
//   );
// };
//#endregion
const DarkExtendImagesUploadIma = () => {
  const navigation = useNavigation();
  const { t } = useTranslation();

  return (
    <View style={styles.PhotoToAnimeUploadPhoto}>
      <View
        style={[styles.autoLayoutVertical, styles.autoLayoutVerticalPosition]}
      >
        <View style={[styles.navbardefaultDarktrueCom, styles.darktrueFlexBox]}>
          <View style={styles.autoLayoutHorizontal}>
            <Image
              style={[styles.typelogoDefaultComponentl, styles.gobackLayout]}
              resizeMode="cover"
              source={require("../assets/typelogo-default-componentlogo8.png")}
            />
            <Pressable
              style={[styles.gobackLayout]}
              onPress={() => navigation.goBack()}
            >
              <Image
                style={styles.icon}
                resizeMode="cover"
                source={require("../assets/goback7.png")}
              />
            </Pressable>
          </View>
          <Text style={[styles.titleSection, styles.titleTypo]}>
            {t("Extend Images")}
          </Text>
          <Image
            style={[styles.autoLayoutHorizontal1, styles.gobackLayout]}
            resizeMode="cover"
            source={require("../assets/auto-layout-horizontal.png")}
          />
        </View>
        <View
          style={[
            styles.elementsuploadImagesToGene,
            styles.autoLayoutVertical1FlexBox,
          ]}
        >
          <View style={styles.autoLayoutVertical1FlexBox}>
            <Text style={[styles.uploadYourPhoto, styles.titleTypo]}>
              {t("Upload an Image")}
            </Text>
            <Text style={styles.uploadYourPhoto1}>
              {t("Upload your image, and we’ll extend it for you.")}
            </Text>
          </View>
          <TouchableOpacity
            style={[styles.autoLayoutVertical2, styles.autoSpaceBlock]}
            activeOpacity={0.0}
            // onPress={() => navigation.navigate("ExplorePrompt")}
          >
            <Image
              style={styles.iconlycurvedoutlineupload}
              resizeMode="cover"
              source={require("../assets/iconlycurvedoutlineupload1.png")}
            />
          </TouchableOpacity>
          <View style={styles.autoSpaceBlock}>
            <View
              style={[styles.elementssection1Darktrue, styles.darktrueFlexBox]}
            >
              <Text style={[styles.title, styles.titleTypo]}>
                {t("Extend Aspect Ratio")}
              </Text>
              <Text style={[styles.viewAll, styles.textLayout]}>
                {t("View All")}
              </Text>
              <Image
                style={styles.iconlyregularoutlinearrow}
                resizeMode="cover"
                source={require("../assets/iconlyregularoutlinearrow--right2.png")}
              />
              <Image
                style={styles.iconlyregularoutlinearrow}
                resizeMode="cover"
                source={require("../assets/iconlyregularoutlinearrow--right2.png")}
              />
            </View>
            <View style={[styles.autoLayoutHorizontal2, styles.autoSpaceBlock]}>
              <View style={styles.inputFormnormalStatedefau}>
                <Text style={[styles.label, styles.textLayout]}>
                  {t("Label")}
                </Text>
                <TextInput
                  style={[styles.autoLayoutVertical4, styles.titleTypo]}
                  placeholder={t("Enter Width")}
                  keyboardType="numeric"
                  autoCapitalize="none"
                  placeholderTextColor="#616161"
                />
              </View>
              <View style={styles.inputFormnormalStatedefau1}>
                <Text style={[styles.label, styles.textLayout]}>
                  {t("Label")}
                  {/* {t("Enter Height")} */}
                </Text>
                <TextInput
                  style={[styles.autoLayoutVertical4, styles.titleTypo]}
                  placeholder={t("Enter Height")}
                  keyboardType="numeric"
                  autoCapitalize="none"
                  placeholderTextColor="#616161"
                />
              </View>
            </View>
          </View>
        </View>
      </View>
      <View
        style={[
          styles.buttonprimaryDarktrueCom,
          styles.autoLayoutVerticalPosition,
        ]}
      >
        <TouchableOpacity
          style={[styles.buttonpillTypepillIconf, styles.rectangleLayout]}
          activeOpacity={0.0}
          onPress={() => navigation.navigate("DarkExtendImagesUploadedI")}
        >
          <Text style={[styles.button, styles.textLayout]}>
            {t("Extend")}
          </Text>
        </TouchableOpacity>
      </View>
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
    flexDirection: "row",
    alignItems: "center",
  },
  gobackLayout: {
    height: 28,
    width: 28,
  },
  titleTypo: {
    fontFamily: FontFamily.bodyXSmallBold,
    fontWeight: "700",
  },
  autoLayoutVertical1FlexBox: {
    justifyContent: "center",
    alignSelf: "stretch",
  },
  autoSpaceBlock: {
    marginTop: "1%",
    alignSelf: "stretch",
  },
  textTypo: {
    fontFamily: FontFamily.bodyMediumSemibold,
    fontWeight: "600",
  },
  textLayout: {
    lineHeight: 26,
    fontSize: FontSize.bodyLargeBold_size,
    letterSpacing: 0,
  },
  cmLayout: {
    lineHeight: 32,
    fontSize: FontSize.h5Semibold_size,
  },
  rectangleLayout: {
    borderRadius: Border.br_81xl,
    alignSelf: "stretch",
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
    bottom:"25%",
    height: "100%",
    width: "100%",
    marginLeft: "-70%",

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
    textAlign: "center",
    color: Color.skyWhite,
    fontSize: FontSize.h4Bold_size,
    fontWeight: "700",
    marginLeft: 16,
    flex: 1,
    marginBottom:"7%"
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
    color: Color.skyWhite,
    lineHeight: 38,
    fontSize: FontSize.h4Bold_size,
    fontWeight: "700",
    alignSelf: "stretch",
  },
  uploadYourPhoto1: {
    fontSize: FontSize.bodyXLargeBold_size,
    lineHeight: 29,
    fontFamily: FontFamily.bodySmallRegular,
    marginTop: 8,
    letterSpacing: 0,
    textAlign: "left",
    color: Color.skyWhite,
    alignSelf: "stretch",
  },
  iconlycurvedoutlineupload: {
    width: 52,
    height: 52,
  },
  upload: {
    marginTop: 32,
    color: Color.primary900,
    lineHeight: 32,
    fontSize: FontSize.h5Semibold_size,
    textAlign: "center",
  },
  autoLayoutVertical2: {
    borderRadius: Border.br_xs,
    backgroundColor: Color.transparentPurple,
    height: 382,
    padding: Padding.p_base,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  title: {
    textAlign: "left",
    color: Color.skyWhite,
    lineHeight: 38,
    fontSize: FontSize.h4Bold_size,
    fontWeight: "700",
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
    alignSelf: "stretch",
  },
  label: {
    textAlign: "left",
    color: Color.skyWhite,
    fontFamily: FontFamily.bodyXSmallBold,
    fontWeight: "700",
    display: "none",
    alignSelf: "stretch",
  },
  iconlyregularoutlineprofile: {
    display: "none",
  },
  loremIpsum: {
    color: Color.colorDimgray,
    marginLeft: 12,
    textAlign: "left",
    fontFamily: FontFamily.bodyXSmallBold,
    fontWeight: "700",
    flex: 1,
  },
  cm: {
    textAlign: "right",
    marginLeft: 12,
    color: Color.skyWhite,
    fontFamily: FontFamily.bodyXSmallBold,
    fontWeight: "700",
  },
  iconlyregularoutlinearrow2: {
    marginLeft: 12,
    display: "none",
  },
  rectangle: {
    backgroundColor: Color.colorDarkslategray_100,
    height: 1,
    marginTop: 8,
  },
  autoLayoutVertical4: {
    marginTop: "1%",
    alignSelf: "stretch",
  },
  inputFormnormalStatedefau: {
    flex: 1,
  },
  inputFormnormalStatedefau1: {
    marginLeft: 24,
    flex: 1,
  },
  autoLayoutHorizontal2: {
    alignItems: "center",
    flexDirection: "row",
  },
  autoLayoutVertical3: {
    display: "none",
  },
  elementsuploadImagesToGene: {
    alignItems: "center",
  },
  autoLayoutVertical: {
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
    backgroundColor: Color.alertsStatusButtonDisabled,
    padding: Padding.p_base,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonprimaryDarktrueCom: {
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
    lineHeight: 26,
    fontSize: FontSize.bodyLargeBold_size,
    letterSpacing: 0,
    fontFamily: FontFamily.bodyMediumSemibold,
    fontWeight: "600",
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
  PhotoToAnimeUploadPhoto: {
    height: "100%",
    width: "100%",
    flex: 1,
    backgroundColor: Color.darkDarkbg,
  },
});

export default DarkExtendImagesUploadIma;
