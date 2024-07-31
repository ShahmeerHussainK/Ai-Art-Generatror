import * as React from "react";
import {
  Image,
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Pressable,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useTranslation } from 'react-i18next';
import { Border, FontSize, Color, FontFamily, Padding } from "../GlobalStyles";
const { height } = Dimensions.get("window");
import { useTheme } from "../context/ThemeContext";


//#region  B4Translation
// const DarkDiscover = () => {
//   const navigation = useNavigation();
//   const [searchActive, setSearchActive] = React.useState(false);

//   const handleSearchClick = () => {
//     setSearchActive(true);
//   };

//   const handleGoBack = () => {
//     setSearchActive(false);
//   };

//   if (searchActive) {
//     return (
//       <View style={styles.darkSearchTypeKeyword}>
//         <View style={styles.autoLayoutVertical}>
//           <View style={styles.stateactiveDarktrueCompo}>
//             <Pressable style={styles.goback} onPress={handleGoBack}>
//               <Image
//                 style={styles.icon}
//                 resizeMode="cover"
//                 source={require("../assets/iconlyregularoutlinearrow--left1.png")}
//               />
//             </Pressable>
//             <Text style={[styles.titleSection1, styles.buttonTypo]}>
//               Discover
//             </Text>
//           </View>
//           <View style={styles.inputContainer}>
//             <TextInput
//               style={styles.navbardefaultDarktrueCom}
//               placeholder="Search"
//               autoCapitalize="none"
//               backgroundColor="#23252B"
//               placeholderTextColor="#757575"
//               color="white"
//             />
//           </View>
//           <View style={styles.autoLayoutHorizontal1}>
//             <View style={styles.stateactiveDarktrueCompo}>
//               <Text style={styles.recent}>Recent</Text>
//             </View>
//             <Image
//               style={styles.darktrueComponentdividerIcon}
//               resizeMode="cover"
//               source={require("../assets/darktrue-componentdivider4.png")}
//             />
//           </View>
//         </View>
//         <View style={styles.noSearchHistoryContainer}>
//           <Text style={styles.recenthistory}>No search history available.</Text>
//         </View>
//       </View>
//     );
//   }

