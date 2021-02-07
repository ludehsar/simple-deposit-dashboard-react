export interface IThemeProps {
  primary: string;
  secondary: string;
  textColor: string;
  header: string;
  headerNumber: string;
  activeMenu: string;
  switchWidth: string;
  switchHeight: string;
  switchPadding: string;
  colorContrastLow: string;
  colorWhite: string;
  switchColorPrimary: string;
  switchAnimationDuration: string;
  gradient: string;
  colorGreen: string;
  colorGray: string;
}

const globalTheme = {
  switchWidth: "40px",
  switchHeight: "20px",
  switchPadding: "3px",
  colorContrastLow: "#D3D3D4",
  colorWhite: "#FFF",
  switchColorPrimary: "#302C40",
  switchAnimationDuration: "0.2s",
  gradient:
    "linear-gradient(122deg, rgba(128, 74, 216, 1) 0%, rgba(98, 75, 217, 1) 100%)",
  colorGreen: "#5DC399",
  colorGray: "#ADADAD",
};

export const lightTheme: IThemeProps = {
  primary: "#FFF",
  secondary: "#F8F8F8",
  textColor: "#585280",
  header: "#585280",
  headerNumber: "#FFF",
  activeMenu: "#585280",
  ...globalTheme,
};

export const darkTheme: IThemeProps = {
  primary: "#302C40",
  secondary: "#2C2839",
  textColor: "#FFF",
  header: "#FFF",
  headerNumber: "#585280",
  activeMenu: "#FFF",
  ...globalTheme,
};
