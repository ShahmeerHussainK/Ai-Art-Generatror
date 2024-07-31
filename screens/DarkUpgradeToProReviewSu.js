import * as React from "react";
import { useState } from "react";
import {
  Pressable,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, Padding, Border, FontSize } from "../GlobalStyles";
import DarkUpgradeToProSuccessful from "./DarkUpgradeToProSuccessful";
import { useTranslation } from 'react-i18next';

const DarkUpgradeToProReviewSu = () => {
  const { t } = useTranslation();
  const navigation = useNavigation();
  const [isModalVisible, setModalVisible] = useState(false);

  const handleCloseModal = () => {
    setModalVisible(false);
    navigation.navigate("HomeScreen");
  };
  const toggleModal = async () => {
    console.log("toggling modal")
    setModalVisible(true); 
  };

  return (
    <View
      style={[
        styles.darkUpgradeToProReviewSu,
        styles.darkUpgradeToProReviewSuLayout,
      ]}
    >
      <View style={styles.autoLayoutVertical}>
        <View style={[styles.navbardefaultDarktrueCom, styles.autoFlexBox]}>
          <Pressable style={styles.autoLayoutHorizontal}>
            <Image
              style={[styles.typelogoDefaultComponentl, styles.gobackLayout]}
              resizeMode="cover"
              source={require("../assets/typelogo-default-componentlogo4.png")}
            />
            <Pressable
              style={[styles.gobackLayout]}
              onPress={() => navigation.goBack()}
            >
              <Image
                style={styles.icon}
                resizeMode="cover"
                source={require("../assets/goback.png")}
              />
            </Pressable>
          </Pressable>
          <Text style={[styles.titleSection, styles.titleTypo]}>
            {t('Review Summary')}
          </Text>
          <Image
            style={[styles.autoLayoutHorizontal1, styles.gobackLayout]}
            resizeMode="cover"
            source={require("../assets/auto-layout-horizontal.png")}
          />
        </View>
        <View
          style={[
            styles.elementsreviewSummaryDark,
            styles.buttonpillTypepillIconfFlexBox,
          ]}
        >
          <View style={[styles.autoLayoutVertical1, styles.autoBorder]}>
            <View style={[styles.autoLayoutHorizontal2, styles.autoFlexBox]}>
              <Text style={[styles.subscription, styles.text4Layout]}>
                {t('Subscription')}
              </Text>
              <Text style={[styles.months, styles.text5Typo]}> {t('6 months')}</Text>
            </View>
            <View
              style={[
                styles.autoLayoutHorizontal3,
                styles.autoLayoutHorizontal3SpaceBlock,
              ]}
            >
              <Text style={[styles.subscription, styles.text4Layout]}>
                {t('Price')}
              </Text>
              <Text style={[styles.months, styles.text5Typo]}>$24.00</Text>
            </View>
          </View>
          <View style={[styles.autoLayoutVertical2, styles.autoSpaceBlock]}>
            <View style={[styles.autoLayoutHorizontal2, styles.autoFlexBox]}>
              <Text style={[styles.subscription, styles.text4Layout]}>
                {t('Amount')}
              </Text>
              <Text style={[styles.months, styles.text5Typo]}>$24.00</Text>
            </View>
            <View
              style={[
                styles.autoLayoutHorizontal3,
                styles.autoLayoutHorizontal3SpaceBlock,
              ]}
            >
              <Text style={[styles.subscription, styles.text4Layout]}>{t('Tax')}</Text>
              <Text style={[styles.months, styles.text5Typo]}>$1.00</Text>
            </View>
            <Image
              style={[
                styles.darktrueComponentdividerIcon,
                styles.autoLayoutHorizontal3SpaceBlock,
              ]}
              resizeMode="cover"
              source={require("../assets/darktrue-componentdivider5.png")}
            />
            <View
              style={[
                styles.autoLayoutHorizontal3,
                styles.autoLayoutHorizontal3SpaceBlock,
              ]}
            >
              <Text style={[styles.subscription, styles.text4Layout]}>
                {t('Total Amount')}
              </Text>
              <Text style={[styles.months, styles.text5Typo]}>$25.00</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.buttonprimaryDarktrueCom}>
        <TouchableOpacity
          style={[
            styles.buttonpillTypepillIconf,
            styles.buttonpillTypepillIconfFlexBox,
          ]}
          activeOpacity={0.0}
          onPress={toggleModal}
        >
          <Text style={[styles.button, styles.text5Layout]}>
            {t('Confirm Payment')}
          </Text>
        </TouchableOpacity>
      </View>
      <DarkUpgradeToProSuccessful isVisible={isModalVisible}  onClose={handleCloseModal} />
    </View>
  );
};

