import * as React from "react";
import {
  Pressable,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Padding, Border } from "../GlobalStyles";
import { RadioButton } from 'react-native-paper';
import { useTranslation } from 'react-i18next';

const DarkUpgradeToProChoosePlan = () => {
  const { t } = useTranslation();
  const [selectedPlan, setSelectedPlan] = useState('first');

  const navigation = useNavigation();

  return (
    <View style={styles.darkUpgradeToProChoosePl}>
      <View style={styles.navbardefaultDarktrueCom}>
        <Pressable style={styles.autoLayoutHorizontal}>
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
              source={require("../assets/goback.png")}
            />
          </Pressable>
        </Pressable>
        <Text style={[styles.titleSection, styles.buttonTypo]}>
          {t('Choose Your Plan')}
        </Text>
        <Image
          style={styles.gobackLayout}
          resizeMode="cover"
          source={require("../assets/auto-layout-horizontal.png")}
        />
      </View>
      <ScrollView>
        <Pressable style={styles.darkUpgradeToProChoosePl}>
          <View style={styles.autoLayoutVertical}>
            <View style={styles.autoLayoutVertical1}>
              <Pressable
                style={[
                  styles.elementschooseFlexBox,
                  selectedPlan === 'first' && styles.selectedBox,
                ]}
                onPress={() => setSelectedPlan('first')}
              >
                <View
                  style={[
                    styles.autoLayoutVertical2,
                    styles.autoLayoutVertical2FlexBox,
                  ]}
                >
                  <Text style={[styles.months, styles.textClr]}>{t('1 Month')}</Text>
                  <Text style={styles.youSave00}>{t('Pro access for 1 month')}</Text>
                </View>
                <Text style={[styles.text, styles.textClr]}>$5.00</Text>
                <RadioButton
                  style={styles.stylenoneThemedefaultSel}
                  color="#6949ff"
                  value="first"
                  status={selectedPlan === 'first' ? 'checked' : 'unchecked'}
                />
              </Pressable>
              <Pressable
                style={[
                  styles.elementschooseYourPlanUn1,
                  styles.elementschooseFlexBox,
                  selectedPlan === 'second' && styles.selectedBox,
                ]}
                onPress={() => setSelectedPlan('second')}
              >
                <View
                  style={[
                    styles.autoLayoutVertical2,
                    styles.autoLayoutVertical2FlexBox,
                  ]}
                >
                  <Text style={[styles.months, styles.textClr]}>{t('3 Months')}</Text>
                  <Text style={styles.youSave00}>{t('You save 10%')}</Text>
                </View>
                <Text style={[styles.text, styles.textClr]}>$14.00</Text>
                <RadioButton
                  style={styles.stylenoneThemedefaultSel}
                  color="#6949ff"
                  value="second"
                  status={selectedPlan === 'second' ? 'checked' : 'unchecked'}
                />
              </Pressable>
              <Pressable
                style={[
                  styles.elementschooseYourPlanUn1,
                  styles.elementschooseFlexBox,
                  selectedPlan === 'third' && styles.selectedBox,
                ]}
                onPress={() => setSelectedPlan('third')}
              >
                <View
                  style={[
                    styles.autoLayoutVertical2,
                    styles.autoLayoutVertical2FlexBox,
                  ]}
                >
                  <Text style={[styles.months, styles.textClr]}>{t('6 Months')}</Text>
                  <Text style={styles.youSave00}>{t('You save 20%')}</Text>
                </View>
                <Text style={[styles.text, styles.textClr]}>$24.00</Text>
                <RadioButton
                  style={[styles.stylenoneThemedefaultSel]}
                  color="#6949ff"
                  value="third"
                  status={selectedPlan === 'third' ? 'checked' : 'unchecked'}
                />
              </Pressable>
              <Pressable
                style={[
                  styles.elementschooseYourPlanUn1,
                  styles.elementschooseFlexBox,
                  selectedPlan === 'fourth' && styles.selectedBox,
                ]}
                onPress={() => setSelectedPlan('fourth')}
              >
                <View
                  style={[
                    styles.autoLayoutVertical2,
                    styles.autoLayoutVertical2FlexBox,
                  ]}
                >
                  <Text style={[styles.months, styles.textClr]}>{t('12 Months')}</Text>
                  <Text style={styles.youSave00}>{t('You save 30%')}</Text>
                </View>
                <Text style={[styles.text, styles.textClr]}>$40.00</Text>
                <RadioButton
                  style={styles.stylenoneThemedefaultSel}
                  color="#6949ff"
                  value="fourth"
                  status={selectedPlan === 'fourth' ? 'checked' : 'unchecked'}
                />
              </Pressable>
              <Pressable
                style={[
                  styles.elementschooseYourPlanUn1,
                  styles.elementschooseFlexBox,
                  selectedPlan === 'fifth' && styles.selectedBox,
                ]}
                onPress={() => setSelectedPlan('fifth')}
              >
                <View
                  style={[
                    styles.autoLayoutVertical2,
                    styles.autoLayoutVertical2FlexBox,
                  ]}
                >
                  <Text style={[styles.months, styles.textClr]}>{t('Lifetime')}</Text>
                  <Text style={styles.youSave00}>{t('Limited time and offer')}</Text>
                </View>
                <Text style={[styles.text, styles.textClr]}>$120.00</Text>
                <RadioButton
                  style={styles.stylenoneThemedefaultSel}
                  color="#6949ff"
                  value="fifth"
                  status={selectedPlan === 'fifth' ? 'checked' : 'unchecked'}
                />
              </Pressable>
            </View>
          </View>
        </Pressable>
      </ScrollView>
      <View style={styles.buttonprimaryDarktrueCom}>
        <TouchableOpacity
          style={[
            styles.buttonpillTypepillIconf,
            styles.autoLayoutVertical2FlexBox,
          ]}
          activeOpacity={0.0}
          onPress={() => navigation.navigate("DarkUpgradeToProReviewSu")}
        >
          <Text style={[styles.button, styles.text5Layout]}>{t('Continue')}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonTypo: {
    textAlign: "center",
    fontFamily: FontFamily.bodyXSmallBold,
    fontWeight: "700",
  },
  autoLayoutVertical2FlexBox: {
    justifyContent: "center",
    alignSelf: "stretch",
  },
  textClr: {
    color: Color.skyWhite,
    lineHeight: 38,
    fontSize: FontSize.h4Bold_size,
  },
  elementschooseFlexBox: {
    paddingVertical: Padding.p_base,
    paddingHorizontal: Padding.p_xl,
    backgroundColor: Color.darkDark3,
    borderRadius: Border.br_xs,
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  selectedBox: {
    borderColor: Color.primary900,
    borderWidth: 2,
  },
  text5Layout: {
    lineHeight: 26,
    fontSize: FontSize.bodyLargeBold_size,
    letterSpacing: 0,
    color: Color.skyWhite,
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
    marginLeft: "30%"
  },
  gobackLayout: {
    height: 28,
    width: 28,
  },
  autoLayoutHorizontal: {
    width: 28,
    alignItems: "center",
    flexDirection: "row",
  },
  titleSection: {
    color: Color.skyWhite,
    fontSize: FontSize.h4Bold_size,
    textAlign: "center",
    marginLeft: 16,
    flex: 1,
  },
  navbardefaultDarktrueCom: {
    flexDirection: "row",
    alignItems: "center",
    height: 48,
    paddingHorizontal: 16,
  },
  months: {
    textAlign: "left",
    fontFamily: FontFamily.bodyXSmallBold,
    fontWeight: "700",
    color: Color.skyWhite,
    lineHeight: 38,
    fontSize: FontSize.h4Bold_size,
    alignSelf: "stretch",
  },
  youSave00: {
    fontSize: FontSize.bodyMediumMedium_size,
    lineHeight: 22,
    fontWeight: "500",
    fontFamily: FontFamily.bodyXSmallMedium,
    color: Color.greyscale300,
    marginTop: 2,
    letterSpacing: 0,
    textAlign: "left",
    alignSelf: "stretch",
  },
  autoLayoutVertical2: {
    flex: 1,
  },
  text: {
    textAlign: "right",
    marginLeft: 24,
    marginRight: 24,
    fontFamily: FontFamily.bodyXSmallBold,
    fontWeight: "700",
    color: Color.skyWhite,
    lineHeight: 38,
    fontSize: FontSize.h4Bold_size,
  },
  stylenoneThemedefaultSel: {
    width: 24,
    height: 24,
    marginLeft: 24,
  },
  elementschooseYourPlanUn1: {
    marginTop: 24,
  },
  autoLayoutVertical1: {
    marginTop: 5,
    alignSelf: "stretch",
  },
  autoLayoutVertical: {
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
    borderColor: Color.colorDarkslategray_200,
    borderTopWidth: 1,
    paddingTop: Padding.p_5xl,
    paddingBottom: Padding.p_17xl,
    borderStyle: "solid",
    paddingHorizontal: Padding.p_5xl,
    left: 0,
    right: 0,
    position: "absolute",
    backgroundColor: Color.darkDarkbg,
  },
  darkUpgradeToProChoosePl: {
    height: 750,
    overflow: "hidden",
    width: "100%",
    flex: 1,
    backgroundColor: Color.darkDarkbg,
  },
});

export default DarkUpgradeToProChoosePlan;
