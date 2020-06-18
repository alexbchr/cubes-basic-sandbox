import React from "react";
import {
  DisplayText,
  Screen,
  TopBar,
  Button,
  BottomNavigationBar,
} from "@hansgx/cubes";
import { MyAppBottomNavigation } from "../components/MyAppBottomNavigation";
import { useNavigation } from "../navigation/hooks";

export const MoneyScreen: React.FC = () => {
  const navigate = useNavigation();

  return (
    <Screen>
      <TopBar iconStart="none" />
      <Screen.Content padding="medium" space="medium">
        <DisplayText>Money</DisplayText>
        <Button
          onClick={() => navigate.to("TransactionDetailScreen", { id: "ABC" })}
        >
          Go to transaction
        </Button>
      </Screen.Content>
      <MyAppBottomNavigation current="MoneyScreen" />
    </Screen>
  );
};
