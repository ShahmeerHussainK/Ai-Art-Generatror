import React from "react";
import { View, StyleSheet, Dimensions, TouchableOpacity, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, Border, Padding, FontSize } from "../GlobalStyles";
import Modal from "react-native-modal";
import { useTranslation } from 'react-i18next';
import { useTheme } from "../context/ThemeContext";

const { width, height } = Dimensions.get('window');


//#region B4Translation
// const DarkDownloadArtwork = ({ isVisible, onClose }) => {
//   const navigation = useNavigation();

//   return (
//     <Modal
//       animationIn={'bounce'}
//       isVisible={isVisible}
//       onBackdropPress={onClose}
//       deviceWidth={width}
//       style={styles.modal}
//     >
//       {/* <View style={styles.modalBackground}> */}
//       <View style={styles.blurView}>
//         <View style={[styles.rectangle, styles.rectanglePosition]} />
//         <View style={[styles.autoLayoutVertical12, styles.rectanglePosition]}>
//           <View style={[styles.frame, styles.frameLayout]}>
//             <View style={[styles.rectangle1, styles.frameLayout]} />
//           </View>
//           <Text style={[styles.downloadArtwork, styles.downloadArtworkSpaceBlock]}>
//             Download Artwork
//           </Text>
//           <Image
//             style={[styles.darktrueComponentdividerIcon, styles.artworkLayout]}
//             resizeMode="cover"
//             source={require("../assets/darktrue-componentdivider4.png")}
//           />
//           <View style={styles.downloadArtworkSpaceBlock}>
//             <TouchableOpacity
//               style={[styles.autoLayoutHorizontal10, styles.autoFlexBox1]}
//               activeOpacity={0.0}
//               //onPress={() => navigation.navigate("HomeScreen")}
//             >
//               <Text style={[styles.x512, styles.textFlexBox]}>512 x 512</Text>
//               <Image
//                 style={[styles.iconlyregularoutlinearrow1, styles.iconlyregularoutlinearrowLayout]}
//                 resizeMode="cover"
//                 source={require("../assets/iconlyregularoutlinearrow--right-2.png")}
//               />
//             </TouchableOpacity>
//             <Image
//               style={[styles.darktrueComponentdividerIcon, styles.artworkLayout]}
//               resizeMode="cover"
//               source={require("../assets/darktrue-componentdivider4.png")}
//             />
//            <TouchableOpacity
//               style={[styles.autoLayoutHorizontal101, styles.autoFlexBox1]}
//               activeOpacity={0.0}
//               //onPress={() => navigation.navigate("HomeScreen")}
//             >
//               <Text style={[styles.x512, styles.textFlexBox]}>1024 x 1024</Text>
//               <Image
//                 style={[styles.iconlyregularoutlinearrow1, styles.iconlyregularoutlinearrowLayout]}
//                 resizeMode="cover"
//                 source={require("../assets/iconlyregularoutlinearrow--right-2.png")}
//               />
//             </TouchableOpacity>
//             <Image
//               style={[styles.darktrueComponentdividerIcon, styles.artworkLayout]}
//               resizeMode="cover"
//               source={require("../assets/darktrue-componentdivider4.png")}
//             />
//             <TouchableOpacity
//               style={[styles.autoLayoutHorizontal11, styles.downloadArtworkSpaceBlock]}
//               activeOpacity={0.0}
//               //onPress={() => navigation.navigate("HomeScreen")}
//             >
//               <Text style={[styles.x512, styles.textFlexBox]}>2048 x 2048</Text>
//               <View style={[styles.stylesolidStateinfoSize, styles.autoLayoutVertical2FlexBox]}>
//                 <Text style={[styles.tagMarker, styles.textFlexBox]}>PRO</Text>
//               </View>
//             </TouchableOpacity>
//             <Image
//               style={[styles.darktrueComponentdividerIcon, styles.artworkLayout]}
//               resizeMode="cover"
//               source={require("../assets/darktrue-componentdivider4.png")}
//             />
//             <TouchableOpacity
//               style={[styles.autoLayoutHorizontal11, styles.downloadArtworkSpaceBlock]}
//               activeOpacity={0.0}
//               //onPress={() => navigation.navigate("HomeScreen")}
//             >
//               <Text style={[styles.x512, styles.textFlexBox]}>4096 x 4096</Text>
//               <View style={[styles.stylesolidStateinfoSize, styles.autoLayoutVertical2FlexBox]}>
//                 <Text style={[styles.tagMarker, styles.textFlexBox]}>PRO</Text>
//               </View>
//             </TouchableOpacity>
//             <Image
//               style={[styles.darktrueComponentdividerIcon, styles.artworkLayout]}
//               resizeMode="cover"
//               source={require("../assets/darktrue-componentdivider4.png")}
//             />
//             <TouchableOpacity
//               style={[styles.autoLayoutHorizontal11, styles.downloadArtworkSpaceBlock]}
//               activeOpacity={0.0}
//              // onPress={() => navigation.navigate("HomeScreen")}
//             >
//               <Text style={[styles.x512, styles.textFlexBox]}>8192 x 8192</Text>
//               <View style={[styles.stylesolidStateinfoSize, styles.autoLayoutVertical2FlexBox]}>
//                 <Text style={[styles.tagMarker, styles.textFlexBox]}>PRO</Text>
//               </View>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </View>
//       {/* </View> */}
//     </Modal>
//   );
// };
//#endregion

