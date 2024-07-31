import * as React from "react";
import { useState } from "react";
import { Image, StyleSheet, Pressable, View, Text, TouchableOpacity, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Padding, Border, FontSize, Color } from "../GlobalStyles";
import { BallIndicator } from 'react-native-indicators';
import DownloadSuccessful from "./DownloadSuccessful";
import { BlurView } from '@react-native-community/blur';
import RNFS from 'react-native-fs';
import { generateImage, uploadImageGeneration } from '../helper';
import { useTheme } from "../context/ThemeContext";
import { useTranslation } from 'react-i18next';

//#region  B4Translation
// const DarkAIAvatarGeneratorGene = ({ route }) => {
//   const navigation = useNavigation();
//   let { image1 } = route.params;
//   let { image2 } = route.params;
//   let { image3 } = route.params;
//   let { image4 } = route.params;
//   const {prompt} = route.params; 

//   const [loading, setLoading] = useState(false);
//   const [loadingText, setLoadingText] = useState("");
//   const [isModalVisible, setModalVisible] = useState(false);
//   const style_id = "28";


//   const handleCloseModal = async() => {
//     setModalVisible(false);
//     await handleDownload();
   
//   };
  
//   const toggleModal = async () => {
//     setModalVisible(true);
              
//   };

//   const handleGenerateMore = async()=>{
//     setLoading(true)

//       setLoadingText("Please wait it may take a while ");
//       console.log("here")
//        image1 = await generateImage(prompt, style_id)
//        image2 = await generateImage(prompt, style_id)
//        image3 = await generateImage(prompt, style_id)
//        image4 = await generateImage(prompt, style_id)

     
//       setLoading(false)
//   }



//   const handleRegenerate = () => {
//     setLoading(true);
//     setLoadingText("Please wait, regenerating...");
//     setTimeout(() => {
//       setLoading(false);
//     }, 4000);
//   };

//   const handleDownload = async () => {
//     let uniqueFileName = Date.now() + '-' + Math.random().toString(36).substr(2, 9) + '.png';
//     let path = `${RNFS.DownloadDirectoryPath}/${uniqueFileName}`;
//     let base64Image = image1.split(';base64,').pop();
//     try {
//       await RNFS.writeFile(path, base64Image, 'base64');
//       console.log(`Image saved to ${path}`);
//     } catch (err) {
//       console.error(err);
//     }

//     uniqueFileName = Date.now() + '-' + Math.random().toString(36).substr(2, 9) + '.png';
//     path = `${RNFS.DownloadDirectoryPath}/${uniqueFileName}`;
//     base64Image = image2.split(';base64,').pop();
//     try {
//       await RNFS.writeFile(path, base64Image, 'base64');
//       console.log(`Image saved to ${path}`);
//     } catch (err) {
//       console.error(err);
//     }

//     uniqueFileName = Date.now() + '-' + Math.random().toString(36).substr(2, 9) + '.png';
//     path = `${RNFS.DownloadDirectoryPath}/${uniqueFileName}`;
//     base64Image = image3.split(';base64,').pop();
//     try {
//       await RNFS.writeFile(path, base64Image, 'base64');
//       console.log(`Image saved to ${path}`);
//     } catch (err) {
//       console.error(err);
//     }
//   }

