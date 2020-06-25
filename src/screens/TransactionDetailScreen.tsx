import React from "react";
import { DisplayText, Screen, TopBar } from "@trampoline/cubes";

export interface TransactionDetailScreenProps {
  id: string;
}

export const TransactionDetailScreen: React.FC<TransactionDetailScreenProps> = ({
  id,
}) => (
  <Screen>
    <TopBar title="Transaction Detail" />
    <Screen.Content padding="medium">
      <DisplayText>ID: {id}</DisplayText>
    </Screen.Content>
  </Screen>
);
