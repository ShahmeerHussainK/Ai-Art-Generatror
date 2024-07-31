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
import { Padding, FontFamily, FontSize, Border, Color } from "../GlobalStyles";
import { generateImage, uploadImageGeneration } from '../helper';
import { launchImageLibrary } from 'react-native-image-picker';
import { BallIndicator } from 'react-native-indicators';
import { BlurView } from '@react-native-community/blur';
import { useTranslation } from 'react-i18next';

const DarkRecolorImagesUploadIm = () => {
  const { t } = useTranslation();
  const navigation = useNavigation();
  const [selectedImage, setSelectedImage] = useState(null);
  const [showImage, setShowImage] = useState(true)
  const [loading, setLoading] = useState(false);
  const [loadingText, setLoadingText] = useState("");
  const prompt = "change color of person and objects in given image";
  const type = "remix";
  const strength = '40';
  const control = "lineart";
  const steps = "50";
  const cfg = "15";
  const style_id = 29;
  const pickImage = () => {
    launchImageLibrary({ mediaType: 'photo' }, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorMessage) {
        console.log('ImagePicker Error: ', response.errorMessage);
      } else {
        setSelectedImage(response.assets[0]);
        setShowImage(false)
      }
    });
  };
  const uploadImage = async () => {
    if (!selectedImage) {
      Alert.alert(t("Error"), t("Please select an image first"));
      return;
    }

    try {

      setLoading(true);
      setLoadingText(t("Please wait"), t("Generating..."));


      const asImageSrc = await uploadImageGeneration(selectedImage, prompt, style_id, type, strength, control, steps, cfg);
      navigation.navigate('GeneratingArtwork', { asImageSrc, prompt, style_id, selectedImage, type, strength, control, cfg });
      setLoading(false);

    } catch (error) {
      console.error(error);
      Alert.alert(t("Error"), t("Something went wrong"));
    }
  };


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
            {t('Recolor Images')}
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
              {t('Upload an Image')}
            </Text>
            <Text style={styles.uploadYourPhoto1}>
              t("Upload your image"), t("and we’ll recolor it for you.")
            </Text>
          </View>
          {showImage && (

            <View>
              <TouchableOpacity
                style={[styles.autoLayoutVertical2, styles.autoSpaceBlock]}
                activeOpacity={0.0}
                onPress={pickImage}
              >
                {showImage && (
                  <Image
                    style={styles.iconlycurvedoutlineupload}
                    resizeMode="cover"
                    source={require("../assets/iconlycurvedoutlineupload1.png")}
                  />
                )}
                <Text style={[styles.upload, styles.textTypo]}>{t('Upload')}</Text>
              </TouchableOpacity>
            </View>
          )}
          {selectedImage && (
            <View style={[styles.frame, styles.frameSpaceBlock]}>
              <Image
                style={[styles.artworkRatio11ArtworkS, styles.artworkLayout]}
                resizeMode="cover"
                source={{ uri: selectedImage.uri }}
              />
            </View>
          )}
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
          onPress={uploadImage}
        >
          <Text style={[styles.button, styles.textLayout]}>{t('Generate')}</Text>
        </TouchableOpacity>
      </View>
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
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
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
    zIndex: 1000,

  },
  absolute: {
    ...StyleSheet.absoluteFillObject,
  },
  frameSpaceBlock: {
    marginTop: "10%",
    alignSelf: "center",
    width: "100%",
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
  artworkLayout: {
    borderRadius: Border.br_xl,
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
    marginTop: 20,
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
    bottom: "30%",
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
    marginBottom: "7%"
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
    width: 382,
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
    marginTop: 14,
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

export default DarkRecolorImagesUploadIm;