const styles = StyleSheet.create({
  darkUpgradeToProReviewSuLayout: {
    overflow: "hidden",
    width: "100%",
  },
  autoFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  gobackLayout: {
    height: 28,
    width: 28,
  },
  titleTypo: {
    color: Color.skyWhite,
    fontFamily: FontFamily.bodyXSmallBold,
    fontWeight: "700",
  },
  buttonpillTypepillIconfFlexBox: {
    justifyContent: "center",
    alignSelf: "stretch",
  },
  autoBorder: {
    padding: Padding.p_xl,
    borderWidth: 1,
    borderColor: Color.colorDarkslategray_200,
    borderStyle: "solid",
    backgroundColor: Color.darkDark3,
    borderRadius: Border.br_xs,
    justifyContent: "center",
  },
  text4Layout: {
    lineHeight: 29,
    fontSize: FontSize.bodyXLargeBold_size,
  },
  text5Typo: {
    fontFamily: FontFamily.bodyMediumSemibold,
    fontWeight: "600",
    letterSpacing: 0,
    color: Color.skyWhite,
  },
  autoLayoutHorizontal3SpaceBlock: {
    marginTop: 16,
    alignSelf: "stretch",
  },
  autoSpaceBlock: {
    marginTop: 20,
    alignSelf: "stretch",
  },
  changeTypo: {
    color: Color.primary900,
    letterSpacing: 0,
    fontFamily: FontFamily.bodyXSmallBold,
    fontWeight: "700",
    marginLeft: 16,
  },
  text5Layout: {
    lineHeight: 26,
    fontSize: FontSize.bodyLargeBold_size,
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
    height: "100%",
    width: "100%",
    bottom: "35%",
    marginLeft: "-55%",
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
    fontSize: FontSize.h4Bold_size,
    textAlign: "center",
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
  subscription: {
    fontWeight: "500",
    fontFamily: FontFamily.bodyXSmallMedium,
    color: Color.greyscale300,
    textAlign: "left",
    letterSpacing: 0,
  },
  months: {
    textAlign: "right",
    marginLeft: 6,
    lineHeight: 29,
    fontSize: FontSize.bodyXLargeBold_size,
    flex: 1,
  },
  autoLayoutHorizontal2: {
    alignItems: "center",
    alignSelf: "stretch",
  },
  autoLayoutHorizontal3: {
    alignItems: "center",
    flexDirection: "row",
  },
  autoLayoutVertical1: {
    alignSelf: "stretch",
  },
  darktrueComponentdividerIcon: {
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
    width: "100%",
  },
  autoLayoutVertical2: {
    padding: Padding.p_xl,
    borderWidth: 1,
    borderColor: Color.colorDarkslategray_200,
    borderStyle: "solid",
    backgroundColor: Color.darkDark3,
    borderRadius: Border.br_xs,
    justifyContent: "center",
  },
  title: {
    fontSize: FontSize.h5Semibold_size,
    lineHeight: 32,
    textAlign: "left",
    flex: 1,
  },
  viewAll: {
    lineHeight: 26,
    fontSize: FontSize.bodyLargeBold_size,
    textAlign: "left",
    display: "none",
  },
  iconlyregularoutlinearrow: {
    width: 24,
    height: 24,
    marginLeft: 16,
    display: "none",
  },
  typedefaultComponentavatarIcon: {
    width: 60,
    height: 60,
  },
  text4: {
    textAlign: "justify",
    color: Color.skyWhite,
    fontFamily: FontFamily.bodyXSmallBold,
    fontWeight: "700",
    marginLeft: 16,
    flex: 1,
  },
  change: {
    lineHeight: 29,
    fontSize: FontSize.bodyXLargeBold_size,
    textAlign: "center",
  },
  iconlyregularoutlinearrow2: {
    width: 20,
    height: 20,
    marginLeft: 16,
    display: "none",
  },
  typevisaSelectedfalseDar: {
    paddingLeft: Padding.p_xl,
    paddingTop: Padding.p_base,
    paddingRight: Padding.p_5xl,
    paddingBottom: Padding.p_base,
    borderWidth: 1,
    backgroundColor: Color.darkDark3,
    borderRadius: Border.br_xs,
    marginTop: 20,
    borderColor: Color.colorDarkslategray_200,
    borderStyle: "solid",
    alignItems: "center",
    flexDirection: "row",
  },
  elementsreviewSummaryDark: {
    marginTop: 24,
  },
  autoLayoutVertical: {
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_5xl,
    left: 0,
    right: 0,
    position: "absolute",
  },
  button: {
    letterSpacing: 0,
    textAlign: "center",
    color: Color.skyWhite,
    fontFamily: FontFamily.bodyXSmallBold,
    fontWeight: "700",
    alignSelf: "stretch",
  },
  buttonpillTypepillIconf: {
    borderRadius: Border.br_81xl,
    backgroundColor: Color.primary900,
    padding: Padding.p_base,
    alignItems: "center",
  },
  buttonprimaryDarktrueCom: {
    bottom: 0,
    borderTopWidth: 1,
    paddingTop: Padding.p_5xl,
    paddingBottom: Padding.p_17xl,
    borderColor: Color.colorDarkslategray_200,
    borderStyle: "solid",
    paddingHorizontal: Padding.p_5xl,
    left: 0,
    right: 0,
    position: "absolute",
    backgroundColor: Color.darkDarkbg,
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
  text5: {
    marginTop: -13,
    left: 23,
    lineHeight: 26,
    fontSize: FontSize.bodyLargeBold_size,
    fontFamily: FontFamily.bodyMediumSemibold,
    fontWeight: "600",
    letterSpacing: 0,
    color: Color.skyWhite,
    textAlign: "left",
  },
  typestatusBarThemedarkC: {
    top: 0,
    height: 44,
    left: 0,
    right: 0,
    position: "absolute",
  },
  darkUpgradeToProReviewSu: {
    height: 932,
    flex: 1,
    backgroundColor: Color.darkDarkbg,
    overflow: "hidden",
  },
});

export default DarkUpgradeToProReviewSu;
