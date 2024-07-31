import React, { useState, useEffect } from "react";
import {
  ScrollView,
  Pressable,
  Image,
  StyleSheet,
  Text,
  View,
  Switch,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Padding, Border, Color } from "../GlobalStyles";
import DarkDownloadArtwork from "./DarkDownloadArtwork";
import ShareToFeedSuccessful from "./ShareToFeedSuccessful";
import { useTheme } from "../context/ThemeContext";
import { useTranslation } from 'react-i18next';

//#region B4Translation
// const DarkFinalizeArtwork = ({route}) => {
//   const [modalVisible, setModalVisible] = useState(false);
//   const [styleDefaultEnabledTrueTSwitchValueState, setStyleDefaultEnabledTrueTSwitchValueState] = useState(true);
//   const [styleDefaultEnabledTrueT1SwitchValueState, setStyleDefaultEnabledTrueT1SwitchValueState] = useState(true);
//   const [styleDefaultEnabledTrueT2SwitchValueState, setStyleDefaultEnabledTrueT2SwitchValueState] = useState(true);
//   const [styleDefaultEnabledTrueT3SwitchValueState, setStyleDefaultEnabledTrueT3SwitchValueState] = useState(true);
//   const {imageUrl} =route.params
//   const navigation = useNavigation();
//   const [seedError, setSeedError] = useState(false);
//   const [cfgValue, setCfgValue] = useState("");
//   const [cfgError, setCfgError] = useState(false);
//   const [seedValue, setSeedValue] = useState("");
//   const [isValid, setIsValid] = useState(false);
//   const [isModalVisible, setModalVisible1] = useState(false);

//   const handleCloseModal = () => {1
//     setModalVisible1(false);
//     //navigation.navigate("HomeScreen");
//   };
//   const toggleModal = async () => {
//     console.log("toggling modal")
//     setModalVisible1(true); 
//   };

//   const validateSeed = () => {
//     const seedNumber = parseInt(seedValue);
//     if (seedNumber <= 0 || isNaN(seedNumber)) {
//       setSeedError(true);
//     } else {
//       setSeedError(false);
//     }
//   };

//   const validateCFG = () => {
//     const cfgNumber = parseInt(cfgValue);
//     if (cfgNumber < 1 || cfgNumber > 15 || isNaN(cfgNumber)) {
//       setCfgError(true);
//     } else {
//       setCfgError(false);
//     }
//   };

//   useEffect(() => {
//     validateSeed();
//     validateCFG();
//   }, [seedValue, cfgValue]);

//   useEffect(() => {
//     if (!seedError && !cfgError && seedValue !== "" && cfgValue !== "") {
//       setIsValid(true);
//     } else {
//       setIsValid(false);
//     }
//   }, [seedError, cfgError, seedValue, cfgValue]);

//   return (
//     <View style={[styles.darkFinalizeArtwork, styles.artworkLayout]}>
//       <View style={[styles.navbardefaultDarktrueCom, styles.darktrueFlexBox, { justifyContent: 'space-between' }]}>
//         <TouchableOpacity
//           style={styles.gobackLayout}
//           onPress={() => navigation.goBack()}
//           hitSlop={{ top: 20, left: 20, bottom: 20, right: 20 }}
//         >
//           <Image
//             style={styles.icon}
//             resizeMode="cover"
//             source={require("../assets/goback1.png")}
//           />
//         </TouchableOpacity>
//         <Text style={styles.titleSection}>Finalize</Text>
//         <View style={{ width: 28 }} />
//       </View>
//       <ScrollView contentContainerStyle={styles.scrollViewContent}>
//         <View style={[styles.darkFinalizeArtwork, styles.artworkLayout]}>
//           <View style={styles.elementsfinalizeArtwork1}>
           
