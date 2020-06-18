import React from "react";
import { useNavigation } from "../navigation/hooks";
import { BottomNavigationBar } from "@hansgx/cubes";

export interface MyAppBottomNavigationProps {
  current: "MoneyScreen" | "ExploreScreen" | "ProfileScreen";
}

export const MyAppBottomNavigation: React.FC<MyAppBottomNavigationProps> = ({
  current,
}) => {
  const navigate = useNavigation();

  return (
    <BottomNavigationBar>
      <BottomNavigationBar.Tab
        icon="money"
        onClick={() => navigate.to("MoneyScreen")}
        selected={current === "MoneyScreen"}
      />
      <BottomNavigationBar.Tab
        icon="search"
        onClick={() => navigate.to("ExploreScreen")}
        selected={current === "ExploreScreen"}
      />
      <BottomNavigationBar.Tab
        icon="profile"
        onClick={() => navigate.to("ProfileScreen")}
        selected={current === "ProfileScreen"}
      />
    </BottomNavigationBar>
  );
};
