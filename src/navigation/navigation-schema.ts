import { MoneyScreen } from "../screens/MoneyScreen";
import { ExploreScreen } from "../screens/ExploreScreen";
import { ProfileScreen } from "../screens/ProfileScreen";
import { TransactionDetailScreen } from "../screens/TransactionDetailScreen";
import { NavigationSchema } from "@hansgx/cubes/dist/navigation";

export const navigationSchema = {
  switch: [
    { stack: [{ MoneyScreen }, { TransactionDetailScreen }] },
    { ExploreScreen },
    { ProfileScreen },
  ],
} as const;

navigationSchema as NavigationSchema; // Simply assert it is a NavigationSchema