//             {imageUrl && (
//             <Image
//               source={{ uri: imageUrl }}
//               style={[styles.artworkRatio11ArtworkS, styles.artworkLayout]}            />
//           )}
//             <View style={styles.elementsfinalizeArtwork1}>
//               <View style={[styles.elementssection4Darktrue, styles.darktrueFlexBox]}>
//                 <View style={[styles.autoLayoutHorizontal2, styles.darktrueFlexBox]}>
//                   <Text style={styles.title}>Add Title (Optional)</Text>
//                 </View>
//               </View>
//               <TextInput
//                 style={[styles.inputFormtextAreaStatefi, styles.inputSpaceBlock]}
//                 autoCapitalize="none"
//                 multiline={true}
//                 placeholderTextColor="#fff"
//                 color="white"
//               />
//             </View>
//             <View style={styles.elementsfinalizeArtwork1}>
//               <View style={[styles.elementssection4Darktrue, styles.darktrueFlexBox]}>
//                 <View style={[styles.autoLayoutHorizontal2, styles.darktrueFlexBox]}>
//                   <Text style={styles.title}>Show Prompt</Text>
//                 </View>
//                 <Switch
//                   style={[styles.styledefaultEnabledtrueT, styles.styledefaultLayout]}
//                   value={styleDefaultEnabledTrueTSwitchValueState}
//                   onValueChange={setStyleDefaultEnabledTrueTSwitchValueState}
//                   thumbColor="#fff"
//                   trackColor={{ false: "#939393", true: "#6949ff" }}
//                 />
//               </View>
//               <TextInput
//                 style={[styles.inputFormtextAreaStatefi, styles.inputSpaceBlock]}
//                 autoCapitalize="none"
//                 multiline={true}
//                 placeholderTextColor="#fff"
//                 color="white"
//               />
//             </View>
//             <View style={styles.elementsfinalizeArtwork1}>
//               <View style={[styles.elementssection4Darktrue, styles.darktrueFlexBox]}>
//                 <View style={[styles.autoLayoutHorizontal2, styles.darktrueFlexBox]}>
//                   <Text style={styles.title}>Show Negative Prompt</Text>
//                 </View>
//                 <Switch
//                   style={[styles.styledefaultEnabledtrueT, styles.styledefaultLayout]}
//                   value={styleDefaultEnabledTrueT1SwitchValueState}
//                   onValueChange={setStyleDefaultEnabledTrueT1SwitchValueState}
//                   thumbColor="#fff"
//                   trackColor={{ false: "#939393", true: "#6949ff" }}
//                 />
//               </View>
//               <TextInput
//                 style={[styles.inputFormtextAreaStatefi, styles.inputSpaceBlock]}
//                 autoCapitalize="none"
//                 multiline={true}
//                 placeholderTextColor="#fff"
//                 color="white"
//               />
//             </View>
//             <View style={styles.elementsfinalizeArtwork1}>
//               {cfgError && <Text style={{ color: 'red' }}>Enter CFG from 1-15 range</Text>}
//               <View style={[styles.elementssection4Darktrue, styles.darktrueFlexBox]}>
//                 <View style={[styles.autoLayoutHorizontal2, styles.darktrueFlexBox]}>
//                   <Text style={styles.title}>Show CFG Scale</Text>
//                 </View>
//                 <Switch
//                   style={[styles.styledefaultEnabledtrueT, styles.styledefaultLayout]}
//                   value={styleDefaultEnabledTrueT2SwitchValueState}
//                   onValueChange={setStyleDefaultEnabledTrueT2SwitchValueState}
//                   thumbColor="#fff"
//                   trackColor={{ false: "#939393", true: "#6949ff" }}
//                 />
//               </View>
//               <TextInput
//                 style={[styles.inputFormtextAreaStatefi, styles.inputSpaceBlock]}
//                 autoCapitalize="none"
//                 multiline={true}
//                 placeholderTextColor="#fff"
//                 keyboardType="numeric"
//                 color="white"
//                 onChangeText={text => setCfgValue(text)}
//               />
//             </View>
//             <View style={styles.elementsfinalizeArtwork1}>
//               {seedError && <Text style={{ color: 'red' }}>Seed value must be greater than 0</Text>}
//               <View style={[styles.elementssection4Darktrue, styles.darktrueFlexBox]}>
//                 <View style={[styles.autoLayoutHorizontal2, styles.darktrueFlexBox]}>
//                   <Text style={styles.title}>Show Seed</Text>
//                 </View>
//                 <Switch
//                   style={[styles.styledefaultEnabledtrueT, styles.styledefaultLayout]}
//                   value={styleDefaultEnabledTrueT3SwitchValueState}
//                   onValueChange={setStyleDefaultEnabledTrueT3SwitchValueState}
//                   thumbColor="#fff"
//                   trackColor={{ false: "#939393", true: "#6949ff" }}
//                 />
//               </View>
//               <TextInput
//                 style={[styles.inputFormtextAreaStatefi, styles.inputSpaceBlock]}
//                 autoCapitalize="none"
//                 multiline={true}
//                 placeholderTextColor="#fff"
//                 color="white"
//                 keyboardType="numeric"
//                 onChangeText={text => setSeedValue(text)}
//               />
//             </View>
//           </View>
//         </View>
//       </ScrollView>
//       <View style={[styles.button2ButtonsDarktrueC, styles.autoLayoutVerticalPosition]}>
//         <View style={styles.autoFlexBox}>
//           <TouchableOpacity
//             style={[styles.buttonpillTypepillIconf, styles.buttonpillFlexBox]}
//             activeOpacity={0.7}
//             onPress={() => setModalVisible(true)}
//             disabled={!isValid}
//           >
//             <Text style={styles.button}>Download Art</Text>
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={[styles.buttonpillTypepillIconf1, styles.buttonpillFlexBox]}
//             activeOpacity={0.7}
//             onPress={toggleModal}
//             disabled={!isValid}
//           >
//             <Text style={styles.button}>Share to Feed</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//       <DarkDownloadArtwork isVisible={modalVisible} onClose={() => setModalVisible(false)}/>
//       <ShareToFeedSuccessful isVisible={isModalVisible}  onClose={handleCloseModal} />
//     </View>
//   );
// };
//#endregion

