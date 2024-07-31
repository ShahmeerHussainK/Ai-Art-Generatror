import React, { useState, useEffect } from "react";
import {
  Pressable,
  Image,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { BallIndicator } from 'react-native-indicators';
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Border, Color, FontSize, Padding } from "../GlobalStyles";
import DownloadSuccessful from "./DownloadSuccessful";
import { BlurView } from '@react-native-community/blur';
import { useTranslation } from 'react-i18next';
import { generateImage, uploadImageGeneration } from '../helper';
import RNFS from 'react-native-fs';
import { useTheme } from "../context/ThemeContext";

const GeneratingArtwork = ({ route }) => {
  const { t } = useTranslation();
  const { theme, toggleTheme, isDarkMode } = useTheme();
  const { asImageSrc } = route.params
  const { prompt } = route.params
  const { style_id } = route.params
  const { selectedImage } = route.params
  const { type } = route.params;
  const { strength } = route.params;
  const { cfg } = route.params;
  const { control } = route.params;

  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [imgLoading, setImgLoading] = useState(true);
  const [loadingText, setLoadingText] = useState("");
  const [imageUrl, setImageUrl] = useState(asImageSrc);
  const [isModalVisible, setModalVisible] = useState(false);

  
  const handleCloseModal = async() => {
    setModalVisible(false);
    await handelDownload();
  };
  
  const toggleModal = async () => {
    setModalVisible(true);          
  };


  const handelDownload = async () => {
    const uniqueFileName = Date.now() + '-' + Math.random().toString(36).substr(2, 9) + '.png';
    const path = `${RNFS.DownloadDirectoryPath}/${uniqueFileName}`;
    const base64Image = asImageSrc.split(';base64,').pop();
    try {
      await RNFS.writeFile(path, base64Image, 'base64');
      console.log(`Image saved to ${path}`);
    } catch (err) {
      console.error(err);
    }

  };

  const handleRegenerate =  () => {
    setLoading(true);
    setLoadingText(t("Please wait, generating..."));

    if (selectedImage) {
      console.log(selectedImage)
      console.log("ooops")
      generateLogo()

    }
    else
    {
      regenerateLogo()
    } 
  };
  const generateLogo = async () => {
    try {



      setLoading(true)
      if (type == "")
      {
        const asImageSrc = await uploadImageGeneration(selectedImage, prompt, style_id);
        setImageUrl(asImageSrc)
        setLoading(false)

      }
      else if (type == "remix")
      {
        const asImageSrc = await uploadImageGeneration(selectedImage, prompt, "22", type, "100", "lineart", "50", "15");
        setImageUrl(asImageSrc)
        setLoading(false)
      }
      else if (type == "upscale")
      {
        const asImageSrc = await uploadImageGeneration(selectedImage, prompt, "22", type, "100", "lineart", "50", "15","https://api.vyro.ai/v1/imagine/api/upscale");
        setImageUrl(asImageSrc)
        setLoading(false)
      }

      else if (type == "background")
      {
        const asImageSrc = await uploadImageGeneration(selectedImage, prompt, "22", type, "100", "lineart", "50", "15","https://api.vyro.ai/v1/imagine/api/background/remover");
        setImageUrl(asImageSrc)
        setLoading(false) 
      }
      


    }
    catch (error) {
      console.error('Error generating image:', error);
    } finally {
    }
  };

  const regenerateLogo = async () => {
    setLoading(true)
    console.log("i ammmm inn thee helo")
    console.log(prompt)
    const ImageSrc = await generateImage(prompt,style_id)
    console.log(ImageSrc)
    setImageUrl(ImageSrc)
    setLoading(false)
  }
  
  useEffect(() => {
    setImageUrl(asImageSrc)
  }, []);

  return (

    <View style={[styles.GeneratingArtwork,{ backgroundColor: theme.background }]}>
      <BlurView
        style={styles.absolute}
        blurType="light"
        blurAmount={3}
        blurRadius={5}
      />
      <View style={[styles.elementsnavbarEditDarktru, styles.autoFlexBox1]}>
        <View style={[styles.autoLayoutHorizontal, styles.finalize1Layout]}>
          <Pressable
            style={styles.goback}
            onPress={() => navigation.goBack()}
          >
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={isDarkMode ? require("../assets/iconlyregularoutlinearrow--left.png") : require("../assets/blackarrow.png")}
            />
          </Pressable>
        </View>
        <Text style={[styles.title, styles.autoFlexBox, { color: theme.text }]}>{t('Artwork')}</Text>
        <TouchableOpacity
          activeOpacity={0.0}
          onPress={() => navigation.navigate("FinalizeArtwork", { imageUrl })}
        >
          <Text style={[styles.finalize1, styles.titleTypo]}>{t('Finalize')}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.GeneratingArtwork}>
        <View style={styles.autoLayoutVertical}>

          <View style={styles.autoLayoutVertical1}>
            {imageUrl &&
              <Image
                source={{ uri: imageUrl }}
                style={styles.frameIcon}
                onLoadStart={() => setImgLoading(true)}
                onLoadEnd={() => setImgLoading(false)}
              />
            }
            {imgLoading && (
              <View style={styles.loadingOverlay}>
                <BallIndicator
                  style={styles.indicator}
                  animating={imgLoading}
                  size={50}
                  color="#6949FF"
                />
              </View>
            )}
          </View>



        </View>
      </View>

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
        <View style={[styles.autoLayoutHorizontal6, styles.autoFlexBox]}>
          <TouchableOpacity
            style={[{ backgroundColor: theme.promptbackground }, styles.buttonpillFlexBox]}
            activeOpacity={0.0}
            onPress={handleRegenerate}
          >
            <Text style={[styles.button, styles.viewTypo, { color: theme.canceltext }]}>{t('Re-generate')}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.buttonpillTypepillIconf1, styles.buttonpillFlexBox]}
            activeOpacity={0.0}
            onPress={toggleModal}
          >
            <Text style={[styles.button, styles.viewTypo]}>{t('Download')}</Text>
          </TouchableOpacity>
        </View>
      </View>
      <DownloadSuccessful isVisible={isModalVisible}  onClose={handleCloseModal} />
    </View>
  );
};