const DarkDownloadArtwork = ({ isVisible, onClose }) => {
  const navigation = useNavigation();
  const { t } = useTranslation();
  const { theme, toggleTheme, isDarkMode } = useTheme();

  return (
    <Modal
      animationIn={'bounce'}
      isVisible={isVisible}
      onBackdropPress={onClose}
      deviceWidth={width}
      style={styles.modal}
    >
      <View style={styles.blurView}>
        <View style={[styles.rectangle]} />
        <View style={[styles.autoLayoutVertical12, { backgroundColor: theme.background }]}>
          <View style={[styles.frame, styles.frameLayout]}>
            <View style={[styles.rectangle1, styles.frameLayout]} />
          </View>
          <Text style={[styles.downloadArtwork, styles.downloadArtworkSpaceBlock, { color: theme.text }]}>
            {t('Download Artwork')}
          </Text>
          <Image
            style={[styles.darktrueComponentdividerIcon, styles.artworkLayout]}
            resizeMode="cover"
            source={require("../assets/darktrue-componentdivider4.png")}
          />
          <View style={styles.downloadArtworkSpaceBlock}>
            <TouchableOpacity
              style={[styles.autoLayoutHorizontal10, styles.autoFlexBox1]}
              activeOpacity={0.0}
            >
              <Text style={[styles.x512, styles.textFlexBox, { color: theme.text }]}>{t('512 x 512')}</Text>
              <Image
                style={[styles.iconlyregularoutlinearrow1, styles.iconlyregularoutlinearrowLayout]}
                resizeMode="cover"
                source={isDarkMode ? require("../assets/iconlyregularoutlinearrow--right-21.png") : require("../assets/blackRightarrow.png")}
              />
            </TouchableOpacity>
            <Image
              style={[styles.darktrueComponentdividerIcon, styles.artworkLayout]}
              resizeMode="cover"
              source={require("../assets/darktrue-componentdivider4.png")}
            />
            <TouchableOpacity
              style={[styles.autoLayoutHorizontal101, styles.autoFlexBox1]}
              activeOpacity={0.0}
            >
              <Text style={[styles.x512, styles.textFlexBox, { color: theme.text }]}>{t('1024 x 1024')}</Text>
              <Image
                style={[styles.iconlyregularoutlinearrow1, styles.iconlyregularoutlinearrowLayout]}
                resizeMode="cover"
                source={isDarkMode ? require("../assets/iconlyregularoutlinearrow--right-21.png") : require("../assets/blackRightarrow.png")}
              />
            </TouchableOpacity>
            <Image
              style={[styles.darktrueComponentdividerIcon, styles.artworkLayout]}
              resizeMode="cover"
              source={require("../assets/darktrue-componentdivider4.png")}
            />
            <TouchableOpacity
              style={[styles.autoLayoutHorizontal11, styles.downloadArtworkSpaceBlock]}
              activeOpacity={0.0}
            >
              <Text style={[styles.x512, styles.textFlexBox, { color: theme.text }]}>{t('2048 x 2048')}</Text>
              <View style={[styles.stylesolidStateinfoSize, styles.autoLayoutVertical2FlexBox]}>
                <Text style={[styles.tagMarker, styles.textFlexBox]}>{t('PRO')}</Text>
              </View>
            </TouchableOpacity>
            <Image
              style={[styles.darktrueComponentdividerIcon, styles.artworkLayout]}
              resizeMode="cover"
              source={require("../assets/darktrue-componentdivider4.png")}
            />
            <TouchableOpacity
              style={[styles.autoLayoutHorizontal11, styles.downloadArtworkSpaceBlock]}
              activeOpacity={0.0}
            >
              <Text style={[styles.x512, styles.textFlexBox, { color: theme.text }]}>{t('4096 x 4096')}</Text>
              <View style={[styles.stylesolidStateinfoSize, styles.autoLayoutVertical2FlexBox]}>
                <Text style={[styles.tagMarker, styles.textFlexBox]}>{t('PRO')}</Text>
              </View>
            </TouchableOpacity>
            <Image
              style={[styles.darktrueComponentdividerIcon, styles.artworkLayout]}
              resizeMode="cover"
              source={require("../assets/darktrue-componentdivider4.png")}
            />
            <TouchableOpacity
              style={[styles.autoLayoutHorizontal11, styles.downloadArtworkSpaceBlock]}
              activeOpacity={0.0}
            >
              <Text style={[styles.x512, styles.textFlexBox, { color: theme.text }]}>{t('8192 x 8192')}</Text>
              <View style={[styles.stylesolidStateinfoSize, styles.autoLayoutVertical2FlexBox]}>
                <Text style={[styles.tagMarker, styles.textFlexBox]}>{t('PRO')}</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  modal: {
    margin: 0,
    justifyContent: 'flex-end',
  },
  blurView: {
    width: "100%",
    height: "50%",
    alignSelf: 'flex-end',
    position: 'absolute',
    bottom: 0
  },

  modalBackground: {
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
  },
  rectangle: {
    backgroundColor: Color.colorGray_400,
    top: 0,
    left: 0,
    right: 0,
  },
  rectangle1: {
    marginLeft: -19,
    left: "50%",
    bottom: 0,
    position: "absolute",
    backgroundColor: Color.colorDarkslategray_200,
    borderRadius: Border.br_81xl,
  },
  frame: {
    overflow: "hidden",
    height: 3,
    width: 38,
  },
  downloadArtwork: {
    textAlign: "center",
    color: Color.skyWhite,
    lineHeight: 38,
    fontSize: FontSize.h4Bold_size,
    fontFamily: FontFamily.bodyXSmallBold,
    fontWeight: "700",
    marginTop: 24,
  },
  darktrueComponentdividerIcon: {
    marginTop: 24,
    alignSelf: "stretch",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    width: "100%",
  },
  autoLayoutVertical12: {
    borderTopLeftRadius: Border.br_9xl,
    borderTopRightRadius: Border.br_9xl,
    borderColor: Color.colorDarkslategray_200,
    borderWidth: 1,
    paddingTop: Padding.p_5xs,
    paddingBottom: Padding.p_17xl,
    borderStyle: "solid",
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: Padding.p_5xl,
    left: 0,
    right: 0,
    position: "absolute",
    overflow: "hidden",
  },
  autoLayoutHorizontal10: {
    alignSelf: "stretch",
    alignItems: "center",
    flexDirection: "row",
  },
  autoLayoutHorizontal101: {
    alignSelf: "stretch",
    alignItems: "center",
    flexDirection: "row",
    top: "3%",
  },
  autoLayoutHorizontal11: {
    alignItems: "center",
    flexDirection: "row",
  },
  autoFlexBox1: {
    alignItems: "center",
    flexDirection: "row",
  },
  x512: {
    fontFamily: FontFamily.bodyMediumSemibold,
    fontWeight: "600",
    textAlign: "left",
    lineHeight: 32,
    fontSize: FontSize.h5Semibold_size,
    flex: 1,
    color: Color.skyWhite,
  },
  textFlexBox: {
    textAlign: "left",
    color: Color.skyWhite,
  },
  iconlyregularoutlinearrow1: {
    height: 24,
    width: 24,
    marginLeft: 20,
  },
  tagMarker: {
    fontWeight: "500",
    fontFamily: FontFamily.bodyXSmallMedium,
    lineHeight: 19,
    fontSize: FontSize.bodySmallRegular_size,
    letterSpacing: 0,
  },
  stylesolidStateinfoSize: {
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_5xs,
    marginLeft: 20,
    borderRadius: Border.br_5xs,
    flexDirection: "row",
    backgroundColor: Color.primary900,
    justifyContent: "center",
    alignItems: "center",
  },
  autoLayoutVertical2FlexBox: {
    backgroundColor: Color.primary900,
    justifyContent: "center",
    alignItems: "center",
  },
  downloadArtworkSpaceBlock: {
    marginTop: 24,
    alignSelf: "stretch",
  },
});

export default DarkDownloadArtwork;
