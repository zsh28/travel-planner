//Navigation Types

import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type StackScreens = {
  Home: undefined;
  Settings: undefined;
};

export type HomePropsType = NativeStackScreenProps<StackScreens, "Home">;
export type SettingsPropsType = NativeStackScreenProps<
  StackScreens,
  "Settings"
>;

//Header Types
export interface HeaderProp {
  headerTitle: string;
}
export interface footerProp {
  footerTitle: string;
}