const styles = StyleSheet.create({
  loadingOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 10,
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
  autoFlexBox1: {
    alignItems: "center",
    flexDirection: "row",
  },
  finalize1Layout: {
    width: 75,
    alignItems: "center",
  },
  autoFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  titleTypo: {
    display: "flex",
    fontFamily: FontFamily.bodyXSmallBold,
    fontWeight: "700",
  },
  viewTypo: {
    lineHeight: 26,
    fontSize: FontSize.bodyLargeBold_size,
    letterSpacing: 0,
    fontFamily: FontFamily.bodyXSmallBold,
    fontWeight: "700",
  },
  buttonpillFlexBox: {
    padding: Padding.p_base,
    borderRadius: Border.br_81xl,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  icon: {
    height: "100%",
    width: "100%",
    marginLeft: "75%"
  },
  goback: {
    width: 28,
    height: 28,
  },
  autoLayoutHorizontal: {
    flexDirection: "row",
  },
  title: {
    width: 190,
    display: "flex",
    fontFamily: FontFamily.bodyXSmallBold,
    fontWeight: "700",
    textAlign: "center",
    color: Color.skyWhite,
    lineHeight: 38,
    fontSize: FontSize.h4Bold_size,
    justifyContent: "center",
    marginLeft: "5%",
  },
  finalize1: {
    fontSize: FontSize.h5Semibold_size,
    lineHeight: 32,
    textAlign: "right",
    color: Color.primary900,
    width: 75,
    alignItems: "center",
    marginRight: "5%"
  },
  elementsnavbarEditDarktru: {
    justifyContent: "space-between",
    paddingHorizontal: 0,
    paddingVertical: Padding.p_8xs,
    alignSelf: "stretch",
  },
  frameIcon: {
    borderRadius: 20,
    height: 400,
    width: "100%",
    resizeMode: "contain",
    backgroundColor: "transparent",
  },
  autoLayoutVertical1: {
    alignSelf: "stretch",
    top: "30%"
  },
  autoLayoutVertical: {
    left: 0,
    right: 0,
    position: "absolute",
  },
  button: {
    textAlign: "center",
    color: Color.skyWhite,
    alignSelf: "stretch",
  },
  buttonpillTypepillIconf1: {
    backgroundColor: Color.primary900,
    marginLeft: 16,
  },
  autoLayoutHorizontal6: {
    flexDirection: "row",
    alignSelf: "stretch",
  },
  buttonpillTypepillIconf3: {
    backgroundColor: Color.alertsStatusButtonDisabled,
    marginLeft: 16,
  },
  button2ButtonsDarktrueC: {
    bottom: 0,
    borderColor: Color.colorDarkslategray_200,
    paddingTop: Padding.p_5xl,
    paddingBottom: Padding.p_17xl,
    borderStyle: "solid",
    paddingHorizontal: Padding.p_5xl,
    left: 0,
    right: 0,
    position: "absolute",
    backgroundColor: Color.darkDarkbg,
  },
  GeneratingArtwork: {
    height: 1000,
    width: "100%",
    flex: 1,
  },
});

export default GeneratingArtwork;