//   return (
//     <View style={styles.darkBatchArtGeneratorGene}>
//       <View style={styles.navbardefaultDarktrueCom}>
//         <View style={styles.autoLayoutHorizontal}>
//           <Image
//             style={[styles.typelogoDefaultComponentl, styles.gobackLayout]}
//             resizeMode="contain"
//             source={require("../assets/typelogo-default-componentlogo4.png")}
//           />
//           <Pressable
//             style={[styles.goback, styles.gobackLayout]}
//             onPress={() => navigation.goBack()}
//           >
//             <Image
//               style={styles.icon}
//               resizeMode="contain"
//               source={require("../assets/goback.png")}
//             />
//           </Pressable>
//         </View>
//         <Text style={[styles.titleSection, styles.buttonTypo]}>
//           Batch Art Generator
//         </Text>
//         <Image
//           style={[styles.autoLayoutHorizontal1, styles.gobackLayout]}
//           resizeMode="contain"
//           source={require("../assets/auto-layout-horizontal.png")}
//         />
//       </View>
//       <ScrollView>
//         <View style={styles.darkBatchArtGeneratorGene}>
//           <View style={styles.autoLayoutVertical}>
//             <View style={styles.autoLayoutHorizontal7FlexBox}>
//               <View style={[styles.autoLayoutHorizontal2, styles.autoFlexBox]}>
//                 <TouchableOpacity style={styles.frameIconLayout}
//                   activeOpacity={0.0}
//                   onPress={() => navigation.navigate("DarkBatchArtGeneratorFina", { image: image1 })}
//                 >
//                   <Image
//                     resizeMode="contain"
//                     source={{ uri: image1 }}
//                     style={styles.frameIconLayout}
//                   />
//                 </TouchableOpacity>
//                 <TouchableOpacity style={[styles.frameIcon1, styles.frameIconLayout]}
//                   activeOpacity={0.0}
//                   onPress={() => navigation.navigate("DarkBatchArtGeneratorFina", { image: image2 })}
//                 >
//                   <Image
//                     resizeMode="contain"
//                     source={{ uri: image2 }}
//                     style={styles.frameIconLayout}
//                   />
//                 </TouchableOpacity>
//               </View>
//               <View style={[styles.autoLayoutHorizontal3, styles.autoFlexBox]}>
//                 <TouchableOpacity style={styles.frameIconLayout}
//                   activeOpacity={0.0}
//                   onPress={() => navigation.navigate("DarkBatchArtGeneratorFina", { image: image3 })}
//                 >
//                   <Image
//                     resizeMode="contain"
//                     source={{ uri: image3 }}
//                     style={styles.frameIconLayout}
//                   />
//                 </TouchableOpacity>
//                 <TouchableOpacity style={[styles.frameIcon1, styles.frameIconLayout]}
//                   activeOpacity={0.0}
//                   onPress={() => navigation.navigate("DarkBatchArtGeneratorFina", { image: image4 })}
//                 >
//                   <Image
//                     resizeMode="contain"
//                     source={{ uri: image4 }}
//                     style={styles.frameIconLayout}
//                   />
//                 </TouchableOpacity>
//               </View>
//             </View>
//           </View>
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
//       <View style={styles.button2ButtonsDarktrueC}>
//         <View style={styles.autoLayoutHorizontal6}>
//           <TouchableOpacity
//             style={[styles.buttonpillTypepillIconf, styles.buttonpillFlexBox, loading && styles.disabledButton]}
//             activeOpacity={0.0}
//             onPress={handleGenerateMore}
//             disabled={loading}
//           >
//             <Text style={[styles.button, styles.textLayout]}>Generate More</Text>
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={[styles.buttonpillTypepillIconf1, styles.buttonpillFlexBox, loading && styles.disabledButton]}
//             activeOpacity={0.0}
//             onPress={toggleModal}
//           >
//             <Text style={[styles.button, styles.textLayout]}>Download All</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//       <DownloadSuccessful isVisible={isModalVisible}  onClose={handleCloseModal} />

//       {loading && (
//         <View style={styles.loadingOverlay}>
//           <BlurView
//             style={styles.absolute}
//             blurType="dark"
//             blurAmount={5}
//           />
//           <BallIndicator
//             style={styles.indicator}
//             animating={loading}
//             size={50}
//             color="#6949FF"
//           />
//           <Text style={styles.loadingText}>{loadingText}</Text>
//         </View>
//       )}

