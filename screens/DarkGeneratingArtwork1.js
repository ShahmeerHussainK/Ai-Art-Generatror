import React, { useState, useEffect } from "react";
import {
  Pressable,
  Image,
  StyleSheet,
  View,
  Text,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { BallIndicator } from 'react-native-indicators';
import { FontSize, FontFamily, Border, Color, Padding } from "../GlobalStyles";
import { useTranslation } from 'react-i18next';

//#region B4Translation
// const DarkGeneratingArtwork1 = () => {
//   const [isAnimating, setIsAnimating] = useState(true);
//   const navigation = useNavigation();
//   const [error, setError] = useState('');
//   const [imageUrl, setImageUrl] = useState(null);



//   const generateImage = async () => {

   
//     try{
//       let headers = new Headers();
//       headers.append("Authorization", "replace your Token");

//       let formdata = new FormData();
//       formdata.append("prompt", "a logo for irtiqa ");
//       formdata.append("style_id", "31");

//       let requestOptions = {
//         method: 'POST',
//         body: formdata,
//         headers: headers,
//       };

//       fetch("https://api.vyro.ai/v1/imagine/api/generations", requestOptions)
//         .then(response => response.text())
//         .then(result => setImageUrl(`data:image/png;base64,${result}`))
//         .catch(error => console.log('error', error));


//     }
    
//     catch (error) {
//       console.error('Error generating image:', error);
//     } finally {
//       setIsAnimating(false);
//     }
//   };

//   useEffect(() => {
//     // const timeout = setTimeout(() => {
//     //   setIsAnimating(false);
//     //   navigation.navigate("DarkEditArtwork1");
//     // }, 4000);
//     generateImage();
//     // return () => clearTimeout(timeout);
    
//   }, []);

//   return (
//     <View style={styles.darkGeneratingArtwork}>
//       <View
//         style={[
//           styles.elementsnavbarEditDarktru,
//           styles.autoLayoutHorizontal2FlexBox,
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
//         <Text style={[styles.title, styles.autoFlexBox1]}>Edit Artwork</Text>
//         <Pressable onPress={() => {}}>
//           <Text style={[styles.finalize1, styles.creatingTypo]}>
//             Finalize
//           </Text>
//         </Pressable>
//       </View>
//     <ScrollView>
//     <View style={styles.darkGeneratingArtwork}>
//       <View
//         style={[styles.autoLayoutVertical, styles.autoLayoutVerticalPosition]}
//       >
//         <View style={styles.viewcarouselAspectRatio1}>
//           <View style={styles.autoLayoutVertical1}>
//             <View style={[styles.aspectRatio11Sizelarge, styles.autoFlexBox1]}>
//               <View style={styles.autoFlexBox1}>
//               <BallIndicator
//                 style={styles.indicator}
//                 animating={isAnimating}
//                 size={50}
//                 color="#6949FF"
//               />
//                 <Text style={[styles.creating, styles.creatingTypo]}>
//                   Generating...
//                 </Text>
//               </View>
//             </View>
//             <View style={styles.autoLayoutHorizontal1}>
//               <Image
//                 style={styles.aspectLayout}
//                 resizeMode="cover"
//                 source={require("../assets/aspect-ratio1--1-sizesmall-state-1generating-state-2unselected-themedark-componentgenerate-artwork-card.png")}
//               />
//               <Image
//                 style={[styles.aspectRatio11Sizesmall1, styles.aspectLayout]}
//                 resizeMode="cover"
//                 source={require("../assets/aspect-ratio1--1-sizesmall-state-1generating-state-2unselected-themedark-componentgenerate-artwork-card.png")}
//               />
//               <Image
//                 style={[styles.aspectRatio11Sizesmall1, styles.aspectLayout]}
//                 resizeMode="cover"
//                 source={require("../assets/aspect-ratio1--1-sizesmall-state-1generating-state-2unselected-themedark-componentgenerate-artwork-card1.png")}
//               />
//               <Image
//                 style={[styles.aspectRatio11Sizesmall1, styles.aspectLayout]}
//                 resizeMode="cover"
//                 source={require("../assets/aspect-ratio1--1-sizesmall-state-1generating-state-2unselected-themedark-componentgenerate-artwork-card.png")}
//               />
//             </View>
//           </View>
//         </View>
//       </View>
//     </View>
//     </ScrollView>
//       <View style={styles.autoLayoutVertical3}>
//         <View
//           style={[
//             styles.autoLayoutHorizontal2,
//             styles.autoLayoutHorizontal2FlexBox,
//           ]}
//         >
//           <View style={styles.autoLayoutHorizontal3}>
//             <Pressable style={styles.autoLayoutVertical4}>
//               <View
//                 style={[styles.autoLayoutHorizontal4, styles.autoFlexBox1]}
//               >
//                 <Image
//                   style={[
//                     styles.iconcarouselBoldComponent,
//                     styles.iconcarouselBoldComponentLayout,
//                   ]}
//                   resizeMode="cover"
//                   source={require("../assets/iconcarouselbold-componentadditional-icons.png")}
//                 />
//               </View>
//             </Pressable>
//             <Pressable
//               style={[styles.autoLayoutVertical5, styles.autoPosition]}
//             >
//               <View
//                 style={[styles.autoLayoutHorizontal4, styles.autoFlexBox1]}
//               >
//                 <Image
//                   style={styles.iconcarouselBoldComponentLayout}
//                   resizeMode="cover"
//                   source={require("../assets/iconlyregularboldcategory.png")}
//                 />
//               </View>
//             </Pressable>
//           </View>
//           <View style={styles.autoLayoutHorizontal3}>
//             <Pressable
//               style={[styles.autoLayoutVertical6, styles.autoBorder]}
//             >
//               <View
//                 style={[styles.autoLayoutHorizontal4, styles.autoFlexBox1]}
//               >
//                 <Text style={[styles.undo, styles.undoTypo]}>Undo</Text>
//                 <Image
//                   style={[
//                     styles.iconundo1Componentadditio,
//                     styles.iconcarouselBoldComponentLayout,
//                   ]}
//                   resizeMode="cover"
//                   source={require("../assets/iconundo1-componentadditional-icons.png")}
//                 />
//               </View>
//             </Pressable>
//             <Pressable
//               style={[styles.autoLayoutVertical7, styles.autoBorder]}
//             >
//               <View
//                 style={[styles.autoLayoutHorizontal4, styles.autoFlexBox1]}
//               >
//                 <Text style={[styles.undo, styles.undoTypo]}>Undo</Text>
//                 <Image
//                   style={[
//                     styles.iconundo1Componentadditio,
//                     styles.iconcarouselBoldComponentLayout,
//                   ]}
//                   resizeMode="cover"
//                   source={require("../assets/iconredo2-componentadditional-icons.png")}
//                 />
//               </View>
//             </Pressable>
//           </View>
//         </View>
//         <View style={styles.autoLayoutHorizontal1}>
//           <Pressable style={styles.autoFlexBox}>
//             <Image
//               style={[
//                 styles.iconrefreshComponentadditi,
//                 styles.gobackLayout,
//               ]}
//               resizeMode="cover"
//               source={require("../assets/iconrefresh-componentadditional-icons.png")}
//             />
//             <Text style={[styles.reGenerate, styles.undoTypo]}>
//               Re-generate
//             </Text>
//           </Pressable>
//           <Pressable
//             style={[styles.autoLayoutVertical9, styles.autoFlexBox]}
//           >
//             <Image
//               style={[
//                 styles.iconrefreshComponentadditi,
//                 styles.gobackLayout,
//               ]}
//               resizeMode="cover"
//               source={require("../assets/iconeditimageoutline-componentadditional-icons.png")}
//             />
//             <Text style={[styles.reGenerate, styles.undoTypo]}>
//               Create Variations
//             </Text>
//           </Pressable>
//           <Pressable
//             style={[styles.autoLayoutVertical9, styles.autoFlexBox]}
//           >
//             <Image
//               style={[
//                 styles.iconrefreshComponentadditi,
//                 styles.gobackLayout,
//               ]}
//               resizeMode="cover"
//               source={require("../assets/iconeraseoutline-componentadditional-icons.png")}
//             />
//             <Text style={[styles.reGenerate, styles.undoTypo]}>
//               Erase Object
//             </Text>
//           </Pressable>
//           <Pressable
//             style={[styles.autoLayoutVertical9, styles.autoFlexBox]}
//           >
//             <Image
//               style={styles.gobackLayout}
//               resizeMode="cover"
//               source={require("../assets/iconlyregularoutlineedit1.png")}
//             />
//             <Text style={[styles.reGenerate, styles.undoTypo]}>Edit Input</Text>
//           </Pressable>
//         </View>
//       </View>
//     </View>
//   );
// };
//#endregion
const DarkGeneratingArtwork1 = () => {
  const { t } = useTranslation(); // Initialize useTranslation hook
  const [isAnimating, setIsAnimating] = useState(true);
  const navigation = useNavigation();
  const [error, setError] = useState('');
  const [imageUrl, setImageUrl] = useState(null);

  const generateImage = async () => {
    try {
      let headers = new Headers();
      headers.append("Authorization", "replace your Token");

      let formdata = new FormData();
      formdata.append("prompt", "a logo for irtiqa ");
      formdata.append("style_id", "31");

      let requestOptions = {
        method: 'POST',
        body: formdata,
        headers: headers,
      };

      fetch("https://api.vyro.ai/v1/imagine/api/generations", requestOptions)
        .then(response => response.text())
        .then(result => setImageUrl(`data:image/png;base64,${result}`))
        .catch(error => console.log('error', error));
    } catch (error) {
      console.error('Error generating image:', error);
    } finally {
      setIsAnimating(false);
    }
  };

  useEffect(() => {
    generateImage();
  }, []);

  return (
    <View style={styles.darkGeneratingArtwork}>
      <View style={[styles.elementsnavbarEditDarktru, styles.autoLayoutHorizontal2FlexBox]}>
        <View style={[styles.autoLayoutHorizontal, styles.finalize1Layout]}>
          <Pressable style={styles.gobackLayout} onPress={() => navigation.goBack()}>
            <Image style={styles.icon} resizeMode="cover" source={require("../assets/goback.png")} />
          </Pressable>
        </View>
        <Text style={[styles.title, styles.autoFlexBox1]}>{t('Edit Artwork')}</Text>
        <Pressable onPress={() => {}}>
          <Text style={[styles.finalize1, styles.creatingTypo]}>{t('Finalize')}</Text>
        </Pressable>
      </View>

      <ScrollView>
        <View style={[styles.darkGeneratingArtwork, styles.autoLayoutVertical, styles.autoLayoutVerticalPosition]}>
          <View style={styles.viewcarouselAspectRatio1}>
            <View style={[styles.autoLayoutVertical1]}>
              <View style={[styles.aspectRatio11Sizelarge, styles.autoFlexBox1]}>
                <View style={styles.autoFlexBox1}>
                  <BallIndicator style={styles.indicator} animating={isAnimating} size={50} color="#6949FF" />
                  <Text style={[styles.creating, styles.creatingTypo]}>{t('Generating...')}</Text>
                </View>
              </View>
              <View style={styles.autoLayoutHorizontal1}>
                <Image style={styles.aspectLayout} resizeMode="cover" source={require("../assets/aspect-ratio1--1-sizesmall-state-1generating-state-2unselected-themedark-componentgenerate-artwork-card.png")} />
                <Image style={[styles.aspectRatio11Sizesmall1, styles.aspectLayout]} resizeMode="cover" source={require("../assets/aspect-ratio1--1-sizesmall-state-1generating-state-2unselected-themedark-componentgenerate-artwork-card.png")} />
                <Image style={[styles.aspectRatio11Sizesmall1, styles.aspectLayout]} resizeMode="cover" source={require("../assets/aspect-ratio1--1-sizesmall-state-1generating-state-2unselected-themedark-componentgenerate-artwork-card1.png")} />
                <Image style={[styles.aspectRatio11Sizesmall1, styles.aspectLayout]} resizeMode="cover" source={require("../assets/aspect-ratio1--1-sizesmall-state-1generating-state-2unselected-themedark-componentgenerate-artwork-card.png")} />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>

      <View style={styles.autoLayoutVertical3}>
        <View style={[styles.autoLayoutHorizontal2, styles.autoLayoutHorizontal2FlexBox]}>
          <View style={styles.autoLayoutHorizontal3}>
            <Pressable style={styles.autoLayoutVertical4}>
              <View style={[styles.autoLayoutHorizontal4, styles.autoFlexBox1]}>
                <Image style={[styles.iconcarouselBoldComponent, styles.iconcarouselBoldComponentLayout]} resizeMode="cover" source={require("../assets/iconcarouselbold-componentadditional-icons.png")} />
              </View>
            </Pressable>
            <Pressable style={[styles.autoLayoutVertical5, styles.autoPosition]}>
              <View style={[styles.autoLayoutHorizontal4, styles.autoFlexBox1]}>
                <Image style={styles.iconcarouselBoldComponentLayout} resizeMode="cover" source={require("../assets/iconlyregularboldcategory.png")} />
              </View>
            </Pressable>
          </View>
          <View style={styles.autoLayoutHorizontal3}>
            <Pressable style={[styles.autoLayoutVertical6, styles.autoBorder]}>
              <View style={[styles.autoLayoutHorizontal4, styles.autoFlexBox1]}>
                <Text style={[styles.undo, styles.undoTypo]}>{t('Undo')}</Text>
                <Image style={[styles.iconundo1Componentadditio, styles.iconcarouselBoldComponentLayout]} resizeMode="cover" source={require("../assets/iconundo1-componentadditional-icons.png")} />
              </View>
            </Pressable>
            <Pressable style={[styles.autoLayoutVertical7, styles.autoBorder]}>
              <View style={[styles.autoLayoutHorizontal4, styles.autoFlexBox1]}>
                <Text style={[styles.undo, styles.undoTypo]}>{t('Undo')}</Text>
                <Image style={[styles.iconundo1Componentadditio, styles.iconcarouselBoldComponentLayout]} resizeMode="cover" source={require("../assets/iconredo2-componentadditional-icons.png")} />
              </View>
            </Pressable>
          </View>
        </View>
        <View style={styles.autoLayoutHorizontal1}>
          <Pressable style={styles.autoFlexBox}>
            <Image style={[styles.iconrefreshComponentadditi, styles.gobackLayout]} resizeMode="cover" source={require("../assets/iconrefresh-componentadditional-icons.png")} />
            <Text style={[styles.reGenerate, styles.undoTypo]}>{t('Re-generate')}</Text>
          </Pressable>
          <Pressable style={[styles.autoLayoutVertical9, styles.autoFlexBox]}>
            <Image style={[styles.iconrefreshComponentadditi, styles.gobackLayout]} resizeMode="cover" source={require("../assets/iconeditimageoutline-componentadditional-icons.png")} />
            <Text style={[styles.reGenerate, styles.undoTypo]}>{t('Create Variations')}</Text>
          </Pressable>
          <Pressable style={[styles.autoLayoutVertical9, styles.autoFlexBox]}>
            <Image style={[styles.iconrefreshComponentadditi, styles.gobackLayout]} resizeMode="cover" source={require("../assets/iconeraseoutline-componentadditional-icons.png")} />
            <Text style={[styles.reGenerate, styles.undoTypo]}>{t('Erase Object')}</Text>
          </Pressable>
          <Pressable style={[styles.autoLayoutVertical9, styles.autoFlexBox]}>
            <Image style={styles.gobackLayout} resizeMode="cover" source={require("../assets/iconlyregularoutlineedit1.png")} />
            <Text style={[styles.reGenerate, styles.undoTypo]}>{t('Edit Input')}</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  indicator: {
    position: "absolute",

    justifyContent: "center",
    alignItems: "center",
  },
  autoLayoutVerticalPosition: {
    left: 0,
    right: 0,
    position: "absolute",
  },
  autoLayoutHorizontal2FlexBox: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  finalize1Layout: {
    width: 75,
    alignItems: "center",
  },
  autoFlexBox1: {
    justifyContent: "center",
    alignItems: "center",
  },
  creatingTypo: {
    lineHeight: 32,
    fontSize: FontSize.h5Semibold_size,
    fontFamily: FontFamily.bodyXSmallBold,
    fontWeight: "700",
  },
  aspectLayout: {
    height: 84,
    maxWidth: "100%",
    borderRadius: Border.br_5xs,
    overflow: "hidden",
    flex: 1,
  },
  iconcarouselBoldComponentLayout: {
    height: 20,
    width: 20,
  },
  autoPosition: {
    marginLeft: -2,
    borderBottomRightRadius: Border.br_7xs,
    borderTopRightRadius: Border.br_7xs,
  },
  autoBorder: {
    width: 100,
    borderWidth: 2,
    borderColor: Color.primary900,
    borderStyle: "solid",
    padding: Padding.p_xs,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
  },
  undoTypo: {
    fontFamily: FontFamily.bodyXSmallBold,
    fontWeight: "regular",
    textAlign: "center",
  },
  gobackLayout: {
    height: 28,
    width: 28,
  },
  autoFlexBox: {
    backgroundColor: Color.colorDarkslategray_200,
    padding: Padding.p_xs,
    borderRadius: Border.br_5xs,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
    overflow: "hidden",
    flex: 1,
    bottom: "5%",
  },
  icon: {
    height: "100%",
    width: "100%",
    marginLeft: "90%"
  },
  autoLayoutHorizontal: {
    flexDirection: "row",
  },
  title: {
    fontSize: FontSize.h4Bold_size,
    width: 190,
    display: "flex",
    textAlign: "center",
    color: Color.skyWhite,
    fontFamily: FontFamily.bodyXSmallBold,
    fontWeight: "700",
  },
  finalize1: {
    color: Color.alertsStatusButtonDisabled,
    textAlign: "right",
    display: "flex",
    width: 75,
    alignItems: "center",
    marginRight: "8%"
  },
  elementsnavbarEditDarktru: {
    paddingHorizontal: 0,
    paddingVertical: Padding.p_8xs,
  },
  iconloadingComponentadditi: {
    width: 90,
    height: 90,
    overflow: "hidden",
  },
  creating: {
    marginTop: "50%",
    textAlign: "center",
    color: Color.skyWhite,
  },
  aspectRatio11Sizelarge: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorGray_200,
    height: 282,
    padding: Padding.p_5xl,
    alignSelf: "stretch",
    overflow: "hidden",
  },
  aspectRatio11Sizesmall1: {
    marginLeft: 16,
  },
  autoLayoutHorizontal1: {
    marginTop: 32,
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  autoLayoutVertical1: {
    alignSelf: "stretch",
  },
  iconcarouselBoldComponent: {
    overflow: "hidden",
  },
  autoLayoutHorizontal4: {
    flexDirection: "row",
    alignSelf: "stretch",
  },
  autoLayoutVertical4: {
    backgroundColor: Color.primary900,
    padding: Padding.p_xs,
    width: 60,
    borderBottomLeftRadius: Border.br_7xs,
    borderTopLeftRadius: Border.br_7xs,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
  },
  autoLayoutVertical5: {
    borderWidth: 2,
    borderColor: Color.primary900,
    borderStyle: "solid",
    marginLeft: -2,
    borderBottomRightRadius: Border.br_7xs,
    borderTopRightRadius: Border.br_7xs,
    padding: Padding.p_xs,
    width: 60,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
  },
  autoLayoutHorizontal3: {
    flexDirection: "row",
    alignSelf: "stretch",
  },
  undo: {
    fontSize: FontSize.bodyMediumMedium_size,
    lineHeight: 22,
    color: Color.primary900,
    letterSpacing: 0,
    textAlign: "center",
  },
  iconundo1Componentadditio: {
    marginLeft: 6,
    overflow: "hidden",
  },
  autoLayoutVertical6: {
    width: 100,
    borderBottomLeftRadius: Border.br_7xs,
    borderTopLeftRadius: Border.br_7xs,
  },
  autoLayoutVertical7: {
    marginLeft: -2,
    borderBottomRightRadius: Border.br_7xs,
    borderTopRightRadius: Border.br_7xs,
    width: 100,
  },
  autoLayoutHorizontal2: {
    height: 44,
  },
  iconrefreshComponentadditi: {
    overflow: "hidden",
  },
  reGenerate: {
    fontSize: FontSize.bodyXSmallMedium_size,
    lineHeight: 19,
    color: Color.greyscale50,
    marginTop: 8,
    letterSpacing: 0,
    textAlign: "center",
    alignSelf: "stretch",
  },
  autoLayoutVertical9: {
    marginLeft: 12,
  },
  autoLayoutVertical3: {
    marginTop: "5%",
    alignSelf: "stretch",
    paddingLeft: "5%",
    paddingRight: "5%",
  },
  viewcarouselAspectRatio1: {
    alignSelf: "stretch",
    marginTop: "5%",
  },
  autoLayoutVertical: {
    height: 888,
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: Padding.p_xs,
    marginTop: "4%",
  },
  text: {
    marginTop: -13,
    left: 23,
    fontSize: FontSize.bodyLargeBold_size,
    lineHeight: 26,
    fontWeight: "600",
    fontFamily: FontFamily.bodyMediumSemibold,
    textAlign: "left",
    letterSpacing: 0,
    color: Color.skyWhite,
  },
  darkGeneratingArtwork: {
    backgroundColor: Color.darkDarkbg,
    height: 500,
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default DarkGeneratingArtwork1;
