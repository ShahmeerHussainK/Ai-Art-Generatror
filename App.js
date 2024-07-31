const Stack = createNativeStackNavigator();
import * as React from "react";
import { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
import CreatePublicProfile from "./screens/CreatePublicProfile";
import EnterPersonalInfoStep from "./screens/EnterPersonalInfoStep";
import SignUp from "./screens/SignUp";
import CreateNewPassword from "./screens/CreateNewPassword";
import OTPCodeVerification from "./screens/OTPCodeVerification";
import ResetYourPassword from "./screens/ResetYourPassword";
import WelcomeScreen from "./screens/WelcomeScreen";
import SplashScreen from "./screens/SplashScreen";
import Walkthrough from "./screens/Walkthrough";
import SignIn from "./screens/SignIn";
import DarkSettingsLogoutModal from "./screens/DarkSettingsLogoutModal";
import DarkSettingsAboutArtify from "./screens/DarkSettingsAboutArtify";
import DarkSettingsPrivacyPolicy from "./screens/DarkSettingsPrivacyPolicy";
import FollowUsOnSocialMedia from "./screens/FollowUsOnSocialMedia";
import DarkSettingsLanguage from "./screens/DarkSettingsLanguage";
import DarkSettingsPersonalInfo from "./screens/DarkSettingsPersonalInfo";
import DarkUpgradeToProSuccessful from "./screens/DarkUpgradeToProSuccessful";
import UpgradeToProSummary from "./screens/UpgradeToProSummary";
import UpgradeToProChoosePlan from "./screens/UpgradeToProChoosePlan";
import DarkUpgradeToPro from "./screens/DarkUpgradeToPro";
import DarkSettings from "./screens/DarkSettings";
import DarkFollowers from "./screens/DarkFollowers";
import DarkFollowing from "./screens/DarkFollowing";
import DarkEditProfile from "./screens/DarkEditProfile";
import DarkProfileFullPage from "./screens/DarkProfileFullPage";
import SIgninSuccessful from "./screens/SIgninSuccessful";
import DarkBatchArtGeneratorFina from "./screens/DarkBatchArtGeneratorFina";
import DarkBatchArtGeneratorGene from "./screens/DarkBatchArtGeneratorGene";
import DarkBatchArtGeneratorFill from "./screens/DarkBatchArtGeneratorFill";
import GeneratingArtwork from "./screens/GeneratingArtwork";
import DarkLogoGenerator from "./screens/DarkLogoGenerator";
import RecolorImagesUploadPhoto from "./screens/RecolorImagesUploadPhoto";
import DarkImageToPaintingUpload from "./screens/DarkImageToPaintingUpload";
import DarkSketchToImagesUpload from "./screens/DarkSketchToImagesUpload";
import RealisticArtUploadPhoto from "./screens/RealisticArtUploadPhoto";
import FinalizeArtwork from "./screens/FinalizeArtwork";
import PhotoToAnimeUploadPhoto from "./screens/PhotoToAnimeUploadPhoto";
import UpscalePhotoUpload from "./screens/UpscalePhotoUpload";
import BackgroundRemovalPhotoUpload from "./screens/BackgroundRemovalPhotoUpload";
import DarkAnimeGenerator from "./screens/DarkAnimeGenerator";
import DarkAIToolbox from "./screens/DarkAIToolbox";
import DownloadSuccessful from "./screens/DownloadSuccessful";
import ReportingSuccessful from "./screens/ReportingSuccessful";
import DarkReport from "./screens/DarkReport";
import RemixModal from "./screens/RemixModal";
import DarkArtworkPostDetails from "./screens/DarkArtworkPostDetails";
import DarkDiscover from "./screens/DarkDiscover";
import ShareToFeedSuccessful from "./screens/ShareToFeedSuccessful";
import DarkFinalizeArtwork from "./screens/DarkFinalizeArtwork";
import DarkDownloadArtwork from "./screens/DarkDownloadArtwork";
import DarkEditInput from "./screens/DarkEditInput";
import DarkEraseObject from "./screens/DarkEraseObject";
import DarkEditArtwork1 from "./screens/DarkEditArtwork1";
import AsyncStorage from "@react-native-async-storage/async-storage";
import i18n from "./i18n";
import ChatBot from "./screens/ChatBot";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { I18nextProvider } from "react-i18next";
import { ThemeProvider } from "./context/ThemeContext";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = useState(false);
  const [isFirstLaunch, setIsFirstLaunch] = useState(null);

  useEffect(() => {
    AsyncStorage.getItem("alreadyLaunched").then((value) => {
      if (value === null) {
        AsyncStorage.setItem("alreadyLaunched", "true");
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false);
      }
    });
    setTimeout(() => {
      setHideSplashScreen(true);
    }, 3000);
  }, []);

  return (
    <>
      <ThemeProvider>
        <NavigationContainer>
          <I18nextProvider i18n={i18n}>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
              <Stack.Screen name="SplashScreen" component={SplashScreen} />
              {isFirstLaunch && (
                <Stack.Screen name="Walkthrough" component={Walkthrough} />
              )}
              <Stack.Screen
                name="ChatBot"
                component={ChatBot}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="DarkEditArtwork1"
                component={DarkEditArtwork1}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="CreatePublicProfile"
                component={CreatePublicProfile}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="EnterPersonalInfoStep"
                component={EnterPersonalInfoStep}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="SignUp"
                component={SignUp}
                options={{ headerShown: false }}
              />

              <Stack.Screen
                name="CreateNewPassword"
                component={CreateNewPassword}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="OTPCodeVerification"
                component={OTPCodeVerification}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="ResetYourPassword"
                component={ResetYourPassword}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="WelcomeScreen"
                component={WelcomeScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="SignIn"
                component={SignIn}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="DarkSettingsLogoutModal"
                component={DarkSettingsLogoutModal}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="DarkSettingsAboutArtify"
                component={DarkSettingsAboutArtify}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="DarkSettingsPrivacyPolicy"
                component={DarkSettingsPrivacyPolicy}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="FollowUsOnSocialMedia"
                component={FollowUsOnSocialMedia}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="DarkSettingsLanguage"
                component={DarkSettingsLanguage}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="DarkSettingsPersonalInfo"
                component={DarkSettingsPersonalInfo}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="DarkUpgradeToProSuccessful"
                component={DarkUpgradeToProSuccessful}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="UpgradeToProSummary"
                component={UpgradeToProSummary}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="UpgradeToProChoosePlan"
                component={UpgradeToProChoosePlan}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="DarkUpgradeToPro"
                component={DarkUpgradeToPro}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="DownloadSuccessful"
                component={DownloadSuccessful}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="DarkSettings"
                component={DarkSettings}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="DarkFollowers"
                component={DarkFollowers}
                options={{
                  headerShown: false,
                  animationTypeForReplace: "push",
                  animation: "slide_from_right",
                }}
              />
              <Stack.Screen
                name="DarkFollowing"
                component={DarkFollowing}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="DarkEditProfile"
                component={DarkEditProfile}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="DarkProfileFullPage"
                component={DarkProfileFullPage}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="SIgninSuccessful"
                component={SIgninSuccessful}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="DarkBatchArtGeneratorFina"
                component={DarkBatchArtGeneratorFina}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="DarkBatchArtGeneratorGene"
                component={DarkBatchArtGeneratorGene}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="DarkBatchArtGeneratorFill"
                component={DarkBatchArtGeneratorFill}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="GeneratingArtwork"
                component={GeneratingArtwork}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="DarkLogoGenerator"
                component={DarkLogoGenerator}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="RecolorImagesUploadPhoto"
                component={RecolorImagesUploadPhoto}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="DarkImageToPaintingUpload"
                component={DarkImageToPaintingUpload}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="DarkSketchToImagesUpload"
                component={DarkSketchToImagesUpload}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="RealisticArtUploadPhoto"
                component={RealisticArtUploadPhoto}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="FinalizeArtwork"
                component={FinalizeArtwork}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="PhotoToAnimeUploadPhoto"
                component={PhotoToAnimeUploadPhoto}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="UpscalePhotoUpload"
                component={UpscalePhotoUpload}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="BackgroundRemovalPhotoUpload"
                component={BackgroundRemovalPhotoUpload}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="DarkAnimeGenerator"
                component={DarkAnimeGenerator}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="DarkAIToolbox"
                component={DarkAIToolbox}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="ReportingSuccessful"
                component={ReportingSuccessful}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="DarkReport"
                component={DarkReport}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="RemixModal"
                component={RemixModal}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="DarkArtworkPostDetails"
                component={DarkArtworkPostDetails}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="DarkDiscover"
                component={DarkDiscover}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="ShareToFeedSuccessful"
                component={ShareToFeedSuccessful}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="DarkFinalizeArtwork"
                component={DarkFinalizeArtwork}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="DarkDownloadArtwork"
                component={DarkDownloadArtwork}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="DarkEditInput"
                component={DarkEditInput}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="DarkEraseObject"
                component={DarkEraseObject}
                options={{ headerShown: false }}
              />
            </Stack.Navigator>
          </I18nextProvider>
        </NavigationContainer>
      </ThemeProvider>
    </>
  );
};
export default App;