//     </View>
//   );
// };
//#endregion
const DarkAIAvatarGeneratorGene = ({ route }) => {
  const { t } = useTranslation();
  const navigation = useNavigation();
  let { image1, image2, image3, image4, prompt } = route.params;

  const [loading, setLoading] = useState(false);
  const [loadingText, setLoadingText] = useState("");
  const [isModalVisible, setModalVisible] = useState(false);
  const style_id = "28";
  const { theme, toggleTheme, isDarkMode } = useTheme();
  const handleCloseModal = async () => {
    setModalVisible(false);
    await handleDownload();
  };

  const toggleModal = async () => {
    setModalVisible(true);
  };

  const handleGenerateMore = async () => {
    setLoading(true);
    setLoadingText(t("Please wait it may take a while"));
    console.log("here");
    image1 = await generateImage(prompt, style_id);
    image2 = await generateImage(prompt, style_id);
    image3 = await generateImage(prompt, style_id);
    image4 = await generateImage(prompt, style_id);
    setLoading(false);
  };

  const handleRegenerate = () => {
    setLoading(true);
    setLoadingText(t("Please wait, regenerating..."));
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  };

  const handleDownload = async () => {
    let uniqueFileName = Date.now() + '-' + Math.random().toString(36).substr(2, 9) + '.png';
    let path = `${RNFS.DownloadDirectoryPath}/${uniqueFileName}`;
    let base64Image = image1.split(';base64,').pop();
    try {
      await RNFS.writeFile(path, base64Image, 'base64');
      console.log(`Image saved to ${path}`);
    } catch (err) {
      console.error(err);
    }

    uniqueFileName = Date.now() + '-' + Math.random().toString(36).substr(2, 9) + '.png';
    path = `${RNFS.DownloadDirectoryPath}/${uniqueFileName}`;
    base64Image = image2.split(';base64,').pop();
    try {
      await RNFS.writeFile(path, base64Image, 'base64');
      console.log(`Image saved to ${path}`);
    } catch (err) {
      console.error(err);
    }

    uniqueFileName = Date.now() + '-' + Math.random().toString(36).substr(2, 9) + '.png';
    path = `${RNFS.DownloadDirectoryPath}/${uniqueFileName}`;
    base64Image = image3.split(';base64,').pop();
    try {
      await RNFS.writeFile(path, base64Image, 'base64');
      console.log(`Image saved to ${path}`);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <View style={[styles.darkBatchArtGeneratorGene, { backgroundColor: theme.background }]}>
      <View style={styles.navbardefaultDarktrueCom}>
        <View style={styles.autoLayoutHorizontal}>
          <Image
            style={[styles.typelogoDefaultComponentl, styles.gobackLayout]}
            resizeMode="contain"
            source={require("../assets/typelogo-default-componentlogo4.png")}
          />
          <Pressable
            style={[styles.goback, styles.gobackLayout]}
            onPress={() => navigation.goBack()}
          >
            <Image
              style={styles.icon}
              resizeMode="contain"
              source={isDarkMode ? require("../assets/iconlyregularoutlinearrow--left.png") : require("../assets/blackarrow.png")}
            />
          </Pressable>
        </View>
        <Text style={[styles.titleSection, styles.buttonTypo,{ color: theme.text }]}>
          {t('Batch Art Generator')}
        </Text>
        <Image
          style={[styles.autoLayoutHorizontal1, styles.gobackLayout]}
          resizeMode="contain"
          source={require("../assets/auto-layout-horizontal.png")}
        />
      </View>
      <ScrollView>
        <View style={styles.darkBatchArtGeneratorGene}>
          <View style={styles.autoLayoutVertical}>
            <View style={styles.autoLayoutHorizontal7FlexBox}>
              <View style={[styles.autoLayoutHorizontal2, styles.autoFlexBox]}>
                <TouchableOpacity
                  style={styles.frameIconLayout}
                  activeOpacity={0.0}
                  onPress={() => navigation.navigate("DarkBatchArtGeneratorFina", { image: image1 })}
                >
                  <Image
                    resizeMode="contain"
                    source={{ uri: image1 }}
                    style={styles.frameIconLayout}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.frameIcon1, styles.frameIconLayout]}
                  activeOpacity={0.0}
                  onPress={() => navigation.navigate("DarkBatchArtGeneratorFina", { image: image2 })}
                >
                  <Image
                    resizeMode="contain"
                    source={{ uri: image2 }}
                    style={styles.frameIconLayout}
                  />
                </TouchableOpacity>
              </View>
              <View style={[styles.autoLayoutHorizontal3, styles.autoFlexBox]}>
                <TouchableOpacity
                  style={styles.frameIconLayout}
                  activeOpacity={0.0}
                  onPress={() => navigation.navigate("DarkBatchArtGeneratorFina", { image: image3 })}
                >
                  <Image
                    resizeMode="contain"
                    source={{ uri: image3 }}
                    style={styles.frameIconLayout}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.frameIcon1, styles.frameIconLayout]}
                  activeOpacity={0.0}
                  onPress={() => navigation.navigate("DarkBatchArtGeneratorFina", { image: image4 })}
                >
                  <Image
                    resizeMode="contain"
                    source={{ uri: image4 }}
                    style={styles.frameIconLayout}
                  />
                </TouchableOpacity>
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
      <View style={[styles.button2ButtonsDarktrueC,{ backgroundColor: theme.background }]}>
        <View style={styles.autoLayoutHorizontal6}>
          <TouchableOpacity
            style={[{ backgroundColor: theme.promptbackground }, styles.buttonpillFlexBox, loading && styles.disabledButton]}
            activeOpacity={0.0}
            onPress={handleGenerateMore}
            disabled={loading}
          >
            <Text style={[styles.button, styles.textLayout, { color: theme.canceltext }]}>{t('Generate More')}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.buttonpillTypepillIconf1, styles.buttonpillFlexBox, loading && styles.disabledButton]}
            activeOpacity={0.0}
            onPress={toggleModal}
          >
            <Text style={[styles.button, styles.textLayout]}>{t('Download All')}</Text>
          </TouchableOpacity>
        </View>
      </View>
      <DownloadSuccessful isVisible={isModalVisible} onClose={handleCloseModal} />

      {loading && (
        <View style={styles.loadingOverlay}>
          <BlurView
            style={styles.absolute}
            blurType="dark"
            blurAmount={5}
          />
          <BallIndicator
            style={styles.indicator}
            animating={loading}
            size={50}
            color="#6949FF"
          />
          <Text style={styles.loadingText}>{loadingText}</Text>
        </View>
      )}
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
  gobackLayout: {
    height: 28,
    width: 28,
  },
  buttonTypo: {
    textAlign: "center",
    fontFamily: FontFamily.bodyXSmallBold,
    fontWeight: "700",
  },
  autoFlexBox: {
    alignSelf: "stretch",
    flexDirection: "row",
  },
  frameIconLayout: {
    height: 183,
    width: "100%",
    overflow: "hidden",
    flex: 1,
    borderRadius: 10,
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
  autoLayoutHorizontal7FlexBox: {
    marginTop: "30%",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
  },
  typelogoDefaultComponentl: {
    borderRadius: Border.br_341xl,
    display: "none",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  goback: {
    marginLeft: "75%",
  },
  autoLayoutHorizontal: {
    width: 28,
    alignItems: "center",
    flexDirection: "row",
  },
  titleSection: {
    fontSize: FontSize.h4Bold_size,
    lineHeight: 38,
    color: Color.skyWhite,
    textAlign: "center",
    fontFamily: FontFamily.bodyXSmallBold,
    fontWeight: "700",
    marginLeft: 16,
    flex: 1,
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
  frameIcon1: {
    marginLeft: 16,
  },
  autoLayoutHorizontal2: {
    flexDirection: "row",
  },
  autoLayoutHorizontal3: {
    marginTop: 16,
    flexDirection: "row",
  },
  autoLayoutVertical: {
    top: "1%",
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_5xl,
    left: 0,
    right: 0,
    position: "absolute",
  },
  button: {
    textAlign: "center",
    fontFamily: FontFamily.bodyXSmallBold,
    fontWeight: "700",
    letterSpacing: 0,
    fontSize: FontSize.bodyLargeBold_size,
    alignSelf: "stretch",
  },
  buttonpillTypepillIconf1: {
    backgroundColor: Color.primary900,
    marginLeft: 16,
  },
  autoLayoutHorizontal6: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  buttonpillTypepillIconf3: {
    backgroundColor: Color.alertsStatusButtonDisabled,
    marginLeft: 16,
  },
  autoLayoutHorizontal7: {
    display: "none",
    flexDirection: "row",
  },
  button2ButtonsDarktrueC: {
    bottom: 0,
    borderStyle: "solid",
    borderColor: Color.colorDarkslategray_200,
    paddingTop: Padding.p_5xl,
    paddingBottom: Padding.p_17xl,
    paddingHorizontal: Padding.p_5xl,
    left: 0,
    right: 0,
    position: "absolute",
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
  darkBatchArtGeneratorGene: {
    height: 700,
    overflow: "hidden",
    flex: 1,
    width: "100%",
  },
  disabledButton: {
    opacity: 0.5,
  },
});

export default DarkAIAvatarGeneratorGene;
