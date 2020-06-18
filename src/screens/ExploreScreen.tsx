import React from "react";
import { DisplayText, Screen, TopBar } from "@hansgx/cubes";
import { MyAppBottomNavigation } from "../components/MyAppBottomNavigation";

export const ExploreScreen: React.FC = () => (
  <Screen>
    <TopBar iconStart="none" />
    <Screen.Content padding="medium">
      <DisplayText>Explore</DisplayText>
    </Screen.Content>
    <MyAppBottomNavigation current="ExploreScreen" />
  </Screen>
);
