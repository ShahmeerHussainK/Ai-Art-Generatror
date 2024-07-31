import React from "react";
import { Image, StyleSheet, Dimensions, View, Text, TouchableOpacity } from "react-native";
import Modal from "react-native-modal";
import { BlurView } from "@react-native-community/blur";
import { useNavigation } from "@react-navigation/native";
import { Padding, Color, FontSize, FontFamily, Border } from "../GlobalStyles";
import { useTranslation } from 'react-i18next';

const { width, height } = Dimensions.get('window');


//#region B4Translation
// const DarkArtworkPostDetailsRemix = ({ isVisible, onClose }) => {
//   const navigation = useNavigation();

//   return (
//     <Modal 
//       animationIn={'bounce'}
//       isVisible={isVisible} 
//       onBackdropPress={onClose}
//       deviceWidth={width}
//       style={styles.modal}
//     >

//     <View style={styles.blurContainer}>
//       <BlurView style={styles.blurView} blurType="dark" blurAmount={500}>
       
//           <View style={[styles.rectangle, styles.rectanglePosition]} />
//           <View style={[styles.autoLayoutVertical9, styles.rectanglePosition]}>
//             <View style={[styles.frame, styles.frameLayout]}>
//               <View style={[styles.rectangle1, styles.frameLayout]} />
//             </View>
//             <Text style={[styles.remix, styles.remixSpaceBlock]}>Remix</Text>
//             <Image
//               style={[styles.darktrueComponentdividerIcon1, styles.remixSpaceBlock]}
//               resizeMode="cover"
//               source={require("../assets/darktrue-componentdivider4.png")}
//             />
//             <View style={styles.remixSpaceBlock}>
//               <TouchableOpacity style={styles.autoLayoutHorizontal2}
//                   activeOpacity={0.0}
//                   //onPress={() => navigation.navigate("ExplorePrompt")}
//                 >
//                 <Image
//                   style={styles.gobackLayout}
//                   resizeMode="cover"
//                   source={require("../assets/iconlyregularoutlineimage-3.png")}
//                 />
//                 <Text style={[styles.useAsInput, styles.nameFlexBox]}>
//                   Use as Input Image
//                 </Text>
//                 <Image
//                   style={[
//                     styles.iconlyregularoutlinearrow,
//                     styles.iconellipsisVComponentaddLayout,
//                   ]}
//                   resizeMode="cover"
//                   source={require("../assets/iconlyregularoutlinearrow--right-2.png")}
//                 />
//               </TouchableOpacity>
//               <Image
//                 style={[
//                   styles.darktrueComponentdividerIcon1,
//                   styles.remixSpaceBlock,
//                 ]}
//                 resizeMode="cover"
//                 source={require("../assets/darktrue-componentdivider4.png")}
//               />
//               <TouchableOpacity
//                 style={[styles.autoLayoutHorizontal13, styles.remixSpaceBlock]}
//                 activeOpacity={0.0}
//                 //onPress={() => navigation.navigate("ExplorePrompt")}
//               >
//                 <Image
//                   style={[styles.iconeditImageOutlineCompo, styles.gobackLayout]}
//                   resizeMode="cover"
//                   source={require("../assets/iconeditimageoutline-componentadditional-icons1.png")}
//                 />
//                 <Text style={[styles.useAsInput, styles.nameFlexBox]}>
//                   Create Art with this Prompt
//                 </Text>
//                 <Image
//                   style={[
//                     styles.iconlyregularoutlinearrow,
//                     styles.iconellipsisVComponentaddLayout,
//                   ]}
//                   resizeMode="cover"
//                   source={require("../assets/iconlyregularoutlinearrow--right-2.png")}
//                 />
//               </TouchableOpacity>
//               <Image
//                 style={[
//                   styles.darktrueComponentdividerIcon1,
//                   styles.remixSpaceBlock,
//                 ]}
//                 resizeMode="cover"
//                 source={require("../assets/darktrue-componentdivider4.png")}
//               />
//               <TouchableOpacity
//                 style={[styles.autoLayoutHorizontal13, styles.remixSpaceBlock]}
//                 activeOpacity={0.0}
//                 //onPress={() => navigation.navigate("ExplorePrompt")}
//               >
//                 <Image
//                   style={styles.gobackLayout}
//                   resizeMode="cover"
//                   source={require("../assets/iconlyregularlightedit.png")}
//                 />
//                 <Text style={[styles.useAsInput, styles.nameFlexBox]}>
//                   Try this Style
//                 </Text>
//                 <Image
//                   style={[
//                     styles.iconlyregularoutlinearrow,
//                     styles.iconellipsisVComponentaddLayout,
//                   ]}
//                   resizeMode="cover"
//                   source={require("../assets/iconlyregularoutlinearrow--right-2.png")}
//                 />
//               </TouchableOpacity>
//             </View>
//           </View>
//       </BlurView>
//       </View>
//     </Modal>
//   );
// };
//#endregion