const DarkFinalizeArtwork = ({ route }) => {
  const { t } = useTranslation();
  const { theme, toggleTheme, isDarkMode } = useTheme();
  const [modalVisible, setModalVisible] = useState(false);
  const [styleDefaultEnabledTrueTSwitchValueState, setStyleDefaultEnabledTrueTSwitchValueState] = useState(true);
  const [styleDefaultEnabledTrueT1SwitchValueState, setStyleDefaultEnabledTrueT1SwitchValueState] = useState(true);
  const [styleDefaultEnabledTrueT2SwitchValueState, setStyleDefaultEnabledTrueT2SwitchValueState] = useState(true);
  const [styleDefaultEnabledTrueT3SwitchValueState, setStyleDefaultEnabledTrueT3SwitchValueState] = useState(true);
  const [seedError, setSeedError] = useState(false);
  const [cfgValue, setCfgValue] = useState("");
  const [cfgError, setCfgError] = useState(false);
  const [seedValue, setSeedValue] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [isModalVisible, setModalVisible1] = useState(false);
  const { imageUrl } = route.params;
  const navigation = useNavigation();

  const handleCloseModal = () => {
    setModalVisible1(false);
  };

  const toggleModal = async () => {
    setModalVisible1(true);
  };

  const validateSeed = () => {
    const seedNumber = parseInt(seedValue);
    if (seedNumber <= 0 || isNaN(seedNumber)) {
      setSeedError(true);
    } else {
      setSeedError(false);
    }
  };

  const validateCFG = () => {
    const cfgNumber = parseInt(cfgValue);
    if (cfgNumber < 1 || cfgNumber > 15 || isNaN(cfgNumber)) {
      setCfgError(true);
    } else {
      setCfgError(false);
    }
  };

  useEffect(() => {
    validateSeed();
    validateCFG();
  }, [seedValue, cfgValue]);

  useEffect(() => {
    if (!seedError && !cfgError && seedValue !== "" && cfgValue !== "") {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [seedError, cfgError, seedValue, cfgValue]);

  return (
    <View style={[styles.darkFinalizeArtwork, styles.artworkLayout, { backgroundColor: theme.background }]}>
      <View style={[styles.navbardefaultDarktrueCom, styles.darktrueFlexBox, { justifyContent: 'space-between' }]}>
        <TouchableOpacity
          style={styles.gobackLayout}
          onPress={() => navigation.goBack()}
          hitSlop={{ top: 20, left: 20, bottom: 20, right: 20 }}
        >
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={isDarkMode ? require("../assets/iconlyregularoutlinearrow--left1.png") : require("../assets/blackarrow.png")}
          />
        </TouchableOpacity>
        <Text style={[styles.titleSection, { color: theme.text }]}>{t("Finalize")}</Text>
        <View style={{ width: 28 }} />
      </View>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={[styles.darkFinalizeArtwork, styles.artworkLayout]}>
          <View style={styles.elementsfinalizeArtwork1}>
            {imageUrl && (
              <Image
                source={{ uri: imageUrl }}
                style={[styles.artworkRatio11ArtworkS, styles.artworkLayout]}
              />
            )}
            <View style={styles.elementsfinalizeArtwork1}>
              <View style={[styles.elementssection4Darktrue, styles.darktrueFlexBox]}>
                <View style={[styles.autoLayoutHorizontal2, styles.darktrueFlexBox]}>
                  <Text style={[styles.title, { color: theme.text }]}>{t("Add Title (Optional)")}</Text>
                </View>
              </View>
              <TextInput
                style={[styles.inputFormtextAreaStatefi, styles.inputSpaceBlock, 
                { color: theme.text },{ backgroundColor: theme.promptbackground }]}
                autoCapitalize="none"
                multiline={true}
                placeholderTextColor="#fff"
              />
            </View>
            <View style={styles.elementsfinalizeArtwork1}>
              <View style={[styles.elementssection4Darktrue, styles.darktrueFlexBox]}>
                <View style={[styles.autoLayoutHorizontal2, styles.darktrueFlexBox]}>
                  <Text style={[styles.title,{ color: theme.text }]}>{t("Show Prompt")}</Text>
                </View>
                <Switch
                  style={[styles.styledefaultEnabledtrueT, styles.styledefaultLayout]}
                  value={styleDefaultEnabledTrueTSwitchValueState}
                  onValueChange={setStyleDefaultEnabledTrueTSwitchValueState}
                  thumbColor="#fff"
                  trackColor={{ false: "#939393", true: "#6949ff" }}
                />
              </View>
              <TextInput
                style={[styles.inputFormtextAreaStatefi, styles.inputSpaceBlock,
                 { color: theme.text },{ backgroundColor: theme.promptbackground }]}
                autoCapitalize="none"
                multiline={true}
                placeholderTextColor="#fff"
              />
            </View>
            <View style={styles.elementsfinalizeArtwork1}>
              <View style={[styles.elementssection4Darktrue, styles.darktrueFlexBox]}>
                <View style={[styles.autoLayoutHorizontal2, styles.darktrueFlexBox]}>
                  <Text style={[styles.title,{ color: theme.text }]}>{t("Show Negative Prompt")}</Text>
                </View>
                <Switch
                  style={[styles.styledefaultEnabledtrueT, styles.styledefaultLayout]}
                  value={styleDefaultEnabledTrueT1SwitchValueState}
                  onValueChange={setStyleDefaultEnabledTrueT1SwitchValueState}
                  thumbColor="#fff"
                  trackColor={{ false: "#939393", true: "#6949ff" }}
                />
              </View>
              <TextInput
                style={[styles.inputFormtextAreaStatefi, styles.inputSpaceBlock, 
                { color: theme.text },{ backgroundColor: theme.promptbackground }]}
                autoCapitalize="none"
                multiline={true}
                placeholderTextColor="#fff"
              />
            </View>
            <View style={styles.elementsfinalizeArtwork1}>
              {cfgError && <Text style={{ color: 'red' }}>{t("Enter CFG from 1-15 range")}</Text>}
              <View style={[styles.elementssection4Darktrue, styles.darktrueFlexBox]}>
                <View style={[styles.autoLayoutHorizontal2, styles.darktrueFlexBox]}>
                  <Text style={[styles.title,{ color: theme.text }]}>{t("Show CFG Scale")}</Text>
                </View>
                <Switch
                  style={[styles.styledefaultEnabledtrueT, styles.styledefaultLayout]}
                  value={styleDefaultEnabledTrueT2SwitchValueState}
                  onValueChange={setStyleDefaultEnabledTrueT2SwitchValueState}
                  thumbColor="#fff"
                  trackColor={{ false: "#939393", true: "#6949ff" }}
                />
              </View>
              <TextInput
                style={[styles.inputFormtextAreaStatefi, styles.inputSpaceBlock, 
                { color: theme.text },{ backgroundColor: theme.promptbackground }]}
                autoCapitalize="none"
                multiline={true}
                placeholderTextColor="#fff"
                keyboardType="numeric"
                onChangeText={text => setCfgValue(text)}
              />
            </View>
            <View style={styles.elementsfinalizeArtwork1}>
              {seedError && <Text style={{ color: 'red' }}>{t("Seed value must be greater than 0")}</Text>}
              <View style={[styles.elementssection4Darktrue, styles.darktrueFlexBox]}>
                <View style={[styles.autoLayoutHorizontal2, styles.darktrueFlexBox]}>
                  <Text style={[styles.title,{ color: theme.text }]}>{t("Show Seed")}</Text>
                </View>
                <Switch
                  style={[styles.styledefaultEnabledtrueT, styles.styledefaultLayout]}
                  value={styleDefaultEnabledTrueT3SwitchValueState}
                  onValueChange={setStyleDefaultEnabledTrueT3SwitchValueState}
                  thumbColor="#fff"
                  trackColor={{ false: "#939393", true: "#6949ff" }}
                />
              </View>
              <TextInput
                style={[styles.inputFormtextAreaStatefi, styles.inputSpaceBlock, 
                 { color: theme.text },{ backgroundColor: theme.promptbackground }]}
                autoCapitalize="none"
                multiline={true}
                placeholderTextColor="#fff"
                keyboardType="numeric"
                onChangeText={text => setSeedValue(text)}
              />
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={[styles.button2ButtonsDarktrueC, styles.autoLayoutVerticalPosition, { backgroundColor: theme.background }]}>
        <View style={styles.autoFlexBox}>
          <TouchableOpacity
            style={[{ backgroundColor: theme.promptbackground }, styles.buttonpillFlexBox]}
            activeOpacity={0.7}
            onPress={() => setModalVisible(true)}
            disabled={!isValid}
          >
            <Text style={[styles.button,{ color: theme.canceltext }]}>{t("Download Art")}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.buttonpillTypepillIconf1, styles.buttonpillFlexBox]}
            activeOpacity={0.7}
            onPress={toggleModal}
            disabled={!isValid}
          >
            <Text style={styles.button}>{t("Share to Feed")}</Text>
          </TouchableOpacity>
        </View>
      </View>
      <DarkDownloadArtwork isVisible={modalVisible} onClose={() => setModalVisible(false)} />
      <ShareToFeedSuccessful isVisible={isModalVisible} onClose={handleCloseModal} />
    </View>
  );
};