//   return (
//     <View style={styles.darkDiscover}>
//       <View
//         style={[
//           styles.navbardefaultDarktrueCom,
//           styles.autoLayoutHorizontal3FlexBox,
//         ]}
//       >
//         <View style={styles.autoLayoutHorizontal}>
//           <Image
//             style={[styles.typelogoDefaultComponentl, styles.gobackLayout]}
//             resizeMode="contain"
//             source={require("../assets/typelogo-default-componentlogo9.png")}
//           />
//         </View>
//         <Text style={styles.titleSection}>Discover</Text>
//         <TouchableOpacity activeOpacity={0.0} onPress={handleSearchClick}>
//           <Image
//             style={[styles.autoLayoutHorizontal1, styles.gobackLayout1]}
//             resizeMode="contain"
//             source={require("../assets/auto-layout-horizontal5.png")}
//           />
//         </TouchableOpacity>
//       </View>
//       <ScrollView style={styles.container}>
//         <View style={styles.darkDiscover}>
//           <View
//             style={[styles.autoLayoutVertical, styles.autoLayoutVerticalPosition]}
//           >
//             <ScrollView
//               style={styles.autoLayoutHorizontal2}
//               horizontal={false}
//               showsVerticalScrollIndicator={true}
//               showsHorizontalScrollIndicator={false}
//               contentContainerStyle={styles.autoLayoutHorizontal2Content}
//             >
//               <View style={styles.autoLayoutVertical1}>
//                 <TouchableOpacity
//                   activeOpacity={0.0}
//                   onPress={() => navigation.navigate("DarkArtworkPostDetails")}
//                 >
//                   <Image
//                     style={styles.artworkLayout1}
//                     resizeMode="contain"
//                     source={require("../assets/artwork-ratio1--1-artwork-sizemedium-componentartwork-ratio--size25.png")}
//                   />
//                 </TouchableOpacity>
//                 <TouchableOpacity
//                   activeOpacity={0.0}
//                   onPress={() => navigation.navigate("DarkArtworkPostDetails")}
//                 >
//                   <Image
//                     style={[styles.artworkRatio34ArtworkS, styles.artworkLayout2]}
//                     resizeMode="contain"
//                     source={require("../assets/artwork-ratio3--4-artwork-sizemedium-componentartwork-ratio--size6.png")}
//                   />
//                 </TouchableOpacity>
//                 <TouchableOpacity
//                   activeOpacity={0.0}
//                   onPress={() => navigation.navigate("DarkArtworkPostDetails")}
//                 >
//                   <Image
//                     style={[styles.artworkRatio916Artwork, styles.artworkLayout]}
//                     resizeMode="contain"
//                     source={require("../assets/artwork-ratio9--16-artwork-sizemedium-componentartwork-ratio--size5.png")}
//                   />
//                 </TouchableOpacity>
//               </View>
//               <View style={styles.autoLayoutVertical2}>
//                 <TouchableOpacity
//                   activeOpacity={0.0}
//                   onPress={() => navigation.navigate("DarkArtworkPostDetails")}
//                 >
//                   <Image
//                     style={styles.artworkLayout}
//                     resizeMode="contain"
//                     source={require("../assets/artwork-ratio9--16-artwork-sizemedium-componentartwork-ratio--size6.png")}
//                   />
//                 </TouchableOpacity>
//                 <TouchableOpacity
//                   activeOpacity={0.0}
//                   onPress={() => navigation.navigate("DarkArtworkPostDetails")}
//                 >
//                   <Image
//                     style={[styles.artworkRatio11ArtworkS1, styles.artworkLayout1]}
//                     resizeMode="contain"
//                     source={require("../assets/artwork-ratio1--1-artwork-sizemedium-componentartwork-ratio--size28.png")}
//                   />
//                 </TouchableOpacity>
//                 <TouchableOpacity
//                   activeOpacity={0.0}
//                   onPress={() => navigation.navigate("DarkArtworkPostDetails")}
//                 >
//                   <Image
//                     style={[styles.artworkRatio23ArtworkS, styles.artworkLayout2]}
//                     resizeMode="contain"
//                     source={require("../assets/artwork-ratio2--3-artwork-sizemedium-componentartwork-ratio--size5.png")}
//                   />
//                 </TouchableOpacity>
//               </View>
//             </ScrollView>
//           </View>
//         </View>
//       </ScrollView>
//       <View
//         style={[
//           styles.activeMenudiscoverDarktru,
//           styles.autoLayoutVerticalPosition,
//         ]}
//       >
//         <View
//           style={[
//             styles.autoLayoutHorizontal3,
//             styles.autoLayoutHorizontal3FlexBox,
//           ]}
//         >
//           <TouchableOpacity
//             style={styles.autoLayoutVertical7}
//             activeOpacity={0.0}
//             onPress={() => navigation.navigate("HomeScreen")}
//           >
//             <Image
//               style={styles.iconlyregularoutlinearrowLayout}
//               resizeMode="cover"
//               source={require("../assets/iconlycurvedoutlinehome.png")}
//             />
//             <Text style={[styles.home, styles.homeTypo]}>Home</Text>
//           </TouchableOpacity>

//           <TouchableOpacity
//             style={styles.autoLayoutVertical8}
//             activeOpacity={0.0}
//             onPress={() => navigation.navigate("DarkDiscover")}
//           >
//             <Image
//               style={styles.iconlyregularoutlinearrowLayout}
//               resizeMode="cover"
//               source={require("../assets/Discovery.png")}
//             />
//             <Text style={[styles.discover, styles.homeTypo]}>Discover</Text>
//           </TouchableOpacity>

//           <TouchableOpacity
//             style={styles.autoLayoutVertical8}
//             activeOpacity={0.0}
//             onPress={() => navigation.navigate("DarkAIToolbox")}
//           >
//             <Image
//               style={styles.iconlyregularoutlinearrowLayout}
//               resizeMode="cover"
//               source={require("../assets/iconlycurvedlightcategory.png")}
//             />
//             <Text style={[styles.discover, styles.homeTypo]}>AI Toolbox</Text>
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={styles.autoLayoutVertical8}
//             activeOpacity={0.0}
//             onPress={() => navigation.navigate("DarkProfileFullPage")}
//           >
//             <Image
//               style={styles.iconlyregularoutlinearrowLayout}
//               resizeMode="cover"
//               source={require("../assets/iconlyregularoutlineprofile.png")}
//             />
//             <Text style={[styles.discover, styles.homeTypo]}>Profile</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </View>
//   );
// };
//#endregion

