import React from "react";
import { DisplayText, Screen, TopBar } from "@trampoline/cubes";
import { MyAppBottomNavigation } from "../components/MyAppBottomNavigation";

export const ProfileScreen: React.FC = () => (
  <Screen>
    <TopBar iconStart="none" />
    <Screen.Content padding="medium">
      <DisplayText>Profile</DisplayText>
    </Screen.Content>
    <MyAppBottomNavigation current="ProfileScreen" />
  </Screen>
);
