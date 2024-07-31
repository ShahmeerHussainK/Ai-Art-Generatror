import * as React from "react";
import {
  Image,
  StyleSheet,
  Pressable,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from "react-native";
import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, Border, Padding, FontSize } from "../GlobalStyles";
import { Buffer } from 'buffer';
import { BallIndicator } from 'react-native-indicators';
import DarkEditInput from "./DarkEditInput";
import { useTranslation } from 'react-i18next';
import { useTheme } from "../context/ThemeContext";

const { width } = Dimensions.get('window');

const DarkEditArtwork1 = ({ route }) => {
  const navigation = useNavigation();
  const { t } = useTranslation();
  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [loadingText, setLoadingText] = useState("");
  const [showImage, setShowImage] = useState(false);
  const [previousImages, setPreviousImages] = useState([]);
  let { prompt } = route.params;
  const {style_id} = route.params;
  const { selectedRatio } = route.params;
  const [statePrompt, setStatePrompt] = useState(prompt);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { theme, toggleTheme, isDarkMode } = useTheme();

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const generateImage = async (p = "") => {
    setLoading(true);
    prompt = statePrompt;
    if (typeof p === 'string' && p) {
      prompt = p;
      setStatePrompt(p);
    }
    setLoadingText(t("Please wait, generating..."));
    try {
      let headers = new Headers();
      headers.append("Authorization", "replace your Token");

      let formdata = new FormData();
      formdata.append("prompt", prompt);
      formdata.append("style_id", style_id);
      if (selectedRatio){
        formdata.append("aspect_ratio", selectedRatio);
      }

      let requestOptions = {
        method: 'POST',
        body: formdata,
        headers: headers,
      };
      console.log(formdata)
      fetch("https://api.vyro.ai/v1/imagine/api/generations", requestOptions)
        .then((response) => response.arrayBuffer())
        .then((result) => {
          const base64 = Buffer.from(result, 'binary').toString("base64");
          const asImageSrc = `data: image/png;base64,${base64}`;
          setPreviousImages(prev => [...prev, asImageSrc]);
          setImageUrl(asImageSrc);
          setLoading(false);
          setShowImage(true);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    } catch (error) {
      console.error('Error generating image:', error);
    }
  };

  const handleDataFromModal = async(newData) => {
    prompt=newData;
    setIsModalVisible(false);
    generateImage(newData);
  };

  useEffect(() => {
    generateImage();
  }, []);

  const handlePreviousImageClick = (imageUrl) => {
    setImageUrl(imageUrl);
    setShowImage(true);
  };

  const deviceWidth = Dimensions.get('window').width;

  return (
    <View style={[styles.darkEditArtwork, { backgroundColor: theme.background }]}>
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

      <View style={[styles.elementsnavbarEditDarktru, styles.autoLayoutHorizontal2FlexBox]}>
        <View style={styles.finalizeLayout}>
          <Pressable
            style={styles.gobackLayout1}
            onPress={() => navigation.goBack()}
          >
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={isDarkMode ? require("../assets/iconlyregularoutlinearrow--left1.png") : require("../assets/blackarrow.png")}
            />
          </Pressable>
        </View>
        <Text style={[styles.title, styles.titleFlexBox, { color: theme.text }]}>{t('Edit Artwork')}</Text>
        <TouchableOpacity
          activeOpacity={0.0}
          onPress={() => navigation.navigate("FinalizeArtwork", {imageUrl})}
        >
          <Text style={[styles.finalize, styles.undoTypo]}>{t('Finalize')}</Text>
        </TouchableOpacity>
      </View>

      <ScrollView>
        <View style={styles.imageContainer}>
          {showImage && imageUrl && (
            <Image
              source={{ uri: imageUrl }}
              style={[styles.generatedImage, { width: deviceWidth, height: deviceWidth * 0.95 }]}
            />
          )}
        </View>
        <View style={styles.previousImagesContainer}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {previousImages.map((prevImageUrl, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.previousImageWrapper,
                  prevImageUrl === imageUrl && styles.selectedImageBorder,
                ]}
                onPress={() => handlePreviousImageClick(prevImageUrl)}
              >
                <Image
                  style={styles.previousImage}
                  resizeMode="cover"
                  source={{ uri: prevImageUrl }}
                />
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </ScrollView>

      <View style={styles.actionButtonsContainer}>
        <TouchableOpacity
          style={[styles.actionButton, { backgroundColor: theme.promptbackground }]}
          activeOpacity={0.0}
          onPress={generateImage}
        >
          <Image
            style={styles.iconButton}
            resizeMode="cover"
           source={isDarkMode ? require("../assets/iconrefresh-componentadditional-icons.png") : require("../assets/regenerateLight.png")}
          />
          <Text style={[styles.actionButtonText,{ color: theme.canceltext }]}>{t('Re-generate')}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.actionButton, { backgroundColor: theme.promptbackground }]}
          activeOpacity={0.0}
          onPress={generateImage}
        >
          <Image
            style={styles.iconButton}
            resizeMode="cover"
            source={isDarkMode ? require("../assets/iconeditimageoutline-componentadditional-icons.png") : require("../assets/variationLight.png")}
          />
          <Text style={[styles.actionButtonText, { color: theme.canceltext }]}>{t('Create Variations')}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.actionButton, { backgroundColor: theme.promptbackground }]}
          activeOpacity={0.0}
          onPress={() => navigation.navigate("DarkEraseObject")}
        >
          <Image
            style={styles.iconButton}
            resizeMode="cover"
            source={isDarkMode ? require("../assets/iconeraseoutline-componentadditional-icons.png") : require("../assets/eraseLight.png")}
          />
          <Text style={[styles.actionButtonText,{ color: theme.canceltext }]}>{t('Erase Object')}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.actionButton, { backgroundColor: theme.promptbackground }]}
          activeOpacity={0.0}
          onPress={toggleModal}
        >
          <Image
            style={styles.iconButton}
            resizeMode="cover"
            source={isDarkMode ? require("../assets/iconlyregularoutlineedit1.png") : require("../assets/EditLight.png")}
          />
          <Text style={[styles.actionButtonText, { color: theme.canceltext }]}>{t('Edit Input')}</Text>
        </TouchableOpacity>
      </View>
      <DarkEditInput isVisible={isModalVisible} onClose={toggleModal} onDataChange={handleDataFromModal} promptt={prompt} />
    </View>
  );
};