const styles = StyleSheet.create({
  artworkLayout: {
    overflow: "hidden",
    width: "100%",
  },
  autoLayoutVerticalPosition: {
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
    marginLeft: "1%",
  },
  informationTypo: {
    marginLeft: 8,
    lineHeight: 26,
    letterSpacing: 0,
    fontSize: FontSize.bodyLargeBold_size,
    textAlign: "left",
  },
  styledefaultLayout: {
    height: 24,
    marginLeft: 8,
  },
  buttonpillFlexBox: {
    padding: Padding.p_base,
    borderRadius: Border.br_81xl,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
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
  },
  titleSection: {
    fontSize: FontSize.h4Bold_size,
    textAlign: "center",
    color: Color.skyWhite,
    fontFamily: FontFamily.bodyXSmallBold,
    fontWeight: "700",
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
  artworkRatio11ArtworkS: {
    borderRadius: Border.br_xl,
    maxWidth: "100%",
    height: 382,
    alignSelf: "stretch",
  },
  title: {
    fontSize: FontSize.h5Semibold_size,
    lineHeight: 32,
    textAlign: "left",
    color: Color.skyWhite,
    fontFamily: FontFamily.bodyXSmallBold,
    fontWeight: "700",
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
  inputFormtextAreaStatefi: {
    fontSize: FontSize.bodyXLargeBold_size,
    marginTop: 12,
    fontFamily: FontFamily.bodyMediumSemibold,
    fontWeight: "600",
    borderRadius: 15,
    alignSelf: "stretch",
  },
  inputSpaceBlock: {
    marginTop: 12,
  },
  elementssection4Darktrue: {
    alignSelf: "stretch",
  },
  elementsfinalizeArtwork1: {
    marginTop: 24,
    alignSelf: "stretch",
    marginLeft: "5%",
    marginRight: "5%",
  },
  styledefaultEnabledtrueT: {
    width: 44,
    borderRadius: Border.br_981xl,
    height: 24,
    overflow: "hidden",
  },
  autoLayoutVertical: {
    top: 44,
    flex: 1,
  },
  button: {
    lineHeight: 26,
    letterSpacing: 0,
    fontSize: FontSize.bodyLargeBold_size,
    textAlign: "center",
    color: Color.skyWhite,
    fontFamily: FontFamily.bodyXSmallBold,
    fontWeight: "700",
    alignSelf: "stretch",
  },
  buttonpillTypepillIconf1: {
    backgroundColor: Color.primary900,
    marginLeft: 16,
  },
  button2ButtonsDarktrueC: {
    bottom: 0,
    borderStyle: "solid",
    borderColor: Color.colorDarkslategray_200,
    paddingHorizontal: Padding.p_5xl,
    paddingTop: Padding.p_5xl,
    paddingBottom: Padding.p_17xl,
  },
  text: {
    marginTop: -13,
    left: 23,
    fontFamily: FontFamily.bodyMediumSemibold,
    fontWeight: "600",
    top: "50%",
    lineHeight: 26,
    letterSpacing: 0,
    fontSize: FontSize.bodyLargeBold_size,
    textAlign: "left",
    color: Color.skyWhite,
  },
  darkFinalizeArtwork: {
    height: 1200,
    flex: 1,
  },
});

export default DarkFinalizeArtwork;

