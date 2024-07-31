import * as React from "react";
import {
  Pressable,
  Image,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  ScrollView,
  Linking,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Padding, Border, FontSize, Color, FontFamily } from "../GlobalStyles";
import { useTranslation } from 'react-i18next';
import { useTheme } from "../context/ThemeContext";

const FollowUsOnSocialMedia = () => {
  const { t } = useTranslation();
  const navigation = useNavigation();
  const { theme, toggleTheme, isDarkMode } = useTheme();

  return (
    <View style={[styles.darkSettingsFollowUsOnSo,{ backgroundColor: theme.background }]}>
      <View style={styles.autoLayoutVertical}>
        <View style={styles.navbardefaultDarktrueCom}>
          <TouchableOpacity
            style={styles.autoLayoutHorizontal}
            activeOpacity={0.0}
            onPress={() => navigation.navigate("DarkSettings")}
          >
            <Image
              style={styles.typelogoDefaultComponentl}
              resizeMode="cover"
              source={require("../assets/typelogo-default-componentlogo4.png")}
            />
            <Pressable
              style={styles.gobackLayout}
              onPress={() => navigation.goBack()}
            >
              <Image
                style={styles.icon}
                resizeMode="cover"
                source={isDarkMode ? require("../assets/iconlyregularoutlinearrow--left.png") : require("../assets/blackarrow.png")}
              />
            </Pressable>
          </TouchableOpacity>
          <Text style={[styles.titleSection,{ color: theme.text }]}>{t('Follow us on Social Media')}</Text>
          <Image
            style={styles.gobackLayout}
            resizeMode="cover"
            source={require("../assets/auto-layout-horizontal.png")}
          />
        </View>
        <ScrollView
          style={styles.elementsfollowUsOnSocialM}
          showsVerticalScrollIndicator={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.elementsFollowUsOnSocialMContent}
        >
          <Pressable
            style={[styles.autoLayoutHorizontal2, styles.autoFlexBox]}
            onPress={() =>
              Linking.openURL(
                "https://reactnavigation.org/docs/drawer-based-navigation/"
              )
            }
          >
            <Image
              style={styles.frameIcon}
              resizeMode="cover"
              source={require("../assets/frame6.png")}
            />
            <Text style={[styles.twitter, styles.textTypo]}>Twitter</Text>
            <Image
              style={styles.iconlyregularoutlinearrow}
              resizeMode="cover"
              source={require("../assets/iconlyregularoutlinearrow--right-2.png")}
            />
          </Pressable>
          <Pressable style={[styles.autoLayoutHorizontal3, styles.autoFlexBox]}>
            <Image
              style={styles.frameIcon}
              resizeMode="cover"
              source={require("../assets/frame7.png")}
            />
            <Text style={[styles.twitter, styles.textTypo]}>Instagram</Text>
            <Image
              style={styles.iconlyregularoutlinearrow}
              resizeMode="cover"
              source={require("../assets/iconlyregularoutlinearrow--right-2.png")}
            />
          </Pressable>
          <Pressable style={[styles.autoLayoutHorizontal4, styles.autoFlexBox]}>
            <Image
              style={styles.frameIcon}
              resizeMode="cover"
              source={require("../assets/frame8.png")}
            />
            <Text style={[styles.twitter, styles.textTypo]}>Discord</Text>
            <Image
              style={styles.iconlyregularoutlinearrow}
              resizeMode="cover"
              source={require("../assets/iconlyregularoutlinearrow--right-2.png")}
            />
          </Pressable>
          <Pressable style={[styles.autoLayoutHorizontal5, styles.autoFlexBox]}>
            <Image
              style={styles.frameIcon}
              resizeMode="cover"
              source={require("../assets/frame9.png")}
            />
            <Text style={[styles.twitter, styles.textTypo]}>Reddit</Text>
            <Image
              style={styles.iconlyregularoutlinearrow}
              resizeMode="cover"
              source={require("../assets/iconlyregularoutlinearrow--right-2.png")}
            />
          </Pressable>
          <Pressable style={[styles.autoLayoutHorizontal6, styles.autoFlexBox]}>
            <Image
              style={styles.frameIcon}
              resizeMode="cover"
              source={require("../assets/frame10.png")}
            />
            <Text style={[styles.twitter, styles.textTypo]}>Telegram</Text>
            <Image
              style={styles.iconlyregularoutlinearrow}
              resizeMode="cover"
              source={require("../assets/iconlyregularoutlinearrow--right-2.png")}
            />
          </Pressable>
          <Pressable style={[styles.autoLayoutHorizontal7, styles.autoFlexBox]}>
            <Image
              style={styles.frameIcon}
              resizeMode="cover"
              source={require("../assets/frame11.png")}
            />
            <Text style={[styles.twitter, styles.textTypo]}>YouTube</Text>
            <Image
              style={styles.iconlyregularoutlinearrow}
              resizeMode="cover"
              source={require("../assets/iconlyregularoutlinearrow--right-2.png")}
            />
          </Pressable>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  elementsFollowUsOnSocialMContent: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  autoFlexBox: {
    padding: Padding.p_xl,
    borderRadius: Border.br_xs,
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  textTypo: {
    textAlign: "left",
    letterSpacing: 0,
    fontSize: FontSize.bodyLargeBold_size,
    color: Color.skyWhite,
  },
  groupIconPosition: {
    top: "50%",
    position: "absolute",
  },
  typelogoDefaultComponentl: {
    borderRadius: Border.br_341xl,
    display: "none",
    height: 28,
    width: 28,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  gobackLayout: {
    height: 28,
    width: 28,
    bottom: "35%"
  },
  autoLayoutHorizontal: {
    width: 28,
    alignItems: "center",
    flexDirection: "row",
  },
  titleSection: {
    fontSize: FontSize.h4Bold_size,
    textAlign: "center",
    color: Color.skyWhite,
    fontFamily: FontFamily.bodyXSmallBold,
    fontWeight: "700",
    marginLeft: "5%",
    flex: 1,
    marginBottom: "5%"
  },
  navbardefaultDarktrueCom: {
    height: 48,
    paddingHorizontal: 0,
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  frameIcon: {
    width: 32,
    height: 32,
    overflow: "hidden",
  },
  twitter: {
    lineHeight: 22,
    marginLeft: 12,
    fontFamily: FontFamily.bodyXSmallBold,
    fontWeight: "700",
    letterSpacing: 0,
    fontSize: FontSize.bodyLargeBold_size,
    flex: 1,
  },
  iconlyregularoutlinearrow: {
    width: 24,
    height: 24,
    marginLeft: 12,
  },
  autoLayoutHorizontal2: {
    backgroundColor: Color.colorCornflowerblue,
  },
  autoLayoutHorizontal3: {
    backgroundColor: Color.othersPink,
    marginTop: 24,
  },
  autoLayoutHorizontal4: {
    backgroundColor: Color.colorRoyalblue,
    marginTop: 24,
  },
  autoLayoutHorizontal5: {
    backgroundColor: Color.colorOrangered,
    marginTop: 24,
  },
  autoLayoutHorizontal6: {
    backgroundColor: Color.colorDeepskyblue,
    marginTop: 24,
  },
  autoLayoutHorizontal7: {
    backgroundColor: Color.colorTomato_100,
    marginTop: 24,
  },
  elementsfollowUsOnSocialM: {
    marginTop: 24,
    alignSelf: "stretch",
    flex: 1,
  },
  autoLayoutVertical: {
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: Padding.p_xs,
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
    lineHeight: 26,
    fontWeight: "600",
    fontFamily: FontFamily.bodyMediumSemibold,
    textAlign: "left",
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
  darkSettingsFollowUsOnSo: {
    height: 932,
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default FollowUsOnSocialMedia;
