import * as React from "react";
import {
  Pressable,
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { Menu, MenuOptions, MenuOption, MenuTrigger, MenuProvider } from 'react-native-popup-menu';
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";
import { useState } from "react";
import RemixModal from "./RemixModal";
import DarkDownloadArtwork from "./DarkDownloadArtwork";
import { useTheme } from "../context/ThemeContext";
import { useTranslation } from 'react-i18next';

//#region B4Translation
// const DarkArtworkPostDetails = () => {
//   const navigation = useNavigation();
//   const [modalVisible, setModalVisible] = useState(false);
//   const [isModalVisible, setIsModalVisible] = useState(false);
//   const [liked, setLiked] = useState([false, false]);
//   const [count, setCount] = useState([250, 247]);
//   const [showMore, setShowMore] = useState([false, false]);

//   const toggleModal = () => {
//     setIsModalVisible(!isModalVisible);
//   };

//   const handleLikeToggle = (index) => {
//     const newLiked = [...liked];
//     const newCount = [...count];
//     if (newLiked[index]) {
//       newCount[index] -= 1;
//     } else {
//       newCount[index] += 1;
//     }
//     newLiked[index] = !newLiked[index];
//     setLiked(newLiked);
//     setCount(newCount);
//   };

//   const handleShowMoreToggle = (index) => {
//     const newShowMore = [...showMore];
//     newShowMore[index] = !newShowMore[index];
//     setShowMore(newShowMore);
//   };

//   return (
//     <View style={styles.darkArtworkPostDetails}>
//       <View style={[styles.navbardefaultDarktrueCom, styles.autoFlexBox]}>
//         <Pressable
//           style={styles.autoLayoutHorizontal}
//           onPress={() => navigation.goBack()}
//         >
//           <Image
//             style={[styles.typelogoDefaultComponentl, styles.gobackLayout]}
//             resizeMode="cover"
//             source={require("../assets/typelogo-default-componentlogo9.png")}
//           />
//           <Pressable
//             style={[styles.gobackLayout]}
//             onPress={() => navigation.goBack()}
//           >
//             <Image
//               style={styles.iconLayout}
//               resizeMode="cover"
//               source={require("../assets/goback10.png")}
//             />
//           </Pressable>
//         </Pressable>
//         <Text style={[styles.titleSection, styles.titleTypo]}>Post</Text>
//         <Image
//           style={[styles.autoLayoutHorizontal1, styles.gobackLayout]}
//           resizeMode="cover"
//         />
//       </View>
//       <MenuProvider>
//         <ScrollView style={styles.scroll}>
//           <View style={styles.darkArtworkPostDetails}>
//             <View style={[styles.autoLayoutVertical, styles.autoLayoutVerticalPosition]}>
//               <ScrollView
//                 style={styles.autoLayoutVertical1}
//                 showsVerticalScrollIndicator={true}
//                 showsHorizontalScrollIndicator={false}
//                 contentContainerStyle={styles.autoLayoutVerticalContent}
//               >
//                 {[0, 1].map((index) => (
//                   <View key={index} style={styles.elementsartworkDetailsColla}>
//                     <View style={[styles.autoLayoutHorizontal2, styles.autoFlexBox]}>
//                       <View style={styles.typedefaultComponentavatar}>
//                         <ImageBackground
//                           style={[styles.ellipseIcon, styles.ellipseIconPosition]}
//                           resizeMode="contain"
//                           source={require("../assets/typedefault-componentavatar17.png")}
//                         />
//                       </View>
//                       <Text style={[styles.name, styles.textTypo1]}>
//                         {index === 0 ? 'imagine.art' : 'mydream25'}
//                       </Text>
//                       <Menu>
//                         <MenuTrigger>
//                           <Image
//                             style={styles.iconellipsisVComponentadd}
//                             resizeMode="cover"
//                             source={require("../assets/iconellipsisv-componentadditional-icons.png")}
//                           />
//                         </MenuTrigger>
//                         <MenuOptions style={styles.menu}>
//                           <MenuOption onSelect={() => navigation.navigate("DarkArtworkPostDetails")}>
//                             <Text style={{ padding: 10, color: "white" }}>Save Artwork</Text>
//                           </MenuOption>
//                           <MenuOption onSelect={() => setModalVisible(true)}>
//                             <Text style={{ padding: 10, color: "white" }}>Download Artwork</Text>
//                           </MenuOption>
//                           <MenuOption onSelect={() => navigation.navigate("DarkReport")}>
//                             <Text style={{ padding: 10, color: "white" }}>Report</Text>
//                           </MenuOption>
//                         </MenuOptions>
//                       </Menu>
//                     </View>
//                     <Image
//                       style={[styles.artworkRatio11ArtworkS, styles.artworkLayout]}
//                       resizeMode="contain"
//                       source={
//                         index === 0
//                           ? require("../assets/artwork-ratio1--1-artwork-sizelarge-componentartwork-ratio--size4.png")
//                           : require("../assets/artwork-ratio1--1-artwork-sizelarge-componentartwork-ratio--size5.png")
//                       }
//                     />
//                     <View style={[styles.autoLayoutHorizontal3, styles.autoFlexBox]}>
//                       <View style={[styles.autoLayoutHorizontal4, styles.autoFlexBox]}>
//                         <View style={styles.autoFlexBox}>
//                           <TouchableOpacity activeOpacity={0.0} onPress={() => handleLikeToggle(index)}>
//                             <Image
//                               style={styles.gobackLayout}
//                               resizeMode="cover"
//                               source={
//                                 liked[index]
//                                   ? require("../assets/iconlyregularboldheart.png")
//                                   : require("../assets/iconlyregularoutlineheart1.png")
//                               }
//                             />
//                           </TouchableOpacity>
//                           <Text style={[styles.text, styles.textTypo]}>{count[index]}</Text>
//                         </View>
//                         <TouchableOpacity activeOpacity={0.0}>
//                           <Image
//                             style={[styles.iconlycurvedoutlinesend, styles.gobackLayout]}
//                             resizeMode="cover"
//                             source={require("../assets/iconlycurvedoutlinesend1.png")}
//                           />
//                         </TouchableOpacity>
//                       </View>
//                       <TouchableOpacity
//                         style={[
//                           styles.sizesmallTypefilledIcon,
//                           styles.autoLayoutVertical3FlexBox,
//                         ]}
//                         activeOpacity={0.0}
//                         onPress={toggleModal}
//                       >
//                         <Text style={[styles.chips, styles.chipsClr]}>Remix</Text>
//                       </TouchableOpacity>
//                     </View>
//                     <View style={styles.autoLayoutVertical2}>
//                       <Text style={[styles.title, styles.chipsClr]}>
//                         {index === 0 ? 'Portrait of Woman with Tattoo' : 'Title'}
//                       </Text>
//                       <View
//                         style={[
//                           styles.autoLayoutVertical3,
//                           styles.autoLayoutVertical3FlexBox,
//                         ]}
//                       >
//                         <Text style={[styles.prompt, styles.chipsClr]}>Prompt:</Text>
//                         <Text style={[styles.description, styles.textTypo]}>
//                           {index === 0
//                             ? 'a close up of a woman with tattoos on her face, mandy jurgens golden ratio, award-winning render, dan mumford. maya render,'
//                             : 'Description'}
//                         </Text>
//                         {showMore[index] && (
//                           <>
//                             <Text style={[styles.description, styles.textTypo]}>
//                               the artist has used bright, oil painting of princess vulvine,
//                               beautiful portrait of a hopeless, vogue render, wojtek fus,
//                               realism : 9 5 %, punk portrait made out of paint
//                             </Text>
//                             <View style={[styles.autoLayoutVertical3, styles.autoSpaceBlock]}>
//                               <Text style={[styles.prompt, styles.chipsClr]}>
//                                 Negative Prompt:
//                               </Text>
//                               <Text style={[styles.description, styles.textTypo]}>
//                                 forges, john goodman as donald trump, jack russel dog, herluf
//                                 bidstrup, width 768, bob clampett, cartoon, steamboat willy,
//                                 vf-1s jetfire, paw pov
//                               </Text>
//                             </View>
//                             <View
//                               style={[styles.autoLayoutHorizontal6, styles.autoSpaceBlock]}
//                             >
//                               <View style={styles.autoLayoutVertical5}>
//                                 <Text style={[styles.cfgScale, styles.chipsClr]}>
//                                   CFG Scale
//                                 </Text>
//                                 <Text style={[styles.text1, styles.textTypo]}>8</Text>
//                               </View>
//                               <View style={styles.autoLayoutVertical51}>
//                                 <Text style={[styles.cfgScale, styles.chipsClr]}>
//                                   Seed
//                                 </Text>
//                                 <Text style={[styles.text1, styles.textTypo]}>84730169210</Text>
//                               </View>
//                             </View>
//                           </>
//                         )}
//                       </View>
//                       <TouchableOpacity
//                         style={styles.more}
//                         activeOpacity={0.0}
//                         onPress={() => handleShowMoreToggle(index)}
//                       >
//                         <Text style={styles.moreTypo}>{showMore[index] ? "Show Less..." : "Show More..."}</Text>
//                       </TouchableOpacity>
//                     </View>
//                   </View>
//                 ))}
//               </ScrollView>
//             </View>
//           </View>
//         </ScrollView>
//       </MenuProvider>
//       <RemixModal isVisible={isModalVisible} onClose={toggleModal} />
//       <DarkDownloadArtwork
//         visible={modalVisible}
//         onClose={() => setModalVisible(false)}
//         onDownload={() => {
//           // Handle download action here
//           setModalVisible(false);
//         }}
//       />
//     </View>
//   );
// };
//#endregion

const DarkArtworkPostDetails = () => {
  const { t } = useTranslation(); // Initialize the translation hook
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [liked, setLiked] = useState([false, false]);
  const [count, setCount] = useState([250, 247]);
  const [showMore, setShowMore] = useState([false, false]);
  const { theme, toggleTheme, isDarkMode } = useTheme();

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const handleLikeToggle = (index) => {
    const newLiked = [...liked];
    const newCount = [...count];
    if (newLiked[index]) {
      newCount[index] -= 1;
    } else {
      newCount[index] += 1;
    }
    newLiked[index] = !newLiked[index];
    setLiked(newLiked);
    setCount(newCount);
  };

  const handleShowMoreToggle = (index) => {
    const newShowMore = [...showMore];
    newShowMore[index] = !newShowMore[index];
    setShowMore(newShowMore);
  };

  return (
    <View style={[styles.darkArtworkPostDetails, { backgroundColor: theme.background }]}>
      <View style={[styles.navbardefaultDarktrueCom, styles.autoFlexBox]}>
        <Pressable
          style={styles.autoLayoutHorizontal}
          onPress={() => navigation.goBack()}
        >
          <Image
            style={[styles.typelogoDefaultComponentl, styles.gobackLayout]}
            resizeMode="cover"
            source={require("../assets/typelogo-default-componentlogo9.png")}
          />
          <Pressable
            style={[styles.gobackLayout]}
            onPress={() => navigation.goBack()}
          >
            <Image
              style={styles.iconLayout}
              resizeMode="cover"
              source={isDarkMode ? require("../assets/iconlyregularoutlinearrow--left1.png") : require("../assets/blackarrow.png")}
            />
          </Pressable>
        </Pressable>
        <Text style={[styles.titleSection, styles.titleTypo, { color: theme.text }]}>{t('Post')}</Text>
        <Image
          style={[styles.autoLayoutHorizontal1, styles.gobackLayout]}
          resizeMode="cover"
        />
      </View>
      <MenuProvider>
        <ScrollView style={styles.scroll}>
          <View style={styles.darkArtworkPostDetails}>
            <View style={[styles.autoLayoutVertical, styles.autoLayoutVerticalPosition]}>
              <ScrollView
                showsVerticalScrollIndicator={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.autoLayoutVerticalContent}
              >
                {[0, 1].map((index) => (
                  <View key={index} style={styles.elementsartworkDetailsColla}>
                    <View style={[styles.autoLayoutHorizontal2, styles.autoFlexBox]}>
                      <View style={styles.typedefaultComponentavatar}>
                        <ImageBackground
                          style={[styles.ellipseIcon, styles.ellipseIconPosition]}
                          resizeMode="contain"
                          source={require("../assets/typedefault-componentavatar17.png")}
                        />
                      </View>
                      <Text style={[styles.name, styles.textTypo1, { color: theme.text }]}>
                        {index === 0 ? 'imagine.art' : 'mydream25'}
                      </Text>
                      <Menu>
                        <MenuTrigger>
                          <Image
                            style={styles.iconellipsisVComponentadd}
                            resizeMode="cover"
                            source={isDarkMode ? require("../assets/iconellipsisv-componentadditional-icons.png") : require("../assets/threeDotLight.png")}

                          />
                        </MenuTrigger>
                        <MenuOptions style={[{ backgroundColor: theme.background }]}>
                          <MenuOption onSelect={() => navigation.navigate("DarkArtworkPostDetails")}>
                            <Text style={[{ padding: 10, },{ color: theme.text }]}>{t('Save Artwork')}</Text>
                          </MenuOption>
                          <MenuOption onSelect={() => setModalVisible(true)}>
                            <Text style={[{ padding: 10, },{ color: theme.text }]}>{t('Download Artwork')}</Text>
                          </MenuOption>
                          <MenuOption onSelect={() => navigation.navigate("DarkReport")}>
                            <Text style={{ padding: 10, color: "red" }}>{t('Report')}</Text>
                          </MenuOption>
                        </MenuOptions>
                      </Menu>
                    </View>
                    <Image
                      style={[styles.artworkRatio11ArtworkS, styles.artworkLayout]}
                      resizeMode="contain"
                      source={
                        index === 0
                          ? require("../assets/artwork-ratio1--1-artwork-sizelarge-componentartwork-ratio--size4.png")
                          : require("../assets/artwork-ratio1--1-artwork-sizelarge-componentartwork-ratio--size5.png")
                      }
                    />
                    <View style={[styles.autoLayoutHorizontal3, styles.autoFlexBox]}>
                      <View style={[styles.autoLayoutHorizontal4, styles.autoFlexBox]}>
                        <View style={styles.autoFlexBox}>
                          <TouchableOpacity activeOpacity={0.0} onPress={() => handleLikeToggle(index)}>
                            <Image
                              style={styles.gobackLayout}
                              resizeMode="cover"
                              source={
                                liked[index]
                                  ? require("../assets/iconlyregularboldheart.png")
                                  : require("../assets/iconlyregularoutlineheart1.png")
                              }
                            />
                          </TouchableOpacity>
                          <Text style={[styles.text, styles.textTypo, { color: theme.text }]}>{count[index]}</Text>
                        </View>
                        <TouchableOpacity activeOpacity={0.0}>
                          <Image
                            style={[styles.iconlycurvedoutlinesend, styles.gobackLayout]}
                            resizeMode="cover"
                            //source={require("../assets/iconlycurvedoutlinesend1.png")}
                            source={isDarkMode ? require("../assets/iconlycurvedoutlinesend1.png") : require("../assets/Send.png")}
                          />
                        </TouchableOpacity>
                      </View>
                      <TouchableOpacity
                        style={[
                          styles.sizesmallTypefilledIcon,
                          styles.autoLayoutVertical3FlexBox,
                        ]}
                        activeOpacity={0.0}
                        onPress={toggleModal}
                      >
                        <Text style={[styles.chips, styles.chipsClr]}>{t('Remix')}</Text>
                      </TouchableOpacity>
                    </View>
                    <View style={styles.autoLayoutVertical2}>
                      <Text style={[styles.title, styles.chipsClr, { color: theme.text }]}>
                        {index === 0 ? t('Portrait of Woman with Tattoo') : t('Title')}
                      </Text>
                      <View
                        style={[
                          styles.autoLayoutVertical3,
                          styles.autoLayoutVertical3FlexBox,
                        ]}
                      >
                        <Text style={[styles.prompt, styles.chipsClr, { color: theme.text }]}>{t('Prompt:')}</Text>
                        <Text style={[styles.description, styles.textTypo, { color: theme.text }]}>
                          {index === 0
                            ? t('a close up of a woman with tattoos on her face, mandy jurgens golden ratio, award-winning render, dan mumford. maya render,')
                            : t('Description')}
                        </Text>
                        {showMore[index] && (
                          <>
                            <Text style={[styles.description, styles.textTypo, { color: theme.text }]}>
                              {t('the artist has used bright, oil painting of princess vulvine, beautiful portrait of a hopeless, vogue render, wojtek fus, realism : 9 5 %, punk portrait made out of paint')}
                            </Text>
                            <View style={[styles.autoLayoutVertical3, styles.autoSpaceBlock]}>
                              <Text style={[styles.prompt, styles.chipsClr, { color: theme.text }]}>
                                {t('Negative Prompt:')}
                              </Text>
                              <Text style={[styles.description, styles.textTypo, { color: theme.text }]}>
                                {t('forges, john goodman as donald trump, jack russel dog, herluf bidstrup, width 768, bob clampett, cartoon, steamboat willy, vf-1s jetfire, paw pov')}
                              </Text>
                            </View>
                            <View
                              style={[styles.autoLayoutHorizontal6, styles.autoSpaceBlock]}
                            >
                              <View style={styles.autoLayoutVertical5}>
                                <Text style={[styles.cfgScale, styles.chipsClr, { color: theme.text }]}>
                                  {t('CFG Scale')}
                                </Text>
                                <Text style={[styles.text1, styles.textTypo, { color: theme.text }]}>8</Text>
                              </View>
                              <View style={styles.autoLayoutVertical51}>
                                <Text style={[styles.cfgScale, styles.chipsClr, { color: theme.text }]}>
                                  {t('Seed')}
                                </Text>
                                <Text style={[styles.text1, styles.textTypo, { color: theme.text }]}>84730169210</Text>
                              </View>
                            </View>
                          </>
                        )}
                      </View>
                      <TouchableOpacity
                        style={styles.more}
                        activeOpacity={0.0}
                        onPress={() => handleShowMoreToggle(index)}
                      >
                        <Text style={styles.moreTypo}>{showMore[index] ? t("Show Less...") : t("Show More...")}</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                ))}
              </ScrollView>
            </View>
          </View>
        </ScrollView>
      </MenuProvider>
      <RemixModal isVisible={isModalVisible} onClose={toggleModal} />
      <DarkDownloadArtwork
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onDownload={() => {
          // Handle download action here
          setModalVisible(false);
        }}
      />
    </View>
  );
};


const styles = StyleSheet.create({
  darkArtworkPostDetails: {
    flex: 1,
  },
  navbardefaultDarktrueCom: {
    flexDirection: "row",
    alignItems: "center",
    height: 48,
    paddingHorizontal: 16,
  },
  autoFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  gobackLayout: {
    height: 24,
    width: 24,
  },
  typelogoDefaultComponentl: {
    borderRadius: Border.br_341xl,
    display: "none",
  },
  autoLayoutHorizontal1: {
    marginLeft: 16,
  },
  autoLayoutHorizontal: {
    width: 28,
    alignItems: "center",
    flexDirection: "row",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  titleSection: {
    fontSize: FontSize.h4Bold_size,
    textAlign: "center",
    color: Color.skyWhite,
    flex: 1,
    marginBottom: "1%"
  },
  titleTypo: {
    fontFamily: FontFamily.bodyXSmallBold,
    fontWeight: "700",
  },
  scroll: {
    flex: 1,
  },
  autoLayoutVertical: {
    padding: 16,
  },
  autoLayoutVerticalPosition: {
    flexDirection: "column",
  },
  autoLayoutVerticalContent: {
    flexDirection: "column",
  },
  elementsartworkDetailsColla: {
    marginBottom: 32,
  },
  autoLayoutHorizontal2: {
    marginBottom: 16,
  },
  typedefaultComponentavatar: {
    marginRight: 8,
  },
  ellipseIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  ellipseIconPosition: {
    overflow: "hidden",
  },
  textTypo1: {
    fontFamily: FontFamily.bodyMediumSemibold,
    fontWeight: "600",
  },
  name: {
    textAlign: "left",
    lineHeight: 32,
    fontSize: FontSize.h5Semibold_size,
    color: Color.skyWhite,
    marginLeft: 16,
    flex: 1,
  },
  iconellipsisVComponentadd: {
    height: 24,
    width: 24,
    marginLeft: "auto",
  },
  artworkRatio11ArtworkS: {
    borderRadius: Border.br_xl,
    height: 382,
    bottom: 15,
    alignSelf: "stretch",
    width: "100%",
  },
  artworkLayout: {
    width: "100%",
    overflow: "hidden",
  },
  autoLayoutHorizontal3: {
    marginTop: 12,
    alignSelf: "stretch",
  },
  autoLayoutHorizontal4: {
    marginRight: "auto",
  },
  text: {
    fontSize: FontSize.size_md,
    color: Color.white,
    marginLeft: 4,
  },
  textTypo: {
    fontFamily: FontFamily.regular,
    color: "white"
  },
  iconlycurvedoutlinesend: {
    marginLeft: 16,
  },
  sizesmallTypefilledIcon: {
    borderRadius: Border.br_81xl,
    backgroundColor: Color.primary900,
    width: 80,
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_7xs,
    marginLeft: 40,
    alignItems: "center",
    flexDirection: "row",
  },
 autoLayoutVertical3FlexBox: {
    justifyContent: "center",
    alignSelf: "stretch",
  },
  chips: {
    fontSize: FontSize.bodyMediumMedium_size,
    lineHeight: 22,
    fontFamily: FontFamily.bodyMediumSemibold,
    fontWeight: "600",
    textAlign: "center",
  },
  chipsClr: {
    color: "white",
    fontWeight: "bold",
  },
  autoLayoutVertical2: {
    flexDirection: "column",
  },
  title: {
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.bold,
    color: Color.white,
    marginBottom: 8,
  },
  nameTypo: {
    fontFamily: FontFamily.bold,
    color: "white",
  },
  autoLayoutVertical3: {
    flexDirection: "column",
  },
  prompt: {
    fontSize: FontSize.size_md,
    fontFamily: FontFamily.bold,
    color: Color.white,
  },
  description: {
    fontSize: FontSize.size_md,
    color: Color.white,
    marginBottom: 8,
  },
  autoSpaceBlock: {
    marginBottom: 16,
  },
  autoLayoutHorizontal6: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  autoLayoutVertical5: {
    flexDirection: "column",
  },
  autoLayoutVertical51: {
    flexDirection: "column",
    marginLeft: "30%"
  },
  cfgScale: {
    fontSize: FontSize.size_md,
    fontFamily: FontFamily.bold,
    color: Color.white,
    marginBottom: 8,
  },
  text1: {
    fontSize: FontSize.size_md,
    color: Color.white,
  },
  more: {
    alignSelf: "flex-start",
  },
  moreTypo: {
    color: Color.primary900,
    letterSpacing: 0,
    lineHeight: 29,
    fontSize: FontSize.bodyXLargeBold_size,
    textAlign: "left",
    fontFamily: FontFamily.bodyMediumSemibold,
    fontWeight: "600",
    alignSelf: "stretch",
  },
});

export default DarkArtworkPostDetails;