const DarkDiscover = () => {
  const { t } = useTranslation();
  const navigation = useNavigation();
  const [searchActive, setSearchActive] = React.useState(false);
  const { theme, toggleTheme, isDarkMode } = useTheme();

  const handleSearchClick = () => {
    setSearchActive(true);
  };

  const handleGoBack = () => {
    setSearchActive(false);
  };

  if (searchActive) {
    return (
      <View style={[styles.darkSearchTypeKeyword, { backgroundColor: theme.background }]}>
        <View style={styles.autoLayoutVertical}>
          <View style={styles.stateactiveDarktrueCompo}>
            <Pressable style={styles.goback} onPress={handleGoBack}>
              <Image
                style={styles.icon}
                resizeMode="cover"
                source={isDarkMode ? require("../assets/iconlyregularoutlinearrow--left1.png") : require("../assets/blackarrow.png")}
              />
            </Pressable>
            <Text style={[styles.titleSection1, styles.buttonTypo, { color: theme.text }]}>
              {t('Discover')}
            </Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput style={[styles.navbardefaultDarktrueCom, { color: theme.text },{ backgroundColor: theme.promptbackground }]}
              placeholder={t('Search')}
              autoCapitalize="none"
              placeholderTextColor="#757575"
            />
          </View>
          <View style={styles.autoLayoutHorizontal1}>
            <View style={styles.stateactiveDarktrueCompo}>
              <Text style={[styles.recent,{ color: theme.text }]}>{t('Recent')}</Text>
            </View>
            <Image
              style={styles.darktrueComponentdividerIcon}
              resizeMode="cover"
              source={require("../assets/darktrue-componentdivider4.png")}
            />
          </View>
        </View>
        <View style={styles.noSearchHistoryContainer}>
          <Text style={[styles.recenthistory,{ color: theme.text }]}>{t('No search history available.')}</Text>
        </View>
      </View>
    );
  }

  return (
    <View style={[styles.darkDiscover,{ backgroundColor: theme.background }]}>
      <View
        style={[
          styles.navbardefaultDarktrueCom,
          styles.autoLayoutHorizontal3FlexBox,
        ]}
      >
        <View style={styles.autoLayoutHorizontal}>
          <Image
            style={[styles.typelogoDefaultComponentl, styles.gobackLayout]}
            resizeMode="contain"
            source={require("../assets/typelogo-default-componentlogo9.png")}
          />
        </View>
        <Text style={[styles.titleSection,{ color: theme.text }]}>{t('Discover')}</Text>
        <TouchableOpacity activeOpacity={0.0} onPress={handleSearchClick}>
          <Image
            style={[styles.autoLayoutHorizontal1, styles.gobackLayout1]}
            resizeMode="contain"
            source={isDarkMode ? require("../assets/auto-layout-horizontal5.png") : require("../assets/blacksearch.png")}
          />
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.container}>
        <View style={styles.darkDiscover}>
          <View
            style={[styles.autoLayoutVertical, styles.autoLayoutVerticalPosition]}
          >
            <ScrollView
              style={styles.autoLayoutHorizontal2}
              horizontal={false}
              showsVerticalScrollIndicator={true}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.autoLayoutHorizontal2Content}
            >
              <View style={styles.autoLayoutVertical1}>
                <TouchableOpacity
                  activeOpacity={0.0}
                  onPress={() => navigation.navigate("DarkArtworkPostDetails")}
                >
                  <Image
                    style={styles.artworkLayout1}
                    resizeMode="contain"
                    source={require("../assets/artwork-ratio1--1-artwork-sizemedium-componentartwork-ratio--size25.png")}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={0.0}
                  onPress={() => navigation.navigate("DarkArtworkPostDetails")}
                >
                  <Image
                    style={[styles.artworkRatio34ArtworkS, styles.artworkLayout2]}
                    resizeMode="contain"
                    source={require("../assets/artwork-ratio3--4-artwork-sizemedium-componentartwork-ratio--size6.png")}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={0.0}
                  onPress={() => navigation.navigate("DarkArtworkPostDetails")}
                >
                  <Image
                    style={[styles.artworkRatio916Artwork, styles.artworkLayout]}
                    resizeMode="contain"
                    source={require("../assets/artwork-ratio9--16-artwork-sizemedium-componentartwork-ratio--size5.png")}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.autoLayoutVertical2}>
                <TouchableOpacity
                  activeOpacity={0.0}
                  onPress={() => navigation.navigate("DarkArtworkPostDetails")}
                >
                  <Image
                    style={styles.artworkLayout}
                    resizeMode="contain"
                    source={require("../assets/artwork-ratio9--16-artwork-sizemedium-componentartwork-ratio--size6.png")}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={0.0}
                  onPress={() => navigation.navigate("DarkArtworkPostDetails")}
                >
                  <Image
                    style={[styles.artworkRatio11ArtworkS1, styles.artworkLayout1]}
                    resizeMode="contain"
                    source={require("../assets/artwork-ratio1--1-artwork-sizemedium-componentartwork-ratio--size28.png")}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={0.0}
                  onPress={() => navigation.navigate("DarkArtworkPostDetails")}
                >
                  <Image
                    style={[styles.artworkRatio23ArtworkS, styles.artworkLayout2]}
                    resizeMode="contain"
                    source={require("../assets/artwork-ratio2--3-artwork-sizemedium-componentartwork-ratio--size5.png")}
                  />
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
        </View>
      </ScrollView>
      <View
        style={[
          styles.activeMenudiscoverDarktru,
          styles.autoLayoutVerticalPosition, { backgroundColor: theme.background }
        ]}
      >
        <View
          style={[
            styles.autoLayoutHorizontal3,
            styles.autoLayoutHorizontal3FlexBox,
          ]}
        >
          <TouchableOpacity
            style={styles.autoLayoutVertical7}
            activeOpacity={0.0}
            onPress={() => navigation.navigate("HomeScreen")}
          >
            <Image
              style={styles.iconlyregularoutlinearrowLayout}
              resizeMode="cover"
              source={require("../assets/iconlycurvedoutlinehome.png")}
            />
            <Text style={[styles.home, styles.homeTypo]}>{t('Home')}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.autoLayoutVertical8}
            activeOpacity={0.0}
            onPress={() => navigation.navigate("DarkDiscover")}
          >
            <Image
              style={styles.iconlyregularoutlinearrowLayout}
              resizeMode="cover"
              source={isDarkMode ? require("../assets/Discovery.png") : require("../assets/Discoverylight.png")}
            />
            <Text style={[styles.discover, styles.homeTypo, { color: theme.icontext }]}>{t('Discover')}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.autoLayoutVertical8}
            activeOpacity={0.0}
            onPress={() => navigation.navigate("DarkAIToolbox")}
          >
            <Image
              style={styles.iconlyregularoutlinearrowLayout}
              resizeMode="cover"
              source={require("../assets/iconlycurvedlightcategory.png")}
            />
            <Text style={[styles.discover, styles.homeTypo]}>{t('AI Toolbox')}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.autoLayoutVertical8}
            activeOpacity={0.0}
            onPress={() => navigation.navigate("DarkProfileFullPage")}
          >
            <Image
              style={styles.iconlyregularoutlinearrowLayout}
              resizeMode="cover"
              source={require("../assets/iconlyregularoutlineprofile.png")}
            />
            <Text style={[styles.discover, styles.homeTypo]}>{t('Profile')}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconlyregularoutlinearrowLayout: {
    width: 24,
    height: 24,
  },
  autoLayoutVertical7: {
    alignItems: "center",
    flex: 1,
  },
  autoLayoutVertical8: {
    marginLeft: 19,
    alignItems: "center",
    flex: 1,
  },
  discover: {
    fontWeight: "500",
    fontFamily: FontFamily.bodyXSmallMedium,
    color: Color.greyscale500,
  },
  autoLayoutHorizontal2Content: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  autoLayoutVerticalPosition: {
    left: 0,
    right: 0,
    position: "absolute",
  },
  autoLayoutHorizontal3FlexBox: {
    flexDirection: "row",
    height: 48,
    alignItems: "center",
    alignSelf: "stretch",
  },
  gobackLayout: {
    height: 28,
    width: 28,
  },
  gobackLayout1: {
    height: 22,
    width: 22,
  },
  artworkLayout2: {
    maxWidth: "100%",
    alignSelf: "stretch",
    overflow: "hidden",
    width: "100%",
  },
  artworkLayout: {
    height: 325,
    maxWidth: "100%",
    borderRadius: Border.br_xs,
    alignSelf: "stretch",
    overflow: "hidden",
    width: "100%",
  },
  artworkLayout1: {
    height: 183,
    maxWidth: "100%",
    borderRadius: Border.br_xs,
    alignSelf: "stretch",
    overflow: "hidden",
    width: "100%",
  },
  homeTypo: {
    marginTop: 2,
    lineHeight: 16,
    fontSize: FontSize.bodyXSmallMedium_size,
    letterSpacing: 0,
    textAlign: "center",
    alignSelf: "stretch",
    fontWeight: "bold",
  },
  typelogoDefaultComponentl: {
    borderRadius: Border.br_341xl,
    marginLeft: "25%",
  },
  icon: {
    height: "100%",
    display: "none",
    width: "100%",
  },
  goback: {
    marginLeft: 16,
  },
  autoLayoutHorizontal: {
    width: 28,
    alignItems: "center",
    flexDirection: "row",
  },
  navbardefaultDarktrueCom: {
    flexDirection: "row",
    alignItems: "center",
    height: 48,
    paddingHorizontal: 16,
  },
  artworkRatio34ArtworkS: {
    height: 244,
    borderRadius: Border.br_xs,
    maxWidth: "100%",
  },
  autoLayoutVertical1: {
    flex: 1,
  },
  artworkRatio23ArtworkS: {
    height: 275,
    borderRadius: Border.br_xs,
    maxWidth: "100%",
  },
  autoLayoutVertical2: {
    marginLeft: 16,
    flex: 1,
  },
  autoLayoutHorizontal2: {
    marginTop: "1%",
    alignSelf: "stretch",
    flex: 1,
  },
  home: {
    fontWeight: "500",
    fontFamily: FontFamily.bodyXSmallMedium,
    color: Color.greyscale500,
  },
  autoLayoutHorizontal3: {
    justifyContent: "center",
    paddingHorizontal: 15,
    paddingVertical: 0,
    alignItems: "center",
  },
  homeIndicatorIcon: {
    height: 34,
  },
  activeMenudiscoverDarktru: {
    bottom: "0%",
    paddingTop: Padding.p_5xs,
    alignItems: "center",
    paddingBottom: Padding.p_5xs,
  },
  darkDiscover: {
    height: 850,
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
  darkSearchTypeKeyword: {
    flex: 1,
    width: "100%",
  },
  titleSection: {
    fontSize: FontSize.h4Bold_size,
    textAlign: "center",
    marginLeft: "30%",
    marginRight: "30%",
    fontFamily: FontFamily.bodyXSmallBold,
    fontWeight: "700",
    flex: 1,
  },
  titleSection1: {
    fontSize: FontSize.h4Bold_size,
    textAlign: "center",
    marginLeft: "30%",
    marginRight: "35%",
    fontFamily: FontFamily.bodyXSmallBold,
    fontWeight: "700",
    flex: 1,
  },
  buttonTypo: {
    textAlign: "center",
    fontFamily: FontFamily.bodyXSmallBold,
    fontWeight: "700",
  },
  recenthistory: {
    textAlign: "center",
  },
  navbardefaultDarktrueCom: {
    height: 48,
    justifyContent: "center",
    flexDirection: "row",
    alignSelf: "stretch",
    paddingVertical: Padding.p_xs,
    paddingHorizontal: "5%",
    borderRadius: Border.br_xs,
  },
  autoLayoutVertical: {
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: Padding.p_xs,
    width: "100%",
    alignItems: "center",
  },
  stateactiveDarktrueCompo: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
  goback: {
    width: 28,
    height: 28,
  },
  icon: {
    width: "100%",
    height: "100%",
  },
  inputContainer: {
    width: "100%",
    marginTop: "5%",
    position: "relative",
  },
  autoLayoutHorizontal1: {
    alignSelf: "stretch",
    alignItems: "center",
    marginRight: "2%",
  },
  recent: {
    fontSize: FontSize.h5Semibold_size,
    fontFamily: FontFamily.bodyMediumSemibold,
    fontWeight: "600",
    marginTop: "5%",
  },
  darktrueComponentdividerIcon: {
    marginTop: 10,
    width: "100%",
  },
  noSearchHistoryContainer: {
    width: "100%",
    height: height * 0.5,
  },
});

export default DarkDiscover;