const styles = StyleSheet.create({
  loadingOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 33,
  },
  indicator: {
    position: "absolute",
    paddingBottom: 100,
  },
  loadingText: {
    color: "white",
    fontWeight: "bold",
  },
  autoLayoutHorizontal2FlexBox: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  finalizeLayout: {
    width: 75,
    alignItems: "center",
  },
  gobackLayout1: {
    height: 28,
    width: 28,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  title: {
    fontSize: FontSize.h4Bold_size,
    width: 190,
    display: "flex",
    textAlign: "center",
    color: Color.skyWhite,
    fontFamily: FontFamily.bodyXSmallBold,
    fontWeight: "700",
    marginLeft: "5%",
  },
  titleFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  undoTypo: {
    color: Color.primary900,
    fontFamily: FontFamily.bodyXSmallBold,
    fontWeight: "700",
  },
  finalize: {
    fontSize: FontSize.h5Semibold_size,
    lineHeight: 32,
    textAlign: "right",
    display: "flex",
    width: 75,
    marginRight: "5%",
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.darkDarkbg,
    marginTop: "25%",
    borderRadius: 5,
  },
  generatedImage: {
    resizeMode: 'cover',
  },
  previousImagesContainer: {
    paddingVertical: 30,
    paddingHorizontal: 5,
  },
  previousImageWrapper: {
    marginRight: 10,
    borderWidth: 2,
    borderColor: "transparent",
  },
  selectedImageBorder: {
    borderColor: Color.primary900,
    borderRadius: Border.br_5xs,
  },
  previousImage: {
    width: 85,
    height: 85,
    borderRadius: Border.br_5xs,
  },
  actionButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  actionButton: {
    padding: Padding.p_xs,
    borderRadius: Border.br_5xs,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    marginHorizontal: 5,
  },
  iconButton: {
    width: 25,
    height: 25,
  },
  actionButtonText: {
    fontSize: 8,
    lineHeight: 12,
    marginTop: 8,
    textAlign: "center",
  },
  darkEditArtwork: {
    flex: 1,
  },
});

export default DarkEditArtwork1;