const DarkArtworkPostDetailsRemix = ({ isVisible, onClose }) => {
  const { t } = useTranslation(); // Initialize the translation hook
  const navigation = useNavigation();

  return (
    <Modal 
      animationIn={'bounce'}
      isVisible={isVisible} 
      onBackdropPress={onClose}
      deviceWidth={width}
      style={styles.modal}
    >
      <View style={styles.blurContainer}>
        <BlurView style={styles.blurView} blurType="dark" blurAmount={500}>
          <View style={[styles.rectangle, styles.rectanglePosition]} />
          <View style={[styles.autoLayoutVertical9, styles.rectanglePosition]}>
            <View style={[styles.frame, styles.frameLayout]}>
              <View style={[styles.rectangle1, styles.frameLayout]} />
            </View>
            <Text style={[styles.remix, styles.remixSpaceBlock]}>{t('Remix')}</Text>
            <Image
              style={[styles.darktrueComponentdividerIcon1, styles.remixSpaceBlock]}
              resizeMode="cover"
              source={require("../assets/darktrue-componentdivider4.png")}
            />
            <View style={styles.remixSpaceBlock}>
              <TouchableOpacity 
                style={styles.autoLayoutHorizontal2}
                activeOpacity={0.0}
                //onPress={() => navigation.navigate("ExplorePrompt")}
              >
                <Image
                  style={styles.gobackLayout}
                  resizeMode="cover"
                  source={require("../assets/iconlyregularoutlineimage-3.png")}
                />
                <Text style={[styles.useAsInput, styles.nameFlexBox]}>
                  {t('Use as Input Image')}
                </Text>
                <Image
                  style={[
                    styles.iconlyregularoutlinearrow,
                    styles.iconellipsisVComponentaddLayout,
                  ]}
                  resizeMode="cover"
                  source={require("../assets/iconlyregularoutlinearrow--right-2.png")}
                />
              </TouchableOpacity>
              <Image
                style={[
                  styles.darktrueComponentdividerIcon1,
                  styles.remixSpaceBlock,
                ]}
                resizeMode="cover"
                source={require("../assets/darktrue-componentdivider4.png")}
              />
              <TouchableOpacity
                style={[styles.autoLayoutHorizontal13, styles.remixSpaceBlock]}
                activeOpacity={0.0}
                //onPress={() => navigation.navigate("ExplorePrompt")}
              >
                <Image
                  style={[styles.iconeditImageOutlineCompo, styles.gobackLayout]}
                  resizeMode="cover"
                  source={require("../assets/iconeditimageoutline-componentadditional-icons1.png")}
                />
                <Text style={[styles.useAsInput, styles.nameFlexBox]}>
                  {t('Create Art with this Prompt')}
                </Text>
                <Image
                  style={[
                    styles.iconlyregularoutlinearrow,
                    styles.iconellipsisVComponentaddLayout,
                  ]}
                  resizeMode="cover"
                  source={require("../assets/iconlyregularoutlinearrow--right-2.png")}
                />
              </TouchableOpacity>
              <Image
                style={[
                  styles.darktrueComponentdividerIcon1,
                  styles.remixSpaceBlock,
                ]}
                resizeMode="cover"
                source={require("../assets/darktrue-componentdivider4.png")}
              />
              <TouchableOpacity
                style={[styles.autoLayoutHorizontal13, styles.remixSpaceBlock]}
                activeOpacity={0.0}
                //onPress={() => navigation.navigate("ExplorePrompt")}
              >
                <Image
                  style={styles.gobackLayout}
                  resizeMode="cover"
                  source={require("../assets/iconlyregularlightedit.png")}
                />
                <Text style={[styles.useAsInput, styles.nameFlexBox]}>
                  {t('Try this Style')}
                </Text>
                <Image
                  style={[
                    styles.iconlyregularoutlinearrow,
                    styles.iconellipsisVComponentaddLayout,
                  ]}
                  resizeMode="cover"
                  source={require("../assets/iconlyregularoutlinearrow--right-2.png")}
                />
              </TouchableOpacity>
            </View>
          </View>
        </BlurView>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    margin: 0,
    justifyContent: 'flex-end',
  },
  blurContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    top:"51%",
    width:"auto",
    overflow: "hidden", 

    borderRadius: Border.br_9xl, 
  
    },
    blurView: {
      width: "100%",
      height: "100%",
      borderRadius: 20, 
    },
  gobackLayout: {
    height: 28,
    width: 28,
  },
  nameFlexBox: {
    textAlign: "left",
    color: Color.skyWhite,
  },
  iconellipsisVComponentaddLayout: {
    height: 24,
    width: 24,
  },
  rectanglePosition: {
    bottom: 0,
    position: "absolute",
  },
  frameLayout: {
    height: 3,
    width: 38,
  },
  remixSpaceBlock: {
    marginTop: 24,
    alignSelf: "stretch",
  },
  autoLayoutHorizontal2: {
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  text: {
    marginLeft: 12,
    fontFamily: FontFamily.bodyMediumSemibold,
    fontWeight: "600",
    color: Color.skyWhite,
    fontSize: FontSize.bodyXLargeBold_size,
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
    backgroundColor: Color.colorDarkslategray_200,
    bottom: 0,
    position: "absolute",
    borderRadius: Border.br_81xl,
  },
  frame: {
    overflow: "hidden",
  },
  remix: {
    textAlign: "center",
    color: Color.skyWhite,
    fontFamily: FontFamily.bodyXSmallBold,
    fontWeight: "700",
    lineHeight: 38,
    fontSize: FontSize.h4Bold_size,
  },
  darktrueComponentdividerIcon1: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    width: "100%",
  },
  useAsInput: {
    marginLeft: 20,
    fontFamily: FontFamily.bodyMediumSemibold,
    fontWeight: "600",
    lineHeight: 32,
    fontSize: FontSize.h5Semibold_size,
    textAlign: "left",
    flex: 1,
  },
  iconlyregularoutlinearrow: {
    marginLeft: 20,
  },
  iconeditImageOutlineCompo: {
    overflow: "hidden",
  },
  autoLayoutHorizontal13: {
    alignItems: "center",
    flexDirection: "row",
  },
  autoLayoutVertical9: {
    borderTopLeftRadius: Border.br_9xl,
    borderTopRightRadius: Border.br_9xl,
    backgroundColor: Color.darkDark3,
    borderStyle: "solid",
    borderColor: Color.colorDarkslategray_200,
    borderWidth: 1,
    paddingTop: Padding.p_5xs,
    paddingBottom: Padding.p_17xl,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: Padding.p_5xl,
    left: 0,
    right: 0,
  
    overflow: "hidden",
  },
  DarkArtworkPostDetailsRemix: {
    backgroundColor: "transparent",
    width: "100%",
    flex: 1,
    top:"20%"
  },
});

export default DarkArtworkPostDetailsRemix;
