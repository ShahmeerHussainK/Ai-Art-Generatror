import { Dimensions } from "react-native";


const { width, height } = Dimensions.get("window");

const scaleFactor =width * 0.0019;

export const LightTheme = {
  background: "#fff",
  text: "#000",
  promptbackground: "#eee",
  icontext: "#6949ff",
  canceltext: "#6949ff",
  tintColor: 'black',
  text1: "#fff",
  background1: "#181a20",
};

export const DarkTheme = {
  background1: "#fff",
  background: "#181a20",
  text: "#fff",
  text1: "#000",
  promptbackground: "#23252B",
  icontext: "#fff",
  canceltext: "white",
  tintColor: 'white',
};

/* fonts */
export const FontFamily = {
  bodyMediumSemibold: "Urbanist-SemiBold",
  bodyXSmallBold: "Urbanist-Bold",
  bodyXSmallMedium: "Urbanist-Medium",
  bodySmallRegular: "Urbanist-Regular",
  interRegular: "Inter-Regular",
  sFProText: "SF Pro Text",
};
/* font sizes */
export const FontSize = {
  bodyLargeBold_size: 16 * scaleFactor,
  bodyXSmallMedium_size: 10 * scaleFactor,
  bodyMediumMedium_size: 14 * scaleFactor,
  bodyXLargeBold_size: 18 * scaleFactor,
  h4Bold_size: 24 * scaleFactor,
  h5Semibold_size: 20 * scaleFactor,
  h3Bold_size: 32 * scaleFactor,
  h2Bold_size: 40 * scaleFactor,
  bodySmallRegular_size: 12 * scaleFactor,
  size_3xl_5: 23 * scaleFactor,
};

/* Colors */
export const Color = {
  light: LightTheme,
  dark: DarkTheme,
  greyscale50: "#fafafa",
  colorGray_100: "#757575",
  colorGray_200: "#262a35",
  darkDark3: "#1f222a",
  greyscale900: "#212121",
  colorGray_300: "#1e2025",
  darkDarkbg: "#181a20",
  colorGray_400: "rgba(9, 16, 29, 0.6)",
  colorGray_500: "rgba(24, 26, 32, 0.85)",
  alertsStatusButtonDisabled: "#543acc",
  transparentBlue: "rgba(35, 93, 255, 0.08)",
  greyscale500: "#9e9e9e",
  primary900: "#6949ff",
  transparentPurple: "rgba(105, 73, 255, 0.08)",
  greyscale300: "#e0e0e0",
  colorDarkslategray_100: "#424242",
  colorDarkslategray_200: "#35383f",
  colorDimgray: "#616161",
  alertsStatusError: "#f75555",
  colorTomato_100: "#ee2e24",
  othersPink: "#ea1e61",
  transparentRed: "rgba(245, 72, 74, 0.08)",
  transparentBrown: "rgba(164, 99, 77, 0.08)",
  transparentGreen: "rgba(23, 206, 146, 0.08)",
  colorDeepskyblue: "#1c9dd9",
  skyWhite: "#fff",
  colorOrangered: "#ff4500",
  colorRoyalblue: "#5869eb",
  colorCornflowerblue: "#1d9bf0",
  primary50: "#f0edff",
};
/* Paddings */
export const Padding = {
  p_base: 16,
  p_5xs: 8,
  p_13xl: 32,
  p_5xl: 24,
  p_xs: 12,
  p_xl: 20,
  p_8xs: 5,
  p_9xs: 4,
  p_17xl: 36,
  p_21xl: 40,
  p_7xs: 6,
  p_12xs: 1,
  p_lg: 18,
  p_111xl: 130,
  p_9xl: 28,
  p_61xl: 80,
};
/* border radiuses */
export const Border = {
  br_81xl: 100,
  br_xs: 12,
  br_981xl: 1000,
  br_341xl: 360,
  br_9xl: 28,
  br_base: 16,
  br_5xl: 24,
  br_3xs: 10,
  br_xl: 20,
  br_5xs: 8,
  br_7xs: 6,
  br_8xs_6: 5,
};
